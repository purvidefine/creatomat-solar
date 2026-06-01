"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({ className = "", size = "md", variant = "light" }: LogoProps) {
  /* Logo SVG is ~3:1 aspect (wide wordmark with diamond icon). */
  const heights = { sm: 40, md: 48, lg: 60 };
  const h = heights[size];

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="Creatomat"
        width={h * 3}
        height={h}
        style={{
          height: h,
          width: "auto",
          filter: variant === "light" ? "brightness(0) invert(1)" : "none",
        }}
        priority
      />
    </div>
  );
}
