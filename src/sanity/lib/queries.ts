// ─── Helpers ────────────────────────────────────────────────────────────────

const specsProjection = `specifications[]{key, value}`;

// ─── Site Settings ──────────────────────────────────────────────────────────

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  companyName,
  tagline,
  contact,
  socialLinks,
  clients,
  navLinks
}`;

// ─── Page Singletons ─────────────────────────────────────────────────────────

export const SERVICES_PAGE_QUERY = `*[_type == "servicesPage"][0]{ hero, cta, seoTitle, seoDescription }`;
export const PRODUCTS_PAGE_QUERY = `*[_type == "productsPage"][0]{ hero, seoTitle, seoDescription }`;
export const PROJECTS_PAGE_QUERY = `*[_type == "projectsPage"][0]{ hero, portfolioStats, cta, seoTitle, seoDescription }`;

// ─── About Page ─────────────────────────────────────────────────────────────

export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0]{
  hero,
  story,
  missionVision,
  teamStats,
  valuesSection,
  milestonesSection,
  cta,
  seoTitle,
  seoDescription
}`;

// ─── Home Page ──────────────────────────────────────────────────────────────

export const HOME_PAGE_QUERY = `*[_type == "homePage"][0]{
  hero,
  trustStrip,
  calculator,
  about,
  servicesSection,
  whyChooseUsSection,
  industriesSection,
  processSection,
  projectsSection,
  benefitsSection,
  testimonialsSection,
  faqSection,
  contactCtaSection,
  seoTitle,
  seoDescription
}`;

// ─── Testimonials ────────────────────────────────────────────────────────────

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc){
  _id,
  quote,
  name,
  designation,
  company
}`;

// ─── FAQs ────────────────────────────────────────────────────────────────────

export const FAQS_QUERY = `*[_type == "faq"] | order(order asc){
  _id,
  question,
  answer
}`;

// ─── Services ────────────────────────────────────────────────────────────────

export const ALL_SERVICES_QUERY = `*[_type == "service"] | order(_createdAt asc){
  "slug": slug.current,
  category,
  title,
  tagline,
  heroDescription,
  icon,
  color,
  stats,
  features,
  process,
  useCases,
  "relatedProjectSlugs": relatedProjects[]->slug.current,
  "relatedProductSlugs": relatedProducts[]->slug.current,
  faq
}`;

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0]{
  "slug": slug.current,
  category,
  title,
  tagline,
  heroDescription,
  icon,
  color,
  stats,
  features,
  process,
  useCases,
  "relatedProjectSlugs": relatedProjects[]->slug.current,
  "relatedProductSlugs": relatedProducts[]->slug.current,
  faq
}`;

export const ALL_SERVICE_SLUGS_QUERY = `*[_type == "service"].slug.current`;

// ─── Products ────────────────────────────────────────────────────────────────

export const ALL_PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt asc){
  "slug": slug.current,
  title,
  category,
  "serviceSlug": service->slug.current,
  shortDescription,
  fullDescription,
  features,
  ${specsProjection},
  applications,
  "relatedProductSlugs": relatedProducts[]->slug.current,
  image,
  gallery
}`;

export const PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  category,
  "serviceSlug": service->slug.current,
  shortDescription,
  fullDescription,
  features,
  ${specsProjection},
  applications,
  "relatedProductSlugs": relatedProducts[]->slug.current,
  image,
  gallery
}`;

export const ALL_PRODUCT_SLUGS_QUERY = `*[_type == "product"].slug.current`;

// ─── Projects ────────────────────────────────────────────────────────────────

export const ALL_PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt asc){
  "slug": slug.current,
  title,
  category,
  "serviceSlug": service->slug.current,
  location,
  industry,
  capacity,
  year,
  description,
  challenge,
  solution,
  results,
  ${specsProjection},
  testimonial,
  "relatedProjectSlugs": relatedProjects[]->slug.current,
  gallery,
  featured
}`;

export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  category,
  "serviceSlug": service->slug.current,
  location,
  industry,
  capacity,
  year,
  description,
  challenge,
  solution,
  results,
  ${specsProjection},
  testimonial,
  "relatedProjectSlugs": relatedProjects[]->slug.current,
  gallery,
  featured
}`;

export const ALL_PROJECT_SLUGS_QUERY = `*[_type == "project"].slug.current`;

export const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true] | order(_createdAt asc)[0..3]{
  "slug": slug.current,
  title,
  category,
  "serviceSlug": service->slug.current,
  location,
  industry,
  capacity,
  year,
  description,
  challenge,
  solution,
  results,
  ${specsProjection},
  testimonial,
  gallery,
  featured
}`;
