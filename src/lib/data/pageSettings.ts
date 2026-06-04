import { client, isSanityConfigured } from "@/sanity/lib/client";
import {
  SERVICES_PAGE_QUERY,
  PRODUCTS_PAGE_QUERY,
  PROJECTS_PAGE_QUERY,
} from "@/sanity/lib/queries";

export interface PageHero { overline?: string; title?: string; description?: string }
export interface PageCta { heading?: string; description?: string; buttonText?: string }
export interface PortfolioStat { value: number; suffix?: string; label: string }

export interface ServicesPageData {
  hero: PageHero;
  cta: PageCta;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProductsPageData {
  hero: PageHero;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProjectsPageData {
  hero: PageHero;
  portfolioStats: PortfolioStat[];
  cta: PageCta;
  seoTitle?: string;
  seoDescription?: string;
}

// ─── Defaults ────────────────────────────────────────────────────────────────

const DEFAULT_SERVICES: ServicesPageData = {
  hero: {
    overline: "Our Services",
    title: "Engineering Solutions That Power Progress",
    description: "From solar energy systems to factory automation — we deliver comprehensive, turnkey solutions built for performance and reliability.",
  },
  cta: {
    heading: "Need a Custom Solution?",
    description: "Every project is unique. Tell us about your requirements and we'll engineer the perfect solution.",
    buttonText: "Discuss Your Project",
  },
};

const DEFAULT_PRODUCTS: ProductsPageData = {
  hero: {
    overline: "Technical Products",
    title: "Products & Systems",
    description: "Explore our range of electrical panels, automation systems, smart home devices, and special purpose machines.",
  },
};

const DEFAULT_PROJECTS: ProjectsPageData = {
  hero: {
    overline: "Our Projects",
    title: "Projects That Power Progress",
    description: "Real installations, real results. Browse our portfolio of completed solar, automation, and engineering projects across India.",
  },
  portfolioStats: [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "MW+", label: "Solar Installed" },
    { value: 15, suffix: "+", label: "Cities Served" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ],
  cta: {
    heading: "Your Project Could Be Next",
    description: "Join 500+ businesses that have trusted Creatomat to power their operations.",
    buttonText: "Start Your Project",
  },
};

// ─── Fetch functions ──────────────────────────────────────────────────────────

export async function fetchServicesPage(): Promise<ServicesPageData> {
  if (!isSanityConfigured) return DEFAULT_SERVICES;
  try {
    const data = await client.fetch(SERVICES_PAGE_QUERY, {}, { next: { tags: ["servicesPage"] } });
    if (!data) return DEFAULT_SERVICES;
    return {
      hero: data.hero ?? DEFAULT_SERVICES.hero,
      cta: data.cta ?? DEFAULT_SERVICES.cta,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
    };
  } catch { return DEFAULT_SERVICES; }
}

export async function fetchProductsPage(): Promise<ProductsPageData> {
  if (!isSanityConfigured) return DEFAULT_PRODUCTS;
  try {
    const data = await client.fetch(PRODUCTS_PAGE_QUERY, {}, { next: { tags: ["productsPage"] } });
    if (!data) return DEFAULT_PRODUCTS;
    return {
      hero: data.hero ?? DEFAULT_PRODUCTS.hero,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
    };
  } catch { return DEFAULT_PRODUCTS; }
}

export async function fetchProjectsPage(): Promise<ProjectsPageData> {
  if (!isSanityConfigured) return DEFAULT_PROJECTS;
  try {
    const data = await client.fetch(PROJECTS_PAGE_QUERY, {}, { next: { tags: ["projectsPage"] } });
    if (!data) return DEFAULT_PROJECTS;
    return {
      hero: data.hero ?? DEFAULT_PROJECTS.hero,
      portfolioStats: data.portfolioStats?.length ? data.portfolioStats : DEFAULT_PROJECTS.portfolioStats,
      cta: data.cta ?? DEFAULT_PROJECTS.cta,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
    };
  } catch { return DEFAULT_PROJECTS; }
}
