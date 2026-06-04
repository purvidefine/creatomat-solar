import { client, isSanityConfigured } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY, SITE_SETTINGS_QUERY, TESTIMONIALS_QUERY, FAQS_QUERY } from "@/sanity/lib/queries";
import { fetchFeaturedProjects } from "@/lib/data/projects";
import { CONTACT_INFO, STATS, SERVICES, WHY_CHOOSE_US, INDUSTRIES, BENEFITS, TESTIMONIALS, FAQS, CLIENTS } from "@/lib/constants";

import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Benefits from "@/components/sections/Benefits";
import SolarCalculator from "@/components/sections/SolarCalculator";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";

async function getSanityHomeData() {
  if (!isSanityConfigured) return null;
  try {
    const [hp, ss, testimonials, faqs] = await Promise.all([
      client.fetch(HOME_PAGE_QUERY, {}, { next: { tags: ["homePage"] } }),
      client.fetch(SITE_SETTINGS_QUERY, {}, { next: { tags: ["siteSettings"] } }),
      client.fetch(TESTIMONIALS_QUERY, {}, { next: { tags: ["testimonial"] } }),
      client.fetch(FAQS_QUERY, {}, { next: { tags: ["faq"] } }),
    ]);
    return { hp, ss, testimonials, faqs };
  } catch {
    return null;
  }
}

export default async function Home() {
  const [sanityData, featuredProjects] = await Promise.all([
    getSanityHomeData(),
    fetchFeaturedProjects(),
  ]);

  const hp = sanityData?.hp;
  const ss = sanityData?.ss;

  // ① Hero
  const hero  = hp?.hero ?? null;
  const stats = hp?.hero?.stats?.length ? hp.hero.stats : STATS;

  // ② Trust Strip
  const clients    = hp?.trustStrip?.clients?.length ? hp.trustStrip.clients : CLIENTS;
  const trustLabel = hp?.trustStrip?.label;

  // ③ Solar Calculator
  const calcHeader = hp?.calculator ?? null;

  // ④ About
  const about = hp?.about ?? null;

  // ⑤ Services
  const ss_sec = hp?.servicesSection;
  const services = ss_sec?.items?.length ? ss_sec.items : SERVICES;
  const servicesHeader = ss_sec ?? null;

  // ⑥ Why Choose Us
  const wcu_sec = hp?.whyChooseUsSection;
  const whyChooseUs = wcu_sec?.items?.length ? wcu_sec.items : WHY_CHOOSE_US;
  const wcuHeader = wcu_sec ?? null;

  // ⑦ Industries
  const ind_sec = hp?.industriesSection;
  const industries = ind_sec?.items?.length ? ind_sec.items : INDUSTRIES;
  const indHeader = ind_sec ?? null;

  // ⑧ Process
  const proc_sec = hp?.processSection;
  const processSteps = proc_sec?.steps?.length ? proc_sec.steps : undefined;
  const procHeader = proc_sec ?? null;

  // ⑨ Projects
  const projHeader = hp?.projectsSection ?? null;

  // ⑩ Benefits
  const ben_sec = hp?.benefitsSection;
  const benefits = ben_sec?.items?.length ? ben_sec.items : BENEFITS;
  const benHeader = ben_sec ?? null;

  // ⑪ Testimonials
  const testimonials  = sanityData?.testimonials?.length ? sanityData.testimonials : TESTIMONIALS;
  const testHeader = hp?.testimonialsSection ?? null;

  // ⑫ FAQ
  const faqs      = sanityData?.faqs?.length ? sanityData.faqs : FAQS;
  const faqHeader = hp?.faqSection ?? null;

  // ⑬ Contact CTA
  const contact    = ss?.contact ?? CONTACT_INFO;
  const ctaHeader  = hp?.contactCtaSection ?? null;

  return (
    <main>
      <Hero stats={stats} hero={hero} />
      <TrustStrip clients={clients} label={trustLabel} />
      <SolarCalculator header={calcHeader} />
      <About about={about} />
      <Services services={services} header={servicesHeader} />
      <WhyChooseUs features={whyChooseUs} header={wcuHeader} />
      <Industries industries={industries} header={indHeader} />
      <Process steps={processSteps} header={procHeader} />
      <Projects projects={featuredProjects} header={projHeader} />
      <Benefits benefits={benefits} header={benHeader} />
      <Testimonials testimonials={testimonials} header={testHeader} />
      <FAQ faqs={faqs} header={faqHeader} />
      <ContactCTA contact={contact} header={ctaHeader} />
    </main>
  );
}
