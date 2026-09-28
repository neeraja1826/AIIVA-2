import React, { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MenuIcon, XIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { CtaButton } from './ui/CtaButton';
import { ThemeToggle } from './ui/ThemeToggle';
import { navLinks } from '../data/navigation';
import { companyData } from '../data/company';
import { scrollToSection } from '../hooks/useSmoothScroll';

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => {
    const next = v > 48;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4 pt-3 md:pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex items-center justify-between rounded-full border backdrop-blur-xl transition-[max-width,padding,background-color,border-color,box-shadow] duration-300 ease-out-expo ${
          scrolled
            ? 'max-w-6xl border-paper/15 bg-surface/90 py-1.5 pl-4 pr-2 shadow-xl dark:border-paper/10 dark:bg-ink/90'
            : 'max-w-7xl border-paper/10 bg-surface/60 py-2.5 pl-5 pr-2.5 shadow-sm dark:border-transparent dark:bg-ink/40'
        }`}
      >
        {/* Brand Logo & Name */}
        <button
          type="button"
          onClick={() => go('home')}
          aria-label="AIIVA Automation — back to top"
          className="flex items-center gap-2.5 group text-left transition-opacity hover:opacity-95"
        >
          <img
            src="/images/aiiva-icon.png"
            alt="AIIVA Emblem"
            className="h-8 w-8 md:h-9 md:w-9 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-base md:text-lg font-bold tracking-[0.14em] text-paper group-hover:text-accent transition-colors leading-none">
              AIIVA
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-semibold mt-0.5">
              AUTOMATION
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-paper/75 transition-colors duration-150 hover:text-paper hover:bg-paper/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/91${companyData.contact.whatsapp}?text=Hi%20AIIVA%20Automation,%20I%20would%20like%20to%20know%20more%20about%20your%20smart%20solutions`}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
          >
            <MessageCircleIcon className="h-3.5 w-3.5" />
            <span>WA: 9000006000</span>
          </a>

          <ThemeToggle />

          <CtaButton onClick={() => go('contact')} className="hidden md:inline-flex text-xs">
            Free Consultation
          </CtaButton>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/10 text-paper xl:hidden"
          >
            {open ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mt-2 max-w-6xl origin-top rounded-3xl border border-paper/15 bg-ink/95 p-4 backdrop-blur-2xl xl:hidden shadow-2xl"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-paper/10">
              <img
                src="/images/aiiva-icon.png"
                alt="AIIVA Logo"
                className="h-8 w-8 object-contain"
              />
              <div>
                <p className="font-display font-bold text-paper text-sm leading-tight">AIIVA AUTOMATION</p>
                <p className="text-[10px] text-accent font-semibold uppercase tracking-wider">{companyData.tagline}</p>
              </div>
            </div>

            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    className="w-full rounded-2xl px-4 py-2.5 text-left font-display text-base text-paper/85 hover:bg-paper/5 hover:text-paper"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col gap-2 border-t border-paper/10 pt-3">
              <div className="flex items-center justify-between rounded-2xl border border-paper/10 bg-paper/[0.04] px-4 py-2">
                <span className="text-xs font-medium text-paper">Theme</span>
                <ThemeToggle />
              </div>

              <a
                href={`https://wa.me/91${companyData.contact.whatsapp}?text=Hi%20AIIVA%20Automation`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-3 text-xs font-bold text-white shadow-md"
              >
                <MessageCircleIcon className="h-4 w-4" /> WhatsApp Us: 9000006000
              </a>

              <CtaButton onClick={() => go('contact')} size="lg" className="w-full">
                Book Free Consultation
              </CtaButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}