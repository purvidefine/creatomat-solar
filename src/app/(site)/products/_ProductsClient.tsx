"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ProductData } from "@/lib/data/products";

export default function ProductsClient({ products }: { products: ProductData[] }) {
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-2 mb-12 justify-center"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary text-navy-dark shadow-lg shadow-primary/25"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Products Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <motion.div
              key={product.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/products/${product.slug}`}
                className="group block bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Zap size={24} className="text-primary" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {product.shortDescription}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Details <ArrowRight size={14} className="ml-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
