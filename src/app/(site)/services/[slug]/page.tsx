import { notFound } from "next/navigation";
import { fetchAllServiceSlugs, fetchServiceBySlug } from "@/lib/data/services";
import { fetchProjectsByServiceSlug } from "@/lib/data/projects";
import { fetchProductsByServiceSlug } from "@/lib/data/products";
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
  const [service, relatedProjects, relatedProducts] = await Promise.all([
    fetchServiceBySlug(slug),
    fetchProjectsByServiceSlug(slug),
    fetchProductsByServiceSlug(slug),
  ]);
  if (!service) notFound();
  return <ServicePageTemplate data={service} relatedProjects={relatedProjects} relatedProducts={relatedProducts} />;
}
