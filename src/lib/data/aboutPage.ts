import { client, isSanityConfigured } from "@/sanity/lib/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";

export interface AboutValue  { icon: string; title: string; description: string }
export interface AboutMilestone { year: string; title: string; description: string }
export interface AboutTeamStat  { value: number; suffix?: string; label: string }

export interface AboutPageData {
  hero: { overline?: string; title?: string; description?: string };
  story: {
    overline?: string;
    heading?: string;
    paragraph1?: string;
    paragraph2?: string;
    badges?: string[];
    sinceText?: string;
    location?: string;
    floatingBadgeTitle?: string;
    floatingBadgeSubtitle?: string;
  };
  missionVision: {
    mission?: { title?: string; text?: string };
    vision?:  { title?: string; text?: string };
  };
  teamStats: AboutTeamStat[];
  valuesSection: { overline?: string; title?: string; items?: AboutValue[] };
  milestonesSection: { overline?: string; title?: string; items?: AboutMilestone[] };
  cta: { heading?: string; description?: string; buttonText?: string };
  seoTitle?: string;
  seoDescription?: string;
}

const STATIC: AboutPageData = {
  hero: {
    overline: "About Us",
    title: "Pioneering Engineering Excellence",
    description: "A story of innovation, precision, and purpose — built over two decades of engineering leadership.",
  },
  story: {
    overline: "Our Story",
    heading: "From a Small Workshop to India's Trusted Engineering Partner",
    paragraph1: "Creatomat Private Limited began with a simple vision — to bring world-class engineering solutions to Indian businesses. Founded in Bhilwara, Rajasthan, we started as a small automation workshop serving local industries.",
    paragraph2: "Today, we are a comprehensive engineering company specializing in solar EPC, industrial automation, and special purpose machine manufacturing with 50+ engineers delivering turnkey solutions across India.",
    badges: ["Mission-Driven", "Vision-Led", "ISO Certified"],
    sinceText: "Since 2009",
    location: "Bhilwara, Rajasthan",
    floatingBadgeTitle: "Made in India",
    floatingBadgeSubtitle: "100% Domestic Manufacturing",
  },
  missionVision: {
    mission: {
      title: "Our Mission",
      text: "To democratize access to clean energy and advanced automation for Indian businesses through precision engineering, innovation, and turnkey excellence.",
    },
    vision: {
      title: "Our Vision",
      text: "To become India's most trusted engineering partner for sustainable energy solutions — powering a cleaner, smarter, and more efficient industrial future.",
    },
  },
  teamStats: [
    { value: 50,  suffix: "+", label: "Team Members" },
    { value: 15,  suffix: "+", label: "Engineers" },
    { value: 500, suffix: "+", label: "Projects" },
    { value: 10,  suffix: "+", label: "Cities Served" },
  ],
  valuesSection: {
    overline: "Our Values",
    title: "What Drives Us Forward",
    items: [
      { icon: "Lightbulb", title: "Innovation First",      description: "Continuously pushing the boundaries of what's possible in solar and automation technology." },
      { icon: "Shield",    title: "Quality Assured",       description: "ISO certified processes ensuring every project meets global quality standards." },
      { icon: "Users",     title: "Client Partnership",    description: "We treat every project as a partnership, aligning our engineering with your goals." },
      { icon: "Target",    title: "Precision Engineering", description: "Every system designed with meticulous attention to detail and long-term performance." },
    ],
  },
  milestonesSection: {
    overline: "Our Journey",
    title: "Milestones That Matter",
    items: [
      { year: "2009", title: "Founded",          description: "Creatomat established in Bhilwara, Rajasthan" },
      { year: "2013", title: "Automation Division", description: "Expanded into industrial automation systems" },
      { year: "2016", title: "Solar EPC Launch",  description: "Entered the solar energy market with EPC services" },
      { year: "2019", title: "500+ Projects",     description: "Crossed 500 successful project deliveries" },
      { year: "2022", title: "ISO Certified",     description: "Achieved ISO 9001:2015 certification" },
      { year: "2024", title: "10MW+ Installed",   description: "Surpassed 10MW of solar capacity installed" },
    ],
  },
  cta: {
    heading: "Ready to Work With Us?",
    description: "Let's discuss how Creatomat can engineer the perfect energy solution for your business.",
    buttonText: "Start a Conversation",
  },
};

export async function fetchAboutPage(): Promise<AboutPageData> {
  if (!isSanityConfigured) return STATIC;
  try {
    const d = await client.fetch(ABOUT_PAGE_QUERY, {}, { next: { tags: ["aboutPage"] } });
    if (!d) return STATIC;
    return {
      hero:             d.hero             ?? STATIC.hero,
      story:            d.story            ?? STATIC.story,
      missionVision:    d.missionVision    ?? STATIC.missionVision,
      teamStats:        d.teamStats?.length ? d.teamStats : STATIC.teamStats,
      valuesSection:    d.valuesSection    ?? STATIC.valuesSection,
      milestonesSection: d.milestonesSection ?? STATIC.milestonesSection,
      cta:              d.cta              ?? STATIC.cta,
      seoTitle:         d.seoTitle,
      seoDescription:   d.seoDescription,
    };
  } catch {
    return STATIC;
  }
}
