import PageHero from "@/components/ui/PageHero";
import { fetchAllProducts } from "@/lib/data/products";
import { fetchProductsPage } from "@/lib/data/pageSettings";
import ProductsClient from "./_ProductsClient";

export async function generateMetadata() {
  const page = await fetchProductsPage();
  return {
    title: page.seoTitle ?? "Products | Creatomat Engineering",
    description: page.seoDescription ?? undefined,
  };
}

export default async function ProductsPage() {
  const [products, page] = await Promise.all([
    fetchAllProducts(),
    fetchProductsPage(),
  ]);

  return (
    <main>
      <PageHero
        overline={page.hero.overline ?? "Technical Products"}
        title={page.hero.title ?? "Products & Systems"}
        description={page.hero.description ?? "Explore our range of electrical panels, automation systems, smart home devices, and special purpose machines."}
      />
      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsClient products={products} />
        </div>
      </section>
    </main>
  );
}
