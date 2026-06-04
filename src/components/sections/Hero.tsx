"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import { STATS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SolarPanel3D from "@/components/ui/SolarPanel3D";

interface HeroStat { value: number; suffix?: string; label: string }
interface HeroContent {
  badgeText?: string;
  titleLine1?: string;
  titleHighlight?: string;
  titleLine3?: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

export default function Hero({ stats, hero }: { stats?: HeroStat[]; hero?: HeroContent | null }) {
  const resolvedStats = stats?.length ? stats : STATS;
  const h = hero ?? {};
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-cream grid-lines"
    >
      {/* Subtle warm ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[180px]" />
          <div className="absolute bottom-1/3 -left-1/4 w-[400px] h-[400px] rounded-full bg-green/[0.04] blur-[150px]" />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-6"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-medium text-gray-600 tracking-wide">
                {h.badgeText ?? "Solar · Automation · Smart Homes · SPM"}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-navy leading-[1.05] tracking-tight mb-6"
            >
              {h.titleLine1 ?? "Engineering"}
              <br />
              <span className="gradient-text-dark">{h.titleHighlight ?? "Smarter"}</span>
              <br />
              {h.titleLine3 ?? "Systems"}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base lg:text-lg text-gray-500 leading-relaxed mb-10 max-w-md"
            >
              {h.subtitle ?? "Solar EPC, industrial automation, smart homes & custom machines — integrated engineering solutions, delivered with precision."}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              <Button href={h.ctaPrimaryHref ?? "/contact"} size="lg">
                {h.ctaPrimaryText ?? "Get Free Consultation"}
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <a
                href={h.ctaSecondaryHref ?? "/projects"}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border-2 border-navy/20 text-navy hover:bg-navy/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Play size={16} className="mr-2" />
                {h.ctaSecondaryText ?? "View Projects"}
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-8 pt-8 border-t border-navy/10"
            >
              {resolvedStats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl lg:text-3xl font-bold text-navy">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Blueprint Solar Panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[550px]">
              <SolarPanel3D />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-navy/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-navy/40" />
        </motion.div>
      </motion.div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
