"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface PageHeroProps {
  overline: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function PageHero({ overline, title, description, children }: PageHeroProps) {
  return (
    <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden noise-bg">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green/5 blur-[120px]" />
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={children ? "grid lg:grid-cols-2 gap-12 items-center" : ""}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4"
            >
              {overline}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-400 leading-relaxed max-w-xl"
            >
              {description}
            </motion.p>
          </motion.div>
          {children && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center opacity-40"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
