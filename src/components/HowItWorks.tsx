import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { SectionLabel } from './ui/SectionLabel';
import { processSteps } from '../data/process';

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const [progress, setProgress] = useState(reduce ? 1 : 0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (!reduce) setProgress(v);
  });

  const lineScale = reduce ? 1 : scrollYProgress;
  const n = processSteps.length;

  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="border-t border-paper/[0.05] bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl">
          <SectionLabel>How It Works</SectionLabel>
          <h2
            id="how-heading"
            className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-paper md:text-6xl">
            
            From first conversation to intelligent living.
          </h2>
        </div>

        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* Horizontal line (desktop) */}
          <div className="absolute left-0 right-0 top-[5px] hidden h-px bg-paper/10 md:block" aria-hidden>
            <motion.div style={{ scaleX: lineScale }} className="h-px origin-left bg-accent" />
          </div>
          {/* Vertical line (mobile) */}
          <div className="absolute bottom-0 left-[5px] top-0 w-px bg-paper/10 md:hidden" aria-hidden>
            <motion.div style={{ scaleY: lineScale }} className="h-full w-px origin-top bg-accent" />
          </div>

          <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
            {processSteps.map((step, i) => {
              const reached = progress >= i / n;
              return (
                <li key={step.number} className="relative pl-10 md:pl-0">
                  <span
                    className={`absolute left-0 top-0 h-[11px] w-[11px] rounded-full border transition-colors duration-300 ${
                    reached ? 'border-accent bg-accent' : 'border-paper/25 bg-ink'}`
                    }
                    aria-hidden />
                  
                  <div className="md:pt-12">
                    <p
                      className={`font-display text-sm tabular-nums transition-colors duration-300 ${
                      reached ? 'text-accent' : 'text-muted'}`
                      }>
                      
                      {step.number}
                    </p>
                    <h3
                      className={`mt-3 font-display text-3xl font-semibold uppercase tracking-[-0.02em] transition-colors duration-300 lg:text-4xl ${
                      reached ? 'text-paper' : 'text-paper/35'}`
                      }>
                      
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-paper/70">{step.description}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">{step.meta}</p>
                  </div>
                </li>);

            })}
          </ol>
        </div>
      </div>
    </section>);

}