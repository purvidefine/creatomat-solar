"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Download, Zap, ChevronRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import type { ProductData } from "@/lib/data/products";
import { getRelatedProducts } from "@/lib/data/products";
import Link from "next/link";

export default function ProductDetailTemplate({ data }: { data: ProductData }) {
  const related = getRelatedProducts(data.relatedProductSlugs);

  return (
    <main>
      {/* Hero */}
      <PageHero overline={data.category} title={data.title} description={data.shortDescription} />

      {/* Product Overview - 2 columns */}
      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Description & Features */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-3"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
                Overview
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy leading-tight mb-6">
                Product Description
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">{data.fullDescription}</p>

              <h3 className="font-heading text-lg font-semibold text-navy mb-4">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {data.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button href="/contact" size="md">
                  Request Quote <ArrowRight size={16} className="ml-1" />
                </Button>
                <button className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <Download size={16} className="mr-2" />
                  Datasheet (PDF)
                </button>
              </div>
            </motion.div>

            {/* Right - Specifications */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden sticky top-24">
                <div className="bg-navy px-6 py-4">
                  <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">
                    Technical Specifications
                  </h3>
                </div>
                {Object.entries(data.specifications).map(([key, value], i) => (
                  <div
                    key={key}
                    className={`flex justify-between items-center px-6 py-3.5 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <span className="text-xs font-medium text-gray-500">{key}</span>
                    <span className="text-xs font-semibold text-navy font-mono text-right max-w-[50%]">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-gray-50 grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Applications"
            title="Where It's Used"
            description={`Common applications for the ${data.title}.`}
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {data.applications.map((app) => (
              <motion.div
                key={app}
                variants={fadeUp}
                className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100"
              >
                <Zap size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-navy">{app}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section-padding bg-white grid-lines-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader overline="Also Explore" title="Related Products" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {related.map((product) => (
                <motion.div key={product.slug} variants={fadeUp}>
                  <Link href={`/products/${product.slug}`} className="group block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Zap size={18} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-navy mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{product.shortDescription}</p>
                    <span className="inline-flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ChevronRight size={12} className="ml-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-navy grid-lines-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
              Need a Custom Quote?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Contact our engineering team for pricing, customization options, and technical consultation.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/contact" size="lg">
                Request Quote <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
