import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { CtaButton } from '../ui/CtaButton';
import { ProblemPanel } from './ProblemPanel';
import { problems } from '../../data/problems';
import { scrollToSection } from '../../hooks/useSmoothScroll';

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const distanceMv = useMotionValue(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const d = Math.max(0, track.scrollWidth - window.innerWidth);
      setDistance(d);
      distanceMv.set(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [distanceMv]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform([scrollYProgress, distanceMv], ([v, d]: number[]) => -v * d);

  return (
    <section
      ref={sectionRef}
      id="problem"
      aria-labelledby="problem-heading"
      className="relative bg-ink"
      style={{ height: `calc(100vh + ${distance}px)` }}>
      
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center gap-5 px-6 md:px-12">
          <div className="w-[86vw] shrink-0 pr-6 sm:w-[560px] lg:w-[640px] lg:pr-16">
            <SectionLabel>Smart Living</SectionLabel>
            <h2
              id="problem-heading"
              className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold uppercase leading-[0.98] tracking-[-0.03em] text-paper">
              
              What if your home could understand your routine?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
              Most homes still wait for instructions. These are the small frictions that add up every single day.
            </p>
          </div>

          {problems.map((problem) =>
          <ProblemPanel key={problem.id} problem={problem} />
          )}

          <div className="flex h-[62vh] max-h-[560px] min-h-[420px] w-[78vw] shrink-0 flex-col justify-end rounded-[28px] border border-paper/10 bg-surface p-8 sm:w-[420px]">
            <p className="font-display text-3xl font-medium leading-tight tracking-tight text-paper md:text-4xl">
              One system answers all five.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              AIIVA connects every device in your home so they work together — without you thinking about it.
            </p>
            <CtaButton variant="accent" className="mt-8 w-fit" onClick={() => scrollToSection('solutions')}>
              See the ecosystem
            </CtaButton>
          </div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-10 mx-auto flex max-w-7xl items-center gap-4 px-6 md:px-12">
          <span className="text-xs tabular-nums text-muted">Everyday friction</span>
          <div className="h-px flex-1 bg-paper/10">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-px origin-left bg-accent" />
          </div>
        </div>
      </div>
    </section>);

}