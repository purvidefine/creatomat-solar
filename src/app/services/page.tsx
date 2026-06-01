"use client";

import { motion } from "framer-motion";
import {
  Sun, Cpu, Cog, Zap, Wrench, GraduationCap,
  ArrowRight, CheckCircle, ChevronRight,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

const SERVICE_SLUG_MAP: Record<string, string> = {
  "solar-epc": "solar-epc-hybrid-ess",
  "automation": "industrial-automation",
  "spm": "spm",
  "electrical": "industrial-automation",
  "maintenance": "",
  "training": "",
};

const SERVICES = [
  {
    id: "solar-epc",
    icon: Sun,
    title: "Solar EPC Solutions",
    tagline: "Design. Install. Commission.",
    description: "Complete end-to-end solar power plant execution — from feasibility study to grid synchronization. We handle rooftop, ground-mount, carport, and hybrid systems for commercial and industrial clients.",
    features: ["Rooftop & Ground Mount Systems", "Feasibility & Shadow Analysis", "Net Metering & DISCOM Approvals", "Performance Monitoring Setup", "Government Subsidy Assistance"],
    stat: { value: "10MW+", label: "Installed Capacity" },
    color: "from-amber to-orange",
  },
  {
    id: "automation",
    icon: Cpu,
    title: "Industrial Automation",
    tagline: "Smarter. Faster. Leaner.",
    description: "Transform your production line with intelligent automation systems. Our PLC/SCADA-based solutions reduce human error, boost throughput, and deliver real-time operational visibility.",
    features: ["PLC & SCADA Programming", "HMI Design & Integration", "Motor Control Centers", "Process Automation", "Remote Monitoring Systems"],
    stat: { value: "200+", label: "Systems Deployed" },
    color: "from-primary to-cyan-500",
  },
  {
    id: "spm",
    icon: Cog,
    title: "Special Purpose Machines",
    tagline: "Engineered for Your Exact Needs.",
    description: "Custom-designed and manufactured machines built specifically for your production requirements. From concept to commissioning, every SPM is engineered in-house for maximum precision.",
    features: ["Custom Design & Engineering", "In-House Manufacturing", "Testing & Quality Assurance", "Installation & Training", "Spare Parts & Support"],
    stat: { value: "100+", label: "SPMs Delivered" },
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical Panels & Power",
    tagline: "The Backbone of Your Operations.",
    description: "Complete electrical infrastructure solutions — MCC, PCC, APFC panels, bus ducts, and power distribution systems designed for reliability and safety.",
    features: ["MCC & PCC Panels", "APFC Panels", "Power Distribution Boards", "Bus Duct Systems", "Load Management Solutions"],
    stat: { value: "300+", label: "Panels Built" },
    color: "from-emerald-500 to-green-500",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & AMC",
    tagline: "We Don't Just Build — We Back It Up.",
    description: "Comprehensive annual maintenance contracts with guaranteed uptime, predictive servicing, and rapid emergency response for all solar and automation systems.",
    features: ["Preventive Maintenance", "Performance Optimization", "24/7 Remote Monitoring", "Emergency Response", "Component Replacement"],
    stat: { value: "99.5%", label: "Uptime Guarantee" },
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training & Development",
    tagline: "Build Your Team's Capability.",
    description: "Professional skill development programs in automation, solar technology, and electrical systems. Equip your workforce with the knowledge to operate and maintain modern systems.",
    features: ["Hands-On Workshops", "Certification Programs", "On-Site Training", "Custom Curriculum", "Ongoing Skill Upgrades"],
    stat: { value: "1000+", label: "People Trained" },
    color: "from-sky-500 to-blue-500",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        overline="Our Services"
        title="Engineering Solutions That Power Progress"
        description="From solar energy systems to factory automation — we deliver comprehensive, turnkey solutions built for performance and reliability."
      />

      {/* Services Detail */}
      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    !isEven ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <Icon size={22} className="text-white" />
                      </div>
                      <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                        0{i + 1}
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-2 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-primary mb-4">{service.tagline}</p>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <CheckCircle size={16} className="text-primary flex-shrink-0" />
                          <span className="text-sm text-gray-600">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <Button href="/contact">
                        Enquire Now <ChevronRight size={16} className="ml-1" />
                      </Button>
                      {SERVICE_SLUG_MAP[service.id] && (
                        <Link
                          href={`/services/${SERVICE_SLUG_MAP[service.id]}`}
                          className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors"
                        >
                          Learn More <ArrowRight size={14} className="ml-1" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Visual Card */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <div className={`rounded-3xl bg-gradient-to-br ${service.color} p-[1px]`}>
                      <div className="rounded-3xl bg-navy p-10 lg:p-14 relative overflow-hidden">
                        <div className="absolute inset-0 dot-grid opacity-20" />
                        <div className="relative z-10 text-center">
                          <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-xl`}>
                            <Icon size={36} className="text-white" />
                          </div>
                          <div className="font-heading text-4xl lg:text-5xl font-bold text-white mb-2">
                            {service.stat.value}
                          </div>
                          <p className="text-sm text-gray-400">{service.stat.label}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Every project is unique. Tell us about your requirements and we&apos;ll engineer the perfect solution.
            </p>
            <Button href="/contact" variant="amber" size="lg">
              Discuss Your Project <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
