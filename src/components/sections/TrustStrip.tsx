"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { CLIENTS } from "@/lib/constants";

export default function TrustStrip({ clients, label }: { clients?: string[]; label?: string }) {
  const list = clients?.length ? clients : CLIENTS;
  const doubled = [...list, ...list];

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-50 py-8 border-y border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
          {label ?? "Trusted by leading businesses"}
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="inline-flex items-center justify-center mx-8 md:mx-12"
            >
              <span className="text-lg font-heading font-semibold text-gray-300 hover:text-gray-500 transition-colors duration-300 select-none">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
