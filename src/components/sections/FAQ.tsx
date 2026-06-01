"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { fadeUp, slideInLeft, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white grid-lines-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy leading-tight tracking-tight mb-4">
              Got Questions?
              <br />
              We&apos;ve Got Answers.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Everything you need to know about going solar with Creatomat. Can&apos;t
              find what you&apos;re looking for? Reach out to our team.
            </p>
            <Button href="#contact">Contact Us for More</Button>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-3"
          >
            {FAQS.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} className="mb-3">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full flex items-start justify-between gap-4 p-5 rounded-xl text-left transition-all duration-300 ${
                    openIndex === i
                      ? "bg-primary/5 border-l-[3px] border-primary"
                      : "bg-gray-50 border-l-[3px] border-transparent hover:bg-gray-100"
                  }`}
                >
                  <span className="font-medium text-navy text-[15px]">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-0.5">
                    {openIndex === i ? (
                      <Minus size={18} className="text-primary" />
                    ) : (
                      <Plus size={18} className="text-gray-400" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 py-4 text-sm text-gray-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
