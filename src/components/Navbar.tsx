import React, { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { MenuIcon, XIcon, MessageCircleIcon } from 'lucide-react';
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
    <header className="fixed inset-x-0 top-0 z-50 px-2 sm:px-4 md:px-6 pt-2.5 md:pt-3.5 pointer-events-none">
      <nav
        aria-label="Primary"
        className={`pointer-events-auto mx-auto flex items-center justify-between rounded-full border backdrop-blur-xl transition-[max-width,padding,background-color,border-color,box-shadow] duration-300 ease-out-expo ${
          scrolled
            ? 'max-w-[1400px] border-paper/15 bg-surface/90 py-1.5 pl-3.5 pr-2 shadow-xl dark:border-paper/10 dark:bg-ink/90'
            : 'max-w-[1440px] border-paper/10 bg-surface/75 py-2 pl-4 pr-2.5 shadow-sm dark:border-paper/[0.08] dark:bg-ink/60'
        }`}
      >
        {/* Brand Logo & Title */}
        <button
          type="button"
          onClick={() => go('home')}
          aria-label="AIIVA Automation — back to top"
          className="flex items-center gap-2.5 shrink-0 group text-left mr-2 lg:mr-4 transition-transform active:scale-95"
        >
          <img
            src="/images/aiiva-icon.png"
            alt="AIIVA Logo"
            className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-sm sm:text-base font-bold tracking-[0.12em] text-paper group-hover:text-accent transition-colors leading-none">
              AIIVA
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.2em] text-accent font-semibold mt-0.5 leading-none">
              AUTOMATION
            </span>
          </div>
        </button>

        {/* Freely Laid Out Nav Links (All 8 Included with No Wrapping) */}
        <div className="hidden lg:flex items-center flex-1 justify-center px-1">
          <ul className="flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2 text-[12px] xl:text-[13px] font-medium text-paper/80">
            {navLinks.map((link) => (
              <li key={link.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => go(link.id)}
                  className="whitespace-nowrap rounded-full px-2.5 py-1.5 xl:px-3 text-paper/75 transition-all duration-150 hover:text-paper hover:bg-paper/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
          {/* Direct WhatsApp Quick Chat */}
          <a
            href={`https://wa.me/91${companyData.contact.whatsapp}?text=Hi%20AIIVA%20Automation`}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp: 9000006000"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all whitespace-nowrap"
          >
            <MessageCircleIcon className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden xl:inline text-[11.5px]">WA: {companyData.contact.whatsapp}</span>
          </a>

          <ThemeToggle />

          <CtaButton
            onClick={() => go('contact')}
            className="hidden md:inline-flex text-xs px-3.5 py-1.5 xl:px-5 xl:py-2 whitespace-nowrap"
          >
            Free Consultation
          </CtaButton>

          {/* Mobile / Tablet Menu Trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/10 text-paper lg:hidden"
          >
            {open ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="pointer-events-auto mx-auto mt-2 max-w-xl origin-top rounded-3xl border border-paper/15 bg-ink/95 p-4 backdrop-blur-2xl lg:hidden shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-paper/10">
              <div className="flex items-center gap-2.5">
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
              <ThemeToggle />
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
              <a
                href={`https://wa.me/91${companyData.contact.whatsapp}?text=Hi%20AIIVA%20Automation`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-3 text-xs font-bold text-white shadow-md"
              >
                <MessageCircleIcon className="h-4 w-4" /> WhatsApp: {companyData.contact.whatsapp}
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