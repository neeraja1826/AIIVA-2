import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { CtaButton } from '../ui/CtaButton';
import { companyData } from '../../data/company';
import { scrollToSection } from '../../hooks/useSmoothScroll';
import {
  Building2Icon,
  ShieldCheckIcon,
  UsersIcon,
  CheckCircle2Icon,
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  AwardIcon,
  SparklesIcon,
  ZapIcon
} from 'lucide-react';

export function AboutCompany() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative bg-ink py-28 md:py-40 border-t border-paper/[0.06]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <SectionLabel>About AIIVA Automation</SectionLabel>
            <h2
              id="about-heading"
              className="mt-6 font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper"
            >
              Smart Living.
              <br />
              <span className="text-accent">Simple Automation.</span>
              <br />
              Affordable Technology.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8 flex flex-col gap-4">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-surface/90 border border-paper/10 shadow-sm w-fit backdrop-blur-md">
              <img
                src="/images/aiiva-icon.png"
                alt="AIIVA Logo"
                className="h-10 w-10 object-contain"
              />
              <div>
                <div className="font-display text-base font-bold text-paper tracking-wider leading-none">
                  AIIVA AUTOMATION
                </div>
                <div className="text-[10px] text-accent font-semibold tracking-widest uppercase mt-1">
                  PRIVATE LIMITED
                </div>
              </div>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-paper/85 font-medium">
              {companyData.introduction}
            </p>
            <p className="text-sm leading-relaxed text-muted">
              {companyData.detailedProfile}
            </p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent w-fit">
              <SparklesIcon className="h-4 w-4" />
              {companyData.tagline}
            </div>
          </div>
        </div>

        {/* Company Core Value Proposition */}
        <div className="mt-16 rounded-3xl border border-paper/15 bg-surface/70 p-8 md:p-12 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <AwardIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-paper">Quality Products</h3>
              <p className="text-xs text-muted leading-relaxed">
                Toughened glass touch switches, silent micro-controllers, and industrial-grade relays built for long life.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <UsersIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-paper">Professional Installation</h3>
              <p className="text-xs text-muted leading-relaxed">
                Certified Hyderabad automation engineers ensuring zero mess, clean calibration, and 1-day turnaround.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <ZapIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-paper">Seamless Integration</h3>
              <p className="text-xs text-muted leading-relaxed">
                Works harmoniously with Alexa, Google Home, Siri shortcuts, mobile apps, and direct feather-touch plates.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <ShieldCheckIcon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-paper">Value for Money</h3>
              <p className="text-xs text-muted leading-relaxed">
                Premium luxury smart living made accessible and pocket-friendly without recurring subscriptions.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership & Directors */}
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Executive Leadership
              </span>
              <h3 className="mt-2 font-display text-3xl font-semibold text-paper">
                Board of Directors
              </h3>
            </div>
            <p className="text-xs text-muted max-w-sm">
              Dedicated founders driving innovation, client success, and state-of-the-art building automation in Telangana & beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.directors.map((director, index) => (
              <motion.div
                key={director.name}
                whileHover={{ y: -4 }}
                className="relative rounded-3xl border border-paper/15 bg-gradient-to-br from-surface to-surface/60 p-8 shadow-lg overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 border border-accent/40 font-display text-xl font-bold text-accent">
                    {director.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-paper tracking-wide">
                      {director.name}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-0.5">
                      {director.designation} — AIIVA Automation Pvt. Ltd.
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-paper/10 pt-4">
                  <span className="text-[11px] font-mono text-muted uppercase tracking-wider">
                    Areas of Responsibility
                  </span>
                  <p className="mt-1 text-sm font-medium text-paper/80">
                    {director.profile}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services & Capabilities Matrix */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Core Capabilities
            </span>
            <h3 className="mt-2 font-display text-3xl font-semibold text-paper">
              Automation Solutions Portfolio
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyData.services.map((svc) => (
              <div
                key={svc.title}
                className="flex flex-col justify-between rounded-3xl border border-paper/10 bg-surface/50 p-6 hover:border-paper/25 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-paper/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-paper/80">
                      {svc.badge}
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-paper mb-2">
                    {svc.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted">
                    {svc.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-paper/5 pt-4">
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="text-xs font-semibold text-accent hover:underline"
                  >
                    Inquire for this solution →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Slogan Banner */}
        <div className="mt-16 rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/15 via-surface to-accent/10 p-8 md:p-10 text-center">
          <p className="font-display text-xl md:text-2xl font-bold text-paper tracking-tight">
            "{companyData.slogan}"
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton onClick={() => scrollToSection('contact')}>
              Connect with Hyderabad Office
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
