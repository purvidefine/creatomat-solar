export interface ProductData {
  slug: string;
  title: string;
  category: string;
  serviceSlug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  relatedProductSlugs: string[];
}

export const PRODUCTS_DATA: ProductData[] = [
  {
    slug: "mcc-panel",
    title: "Motor Control Center (MCC) Panel",
    category: "Electrical Panels",
    serviceSlug: "industrial-automation",
    shortDescription:
      "Fully compartmentalized MCC panels for centralized motor control with VFD integration and intelligent monitoring.",
    fullDescription:
      "Our MCC panels are designed and manufactured to IS/IEC 61439 standards, featuring fully compartmentalized construction with withdrawable functional units. Each panel includes intelligent motor protection relays, VFD bays, and Modbus/PROFINET communication for seamless integration with SCADA systems. Available in fixed, semi-draw-out, and fully draw-out configurations.",
    features: [
      "IS/IEC 61439 certified design",
      "Fully compartmentalized construction",
      "Withdrawable functional units",
      "Integrated VFD bays with harmonic filters",
      "Modbus RTU / PROFINET communication",
      "Arc flash protection (optional)",
      "IP54 / IP55 rated enclosure",
      "Powder-coated RAL 7035 finish",
    ],
    specifications: {
      "Voltage Rating": "415V AC, 3-phase",
      "Bus Bar Rating": "Up to 6300A",
      "Short Circuit": "Up to 65 kA for 1 sec",
      "Form of Separation": "Form 2b / Form 3b / Form 4b",
      "Protection Class": "IP54 / IP55",
      Dimensions: "Custom (standard: 2200×800×600mm)",
      Finish: "Powder-coated RAL 7035",
      Standards: "IS 61439-1, IS 61439-2",
    },
    applications: [
      "Textile Mills",
      "Cement Plants",
      "Water Treatment",
      "Food Processing",
      "Chemical Industries",
      "Manufacturing Plants",
    ],
    relatedProductSlugs: ["vfd-drive-panel", "apfc-panel", "plc-scada-system"],
  },
  {
    slug: "vfd-drive-panel",
    title: "VFD Drive Panel",
    category: "Electrical Panels",
    serviceSlug: "industrial-automation",
    shortDescription:
      "Variable Frequency Drive panels for precise motor speed control with energy savings up to 40%.",
    fullDescription:
      "Our VFD panels provide precise motor speed control for energy optimization and process flexibility. Designed with proper cable segregation, EMC filters, and thermal management, these panels ensure reliable operation in demanding industrial environments. Available with ABB, Siemens, Schneider, and Danfoss drives.",
    features: [
      "Multi-drive or single-drive configurations",
      "Built-in EMC/RFI filters",
      "Dedicated cooling with filtered fans",
      "Line and load reactors included",
      "Bypass contactor option",
      "Communication gateway (Modbus/PROFINET)",
      "Energy metering built-in",
      "Touch-safe design",
    ],
    specifications: {
      "Drive Range": "0.75 kW to 500 kW",
      "Input Voltage": "415V AC ±10%, 3-phase",
      "Output Frequency": "0-120 Hz",
      "Cooling": "Forced air with filtered intake",
      "EMC Filter": "Class C2 / C1",
      "Communication": "Modbus RTU, PROFINET, EtherNet/IP",
      "Protection": "IP42 / IP54",
      "Drive Brands": "ABB, Siemens, Schneider, Danfoss",
    },
    applications: [
      "Conveyor Systems",
      "Pump Stations",
      "HVAC Systems",
      "Compressors",
      "Winding Machines",
      "Crushers & Mixers",
    ],
    relatedProductSlugs: ["mcc-panel", "plc-scada-system", "apfc-panel"],
  },
  {
    slug: "plc-scada-system",
    title: "PLC & SCADA Automation System",
    category: "Automation Systems",
    serviceSlug: "industrial-automation",
    shortDescription:
      "Turnkey PLC programming and SCADA integration for complete process monitoring and control.",
    fullDescription:
      "We deliver complete PLC and SCADA solutions from system design to commissioning. Our team programs Siemens, Allen Bradley, Mitsubishi, and Delta PLCs with intuitive SCADA interfaces for real-time visualization, data logging, alarming, and remote access. Every system includes comprehensive documentation and operator training.",
    features: [
      "Multi-brand PLC support",
      "Custom SCADA visualization",
      "Remote access via VPN/cloud",
      "Historical data logging & trending",
      "SMS/email alarm notifications",
      "Recipe management systems",
      "Report generation (shift/daily/monthly)",
      "Redundant controller options",
    ],
    specifications: {
      "PLC Brands": "Siemens, Allen Bradley, Mitsubishi, Delta",
      "SCADA Software": "WinCC, FactoryTalk, Ignition",
      "Communication": "PROFINET, EtherNet/IP, Modbus TCP",
      "I/O Capacity": "Up to 10,000+ points",
      "Historian": "SQL-based, 1-year rolling",
      "Remote Access": "VPN + cloud dashboard",
      "Redundancy": "Hot-standby CPU option",
      "HMI Options": "7\" to 22\" touchscreen",
    },
    applications: [
      "Process Industries",
      "Water Treatment",
      "Power Plants",
      "Building Management",
      "Packaging Lines",
      "Material Handling",
    ],
    relatedProductSlugs: ["mcc-panel", "vfd-drive-panel"],
  },
  {
    slug: "apfc-panel",
    title: "APFC Power Factor Correction Panel",
    category: "Electrical Panels",
    serviceSlug: "industrial-automation",
    shortDescription:
      "Automatic Power Factor Correction panels to maintain unity power factor and avoid penalty charges.",
    fullDescription:
      "Our APFC panels automatically maintain power factor at 0.99 by switching capacitor banks in response to reactive power demand. Equipped with intelligent controllers, thyristor switching for fast response, and harmonic filters for non-linear loads, these panels reduce electricity bills and prevent DISCOM penalties.",
    features: [
      "Automatic capacitor bank switching",
      "Thyristor or contactor switching",
      "Detuned reactor for harmonic mitigation",
      "Multi-stage stepping (up to 14 stages)",
      "Power quality analyzer built-in",
      "RS485 Modbus communication",
      "Individual capacitor protection fuses",
      "Temperature-compensated control",
    ],
    specifications: {
      "kVAR Range": "50 to 1000 kVAR",
      "Voltage": "415V AC, 3-phase",
      "Target PF": "0.99 leading/lagging",
      "Stages": "6/8/10/12/14 steps",
      "Switching": "Thyristor (< 20ms) or Contactor",
      "Controller": "Epcos BR6000 / L&T",
      "Detuning": "7% or 14% reactor (optional)",
      "Protection": "HRC fuses + MCCB",
    },
    applications: [
      "Industrial Plants",
      "Commercial Buildings",
      "IT Parks",
      "Hospitals",
      "Hotels & Malls",
      "Textile Mills",
    ],
    relatedProductSlugs: ["mcc-panel", "vfd-drive-panel"],
  },
  {
    slug: "smart-switch-panel",
    title: "Smart Home Switch Panel",
    category: "Home Automation",
    serviceSlug: "home-automation",
    shortDescription:
      "Elegant touch-screen smart switch panels with scene control, scheduling, and voice assistant integration.",
    fullDescription:
      "Our smart switch panels replace conventional switches with sleek capacitive touch interfaces. Available in 2/4/6/8 gang configurations with LED backlight, scene buttons, and built-in WiFi/Zigbee connectivity. Compatible with Alexa, Google Home, and Apple HomeKit for voice control.",
    features: [
      "Capacitive touch with haptic feedback",
      "LED backlit buttons",
      "Scene control (up to 4 scenes per panel)",
      "Scheduling & timer functions",
      "WiFi + Zigbee dual protocol",
      "Alexa / Google Home / HomeKit compatible",
      "Tempered glass faceplate",
      "Available in black, white, gold",
    ],
    specifications: {
      "Gang Options": "2 / 4 / 6 / 8 gang",
      "Load Rating": "16A per channel",
      "Connectivity": "WiFi 2.4GHz + Zigbee 3.0",
      "Voltage": "100-240V AC",
      "Faceplate": "Tempered glass, 3mm",
      "Mounting": "Standard modular box",
      "App Control": "Tuya / SmartLife",
      "Colors": "Midnight Black, Pearl White, Gold",
    },
    applications: [
      "Living Rooms",
      "Bedrooms",
      "Home Offices",
      "Hotels & BnBs",
      "Conference Rooms",
      "Retail Stores",
    ],
    relatedProductSlugs: ["home-controller-hub", "motorized-curtain-system"],
  },
  {
    slug: "home-controller-hub",
    title: "Central Home Automation Hub",
    category: "Home Automation",
    serviceSlug: "home-automation",
    shortDescription:
      "Central controller hub for unified management of all smart home devices with local processing and cloud backup.",
    fullDescription:
      "The central hub acts as the brain of your smart home, connecting and controlling all devices through a single interface. With local processing for privacy and speed, cloud backup for remote access, and support for multiple protocols, it ensures your smart home works seamlessly even without internet.",
    features: [
      "Multi-protocol support (Zigbee, Z-Wave, WiFi, BLE)",
      "Local processing — works without internet",
      "Cloud backup & remote access",
      "Automation rules & scene engine",
      "Energy monitoring dashboard",
      "Voice assistant bridge",
      "OTA firmware updates",
      "API for custom integrations",
    ],
    specifications: {
      Processor: "Quad-core ARM Cortex-A55",
      Memory: "2GB RAM, 16GB eMMC",
      Protocols: "Zigbee 3.0, Z-Wave Plus, WiFi, BLE 5.0",
      "Max Devices": "200+ devices",
      "Power": "5V DC, 2A (USB-C)",
      Connectivity: "Ethernet + WiFi 5",
      Dimensions: "120×120×30mm",
      App: "iOS & Android",
    },
    applications: [
      "Whole-home Automation",
      "Smart Apartments",
      "Hotel Room Control",
      "Senior Living",
      "Vacation Homes",
      "Office Automation",
    ],
    relatedProductSlugs: ["smart-switch-panel", "motorized-curtain-system"],
  },
  {
    slug: "motorized-curtain-system",
    title: "Motorized Curtain & Blind System",
    category: "Home Automation",
    serviceSlug: "home-automation",
    shortDescription:
      "Silent motorized curtain tracks and roller blind systems with app control, scheduling, and sun-tracking.",
    fullDescription:
      "Our motorized curtain systems combine ultra-quiet Somfy motors with precision-engineered tracks for smooth, silent operation. Features include sun-tracking automation, one-touch scenes, integration with lighting systems, and support for heavy fabrics up to 40kg per track.",
    features: [
      "Ultra-quiet operation (< 35dB)",
      "Up to 40kg fabric capacity",
      "Sun-tracking automation",
      "Integration with lighting scenes",
      "Touch, app, and voice control",
      "Battery-powered option available",
      "Custom track lengths up to 8m",
      "Compatible with all fabric types",
    ],
    specifications: {
      "Motor": "Somfy Glydea Ultra 60",
      "Noise Level": "< 35 dB",
      "Max Load": "40 kg per track",
      "Track Length": "Custom up to 8m",
      "Speed": "Adjustable, 8-20 cm/s",
      "Power": "230V AC or rechargeable battery",
      "Control": "RF remote + WiFi + dry contact",
      "Warranty": "5 years motor, 2 years electronics",
    },
    applications: [
      "Living Rooms",
      "Bedrooms",
      "Home Theaters",
      "Hotel Rooms",
      "Conference Rooms",
      "Healthcare Facilities",
    ],
    relatedProductSlugs: ["smart-switch-panel", "home-controller-hub"],
  },
  {
    slug: "bobbin-winding-machine",
    title: "Automatic Bobbin Winding Machine",
    category: "SPM",
    serviceSlug: "spm",
    shortDescription:
      "High-speed automatic bobbin winding with programmable tension, traverse, and pattern control.",
    fullDescription:
      "Our flagship SPM for the textile industry. This automatic bobbin winding machine features servo-driven spindles with electronic tension control, programmable winding patterns, automatic doffing, and integrated quality monitoring. Available in 4, 8, 12, and 16-spindle configurations.",
    features: [
      "Servo-driven spindle motors",
      "Electronic tension control (±1%)",
      "Programmable winding patterns",
      "Automatic doffing system",
      "Yarn break detection + alarm",
      "Touch-screen HMI operation",
      "Batch counter & production log",
      "Quick-change bobbin holders",
    ],
    specifications: {
      Spindles: "4 / 8 / 12 / 16 configuration",
      "Speed Range": "100-1500 RPM",
      "Yarn Count": "10-100 Ne",
      "Bobbin Size": "Φ50-Φ200mm",
      "Tension Range": "5-500 gf",
      "PLC": "Mitsubishi FX5U",
      "Power": "3-phase, 415V AC",
      "Air Supply": "6 bar, clean dry air",
    },
    applications: [
      "Yarn Manufacturing",
      "Technical Textiles",
      "Wire & Cable",
      "Thread Production",
      "Elastic Manufacturing",
      "Monofilament Winding",
    ],
    relatedProductSlugs: ["auto-crimping-machine", "testing-rig"],
  },
  {
    slug: "auto-crimping-machine",
    title: "Automatic Wire Crimping Machine",
    category: "SPM",
    serviceSlug: "spm",
    shortDescription:
      "High-speed automatic wire cutting, stripping, and crimping with force monitoring and quality verification.",
    fullDescription:
      "Precision automatic wire processing machine for high-volume harness manufacturing. Features servo-driven feeding, rotary stripping, and crimp force monitoring with SPC analysis. Handles single and multi-core cables with automatic terminal feeding from reel.",
    features: [
      "Cut-strip-crimp in one cycle",
      "Crimp force monitoring (CFM)",
      "Servo-driven wire feed (±0.5mm)",
      "Automatic terminal feeding",
      "SPC analysis & data logging",
      "Quick-change tooling system",
      "Dual-end processing option",
      "Touch-screen recipe management",
    ],
    specifications: {
      "Wire Range": "0.1 - 6 sq mm",
      "Cut Length": "25mm - 10m",
      "Strip Length": "1-20mm each end",
      "Crimp Force": "1-5 ton, servo-controlled",
      "Speed": "Up to 5000 pcs/hour",
      "Accuracy": "Length ±0.5mm, strip ±0.2mm",
      "Terminal Feed": "Side/end reel, auto-advance",
      "Power": "Single-phase, 230V AC",
    },
    applications: [
      "Automotive Harnesses",
      "Appliance Wiring",
      "Control Panel Wiring",
      "Solar Cable Assembly",
      "EV Cable Harness",
      "Industrial Controls",
    ],
    relatedProductSlugs: ["bobbin-winding-machine", "testing-rig"],
  },
  {
    slug: "testing-rig",
    title: "Custom Testing & Gauging Rig",
    category: "SPM",
    serviceSlug: "spm",
    shortDescription:
      "Custom-built testing rigs for dimensional, functional, and endurance testing with data logging.",
    fullDescription:
      "We design and build custom testing rigs for end-of-line quality verification. Each rig is tailored to your product specifications and includes automated test sequences, go/no-go gauging, data logging, and pass/fail sorting. Available with pneumatic, hydraulic, or servo actuation.",
    features: [
      "Custom test sequence programming",
      "Go/No-Go dimensional gauging",
      "Leak testing integration",
      "Load/force measurement",
      "Vision inspection option",
      "Automated pass/fail sorting",
      "Database logging & certificates",
      "Barcode/QR traceability",
    ],
    specifications: {
      "Actuation": "Pneumatic / Hydraulic / Servo",
      "Force Range": "10N - 100kN",
      "Measurement": "LVDT, load cell, pressure transducer",
      "Resolution": "0.001mm / 0.1N",
      "Cycle Time": "5-30 seconds (application dependent)",
      "Data": "SQL database + CSV export",
      "PLC": "Siemens / Mitsubishi",
      "Safety": "Light curtain + two-hand control",
    },
    applications: [
      "Automotive Components",
      "Hydraulic Fittings",
      "Electrical Assemblies",
      "Castings & Forgings",
      "Plastic Molded Parts",
      "Medical Devices",
    ],
    relatedProductSlugs: ["bobbin-winding-machine", "auto-crimping-machine"],
  },
];

export function getAllProductSlugs(): string[] {
  return PRODUCTS_DATA.map((p) => p.slug);
}

export function getProductBySlug(slug: string): ProductData | undefined {
  return PRODUCTS_DATA.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): ProductData[] {
  return PRODUCTS_DATA.filter((p) => p.category === category);
}

export function getProductsByServiceSlug(serviceSlug: string): ProductData[] {
  return PRODUCTS_DATA.filter((p) => p.serviceSlug === serviceSlug);
}

export function getRelatedProducts(slugs: string[]): ProductData[] {
  return PRODUCTS_DATA.filter((p) => slugs.includes(p.slug));
}

export function getProductCategories(): string[] {
  return [...new Set(PRODUCTS_DATA.map((p) => p.category))];
}
