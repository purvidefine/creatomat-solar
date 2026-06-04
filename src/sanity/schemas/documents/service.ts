import { defineField, defineType } from "sanity";

const keyValueField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      {
        type: "object",
        fields: [
          { name: "key", title: "Key", type: "string" },
          { name: "value", title: "Value", type: "string" },
        ],
        preview: { select: { title: "key", subtitle: "value" } },
      },
    ],
  });

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string", options: { list: ["Automation", "Manufacturing", "Energy"] } }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "heroDescription", title: "Hero Description", type: "text", rows: 3 }),
    defineField({ name: "icon", title: "Icon (Lucide name)", type: "string" }),
    defineField({ name: "color", title: "Color (Tailwind gradient class)", type: "string" }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{ type: "object", fields: [{ name: "value", title: "Value", type: "string" }, { name: "label", title: "Label", type: "string" }], preview: { select: { title: "value", subtitle: "label" } } }],
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "object", fields: [{ name: "title", title: "Title", type: "string" }, { name: "description", title: "Description", type: "text", rows: 2 }, { name: "icon", title: "Icon (Lucide name)", type: "string" }], preview: { select: { title: "title" } } }],
    }),
    defineField({
      name: "process",
      title: "Process Steps",
      type: "array",
      of: [{ type: "object", fields: [{ name: "step", title: "Step Number", type: "number" }, { name: "title", title: "Title", type: "string" }, { name: "description", title: "Description", type: "text", rows: 2 }], preview: { select: { title: "title", subtitle: "step" } } }],
    }),
    defineField({ name: "useCases", title: "Use Cases", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "relatedProjects", title: "Related Projects", type: "array", of: [{ type: "reference", to: [{ type: "project" }] }] }),
    defineField({ name: "relatedProducts", title: "Related Products", type: "array", of: [{ type: "reference", to: [{ type: "product" }] }] }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [{ type: "object", fields: [{ name: "question", title: "Question", type: "string" }, { name: "answer", title: "Answer", type: "text", rows: 3 }], preview: { select: { title: "question" } } }],
    }),
  ],
  preview: { select: { title: "title", subtitle: "category" } },
});
