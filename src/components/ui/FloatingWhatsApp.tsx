import React from 'react';
import { MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { companyData } from '../../data/company';

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact links" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Quick Call Button */}
      <a
        href={`tel:${companyData.contact.phones[0]}`}
        title="Call AIIVA Automation"
        aria-label="Call AIIVA Automation"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-paper/20 text-paper shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-accent hover:text-accent"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>

      {/* Floating WhatsApp CTA */}
      <a
        href={`https://wa.me/91${companyData.contact.whatsapp}?text=Hi%20AIIVA%20Automation,%20I%20would%20like%20to%20know%20more%20about%20your%20smart%20automation%20solutions`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with AIIVA Automation on WhatsApp"
        aria-label="Chat with AIIVA Automation on WhatsApp"
        className="group flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)]"
      >
        <div className="relative">
          <MessageCircleIcon className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/85 leading-none">
            Chat with us
          </span>
          <span className="text-xs font-bold leading-tight">
            WhatsApp +91 {companyData.contact.whatsapp}
          </span>
        </div>
      </a>
    </aside>
  );
}
