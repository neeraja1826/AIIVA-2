import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { CtaButton } from './ui/CtaButton';
import { images } from '../data/images';
import { companyData } from '../data/company';
import { scrollToSection } from '../hooks/useSmoothScroll';
import { MessageCircleIcon, PhoneIcon } from 'lucide-react';

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-6%', '6%']);

  return (
    <section
      ref={ref}
      id="vision"
      aria-labelledby="cta-heading"
      className="relative flex h-screen min-h-[720px] items-end overflow-hidden bg-ink"
    >
      <motion.img
        src={images.ctaVilla}
        alt="AIIVA Automation Modern luxury glass villa glowing softly at night"
        style={{ y, scale: 1.14 }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40 dark:from-ink dark:via-ink/50 dark:to-ink/80" />

      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-[5vw] top-[8vh] h-[70vh] w-[90vw] rounded-full"
            style={{ background: 'radial-gradient(closest-side, rgb(var(--color-accent) / 0.15), transparent)' }}
            animate={{ x: ['-8%', '8%'], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />

          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-[20vw] top-[20vh] h-[50vh] w-[60vw] rounded-full"
            style={{ background: 'radial-gradient(closest-side, rgb(var(--color-violet) / 0.12), transparent)' }}
            animate={{ x: ['6%', '-6%'] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-20 text-center md:pb-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6 backdrop-blur-md">
          {companyData.legalName}
        </div>
        <h2
          id="cta-heading"
          className="font-display text-[clamp(2.5rem,7vw,6.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper"
        >
          Making smart living
          <br />
          accessible to everyone.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/85 dark:text-paper/70 md:text-lg">
          Smart Living. Simple Automation. Affordable Technology. Quality products, certified installation and seamless integration for your property.
        </p>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <CtaButton
            size="lg"
            href={`https://wa.me/91${companyData.contact.whatsapp}?text=Hi%20AIIVA%20Automation,%20I%20would%20like%20to%20design%20my%20smart%20home`}
            icon={<MessageCircleIcon className="h-4 w-4" />}
          >
            WhatsApp Instant Quote
          </CtaButton>
          <CtaButton
            size="lg"
            variant="ghost"
            onClick={() => scrollToSection('contact')}
          >
            Visit Basheer Bagh Office
          </CtaButton>
        </div>
        <p className="mt-4 text-xs text-muted font-medium">
          Office: #504, The Legend, Palace Colony, Basheer Bagh, Hyderabad · Direct: 9000006000 & 9704300006
        </p>
      </div>
    </section>
  );
}