import React from 'react';
import { CtaButton } from './ui/CtaButton';
import { footerLinks } from '../data/navigation';
import { companyData } from '../data/company';
import { scrollToSection } from '../hooks/useSmoothScroll';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MessageCircleIcon,
  SparklesIcon
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-paper/[0.08] bg-ink text-paper">
      {/* Top Banner */}
      <div className="border-b border-paper/[0.06] bg-surface/40 py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/images/aiiva-icon.png"
              alt="AIIVA Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="font-display text-xl font-bold tracking-tight text-paper">
                AIIVA AUTOMATION
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-accent font-semibold">
                PRIVATE LIMITED · {companyData.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/91${companyData.contact.whatsapp}?text=Hi%20AIIVA%20Automation`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-5 py-2.5 text-xs font-bold text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors"
            >
              <MessageCircleIcon className="h-4 w-4" /> WhatsApp: {companyData.contact.whatsapp}
            </a>

            <CtaButton onClick={() => scrollToSection('contact')}>
              Book a Consultation
            </CtaButton>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:items-start">
          {/* Company summary */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-mono mb-3">
              About AIIVA Automation
            </p>
            <p className="font-display text-lg font-medium text-paper">
              {companyData.motto}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted max-w-sm">
              {companyData.introduction}
            </p>
            <div className="mt-5 text-xs text-paper/80">
              <span className="text-muted block text-[11px] uppercase font-mono">Directors:</span>
              <p className="font-semibold text-paper mt-0.5">
                {companyData.directors.map((d) => d.name).join(' & ')}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer">
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-mono mb-4">
              Quick Navigation
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-xs">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-paper/70 transition-colors duration-150 hover:text-accent hover:underline text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Details */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-mono mb-4">
              Basheer Bagh Headquarters
            </p>
            <div className="space-y-3 text-xs text-paper/85">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  {companyData.contact.address}, Hyderabad - {companyData.contact.pin}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>
                  +91 {companyData.contact.phones[0]} / +91 {companyData.contact.phones[1]}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 text-accent shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:underline">
                  {companyData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <ClockIcon className="h-4 w-4 text-amber-400 shrink-0" />
                <span>{companyData.contact.workingHours} ({companyData.contact.workingDays})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Subfooter */}
        <div className="mt-16 flex flex-col gap-4 border-t border-paper/[0.06] pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {companyData.legalName}. All rights reserved.</p>
          <p className="flex gap-4">
            <span>Smart & Affordable Automation</span>
            <span>·</span>
            <span>Hyderabad, Telangana</span>
          </p>
        </div>
      </div>
    </footer>
  );
}