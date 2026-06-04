"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function WhatsAppButton({ whatsapp }: { whatsapp?: string }) {
  const number = whatsapp ?? CONTACT_INFO.whatsapp;
  return (
    <a
      href={`https://wa.me/${number}?text=Hi%2C%20I%27m%20interested%20in%20solar%20solutions`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
