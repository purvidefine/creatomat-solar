import { defineField, defineType } from "sanity";

// Helper to build a section with overline/title/description header
const headerFields = (extras: ReturnType<typeof defineField>[] = []) => [
  defineField({ name: "overline", title: "Overline (small label above title)", type: "string" }),
  defineField({ name: "title", title: "Title", type: "string" }),
  defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
  ...extras,
];

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [

    // ─── 1. HERO ──────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "① Hero",
      type: "object",
      fields: [
        defineField({ name: "badgeText", title: "Badge text", type: "string" }),
        defineField({ name: "titleLine1", title: "Title line 1", type: "string" }),
        defineField({ name: "titleHighlight", title: "Title highlight (gradient)", type: "string" }),
        defineField({ name: "titleLine3", title: "Title line 3", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle / paragraph", type: "text", rows: 2 }),
        defineField({ name: "ctaPrimaryText", title: "Primary CTA text", type: "string" }),
        defineField({ name: "ctaPrimaryHref", title: "Primary CTA link", type: "string" }),
        defineField({ name: "ctaSecondaryText", title: "Secondary CTA text", type: "string" }),
        defineField({ name: "ctaSecondaryHref", title: "Secondary CTA link", type: "string" }),
        defineField({
          name: "stats",
          title: "Stats row",
          type: "array",
          of: [{ type: "object", fields: [{ name: "value", title: "Value (number)", type: "number" }, { name: "suffix", title: "Suffix (e.g. +, MW+)", type: "string" }, { name: "label", title: "Label", type: "string" }], preview: { select: { title: "label" } } }],
        }),
      ],
    }),

    // ─── 2. TRUST STRIP ──────────────────────────────────────────────────────
    defineField({
      name: "trustStrip",
      title: "② Trust Strip (client marquee)",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Label above marquee", type: "string" }),
        defineField({
          name: "clients",
          title: "Client / Partner Names",
          description: "Names that scroll across the marquee strip.",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),

    // ─── 3. SOLAR CALCULATOR ─────────────────────────────────────────────────
    defineField({
      name: "calculator",
      title: "③ Solar Calculator",
      type: "object",
      fields: [
        defineField({ name: "badge", title: "Badge text", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({ name: "buttonText", title: "Calculate button text", type: "string" }),
      ],
    }),

    // ─── 4. ABOUT ────────────────────────────────────────────────────────────
    defineField({
      name: "about",
      title: "④ About",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow label", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "paragraph1", title: "Paragraph 1", type: "text", rows: 3 }),
        defineField({ name: "paragraph2", title: "Paragraph 2", type: "text", rows: 3 }),
        defineField({ name: "capabilities", title: "Capabilities (checklist)", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "yearsText", title: "Years badge text (e.g. 15+)", type: "string" }),
        defineField({ name: "yearsLabel", title: "Years badge label", type: "string" }),
      ],
    }),

    // ─── 5. SERVICES ─────────────────────────────────────────────────────────
    defineField({
      name: "servicesSection",
      title: "⑤ Services",
      type: "object",
      fields: [
        ...headerFields(),
        defineField({
          name: "items",
          title: "Service cards",
          type: "array",
          of: [{ type: "object", fields: [{ name: "title", title: "Title", type: "string" }, { name: "description", title: "Description", type: "text", rows: 2 }, { name: "icon", title: "Icon (Lucide name)", type: "string" }, { name: "href", title: "Link", type: "string" }], preview: { select: { title: "title" } } }],
        }),
      ],
    }),

    // ─── 6. WHY CHOOSE US ────────────────────────────────────────────────────
    defineField({
      name: "whyChooseUsSection",
      title: "⑥ Why Choose Us",
      type: "object",
      fields: [
        ...headerFields([
          defineField({ name: "bigStatNumber", title: "Big stat number (e.g. 500+)", type: "string" }),
          defineField({ name: "bigStatLabel", title: "Big stat label", type: "string" }),
        ]),
        defineField({
          name: "items",
          title: "Feature items",
          type: "array",
          of: [{ type: "object", fields: [{ name: "title", title: "Title", type: "string" }, { name: "description", title: "Description", type: "string" }, { name: "icon", title: "Icon (Lucide name)", type: "string" }], preview: { select: { title: "title" } } }],
        }),
      ],
    }),

    // ─── 7. INDUSTRIES ───────────────────────────────────────────────────────
    defineField({
      name: "industriesSection",
      title: "⑦ Industries",
      type: "object",
      fields: [
        ...headerFields(),
        defineField({
          name: "items",
          title: "Industry items",
          type: "array",
          of: [{ type: "object", fields: [{ name: "name", title: "Name", type: "string" }, { name: "description", title: "Description", type: "string" }], preview: { select: { title: "name" } } }],
        }),
      ],
    }),

    // ─── 8. PROCESS ──────────────────────────────────────────────────────────
    defineField({
      name: "processSection",
      title: "⑧ Process / How We Work",
      type: "object",
      fields: [
        ...headerFields([
          defineField({ name: "ctaText", title: "CTA button text", type: "string" }),
        ]),
        defineField({
          name: "steps",
          title: "Process steps",
          type: "array",
          of: [{ type: "object", fields: [{ name: "step", title: "Step number", type: "number" }, { name: "title", title: "Title", type: "string" }, { name: "description", title: "Description", type: "text", rows: 2 }], preview: { select: { title: "title", subtitle: "step" } } }],
        }),
      ],
    }),

    // ─── 9. PROJECTS (homepage grid) ─────────────────────────────────────────
    defineField({
      name: "projectsSection",
      title: "⑨ Projects (homepage)",
      description: "Header text only — project cards come from the Projects documents with 'Featured' checked.",
      type: "object",
      fields: headerFields([
        defineField({ name: "viewAllText", title: "View all link text", type: "string" }),
      ]),
    }),

    // ─── 10. BENEFITS ────────────────────────────────────────────────────────
    defineField({
      name: "benefitsSection",
      title: "⑩ Benefits",
      type: "object",
      fields: [
        ...headerFields([
          defineField({ name: "bottomText", title: "Bottom paragraph", type: "text", rows: 2 }),
          defineField({ name: "ctaText", title: "CTA button text", type: "string" }),
        ]),
        defineField({
          name: "items",
          title: "Benefit stats",
          type: "array",
          of: [{ type: "object", fields: [{ name: "value", title: "Value", type: "string" }, { name: "suffix", title: "Suffix (optional)", type: "string" }, { name: "label", title: "Label", type: "string" }], preview: { select: { title: "label" } } }],
        }),
      ],
    }),

    // ─── 11. TESTIMONIALS ────────────────────────────────────────────────────
    defineField({
      name: "testimonialsSection",
      title: "⑪ Testimonials",
      description: "Header text only — testimonial content comes from Testimonials documents.",
      type: "object",
      fields: [
        defineField({ name: "overline", title: "Overline", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
      ],
    }),

    // ─── 12. FAQ ─────────────────────────────────────────────────────────────
    defineField({
      name: "faqSection",
      title: "⑫ FAQ",
      description: "Header text only — FAQ items come from FAQ documents.",
      type: "object",
      fields: headerFields([
        defineField({ name: "ctaText", title: "CTA button text", type: "string" }),
      ]),
    }),

    // ─── 13. CONTACT CTA ─────────────────────────────────────────────────────
    defineField({
      name: "contactCtaSection",
      title: "⑬ Contact CTA",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({ name: "primaryButtonText", title: "Primary button text", type: "string" }),
        defineField({ name: "secondaryButtonText", title: "Secondary button text (phone)", type: "string" }),
      ],
    }),

    // ─── SEO ─────────────────────────────────────────────────────────────────
    defineField({ name: "seoTitle", title: "SEO — Page Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO — Meta Description", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
