import { defineField, defineType } from "sanity";

export default defineType({
  name: "productsPage",
  title: "Products Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "overline", title: "Overline", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text", rows: 2 },
      ],
    }),
    defineField({ name: "seoTitle", title: "SEO — Page Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO — Meta Description", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Products Page" }) },
});
