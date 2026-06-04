import { defineField, defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "question" } },
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
