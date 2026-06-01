export const CALCULATOR_CONSTANTS = {
  electricityRate: 8, // ₹ per kWh average
  unitsPerKwPerYear: 1460, // avg Indian conditions
  sqFtPerKw: 100,
  panelLifeYears: 25,
  co2PerKwPerYear: 1.5, // tonnes

  // Battery / ESS constants
  batteryPricePerKwh: 12000, // ₹ per kWh (LFP)
  batteryLifeCycles: 6000,
  batteryDodPercent: 90,
  batteryEfficiency: 0.92,

  // Hybrid system premium
  hybridInverterPremium: 1.3, // 30% more than string inverter

  // Subsidy rates (PM Surya Ghar)
  subsidyFirst3kw: 0.4,
  subsidyNext7kw: 0.2,
  maxSubsidyKw: 10,
};

export const SYSTEM_MODES = [
  {
    key: "ongrid",
    label: "On-Grid",
    description: "Solar + Net Metering. Lowest cost, requires grid availability.",
    icon: "Sun",
  },
  {
    key: "hybrid",
    label: "Hybrid",
    description: "Solar + Battery + Grid. Power backup during outages.",
    icon: "Zap",
  },
  {
    key: "offgrid",
    label: "Off-Grid / ESS",
    description: "Full energy independence. Battery-powered when solar is unavailable.",
    icon: "Battery",
  },
] as const;

export type SystemMode = (typeof SYSTEM_MODES)[number]["key"];

export const TARIFF_SLABS = [
  { label: "Residential", rate: 6, costPerKw: 50000 },
  { label: "Commercial", rate: 9, costPerKw: 45000 },
  { label: "Industrial", rate: 10, costPerKw: 42000 },
];

export interface CalculatorResult {
  systemSize: number;
  mode: SystemMode;
  solarCost: number;
  batteryCost: number;
  totalCost: number;
  subsidy: number;
  netCost: number;
  annualSavings: number;
  monthlySavings: number;
  paybackYears: string;
  lifetimeSavings: number;
  co2Saved: string;
  batteryCapacity: number;
  backupHours: number;
}

export function calculateSystem(params: {
  monthlyBill: number;
  roofArea: number;
  tariffIndex: number;
  mode: SystemMode;
  backupHoursDesired: number;
}): CalculatorResult {
  const { monthlyBill, roofArea, tariffIndex, mode, backupHoursDesired } = params;
  const C = CALCULATOR_CONSTANTS;
  const tariff = TARIFF_SLABS[tariffIndex];

  const monthlyUnits = monthlyBill / tariff.rate;
  const annualUnits = monthlyUnits * 12;

  const systemSizeKw = Math.ceil(annualUnits / C.unitsPerKwPerYear);
  const maxSystemFromRoof = Math.floor(roofArea / C.sqFtPerKw);
  const finalSystemSize = Math.min(systemSizeKw, maxSystemFromRoof);

  // Solar cost
  let costPerKw = tariff.costPerKw;
  if (mode === "hybrid") costPerKw *= C.hybridInverterPremium;
  if (mode === "offgrid") costPerKw *= 1.1; // slightly more for charge controllers

  const solarCost = finalSystemSize * costPerKw;

  // Battery sizing
  let batteryCapacity = 0;
  let batteryCost = 0;
  let backupHours = 0;

  if (mode === "hybrid" || mode === "offgrid") {
    const avgLoadKw = monthlyUnits / (30 * 24); // average hourly load
    const desiredHours = mode === "offgrid" ? Math.max(backupHoursDesired, 8) : backupHoursDesired;
    batteryCapacity = Math.ceil(
      (avgLoadKw * desiredHours) / (C.batteryDodPercent / 100) / C.batteryEfficiency
    );
    batteryCost = batteryCapacity * C.batteryPricePerKwh;
    backupHours = desiredHours;
  }

  const totalCost = solarCost + batteryCost;

  // Subsidy (only for on-grid residential)
  let subsidy = 0;
  if (tariffIndex === 0 && mode === "ongrid") {
    if (finalSystemSize <= 3) {
      subsidy = solarCost * C.subsidyFirst3kw;
    } else if (finalSystemSize <= C.maxSubsidyKw) {
      subsidy =
        3 * costPerKw * C.subsidyFirst3kw +
        (finalSystemSize - 3) * costPerKw * C.subsidyNext7kw;
    } else {
      subsidy = 3 * costPerKw * C.subsidyFirst3kw + 7 * costPerKw * C.subsidyNext7kw;
    }
  }

  const netCost = totalCost - subsidy;
  const annualSavings = finalSystemSize * C.unitsPerKwPerYear * tariff.rate;
  const monthlySavings = Math.round(annualSavings / 12);
  const paybackYears = (netCost / annualSavings).toFixed(1);
  const lifetimeSavings = annualSavings * C.panelLifeYears - netCost;
  const co2Saved = (finalSystemSize * C.co2PerKwPerYear).toFixed(1);

  return {
    systemSize: finalSystemSize,
    mode,
    solarCost,
    batteryCost,
    totalCost,
    subsidy,
    netCost,
    annualSavings,
    monthlySavings,
    paybackYears,
    lifetimeSavings,
    co2Saved,
    batteryCapacity,
    backupHours,
  };
}
