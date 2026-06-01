"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Eye,
  Award,
  Users,
  Lightbulb,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Counter from "@/components/ui/Counter";
import Button from "@/components/ui/Button";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const VALUES = [
  { icon: Lightbulb, title: "Innovation First", description: "Continuously pushing the boundaries of what's possible in solar and automation technology." },
  { icon: Shield, title: "Quality Assured", description: "ISO certified processes ensuring every project meets global quality standards." },
  { icon: Users, title: "Client Partnership", description: "We treat every project as a partnership, aligning our engineering with your goals." },
  { icon: Target, title: "Precision Engineering", description: "Every system designed with meticulous attention to detail and long-term performance." },
];

const MILESTONES = [
  { year: "2009", title: "Founded", description: "Creatomat established in Bhilwara, Rajasthan" },
  { year: "2013", title: "Automation Division", description: "Expanded into industrial automation systems" },
  { year: "2016", title: "Solar EPC Launch", description: "Entered the solar energy market with EPC services" },
  { year: "2019", title: "500+ Projects", description: "Crossed 500 successful project deliveries" },
  { year: "2022", title: "ISO Certified", description: "Achieved ISO 9001:2015 certification" },
  { year: "2024", title: "10MW+ Installed", description: "Surpassed 10MW of solar capacity installed" },
];

const TEAM_STATS = [
  { value: 50, suffix: "+", label: "Team Members" },
  { value: 15, suffix: "+", label: "Engineers" },
  { value: 500, suffix: "+", label: "Projects" },
  { value: 10, suffix: "+", label: "Cities Served" },
];

export default function AboutPage() {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  return (
    <main>
      <PageHero
        overline="About Us"
        title="We Create. We Automate. We Are Creatomat."
        description="An engineering-driven company building the future of energy and automation in India — one precision-engineered solution at a time."
      />

      {/* Story Section */}
      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span variants={fadeUp} className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Our Story
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-navy leading-tight tracking-tight mb-6">
                From a Small Workshop to India&apos;s Trusted Engineering Partner
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-4">
                Creatomat Private Limited began with a simple vision — to bring
                world-class engineering solutions to Indian businesses. Founded in
                Bhilwara, Rajasthan, we started as a small automation workshop serving
                local industries.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-4">
                Today, we are a comprehensive engineering company specializing in solar
                EPC, industrial automation, and special purpose machine manufacturing.
                Our team of 50+ engineers and technicians delivers turnkey solutions
                across India.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8">
                What sets us apart is our in-house capability — we design, manufacture,
                install, and maintain everything ourselves. This gives us unmatched
                quality control and cost efficiency for our clients.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-6">
                {[
                  { icon: Target, label: "Mission-Driven" },
                  { icon: Eye, label: "Vision-Led" },
                  { icon: Award, label: "ISO Certified" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon size={18} className="text-primary" />
                    <span className="text-sm font-medium text-navy">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-navy via-navy-light to-primary/20 flex items-center justify-center relative">
                <div className="absolute inset-0 dot-grid opacity-20" />
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-primary to-amber flex items-center justify-center shadow-2xl shadow-primary/30">
                    <span className="text-white font-heading font-bold text-3xl">C</span>
                  </div>
                  <p className="text-lg text-gray-300 font-heading font-semibold">Since 2009</p>
                  <p className="text-sm text-gray-500">Bhilwara, Rajasthan</p>
                </div>
              </div>
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl px-6 py-4 shadow-xl border border-gray-100"
              >
                <div className="font-heading text-2xl font-bold text-navy">Made in India</div>
                <div className="text-xs text-gray-500">100% Domestic Manufacturing</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-navy relative overflow-hidden grid-lines-dark">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To democratize access to clean energy and advanced automation for Indian businesses through precision engineering, innovation, and turnkey excellence.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To become India's most trusted engineering partner for sustainable energy solutions — powering a cleaner, smarter, and more efficient industrial future.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-2xl p-8 lg:p-10"
              >
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

      {/* Team Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {TEAM_STATS.map((stat) => (
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

      {/* Values */}
      <section className="section-padding bg-gray-50 grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy tracking-tight">
              What Drives Us Forward
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center mb-5 transition-colors">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Milestones That Matter
            </h2>
          </motion.div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 lg:-translate-x-px">
              <motion.div
                initial={{ height: "0%" }}
                animate={isTimelineInView ? { height: "100%" } : {}}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full bg-gradient-to-b from-primary to-amber origin-top"
              />
            </div>

            <div className="space-y-12">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex items-center gap-6 pl-20 lg:pl-0 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                    <span className="font-mono text-sm font-bold text-primary">{m.year}</span>
                    <h3 className="font-heading text-lg font-semibold text-navy">{m.title}</h3>
                    <p className="text-sm text-gray-500">{m.description}</p>
                  </div>
                  <div className="absolute left-6 lg:static w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md flex-shrink-0 z-10" />
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy relative overflow-hidden grid-lines-dark">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Let&apos;s discuss how Creatomat can engineer the perfect energy solution for your business.
            </p>
            <Button href="/contact" variant="amber" size="lg">
              Start a Conversation <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
