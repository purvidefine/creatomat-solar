export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  heroDescription: string;
  icon: string;
  color: string;
  stats: { value: string; label: string }[];
  features: ServiceFeature[];
  process: ServiceProcess[];
  useCases: string[];
  relatedProjectSlugs: string[];
  relatedProductSlugs: string[];
  faq: ServiceFAQ[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "industrial-automation",
    category: "Automation",
    title: "Industrial Automation",
    tagline: "Smart Factories. Intelligent Systems.",
    heroDescription:
      "End-to-end industrial automation solutions — from PLC programming and SCADA integration to complete factory automation systems. We engineer precision, efficiency, and reliability into every production line.",
    icon: "Cpu",
    color: "from-blue-500 to-cyan-500",
    stats: [
      { value: "200+", label: "Systems Deployed" },
      { value: "40%", label: "Avg. Efficiency Gain" },
      { value: "99.8%", label: "System Uptime" },
      { value: "15+", label: "Industries Served" },
    ],
    features: [
      {
        title: "PLC & SCADA Systems",
        description:
          "Custom PLC programming with SCADA visualization for real-time monitoring and control of industrial processes.",
        icon: "Cpu",
      },
      {
        title: "Robotic Integration",
        description:
          "Seamless integration of industrial robots for pick-and-place, welding, packaging, and assembly operations.",
        icon: "Cog",
      },
      {
        title: "Conveyor & Material Handling",
        description:
          "Automated conveyor systems with smart routing, sorting, and material handling for optimized throughput.",
        icon: "ArrowRight",
      },
      {
        title: "IoT & Industry 4.0",
        description:
          "Connected factory solutions with IoT sensors, edge computing, and cloud dashboards for predictive analytics.",
        icon: "Wifi",
      },
      {
        title: "HMI & Operator Panels",
        description:
          "Intuitive human-machine interfaces with touchscreen panels for simplified plant operation and diagnostics.",
        icon: "Monitor",
      },
      {
        title: "Electrical Panel Design",
        description:
          "Custom MCC, PCC, APFC, and VFD panels designed and manufactured to IS/IEC standards.",
        icon: "Zap",
      },
    ],
    process: [
      {
        step: 1,
        title: "Process Audit",
        description:
          "We study your existing production workflow, identify bottlenecks, and map out automation opportunities with clear ROI projections.",
      },
      {
        step: 2,
        title: "System Architecture",
        description:
          "Our engineers design the complete automation architecture — PLC logic, sensor layout, motor drives, HMI screens, and network topology.",
      },
      {
        step: 3,
        title: "Manufacturing & Integration",
        description:
          "In-house panel manufacturing, software development, and hardware integration with rigorous factory acceptance testing.",
      },
      {
        step: 4,
        title: "Commissioning & Training",
        description:
          "On-site installation, commissioning, performance validation, and comprehensive operator training with documentation.",
      },
    ],
    useCases: [
      "Textile Manufacturing",
      "Food & Beverage Processing",
      "Pharmaceutical Production",
      "Cement & Mining",
      "Water Treatment Plants",
      "Packaging Lines",
    ],
    relatedProjectSlugs: [
      "textile-automation-bhilwara",
      "food-processing-jaipur",
      "cement-plant-chittorgarh",
    ],
    relatedProductSlugs: ["mcc-panel", "vfd-drive-panel", "plc-scada-system", "apfc-panel"],
    faq: [
      {
        question: "What industries do you serve for automation?",
        answer:
          "We serve textile, food processing, pharmaceutical, cement, mining, water treatment, packaging, and general manufacturing industries across Rajasthan and India.",
      },
      {
        question: "Do you provide AMC for automation systems?",
        answer:
          "Yes, we offer comprehensive Annual Maintenance Contracts covering preventive maintenance, breakdown support, software updates, and spare parts management.",
      },
      {
        question: "Can you upgrade existing legacy systems?",
        answer:
          "Absolutely. We specialize in retrofitting and modernizing legacy PLC/relay-based systems to modern automation platforms with minimal production downtime.",
      },
    ],
  },
  {
    slug: "home-automation",
    category: "Automation",
    title: "Home Automation",
    tagline: "Intelligent Living. Effortless Control.",
    heroDescription:
      "Transform your home into a smart, connected living space. From lighting and climate control to security and entertainment — experience luxury automation that adapts to your lifestyle.",
    icon: "Home",
    color: "from-violet-500 to-purple-500",
    stats: [
      { value: "100+", label: "Homes Automated" },
      { value: "30%", label: "Energy Savings" },
      { value: "24/7", label: "Remote Access" },
      { value: "5★", label: "Client Rating" },
    ],
    features: [
      {
        title: "Smart Lighting Control",
        description:
          "Automated lighting scenes, dimming, color tuning, and scheduling for every room — controlled via app, voice, or wall panels.",
        icon: "Sun",
      },
      {
        title: "Climate & HVAC Automation",
        description:
          "Intelligent AC/heating control with occupancy sensors, scheduling, and energy optimization for year-round comfort.",
        icon: "Thermometer",
      },
      {
        title: "Security & Surveillance",
        description:
          "Integrated CCTV, smart locks, motion sensors, and alarm systems with real-time mobile alerts and remote monitoring.",
        icon: "Shield",
      },
      {
        title: "Motorized Curtains & Blinds",
        description:
          "Automated window treatments with sun-tracking, scheduling, and scene integration for privacy and energy efficiency.",
        icon: "Layers",
      },
      {
        title: "Audio & Entertainment",
        description:
          "Multi-room audio, home theater control, and media distribution systems for immersive entertainment experiences.",
        icon: "Music",
      },
      {
        title: "Voice & App Control",
        description:
          "Seamless integration with Alexa, Google Home, and Apple HomeKit for intuitive voice control and mobile app management.",
        icon: "Smartphone",
      },
    ],
    process: [
      {
        step: 1,
        title: "Lifestyle Consultation",
        description:
          "We understand your daily routines, preferences, and aspirations to design an automation system that enhances your lifestyle.",
      },
      {
        step: 2,
        title: "System Design",
        description:
          "Custom wiring diagrams, device selection, network planning, and scene programming tailored to your home architecture.",
      },
      {
        step: 3,
        title: "Installation & Programming",
        description:
          "Clean, concealed installation with meticulous cable management, device mounting, and comprehensive scene programming.",
      },
      {
        step: 4,
        title: "Handover & Support",
        description:
          "Personal walkthrough, family training, app setup on all devices, and ongoing remote support with lifetime assistance.",
      },
    ],
    useCases: [
      "Luxury Villas",
      "Premium Apartments",
      "Farmhouses",
      "Penthouse Suites",
      "Home Offices",
      "Guest Houses",
    ],
    relatedProjectSlugs: [
      "smart-villa-udaipur",
      "luxury-apartment-jaipur",
      "farmhouse-automation-jodhpur",
    ],
    relatedProductSlugs: ["smart-switch-panel", "home-controller-hub", "motorized-curtain-system"],
    faq: [
      {
        question: "Can home automation work with my existing wiring?",
        answer:
          "In most cases, yes. We offer both wired and wireless solutions. For existing homes, we use retrofit wireless modules that work with standard wiring.",
      },
      {
        question: "Is it possible to start small and expand later?",
        answer:
          "Absolutely. Our systems are modular — you can start with lighting control and gradually add security, climate, curtains, and entertainment systems.",
      },
      {
        question: "What happens if the internet goes down?",
        answer:
          "All core functions continue working locally. The system operates independently — internet is only needed for remote access and voice assistant features.",
      },
    ],
  },
  {
    slug: "spm",
    category: "Manufacturing",
    title: "Special Purpose Machines",
    tagline: "Precision Engineering. Custom Solutions.",
    heroDescription:
      "We design and manufacture custom Special Purpose Machines (SPMs) for unique production challenges. From concept to commissioning — precision-engineered machinery that transforms your manufacturing capabilities.",
    icon: "Cog",
    color: "from-amber to-orange",
    stats: [
      { value: "50+", label: "SPMs Delivered" },
      { value: "3x", label: "Productivity Boost" },
      { value: "±0.01mm", label: "Precision Level" },
      { value: "100%", label: "Custom Built" },
    ],
    features: [
      {
        title: "Custom Machine Design",
        description:
          "Ground-up machine design with 3D CAD modeling, FEA analysis, and kinematic simulation for optimal performance.",
        icon: "PenTool",
      },
      {
        title: "Precision Fabrication",
        description:
          "In-house CNC machining, precision grinding, wire EDM, and assembly with tolerances up to ±0.01mm.",
        icon: "Ruler",
      },
      {
        title: "Assembly & Testing Machines",
        description:
          "Automated assembly stations with vision inspection, torque verification, and leak testing capabilities.",
        icon: "CheckCircle",
      },
      {
        title: "Material Handling SPMs",
        description:
          "Custom pick-and-place, palletizing, de-palletizing, and transfer systems for complex material flow requirements.",
        icon: "Package",
      },
      {
        title: "Inspection & Gauging",
        description:
          "Automated quality inspection systems with machine vision, dimensional gauging, and defect detection.",
        icon: "Eye",
      },
      {
        title: "Retrofit & Upgrades",
        description:
          "Modernization of existing machinery with new controls, sensors, safety systems, and enhanced automation.",
        icon: "RefreshCw",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirement Study",
        description:
          "Deep-dive into your production challenge — cycle time targets, quality specs, material properties, and environmental constraints.",
      },
      {
        step: 2,
        title: "Concept & 3D Design",
        description:
          "Multiple concept proposals with 3D CAD visualization, motion studies, and detailed engineering calculations for client approval.",
      },
      {
        step: 3,
        title: "Manufacturing & Assembly",
        description:
          "Precision manufacturing with CNC machining, assembly, pneumatic/hydraulic integration, and electrical wiring in-house.",
      },
      {
        step: 4,
        title: "Testing & Delivery",
        description:
          "Rigorous factory acceptance testing, performance validation against specs, client witness testing, and site delivery with commissioning.",
      },
    ],
    useCases: [
      "Automotive Components",
      "Textile Machinery",
      "Pharmaceutical Packaging",
      "Precision Assembly",
      "Quality Inspection",
      "Custom Testing Rigs",
    ],
    relatedProjectSlugs: [
      "bobbin-winding-spm",
      "auto-assembly-station",
      "leak-testing-machine",
    ],
    relatedProductSlugs: ["bobbin-winding-machine", "auto-crimping-machine", "testing-rig"],
    faq: [
      {
        question: "What is the typical timeline for a custom SPM?",
        answer:
          "Depending on complexity, typical timelines range from 8-16 weeks from design approval to delivery. Simple machines can be faster, complex multi-station SPMs may take longer.",
      },
      {
        question: "Do you provide machine drawings and documentation?",
        answer:
          "Yes, every SPM comes with complete engineering drawings, electrical schematics, operation manuals, maintenance guides, and spare parts lists.",
      },
      {
        question: "Can you replicate an existing machine?",
        answer:
          "Yes, we can reverse-engineer and manufacture improved versions of existing machines with modern controls and enhanced features.",
      },
    ],
  },
  {
    slug: "solar-epc-hybrid-ess",
    category: "Energy",
    title: "Solar EPC / Hybrid / ESS",
    tagline: "Clean Energy. Complete Solutions.",
    heroDescription:
      "Full-spectrum solar energy solutions — from on-grid rooftop systems to hybrid installations with battery storage. We handle everything from design to commissioning, backed by 25-year performance warranties.",
    icon: "Sun",
    color: "from-primary to-green",
    stats: [
      { value: "10MW+", label: "Capacity Installed" },
      { value: "500+", label: "Systems Deployed" },
      { value: "25yr", label: "Performance Warranty" },
      { value: "₹2Cr+", label: "Client Savings/Year" },
    ],
    features: [
      {
        title: "On-Grid Solar EPC",
        description:
          "Complete rooftop and ground-mount solar installations with net metering — design, procurement, installation, and commissioning.",
        icon: "Sun",
      },
      {
        title: "Hybrid Solar Systems",
        description:
          "Solar + battery hybrid systems for uninterrupted power with intelligent switching between solar, battery, and grid sources.",
        icon: "Zap",
      },
      {
        title: "Energy Storage (ESS)",
        description:
          "Lithium-ion and advanced battery storage systems for peak shaving, load shifting, and backup power applications.",
        icon: "Battery",
      },
      {
        title: "Solar O&M Services",
        description:
          "Comprehensive operations and maintenance with remote monitoring, cleaning, preventive maintenance, and performance optimization.",
        icon: "Wrench",
      },
      {
        title: "Subsidy & Financing",
        description:
          "Complete assistance with government subsidy applications (PM Surya Ghar, MNRE), bank financing, and DISCOM approvals.",
        icon: "IndianRupee",
      },
      {
        title: "Energy Auditing",
        description:
          "Detailed energy audits with consumption analysis, load profiling, and ROI projections for informed decision-making.",
        icon: "BarChart",
      },
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment",
        description:
          "Shadow analysis, structural assessment, load calculation, and drone mapping to determine optimal system design.",
      },
      {
        step: 2,
        title: "System Design & Approval",
        description:
          "PVsyst simulation, BOQ preparation, DISCOM application, subsidy filing, and financing arrangement.",
      },
      {
        step: 3,
        title: "Procurement & Installation",
        description:
          "Tier-1 equipment procurement, structure fabrication, panel mounting, wiring, inverter installation, and grid synchronization.",
      },
      {
        step: 4,
        title: "Commissioning & Monitoring",
        description:
          "DISCOM inspection, net metering activation, IoT monitoring setup, performance testing, and handover with 25-year warranty.",
      },
    ],
    useCases: [
      "Residential Rooftop",
      "Commercial Buildings",
      "Industrial Facilities",
      "Agricultural Pumping",
      "Institutional Campuses",
      "EV Charging Stations",
    ],
    relatedProjectSlugs: [
      "250kw-rooftop-bhilwara",
      "500kw-industrial-jodhpur",
      "100kw-school-udaipur",
      "1mw-ground-mount-jaisalmer",
      "hybrid-ess-resort-mount-abu",
      "50kw-ev-station-jaipur",
    ],
    relatedProductSlugs: [
      "solar-inverter-string",
      "solar-module-mono",
      "battery-lithium-ess",
      "net-meter-bidirectional",
    ],
    faq: [
      {
        question: "What is the ROI on a solar installation?",
        answer:
          "Typical payback period is 3-5 years for commercial and 4-6 years for residential systems. After payback, you enjoy free electricity for 20+ years.",
      },
      {
        question: "What subsidies are available?",
        answer:
          "Under PM Surya Ghar, residential systems get 40% subsidy for first 3kW and 20% for 3-10kW. Commercial and industrial systems benefit from accelerated depreciation.",
      },
      {
        question: "What is the difference between on-grid and hybrid?",
        answer:
          "On-grid systems feed excess power to the grid via net metering. Hybrid systems add battery storage for power backup during outages and can operate off-grid.",
      },
      {
        question: "How much roof space do I need?",
        answer:
          "Approximately 100 sq ft per kW of solar capacity. A typical 5kW residential system needs about 500 sq ft of shadow-free roof area.",
      },
    ],
  },
];

export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.slug);
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: string): ServiceData[] {
  return SERVICES_DATA.filter((s) => s.category === category);
}
