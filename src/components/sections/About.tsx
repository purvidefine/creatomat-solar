"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const DEFAULT_CAPABILITIES = [
  "Solar EPC & Engineering",
  "Industrial Automation Systems",
  "Special Purpose Machines",
  "Made in India Manufacturing",
];

interface AboutContent {
  eyebrow?: string;
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  capabilities?: string[];
  yearsText?: string;
  yearsLabel?: string;
}

function Logo3D() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [25, -25]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouse(e: MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-crosshair"
      style={{ perspective: 800 }}
    >
      {/* The entire card tilts in 3D on hover */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 via-gray-50 to-navy/5 border border-gray-200/50 shadow-xl"
      >
        {/* Shiny glare overlay that moves with tilt */}
        <motion.div
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)",
            translateX: useTransform(mouseX, [-0.5, 0.5], ["-30%", "30%"]),
          }}
          className="absolute inset-0 rounded-2xl z-20 pointer-events-none"
        />

        {/* Background decorative elements at different z-depths */}
        <motion.div
          style={{ transform: "translateZ(-40px)" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1B3C6E" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </motion.div>

        {/* Pulsing rings — mid layer */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(10px)" }}>
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.25, 0, 0.25] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
            className="absolute w-44 h-44 rounded-full border-2 border-primary/30"
          />
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.15, 0, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
            className="absolute w-56 h-56 rounded-full border border-navy/15"
          />
          <motion.div
            animate={{ scale: [1, 2, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 2 }}
            className="absolute w-64 h-64 rounded-full border border-primary/10"
          />
        </div>

        {/* Logo — foreground layer, pops out */}
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ transform: "translateZ(60px)" }}>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
          >
            {/* Logo shadow */}
            <motion.div
              animate={{ scale: [1, 0.85, 1], opacity: [0.2, 0.08, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-5 rounded-full bg-navy/25 blur-lg"
            />
            <Image
              src="/logo.svg"
              alt="Creatomat"
              width={300}
              height={110}
              style={{ width: 300, height: "auto" }}
              className="drop-shadow-2xl"
              priority
            />
          </motion.div>
          <motion.p
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
            className="mt-6 text-sm text-gray-400 font-medium tracking-wide"
            style={{ transform: "translateZ(20px)" }}
          >
            We Create. We Automate.
          </motion.p>
        </div>

        {/* Corner accents — deep layer */}
        <div className="absolute inset-0 pointer-events-none" style={{ transform: "translateZ(-20px)" }}>
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-lg" />
        </div>
      </motion.div>
    </div>
  );
}

export default function About({ about }: { about?: AboutContent | null }) {
  const a = about ?? {};
  const capabilities = a.capabilities?.length ? a.capabilities : DEFAULT_CAPABILITIES;

  return (
    <section id="about" className="section-padding bg-white grid-lines-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3"
            >
              {a.eyebrow ?? "About Creatomat"}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl lg:text-[40px] font-bold text-navy leading-tight tracking-tight mb-6"
            >
              {a.title ?? (
                <>Engineering Excellence<br />Since Day One</>
              )}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-4">
              {a.paragraph1 ?? "Creatomat Private Limited specializes in developing special purpose machinery, automation systems, and solar energy solutions that drive efficiency, quality, and sustainability for businesses across India."}
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8">
              {a.paragraph2 ?? "Our team of experienced engineers combines deep domain expertise with cutting-edge technology to deliver turnkey solutions that are designed, manufactured, and commissioned entirely in-house."}
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-600">{cap}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="#services"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors"
            >
              Explore Our Services →
            </motion.a>
          </motion.div>

          {/* Right - 3D Logo */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <Logo3D />

            {/* Floating stat card */}
            <motion.div
              variants={slideInLeft}
              className="absolute -bottom-6 -left-6 glass-light rounded-xl px-6 py-4 shadow-xl"
            >
              <div className="font-heading text-2xl font-bold text-navy">{a.yearsText ?? "15+"}</div>
              <div className="text-xs text-gray-500">{a.yearsLabel ?? "Years of Innovation"}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
