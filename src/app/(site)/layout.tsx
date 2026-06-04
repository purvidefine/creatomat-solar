import type { Metadata } from "next";
import { fetchSiteSettings } from "@/lib/data/siteSettings";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { client, isSanityConfigured } = await import("@/sanity/lib/client");
    const { HOME_PAGE_QUERY } = await import("@/sanity/lib/queries");
    if (isSanityConfigured) {
      const hp = await client.fetch(HOME_PAGE_QUERY, {}, { next: { tags: ["homePage"] } });
      if (hp?.seoTitle) {
        return {
          title: hp.seoTitle,
          description: hp.seoDescription ?? undefined,
        };
      }
    }
  } catch {}
  return {
    title: "Creatomat — Engineering India's Solar Future",
    description: "Custom solar solutions, automation systems & sustainable energy infrastructure — built with precision by Creatomat Private Limited.",
    keywords: ["solar energy", "solar EPC", "industrial automation", "Creatomat", "Bhilwara", "Rajasthan"],
  };
}

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await fetchSiteSettings();

  return (
    <SmoothScroll>
      <Navbar phone={settings.contact.phone} />
      <PageTransition>{children}</PageTransition>
      <Footer
        contact={settings.contact}
        socialLinks={settings.socialLinks}
        companyName={settings.companyName}
      />
      <WhatsAppButton whatsapp={settings.contact.whatsapp} />
    </SmoothScroll>
  );
}
