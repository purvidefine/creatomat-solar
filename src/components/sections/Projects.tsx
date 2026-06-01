"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";

// Show 4 featured projects (mix of categories)
const FEATURED = PROJECTS_DATA.filter((p) =>
  ["250kw-rooftop-bhilwara", "textile-automation-bhilwara", "smart-villa-udaipur", "bobbin-winding-spm"].includes(p.slug)
);

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white grid-lines-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Our Work"
          title="Projects That Power Progress"
          description="Solar plants, automated lines, smart homes, and custom machines — real installations delivering real results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {FEATURED.map((project, i) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <Link
                href={`/projects/${project.slug}`}
                className={`group relative block rounded-2xl overflow-hidden ${
                  i === 0 ? "md:row-span-2" : ""
                }`}
              >
                {/* Background */}
                <div
                  className={`bg-gradient-to-br from-navy via-navy-light to-primary/30 ${
                    i === 0
                      ? "aspect-square md:aspect-auto md:h-full min-h-[320px]"
                      : "aspect-[16/9]"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <Zap size={i === 0 ? 120 : 80} className="text-primary" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium flex items-center gap-2">
                    View Project <ArrowRight size={16} />
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/15 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="inline-block text-[10px] font-medium uppercase tracking-wider text-gray-300 bg-white/10 px-2 py-1 rounded">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap size={12} />
                      {project.capacity}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors"
          >
            See All Projects <ArrowRight size={14} className="ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
