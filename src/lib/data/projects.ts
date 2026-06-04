export interface ProjectMetric {
  metric: string;
  value: string;
}

export interface ProjectTestimonial {
  quote: string;
  name: string;
  designation: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  category: "solar" | "automation" | "spm" | "home-automation";
  serviceSlug: string;
  location: string;
  industry: string;
  capacity: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: ProjectMetric[];
  specifications: Record<string, string>;
  testimonial?: ProjectTestimonial;
  gallery: string[];
}

export const PROJECTS_DATA: ProjectData[] = [
  // ===== INDUSTRIAL AUTOMATION (3) =====
  {
    slug: "textile-automation-bhilwara",
    title: "Complete Textile Mill Automation",
    category: "automation",
    serviceSlug: "industrial-automation",
    location: "Bhilwara, Rajasthan",
    industry: "Textile Manufacturing",
    capacity: "Full Plant",
    year: "2024",
    description:
      "End-to-end automation of a 50,000 sq ft textile manufacturing facility including yarn processing, weaving control, and quality inspection systems.",
    challenge:
      "The client's legacy relay-based control system was causing frequent production stoppages, inconsistent quality, and high energy consumption. Manual monitoring made it difficult to identify bottlenecks.",
    solution:
      "We implemented a comprehensive PLC-SCADA system with VFD-controlled motors, automated tension control, real-time quality monitoring with vision sensors, and a centralized dashboard for production analytics.",
    results: [
      { metric: "Production Increase", value: "35%" },
      { metric: "Energy Savings", value: "28%" },
      { metric: "Quality Rejection Rate", value: "↓ 60%" },
      { metric: "Payback Period", value: "18 months" },
    ],
    specifications: {
      "PLC Platform": "Siemens S7-1500",
      "SCADA Software": "WinCC Professional",
      "VFD Drives": "24 × ABB ACS580",
      "HMI Panels": "8 × Siemens KTP700",
      "I/O Points": "480+ Digital, 120+ Analog",
      "Network": "PROFINET Industrial Ethernet",
    },
    testimonial: {
      quote:
        "Creatomat transformed our factory. Production is up 35%, quality rejections are down, and we have complete visibility into every process.",
      name: "Rajesh Somani",
      designation: "MD, Somani Textiles",
    },
    gallery: [],
  },
  {
    slug: "food-processing-jaipur",
    title: "Food Processing Line Automation",
    category: "automation",
    serviceSlug: "industrial-automation",
    location: "Jaipur, Rajasthan",
    industry: "Food & Beverage",
    capacity: "5 TPH Line",
    year: "2024",
    description:
      "Automated a complete food processing and packaging line with hygiene-grade equipment, weight-based dispensing, and sealed packaging with batch traceability.",
    challenge:
      "Manual handling caused contamination risks, inconsistent portioning, and inability to maintain FSSAI compliance records. Production capacity was limited by manual bottlenecks.",
    solution:
      "Designed and installed an automated dispensing, mixing, filling, and sealing line with food-grade actuators, load cells for precise portioning, barcode-based traceability, and automated CIP systems.",
    results: [
      { metric: "Throughput Increase", value: "3x" },
      { metric: "Contamination Incidents", value: "Zero" },
      { metric: "Portioning Accuracy", value: "±0.5g" },
      { metric: "FSSAI Compliance", value: "100%" },
    ],
    specifications: {
      "PLC Platform": "Allen Bradley CompactLogix",
      "Line Speed": "120 packs/minute",
      "Weighing System": "4× Mettler Toledo load cells",
      "Packaging": "Automatic form-fill-seal",
      "Traceability": "Barcode + batch logging",
      "Hygiene Rating": "IP69K washdown rated",
    },
    gallery: [],
  },
  {
    slug: "cement-plant-chittorgarh",
    title: "Cement Plant Process Automation",
    category: "automation",
    serviceSlug: "industrial-automation",
    location: "Chittorgarh, Rajasthan",
    industry: "Cement & Mining",
    capacity: "500 TPD",
    year: "2023",
    description:
      "Complete process automation of a 500 TPD cement grinding unit including raw mill, kiln feed, clinker cooler, and cement mill operations.",
    challenge:
      "Inconsistent clinker quality, high specific energy consumption, and frequent kiln trips due to manual control. No centralized monitoring across plant sections.",
    solution:
      "Implemented DCS-based centralized control with advanced process controllers, predictive analytics for kiln stability, automated quality sampling, and energy optimization algorithms.",
    results: [
      { metric: "Specific Energy", value: "↓ 15%" },
      { metric: "Kiln Availability", value: "96%" },
      { metric: "Quality Consistency", value: "+40%" },
      { metric: "Operator Reduction", value: "50%" },
    ],
    specifications: {
      "Control System": "ABB Symphony Plus DCS",
      "I/O Count": "2000+ points",
      "Drives": "18× ABB Medium Voltage VFDs",
      "Analyzers": "X-ray fluorescence online",
      "Network": "Redundant fiber ring",
      "Control Rooms": "2 centralized + 4 local",
    },
    gallery: [],
  },

  // ===== HOME AUTOMATION (3) =====
  {
    slug: "smart-villa-udaipur",
    title: "Luxury Smart Villa",
    category: "home-automation",
    serviceSlug: "home-automation",
    location: "Udaipur, Rajasthan",
    industry: "Luxury Residential",
    capacity: "12,000 sq ft",
    year: "2024",
    description:
      "Complete smart home automation of a lakeside luxury villa with 42 rooms, including lighting scenes, climate control, security, AV distribution, and motorized elements.",
    challenge:
      "The homeowner wanted a fully automated lifestyle experience with one-touch scene control, without visible wiring or devices disrupting the villa's heritage aesthetic.",
    solution:
      "Designed a concealed KNX-based system with custom-etched brass switch plates matching the villa's decor, automated lighting with circadian tuning, motorized silk curtains, and a centralized iPad command center.",
    results: [
      { metric: "Automated Zones", value: "42" },
      { metric: "Energy Savings", value: "35%" },
      { metric: "Lighting Scenes", value: "120+" },
      { metric: "Control Points", value: "380+" },
    ],
    specifications: {
      Platform: "KNX + Crestron",
      "Light Points": "280+ DALI dimmable",
      "Climate Zones": "18 independent zones",
      Security: "32 cameras + biometric access",
      Audio: "14-zone Sonos distribution",
      "Curtain Motors": "24 Somfy motors",
    },
    testimonial: {
      quote:
        "Living in this villa is an experience. Everything responds to our mood and schedule. The Creatomat team understood exactly what we wanted.",
      name: "Priya Mewar",
      designation: "Homeowner",
    },
    gallery: [],
  },
  {
    slug: "luxury-apartment-jaipur",
    title: "Premium Apartment Automation",
    category: "home-automation",
    serviceSlug: "home-automation",
    location: "Jaipur, Rajasthan",
    industry: "Premium Residential",
    capacity: "3,500 sq ft",
    year: "2024",
    description:
      "Smart automation of a 4BHK premium apartment with wireless retrofit solution — voice control, automated lighting, smart AC, security integration, and video doorbell.",
    challenge:
      "Existing apartment with completed interiors — no scope for rewiring. Client wanted smart features without construction or aesthetic disruption.",
    solution:
      "Deployed a wireless Zigbee-based system using in-wall modules behind existing switches, smart IR blasters for AC control, wireless door sensors, and Alexa integration throughout.",
    results: [
      { metric: "Smart Devices", value: "65+" },
      { metric: "Voice Commands", value: "200+" },
      { metric: "Setup Time", value: "3 days" },
      { metric: "Energy Savings", value: "25%" },
    ],
    specifications: {
      Platform: "Zigbee 3.0 + WiFi",
      "Smart Switches": "32 Sonoff in-wall modules",
      "Voice Control": "4× Echo Dot + routines",
      "AC Control": "5× Broadlink IR blasters",
      Security: "Ring doorbell + 4 sensors",
      App: "Alexa + SmartThings",
    },
    gallery: [],
  },
  {
    slug: "farmhouse-automation-jodhpur",
    title: "Smart Farmhouse Estate",
    category: "home-automation",
    serviceSlug: "home-automation",
    location: "Jodhpur, Rajasthan",
    industry: "Estate / Farmhouse",
    capacity: "25,000 sq ft",
    year: "2023",
    description:
      "Large-scale automation of a desert farmhouse estate including main residence, guest cottages, pool area, landscape lighting, and perimeter security.",
    challenge:
      "Sprawling property with multiple structures, extreme desert temperatures, and frequent power outages required a robust, self-sufficient automation system.",
    solution:
      "Designed a solar-powered automation backbone with battery backup, weather-resistant outdoor controllers, automated irrigation with soil moisture sensors, and 4G-based remote access for the absentee owner.",
    results: [
      { metric: "Property Coverage", value: "100%" },
      { metric: "Water Savings", value: "40%" },
      { metric: "Solar Powered", value: "80%" },
      { metric: "Remote Management", value: "Full" },
    ],
    specifications: {
      Platform: "Loxone Miniserver + 4G",
      "Solar System": "10kW hybrid with ESS",
      Irrigation: "16-zone smart system",
      Security: "Thermal cameras + PIR",
      "Landscape Lighting": "120+ RGBW fixtures",
      "Pool Automation": "Pump + heater + lighting",
    },
    gallery: [],
  },

  // ===== SPM (3) =====
  {
    slug: "bobbin-winding-spm",
    title: "Automatic Bobbin Winding Machine",
    category: "spm",
    serviceSlug: "spm",
    location: "Bhilwara, Rajasthan",
    industry: "Textile",
    capacity: "12 Spindle",
    year: "2024",
    description:
      "Custom-designed 12-spindle automatic bobbin winding machine with programmable tension control, automatic doffing, and quality monitoring for premium yarn production.",
    challenge:
      "Manual winding caused inconsistent tension, high yarn wastage, and low throughput. Quality variation between operators was unacceptable for export-grade yarn.",
    solution:
      "Engineered a servo-driven winding system with electronic tension control, automatic traverse, programmable winding patterns, and integrated yarn break detection with auto-piecing.",
    results: [
      { metric: "Throughput", value: "4x manual" },
      { metric: "Yarn Wastage", value: "↓ 70%" },
      { metric: "Tension Variation", value: "±1%" },
      { metric: "Operator Requirement", value: "1 per 12 spindles" },
    ],
    specifications: {
      Spindles: "12 independent servo-driven",
      "Speed Range": "100-1500 RPM",
      "Tension Control": "Electronic dancer arm",
      "Winding Patterns": "8 programmable",
      "Yarn Range": "10-100 Ne count",
      "PLC Control": "Mitsubishi FX5U",
    },
    gallery: [],
  },
  {
    slug: "auto-assembly-station",
    title: "Automated Assembly & Testing Station",
    category: "spm",
    serviceSlug: "spm",
    location: "Neemrana, Rajasthan",
    industry: "Automotive",
    capacity: "600 parts/hour",
    year: "2023",
    description:
      "Multi-station automated assembly and testing system for automotive valve assemblies with press-fitting, torque tightening, leak testing, and vision inspection.",
    challenge:
      "Client needed to scale production 5x while maintaining zero-defect quality for a Tier-1 automotive OEM contract with stringent PPAP requirements.",
    solution:
      "Designed a 6-station rotary indexing machine with servo press, torque spindle, helium leak tester, vision camera, and automated accept/reject sorting with full data logging.",
    results: [
      { metric: "Cycle Time", value: "6 sec/part" },
      { metric: "Defect Rate", value: "< 1 PPM" },
      { metric: "Data Logging", value: "100%" },
      { metric: "OEE", value: "92%" },
    ],
    specifications: {
      Type: "Rotary indexing, 6-station",
      "Press Force": "5-ton servo press",
      "Leak Test": "Helium mass spectrometer",
      Vision: "Keyence CV-X series",
      "Data System": "SQL database + SPC",
      Safety: "CE compliant, Category 3",
    },
    gallery: [],
  },
  {
    slug: "leak-testing-machine",
    title: "Precision Leak Testing SPM",
    category: "spm",
    serviceSlug: "spm",
    location: "Manesar, Haryana",
    industry: "Automotive",
    capacity: "400 parts/hour",
    year: "2023",
    description:
      "High-precision air decay leak testing machine for cast aluminum housings with automatic loading, multi-point sealing, and pass/fail sorting.",
    challenge:
      "Manual leak testing was unreliable with high false rejection rates. The client needed traceable, repeatable testing at production speeds for an EV component contract.",
    solution:
      "Built a dual-station leak tester with precision pneumatic clamping, multi-cavity sealing fixtures, ATEQ air decay instruments, and barcode-linked test certificates.",
    results: [
      { metric: "Test Accuracy", value: "0.1 cc/min" },
      { metric: "False Rejections", value: "↓ 95%" },
      { metric: "Cycle Time", value: "9 sec/part" },
      { metric: "Traceability", value: "100%" },
    ],
    specifications: {
      Type: "Dual-station air decay",
      Instrument: "ATEQ F620",
      Resolution: "0.01 cc/min",
      "Test Pressure": "0.5-6.0 bar adjustable",
      Clamping: "Pneumatic, 8-point seal",
      Interface: "Barcode + MES integration",
    },
    gallery: [],
  },

  // ===== SOLAR EPC / HYBRID / ESS (6) =====
  {
    slug: "250kw-rooftop-bhilwara",
    title: "250 kW Industrial Rooftop Solar",
    category: "solar",
    serviceSlug: "solar-epc-hybrid-ess",
    location: "Bhilwara, Rajasthan",
    industry: "Textile Manufacturing",
    capacity: "250 kW",
    year: "2024",
    description:
      "Large-scale rooftop solar installation on a textile factory with optimized panel layout, string inverters, and net metering for maximum self-consumption.",
    challenge:
      "High electricity bills of ₹18L/month with a complex multi-level rooftop structure. The client needed maximum generation within the available roof area while maintaining structural safety.",
    solution:
      "Conducted detailed structural analysis, designed a custom elevated mounting structure for the multi-level roof, used bifacial modules for 10% extra yield, and installed weather-proof string inverters.",
    results: [
      { metric: "Annual Generation", value: "3.8 lakh units" },
      { metric: "Monthly Savings", value: "₹12L+" },
      { metric: "Payback Period", value: "3.2 years" },
      { metric: "CO₂ Offset", value: "375 T/year" },
    ],
    specifications: {
      Modules: "500× Adani 540W Bifacial",
      Inverters: "5× Huawei SUN2000-50KTL",
      Structure: "Hot-dip galvanized elevated",
      Monitoring: "Huawei FusionSolar IoT",
      "Net Metering": "JVVNL approved",
      Warranty: "25-year performance",
    },
    testimonial: {
      quote:
        "Our electricity bill dropped from ₹18 lakhs to ₹6 lakhs per month. The system paid for itself in 3 years. Outstanding work by Creatomat.",
      name: "Vikram Rathi",
      designation: "Director, Rathi Industries",
    },
    gallery: [],
  },
  {
    slug: "500kw-industrial-jodhpur",
    title: "500 kW Industrial Solar Plant",
    category: "solar",
    serviceSlug: "solar-epc-hybrid-ess",
    location: "Jodhpur, Rajasthan",
    industry: "Stone Processing",
    capacity: "500 kW",
    year: "2024",
    description:
      "Ground-mount and rooftop combined solar installation for a stone processing facility with high dust conditions, automated cleaning, and advanced monitoring.",
    challenge:
      "Extreme dust environment from stone cutting operations required a system that could maintain performance without frequent manual cleaning. High energy demand of 24/7 cutting operations.",
    solution:
      "Installed a combination of ground-mount and rooftop systems with robotic dry-cleaning system, anti-soiling coated modules, and a predictive maintenance platform for optimal performance.",
    results: [
      { metric: "Annual Generation", value: "7.5 lakh units" },
      { metric: "Monthly Savings", value: "₹22L+" },
      { metric: "Cleaning Savings", value: "₹4L/year" },
      { metric: "System Availability", value: "99.2%" },
    ],
    specifications: {
      Modules: "925× Jinko 540W Tiger Neo",
      Inverters: "2× Sungrow SG250HX central",
      Structure: "Ground-mount + Rooftop",
      Cleaning: "Robotic dry-clean system",
      Monitoring: "iSolarCloud + weather station",
      Cable: "UV-resistant DC + AC cables",
    },
    gallery: [],
  },
  {
    slug: "100kw-school-udaipur",
    title: "100 kW School Campus Solar",
    category: "solar",
    serviceSlug: "solar-epc-hybrid-ess",
    location: "Udaipur, Rajasthan",
    industry: "Education",
    capacity: "100 kW",
    year: "2023",
    description:
      "Solar installation across multiple school buildings with carport structures, educational display, and complete subsidy management.",
    challenge:
      "Multiple scattered rooftops of different ages and orientations. The school also wanted the installation to serve as an educational tool for students.",
    solution:
      "Designed a solar carport for the parking area plus optimized rooftop arrays. Installed a live display showing real-time generation, environmental impact, and energy science lessons.",
    results: [
      { metric: "Annual Generation", value: "1.5 lakh units" },
      { metric: "Annual Savings", value: "₹12L" },
      { metric: "Subsidy Received", value: "₹22L" },
      { metric: "Educational Impact", value: "2000 students" },
    ],
    specifications: {
      Modules: "185× Canadian Solar 540W",
      Inverters: "2× Growatt MAX 50KTL3",
      Structure: "Carport + Multi-roof",
      Display: "Live energy dashboard",
      Subsidy: "PM Surya Ghar + State",
      "Special Feature": "Student energy lab",
    },
    gallery: [],
  },
  {
    slug: "1mw-ground-mount-jaisalmer",
    title: "1 MW Ground Mount Solar Farm",
    category: "solar",
    serviceSlug: "solar-epc-hybrid-ess",
    location: "Jaisalmer, Rajasthan",
    industry: "Agriculture / Commercial",
    capacity: "1 MW",
    year: "2023",
    description:
      "Utility-scale ground-mount solar farm with single-axis tracking system, high-voltage grid connection, and comprehensive SCADA monitoring.",
    challenge:
      "Desert terrain with extreme temperatures (48°C+), sand storms, and remote location with limited grid infrastructure. The client needed maximum yield from the harsh environment.",
    solution:
      "Deployed single-axis tracking system for 25% extra yield, used high-temperature rated modules, designed dust-resistant mounting with elevated clearance, and installed a 33kV step-up transformer for grid injection.",
    results: [
      { metric: "Annual Generation", value: "18 lakh units" },
      { metric: "Tracking Gain", value: "+25%" },
      { metric: "Annual Revenue", value: "₹65L" },
      { metric: "Land Utilized", value: "4 acres" },
    ],
    specifications: {
      Modules: "1850× LONGi Hi-MO 6",
      Inverters: "4× Sungrow SG250HX",
      Tracking: "Nextracker NX Horizon",
      Transformer: "1250 kVA, 33kV",
      SCADA: "Full plant monitoring",
      Fencing: "Chain-link + CCTV",
    },
    gallery: [],
  },
  {
    slug: "hybrid-ess-resort-mount-abu",
    title: "Hybrid Solar + ESS Resort System",
    category: "solar",
    serviceSlug: "solar-epc-hybrid-ess",
    location: "Mount Abu, Rajasthan",
    industry: "Hospitality",
    capacity: "50 kW + 100 kWh ESS",
    year: "2024",
    description:
      "Hybrid solar installation with lithium battery storage for a hill station resort, providing uninterrupted power during frequent grid outages and eliminating diesel generator dependency.",
    challenge:
      "Remote hill location with 4-6 hours of daily power cuts. The resort was spending ₹8L/month on diesel generators, causing noise and pollution that degraded guest experience.",
    solution:
      "Designed a 50kW solar system with 100kWh lithium iron phosphate (LFP) battery bank, intelligent energy management system for load prioritization, and seamless grid-solar-battery switching.",
    results: [
      { metric: "Diesel Savings", value: "₹7L/month" },
      { metric: "Backup Duration", value: "8+ hours" },
      { metric: "Noise Elimination", value: "100%" },
      { metric: "Guest Satisfaction", value: "+45%" },
    ],
    specifications: {
      "Solar Modules": "93× Trina Vertex 540W",
      "Hybrid Inverter": "Sungrow SH50T",
      "Battery": "100 kWh LFP (BYD HVS)",
      "EMS": "Intelligent load management",
      "Backup Priority": "AC > Lighting > Kitchen",
      "DG Integration": "Auto-start failsafe",
    },
    testimonial: {
      quote:
        "No more generator noise disturbing our guests. The switch from diesel to solar+battery has been transformational for our resort experience.",
      name: "Ankit Sharma",
      designation: "GM, Hilltop Resort",
    },
    gallery: [],
  },
  {
    slug: "50kw-ev-station-jaipur",
    title: "Solar-Powered EV Charging Hub",
    category: "solar",
    serviceSlug: "solar-epc-hybrid-ess",
    location: "Jaipur, Rajasthan",
    industry: "EV Infrastructure",
    capacity: "50 kW Solar + 4 Chargers",
    year: "2024",
    description:
      "Solar canopy with integrated EV charging infrastructure — 4 fast chargers powered primarily by on-site solar generation with grid backup and battery buffer.",
    challenge:
      "The client wanted to set up an EV charging station that would be profitable from day one, with minimal grid dependency and a strong green brand image.",
    solution:
      "Designed a solar carport canopy generating 200 units/day, paired with a 50kWh battery buffer for demand management, and 4 fast chargers (2×30kW DC + 2×7kW AC) with payment integration.",
    results: [
      { metric: "Solar Self-Consumption", value: "85%" },
      { metric: "Chargers", value: "4 (2 DC + 2 AC)" },
      { metric: "Daily Capacity", value: "40+ vehicles" },
      { metric: "Revenue Potential", value: "₹3L/month" },
    ],
    specifications: {
      "Solar Canopy": "50 kW bifacial",
      "DC Chargers": "2× 30kW CCS2/CHAdeMO",
      "AC Chargers": "2× 7kW Type-2",
      "Battery Buffer": "50 kWh LFP",
      "Payment": "RFID + QR + App",
      Software: "OCPP 2.0 compliant CMS",
    },
    gallery: [],
  },
];

export function getAllProjectSlugs(): string[] {
  return PROJECTS_DATA.map((p) => p.slug);
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}

export function getProjectsByServiceSlug(serviceSlug: string): ProjectData[] {
  return PROJECTS_DATA.filter((p) => p.serviceSlug === serviceSlug);
}

export function getProjectsByCategory(category: ProjectData["category"]): ProjectData[] {
  return PROJECTS_DATA.filter((p) => p.category === category);
}

export function getRelatedProjects(currentSlug: string, serviceSlug: string, limit = 3): ProjectData[] {
  return PROJECTS_DATA.filter((p) => p.serviceSlug === serviceSlug && p.slug !== currentSlug).slice(0, limit);
}

// ─── Sanity-backed async functions (fall back to static data) ───────────────

import { client, isSanityConfigured } from "@/sanity/lib/client";
import {
  ALL_PROJECTS_QUERY,
  ALL_PROJECT_SLUGS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  FEATURED_PROJECTS_QUERY,
} from "@/sanity/lib/queries";

function normalizeProject(raw: Record<string, unknown>): ProjectData {
  const specs: Record<string, string> = {};
  if (Array.isArray(raw.specifications)) {
    for (const item of raw.specifications as { key: string; value: string }[]) {
      if (item.key) specs[item.key] = item.value ?? "";
    }
  }
  return { ...raw, specifications: specs, gallery: (raw.gallery as string[]) ?? [] } as ProjectData;
}

export async function fetchAllProjects(): Promise<ProjectData[]> {
  if (!isSanityConfigured) return PROJECTS_DATA;
  try {
    const data = await client.fetch<Record<string, unknown>[]>(ALL_PROJECTS_QUERY, {}, { next: { tags: ["project"] } });
    if (!data?.length) return PROJECTS_DATA;
    return data.map(normalizeProject);
  } catch {
    return PROJECTS_DATA;
  }
}

export async function fetchAllProjectSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return getAllProjectSlugs();
  try {
    const slugs = await client.fetch<string[]>(ALL_PROJECT_SLUGS_QUERY, {}, { next: { tags: ["project"] } });
    return [...new Set([...getAllProjectSlugs(), ...(slugs ?? [])])];
  } catch {
    return getAllProjectSlugs();
  }
}

export async function fetchProjectBySlug(slug: string): Promise<ProjectData | undefined> {
  if (!isSanityConfigured) return getProjectBySlug(slug);
  try {
    const data = await client.fetch<Record<string, unknown> | null>(PROJECT_BY_SLUG_QUERY, { slug }, { next: { tags: [`project:${slug}`] } });
    if (!data) return getProjectBySlug(slug);
    return normalizeProject(data);
  } catch {
    return getProjectBySlug(slug);
  }
}

export async function fetchProjectsByServiceSlug(serviceSlug: string): Promise<ProjectData[]> {
  const all = await fetchAllProjects();
  return all.filter((p) => p.serviceSlug === serviceSlug);
}

export async function fetchRelatedProjects(currentSlug: string, serviceSlug: string, limit = 3): Promise<ProjectData[]> {
  const all = await fetchAllProjects();
  return all.filter((p) => p.serviceSlug === serviceSlug && p.slug !== currentSlug).slice(0, limit);
}

export async function fetchFeaturedProjects(): Promise<ProjectData[]> {
  if (!isSanityConfigured) {
    return PROJECTS_DATA.filter((p) =>
      ["250kw-rooftop-bhilwara", "textile-automation-bhilwara", "smart-villa-udaipur", "bobbin-winding-spm"].includes(p.slug)
    );
  }
  try {
    const data = await client.fetch<Record<string, unknown>[]>(FEATURED_PROJECTS_QUERY, {}, { next: { tags: ["project"] } });
    if (!data?.length) {
      return PROJECTS_DATA.filter((p) =>
        ["250kw-rooftop-bhilwara", "textile-automation-bhilwara", "smart-villa-udaipur", "bobbin-winding-spm"].includes(p.slug)
      );
    }
    return data.map(normalizeProject);
  } catch {
    return PROJECTS_DATA.filter((p) =>
      ["250kw-rooftop-bhilwara", "textile-automation-bhilwara", "smart-villa-udaipur", "bobbin-winding-spm"].includes(p.slug)
    );
  }
}
