import { notFound } from "next/navigation";
import { fetchAllProductSlugs, fetchProductBySlug, fetchRelatedProducts } from "@/lib/data/products";
import ProductDetailTemplate from "@/components/templates/ProductDetailTemplate";

export async function generateStaticParams() {
  const slugs = await fetchAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.title} | Creatomat Products`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  if (!product) notFound();
  const related = await fetchRelatedProducts(product.relatedProductSlugs ?? []);
  return <ProductDetailTemplate data={product} relatedProducts={related} />;
}
