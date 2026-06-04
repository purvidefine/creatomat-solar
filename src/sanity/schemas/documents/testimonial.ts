import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "designation", title: "Designation", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "name", subtitle: "company" } },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
