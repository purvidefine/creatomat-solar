"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface ContactInfo { phone: string; email: string; whatsapp: string }
interface CTAHeader {
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export default function ContactCTA({
  contact,
  header,
}: {
  contact?: ContactInfo;
  header?: CTAHeader;
}) {
  const c = contact ?? CONTACT_INFO;
  return (
    <section id="contact" className="section-padding bg-navy relative overflow-hidden grid-lines-dark">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            {header?.heading ?? "Ready to Go Solar?"}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            {header?.description ?? "Get a free site assessment and custom quote within 24 hours. Our engineers are ready to design your optimal energy solution."}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-12">
            <Button href="#contact-form" variant="amber" size="lg">
              {header?.primaryButtonText ?? "Get Free Quote"}
            </Button>
            <Button href={`tel:${c.phone}`} variant="outline" size="lg">
              <Phone size={18} className="mr-2" />
              {header?.secondaryButtonText ?? "Call Us Now"}
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 text-sm">
            <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Phone size={16} />{c.phone}
            </a>
            <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Mail size={16} />{c.email}
            </a>
            <a href={`https://wa.me/${c.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20solar%20solutions`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <MessageCircle size={16} />WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
