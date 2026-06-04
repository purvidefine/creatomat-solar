import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";

const SINGLETONS = [
  "siteSettings",
  "homePage",
  "aboutPage",
  "servicesPage",
  "productsPage",
  "projectsPage",
];

export default defineConfig({
  name: "creatomat",
  title: "Creatomat CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // ─── Site-wide settings ──────────────────────────────────────
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),

            S.divider(),

            // ─── Page content ─────────────────────────────────────────────
            S.listItem().title("🏠 Home Page").id("homePage")
              .child(S.document().schemaType("homePage").documentId("homePage")),
            S.listItem().title("👥 About Page").id("aboutPage")
              .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
            S.listItem().title("⚙️ Services Page").id("servicesPage")
              .child(S.document().schemaType("servicesPage").documentId("servicesPage")),
            S.listItem().title("📦 Products Page").id("productsPage")
              .child(S.document().schemaType("productsPage").documentId("productsPage")),
            S.listItem().title("🏗️ Projects Page").id("projectsPage")
              .child(S.document().schemaType("projectsPage").documentId("projectsPage")),

            S.divider(),

            // ─── Content documents ────────────────────────────────────────
            S.listItem().title("Services").child(S.documentTypeList("service").title("Services")),
            S.listItem().title("Products").child(S.documentTypeList("product").title("Products")),
            S.listItem().title("Projects").child(S.documentTypeList("project").title("Projects")),

            S.divider(),

            S.listItem().title("Testimonials").child(S.documentTypeList("testimonial").title("Testimonials")),
            S.listItem().title("FAQs").child(S.documentTypeList("faq").title("FAQs")),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter((item) => !SINGLETONS.includes(item.templateId));
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (SINGLETONS.includes(schemaType)) {
        return prev.filter(({ action }) => action !== "duplicate" && action !== "unpublish");
      }
      return prev;
    },
  },
});
