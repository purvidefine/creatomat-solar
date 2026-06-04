import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        { name: "address", title: "Address", type: "string" },
        { name: "phone", title: "Phone", type: "string" },
        { name: "email", title: "Email", type: "string" },
        { name: "whatsapp", title: "WhatsApp Number (with country code, no +)", type: "string" },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{ type: "object", fields: [{ name: "label", title: "Label", type: "string" }, { name: "href", title: "URL", type: "url" }], preview: { select: { title: "label" } } }],
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [{ type: "object", fields: [{ name: "label", title: "Label", type: "string" }, { name: "href", title: "Href", type: "string" }], preview: { select: { title: "label" } } }],
    }),
  ],
  preview: { select: { title: "companyName" } },
});
