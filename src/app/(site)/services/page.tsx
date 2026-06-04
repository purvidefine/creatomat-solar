import { fetchAllServices } from "@/lib/data/services";
import { fetchServicesPage } from "@/lib/data/pageSettings";
import ServicesClient from "./_ServicesClient";

export async function generateMetadata() {
  const page = await fetchServicesPage();
  return {
    title: page.seoTitle ?? "Services | Creatomat Engineering",
    description: page.seoDescription ?? undefined,
  };
}

export default async function ServicesPage() {
  const [services, page] = await Promise.all([
    fetchAllServices(),
    fetchServicesPage(),
  ]);
  return <ServicesClient services={services} page={page} />;
}
