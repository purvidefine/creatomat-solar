import { notFound } from "next/navigation";
import { fetchAllServiceSlugs, fetchServiceBySlug } from "@/lib/data/services";
import { fetchAllProjects } from "@/lib/data/projects";
import { fetchAllProducts } from "@/lib/data/products";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

export async function generateStaticParams() {
  const slugs = await fetchAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await fetchServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Creatomat`,
    description: service.heroDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [service, allProjects, allProducts] = await Promise.all([
    fetchServiceBySlug(slug),
    fetchAllProjects(),
    fetchAllProducts(),
  ]);
  if (!service) notFound();

  // Use the Studio-configured related items when set; otherwise show all for this service
  const relatedProjects = service.relatedProjectSlugs?.length
    ? allProjects.filter((p) => service.relatedProjectSlugs.includes(p.slug))
    : allProjects.filter((p) => p.serviceSlug === slug);

  const relatedProducts = service.relatedProductSlugs?.length
    ? allProducts.filter((p) => service.relatedProductSlugs.includes(p.slug))
    : allProducts.filter((p) => p.serviceSlug === slug);

  return <ServicePageTemplate data={service} relatedProjects={relatedProjects} relatedProducts={relatedProducts} />;
}
