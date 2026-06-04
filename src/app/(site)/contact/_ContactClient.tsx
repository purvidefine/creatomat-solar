"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import type { ContactInfo } from "@/lib/data/siteSettings";

export default function ContactClient({ contact }: { contact: ContactInfo }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const methods = [
    {
      icon: Phone,
      title: "Call Us",
      detail: contact.phone,
      href: `tel:${contact.phone}`,
      description: "Mon–Sat, 9 AM – 6 PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: contact.email,
      href: `mailto:${contact.email}`,
      description: "We reply within 24 hours",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "Chat with us",
      href: `https://wa.me/${contact.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20solar%20solutions`,
      description: "Instant response",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Bhilwara, Rajasthan",
      href: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`,
      description: contact.address,
    },
  ];

  return (
    <>
      {/* Contact Methods */}
      <section className="py-12 bg-white border-b border-gray-100 grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {methods.map((method) => (
              <motion.a
                key={method.title}
                variants={fadeUp}
                href={method.href}
                target={method.title === "WhatsApp" || method.title === "Visit Us" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center mb-3 transition-colors">
                  <method.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-navy mb-1">{method.title}</h3>
                <p className="text-sm font-medium text-primary mb-1">{method.detail}</p>
                <p className="text-xs text-gray-400">{method.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-gray-50 grid-lines-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">Get Your Free Quote</h2>
                <p className="text-sm text-gray-500 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-emerald-600" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">Thank You!</h3>
                    <p className="text-gray-500">We&apos;ve received your enquiry and will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input type="text" required placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
                        <input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                        <input type="email" required placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                        <input type="text" placeholder="Your city" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Interested In</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-gray-600">
                        <option>Select a service</option>
                        <option>Solar EPC Solutions</option>
                        <option>Industrial Automation</option>
                        <option>Special Purpose Machines</option>
                        <option>Electrical Panels</option>
                        <option>Maintenance &amp; AMC</option>
                        <option>Training</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                      <textarea rows={4} placeholder="Tell us about your project requirements..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm resize-none" />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-primary to-primary-light rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300">
                      <Send size={18} />
                      Submit Enquiry
                    </button>
                    <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">🔒 Your data is secure and will never be shared.</p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info Side */}
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="font-heading text-lg font-semibold text-navy mb-4">Office Address</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-500 leading-relaxed">{contact.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={18} className="text-primary shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Working Hours</p>
                      <p className="text-sm text-gray-500">Mon – Sat: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <MapPin size={32} className="text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 font-medium">Bhilwara, Rajasthan</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-1 inline-block">
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="bg-navy rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute inset-0 dot-grid opacity-20" />
                <div className="relative">
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">Quick Contact</h3>
                  <p className="text-sm text-gray-400 mb-5">Prefer to reach out directly? We&apos;re always available.</p>
                  <div className="space-y-3">
                    <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"><Phone size={16} /> {contact.phone}</a>
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"><Mail size={16} /> {contact.email}</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
