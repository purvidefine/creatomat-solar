"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Solar EPC Solutions", href: "#services" },
  { label: "Industrial Automation", href: "#services" },
  { label: "Special Purpose Machines", href: "#services" },
  { label: "Electrical Panels", href: "#services" },
  { label: "Maintenance & AMC", href: "#services" },
  { label: "Training", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="mb-4">
              <Logo size="md" variant="light" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Engineering excellence in solar energy and industrial automation.
              Made in India, built for the future.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-xs font-medium"
                  aria-label={link.label}
                >
                  {link.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex gap-2 text-sm hover:text-white transition-colors"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex gap-2 text-sm">
                <Clock size={16} className="flex-shrink-0" />
                Mon–Sat: 9:00 AM – 6:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Creatomat Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
