"use client";

import { motion } from "framer-motion";

const DRAW_DURATION = 1.0;
const STAGGER = 0.12;

function draw(delay: number, duration = DRAW_DURATION) {
  return {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };
}

function fade(delay: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay, duration: 0.5, ease: "easeOut" as const },
    },
  };
}

const STROKE = "#1B3C6E";
const STROKE_LIGHT = "#1B3C6E66";
const STROKE_ACCENT = "#E4B432";
const FONT = {
  fontSize: "9px",
  fontFamily: "monospace",
  fill: "#1B3C6E99",
};

/* ====== INDUSTRIAL AUTOMATION BLUEPRINT ====== */
export function AutomationBlueprint() {
  return (
    <motion.svg
      viewBox="0 0 460 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[420px]"
      initial="hidden"
      animate="visible"
    >
      {/* PLC Cabinet */}
      <motion.rect x="60" y="80" width="140" height="200" rx="4" stroke={STROKE} strokeWidth="1.5" variants={draw(0)} />
      <motion.rect x="70" y="95" width="120" height="30" rx="2" stroke={STROKE_LIGHT} strokeWidth="1" variants={draw(STAGGER)} />
      <motion.rect x="70" y="135" width="120" height="30" rx="2" stroke={STROKE_LIGHT} strokeWidth="1" variants={draw(STAGGER * 2)} />
      <motion.rect x="70" y="175" width="120" height="30" rx="2" stroke={STROKE_LIGHT} strokeWidth="1" variants={draw(STAGGER * 3)} />
      <motion.rect x="70" y="215" width="120" height="30" rx="2" stroke={STROKE_LIGHT} strokeWidth="1" variants={draw(STAGGER * 4)} />
      {/* LED indicators */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle key={`led-${i}`} cx={82} cy={110 + i * 40} r="3" stroke={STROKE_ACCENT} strokeWidth="1" variants={draw(STAGGER * (i + 1))} />
      ))}
      {/* Labels */}
      <motion.text x="130" y="73" textAnchor="middle" {...FONT} variants={fade(0.3)}>PLC CABINET</motion.text>
      <motion.text x="85" y="113" {...FONT} fontSize="7px" variants={fade(STAGGER * 2)}>CPU MODULE</motion.text>
      <motion.text x="85" y="153" {...FONT} fontSize="7px" variants={fade(STAGGER * 3)}>I/O MODULE</motion.text>
      <motion.text x="85" y="193" {...FONT} fontSize="7px" variants={fade(STAGGER * 4)}>COMM MODULE</motion.text>
      <motion.text x="85" y="233" {...FONT} fontSize="7px" variants={fade(STAGGER * 5)}>POWER SUPPLY</motion.text>

      {/* HMI Screen */}
      <motion.rect x="260" y="80" width="140" height="110" rx="4" stroke={STROKE} strokeWidth="1.5" variants={draw(STAGGER * 5)} />
      <motion.rect x="272" y="92" width="116" height="75" rx="2" stroke={STROKE_LIGHT} strokeWidth="1" variants={draw(STAGGER * 6)} />
      {/* Screen content: chart lines */}
      <motion.path d="M282 150 L302 130 L322 140 L342 120 L362 125 L378 110" stroke={STROKE_ACCENT} strokeWidth="1" variants={draw(STAGGER * 7)} />
      <motion.line x1="282" y1="155" x2="378" y2="155" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 7)} />
      <motion.text x="330" y="73" textAnchor="middle" {...FONT} variants={fade(STAGGER * 6)}>HMI PANEL</motion.text>

      {/* VFD Drive */}
      <motion.rect x="260" y="220" width="140" height="60" rx="4" stroke={STROKE} strokeWidth="1.5" variants={draw(STAGGER * 8)} />
      <motion.circle cx="290" cy="250" r="12" stroke={STROKE_LIGHT} strokeWidth="1" variants={draw(STAGGER * 9)} />
      <motion.path d="M284 250 L290 244 L296 250 L290 256 Z" stroke={STROKE_ACCENT} strokeWidth="0.8" variants={draw(STAGGER * 10)} />
      <motion.text x="330" y="253" {...FONT} fontSize="7px" variants={fade(STAGGER * 9)}>VFD DRIVE</motion.text>
      <motion.text x="330" y="265" {...FONT} fontSize="6px" variants={fade(STAGGER * 10)}>0.75–500kW</motion.text>

      {/* Connection lines */}
      <motion.path d="M200 180 L260 130" stroke={STROKE_LIGHT} strokeWidth="0.8" strokeDasharray="4 3" variants={draw(STAGGER * 8)} />
      <motion.path d="M200 200 L260 250" stroke={STROKE_LIGHT} strokeWidth="0.8" strokeDasharray="4 3" variants={draw(STAGGER * 9)} />

      {/* Motor */}
      <motion.circle cx="230" cy="400" r="50" stroke={STROKE} strokeWidth="1.5" variants={draw(STAGGER * 10)} />
      <motion.circle cx="230" cy="400" r="30" stroke={STROKE_LIGHT} strokeWidth="1" variants={draw(STAGGER * 11)} />
      <motion.circle cx="230" cy="400" r="5" stroke={STROKE} strokeWidth="1" variants={draw(STAGGER * 12)} />
      {/* Motor shaft */}
      <motion.line x1="230" y1="350" x2="230" y2="330" stroke={STROKE} strokeWidth="2" variants={draw(STAGGER * 12)} />
      {/* Connection from VFD to Motor */}
      <motion.path d="M330 280 L330 340 L230 340 L230 350" stroke={STROKE_ACCENT} strokeWidth="1" variants={draw(STAGGER * 11)} />
      <motion.text x="230" y="405" textAnchor="middle" {...FONT} fontSize="11px" fill="#1B3C6E" variants={fade(STAGGER * 12)}>M</motion.text>
      <motion.text x="230" y="470" textAnchor="middle" {...FONT} variants={fade(STAGGER * 13)}>3-PHASE MOTOR</motion.text>

      {/* Dimension lines */}
      <motion.line x1="50" y1="80" x2="50" y2="280" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 14)} />
      <motion.line x1="45" y1="80" x2="55" y2="80" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 14)} />
      <motion.line x1="45" y1="280" x2="55" y2="280" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 14)} />
      <motion.text x="45" y="185" textAnchor="middle" {...FONT} fontSize="7px" transform="rotate(-90 45 185)" variants={fade(STAGGER * 14)}>CONTROL PANEL</motion.text>

      {/* Title block */}
      <motion.rect x="280" y="480" width="160" height="40" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 15)} />
      <motion.text x="360" y="498" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 16)}>INDUSTRIAL AUTOMATION</motion.text>
      <motion.text x="360" y="511" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 16)}>CR-AUT-001 · REV A</motion.text>
    </motion.svg>
  );
}

/* ====== HOME AUTOMATION BLUEPRINT ====== */
export function HomeBlueprint() {
  return (
    <motion.svg
      viewBox="0 0 460 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[420px]"
      initial="hidden"
      animate="visible"
    >
      {/* House outline */}
      <motion.path d="M230 60 L80 160 L80 420 L380 420 L380 160 Z" stroke={STROKE} strokeWidth="1.5" variants={draw(0)} />
      {/* Roof */}
      <motion.path d="M230 60 L60 170 M230 60 L400 170" stroke={STROKE} strokeWidth="1" variants={draw(STAGGER)} />

      {/* Floor line */}
      <motion.line x1="80" y1="290" x2="380" y2="290" stroke={STROKE_LIGHT} strokeWidth="0.5" strokeDasharray="4 3" variants={draw(STAGGER * 2)} />

      {/* Room 1 - Living */}
      <motion.rect x="100" y="300" width="120" height="100" stroke={STROKE_LIGHT} strokeWidth="0.8" variants={draw(STAGGER * 3)} />
      <motion.text x="160" y="355" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 4)}>LIVING ROOM</motion.text>
      {/* Smart light */}
      <motion.circle cx="160" cy="320" r="8" stroke={STROKE_ACCENT} strokeWidth="0.8" variants={draw(STAGGER * 4)} />
      <motion.path d="M156 320 L160 314 L164 320" stroke={STROKE_ACCENT} strokeWidth="0.8" variants={draw(STAGGER * 5)} />

      {/* Room 2 - Kitchen */}
      <motion.rect x="240" y="300" width="120" height="100" stroke={STROKE_LIGHT} strokeWidth="0.8" variants={draw(STAGGER * 3)} />
      <motion.text x="300" y="355" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 4)}>KITCHEN</motion.text>

      {/* Room 3 - Bedroom */}
      <motion.rect x="100" y="175" width="120" height="100" stroke={STROKE_LIGHT} strokeWidth="0.8" variants={draw(STAGGER * 5)} />
      <motion.text x="160" y="230" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 6)}>BEDROOM</motion.text>
      {/* AC unit */}
      <motion.rect x="130" y="188" width="40" height="12" rx="2" stroke={STROKE_ACCENT} strokeWidth="0.8" variants={draw(STAGGER * 6)} />

      {/* Room 4 - Bath */}
      <motion.rect x="240" y="175" width="120" height="100" stroke={STROKE_LIGHT} strokeWidth="0.8" variants={draw(STAGGER * 5)} />
      <motion.text x="300" y="230" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 6)}>STUDY</motion.text>

      {/* Hub/Controller center */}
      <motion.circle cx="230" cy="290" r="15" stroke={STROKE} strokeWidth="1.5" variants={draw(STAGGER * 7)} />
      <motion.circle cx="230" cy="290" r="6" stroke={STROKE_ACCENT} strokeWidth="1" variants={draw(STAGGER * 8)} />
      <motion.text x="230" y="293" textAnchor="middle" {...FONT} fontSize="6px" fill={STROKE_ACCENT} variants={fade(STAGGER * 9)}>HUB</motion.text>

      {/* Wi-Fi signals */}
      {[20, 28, 36].map((r, i) => (
        <motion.path
          key={`wifi-${i}`}
          d={`M${230 - r * 0.7} ${115 + r * 0.7} A ${r} ${r} 0 0 1 ${230 + r * 0.7} ${115 + r * 0.7}`}
          stroke={STROKE_ACCENT}
          strokeWidth="0.8"
          fill="none"
          variants={draw(STAGGER * (8 + i))}
        />
      ))}
      <motion.text x="230" y="100" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 10)}>Wi-Fi MESH</motion.text>

      {/* Connection lines from hub */}
      <motion.line x1="230" y1="275" x2="160" y2="230" stroke={STROKE_LIGHT} strokeWidth="0.5" strokeDasharray="3 2" variants={draw(STAGGER * 9)} />
      <motion.line x1="230" y1="275" x2="300" y2="230" stroke={STROKE_LIGHT} strokeWidth="0.5" strokeDasharray="3 2" variants={draw(STAGGER * 9)} />
      <motion.line x1="230" y1="305" x2="160" y2="340" stroke={STROKE_LIGHT} strokeWidth="0.5" strokeDasharray="3 2" variants={draw(STAGGER * 10)} />
      <motion.line x1="230" y1="305" x2="300" y2="340" stroke={STROKE_LIGHT} strokeWidth="0.5" strokeDasharray="3 2" variants={draw(STAGGER * 10)} />

      {/* Door */}
      <motion.rect x="210" y="385" width="40" height="35" stroke={STROKE} strokeWidth="1" variants={draw(STAGGER * 11)} />
      <motion.circle cx="243" cy="402" r="2" stroke={STROKE} strokeWidth="0.8" variants={draw(STAGGER * 11)} />

      {/* Smart sensors labels */}
      <motion.text x="300" y="315" textAnchor="middle" {...FONT} fontSize="6px" fill={STROKE_ACCENT} variants={fade(STAGGER * 11)}>SENSOR</motion.text>
      <motion.circle cx="300" cy="325" r="4" stroke={STROKE_ACCENT} strokeWidth="0.6" variants={draw(STAGGER * 12)} />

      {/* Title block */}
      <motion.rect x="280" y="460" width="160" height="40" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 13)} />
      <motion.text x="360" y="478" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 14)}>HOME AUTOMATION</motion.text>
      <motion.text x="360" y="491" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 14)}>CR-HOM-001 · FLOOR PLAN</motion.text>
    </motion.svg>
  );
}

/* ====== SPM BLUEPRINT ====== */
export function SPMBlueprint() {
  return (
    <motion.svg
      viewBox="0 0 460 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[420px]"
      initial="hidden"
      animate="visible"
    >
      {/* Machine base */}
      <motion.rect x="60" y="360" width="340" height="30" rx="2" stroke={STROKE} strokeWidth="1.5" variants={draw(0)} />
      {/* Base hatching */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.line key={`hatch-${i}`} x1={80 + i * 28} y1="390" x2={65 + i * 28} y2="360" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER)} />
      ))}

      {/* Main body frame */}
      <motion.rect x="100" y="140" width="260" height="220" rx="3" stroke={STROKE} strokeWidth="1.5" variants={draw(STAGGER * 2)} />

      {/* Spindle head */}
      <motion.rect x="180" y="80" width="100" height="60" rx="3" stroke={STROKE} strokeWidth="1.5" variants={draw(STAGGER * 3)} />
      <motion.line x1="180" y1="110" x2="280" y2="110" stroke={STROKE_LIGHT} strokeWidth="0.8" variants={draw(STAGGER * 4)} />
      {/* Chuck */}
      <motion.path d="M210 140 L210 120 L250 120 L250 140" stroke={STROKE} strokeWidth="1.2" variants={draw(STAGGER * 5)} />
      <motion.circle cx="230" cy="120" r="8" stroke={STROKE_ACCENT} strokeWidth="1" variants={draw(STAGGER * 5)} />
      <motion.text x="230" y="73" textAnchor="middle" {...FONT} variants={fade(STAGGER * 4)}>SPINDLE HEAD</motion.text>

      {/* Tool holder */}
      <motion.rect x="120" y="200" width="30" height="80" rx="2" stroke={STROKE} strokeWidth="1.2" variants={draw(STAGGER * 6)} />
      <motion.path d="M150 230 L170 230 L170 250 L150 250" stroke={STROKE_ACCENT} strokeWidth="1" variants={draw(STAGGER * 7)} />
      <motion.text x="135" y="195" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 7)}>TOOL POST</motion.text>

      {/* Work table */}
      <motion.rect x="160" y="290" width="140" height="20" rx="1" stroke={STROKE} strokeWidth="1.2" variants={draw(STAGGER * 6)} />
      {/* T-slots */}
      {[0, 1, 2].map((i) => (
        <motion.line key={`slot-${i}`} x1={190 + i * 35} y1="293" x2={190 + i * 35} y2="307" stroke={STROKE_LIGHT} strokeWidth="1" variants={draw(STAGGER * 7)} />
      ))}
      <motion.text x="230" y="328" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 8)}>WORK TABLE</motion.text>

      {/* Workpiece on table */}
      <motion.rect x="195" y="275" width="70" height="15" rx="1" stroke={STROKE_ACCENT} strokeWidth="1" variants={draw(STAGGER * 8)} />
      <motion.text x="230" y="272" textAnchor="middle" {...FONT} fontSize="6px" fill={STROKE_ACCENT} variants={fade(STAGGER * 9)}>WORKPIECE</motion.text>

      {/* Control panel side */}
      <motion.rect x="320" y="170" width="40" height="120" rx="2" stroke={STROKE} strokeWidth="1" variants={draw(STAGGER * 9)} />
      {/* Buttons */}
      <motion.circle cx="340" cy="195" r="5" stroke={STROKE_ACCENT} strokeWidth="0.8" variants={draw(STAGGER * 10)} />
      <motion.circle cx="340" cy="215" r="5" stroke={STROKE_LIGHT} strokeWidth="0.8" variants={draw(STAGGER * 10)} />
      <motion.circle cx="340" cy="235" r="5" stroke={STROKE_LIGHT} strokeWidth="0.8" variants={draw(STAGGER * 10)} />
      <motion.rect x="330" y="255" width="20" height="20" rx="1" stroke={STROKE_LIGHT} strokeWidth="0.8" variants={draw(STAGGER * 11)} />
      <motion.text x="340" y="310" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 11)}>CTRL</motion.text>

      {/* Dimension lines */}
      <motion.line x1="60" y1="400" x2="400" y2="400" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 12)} />
      <motion.line x1="60" y1="395" x2="60" y2="405" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 12)} />
      <motion.line x1="400" y1="395" x2="400" y2="405" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 12)} />
      <motion.text x="230" y="415" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 13)}>Width · 1200mm</motion.text>

      {/* Vertical dimension */}
      <motion.line x1="50" y1="80" x2="50" y2="390" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 13)} />
      <motion.line x1="45" y1="80" x2="55" y2="80" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 13)} />
      <motion.line x1="45" y1="390" x2="55" y2="390" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 13)} />
      <motion.text x="45" y="240" textAnchor="middle" {...FONT} fontSize="7px" transform="rotate(-90 45 240)" variants={fade(STAGGER * 14)}>Height · 1800mm</motion.text>

      {/* Title block */}
      <motion.rect x="280" y="460" width="160" height="40" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 14)} />
      <motion.text x="360" y="478" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 15)}>SPECIAL PURPOSE MACHINE</motion.text>
      <motion.text x="360" y="491" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 15)}>CR-SPM-001 · FRONT VIEW</motion.text>
    </motion.svg>
  );
}

/* ====== SOLAR EPC / HYBRID / ESS BLUEPRINT ====== */
export function SolarEPCBlueprint() {
  return (
    <motion.svg
      viewBox="0 0 460 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[420px]"
      initial="hidden"
      animate="visible"
    >
      {/* Solar Array (tilted panels) */}
      <motion.path d="M80 100 L200 60 L200 200 L80 240 Z" stroke={STROKE} strokeWidth="1.5" variants={draw(0)} />
      {/* Panel grid lines horizontal */}
      {[0, 1, 2, 3].map((i) => (
        <motion.line key={`ph-${i}`} x1={80 + i * 0} y1={128 + i * 28} x2={200} y2={88 + i * 28} stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * (i + 1))} />
      ))}
      {/* Panel grid lines vertical */}
      {[0, 1, 2].map((i) => (
        <motion.line key={`pv-${i}`} x1={110 + i * 30} y1={92 - i * 0 + (i * 30 * (100 - 60)) / 120} x2={110 + i * 30} y2={232 - i * 0 + (i * 30 * (200 - 240)) / 120} stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * (i + 2))} />
      ))}
      <motion.text x="140" y="55" textAnchor="middle" {...FONT} variants={fade(STAGGER * 3)}>SOLAR ARRAY · 10kW</motion.text>

      {/* Second array */}
      <motion.path d="M220 100 L340 60 L340 200 L220 240 Z" stroke={STROKE} strokeWidth="1.5" variants={draw(STAGGER * 2)} />
      {[0, 1, 2, 3].map((i) => (
        <motion.line key={`ph2-${i}`} x1={220} y1={128 + i * 28} x2={340} y2={88 + i * 28} stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * (i + 3))} />
      ))}

      {/* Sun symbol */}
      <motion.circle cx="400" cy="80" r="18" stroke={STROKE_ACCENT} strokeWidth="1" variants={draw(STAGGER * 4)} />
      {/* Sun rays (pre-computed coords to avoid hydration mismatch) */}
      {[
        [422, 80, 428, 80],     // 0°
        [416, 64, 420, 60],     // 45°
        [400, 58, 400, 52],     // 90° (up)
        [384, 64, 380, 60],     // 135°
        [378, 80, 372, 80],     // 180°
        [384, 96, 380, 100],    // 225°
        [400, 102, 400, 108],   // 270° (down)
        [416, 96, 420, 100],    // 315°
      ].map(([x1, y1, x2, y2], i) => (
        <motion.line key={`ray-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={STROKE_ACCENT} strokeWidth="0.8" variants={draw(STAGGER * 5)} />
      ))}

      {/* DC Cable path */}
      <motion.path d="M200 220 L200 290 L160 290" stroke={STROKE_ACCENT} strokeWidth="1" strokeDasharray="4 2" variants={draw(STAGGER * 6)} />
      <motion.text x="185" y="260" {...FONT} fontSize="6px" fill={STROKE_ACCENT} variants={fade(STAGGER * 7)}>DC</motion.text>

      {/* Inverter */}
      <motion.rect x="100" y="290" width="120" height="70" rx="4" stroke={STROKE} strokeWidth="1.5" variants={draw(STAGGER * 7)} />
      <motion.text x="160" y="320" textAnchor="middle" {...FONT} fontSize="8px" fill="#1B3C6E" variants={fade(STAGGER * 8)}>HYBRID</motion.text>
      <motion.text x="160" y="332" textAnchor="middle" {...FONT} fontSize="8px" fill="#1B3C6E" variants={fade(STAGGER * 8)}>INVERTER</motion.text>
      <motion.text x="160" y="350" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 9)}>10kW · MPPT</motion.text>

      {/* AC Cable out */}
      <motion.path d="M220 325 L290 325" stroke={STROKE} strokeWidth="1" variants={draw(STAGGER * 9)} />
      <motion.text x="255" y="320" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 10)}>AC</motion.text>

      {/* Grid / Meter */}
      <motion.rect x="290" y="300" width="80" height="50" rx="3" stroke={STROKE} strokeWidth="1.2" variants={draw(STAGGER * 10)} />
      <motion.text x="330" y="328" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 11)}>NET METER</motion.text>
      <motion.text x="330" y="340" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 11)}>BI-DIRECTIONAL</motion.text>

      {/* Grid connection */}
      <motion.path d="M370 325 L420 325" stroke={STROKE} strokeWidth="1" variants={draw(STAGGER * 11)} />
      {/* Grid tower symbol */}
      <motion.path d="M420 305 L430 325 L420 345 M425 305 L435 325 L425 345" stroke={STROKE_LIGHT} strokeWidth="1" variants={draw(STAGGER * 12)} />
      <motion.text x="435" y="330" {...FONT} fontSize="6px" variants={fade(STAGGER * 12)}>GRID</motion.text>

      {/* Battery bank */}
      <motion.path d="M160 360 L160 420" stroke={STROKE_ACCENT} strokeWidth="1" variants={draw(STAGGER * 10)} />
      <motion.rect x="110" y="420" width="100" height="55" rx="4" stroke={STROKE} strokeWidth="1.5" variants={draw(STAGGER * 11)} />
      {/* Battery cells */}
      {[0, 1, 2, 3].map((i) => (
        <motion.rect key={`bat-${i}`} x={120 + i * 22} y="430" width="18" height="35" rx="2" stroke={STROKE_LIGHT} strokeWidth="0.8" variants={draw(STAGGER * (12 + i * 0.5))} />
      ))}
      <motion.text x="160" y="490" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 13)}>BATTERY BANK</motion.text>
      <motion.text x="160" y="502" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 13)}>LFP · 20kWh</motion.text>

      {/* Load */}
      <motion.path d="M330 350 L330 430" stroke={STROKE} strokeWidth="0.8" variants={draw(STAGGER * 12)} />
      <motion.rect x="300" y="430" width="60" height="40" rx="3" stroke={STROKE} strokeWidth="1" variants={draw(STAGGER * 13)} />
      <motion.text x="330" y="453" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 14)}>LOAD</motion.text>
      <motion.text x="330" y="463" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 14)}>BUILDING</motion.text>

      {/* Title block */}
      <motion.rect x="280" y="490" width="160" height="35" stroke={STROKE_LIGHT} strokeWidth="0.5" variants={draw(STAGGER * 15)} />
      <motion.text x="360" y="506" textAnchor="middle" {...FONT} fontSize="7px" variants={fade(STAGGER * 16)}>SOLAR EPC · HYBRID ESS</motion.text>
      <motion.text x="360" y="518" textAnchor="middle" {...FONT} fontSize="6px" variants={fade(STAGGER * 16)}>CR-SOL-001 · SLD</motion.text>
    </motion.svg>
  );
}
