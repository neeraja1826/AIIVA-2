import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { TabletDashboard } from './TabletDashboard';
import { PhoneSecurity } from './PhoneSecurity';

export function ControlCenter() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section id="technology" aria-labelledby="control-heading" className="relative overflow-hidden bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <SectionLabel>AIIVA Control Center</SectionLabel>
            <h2
              id="control-heading"
              className="mt-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper">
              
              Everything.
              <br />
              Under control.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted md:justify-self-end">
            One app for every room, scene and device — on your phone, tablet or wall panel. Try it: every control below
            works.
          </p>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: 'radial-gradient(closest-side, rgb(var(--color-accent) / 0.12), rgb(var(--color-violet) / 0.05), transparent)' }}
            aria-hidden />
          
          <div className="relative flex flex-col items-center lg:block">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="w-full max-w-[920px] lg:mr-[180px]">
              
              <TabletDashboard />
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
              className="mt-10 lg:absolute lg:-bottom-12 lg:right-0 lg:mt-0">
              
              <PhoneSecurity />
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}