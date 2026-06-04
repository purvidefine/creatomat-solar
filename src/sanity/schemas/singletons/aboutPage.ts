import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [

    // ─── ① HERO ──────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "① Hero",
      type: "object",
      fields: [
        defineField({ name: "overline", title: "Overline", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
      ],
    }),

    // ─── ② STORY ─────────────────────────────────────────────────────────────
    defineField({
      name: "story",
      title: "② Our Story",
      type: "object",
      fields: [
        defineField({ name: "overline", title: "Section overline (e.g. 'Our Story')", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "paragraph1", title: "Paragraph 1", type: "text", rows: 3 }),
        defineField({ name: "paragraph2", title: "Paragraph 2", type: "text", rows: 3 }),
        defineField({
          name: "badges",
          title: "Badge labels (3 items shown below paragraphs)",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({ name: "sinceText", title: "Visual card — 'Since' text (e.g. Since 2009)", type: "string" }),
        defineField({ name: "location", title: "Visual card — Location", type: "string" }),
        defineField({ name: "floatingBadgeTitle", title: "Floating badge title (e.g. Made in India)", type: "string" }),
        defineField({ name: "floatingBadgeSubtitle", title: "Floating badge subtitle", type: "string" }),
      ],
    }),

    // ─── ③ MISSION & VISION ──────────────────────────────────────────────────
    defineField({
      name: "missionVision",
      title: "③ Mission & Vision",
      type: "object",
      fields: [
        defineField({
          name: "mission",
          title: "Mission Card",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "text", title: "Body text", type: "text", rows: 3 }),
          ],
        }),
        defineField({
          name: "vision",
          title: "Vision Card",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "text", title: "Body text", type: "text", rows: 3 }),
          ],
        }),
      ],
    }),

    // ─── ④ TEAM STATS ────────────────────────────────────────────────────────
    defineField({
      name: "teamStats",
      title: "④ Team Stats",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "value", title: "Value (number)", type: "number" }),
          defineField({ name: "suffix", title: "Suffix (e.g. +)", type: "string" }),
          defineField({ name: "label", title: "Label", type: "string" }),
        ],
        preview: { select: { title: "label" } },
      }],
    }),

    // ─── ⑤ VALUES ────────────────────────────────────────────────────────────
    defineField({
      name: "valuesSection",
      title: "⑤ Our Values",
      type: "object",
      fields: [
        defineField({ name: "overline", title: "Overline", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "items",
          title: "Values",
          type: "array",
          of: [{
            type: "object",
            fields: [
              defineField({ name: "icon", title: "Icon (Lucide name)", type: "string" }),
              defineField({ name: "title", title: "Title", type: "string" }),
              defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            ],
            preview: { select: { title: "title" } },
          }],
        }),
      ],
    }),

    // ─── ⑥ MILESTONES / TIMELINE ─────────────────────────────────────────────
    defineField({
      name: "milestonesSection",
      title: "⑥ Milestones / Our Journey",
      type: "object",
      fields: [
        defineField({ name: "overline", title: "Overline", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "items",
          title: "Milestones",
          type: "array",
          of: [{
            type: "object",
            fields: [
              defineField({ name: "year", title: "Year", type: "string" }),
              defineField({ name: "title", title: "Title", type: "string" }),
              defineField({ name: "description", title: "Description", type: "string" }),
            ],
            preview: { select: { title: "year", subtitle: "title" } },
          }],
        }),
      ],
    }),

    // ─── ⑦ CTA ───────────────────────────────────────────────────────────────
    defineField({
      name: "cta",
      title: "⑦ Bottom CTA",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({ name: "buttonText", title: "Button text", type: "string" }),
      ],
    }),

    // ─── SEO ─────────────────────────────────────────────────────────────────
    defineField({ name: "seoTitle", title: "SEO — Page Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO — Meta Description", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
