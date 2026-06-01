"use client";

import { motion } from "framer-motion";
import {
  Flag,
  Key,
  Award,
  ShieldCheck,
  Ruler,
  Headphones,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Counter from "@/components/ui/Counter";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Flag,
  Key,
  Award,
  ShieldCheck,
  Ruler,
  Headphones,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden grid-lines-dark">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Why Creatomat"
          title="Built Different. Engineered Better."
          description="We combine deep engineering expertise with modern technology to deliver solutions that set the standard."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="glass rounded-2xl p-6 group hover:bg-white/[0.08] transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Big stat */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="font-heading text-5xl md:text-7xl font-bold text-white mb-2">
            <Counter value={500} suffix="+" />
          </div>
          <p className="text-gray-400 text-lg">Projects Delivered Across India</p>
        </motion.div>
      </div>
    </section>
  );
}
