"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Zap,
  Battery,
  IndianRupee,
  Leaf,
  TrendingUp,
  ArrowRight,
  RotateCcw,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  calculateSystem,
  SYSTEM_MODES,
  TARIFF_SLABS,
  type SystemMode,
  type CalculatorResult,
} from "@/lib/data/calculator";

const MODE_ICONS: Record<string, React.ElementType> = {
  Sun,
  Zap,
  Battery,
};

export default function CalculatorPage() {
  const [mode, setMode] = useState<SystemMode>("ongrid");
  const [tariffIndex, setTariffIndex] = useState(1);
  const [monthlyBill, setMonthlyBill] = useState(25000);
  const [roofArea, setRoofArea] = useState(1000);
  const [backupHours, setBackupHours] = useState(4);
  const [showResults, setShowResults] = useState(false);

  const maxBill =
    tariffIndex === 2 ? 500000 : tariffIndex === 1 ? 100000 : 15000;
  const stepBill = tariffIndex === 2 ? 10000 : tariffIndex === 1 ? 1000 : 500;

  const results = useMemo<CalculatorResult>(() => {
    return calculateSystem({
      monthlyBill,
      roofArea,
      tariffIndex,
      mode,
      backupHoursDesired: backupHours,
    });
  }, [monthlyBill, roofArea, tariffIndex, mode, backupHours]);

  const formatCurrency = (n: number) => {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
    if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`;
    return `₹${n}`;
  };

  const needsBackup = mode === "hybrid" || mode === "offgrid";

  return (
    <main>
      <PageHero
        overline="Solar Calculator"
        title="Design Your Solar System"
        description="Calculate your ideal solar system size, cost, savings, and payback period. Compare On-Grid, Hybrid, and Off-Grid/ESS configurations."
      />

      <section className="section-padding bg-white grid-lines-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* System Mode Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">
              Choose Your System Type
            </h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {SYSTEM_MODES.map((sm) => {
                const Icon = MODE_ICONS[sm.icon];
                const isActive = mode === sm.key;
                return (
                  <button
                    key={sm.key}
                    onClick={() => {
                      setMode(sm.key);
                      setShowResults(false);
                    }}
                    className={`relative p-5 rounded-2xl text-left transition-all duration-300 border-2 ${
                      isActive
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle size={18} className="text-primary" />
                      </div>
                    )}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                        isActive
                          ? "bg-primary/15 text-primary"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <h4
                      className={`font-heading font-bold text-base mb-1 ${
                        isActive ? "text-navy" : "text-gray-600"
                      }`}
                    >
                      {sm.label}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {sm.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Calculator Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-navy rounded-3xl p-8 lg:p-10"
            >
              {/* Consumer Type */}
              <div className="mb-8">
                <label className="text-sm font-medium text-gray-300 mb-3 block">
                  Consumer Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {TARIFF_SLABS.map((slab, i) => (
                    <button
                      key={slab.label}
                      onClick={() => {
                        setTariffIndex(i);
                        setMonthlyBill(
                          i === 0 ? 3000 : i === 1 ? 25000 : 100000
                        );
                        setShowResults(false);
                      }}
                      className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                        tariffIndex === i
                          ? "bg-primary text-navy-dark shadow-lg shadow-primary/25"
                          : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5"
                      }`}
                    >
                      {slab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Bill */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-300">
                    Monthly Electricity Bill
                  </label>
                  <span className="font-mono text-lg font-bold text-primary">
                    ₹{monthlyBill.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={maxBill}
                  step={stepBill}
                  value={monthlyBill}
                  onChange={(e) => {
                    setMonthlyBill(Number(e.target.value));
                    setShowResults(false);
                  }}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹1,000</span>
                  <span>₹{maxBill.toLocaleString()}</span>
                </div>
              </div>

              {/* Roof Area */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-gray-300">
                    Available Roof Area
                  </label>
                  <span className="font-mono text-lg font-bold text-primary">
                    {roofArea.toLocaleString()} sq ft
                  </span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={10000}
                  step={100}
                  value={roofArea}
                  onChange={(e) => {
                    setRoofArea(Number(e.target.value));
                    setShowResults(false);
                  }}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-primary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>200 sq ft</span>
                  <span>10,000 sq ft</span>
                </div>
              </div>

              {/* Backup Hours (only for hybrid/offgrid) */}
              <AnimatePresence>
                {needsBackup && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8 overflow-hidden"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-medium text-gray-300">
                        Desired Backup Hours
                      </label>
                      <span className="font-mono text-lg font-bold text-primary">
                        {backupHours}h
                      </span>
                    </div>
                    <input
                      type="range"
                      min={mode === "offgrid" ? 8 : 2}
                      max={24}
                      step={1}
                      value={backupHours}
                      onChange={(e) => {
                        setBackupHours(Number(e.target.value));
                        setShowResults(false);
                      }}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-primary"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{mode === "offgrid" ? "8h" : "2h"}</span>
                      <span>24h</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Calculate Button */}
              <button
                onClick={() => setShowResults(true)}
                className="w-full py-4 rounded-xl font-semibold text-navy-dark bg-gradient-to-r from-primary to-primary-light hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sun size={18} />
                Calculate My System
              </button>
            </motion.div>

            {/* Results Panel */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {showResults ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-navy rounded-3xl p-8 lg:p-10 h-full"
                  >
                    {/* System Size */}
                    <div className="text-center mb-8 pb-6 border-b border-white/10">
                      <p className="text-sm text-gray-400 mb-1">
                        Recommended System Size
                      </p>
                      <div className="font-heading text-5xl lg:text-6xl font-bold text-white">
                        {results.systemSize}{" "}
                        <span className="text-2xl text-primary">kW</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-wider">
                        {SYSTEM_MODES.find((m) => m.key === mode)?.label} System
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <IndianRupee size={14} className="text-primary" />
                          <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                            Solar Cost
                          </span>
                        </div>
                        <div className="font-heading text-xl font-bold text-white">
                          {formatCurrency(results.solarCost)}
                        </div>
                      </div>

                      {needsBackup && (
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Battery size={14} className="text-primary" />
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                              Battery Cost
                            </span>
                          </div>
                          <div className="font-heading text-xl font-bold text-white">
                            {formatCurrency(results.batteryCost)}
                          </div>
                          <p className="text-[11px] text-gray-500 mt-1">
                            {results.batteryCapacity} kWh /{" "}
                            {results.backupHours}h backup
                          </p>
                        </div>
                      )}

                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp size={14} className="text-primary" />
                          <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                            Monthly Savings
                          </span>
                        </div>
                        <div className="font-heading text-xl font-bold text-white">
                          ₹{results.monthlySavings.toLocaleString()}
                        </div>
                        <p className="text-[11px] text-gray-500 mt-1">
                          Payback: {results.paybackYears} years
                        </p>
                      </div>

                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap size={14} className="text-primary" />
                          <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                            25-Year Savings
                          </span>
                        </div>
                        <div className="font-heading text-xl font-bold text-white">
                          {formatCurrency(results.lifetimeSavings)}
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Leaf size={14} className="text-primary" />
                          <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                            CO₂ Offset
                          </span>
                        </div>
                        <div className="font-heading text-xl font-bold text-white">
                          {results.co2Saved} T/yr
                        </div>
                      </div>

                      {needsBackup && (
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield size={14} className="text-primary" />
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                              Total Cost
                            </span>
                          </div>
                          <div className="font-heading text-xl font-bold text-white">
                            {formatCurrency(results.totalCost)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Subsidy highlight */}
                    {results.subsidy > 0 && (
                      <div className="bg-green/10 border border-green/20 rounded-xl p-4 mb-6">
                        <p className="text-sm text-green font-medium">
                          PM Surya Ghar Subsidy:{" "}
                          <span className="font-bold">
                            {formatCurrency(results.subsidy)}
                          </span>
                        </p>
                        <p className="text-xs text-green/70 mt-1">
                          Net cost after subsidy:{" "}
                          <span className="font-semibold">
                            {formatCurrency(results.netCost)}
                          </span>
                        </p>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button href="/contact" size="md" className="flex-1">
                        Get Exact Quote{" "}
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                      <button
                        onClick={() => setShowResults(false)}
                        className="px-4 py-3 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 transition-colors"
                        aria-label="Reset"
                      >
                        <RotateCcw size={16} />
                      </button>
                    </div>

                    <p className="text-[10px] text-gray-600 text-center mt-4">
                      * Estimates based on average Indian solar irradiance.
                      Actual results may vary.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-navy rounded-3xl p-8 lg:p-10 h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 animate-float">
                      {mode === "hybrid" ? (
                        <Zap size={36} className="text-primary" />
                      ) : mode === "offgrid" ? (
                        <Battery size={36} className="text-primary" />
                      ) : (
                        <Sun size={36} className="text-primary" />
                      )}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">
                      {mode === "ongrid" && "On-Grid Solar System"}
                      {mode === "hybrid" && "Hybrid Solar + Battery"}
                      {mode === "offgrid" && "Off-Grid / ESS System"}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-8">
                      {mode === "ongrid" &&
                        "Lowest cost solar with net metering. Export excess power to the grid and earn credits on your bill."}
                      {mode === "hybrid" &&
                        "Best of both worlds — solar with battery backup for power outages, plus grid connectivity."}
                      {mode === "offgrid" &&
                        "Complete energy independence with full battery storage. Ideal for remote locations or unreliable grid."}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {mode === "ongrid" &&
                        ["Net Metering", "Lowest Cost", "Grid-Tied"].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono text-gray-500 px-3 py-1 rounded-full bg-white/5"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      {mode === "hybrid" &&
                        ["Battery Backup", "Grid + Solar", "Smart Inverter"].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono text-gray-500 px-3 py-1 rounded-full bg-white/5"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      {mode === "offgrid" &&
                        ["Full Independence", "ESS Storage", "Zero Grid"].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono text-gray-500 px-3 py-1 rounded-full bg-white/5"
                            >
                              {tag}
                            </span>
                          )
                        )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gray-50 grid-lines-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy tracking-tight mb-3">
              System Comparison
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Understand the differences between On-Grid, Hybrid, and Off-Grid
              solar configurations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left p-4 font-medium">Feature</th>
                    <th className="text-center p-4 font-medium">On-Grid</th>
                    <th className="text-center p-4 font-medium">Hybrid</th>
                    <th className="text-center p-4 font-medium">Off-Grid / ESS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      feature: "Grid Connection",
                      ongrid: "Required",
                      hybrid: "Optional",
                      offgrid: "Not needed",
                    },
                    {
                      feature: "Battery Storage",
                      ongrid: "No",
                      hybrid: "Yes",
                      offgrid: "Yes (large)",
                    },
                    {
                      feature: "Power During Outage",
                      ongrid: "No",
                      hybrid: "Yes",
                      offgrid: "Yes",
                    },
                    {
                      feature: "Net Metering",
                      ongrid: "Yes",
                      hybrid: "Yes",
                      offgrid: "No",
                    },
                    {
                      feature: "Relative Cost",
                      ongrid: "Lowest",
                      hybrid: "Medium",
                      offgrid: "Highest",
                    },
                    {
                      feature: "Best For",
                      ongrid: "Reliable grid areas",
                      hybrid: "Frequent outages",
                      offgrid: "Remote / no grid",
                    },
                    {
                      feature: "Govt. Subsidy",
                      ongrid: "Available",
                      hybrid: "Limited",
                      offgrid: "Not available",
                    },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-navy">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center text-gray-500">
                        {row.ongrid}
                      </td>
                      <td className="p-4 text-center text-gray-500">
                        {row.hybrid}
                      </td>
                      <td className="p-4 text-center text-gray-500">
                        {row.offgrid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy relative overflow-hidden grid-lines-dark">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to Go Solar?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Get a detailed site survey and customized proposal from our solar
              engineers. Free consultation for all system types.
            </p>
            <Button href="/contact" variant="amber" size="lg">
              Book Free Consultation{" "}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
