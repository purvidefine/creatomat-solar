"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { BENEFITS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Benefits() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden grid-lines-dark">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] animate-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="The Solar Advantage"
          title="Numbers That Speak Louder"
          description="Going solar isn't just good for the planet — it's great for your bottom line."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.label}
              variants={fadeUp}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                {benefit.value}
                {benefit.suffix || ""}
              </div>
              <p className="text-sm text-gray-400">{benefit.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            The average Creatomat installation pays for itself in under 4 years.
            Government subsidies and net metering benefits make the switch even
            more attractive.
          </p>
          <Button href="#contact" variant="amber" size="lg">
            Calculate Your Savings
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
