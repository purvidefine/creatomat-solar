"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight, ChevronDown, Sun, Cpu, Cog, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";

const SERVICE_LINKS = [
  { label: "Solar EPC & Hybrid ESS", href: "/services/solar-epc-hybrid-ess", icon: Sun },
  { label: "Industrial Automation", href: "/services/industrial-automation", icon: Cpu },
  { label: "Special Purpose Machines", href: "/services/spm", icon: Cog },
  { label: "Home Automation", href: "/services/home-automation", icon: Home },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* Always use dark text — scrolled bg is white, unscrolled homepage is cream */
  const useDarkText = true;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-lg shadow-black/5 border-b border-gray-200/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] md:h-[80px]">
            {/* Logo */}
            <Link href="/" className="group">
              <Logo size="md" variant="dark" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.hasDropdown && pathname.startsWith("/services/"));

                if (link.hasDropdown) {
                  return (
                    <div key={link.label} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        onMouseEnter={() => setServicesOpen(true)}
                        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1 ${
                          useDarkText
                            ? isActive
                              ? "text-navy"
                              : "text-gray-500 hover:text-navy"
                            : isActive
                              ? "text-white"
                              : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                        {isActive && (
                          <motion.div
                            layoutId="activeNav"
                            className={`absolute inset-0 rounded-lg ${
                              useDarkText ? "bg-navy/5" : "bg-white/10"
                            }`}
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                      </button>

                      {/* Services Dropdown */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                            onMouseLeave={() => setServicesOpen(false)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-navy/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/20 p-2 overflow-hidden"
                          >
                            {SERVICE_LINKS.map((service) => {
                              const Icon = service.icon;
                              const isServiceActive = pathname === service.href;
                              return (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                                    isServiceActive
                                      ? "bg-primary/15 text-primary"
                                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  <div
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                      isServiceActive
                                        ? "bg-primary/20"
                                        : "bg-white/5"
                                    }`}
                                  >
                                    <Icon size={16} />
                                  </div>
                                  <span className="font-medium">
                                    {service.label}
                                  </span>
                                </Link>
                              );
                            })}
                            <div className="border-t border-white/5 mt-1 pt-1">
                              <Link
                                href="/services"
                                className="flex items-center justify-between px-4 py-3 rounded-xl text-xs text-gray-400 hover:text-primary hover:bg-white/5 transition-all"
                              >
                                View All Services
                                <ArrowRight size={12} />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      useDarkText
                        ? isActive
                          ? "text-navy"
                          : "text-gray-500 hover:text-navy"
                        : isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute inset-0 rounded-lg ${
                          useDarkText ? "bg-navy/5" : "bg-white/10"
                        }`}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-5">
              <a
                href="tel:+919828067847"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  useDarkText
                    ? "text-gray-500 hover:text-navy"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Phone size={15} />
                <span className="font-mono text-xs">+91 98280 67847</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-navy-dark bg-gradient-to-r from-primary to-primary-light rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Quote
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                useDarkText
                  ? "text-navy hover:bg-navy/5"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: "circle(0% at calc(100% - 40px) 36px)",
            }}
            animate={{
              opacity: 1,
              clipPath: "circle(150% at calc(100% - 40px) 36px)",
            }}
            exit={{
              opacity: 0,
              clipPath: "circle(0% at calc(100% - 40px) 36px)",
            }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-5 md:hidden overflow-y-auto py-24"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={`text-3xl font-heading font-bold transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile service sub-links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col items-center gap-2 mt-1"
            >
              {SERVICE_LINKS.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === service.href
                      ? "text-primary"
                      : "text-gray-400 hover:text-primary"
                  }`}
                >
                  {service.label}
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-6"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-primary to-primary-light rounded-2xl"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
