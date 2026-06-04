"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import Counter from "@/components/ui/Counter";
import Button from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/animations";
import type { ProjectData } from "@/lib/data/projects";
import type { PortfolioStat, PageCta } from "@/lib/data/pageSettings";

const CATEGORIES = ["All", "Solar", "Automation", "SPM", "Home Automation"];
const CATEGORY_MAP: Record<string, string> = {
  Solar: "solar",
  Automation: "automation",
  SPM: "spm",
  "Home Automation": "home-automation",
};

export default function ProjectsClient({
  projects,
  portfolioStats = [],
  cta,
}: {
  projects: ProjectData[];
  portfolioStats?: PortfolioStat[];
  cta?: PageCta;
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === CATEGORY_MAP[activeFilter]);

  return (
    <>
      {/* Stats Bar */}
      {portfolioStats.length > 0 && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {portfolioStats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="text-center">
                  <div className="font-heading text-3xl lg:text-4xl font-bold text-navy">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Portfolio Grid */}
      <section className="section-padding bg-gray-50 grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-12 flex-wrap"
      >
        <Filter size={16} className="text-gray-400" />
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeFilter === cat
                ? "bg-primary text-navy-dark shadow-lg shadow-primary/25"
                : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full"
              >
                <div className="aspect-video bg-gradient-to-br from-navy via-navy-light to-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap size={40} className="text-primary/20" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-navy/80 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium flex items-center gap-2">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
                    <span className="flex items-center gap-1"><Zap size={12} /> {project.capacity}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              {cta?.heading ?? "Your Project Could Be Next"}
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              {cta?.description ?? "Join 500+ businesses that have trusted Creatomat to power their operations."}
            </p>
            <Button href="/contact" variant="amber" size="lg">
              {cta?.buttonText ?? "Start Your Project"} <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
