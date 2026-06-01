"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Shirt,
  Pill,
  Wheat,
  Building2,
  UtensilsCrossed,
  GraduationCap,
  Landmark,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { INDUSTRIES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const icons = [Factory, Shirt, Pill, Wheat, Building2, UtensilsCrossed, GraduationCap, Landmark];

export default function Industries() {
  return (
    <section className="section-padding bg-white grid-lines-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Industries We Serve"
          title="Powering Every Sector"
          description="From factories to farms, we deliver tailored energy and automation solutions across diverse industries."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {INDUSTRIES.map((industry, i) => {
            const Icon = icons[i] || Factory;
            return (
              <motion.div
                key={industry.name}
                variants={fadeUp}
                className="group relative rounded-2xl bg-gray-50 p-6 text-center hover:bg-navy transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 group-hover:bg-white/10 flex items-center justify-center mb-4 transition-colors duration-500">
                    <Icon
                      size={24}
                      className="text-primary group-hover:text-primary-light transition-colors duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-navy group-hover:text-white transition-colors duration-500 mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-500 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-10 overflow-hidden transition-all duration-500">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
