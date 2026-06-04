"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Cpu,
  Cog,
  Zap,
  Wrench,
  GraduationCap,
  Home,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Sun,
  Cpu,
  Cog,
  Zap,
  Wrench,
  GraduationCap,
  Home,
};

interface ServiceCard { title: string; description: string; icon: string; href: string }
interface SectionHeader { overline?: string; title?: string; description?: string }

export default function Services({ services, header }: { services?: ServiceCard[]; header?: SectionHeader }) {
  const list = services?.length ? services : SERVICES;
  return (
    <section id="services" className="section-padding bg-gray-50 grid-lines-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline={header?.overline ?? "What We Do"}
          title={header?.title ?? "Integrated Engineering Solutions"}
          description={header?.description ?? "From solar energy to factory automation and smart homes — we engineer complete systems that power your business and lifestyle."}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {list.map((service) => {
            const Icon = iconMap[service.icon] || Sun;
            return (
              <motion.div key={service.title} variants={fadeUp}>
                <Link
                  href={service.href}
                  className="group block bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
