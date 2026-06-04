import PageHero from "@/components/ui/PageHero";
import { fetchSiteSettings } from "@/lib/data/siteSettings";
import ContactClient from "./_ContactClient";

export default async function ContactPage() {
  const { contact } = await fetchSiteSettings();

  return (
    <main>
      <PageHero
        overline="Contact Us"
        title="Let's Build Something Powerful Together"
        description="Get a free site assessment and custom quote within 24 hours. Our engineers are ready to design your optimal energy solution."
      />
      <ContactClient contact={contact} />
    </main>
  );
}
