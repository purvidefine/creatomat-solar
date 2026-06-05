import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["solar", "automation", "spm", "home-automation"] },
    }),
    defineField({ name: "service", title: "Service", type: "reference", to: [{ type: "service" }] }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "industry", title: "Industry", type: "string" }),
    defineField({ name: "capacity", title: "Capacity", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "challenge", title: "Challenge", type: "text", rows: 3 }),
    defineField({ name: "solution", title: "Solution", type: "text", rows: 3 }),
    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [{ type: "object", fields: [{ name: "metric", title: "Metric", type: "string" }, { name: "value", title: "Value", type: "string" }], preview: { select: { title: "metric", subtitle: "value" } } }],
    }),
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [{ type: "object", fields: [{ name: "key", title: "Key", type: "string" }, { name: "value", title: "Value", type: "string" }], preview: { select: { title: "key", subtitle: "value" } } }],
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "object",
      fields: [
        { name: "quote", title: "Quote", type: "text", rows: 3 },
        { name: "name", title: "Name", type: "string" },
        { name: "designation", title: "Designation", type: "string" },
      ],
    }),
    defineField({
      name: "relatedProjects",
      title: "Related Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
      description: "Select other projects to show in the 'You might also like' section.",
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "featured", title: "Featured on Homepage", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "title", subtitle: "category" } },
});
