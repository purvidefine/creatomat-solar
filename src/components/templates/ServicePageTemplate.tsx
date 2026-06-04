"use client";

import { motion } from "framer-motion";
import {
  Sun, Cpu, Cog, Zap, Wrench, GraduationCap, Home, Shield, Monitor, Wifi,
  ArrowRight, CheckCircle, Thermometer, Layers, Music, Smartphone, PenTool,
  Ruler, Eye, RefreshCw, Package, Battery, IndianRupee, BarChart, Plus, Minus,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import type { ServiceData } from "@/lib/data/services";
import { getProjectsByServiceSlug, type ProjectData } from "@/lib/data/projects";
import { getRelatedProducts, type ProductData } from "@/lib/data/products";
import Link from "next/link";
import {
  AutomationBlueprint,
  HomeBlueprint,
  SPMBlueprint,
  SolarEPCBlueprint,
} from "@/components/ui/ServiceBlueprints";

const BLUEPRINT_MAP: Record<string, React.ComponentType> = {
  "industrial-automation": AutomationBlueprint,
  "home-automation": HomeBlueprint,
  spm: SPMBlueprint,
  "solar-epc-hybrid-ess": SolarEPCBlueprint,
};

const ICON_MAP: Record<string, React.ElementType> = {
  Sun, Cpu, Cog, Zap, Wrench, GraduationCap, Home, Shield, Monitor, Wifi,
  ArrowRight, CheckCircle, Thermometer, Layers, Music, Smartphone, PenTool,
  Ruler, Eye, RefreshCw, Package, Battery, IndianRupee, BarChart,
};

export default function ServicePageTemplate({
  data,
  relatedProjects: relatedProjectsProp,
  relatedProducts: relatedProductsProp,
}: {
  data: ServiceData;
  relatedProjects?: ProjectData[];
  relatedProducts?: ProductData[];
}) {
  const projects = relatedProjectsProp ?? getProjectsByServiceSlug(data.slug);
  const products = relatedProductsProp ?? getRelatedProducts(data.relatedProductSlugs);
  const Blueprint = BLUEPRINT_MAP[data.slug];

  return (
    <main>
      {/* Hero */}
      <PageHero overline={data.category} title={data.title} description={data.heroDescription}>
        {Blueprint && <Blueprint />}
      </PageHero>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100 grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {data.stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-navy">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Capabilities"
            title="What We Deliver"
            description={`Comprehensive ${data.title.toLowerCase()} solutions engineered for performance and reliability.`}
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {data.features.map((feature) => {
              const Icon = ICON_MAP[feature.icon] || Zap;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-navy grid-lines-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Our Process"
            title="How We Work"
            description="A transparent, proven process from consultation to commissioning."
            light
          />
          <div className="space-y-8">
            {data.process.map((step, i) => (
              <motion.div
                key={step.step}
                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="glass rounded-2xl p-8 flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <span className="font-heading text-xl font-bold text-navy-dark">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gray-50 grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Applications"
            title="Industries & Use Cases"
            description={`Our ${data.title.toLowerCase()} solutions serve diverse industries across India.`}
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {data.useCases.map((useCase) => (
              <motion.div
                key={useCase}
                variants={fadeUp}
                className="flex items-center gap-3 bg-white rounded-xl p-5 border border-gray-100"
              >
                <CheckCircle size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-navy">{useCase}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {projects.length > 0 && (
        <section className="section-padding bg-white grid-lines-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              overline="Our Work"
              title="Featured Projects"
              description={`See how our ${data.title.toLowerCase()} solutions deliver real results.`}
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.slice(0, 3).map((project) => (
                <motion.div key={project.slug} variants={fadeUp}>
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="bg-gradient-to-br from-navy via-navy-light to-primary/20 rounded-2xl aspect-[4/3] relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                        <Zap size={60} className="text-primary" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/15 px-2 py-1 rounded mb-2 inline-block">
                          {project.industry}
                        </span>
                        <h3 className="font-heading text-base font-semibold text-white">{project.title}</h3>
                        <p className="text-xs text-gray-400 mt-1">{project.location} · {project.capacity}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            {projects.length > 3 && (
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-8">
                <Link href="/projects" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors">
                  View All Projects <ArrowRight size={14} className="ml-1" />
                </Link>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Related Products */}
      {products.length > 0 && (
        <section className="section-padding bg-gray-50 grid-lines-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              overline="Products"
              title="Related Products"
              description="Explore the products and systems we use in our solutions."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {products.map((product) => (
                <motion.div key={product.slug} variants={fadeUp}>
                  <Link href={`/products/${product.slug}`} className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Zap size={18} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-navy mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{product.shortDescription}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {data.faq.length > 0 && (
        <FAQSection faqs={data.faq} />
      )}

      {/* CTA */}
      <section className="section-padding bg-navy grid-lines-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Get a free consultation and custom proposal for your {data.title.toLowerCase()} requirements.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">
                Get Free Quote <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View All Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function FAQSection({ faqs }: { faqs: ServiceData["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white grid-lines-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader overline="FAQ" title="Frequently Asked Questions" />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp} className="mb-3">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full flex items-start justify-between gap-4 p-5 rounded-xl text-left transition-all duration-300 ${
                  openIndex === i
                    ? "bg-primary/5 border-l-[3px] border-primary"
                    : "bg-gray-50 border-l-[3px] border-transparent hover:bg-gray-100"
                }`}
              >
                <span className="font-medium text-navy text-[15px]">{faq.question}</span>
                <span className="flex-shrink-0 mt-0.5">
                  {openIndex === i ? <Minus size={18} className="text-primary" /> : <Plus size={18} className="text-gray-400" />}
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
                    <p className="px-5 py-4 text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
