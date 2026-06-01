"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeaderProps {
  overline: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionHeader({
  overline,
  title,
  description,
  light = false,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
        {overline}
      </span>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-gray-400" : "text-gray-500"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
