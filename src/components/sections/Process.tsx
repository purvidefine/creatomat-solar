"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ClipboardCheck, PenTool, HardHat, MonitorSmartphone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface SanityStep { step: number; title: string; description: string }
interface ProcessHeader { overline?: string; title?: string; description?: string; ctaText?: string }

const STEP_VISUALS = [
  { icon: ClipboardCheck, color: "from-blue-500 to-cyan-500", detail: "Drone mapping, shadow analysis, load calculation" },
  { icon: PenTool, color: "from-violet-500 to-purple-500", detail: "3D modeling, PVsyst simulation, BOQ preparation" },
  { icon: HardHat, color: "from-amber to-orange", detail: "Structure mounting, panel laying, wiring & commissioning" },
  { icon: MonitorSmartphone, color: "from-emerald-500 to-green-500", detail: "IoT monitoring, performance alerts, annual maintenance" },
];

const DEFAULT_STEPS: SanityStep[] = [
  { step: 1, title: "Site Assessment", description: "We survey your location, analyze energy consumption patterns, and evaluate structural feasibility for the optimal solar setup." },
  { step: 2, title: "Custom Design", description: "Our engineering team designs the optimal system architecture — panel layout, inverter sizing, and electrical integration for maximum ROI." },
  { step: 3, title: "Installation", description: "Professional installation with zero disruption to your operations. Our certified technicians handle everything from structure to commissioning." },
  { step: 4, title: "Monitor & Support", description: "24/7 remote monitoring, predictive maintenance alerts, and rapid on-site support to maximize your system's lifetime output." },
];

type MergedStep = SanityStep & typeof STEP_VISUALS[0];

function ProcessStep({ step, index }: { step: MergedStep; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
      className={`relative flex items-center gap-8 lg:gap-16 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex-col lg:flex-row`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60 transition-shadow duration-500 group"
        >
          <div className={`inline-flex items-center gap-2 mb-3 ${isEven ? "lg:flex-row-reverse" : ""}`}>
            <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest">
              Step {step.step}
            </span>
            <div className="w-8 h-[1px] bg-gray-200" />
          </div>
          <h3 className="font-heading text-xl lg:text-2xl font-bold text-navy mb-3">
            {step.title}
          </h3>
          <p className="text-gray-500 leading-relaxed mb-4 text-sm lg:text-base">
            {step.description}
          </p>
          <div className={`flex items-center gap-2 text-xs font-mono text-gray-400 ${
            isEven ? "lg:justify-end" : ""
          }`}>
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
            {step.detail}
          </div>
        </motion.div>
      </div>

      {/* Center Node */}
      <div className="relative flex-shrink-0 z-10 order-first lg:order-none">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2 }}
          className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl relative`}
        >
          <Icon size={28} className="text-white" />
          {/* Pulse ring */}
          <motion.div
            animate={isInView ? { scale: [1, 1.5], opacity: [0.4, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color}`}
          />
        </motion.div>
        {/* Step number */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-md"
        >
          {step.step}
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
}

export default function Process({ steps: stepsProp, header }: { steps?: SanityStep[]; header?: ProcessHeader }) {
  const textSteps = stepsProp?.length ? stepsProp : DEFAULT_STEPS;
  const STEPS: MergedStep[] = textSteps.map((s, i) => ({ ...s, ...STEP_VISUALS[i % STEP_VISUALS.length] }));
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50 relative overflow-hidden grid-lines-light">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-primary/3 blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            {header?.overline ?? "How We Work"}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight mb-5">
            {header?.title ?? (
              <>From Consultation to<br /><span className="gradient-text">Commission</span></>
            )}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base lg:text-lg">
            {header?.description ?? "A transparent, proven 4-step process that transforms your rooftop into a powerhouse — with zero hassle."}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 hidden lg:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-primary-light to-green origin-top"
            />
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 lg:-translate-x-1/2 lg:hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-primary-light to-green origin-top"
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {STEPS.map((step, i) => (
              <ProcessStep key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 lg:mt-24"
        >
          <Button href="/contact" size="lg">
            {header?.ctaText ?? "Start Your Solar Journey"}
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
