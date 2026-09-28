import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { HouseIllustration } from './HouseIllustration';
import { IvaCore } from './IvaCore';
import { coreCenter, systems } from '../../data/systems';
import type { HomeSystem, SystemId } from '../../types/home';

export function Ecosystem() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const draw = useTransform(scrollYProgress, reduce ? [-1, -0.5] : [0.4, 0.95], [0, 1]);
  const flowOpacity = useTransform(scrollYProgress, reduce ? [-1, -0.5] : [0.85, 1], [0, 1]);

  const [activeId, setActiveId] = useState<SystemId>('lighting');
  const [paused, setPaused] = useState(reduce);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveId((prev) => {
        const i = systems.findIndex((s) => s.id === prev);
        return systems[(i + 1) % systems.length].id;
      });
    }, 3200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const select = (id: SystemId) => {
    setPaused(true);
    setActiveId(id);
  };

  const active = systems.find((s) => s.id === activeId) ?? systems[0];

  return (
    <section ref={ref} id="solutions" aria-labelledby="ecosystem-heading" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">The AIIVA Solution</SectionLabel>
          <h2
            id="ecosystem-heading"
            className="mt-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper">
            
            One intelligent ecosystem.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Seven systems that used to work alone, now connected to one core that makes them work together.
          </p>
        </div>

        {/* Desktop diagram */}
        <div className="relative mx-auto mt-16 hidden aspect-[5/3] max-w-6xl md:block">
          <svg viewBox="0 0 1000 600" className="absolute inset-0 h-full w-full" aria-hidden>
            {systems.map((s) => {
              const d = pathFor(s);
              return (
                <motion.path key={s.id} d={d} fill="none" stroke="rgb(var(--color-paper) / 0.16)" strokeWidth={1} style={{ pathLength: draw }} />);

            })}
            <motion.g style={{ opacity: flowOpacity }}>
              {systems.map((s) =>
              <path
                key={s.id}
                d={pathFor(s)}
                fill="none"
                stroke="rgb(var(--color-accent))"
                strokeWidth={s.id === activeId ? 2 : 1.2}
                className="flow-line"
                style={{ opacity: s.id === activeId ? 1 : 0.4, transition: 'opacity 300ms ease-out' }} />

              )}
            </motion.g>
          </svg>

          <div className="absolute left-1/2 top-[8%] w-[50%] -translate-x-1/2">
            <HouseIllustration active={activeId} className="h-auto w-full" />
          </div>

          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${coreCenter.x}%`, top: `${coreCenter.y}%` }}>
            
            <IvaCore />
          </div>

          {systems.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                onMouseEnter={() => select(s.id)}
                onFocus={() => select(s.id)}
                onClick={() => select(s.id)}
                aria-pressed={isActive}
                className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border py-2 pl-2 pr-4 text-xs font-medium uppercase tracking-[0.16em] shadow-sm backdrop-blur-md transition-[background-color,border-color,color] duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive ?
                'border-accent/60 bg-accent/15 text-paper font-semibold' :
                'border-paper/15 bg-surface/90 text-paper/75 hover:border-paper/30 hover:text-paper'}`
                }
                style={{ left: `${s.x}%`, top: `${s.y}%` }}>
                
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200 ${
                  isActive ? 'bg-accent text-white dark:text-ink' : 'bg-paper/[0.08] text-paper/80'}`
                  }>
                  
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                </span>
                {s.label}
              </button>);

          })}
        </div>

        {/* Mobile diagram */}
        <div className="mt-12 md:hidden">
          <div className="relative mx-auto max-w-sm">
            <HouseIllustration active={activeId} className="h-auto w-full" />
            <div className="absolute left-1/2 top-[84%] -translate-x-1/2 -translate-y-1/2 scale-75">
              <IvaCore />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-2">
            {systems.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => select(s.id)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2.5 rounded-2xl border px-3 py-3 text-left text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isActive ? 'border-accent/60 bg-accent/15 text-paper font-semibold' : 'border-paper/15 bg-surface text-paper/75'}`
                  }>
                  
                  <Icon className={`h-4 w-4 ${isActive ? 'text-accent' : ''}`} aria-hidden />
                  {s.label}
                </button>);

            })}
          </div>
        </div>

        {/* Readout */}
        <div className="mx-auto mt-10 flex min-h-[96px] max-w-2xl items-start justify-center text-center" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
              
              <p className="font-display text-xl font-medium text-paper md:text-2xl">{active.description}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                e.g. {active.example}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}

function pathFor(s: HomeSystem) {
  const nx = s.x * 10;
  const ny = s.y * 6;
  const cx = coreCenter.x * 10;
  const cy = coreCenter.y * 6;
  if (Math.abs(nx - cx) < 1) return `M ${nx} ${ny} L ${cx} ${cy}`;
  const mx = nx + (cx - nx) * 0.55;
  return `M ${nx} ${ny} C ${mx} ${ny}, ${mx} ${cy}, ${cx} ${cy}`;
}