import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectsPage",
  title: "Projects Page",
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
    defineField({
      name: "portfolioStats",
      title: "Portfolio Stats",
      description: "Numbers shown in the stats bar below the hero",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "value", title: "Value (number)", type: "number" },
          { name: "suffix", title: "Suffix (e.g. +, MW+, %)", type: "string" },
          { name: "label", title: "Label", type: "string" },
        ],
        preview: { select: { title: "label" } },
      }],
    }),
    defineField({
      name: "cta",
      title: "Bottom CTA",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "description", title: "Description", type: "text", rows: 2 },
        { name: "buttonText", title: "Button Text", type: "string" },
      ],
    }),
    defineField({ name: "seoTitle", title: "SEO — Page Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO — Meta Description", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Projects Page" }) },
});
