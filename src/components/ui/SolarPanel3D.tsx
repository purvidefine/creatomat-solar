"use client";

import { motion } from "framer-motion";

/*
  Hero 3D visual: Floating holographic circuit board / chip.
  Clean, modern, tech-forward. Pure CSS 3D + Framer Motion.
  Represents smart technology / connected engineering.
*/

export default function SolarPanel3D() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: 1200 }}
    >
      {/* Ambient glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute w-[350px] h-[350px] rounded-full bg-primary/25 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute w-[250px] h-[250px] rounded-full bg-navy/15 blur-[80px] pointer-events-none translate-x-12 translate-y-8"
      />

      {/* 3D floating + tilt */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotateX: [8, -4, 8],
          rotateY: [-6, 6, -6],
          rotateZ: [-1, 1, -1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[380px] h-[380px]"
      >
        {/* Main board — back face (shadow) */}
        <div
          className="absolute inset-4 rounded-2xl bg-navy/10 blur-sm"
          style={{ transform: "translateZ(-10px)" }}
        />

        {/* Main board */}
        <div
          className="absolute inset-0 rounded-2xl border-[3px] border-navy/20 bg-gradient-to-br from-white via-gray-50 to-primary/5 shadow-2xl overflow-hidden"
          style={{ transform: "translateZ(0px)", backfaceVisibility: "hidden" }}
        >
          {/* PCB grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pcb-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="1" fill="#1B3C6E" />
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#1B3C6E" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pcb-grid)" />
          </svg>

          {/* ——— CIRCUIT TRACES ——— */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
            {/* Horizontal traces */}
            {[80, 140, 200, 260, 320].map((y, i) => (
              <motion.line
                key={`h${i}`}
                x1="0" y1={y} x2="380" y2={y}
                stroke="#1B3C6E" strokeWidth="0.8" opacity="0.1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.1 * i, ease: "easeOut" as const }}
              />
            ))}
            {/* Vertical traces */}
            {[80, 140, 200, 260, 320].map((x, i) => (
              <motion.line
                key={`v${i}`}
                x1={x} y1="0" x2={x} y2="380"
                stroke="#1B3C6E" strokeWidth="0.8" opacity="0.1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.1 * i, ease: "easeOut" as const }}
              />
            ))}

            {/* Main circuit paths */}
            <motion.path
              d="M40 190 L120 190 L120 120 L200 120"
              stroke="#1B3C6E" strokeWidth="2" opacity="0.25" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" as const }}
            />
            <motion.path
              d="M200 120 L280 120 L280 190 L340 190"
              stroke="#1B3C6E" strokeWidth="2" opacity="0.25" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" as const }}
            />
            <motion.path
              d="M40 260 L120 260 L120 190"
              stroke="#E4B432" strokeWidth="2" opacity="0.35" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1, ease: "easeOut" as const }}
            />
            <motion.path
              d="M340 260 L260 260 L260 190 L200 190"
              stroke="#E4B432" strokeWidth="2" opacity="0.35" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" as const }}
            />
            <motion.path
              d="M200 190 L200 280 L140 280 L140 340"
              stroke="#1B3C6E" strokeWidth="1.5" opacity="0.2" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" as const }}
            />
            <motion.path
              d="M200 280 L260 280 L260 340"
              stroke="#1B3C6E" strokeWidth="1.5" opacity="0.2" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.6, ease: "easeOut" as const }}
            />
          </svg>

          {/* ——— DATA PULSES flowing through traces ——— */}
          {[
            { path: "M40 190 L120 190 L120 120 L200 120 L280 120 L280 190 L340 190", dur: 3, delay: 0 },
            { path: "M40 260 L120 260 L120 190 L200 190 L260 190 L260 260 L340 260", dur: 3.5, delay: 1.5 },
            { path: "M200 190 L200 280 L140 280 L140 340", dur: 2.5, delay: 0.8 },
          ].map((d, i) => (
            <svg key={`pulse${i}`} className="absolute inset-0 w-full h-full" viewBox="0 0 380 380">
              <circle r="4" fill="#E4B432" opacity="0.8">
                <animateMotion dur={`${d.dur}s`} repeatCount="indefinite" begin={`${d.delay}s`} path={d.path} />
              </circle>
              <circle r="8" fill="#E4B432" opacity="0.2">
                <animateMotion dur={`${d.dur}s`} repeatCount="indefinite" begin={`${d.delay}s`} path={d.path} />
              </circle>
            </svg>
          ))}

          {/* ——— CENTRAL CHIP ——— */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px]"
            style={{ transform: "translate(-50%, -50%) translateZ(30px)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" as const }}
          >
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-navy to-navy-dark border-2 border-navy/40 shadow-xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-primary font-heading font-bold text-3xl block">C</span>
                <span className="text-[9px] text-white/70 font-mono font-semibold tracking-[0.2em]">CREATOMAT</span>
              </div>
            </div>
            {/* Chip pins */}
            {[0, 1, 2, 3].map(i => (
              <div key={`pin-t${i}`} className="absolute w-[2px] h-3 bg-navy/30 rounded-full" style={{ top: -12, left: 18 + i * 20 }} />
            ))}
            {[0, 1, 2, 3].map(i => (
              <div key={`pin-b${i}`} className="absolute w-[2px] h-3 bg-navy/30 rounded-full" style={{ bottom: -12, left: 18 + i * 20 }} />
            ))}
            {[0, 1, 2, 3].map(i => (
              <div key={`pin-l${i}`} className="absolute h-[2px] w-3 bg-navy/30 rounded-full" style={{ left: -12, top: 18 + i * 20 }} />
            ))}
            {[0, 1, 2, 3].map(i => (
              <div key={`pin-r${i}`} className="absolute h-[2px] w-3 bg-navy/30 rounded-full" style={{ right: -12, top: 18 + i * 20 }} />
            ))}
          </motion.div>

          {/* ——— CORNER COMPONENTS with clear labels ——— */}
          {/* Top-left: Solar */}
          <motion.div
            className="absolute top-[40px] left-[40px]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/25 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-primary/30 flex items-center justify-center">
                <span className="text-[10px]">☀</span>
              </div>
              <span className="text-[11px] font-semibold text-navy/70 tracking-wide">SOLAR</span>
            </div>
          </motion.div>

          {/* Top-right: Automation */}
          <motion.div
            className="absolute top-[40px] right-[40px]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <div className="px-3 py-2 rounded-lg bg-navy/8 border border-navy/15 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-navy/15 flex items-center justify-center">
                <span className="text-[10px]">⚙</span>
              </div>
              <span className="text-[11px] font-semibold text-navy/70 tracking-wide">PLC</span>
            </div>
          </motion.div>

          {/* Bottom-left: Smart Home */}
          <motion.div
            className="absolute bottom-[40px] left-[40px]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
          >
            <div className="px-3 py-2 rounded-lg bg-navy/8 border border-navy/15 flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
                <span className="text-[10px]">🏠</span>
              </div>
              <span className="text-[11px] font-semibold text-navy/70 tracking-wide">HOME</span>
            </div>
          </motion.div>

          {/* Bottom-right: SPM */}
          <motion.div
            className="absolute bottom-[40px] right-[40px]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
          >
            <div className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/25 flex items-center gap-2">
              <motion.div
                className="w-5 h-5 rounded bg-primary/30 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-[10px]">⚙</span>
              </motion.div>
              <span className="text-[11px] font-semibold text-navy/70 tracking-wide">SPM</span>
            </div>
          </motion.div>

          {/* ——— NODE DOTS at intersections ——— */}
          {[
            [120, 190], [120, 120], [200, 120], [280, 120], [280, 190],
            [120, 260], [200, 190], [260, 260], [200, 280], [140, 280], [260, 280],
          ].map(([cx, cy], i) => (
            <motion.div
              key={`node${i}`}
              className="absolute w-2 h-2 rounded-full bg-navy/25"
              style={{ left: cx - 4, top: cy - 4 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5 + i * 0.05, duration: 0.3, ease: "easeOut" as const }}
            />
          ))}

          {/* ——— TRACE LABELS ——— */}
          {[
            { text: "DC →", x: 45, y: 180 },
            { text: "← AC", x: 305, y: 180 },
            { text: "IoT", x: 45, y: 250 },
            { text: "SCADA", x: 295, y: 250 },
            { text: "ESS", x: 125, y: 325 },
            { text: "DATA", x: 245, y: 325 },
          ].map((l, i) => (
            <motion.span
              key={l.text}
              className="absolute text-[10px] font-mono font-bold text-navy/35 tracking-wider"
              style={{ left: l.x, top: l.y }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 + i * 0.1 }}
            >
              {l.text}
            </motion.span>
          ))}
        </div>

        {/* Reflection/glare */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
          style={{ transform: "translateZ(1px)" }}
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" as const }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
        </motion.div>
      </motion.div>

      {/* Ground shadow */}
      <motion.div
        animate={{ scale: [1, 0.88, 1], opacity: [0.12, 0.05, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[250px] h-8 rounded-full bg-navy/20 blur-xl pointer-events-none"
      />
    </div>
  );
}
