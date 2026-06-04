"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, Calendar, Factory, ArrowRight, Quote, ChevronRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import type { ProjectData } from "@/lib/data/projects";
import { getRelatedProjects } from "@/lib/data/projects";
import Link from "next/link";

export default function ProjectDetailTemplate({
  data,
  relatedProjects,
}: {
  data: ProjectData;
  relatedProjects?: ProjectData[];
}) {
  const related = relatedProjects ?? getRelatedProjects(data.slug, data.serviceSlug, 3);

  return (
    <main>
      {/* Hero */}
      <PageHero overline={data.industry} title={data.title} description={data.description} />

      {/* Project Meta Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-6 text-sm"
          >
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={16} className="text-primary" />
              <span>{data.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Zap size={16} className="text-primary" />
              <span>{data.capacity}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Factory size={16} className="text-primary" />
              <span>{data.industry}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar size={16} className="text-primary" />
              <span>{data.year}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-red-500 mb-3">
                The Challenge
              </span>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">Problem Statement</h3>
              <p className="text-gray-500 leading-relaxed">{data.challenge}</p>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-green mb-3">
                Our Solution
              </span>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">Engineering Approach</h3>
              <p className="text-gray-500 leading-relaxed">{data.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-navy grid-lines-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="Impact" title="Project Results" light />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {data.results.map((result) => (
              <motion.div key={result.metric} variants={fadeUp} className="glass rounded-2xl p-6 text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                  {result.value}
                </div>
                <p className="text-sm text-gray-400">{result.metric}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-gray-50 grid-lines-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="Technical Details" title="Specifications" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
          >
            {Object.entries(data.specifications).map(([key, value], i) => (
              <div
                key={key}
                className={`flex justify-between items-center px-6 py-4 ${
                  i < Object.entries(data.specifications).length - 1 ? "border-b border-gray-50" : ""
                }`}
              >
                <span className="text-sm font-medium text-gray-500">{key}</span>
                <span className="text-sm font-semibold text-navy font-mono">{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {data.testimonial && (
        <section className="section-padding bg-white grid-lines-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-gray-50 rounded-2xl p-10 md:p-14 border border-gray-100"
            >
              <Quote size={48} className="absolute top-6 left-6 text-primary/10" />
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed italic mb-6 relative">
                &ldquo;{data.testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-heading font-semibold text-navy">{data.testimonial.name}</p>
                <p className="text-sm text-gray-400">{data.testimonial.designation}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="section-padding bg-gray-50 grid-lines-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader overline="More Work" title="Related Projects" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {related.map((project) => (
                <motion.div key={project.slug} variants={fadeUp}>
                  <Link href={`/projects/${project.slug}`} className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary">{project.industry}</span>
                    <h3 className="font-heading text-base font-semibold text-navy mt-2 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-xs text-gray-400">{project.location} · {project.capacity}</p>
                    <span className="inline-flex items-center text-xs font-medium text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project <ChevronRight size={12} className="ml-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-navy grid-lines-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
              Want Similar Results?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Let us engineer a custom solution for your business. Get a free consultation and detailed proposal.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/contact" size="lg">
                Get Free Consultation <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
