/**
 * Sanity Seed Script — migrates all hardcoded content into your Sanity dataset.
 *
 * Usage:
 *   node scripts/seed-sanity.mjs
 *
 * Prerequisites:
 *   1. Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and
 *      SANITY_API_TOKEN in .env.local (token needs Editor or above permissions).
 *   2. Run from the project root.
 *
 * This script is safe to re-run — it uses createOrReplace so existing
 * documents are updated, not duplicated.
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local manually (no dotenv dependency needed)
function loadEnv() {
  const envPath = resolve(__dirname, "../.env.local");
  try {
    const raw = readFileSync(envPath, "utf8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const [key, ...rest] = trimmed.split("=");
      process.env[key.trim()] = rest.join("=").trim();
    }
  } catch {
    // .env.local not found — rely on existing process.env
  }
}

loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || projectId === "your-project-id-here") {
  console.error("❌  NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local");
  process.exit(1);
}
if (!token || token === "your-api-token-here") {
  console.error("❌  SANITY_API_TOKEN is not set in .env.local");
  process.exit(1);
}

const client = createClient({ projectId, dataset, token, apiVersion: "2024-01-01", useCdn: false });

// ─── Static data (inlined to avoid TS import issues) ─────────────────────────

const CLIENTS = ["Tata Group","Adani","L&T","Siemens","Havells","Schneider","ABB India","Bajaj","JSW Steel","Ultratech"];

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "MW+", label: "Capacity Installed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Happy Clients" },
];

const BENEFITS = [
  { value: "40%", label: "Average Energy Savings" },
  { value: "35%", label: "Efficiency Boost" },
  { value: "3-4", suffix: " Yrs", label: "Payback Period" },
  { value: "99.5%", label: "System Uptime" },
];

const WHY_CHOOSE_US = [
  { title: "Made in India", description: "Proudly designed and manufactured domestically", icon: "Flag" },
  { title: "Turnkey Solutions", description: "Complete project delivery from concept to commissioning", icon: "Key" },
  { title: "15+ Years Experience", description: "Deep expertise in engineering and energy systems", icon: "Award" },
  { title: "ISO Certified", description: "Quality management systems meeting global standards", icon: "ShieldCheck" },
  { title: "Custom Engineering", description: "Every solution tailored to your specific requirements", icon: "Ruler" },
  { title: "Lifetime Support", description: "Post-installation monitoring and maintenance", icon: "Headphones" },
];

const INDUSTRIES = [
  { name: "Manufacturing", description: "Automated lines & solar rooftops" },
  { name: "Textiles", description: "Energy-efficient production systems" },
  { name: "Pharmaceuticals", description: "Clean energy for clean rooms" },
  { name: "Agriculture", description: "Solar pumps & rural electrification" },
  { name: "Commercial", description: "Office & retail energy solutions" },
  { name: "Hospitality", description: "Cost-effective hotel power systems" },
  { name: "Education", description: "Campus solar & smart systems" },
  { name: "Government", description: "PSU & municipal energy projects" },
];

const PROCESS_STEPS = [
  { step: 1, title: "Consultation", description: "We assess your requirements, site conditions, and project objectives." },
  { step: 2, title: "Engineering Design", description: "Our team designs the optimal solution — solar, automation, SPM, or smart home." },
  { step: 3, title: "Build & Install", description: "Professional manufacturing and installation with zero disruption to your operations." },
  { step: 4, title: "Monitor & Support", description: "Ongoing performance monitoring, maintenance, and lifetime support." },
];

const SERVICES_HOME = [
  { title: "Solar EPC & Hybrid ESS", description: "End-to-end solar project execution — rooftop, ground-mount, hybrid, and off-grid ESS systems with battery storage.", icon: "Sun", href: "/services/solar-epc-hybrid-ess" },
  { title: "Industrial Automation", description: "PLC/SCADA-based automation systems that boost efficiency, reduce waste, and deliver real-time operational visibility.", icon: "Cpu", href: "/services/industrial-automation" },
  { title: "Special Purpose Machines", description: "Custom-engineered SPMs tailored to your exact manufacturing needs. Designed, built, and commissioned in-house.", icon: "Cog", href: "/services/spm" },
  { title: "Home Automation", description: "Smart home systems with centralized control — lighting, HVAC, security, curtains, and voice-integrated living.", icon: "Home", href: "/services/home-automation" },
  { title: "Electrical Panels & Power", description: "MCC, PCC, APFC panels, VFD drives, and complete electrical infrastructure for industrial and commercial setups.", icon: "Zap", href: "/services" },
  { title: "Maintenance & AMC", description: "Annual maintenance contracts with guaranteed uptime, predictive servicing, and rapid response across all systems.", icon: "Wrench", href: "/services" },
];

const TESTIMONIALS = [
  { _id: "testimonial-1", quote: "Creatomat delivered our 250 kW solar plant on time and within budget. The quality of engineering is exceptional, and our electricity bills dropped by 45%.", name: "Rajesh Sharma", designation: "Plant Head", company: "Shree Industries", order: 1 },
  { _id: "testimonial-2", quote: "Their automation solutions transformed our production line. We saw a 30% efficiency gain within the first quarter. Truly world-class engineering.", name: "Priya Mehta", designation: "Operations Director", company: "Mehta Textiles", order: 2 },
  { _id: "testimonial-3", quote: "From consultation to commissioning, the Creatomat team was professional and transparent. Our solar investment is already paying for itself.", name: "Amit Jain", designation: "Managing Director", company: "Jain Pharmaceuticals", order: 3 },
];

const FAQS = [
  { _id: "faq-1", question: "What services does Creatomat offer?", answer: "We provide four core services: Solar EPC (rooftop, ground-mount, hybrid ESS), Industrial Automation (PLC/SCADA systems), Special Purpose Machines (custom manufacturing equipment), and Home Automation (smart lighting, HVAC, security). We also offer electrical panels, AMC, and training.", order: 1 },
  { _id: "faq-2", question: "How much does a solar system cost for my business?", answer: "The cost depends on system size, location, and type (on-grid, hybrid, or off-grid). A typical commercial rooftop system ranges from ₹40,000 to ₹55,000 per kW. We provide free site assessments and detailed quotes.", order: 2 },
  { _id: "faq-3", question: "Can you automate our existing production line?", answer: "Yes, we specialize in retrofitting existing production lines with PLC/SCADA control systems, VFD drives, and HMI panels. Most automation projects deliver 25-35% efficiency gains with payback under 2 years.", order: 3 },
  { _id: "faq-4", question: "Do you design and build custom machines (SPMs)?", answer: "Absolutely. We design, manufacture, and commission Special Purpose Machines in-house. From concept to delivery, every SPM is engineered for your specific production requirements with full testing and training.", order: 4 },
  { _id: "faq-5", question: "What smart home systems do you install?", answer: "Our home automation covers smart lighting, motorized curtains, HVAC control, security systems, and centralized app/voice control. We work with premium brands and design systems for villas, apartments, and farmhouses.", order: 5 },
  { _id: "faq-6", question: "Do you provide after-sales support and AMC?", answer: "Yes, we offer comprehensive Annual Maintenance Contracts for all our systems — solar, automation, and SPMs. Our AMC includes preventive maintenance, 24/7 remote monitoring, and rapid emergency response with 99.5% uptime guarantee.", order: 6 },
];

// Services data (abbreviated — full data in services.ts)
const SERVICES_DATA = [
  { slug: "industrial-automation", category: "Automation", title: "Industrial Automation", tagline: "Smart Factories. Intelligent Systems.", heroDescription: "End-to-end industrial automation solutions — from PLC programming and SCADA integration to complete factory automation systems.", icon: "Cpu", color: "from-blue-500 to-cyan-500", stats: [{ value: "200+", label: "Systems Deployed" }, { value: "40%", label: "Avg. Efficiency Gain" }, { value: "99.8%", label: "System Uptime" }, { value: "15+", label: "Industries Served" }], features: [{ title: "PLC & SCADA Systems", description: "Custom PLC programming with SCADA visualization for real-time monitoring and control.", icon: "Cpu" }, { title: "Robotic Integration", description: "Seamless integration of industrial robots for pick-and-place, welding, packaging, and assembly.", icon: "Cog" }, { title: "IoT & Industry 4.0", description: "Connected factory solutions with IoT sensors, edge computing, and cloud dashboards.", icon: "Wifi" }, { title: "Electrical Panel Design", description: "Custom MCC, PCC, APFC, and VFD panels designed to IS/IEC standards.", icon: "Zap" }], process: [{ step: 1, title: "Process Audit", description: "We study your existing production workflow and map automation opportunities." }, { step: 2, title: "System Architecture", description: "Our engineers design the complete automation architecture." }, { step: 3, title: "Manufacturing & Integration", description: "In-house panel manufacturing, software development, and hardware integration." }, { step: 4, title: "Commissioning & Training", description: "On-site installation, commissioning, performance validation, and operator training." }], useCases: ["Textile Manufacturing", "Food & Beverage Processing", "Pharmaceutical Production", "Cement & Mining", "Water Treatment Plants", "Packaging Lines"], faq: [{ question: "What industries do you serve for automation?", answer: "We serve textile, food processing, pharmaceutical, cement, mining, water treatment, packaging, and general manufacturing industries." }, { question: "Do you provide AMC for automation systems?", answer: "Yes, we offer comprehensive Annual Maintenance Contracts covering preventive maintenance, breakdown support, and spare parts management." }] },
  { slug: "home-automation", category: "Automation", title: "Home Automation", tagline: "Intelligent Living. Effortless Control.", heroDescription: "Transform your home into a smart, connected living space with lighting, climate control, security, and entertainment automation.", icon: "Home", color: "from-violet-500 to-purple-500", stats: [{ value: "100+", label: "Homes Automated" }, { value: "30%", label: "Energy Savings" }, { value: "24/7", label: "Remote Access" }, { value: "5★", label: "Client Rating" }], features: [{ title: "Smart Lighting Control", description: "Automated lighting scenes, dimming, color tuning, and scheduling.", icon: "Sun" }, { title: "Climate & HVAC Automation", description: "Intelligent AC/heating control with occupancy sensors and scheduling.", icon: "Thermometer" }, { title: "Security & Surveillance", description: "Integrated CCTV, smart locks, and alarm systems with real-time mobile alerts.", icon: "Shield" }, { title: "Voice & App Control", description: "Seamless integration with Alexa, Google Home, and Apple HomeKit.", icon: "Smartphone" }], process: [{ step: 1, title: "Lifestyle Consultation", description: "We understand your daily routines and preferences to design the right system." }, { step: 2, title: "System Design", description: "Custom wiring diagrams, device selection, and scene programming." }, { step: 3, title: "Installation & Programming", description: "Clean installation with meticulous cable management and scene programming." }, { step: 4, title: "Handover & Support", description: "Personal walkthrough, family training, and ongoing remote support." }], useCases: ["Luxury Villas", "Premium Apartments", "Farmhouses", "Penthouse Suites", "Home Offices", "Guest Houses"], faq: [{ question: "Can home automation work with my existing wiring?", answer: "In most cases, yes. We offer both wired and wireless solutions." }, { question: "Is it possible to start small and expand later?", answer: "Absolutely. Our systems are modular — you can start with lighting control and gradually add more." }] },
  { slug: "spm", category: "Manufacturing", title: "Special Purpose Machines", tagline: "Precision Engineering. Custom Solutions.", heroDescription: "We design and manufacture custom Special Purpose Machines (SPMs) for unique production challenges — from concept to commissioning.", icon: "Cog", color: "from-amber-500 to-orange-500", stats: [{ value: "50+", label: "SPMs Delivered" }, { value: "3x", label: "Productivity Boost" }, { value: "±0.01mm", label: "Precision Level" }, { value: "100%", label: "Custom Built" }], features: [{ title: "Custom Machine Design", description: "Ground-up machine design with 3D CAD modeling and FEA analysis.", icon: "PenTool" }, { title: "Precision Fabrication", description: "In-house CNC machining, precision grinding, and assembly with ±0.01mm tolerances.", icon: "Ruler" }, { title: "Inspection & Gauging", description: "Automated quality inspection systems with machine vision and defect detection.", icon: "Eye" }, { title: "Retrofit & Upgrades", description: "Modernization of existing machinery with new controls and enhanced automation.", icon: "RefreshCw" }], process: [{ step: 1, title: "Requirement Study", description: "Deep-dive into your production challenge — cycle time targets, quality specs." }, { step: 2, title: "Concept & 3D Design", description: "Multiple concept proposals with 3D CAD visualization and engineering calculations." }, { step: 3, title: "Manufacturing & Assembly", description: "Precision manufacturing with CNC machining and in-house assembly." }, { step: 4, title: "Testing & Delivery", description: "Rigorous factory acceptance testing and client witness testing." }], useCases: ["Automotive Components", "Textile Machinery", "Pharmaceutical Packaging", "Precision Assembly", "Quality Inspection", "Custom Testing Rigs"], faq: [{ question: "What is the typical timeline for a custom SPM?", answer: "Depending on complexity, typical timelines range from 8-16 weeks from design approval to delivery." }, { question: "Do you provide machine drawings and documentation?", answer: "Yes, every SPM comes with complete engineering drawings, operation manuals, and spare parts lists." }] },
  { slug: "solar-epc-hybrid-ess", category: "Energy", title: "Solar EPC / Hybrid / ESS", tagline: "Clean Energy. Complete Solutions.", heroDescription: "Full-spectrum solar energy solutions — from on-grid rooftop systems to hybrid installations with battery storage.", icon: "Sun", color: "from-yellow-500 to-green-500", stats: [{ value: "10MW+", label: "Capacity Installed" }, { value: "500+", label: "Systems Deployed" }, { value: "25yr", label: "Performance Warranty" }, { value: "₹2Cr+", label: "Client Savings/Year" }], features: [{ title: "On-Grid Solar EPC", description: "Complete rooftop and ground-mount solar installations with net metering.", icon: "Sun" }, { title: "Hybrid Solar Systems", description: "Solar + battery hybrid systems for uninterrupted power.", icon: "Zap" }, { title: "Energy Storage (ESS)", description: "Lithium-ion battery storage systems for peak shaving and backup power.", icon: "Battery" }, { title: "Solar O&M Services", description: "Comprehensive operations and maintenance with remote monitoring.", icon: "Wrench" }], process: [{ step: 1, title: "Site Assessment", description: "Shadow analysis, structural assessment, and drone mapping." }, { step: 2, title: "System Design & Approval", description: "PVsyst simulation, BOQ preparation, DISCOM application, and subsidy filing." }, { step: 3, title: "Procurement & Installation", description: "Tier-1 equipment procurement, structure fabrication, and grid synchronization." }, { step: 4, title: "Commissioning & Monitoring", description: "DISCOM inspection, net metering activation, and IoT monitoring setup." }], useCases: ["Residential Rooftop", "Commercial Buildings", "Industrial Facilities", "Agricultural Pumping", "Institutional Campuses", "EV Charging Stations"], faq: [{ question: "What is the ROI on a solar installation?", answer: "Typical payback period is 3-5 years for commercial and 4-6 years for residential systems." }, { question: "What subsidies are available?", answer: "Under PM Surya Ghar, residential systems get 40% subsidy for first 3kW and 20% for 3-10kW." }, { question: "What is the difference between on-grid and hybrid?", answer: "On-grid systems feed excess power to the grid. Hybrid systems add battery storage for power backup." }] },
];

const PRODUCTS_DATA = [
  // ── Electrical Panels (Industrial Automation) ───────────────────────────────
  { slug: "mcc-panel", title: "Motor Control Center (MCC) Panel", category: "Electrical Panels", serviceSlug: "industrial-automation", shortDescription: "Fully compartmentalized MCC panels for centralized motor control with VFD integration.", fullDescription: "Our MCC panels are designed to IS/IEC 61439 standards, featuring fully compartmentalized construction with withdrawable functional units.", features: ["IS/IEC 61439 certified design", "Fully compartmentalized construction", "Withdrawable functional units", "Modbus RTU / PROFINET communication", "Arc flash protection (optional)", "IP54 / IP55 rated enclosure"], specifications: [{ key: "Voltage Rating", value: "415V AC, 3-phase" }, { key: "Bus Bar Rating", value: "Up to 6300A" }, { key: "Short Circuit", value: "Up to 65 kA for 1 sec" }, { key: "Protection Class", value: "IP54 / IP55" }, { key: "Standards", value: "IS 61439-1, IS 61439-2" }], applications: ["Textile Mills", "Cement Plants", "Water Treatment", "Food Processing", "Chemical Industries"], relatedProductSlugs: ["vfd-drive-panel", "apfc-panel", "plc-scada-system"] },
  { slug: "vfd-drive-panel", title: "VFD Drive Panel", category: "Electrical Panels", serviceSlug: "industrial-automation", shortDescription: "Variable Frequency Drive panels for precise motor speed control with energy savings up to 40%.", fullDescription: "Our VFD panels provide precise motor speed control with proper cable segregation, EMC filters, and thermal management for demanding environments.", features: ["Multi-drive or single-drive configurations", "Built-in EMC/RFI filters", "Dedicated cooling with filtered fans", "Line and load reactors included", "Bypass contactor option", "Energy metering built-in", "Touch-safe design"], specifications: [{ key: "Drive Range", value: "0.75 kW to 500 kW" }, { key: "Input Voltage", value: "415V AC ±10%, 3-phase" }, { key: "Output Frequency", value: "0-120 Hz" }, { key: "EMC Filter", value: "Class C2 / C1" }, { key: "Drive Brands", value: "ABB, Siemens, Schneider, Danfoss" }], applications: ["Conveyor Systems", "Pump Stations", "HVAC Systems", "Compressors", "Winding Machines", "Crushers & Mixers"], relatedProductSlugs: ["mcc-panel", "plc-scada-system", "apfc-panel"] },
  { slug: "plc-scada-system", title: "PLC & SCADA Automation System", category: "Automation Systems", serviceSlug: "industrial-automation", shortDescription: "Turnkey PLC programming and SCADA integration for complete process monitoring and control.", fullDescription: "We deliver complete PLC and SCADA solutions from system design to commissioning. Supports Siemens, Allen Bradley, Mitsubishi, and Delta PLCs.", features: ["Multi-brand PLC support", "Custom SCADA visualization", "Remote access via VPN/cloud", "Historical data logging & trending", "SMS/email alarm notifications", "Recipe management systems", "Report generation (shift/daily/monthly)", "Redundant controller options"], specifications: [{ key: "PLC Brands", value: "Siemens, Allen Bradley, Mitsubishi, Delta" }, { key: "SCADA Software", value: "WinCC, FactoryTalk, Ignition" }, { key: "Communication", value: "PROFINET, EtherNet/IP, Modbus TCP" }, { key: "I/O Capacity", value: "Up to 10,000+ points" }, { key: "Remote Access", value: "VPN + cloud dashboard" }], applications: ["Process Industries", "Water Treatment", "Power Plants", "Building Management", "Packaging Lines"], relatedProductSlugs: ["mcc-panel", "vfd-drive-panel"] },
  { slug: "apfc-panel", title: "APFC Power Factor Correction Panel", category: "Electrical Panels", serviceSlug: "industrial-automation", shortDescription: "Automatic Power Factor Correction panels to maintain unity power factor and avoid penalty charges.", fullDescription: "Our APFC panels automatically maintain power factor at 0.99 by switching capacitor banks. Equipped with intelligent controllers and thyristor switching.", features: ["Automatic capacitor bank switching", "Thyristor or contactor switching", "Detuned reactor for harmonic mitigation", "Multi-stage stepping (up to 14 stages)", "Power quality analyzer built-in", "RS485 Modbus communication"], specifications: [{ key: "kVAR Range", value: "50 to 1000 kVAR" }, { key: "Voltage", value: "415V AC, 3-phase" }, { key: "Target PF", value: "0.99 leading/lagging" }, { key: "Stages", value: "6/8/10/12/14 steps" }, { key: "Switching", value: "Thyristor (< 20ms) or Contactor" }], applications: ["Industrial Plants", "Commercial Buildings", "IT Parks", "Hospitals", "Hotels & Malls"], relatedProductSlugs: ["mcc-panel", "vfd-drive-panel"] },
  // ── Home Automation ─────────────────────────────────────────────────────────
  { slug: "smart-switch-panel", title: "Smart Home Switch Panel", category: "Home Automation", serviceSlug: "home-automation", shortDescription: "Elegant touch-screen smart switch panels with scene control, scheduling, and voice assistant integration.", fullDescription: "Our smart switch panels replace conventional switches with sleek capacitive touch interfaces. Available in 2/4/6/8 gang configurations with WiFi/Zigbee connectivity.", features: ["Capacitive touch with haptic feedback", "LED backlit buttons", "Scene control (up to 4 scenes per panel)", "Scheduling & timer functions", "WiFi + Zigbee dual protocol", "Alexa / Google Home / HomeKit compatible", "Tempered glass faceplate"], specifications: [{ key: "Gang Options", value: "2 / 4 / 6 / 8 gang" }, { key: "Load Rating", value: "16A per channel" }, { key: "Connectivity", value: "WiFi 2.4GHz + Zigbee 3.0" }, { key: "App Control", value: "Tuya / SmartLife" }, { key: "Colors", value: "Midnight Black, Pearl White, Gold" }], applications: ["Living Rooms", "Bedrooms", "Home Offices", "Hotels & BnBs", "Conference Rooms"], relatedProductSlugs: ["home-controller-hub", "motorized-curtain-system"] },
  { slug: "home-controller-hub", title: "Central Home Automation Hub", category: "Home Automation", serviceSlug: "home-automation", shortDescription: "Central controller hub for unified management of all smart home devices with local processing and cloud backup.", fullDescription: "The central hub connects and controls all devices through a single interface. With local processing for privacy and speed, and cloud backup for remote access.", features: ["Multi-protocol support (Zigbee, Z-Wave, WiFi, BLE)", "Local processing — works without internet", "Cloud backup & remote access", "Automation rules & scene engine", "Energy monitoring dashboard", "Voice assistant bridge", "OTA firmware updates"], specifications: [{ key: "Processor", value: "Quad-core ARM Cortex-A55" }, { key: "Memory", value: "2GB RAM, 16GB eMMC" }, { key: "Protocols", value: "Zigbee 3.0, Z-Wave Plus, WiFi, BLE 5.0" }, { key: "Max Devices", value: "200+ devices" }, { key: "Power", value: "5V DC, 2A (USB-C)" }], applications: ["Whole-home Automation", "Smart Apartments", "Hotel Room Control", "Office Automation"], relatedProductSlugs: ["smart-switch-panel", "motorized-curtain-system"] },
  { slug: "motorized-curtain-system", title: "Motorized Curtain & Blind System", category: "Home Automation", serviceSlug: "home-automation", shortDescription: "Silent motorized curtain tracks and roller blind systems with app control, scheduling, and sun-tracking.", fullDescription: "Our motorized curtain systems combine ultra-quiet Somfy motors with precision-engineered tracks for smooth, silent operation up to 40kg per track.", features: ["Ultra-quiet operation (< 35dB)", "Up to 40kg fabric capacity", "Sun-tracking automation", "Integration with lighting scenes", "Touch, app, and voice control", "Battery-powered option available", "Custom track lengths up to 8m"], specifications: [{ key: "Motor", value: "Somfy Glydea Ultra 60" }, { key: "Noise Level", value: "< 35 dB" }, { key: "Max Load", value: "40 kg per track" }, { key: "Track Length", value: "Custom up to 8m" }, { key: "Warranty", value: "5 years motor, 2 years electronics" }], applications: ["Living Rooms", "Bedrooms", "Home Theaters", "Hotel Rooms", "Conference Rooms"], relatedProductSlugs: ["smart-switch-panel", "home-controller-hub"] },
  // ── SPM ─────────────────────────────────────────────────────────────────────
  { slug: "bobbin-winding-machine", title: "Automatic Bobbin Winding Machine", category: "SPM", serviceSlug: "spm", shortDescription: "High-speed automatic bobbin winding with programmable tension, traverse, and pattern control.", fullDescription: "Our flagship SPM for the textile industry with servo-driven spindles, electronic tension control, automatic doffing, and integrated quality monitoring.", features: ["Servo-driven spindle motors", "Electronic tension control (±1%)", "Programmable winding patterns", "Automatic doffing system", "Yarn break detection + alarm", "Touch-screen HMI operation", "Batch counter & production log"], specifications: [{ key: "Spindles", value: "4 / 8 / 12 / 16 configuration" }, { key: "Speed Range", value: "100-1500 RPM" }, { key: "Yarn Count", value: "10-100 Ne" }, { key: "Tension Range", value: "5-500 gf" }, { key: "PLC", value: "Mitsubishi FX5U" }], applications: ["Yarn Manufacturing", "Technical Textiles", "Wire & Cable", "Thread Production"], relatedProductSlugs: ["auto-crimping-machine", "testing-rig"] },
  { slug: "auto-crimping-machine", title: "Automatic Wire Crimping Machine", category: "SPM", serviceSlug: "spm", shortDescription: "High-speed automatic wire cutting, stripping, and crimping with force monitoring and quality verification.", fullDescription: "Precision automatic wire processing machine for high-volume harness manufacturing with servo-driven feeding, rotary stripping, and crimp force monitoring.", features: ["Cut-strip-crimp in one cycle", "Crimp force monitoring (CFM)", "Servo-driven wire feed (±0.5mm)", "Automatic terminal feeding", "SPC analysis & data logging", "Quick-change tooling system", "Touch-screen recipe management"], specifications: [{ key: "Wire Range", value: "0.1 - 6 sq mm" }, { key: "Cut Length", value: "25mm - 10m" }, { key: "Speed", value: "Up to 5000 pcs/hour" }, { key: "Accuracy", value: "Length ±0.5mm, strip ±0.2mm" }], applications: ["Automotive Harnesses", "Appliance Wiring", "Control Panel Wiring", "Solar Cable Assembly", "EV Cable Harness"], relatedProductSlugs: ["bobbin-winding-machine", "testing-rig"] },
  { slug: "testing-rig", title: "Custom Testing & Gauging Rig", category: "SPM", serviceSlug: "spm", shortDescription: "Custom-built testing rigs for dimensional, functional, and endurance testing with data logging.", fullDescription: "We design and build custom testing rigs for end-of-line quality verification with automated test sequences, go/no-go gauging, and data logging.", features: ["Custom test sequence programming", "Go/No-Go dimensional gauging", "Leak testing integration", "Load/force measurement", "Vision inspection option", "Automated pass/fail sorting", "Database logging & certificates"], specifications: [{ key: "Actuation", value: "Pneumatic / Hydraulic / Servo" }, { key: "Force Range", value: "10N - 100kN" }, { key: "Resolution", value: "0.001mm / 0.1N" }, { key: "PLC", value: "Siemens / Mitsubishi" }, { key: "Safety", value: "Light curtain + two-hand control" }], applications: ["Automotive Components", "Hydraulic Fittings", "Electrical Assemblies", "Castings & Forgings"], relatedProductSlugs: ["bobbin-winding-machine", "auto-crimping-machine"] },
  // ── Solar Equipment ──────────────────────────────────────────────────────────
  { slug: "solar-inverter-string", title: "Solar String Inverter", category: "Solar Equipment", serviceSlug: "solar-epc-hybrid-ess", shortDescription: "High-efficiency string inverters for rooftop and ground-mount solar installations.", fullDescription: "Premium string inverters with MPPT technology, smart monitoring, and 10-year warranty. Compatible with all major solar module brands.", features: ["Multi-MPPT tracking", "IoT monitoring built-in", "Wide voltage range", "Anti-PID function", "DC arc-fault protection", "Night communication function"], specifications: [{ key: "Power Range", value: "5 kW to 110 kW" }, { key: "Efficiency", value: "98.6%" }, { key: "Warranty", value: "10 years standard" }, { key: "Communication", value: "WiFi / RS485 / Ethernet" }], applications: ["Residential Rooftop", "Commercial Solar", "Industrial Solar", "Ground-mount"], relatedProductSlugs: ["solar-module-mono", "battery-lithium-ess"] },
  { slug: "solar-module-mono", title: "Mono PERC Solar Module", category: "Solar Equipment", serviceSlug: "solar-epc-hybrid-ess", shortDescription: "High-efficiency mono PERC modules with 25-year performance warranty.", fullDescription: "Tier-1 mono PERC modules with anti-reflective coating, robust aluminum frame, and excellent low-light performance.", features: ["High efficiency: 21%+", "25-year linear performance warranty", "Bifacial option available", "Anti-soiling coating (optional)", "Excellent low-light performance"], specifications: [{ key: "Power Range", value: "400W – 580W" }, { key: "Cell Type", value: "Mono PERC / TOPCon" }, { key: "Efficiency", value: "Up to 22.3%" }, { key: "Temperature Coefficient", value: "-0.35%/°C" }], applications: ["Residential", "Commercial", "Industrial", "Ground-mount", "Agrivoltaics"], relatedProductSlugs: ["solar-inverter-string"] },
  { slug: "battery-lithium-ess", title: "Lithium Iron Phosphate (LFP) Battery ESS", category: "Solar Equipment", serviceSlug: "solar-epc-hybrid-ess", shortDescription: "LFP battery energy storage systems for solar hybrid and off-grid backup power applications.", fullDescription: "Safe, long-life LFP battery modules for residential, commercial, and industrial energy storage. Compatible with major hybrid inverter brands.", features: ["LFP chemistry — safest lithium type", "6000+ charge cycles at 80% DoD", "Modular and scalable", "Built-in BMS with cell balancing", "Compatible with Sungrow, Growatt, Huawei", "Remote monitoring via app"], specifications: [{ key: "Capacity Range", value: "5 kWh to 200+ kWh" }, { key: "Cycle Life", value: "6000+ cycles at 80% DoD" }, { key: "Chemistry", value: "LiFePO4 (LFP)" }, { key: "Efficiency", value: "95%+ round-trip" }, { key: "Operating Temp", value: "-10°C to 50°C" }], applications: ["Residential Hybrid Solar", "Commercial Load Shifting", "Industrial Backup", "Remote Off-Grid", "EV Charging Buffer"], relatedProductSlugs: ["solar-inverter-string", "net-meter-bidirectional"] },
  { slug: "net-meter-bidirectional", title: "Bidirectional Net Energy Meter", category: "Solar Equipment", serviceSlug: "solar-epc-hybrid-ess", shortDescription: "DISCOM-approved bidirectional net energy meters for net metering solar installations.", fullDescription: "Certified bidirectional meters for accurate net metering. Records both import and export energy for DISCOM billing and subsidy settlement.", features: ["Bidirectional energy measurement", "DLMS/COSEM compliant", "RS485 Modbus communication", "MID / BIS certified", "Anti-tamper design", "Optical port for data download"], specifications: [{ key: "Accuracy Class", value: "Class 1 (IEC 62053-21)" }, { key: "Voltage", value: "415V 3-phase / 230V 1-phase" }, { key: "Communication", value: "RS485 Modbus RTU" }, { key: "Display", value: "LCD, 6+1 digits" }, { key: "Certification", value: "BIS / MID / DISCOM approved" }], applications: ["Residential Net Metering", "Commercial Solar", "Industrial On-grid Systems", "Rooftop Solar Projects"], relatedProductSlugs: ["solar-inverter-string"] },
];

const PROJECTS_DATA = [
  // ── Industrial Automation ────────────────────────────────────────────────────
  { slug: "textile-automation-bhilwara", title: "Complete Textile Mill Automation", category: "automation", serviceSlug: "industrial-automation", location: "Bhilwara, Rajasthan", industry: "Textile Manufacturing", capacity: "Full Plant", year: "2024", description: "End-to-end automation of a 50,000 sq ft textile manufacturing facility including yarn processing, weaving control, and quality inspection systems.", challenge: "Legacy relay-based control system causing frequent production stoppages, inconsistent quality, and high energy consumption.", solution: "Implemented a comprehensive PLC-SCADA system with VFD-controlled motors, automated tension control, real-time quality monitoring, and a centralized dashboard.", results: [{ metric: "Production Increase", value: "35%" }, { metric: "Energy Savings", value: "28%" }, { metric: "Quality Rejection Rate", value: "↓ 60%" }, { metric: "Payback Period", value: "18 months" }], specifications: [{ key: "PLC Platform", value: "Siemens S7-1500" }, { key: "SCADA Software", value: "WinCC Professional" }, { key: "VFD Drives", value: "24 × ABB ACS580" }, { key: "HMI Panels", value: "8 × Siemens KTP700" }, { key: "I/O Points", value: "480+ Digital, 120+ Analog" }, { key: "Network", value: "PROFINET Industrial Ethernet" }], testimonial: { quote: "Creatomat transformed our factory. Production is up 35%, quality rejections are down, and we have complete visibility into every process.", name: "Rajesh Somani", designation: "MD, Somani Textiles" }, featured: true },
  { slug: "food-processing-jaipur", title: "Food Processing Line Automation", category: "automation", serviceSlug: "industrial-automation", location: "Jaipur, Rajasthan", industry: "Food & Beverage", capacity: "5 TPH Line", year: "2024", description: "Automated a complete food processing and packaging line with hygiene-grade equipment, weight-based dispensing, and sealed packaging with batch traceability.", challenge: "Manual handling caused contamination risks, inconsistent portioning, and inability to maintain FSSAI compliance records.", solution: "Designed and installed an automated dispensing, mixing, filling, and sealing line with food-grade actuators, load cells for precise portioning, and barcode-based traceability.", results: [{ metric: "Throughput Increase", value: "3x" }, { metric: "Contamination Incidents", value: "Zero" }, { metric: "Portioning Accuracy", value: "±0.5g" }, { metric: "FSSAI Compliance", value: "100%" }], specifications: [{ key: "PLC Platform", value: "Allen Bradley CompactLogix" }, { key: "Line Speed", value: "120 packs/minute" }, { key: "Weighing System", value: "4× Mettler Toledo load cells" }, { key: "Packaging", value: "Automatic form-fill-seal" }, { key: "Traceability", value: "Barcode + batch logging" }, { key: "Hygiene Rating", value: "IP69K washdown rated" }], featured: false },
  { slug: "cement-plant-chittorgarh", title: "Cement Plant Process Automation", category: "automation", serviceSlug: "industrial-automation", location: "Chittorgarh, Rajasthan", industry: "Cement & Mining", capacity: "500 TPD", year: "2023", description: "Complete process automation of a 500 TPD cement grinding unit including raw mill, kiln feed, clinker cooler, and cement mill operations.", challenge: "Inconsistent clinker quality, high specific energy consumption, and frequent kiln trips due to manual control.", solution: "Implemented DCS-based centralized control with advanced process controllers, predictive analytics for kiln stability, and energy optimization algorithms.", results: [{ metric: "Specific Energy", value: "↓ 15%" }, { metric: "Kiln Availability", value: "96%" }, { metric: "Quality Consistency", value: "+40%" }, { metric: "Operator Reduction", value: "50%" }], specifications: [{ key: "Control System", value: "ABB Symphony Plus DCS" }, { key: "I/O Count", value: "2000+ points" }, { key: "Drives", value: "18× ABB Medium Voltage VFDs" }, { key: "Analyzers", value: "X-ray fluorescence online" }, { key: "Network", value: "Redundant fiber ring" }, { key: "Control Rooms", value: "2 centralized + 4 local" }], featured: false },
  // ── Home Automation ───────────────────────────────────────────────────────────
  { slug: "smart-villa-udaipur", title: "Luxury Smart Villa", category: "home-automation", serviceSlug: "home-automation", location: "Udaipur, Rajasthan", industry: "Luxury Residential", capacity: "12,000 sq ft", year: "2024", description: "Complete smart home automation of a lakeside luxury villa with 42 rooms, including lighting scenes, climate control, security, AV distribution, and motorized elements.", challenge: "Fully automated lifestyle experience without visible wiring disrupting the villa's heritage aesthetic.", solution: "Designed a concealed KNX-based system with custom-etched brass switch plates, automated lighting with circadian tuning, motorized silk curtains, and a centralized iPad command center.", results: [{ metric: "Automated Zones", value: "42" }, { metric: "Energy Savings", value: "35%" }, { metric: "Lighting Scenes", value: "120+" }, { metric: "Control Points", value: "380+" }], specifications: [{ key: "Platform", value: "KNX + Crestron" }, { key: "Light Points", value: "280+ DALI dimmable" }, { key: "Climate Zones", value: "18 independent zones" }, { key: "Security", value: "32 cameras + biometric access" }, { key: "Audio", value: "14-zone Sonos distribution" }, { key: "Curtain Motors", value: "24 Somfy motors" }], testimonial: { quote: "Living in this villa is an experience. Everything responds to our mood and schedule. The Creatomat team understood exactly what we wanted.", name: "Priya Mewar", designation: "Homeowner" }, featured: true },
  { slug: "luxury-apartment-jaipur", title: "Premium Apartment Automation", category: "home-automation", serviceSlug: "home-automation", location: "Jaipur, Rajasthan", industry: "Premium Residential", capacity: "3,500 sq ft", year: "2024", description: "Smart automation of a 4BHK premium apartment with wireless retrofit solution — voice control, automated lighting, smart AC, security integration, and video doorbell.", challenge: "Existing apartment with completed interiors — no scope for rewiring. Client wanted smart features without construction or aesthetic disruption.", solution: "Deployed a wireless Zigbee-based system using in-wall modules behind existing switches, smart IR blasters for AC control, wireless door sensors, and Alexa integration throughout.", results: [{ metric: "Smart Devices", value: "65+" }, { metric: "Voice Commands", value: "200+" }, { metric: "Setup Time", value: "3 days" }, { metric: "Energy Savings", value: "25%" }], specifications: [{ key: "Platform", value: "Zigbee 3.0 + WiFi" }, { key: "Smart Switches", value: "32 Sonoff in-wall modules" }, { key: "Voice Control", value: "4× Echo Dot + routines" }, { key: "AC Control", value: "5× Broadlink IR blasters" }, { key: "Security", value: "Ring doorbell + 4 sensors" }, { key: "App", value: "Alexa + SmartThings" }], featured: false },
  { slug: "farmhouse-automation-jodhpur", title: "Smart Farmhouse Estate", category: "home-automation", serviceSlug: "home-automation", location: "Jodhpur, Rajasthan", industry: "Estate / Farmhouse", capacity: "25,000 sq ft", year: "2023", description: "Large-scale automation of a desert farmhouse estate including main residence, guest cottages, pool area, landscape lighting, and perimeter security.", challenge: "Sprawling property with multiple structures, extreme desert temperatures, and frequent power outages required a robust, self-sufficient automation system.", solution: "Designed a solar-powered automation backbone with battery backup, weather-resistant outdoor controllers, automated irrigation with soil moisture sensors, and 4G-based remote access.", results: [{ metric: "Property Coverage", value: "100%" }, { metric: "Water Savings", value: "40%" }, { metric: "Solar Powered", value: "80%" }, { metric: "Remote Management", value: "Full" }], specifications: [{ key: "Platform", value: "Loxone Miniserver + 4G" }, { key: "Solar System", value: "10kW hybrid with ESS" }, { key: "Irrigation", value: "16-zone smart system" }, { key: "Security", value: "Thermal cameras + PIR" }, { key: "Landscape Lighting", value: "120+ RGBW fixtures" }, { key: "Pool Automation", value: "Pump + heater + lighting" }], featured: false },
  // ── SPM ───────────────────────────────────────────────────────────────────────
  { slug: "bobbin-winding-spm", title: "Automatic Bobbin Winding Machine", category: "spm", serviceSlug: "spm", location: "Bhilwara, Rajasthan", industry: "Textile", capacity: "12 Spindle", year: "2024", description: "Custom-designed 12-spindle automatic bobbin winding machine with programmable tension control, automatic doffing, and quality monitoring for premium yarn production.", challenge: "Manual winding caused inconsistent tension, high yarn wastage, and low throughput. Quality variation between operators was unacceptable for export-grade yarn.", solution: "Engineered a servo-driven winding system with electronic tension control, automatic traverse, programmable winding patterns, and integrated yarn break detection.", results: [{ metric: "Throughput", value: "4x manual" }, { metric: "Yarn Wastage", value: "↓ 70%" }, { metric: "Tension Variation", value: "±1%" }, { metric: "Operator Requirement", value: "1 per 12 spindles" }], specifications: [{ key: "Spindles", value: "12 independent servo-driven" }, { key: "Speed Range", value: "100-1500 RPM" }, { key: "Tension Control", value: "Electronic dancer arm" }, { key: "Winding Patterns", value: "8 programmable" }, { key: "Yarn Range", value: "10-100 Ne count" }, { key: "PLC Control", value: "Mitsubishi FX5U" }], featured: true },
  { slug: "auto-assembly-station", title: "Automated Assembly & Testing Station", category: "spm", serviceSlug: "spm", location: "Neemrana, Rajasthan", industry: "Automotive", capacity: "600 parts/hour", year: "2023", description: "Multi-station automated assembly and testing system for automotive valve assemblies with press-fitting, torque tightening, leak testing, and vision inspection.", challenge: "Client needed to scale production 5x while maintaining zero-defect quality for a Tier-1 automotive OEM contract with stringent PPAP requirements.", solution: "Designed a 6-station rotary indexing machine with servo press, torque spindle, helium leak tester, vision camera, and automated accept/reject sorting with full data logging.", results: [{ metric: "Cycle Time", value: "6 sec/part" }, { metric: "Defect Rate", value: "< 1 PPM" }, { metric: "Data Logging", value: "100%" }, { metric: "OEE", value: "92%" }], specifications: [{ key: "Type", value: "Rotary indexing, 6-station" }, { key: "Press Force", value: "5-ton servo press" }, { key: "Leak Test", value: "Helium mass spectrometer" }, { key: "Vision", value: "Keyence CV-X series" }, { key: "Data System", value: "SQL database + SPC" }, { key: "Safety", value: "CE compliant, Category 3" }], featured: false },
  { slug: "leak-testing-machine", title: "Precision Leak Testing SPM", category: "spm", serviceSlug: "spm", location: "Manesar, Haryana", industry: "Automotive", capacity: "400 parts/hour", year: "2023", description: "High-precision air decay leak testing machine for cast aluminum housings with automatic loading, multi-point sealing, and pass/fail sorting.", challenge: "Manual leak testing was unreliable with high false rejection rates. The client needed traceable, repeatable testing at production speeds for an EV component contract.", solution: "Built a dual-station leak tester with precision pneumatic clamping, multi-cavity sealing fixtures, ATEQ air decay instruments, and barcode-linked test certificates.", results: [{ metric: "Test Accuracy", value: "0.1 cc/min" }, { metric: "False Rejections", value: "↓ 95%" }, { metric: "Cycle Time", value: "9 sec/part" }, { metric: "Traceability", value: "100%" }], specifications: [{ key: "Type", value: "Dual-station air decay" }, { key: "Instrument", value: "ATEQ F620" }, { key: "Resolution", value: "0.01 cc/min" }, { key: "Test Pressure", value: "0.5-6.0 bar adjustable" }, { key: "Clamping", value: "Pneumatic, 8-point seal" }, { key: "Interface", value: "Barcode + MES integration" }], featured: false },
  // ── Solar EPC / Hybrid / ESS ─────────────────────────────────────────────────
  { slug: "250kw-rooftop-bhilwara", title: "250 kW Industrial Rooftop Solar", category: "solar", serviceSlug: "solar-epc-hybrid-ess", location: "Bhilwara, Rajasthan", industry: "Textile Manufacturing", capacity: "250 kW", year: "2024", description: "Large-scale rooftop solar installation on a textile factory with optimized panel layout, string inverters, and net metering for maximum self-consumption.", challenge: "High electricity bills of ₹18L/month with a complex multi-level rooftop structure. The client needed maximum generation within the available roof area while maintaining structural safety.", solution: "Conducted detailed structural analysis, designed a custom elevated mounting structure for the multi-level roof, used bifacial modules for 10% extra yield, and installed weather-proof string inverters.", results: [{ metric: "Annual Generation", value: "3.8 lakh units" }, { metric: "Monthly Savings", value: "₹12L+" }, { metric: "Payback Period", value: "3.2 years" }, { metric: "CO₂ Offset", value: "375 T/year" }], specifications: [{ key: "Modules", value: "500× Adani 540W Bifacial" }, { key: "Inverters", value: "5× Huawei SUN2000-50KTL" }, { key: "Structure", value: "Hot-dip galvanized elevated" }, { key: "Monitoring", value: "Huawei FusionSolar IoT" }, { key: "Net Metering", value: "JVVNL approved" }, { key: "Warranty", value: "25-year performance" }], testimonial: { quote: "Our electricity bill dropped from ₹18 lakhs to ₹6 lakhs per month. The system paid for itself in 3 years. Outstanding work by Creatomat.", name: "Vikram Rathi", designation: "Director, Rathi Industries" }, featured: true },
  { slug: "500kw-industrial-jodhpur", title: "500 kW Industrial Solar Plant", category: "solar", serviceSlug: "solar-epc-hybrid-ess", location: "Jodhpur, Rajasthan", industry: "Stone Processing", capacity: "500 kW", year: "2024", description: "Ground-mount and rooftop combined solar installation for a stone processing facility with high dust conditions, automated cleaning, and advanced monitoring.", challenge: "Extreme dust environment from stone cutting operations required a system that could maintain performance without frequent manual cleaning.", solution: "Installed a combination of ground-mount and rooftop systems with robotic dry-cleaning system, anti-soiling coated modules, and a predictive maintenance platform.", results: [{ metric: "Annual Generation", value: "7.5 lakh units" }, { metric: "Monthly Savings", value: "₹22L+" }, { metric: "Cleaning Savings", value: "₹4L/year" }, { metric: "System Availability", value: "99.2%" }], specifications: [{ key: "Modules", value: "925× Jinko 540W Tiger Neo" }, { key: "Inverters", value: "2× Sungrow SG250HX central" }, { key: "Structure", value: "Ground-mount + Rooftop" }, { key: "Cleaning", value: "Robotic dry-clean system" }, { key: "Monitoring", value: "iSolarCloud + weather station" }, { key: "Cable", value: "UV-resistant DC + AC cables" }], featured: false },
  { slug: "100kw-school-udaipur", title: "100 kW School Campus Solar", category: "solar", serviceSlug: "solar-epc-hybrid-ess", location: "Udaipur, Rajasthan", industry: "Education", capacity: "100 kW", year: "2023", description: "Solar installation across multiple school buildings with carport structures, educational display, and complete subsidy management.", challenge: "Multiple scattered rooftops of different ages and orientations. The school also wanted the installation to serve as an educational tool for students.", solution: "Designed a solar carport for the parking area plus optimized rooftop arrays. Installed a live display showing real-time generation and energy science lessons.", results: [{ metric: "Annual Generation", value: "1.5 lakh units" }, { metric: "Annual Savings", value: "₹12L" }, { metric: "Subsidy Received", value: "₹22L" }, { metric: "Educational Impact", value: "2000 students" }], specifications: [{ key: "Modules", value: "185× Canadian Solar 540W" }, { key: "Inverters", value: "2× Growatt MAX 50KTL3" }, { key: "Structure", value: "Carport + Multi-roof" }, { key: "Display", value: "Live energy dashboard" }, { key: "Subsidy", value: "PM Surya Ghar + State" }, { key: "Special Feature", value: "Student energy lab" }], featured: false },
  { slug: "1mw-ground-mount-jaisalmer", title: "1 MW Ground Mount Solar Farm", category: "solar", serviceSlug: "solar-epc-hybrid-ess", location: "Jaisalmer, Rajasthan", industry: "Agriculture / Commercial", capacity: "1 MW", year: "2023", description: "Utility-scale ground-mount solar farm with single-axis tracking system, high-voltage grid connection, and comprehensive SCADA monitoring.", challenge: "Desert terrain with extreme temperatures (48°C+), sand storms, and remote location with limited grid infrastructure.", solution: "Deployed single-axis tracking system for 25% extra yield, used high-temperature rated modules, and installed a 33kV step-up transformer for grid injection.", results: [{ metric: "Annual Generation", value: "18 lakh units" }, { metric: "Tracking Gain", value: "+25%" }, { metric: "Annual Revenue", value: "₹65L" }, { metric: "Land Utilized", value: "4 acres" }], specifications: [{ key: "Modules", value: "1850× LONGi Hi-MO 6" }, { key: "Inverters", value: "4× Sungrow SG250HX" }, { key: "Tracking", value: "Nextracker NX Horizon" }, { key: "Transformer", value: "1250 kVA, 33kV" }, { key: "SCADA", value: "Full plant monitoring" }, { key: "Fencing", value: "Chain-link + CCTV" }], featured: false },
  { slug: "hybrid-ess-resort-mount-abu", title: "Hybrid Solar + ESS Resort System", category: "solar", serviceSlug: "solar-epc-hybrid-ess", location: "Mount Abu, Rajasthan", industry: "Hospitality", capacity: "50 kW + 100 kWh ESS", year: "2024", description: "Hybrid solar installation with lithium battery storage for a hill station resort, providing uninterrupted power during frequent grid outages.", challenge: "Remote hill location with 4-6 hours of daily power cuts. The resort was spending ₹8L/month on diesel generators.", solution: "Designed a 50kW solar system with 100kWh LFP battery bank, intelligent energy management system for load prioritization, and seamless grid-solar-battery switching.", results: [{ metric: "Diesel Savings", value: "₹7L/month" }, { metric: "Backup Duration", value: "8+ hours" }, { metric: "Noise Elimination", value: "100%" }, { metric: "Guest Satisfaction", value: "+45%" }], specifications: [{ key: "Solar Modules", value: "93× Trina Vertex 540W" }, { key: "Hybrid Inverter", value: "Sungrow SH50T" }, { key: "Battery", value: "100 kWh LFP (BYD HVS)" }, { key: "EMS", value: "Intelligent load management" }, { key: "Backup Priority", value: "AC > Lighting > Kitchen" }, { key: "DG Integration", value: "Auto-start failsafe" }], testimonial: { quote: "No more generator noise disturbing our guests. The switch from diesel to solar+battery has been transformational for our resort experience.", name: "Ankit Sharma", designation: "GM, Hilltop Resort" }, featured: false },
  { slug: "50kw-ev-station-jaipur", title: "Solar-Powered EV Charging Hub", category: "solar", serviceSlug: "solar-epc-hybrid-ess", location: "Jaipur, Rajasthan", industry: "EV Infrastructure", capacity: "50 kW Solar + 4 Chargers", year: "2024", description: "Solar canopy with integrated EV charging infrastructure — 4 fast chargers powered primarily by on-site solar generation with grid backup and battery buffer.", challenge: "The client wanted to set up an EV charging station that would be profitable from day one, with minimal grid dependency and a strong green brand image.", solution: "Designed a solar carport canopy generating 200 units/day, paired with a 50kWh battery buffer, and 4 fast chargers with payment integration.", results: [{ metric: "Solar Self-Consumption", value: "85%" }, { metric: "Chargers", value: "4 (2 DC + 2 AC)" }, { metric: "Daily Capacity", value: "40+ vehicles" }, { metric: "Revenue Potential", value: "₹3L/month" }], specifications: [{ key: "Solar Canopy", value: "50 kW bifacial" }, { key: "DC Chargers", value: "2× 30kW CCS2/CHAdeMO" }, { key: "AC Chargers", value: "2× 7kW Type-2" }, { key: "Battery Buffer", value: "50 kWh LFP" }, { key: "Payment", value: "RFID + QR + App" }, { key: "Software", value: "OCPP 2.0 compliant CMS" }], featured: false },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function upsert(doc) {
  return client.createOrReplace(doc);
}

async function transaction(mutations) {
  return client.transaction().create(mutations).commit();
}

// ─── Seed Functions ───────────────────────────────────────────────────────────

async function seedSiteSettings() {
  console.log("  Seeding siteSettings…");
  await upsert({
    _id: "siteSettings",
    _type: "siteSettings",
    companyName: "Creatomat Private Limited",
    tagline: "Engineering India's Solar Future",
    contact: {
      address: "KUMUD VILLA, B-3 Basant Vihar, Hotel Royal Embassy Road, Bhilwara-311001, Rajasthan, India",
      phone: "+91 98280 67847",
      email: "info@creatomat.com",
      whatsapp: "919828067847",
    },
    socialLinks: [
      { _key: "facebook", label: "Facebook", href: "https://facebook.com" },
      { _key: "instagram", label: "Instagram", href: "https://instagram.com" },
      { _key: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
    ],
    navLinks: NAV_LINKS.map((n, i) => ({ ...n, _key: `nav-${i}` })),
  });
}

async function seedHomePage() {
  console.log("  Seeding homePage…");
  await upsert({
    _id: "homePage",
    _type: "homePage",

    // ① Hero
    hero: {
      badgeText: "Solar · Automation · Smart Homes · SPM",
      titleLine1: "Engineering",
      titleHighlight: "Smarter",
      titleLine3: "Systems",
      subtitle: "Solar EPC, industrial automation, smart homes & custom machines — integrated engineering solutions, delivered with precision.",
      ctaPrimaryText: "Get Free Consultation",
      ctaPrimaryHref: "/contact",
      ctaSecondaryText: "View Projects",
      ctaSecondaryHref: "/projects",
      stats: STATS.map((s, i) => ({ ...s, _key: `stat-${i}` })),
    },

    // ② Trust Strip
    trustStrip: {
      label: "Trusted by leading businesses",
      clients: CLIENTS,
    },

    // ③ Solar Calculator
    calculator: {
      badge: "Solar Savings Calculator",
      title: "How Much Can You Save?",
      description: "Enter your details below and instantly see your potential solar savings, system size, and payback period.",
      buttonText: "Calculate My Savings",
    },

    // ④ About
    about: {
      eyebrow: "About Creatomat",
      title: "Engineering Excellence Since Day One",
      paragraph1: "Creatomat Private Limited specializes in developing special purpose machinery, automation systems, and solar energy solutions that drive efficiency, quality, and sustainability for businesses across India.",
      paragraph2: "Our team of experienced engineers combines deep domain expertise with cutting-edge technology to deliver turnkey solutions that are designed, manufactured, and commissioned entirely in-house.",
      capabilities: ["Solar EPC & Engineering", "Industrial Automation Systems", "Special Purpose Machines", "Made in India Manufacturing"],
      yearsText: "15+",
      yearsLabel: "Years of Innovation",
    },

    // ⑤ Services
    servicesSection: {
      overline: "What We Do",
      title: "Integrated Engineering Solutions",
      description: "From solar energy to factory automation and smart homes — we engineer complete systems that power your business and lifestyle.",
      items: SERVICES_HOME.map((s, i) => ({ ...s, _key: `svc-${i}` })),
    },

    // ⑥ Why Choose Us
    whyChooseUsSection: {
      overline: "Why Creatomat",
      title: "Built Different. Engineered Better.",
      description: "We combine deep engineering expertise with modern technology to deliver solutions that set the standard.",
      bigStatNumber: "500+",
      bigStatLabel: "Projects Delivered Across India",
      items: WHY_CHOOSE_US.map((w, i) => ({ ...w, _key: `why-${i}` })),
    },

    // ⑦ Industries
    industriesSection: {
      overline: "Industries We Serve",
      title: "Powering Every Sector",
      description: "From factories to farms, we deliver tailored energy and automation solutions across diverse industries.",
      items: INDUSTRIES.map((ind, i) => ({ ...ind, _key: `ind-${i}` })),
    },

    // ⑧ Process
    processSection: {
      overline: "How We Work",
      title: "From Consultation to Commission",
      description: "A transparent, proven 4-step process that transforms your rooftop into a powerhouse — with zero hassle.",
      ctaText: "Start Your Solar Journey",
      steps: PROCESS_STEPS.map((p, i) => ({ ...p, _key: `step-${i}` })),
    },

    // ⑨ Projects (header only — cards come from project documents)
    projectsSection: {
      overline: "Our Work",
      title: "Projects That Power Progress",
      description: "Solar plants, automated lines, smart homes, and custom machines — real installations delivering real results.",
      viewAllText: "See All Projects",
    },

    // ⑩ Benefits
    benefitsSection: {
      overline: "The Solar Advantage",
      title: "Numbers That Speak Louder",
      description: "Going solar isn't just good for the planet — it's great for your bottom line.",
      bottomText: "The average Creatomat installation pays for itself in under 4 years. Government subsidies and net metering benefits make the switch even more attractive.",
      ctaText: "Calculate Your Savings",
      items: BENEFITS.map((b, i) => ({ ...b, _key: `ben-${i}` })),
    },

    // ⑪ Testimonials (header only — content from testimonial documents)
    testimonialsSection: {
      overline: "Client Stories",
      title: "What Our Partners Say",
    },

    // ⑫ FAQ (header only — items from faq documents)
    faqSection: {
      overline: "FAQ",
      title: "Got Questions? We've Got Answers.",
      description: "Everything you need to know about going solar with Creatomat. Can't find what you're looking for? Reach out to our team.",
      ctaText: "Contact Us for More",
    },

    // ⑬ Contact CTA
    contactCtaSection: {
      heading: "Ready to Go Solar?",
      description: "Get a free site assessment and custom quote within 24 hours. Our engineers are ready to design your optimal energy solution.",
      primaryButtonText: "Get Free Quote",
      secondaryButtonText: "Call Us Now",
    },

    // SEO
    seoTitle: "Creatomat — Engineering India's Solar Future",
    seoDescription: "Custom solar solutions, automation systems & sustainable energy infrastructure — built with precision by Creatomat Private Limited.",
  });
}

async function seedServicesPage() {
  console.log("  Seeding servicesPage…");
  await upsert({
    _id: "servicesPage",
    _type: "servicesPage",
    hero: {
      overline: "Our Services",
      title: "Engineering Solutions That Power Progress",
      description: "From solar energy systems to factory automation — we deliver comprehensive, turnkey solutions built for performance and reliability.",
    },
    cta: {
      heading: "Need a Custom Solution?",
      description: "Every project is unique. Tell us about your requirements and we'll engineer the perfect solution.",
      buttonText: "Discuss Your Project",
    },
    seoTitle: "Services | Creatomat Engineering",
    seoDescription: "Solar EPC, industrial automation, SPMs, home automation, electrical panels and AMC services — delivered by Creatomat.",
  });
}

async function seedProductsPage() {
  console.log("  Seeding productsPage…");
  await upsert({
    _id: "productsPage",
    _type: "productsPage",
    hero: {
      overline: "Technical Products",
      title: "Products & Systems",
      description: "Explore our range of electrical panels, automation systems, smart home devices, and special purpose machines.",
    },
    seoTitle: "Products | Creatomat Engineering",
    seoDescription: "MCC panels, VFD drives, smart home systems, solar inverters, and special purpose machines from Creatomat.",
  });
}

async function seedProjectsPage() {
  console.log("  Seeding projectsPage…");
  await upsert({
    _id: "projectsPage",
    _type: "projectsPage",
    hero: {
      overline: "Our Projects",
      title: "Projects That Power Progress",
      description: "Real installations, real results. Browse our portfolio of completed solar, automation, and engineering projects across India.",
    },
    portfolioStats: [
      { _key: "ps-0", value: 500, suffix: "+", label: "Projects Completed" },
      { _key: "ps-1", value: 10, suffix: "MW+", label: "Solar Installed" },
      { _key: "ps-2", value: 15, suffix: "+", label: "Cities Served" },
      { _key: "ps-3", value: 98, suffix: "%", label: "Client Satisfaction" },
    ],
    cta: {
      heading: "Your Project Could Be Next",
      description: "Join 500+ businesses that have trusted Creatomat to power their operations.",
      buttonText: "Start Your Project",
    },
    seoTitle: "Projects | Creatomat Engineering",
    seoDescription: "Completed solar, automation, SPM, and home automation projects by Creatomat across Rajasthan and India.",
  });
}

async function seedAboutPage() {
  console.log("  Seeding aboutPage…");
  await upsert({
    _id: "aboutPage",
    _type: "aboutPage",

    // ① Hero
    hero: {
      overline: "About Us",
      title: "Pioneering Engineering Excellence",
      description: "A story of innovation, precision, and purpose — built over two decades of engineering leadership.",
    },

    // ② Story
    story: {
      overline: "Our Story",
      heading: "From a Small Workshop to India's Trusted Engineering Partner",
      paragraph1: "Creatomat Private Limited began with a simple vision — to bring world-class engineering solutions to Indian businesses. Founded in Bhilwara, Rajasthan, we started as a small automation workshop serving local textile mills.",
      paragraph2: "Today, we operate across multiple verticals — solar EPC, industrial automation, special purpose machines, and smart home systems — with a team of 50+ engineers delivering projects across India.",
      badges: ["Mission-Driven", "Vision-Led", "ISO Certified"],
      sinceText: "Since 2009",
      location: "Bhilwara, Rajasthan",
      floatingBadgeTitle: "Made in India",
      floatingBadgeSubtitle: "100% Domestic Manufacturing",
    },

    // ③ Mission & Vision
    missionVision: {
      mission: {
        title: "Our Mission",
        text: "To democratize access to clean energy and advanced automation for Indian businesses through precision engineering, innovation, and turnkey excellence.",
      },
      vision: {
        title: "Our Vision",
        text: "To become India's most trusted engineering partner for sustainable energy solutions — powering a cleaner, smarter, and more efficient industrial future.",
      },
    },

    // ④ Team Stats
    teamStats: [
      { _key: "ts-0", value: 50,  suffix: "+", label: "Team Members" },
      { _key: "ts-1", value: 15,  suffix: "+", label: "Engineers" },
      { _key: "ts-2", value: 500, suffix: "+", label: "Projects" },
      { _key: "ts-3", value: 10,  suffix: "+", label: "Cities Served" },
    ],

    // ⑤ Values
    valuesSection: {
      overline: "Our Values",
      title: "What Drives Us Forward",
      items: [
        { _key: "val-0", icon: "Lightbulb", title: "Innovation First",      description: "Continuously pushing the boundaries of what's possible in solar and automation technology." },
        { _key: "val-1", icon: "Shield",    title: "Quality Assured",       description: "ISO certified processes ensuring every project meets global quality standards." },
        { _key: "val-2", icon: "Users",     title: "Client Partnership",    description: "We treat every project as a partnership, aligning our engineering with your goals." },
        { _key: "val-3", icon: "Target",    title: "Precision Engineering", description: "Every system designed with meticulous attention to detail and long-term performance." },
      ],
    },

    // ⑥ Milestones
    milestonesSection: {
      overline: "Our Journey",
      title: "Milestones That Matter",
      items: [
        { _key: "ms-0", year: "2009", title: "Founded",             description: "Creatomat established in Bhilwara, Rajasthan" },
        { _key: "ms-1", year: "2013", title: "Automation Division", description: "Expanded into industrial automation systems" },
        { _key: "ms-2", year: "2016", title: "Solar EPC Launch",    description: "Entered the solar energy market with EPC services" },
        { _key: "ms-3", year: "2019", title: "500+ Projects",       description: "Crossed 500 successful project deliveries" },
        { _key: "ms-4", year: "2022", title: "ISO Certified",       description: "Achieved ISO 9001:2015 certification" },
        { _key: "ms-5", year: "2024", title: "10MW+ Installed",     description: "Surpassed 10MW of solar capacity installed" },
      ],
    },

    // ⑦ CTA
    cta: {
      heading: "Ready to Work With Us?",
      description: "Let's discuss how Creatomat can engineer the perfect energy solution for your business.",
      buttonText: "Start a Conversation",
    },

    // SEO
    seoTitle: "About Us | Creatomat Engineering",
    seoDescription: "Learn about Creatomat Private Limited — our story, mission, vision, team, and engineering milestones since 2009.",
  });
}

async function seedTestimonials() {
  console.log("  Seeding testimonials…");
  for (const t of TESTIMONIALS) {
    await upsert({ _type: "testimonial", ...t });
  }
}

async function seedFAQs() {
  console.log("  Seeding FAQs…");
  for (const f of FAQS) {
    await upsert({ _type: "faq", ...f });
  }
}

async function seedServices() {
  console.log("  Seeding services…");
  for (const s of SERVICES_DATA) {
    await upsert({
      _id: `service-${s.slug}`,
      _type: "service",
      slug: { _type: "slug", current: s.slug },
      category: s.category,
      title: s.title,
      tagline: s.tagline,
      heroDescription: s.heroDescription,
      icon: s.icon,
      color: s.color,
      stats: s.stats.map((st, i) => ({ ...st, _key: `stat-${i}` })),
      features: s.features.map((f, i) => ({ ...f, _key: `feat-${i}` })),
      process: s.process.map((p, i) => ({ ...p, _key: `proc-${i}` })),
      useCases: s.useCases,
      faq: s.faq.map((q, i) => ({ ...q, _key: `faq-${i}` })),
    });
  }
}

async function seedProducts() {
  console.log("  Seeding products…");
  for (const p of PRODUCTS_DATA) {
    await upsert({
      _id: `product-${p.slug}`,
      _type: "product",
      slug: { _type: "slug", current: p.slug },
      title: p.title,
      category: p.category,
      shortDescription: p.shortDescription,
      fullDescription: p.fullDescription,
      features: p.features,
      specifications: p.specifications.map((sp, i) => ({ ...sp, _key: `spec-${i}` })),
      applications: p.applications,
    });
  }
}

async function seedProjects() {
  console.log("  Seeding projects…");
  for (const proj of PROJECTS_DATA) {
    const doc = {
      _id: `project-${proj.slug}`,
      _type: "project",
      slug: { _type: "slug", current: proj.slug },
      title: proj.title,
      category: proj.category,
      location: proj.location,
      industry: proj.industry,
      capacity: proj.capacity,
      year: proj.year,
      description: proj.description,
      challenge: proj.challenge,
      solution: proj.solution,
      results: proj.results.map((r, i) => ({ ...r, _key: `res-${i}` })),
      specifications: proj.specifications.map((sp, i) => ({ ...sp, _key: `spec-${i}` })),
      featured: proj.featured ?? false,
    };
    if (proj.testimonial) {
      doc.testimonial = proj.testimonial;
    }
    await upsert(doc);
  }
}

async function linkServiceReferences() {
  console.log("  Linking service ↔ project/product references…");
  // Link projects to services
  for (const proj of PROJECTS_DATA) {
    await client.patch(`project-${proj.slug}`).set({
      service: { _type: "reference", _ref: `service-${proj.serviceSlug}` },
    }).commit();
  }
  // Link products to services
  for (const prod of PRODUCTS_DATA) {
    await client.patch(`product-${prod.slug}`).set({
      service: { _type: "reference", _ref: `service-${prod.serviceSlug}` },
    }).commit();
  }
  // Link service relatedProjects / relatedProducts
  const serviceRelations = {
    "industrial-automation": {
      projects: ["textile-automation-bhilwara", "food-processing-jaipur", "cement-plant-chittorgarh"],
      products: ["mcc-panel", "vfd-drive-panel", "plc-scada-system", "apfc-panel"],
    },
    "home-automation": {
      projects: ["smart-villa-udaipur", "luxury-apartment-jaipur", "farmhouse-automation-jodhpur"],
      products: ["smart-switch-panel", "home-controller-hub", "motorized-curtain-system"],
    },
    "spm": {
      projects: ["bobbin-winding-spm", "auto-assembly-station", "leak-testing-machine"],
      products: ["bobbin-winding-machine", "auto-crimping-machine", "testing-rig"],
    },
    "solar-epc-hybrid-ess": {
      projects: ["250kw-rooftop-bhilwara", "500kw-industrial-jodhpur", "100kw-school-udaipur", "1mw-ground-mount-jaisalmer", "hybrid-ess-resort-mount-abu", "50kw-ev-station-jaipur"],
      products: ["solar-inverter-string", "solar-module-mono", "battery-lithium-ess", "net-meter-bidirectional"],
    },
  };
  for (const [slug, rels] of Object.entries(serviceRelations)) {
    await client.patch(`service-${slug}`).set({
      relatedProjects: rels.projects.map((s) => ({ _type: "reference", _ref: `project-${s}`, _key: s })),
      relatedProducts: rels.products.map((s) => ({ _type: "reference", _ref: `product-${s}`, _key: s })),
    }).commit();
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n🌱 Seeding Sanity dataset "${dataset}" on project "${projectId}"\n`);
  await seedSiteSettings();
  await seedHomePage();
  await seedAboutPage();
  await seedServicesPage();
  await seedProductsPage();
  await seedProjectsPage();
  await seedTestimonials();
  await seedFAQs();
  await seedServices();
  await seedProducts();
  await seedProjects();
  await linkServiceReferences();
  console.log("\n✅ Seed complete! Open your Sanity Studio to verify the content.\n");
}

main().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  process.exit(1);
});
