"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target, Eye, Award, Users, Lightbulb, Shield, ArrowRight,
  Zap, Star, CheckCircle, Cpu, Sun, Cog, Home, Flag, Key,
  ShieldCheck, Ruler, Headphones, BarChart, Battery, Wrench,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Counter from "@/components/ui/Counter";
import Button from "@/components/ui/Button";
import { fadeUp, slideInRight, staggerContainer } from "@/lib/animations";
import type { AboutPageData } from "@/lib/data/aboutPage";

const ICON_MAP: Record<string, React.ElementType> = {
  Lightbulb, Shield, Users, Target, Eye, Award, Zap, Star, CheckCircle,
  Cpu, Sun, Cog, Home, Flag, Key, ShieldCheck, Ruler, Headphones,
  BarChart, Battery, Wrench,
};

export default function AboutClient({ data }: { data: AboutPageData }) {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  const s   = data.story;
  const mv  = data.missionVision;
  const vs  = data.valuesSection;
  const ms  = data.milestonesSection;
  const cta = data.cta;

  const badges = s.badges?.length
    ? s.badges
    : ["Mission-Driven", "Vision-Led", "ISO Certified"];

  const BADGE_ICONS: React.ElementType[] = [Target, Eye, Award];

  return (
    <main>
      {/* ① Hero */}
      <PageHero
        overline={data.hero.overline ?? "About Us"}
        title={data.hero.title ?? "We Create. We Automate. We Are Creatomat."}
        description={data.hero.description ?? "An engineering-driven company building the future of energy and automation in India."}
      />

      {/* ② Story */}
      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <motion.span variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                {s.overline ?? "Our Story"}
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-navy leading-tight tracking-tight mb-6">
                {s.heading ?? "From a Small Workshop to India's Trusted Engineering Partner"}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-4">
                {s.paragraph1 ?? "Creatomat Private Limited began with a simple vision — to bring world-class engineering solutions to Indian businesses."}
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8">
                {s.paragraph2 ?? "Today, we are a comprehensive engineering company with 50+ engineers delivering turnkey solutions across India."}
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-6">
                {badges.map((label, i) => {
                  const Icon = BADGE_ICONS[i] ?? Award;
                  return (
                    <div key={label} className="flex items-center gap-2">
                      <Icon size={18} className="text-primary" />
                      <span className="text-sm font-medium text-navy">{label}</span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-navy via-navy-light to-primary/20 flex items-center justify-center relative">
                <div className="absolute inset-0 dot-grid opacity-20" />
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-primary to-amber flex items-center justify-center shadow-2xl shadow-primary/30">
                    <span className="text-white font-heading font-bold text-3xl">C</span>
                  </div>
                  <p className="text-lg text-gray-300 font-heading font-semibold">{s.sinceText ?? "Since 2009"}</p>
                  <p className="text-sm text-gray-500">{s.location ?? "Bhilwara, Rajasthan"}</p>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="absolute -bottom-6 -left-6 bg-white rounded-xl px-6 py-4 shadow-xl border border-gray-100">
                <div className="font-heading text-2xl font-bold text-navy">{s.floatingBadgeTitle ?? "Made in India"}</div>
                <div className="text-xs text-gray-500">{s.floatingBadgeSubtitle ?? "100% Domestic Manufacturing"}</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ③ Mission & Vision */}
      <section className="section-padding bg-navy relative overflow-hidden grid-lines-dark">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: mv.mission?.title ?? "Our Mission",
                text:  mv.mission?.text  ?? "To democratize access to clean energy and advanced automation for Indian businesses through precision engineering, innovation, and turnkey excellence.",
              },
              {
                icon: Eye,
                title: mv.vision?.title ?? "Our Vision",
                text:  mv.vision?.text  ?? "To become India's most trusted engineering partner for sustainable energy solutions — powering a cleaner, smarter, and more efficient industrial future.",
              },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="glass rounded-2xl p-8 lg:p-10">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ Team Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {data.teamStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className="font-heading text-4xl lg:text-5xl font-bold text-navy mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ⑤ Values */}
      <section className="section-padding bg-gray-50 grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              {vs.overline ?? "Our Values"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy tracking-tight">
              {vs.title ?? "What Drives Us Forward"}
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(vs.items ?? []).map((v) => {
              const Icon = ICON_MAP[v.icon] ?? Zap;
              return (
                <motion.div key={v.title} variants={fadeUp} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center mb-5 transition-colors">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ⑥ Milestones */}
      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              {ms.overline ?? "Our Journey"}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy tracking-tight">
              {ms.title ?? "Milestones That Matter"}
            </h2>
          </motion.div>
          <div ref={timelineRef} className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 lg:-translate-x-px">
              <motion.div initial={{ height: "0%" }} animate={isTimelineInView ? { height: "100%" } : {}} transition={{ duration: 2, ease: "easeOut" }} className="w-full bg-gradient-to-b from-primary to-amber origin-top" />
            </div>
            <div className="space-y-12">
              {(ms.items ?? []).map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className={`relative flex items-center gap-6 pl-20 lg:pl-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                    <span className="font-mono text-sm font-bold text-primary">{m.year}</span>
                    <h3 className="font-heading text-lg font-semibold text-navy">{m.title}</h3>
                    <p className="text-sm text-gray-500">{m.description}</p>
                  </div>
                  <div className="absolute left-6 lg:static w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md shrink-0 z-10" />
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑦ CTA */}
      <section className="section-padding bg-navy relative overflow-hidden grid-lines-dark">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              {cta.heading ?? "Ready to Work With Us?"}
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              {cta.description ?? "Let's discuss how Creatomat can engineer the perfect energy solution for your business."}
            </p>
            <Button href="/contact" variant="amber" size="lg">
              {cta.buttonText ?? "Start a Conversation"} <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
