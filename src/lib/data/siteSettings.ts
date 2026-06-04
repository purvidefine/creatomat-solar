import { client, isSanityConfigured } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
}

export interface SiteSettings {
  contact: ContactInfo;
  socialLinks: { label: string; href: string }[];
  navLinks: { label: string; href: string }[];
  companyName: string;
  tagline: string;
}

const STATIC_SETTINGS: SiteSettings = {
  contact: CONTACT_INFO,
  socialLinks: SOCIAL_LINKS,
  navLinks: NAV_LINKS,
  companyName: "Creatomat Private Limited",
  tagline: "Engineering India's Solar Future",
};

export async function fetchSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured) return STATIC_SETTINGS;
  try {
    const data = await client.fetch(SITE_SETTINGS_QUERY, {}, { next: { tags: ["siteSettings"] } });
    if (!data) return STATIC_SETTINGS;
    return {
      contact: data.contact ?? CONTACT_INFO,
      socialLinks: data.socialLinks ?? SOCIAL_LINKS,
      navLinks: data.navLinks ?? NAV_LINKS,
      companyName: data.companyName ?? STATIC_SETTINGS.companyName,
      tagline: data.tagline ?? STATIC_SETTINGS.tagline,
    };
  } catch {
    return STATIC_SETTINGS;
  }
}
