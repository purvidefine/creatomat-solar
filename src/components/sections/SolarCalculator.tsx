"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Zap,
  IndianRupee,
  Leaf,
  TrendingUp,
  ArrowRight,
  Calculator,
  RotateCcw,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import Link from "next/link";

const SYSTEM_TYPES = [
  { label: "Residential", avgBill: 3000, costPerKw: 50000 },
  { label: "Commercial", avgBill: 50000, costPerKw: 45000 },
  { label: "Industrial", avgBill: 200000, costPerKw: 40000 },
];

export default function SolarCalculator() {
  const [systemType, setSystemType] = useState(1); // Commercial default
  const [monthlyBill, setMonthlyBill] = useState(25000);
  const [roofArea, setRoofArea] = useState(1000); // sq ft
  const [showResults, setShowResults] = useState(false);

  const results = useMemo(() => {
    const electricityRate = 8; // ₹ per kWh avg
    const monthlyUnits = monthlyBill / electricityRate;
    const annualUnits = monthlyUnits * 12;

    // 1 kW generates ~4 units/day = ~1460 units/year (avg Indian conditions)
    const systemSizeKw = Math.ceil(annualUnits / 1460);
    // 1 kW needs ~100 sq ft
    const maxSystemFromRoof = Math.floor(roofArea / 100);
    const finalSystemSize = Math.min(systemSizeKw, maxSystemFromRoof);

    const costPerKw = SYSTEM_TYPES[systemType].costPerKw;
    const totalCost = finalSystemSize * costPerKw;

    // Subsidy: 40% for first 3kW, 20% for 3-10kW for residential
    let subsidy = 0;
    if (systemType === 0) {
      // Residential
      if (finalSystemSize <= 3) {
        subsidy = totalCost * 0.4;
      } else if (finalSystemSize <= 10) {
        subsidy = 3 * costPerKw * 0.4 + (finalSystemSize - 3) * costPerKw * 0.2;
      } else {
        subsidy = 3 * costPerKw * 0.4 + 7 * costPerKw * 0.2;
      }
    }

    const netCost = totalCost - subsidy;
    const annualSavings = finalSystemSize * 1460 * electricityRate;
    const monthlySavings = Math.round(annualSavings / 12);
    const paybackYears = (netCost / annualSavings).toFixed(1);
    const lifetimeSavings = annualSavings * 25 - netCost;
    const co2Saved = (finalSystemSize * 1.5).toFixed(1); // tonnes per year per kW

    return {
      systemSize: finalSystemSize,
      totalCost,
      subsidy,
      netCost,
      annualSavings,
      monthlySavings,
      paybackYears,
      lifetimeSavings,
      co2Saved,
    };
  }, [monthlyBill, roofArea, systemType]);

  const formatCurrency = (n: number) => {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
    if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`;
    return `₹${n}`;
  };

  return (
    <section id="calculator" className="section-padding bg-navy relative overflow-hidden grid-lines-dark">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-green/5 blur-[120px]" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Calculator size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">Solar Savings Calculator</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            How Much Can <span className="gradient-text">You Save?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-4">
            Enter your details below and instantly see your potential solar savings, system size, and payback period.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-light transition-colors"
          >
            Need Hybrid / Off-Grid? Try Advanced Calculator <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:p-10"
          >
            {/* System Type */}
            <div className="mb-8">
              <label className="text-sm font-medium text-gray-300 mb-3 block">System Type</label>
              <div className="grid grid-cols-3 gap-2">
                {SYSTEM_TYPES.map((type, i) => (
                  <button
                    key={type.label}
                    onClick={() => {
                      setSystemType(i);
                      setMonthlyBill(type.avgBill);
                      setShowResults(false);
                    }}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                      systemType === i
                        ? "bg-primary text-navy-dark shadow-lg shadow-primary/25"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Bill */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-300">Monthly Electricity Bill</label>
                <span className="font-mono text-lg font-bold text-primary">
                  ₹{monthlyBill.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={systemType === 2 ? 500000 : systemType === 1 ? 100000 : 15000}
                step={systemType === 2 ? 10000 : systemType === 1 ? 1000 : 500}
                value={monthlyBill}
                onChange={(e) => {
                  setMonthlyBill(Number(e.target.value));
                  setShowResults(false);
                }}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/10 accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹1,000</span>
                <span>₹{(systemType === 2 ? 500000 : systemType === 1 ? 100000 : 15000).toLocaleString()}</span>
              </div>
            </div>

            {/* Roof Area */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-300">Available Roof Area</label>
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

            {/* Calculate Button */}
            <button
              onClick={() => setShowResults(true)}
              className="w-full py-4 rounded-xl font-semibold text-navy-dark bg-gradient-to-r from-primary to-primary-light hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Sun size={18} />
              Calculate My Savings
            </button>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {showResults ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-3xl p-8 lg:p-10 h-full"
              >
                {/* System Size */}
                <div className="text-center mb-8 pb-8 border-b border-white/10">
                  <p className="text-sm text-gray-400 mb-1">Recommended System Size</p>
                  <div className="font-heading text-5xl lg:text-6xl font-bold text-white">
                    {results.systemSize} <span className="text-2xl text-primary">kW</span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: IndianRupee, label: "System Cost", value: formatCurrency(results.totalCost), sub: results.subsidy > 0 ? `Subsidy: ${formatCurrency(results.subsidy)}` : null },
                    { icon: TrendingUp, label: "Monthly Savings", value: `₹${results.monthlySavings.toLocaleString()}`, sub: `Payback: ${results.paybackYears} years` },
                    { icon: Zap, label: "25-Year Savings", value: formatCurrency(results.lifetimeSavings), sub: "Total lifetime benefit" },
                    { icon: Leaf, label: "CO₂ Offset", value: `${results.co2Saved} T/yr`, sub: "Trees equivalent: ~" + Math.round(Number(results.co2Saved) * 50) },
                  ].map((metric) => (
                    <div key={metric.label} className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <metric.icon size={14} className="text-primary" />
                        <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">{metric.label}</span>
                      </div>
                      <div className="font-heading text-xl font-bold text-white">{metric.value}</div>
                      {metric.sub && <p className="text-[11px] text-gray-500 mt-1">{metric.sub}</p>}
                    </div>
                  ))}
                </div>

                {/* Net Cost Highlight */}
                {results.subsidy > 0 && (
                  <div className="bg-green/10 border border-green/20 rounded-xl p-4 mb-6">
                    <p className="text-sm text-green font-medium">
                      Your net cost after subsidy: <span className="font-bold">{formatCurrency(results.netCost)}</span>
                    </p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button href="/contact" size="md" className="flex-1">
                    Get Exact Quote <ArrowRight size={16} className="ml-1" />
                  </Button>
                  <button
                    onClick={() => setShowResults(false)}
                    className="px-4 py-3 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 transition-colors"
                    aria-label="Reset calculator"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>

                <p className="text-[10px] text-gray-600 text-center mt-4">
                  * Estimates based on average Indian solar irradiance. Actual results may vary.
                </p>
              </motion.div>
            ) : (
              <div className="glass rounded-3xl p-8 lg:p-10 h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 animate-float">
                  <Sun size={36} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  See Your Solar Potential
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                  Adjust the sliders on the left and click &quot;Calculate&quot; to see how much
                  you can save by switching to solar energy.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  {["40% Savings", "3-4yr Payback", "25yr Lifespan"].map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-gray-500 px-3 py-1 rounded-full bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
