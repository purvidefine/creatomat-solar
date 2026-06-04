"use client";

import { motion } from "framer-motion";
import {
  Sun, Cpu, Cog, Zap, Wrench, GraduationCap, Home, Shield, Battery,
  Monitor, Wifi, ArrowRight, CheckCircle, ChevronRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Link from "next/link";
import type { ServiceData } from "@/lib/data/services";
import type { ServicesPageData } from "@/lib/data/pageSettings";

const ICON_MAP: Record<string, React.ElementType> = {
  Sun, Cpu, Cog, Zap, Wrench, GraduationCap, Home, Shield, Battery, Monitor, Wifi,
};

const COLOR_FALLBACKS = [
  "from-amber-500 to-orange-500",
  "from-primary to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-emerald-500 to-green-500",
  "from-rose-500 to-pink-500",
  "from-sky-500 to-blue-500",
];

export default function ServicesClient({
  services,
  page,
}: {
  services: ServiceData[];
  page: ServicesPageData;
}) {
  return (
    <main>
      <PageHero
        overline={page.hero.overline ?? "Our Services"}
        title={page.hero.title ?? "Engineering Solutions That Power Progress"}
        description={page.hero.description ?? "From solar energy systems to factory automation — we deliver comprehensive, turnkey solutions."}
      />

      {/* Services Detail */}
      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {services.map((service, i) => {
              const Icon = ICON_MAP[service.icon] ?? Zap;
              const color = service.color || COLOR_FALLBACKS[i % COLOR_FALLBACKS.length];
              const isEven = i % 2 === 0;
              const featuredStat = service.stats?.[0];
              const featureLabels = service.features?.map((f) =>
                typeof f === "string" ? f : f.title
              ) ?? [];

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  id={service.slug}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
                >
                  {/* Content */}
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                        <Icon size={22} className="text-white" />
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                        0{i + 1}
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-2 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-primary mb-4">{service.tagline}</p>
                    <p className="text-gray-500 leading-relaxed mb-6">{service.heroDescription}</p>

                    {featureLabels.length > 0 && (
                      <ul className="space-y-2.5 mb-8">
                        {featureLabels.slice(0, 5).map((f) => (
                          <li key={f} className="flex items-center gap-2.5">
                            <CheckCircle size={16} className="text-primary shrink-0" />
                            <span className="text-sm text-gray-600">{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex gap-3">
                      <Button href="/contact">
                        Enquire Now <ChevronRight size={16} className="ml-1" />
                      </Button>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors"
                      >
                        Learn More <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual Card */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <div className={`rounded-3xl bg-gradient-to-br ${color} p-[1px]`}>
                      <div className="rounded-3xl bg-navy p-10 lg:p-14 relative overflow-hidden">
                        <div className="absolute inset-0 dot-grid opacity-20" />
                        <div className="relative z-10 text-center">
                          <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-xl`}>
                            <Icon size={36} className="text-white" />
                          </div>
                          {featuredStat && (
                            <>
                              <div className="font-heading text-4xl lg:text-5xl font-bold text-white mb-2">
                                {featuredStat.value}
                              </div>
                              <p className="text-sm text-gray-400">{featuredStat.label}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              {page.cta.heading ?? "Need a Custom Solution?"}
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              {page.cta.description ?? "Every project is unique. Tell us about your requirements and we'll engineer the perfect solution."}
            </p>
            <Button href="/contact" variant="amber" size="lg">
              {page.cta.buttonText ?? "Discuss Your Project"} <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
