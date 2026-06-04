import { fetchAboutPage } from "@/lib/data/aboutPage";
import AboutClient from "./_AboutClient";

export async function generateMetadata() {
  const data = await fetchAboutPage();
  return {
    title: data.seoTitle ?? "About Us | Creatomat Engineering",
    description: data.seoDescription ?? undefined,
  };
}

export default async function AboutPage() {
  const data = await fetchAboutPage();
  return <AboutClient data={data} />;
}
