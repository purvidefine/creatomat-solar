import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "service", title: "Service", type: "reference", to: [{ type: "service" }] }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 2 }),
    defineField({ name: "fullDescription", title: "Full Description", type: "text", rows: 5 }),
    defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [{ type: "object", fields: [{ name: "key", title: "Key", type: "string" }, { name: "value", title: "Value", type: "string" }], preview: { select: { title: "key", subtitle: "value" } } }],
    }),
    defineField({ name: "applications", title: "Applications", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "relatedProducts", title: "Related Products", type: "array", of: [{ type: "reference", to: [{ type: "product" }] }] }),
    defineField({ name: "image", title: "Product Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "image" } },
});
