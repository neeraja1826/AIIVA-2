import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { CtaButton } from '../ui/CtaButton';
import { companyData } from '../../data/company';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MessageCircleIcon,
  SendIcon,
  CheckCircle2Icon,
  CalendarIcon,
  HomeIcon,
  BuildingIcon,
  ZapIcon
} from 'lucide-react';

export function ContactSection() {
  const [propertyType, setPropertyType] = useState('Villa / Independent House');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Smart Glass Switches',
    'Lighting & Curtains'
  ]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Hyderabad');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello AIIVA Automation Team,\n\n*Name:* ${name || 'Prospective Client'}\n*Phone:* ${phone || 'Not specified'}\n*Location:* ${location}\n*Property Type:* ${propertyType}\n*Requirements:* ${selectedServices.join(', ')}\n*Notes:* ${notes || 'Looking for site visit / quotation'}\n\nPlease share details and consultation slots.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919000006000?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative bg-ink py-28 md:py-40 border-t border-paper/[0.06]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Get In Touch</SectionLabel>
            <h2
              id="contact-heading"
              className="mt-6 font-display text-[clamp(2.5rem,5.5vw,5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper"
            >
              Contact
              <br />
              AIIVA Automation.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Ready to upgrade to smart living? Visit our Hyderabad experience office or schedule a complimentary site assessment.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Office Address Card */}
            <div className="rounded-3xl border border-paper/15 bg-surface/80 p-6 md:p-8 backdrop-blur-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent border border-accent/30">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent font-mono">
                    Registered & Corporate Office
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-paper">
                    {companyData.legalName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/85">
                    {companyData.contact.address}
                  </p>
                  <p className="text-xs text-muted mt-1">
                    Basheer Bagh, Hyderabad, Telangana — 500063
                  </p>
                </div>
              </div>

              {/* Map embed placeholder style container */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-paper/10 bg-neutral-900/80 p-4 text-center">
                <p className="text-xs text-paper/80 font-medium">
                  📍 Located in the heart of Hyderabad at Palace Colony, Basheer Bagh
                </p>
                <a
                  href="https://maps.google.com/?q=The+Legend+Basheer+Bagh+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Direct Lines & WhatsApp */}
            <div className="rounded-3xl border border-paper/15 bg-surface/80 p-6 md:p-8 backdrop-blur-xl shadow-lg flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted font-mono">
                    Call Direct
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                    <a
                      href={`tel:${companyData.contact.phones[0]}`}
                      className="font-display text-sm md:text-base font-bold text-paper hover:text-accent transition-colors"
                    >
                      +91 {companyData.contact.phones[0]}
                    </a>
                    <span className="text-muted">/</span>
                    <a
                      href={`tel:${companyData.contact.phones[1]}`}
                      className="font-display text-sm md:text-base font-bold text-paper hover:text-accent transition-colors"
                    >
                      +91 {companyData.contact.phones[1]}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-paper/10 pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <MessageCircleIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted font-mono">
                    WhatsApp Chat
                  </span>
                  <div>
                    <a
                      href={`https://wa.me/91${companyData.contact.whatsapp}?text=Hi%20AIIVA%20Automation,%20I%20would%20like%20to%20know%20more%20about%20your%20smart%20solutions`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm md:text-base font-bold text-emerald-400 hover:underline inline-flex items-center gap-1.5"
                    >
                      +91 {companyData.contact.whatsapp} <span className="text-xs text-muted font-normal">(Instant Chat)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-paper/10 pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent border border-accent/30">
                  <MailIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted font-mono">
                    Official Email
                  </span>
                  <div>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="font-display text-sm font-bold text-paper hover:text-accent transition-colors break-all"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-paper/10 pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  <ClockIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted font-mono">
                    Working Hours
                  </span>
                  <div className="text-sm font-semibold text-paper">
                    {companyData.contact.workingHours}
                  </div>
                  <span className="text-xs text-muted">
                    {companyData.contact.workingDays}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Consultation & Estimation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-paper/15 bg-surface/90 p-8 md:p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-paper/10 pb-6 mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Complimentary Consultation
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-paper">
                    Request an Automation Proposal
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent border border-accent/20">
                  <ZapIcon className="h-3.5 w-3.5" /> Fast Response
                </div>
              </div>

              <form onSubmit={handleWhatsAppInquiry} className="space-y-6">
                {/* Property Type Selection */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-paper/80 block mb-2.5">
                    1. Select Property Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'Villa / Bungalow',
                      'Apartment / Flat',
                      'Commercial / Office',
                      'Retrofit (No rewiring)'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPropertyType(type)}
                        className={`rounded-2xl p-3 text-left text-xs font-medium transition-all ${
                          propertyType === type
                            ? 'bg-accent text-white dark:text-ink font-semibold shadow-md ring-2 ring-accent/30'
                            : 'border border-paper/10 bg-ink/40 text-paper/70 hover:border-paper/20 hover:text-paper'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Automation Requirements */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-paper/80 block mb-2.5">
                    2. Select Systems Needed
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Smart Glass Switches',
                      'Lighting & Curtains',
                      'Fan Regulators',
                      'Security & Access',
                      'Climate Management',
                      'Full Home Suite'
                    ].map((svc) => {
                      const isSel = selectedServices.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`rounded-xl px-3 py-2 text-xs font-medium text-left flex items-center justify-between border transition-all ${
                            isSel
                              ? 'border-accent/60 bg-accent/15 text-paper font-semibold'
                              : 'border-paper/10 bg-ink/30 text-paper/60 hover:text-paper'
                          }`}
                        >
                          <span>{svc}</span>
                          {isSel && <CheckCircle2Icon className="h-3.5 w-3.5 text-accent shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name, Phone, Location inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Donepudi..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-2xl border border-paper/15 bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="9000006000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-2xl border border-paper/15 bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-muted block mb-1.5">
                      City / Locality
                    </label>
                    <input
                      type="text"
                      placeholder="Hyderabad / Basheer Bagh"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full rounded-2xl border border-paper/15 bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted block mb-1.5">
                    Additional Project Details / Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 4BHK Villa under construction, need quote for 24 glass switchboards..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-2xl border border-paper/15 bg-ink/60 px-4 py-3 text-sm text-paper placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Submit button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-paper/10 pt-6">
                  <div className="text-xs text-muted">
                    Instant connect to AIIVA Directors & Technical Desk via WhatsApp
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 transition-all active:scale-95"
                  >
                    <MessageCircleIcon className="h-4 w-4" /> Send Request on WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
