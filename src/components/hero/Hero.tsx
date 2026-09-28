import React, { useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform } from
'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { CtaButton } from '../ui/CtaButton';
import { HeroHotspot } from './HeroHotspot';
import { HeroPanel } from './HeroPanel';
import { heroHotspots, heroHub, heroRooms } from '../../data/hero';
import { images } from '../../data/images';
import { scrollToSection } from '../../hooks/useSmoothScroll';

const headlineLines: {text: string;accent?: boolean;}[] = [
  { text: 'Smart Living.' },
  { text: 'Simple' },
  { text: 'Automation.', accent: true }
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.24]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -56]);
  const lineLength = useTransform(scrollYProgress, reduce ? [-1, -0.5] : [0.12, 0.46], [0, 1]);
  const captionOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.8, 0.9], [0, 1, 1, 0]);
  const captionY = useTransform(scrollYProgress, [0.3, 0.4], [24, 0]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -48]);
  const exitFade = useTransform(scrollYProgress, [0.84, 1], [0, 1]);

  const [roomIndex, setRoomIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = v < 0.44 ? 0 : v < 0.64 ? 1 : 2;
    setRoomIndex((prev) => prev === next ? prev : next);
  });

  const hubX = heroHub.x * 1.6;
  const hubY = heroHub.y * 0.9;

  return (
    <section ref={ref} id="home" aria-label="Introduction" className="relative h-[260vh] bg-ink">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Environment layer — kept at 16:9 so overlays stay pinned to the room */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{
            width: 'max(100vw, 177.78vh)',
            height: 'max(100vh, 56.25vw)',
            x: '-50%',
            y: '-50%',
            scale,
            transformOrigin: '72% 46%'
          }}>
          
          <img
            src={images.heroLiving}
            alt="AIIVA Modern living room with cove lighting, sheer curtains, climate panel and media wall"
            className="absolute inset-0 h-full w-full object-cover" />
          

          <svg viewBox="0 0 160 90" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
            {heroHotspots.map((h) => {
              const x = h.x * 1.6;
              const y = h.y * 0.9;
              const cx = (x + hubX) / 2;
              const cy = Math.min(y, hubY) - 10;
              return (
                <motion.path
                  key={h.id}
                  d={`M ${x} ${y} Q ${cx} ${cy} ${hubX} ${hubY}`}
                  fill="none"
                  stroke="rgb(var(--color-accent))"
                  strokeOpacity={0.7}
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength: lineLength }} />);
            })}
          </svg>

          {heroHotspots.map((h) =>
            <HeroHotspot key={h.id} hotspot={h} progress={scrollYProgress} reduce={reduce} />
          )}

          {/* AIIVA hub — the wall panel */}
          <div className="absolute" style={{ left: `${heroHub.x}%`, top: `${heroHub.y}%` }}>
            <span className="absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/60 bg-surface/80 dark:bg-ink/50 shadow-[0_0_24px_rgb(var(--color-accent)/0.45)]">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <div className="absolute right-5 top-5 hidden items-center gap-2 whitespace-nowrap rounded-full border border-accent/30 bg-surface/90 dark:bg-ink/70 py-1 pl-2.5 pr-3 text-[11px] shadow-lg backdrop-blur-md md:flex">
              <span className="font-display font-semibold tracking-[0.16em] text-accent">AIIVA HUB</span>
              <span className="text-paper/80 dark:text-paper/70">Climate 22°C</span>
            </div>
          </div>
        </motion.div>

        {/* Legibility shading */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent dark:from-ink/85 dark:via-ink/30 dark:to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/60 to-transparent dark:from-ink dark:via-ink/50 dark:to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/80 to-transparent dark:from-ink/70 dark:to-transparent" />

        {/* Headline */}
        <div className="absolute inset-x-0 bottom-[9vh] mx-auto max-w-7xl px-6 md:px-12">
          <motion.div style={{ opacity: textOpacity, y: textY }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-surface/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-4 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AIIVA AUTOMATION PVT. LTD. · HYDERABAD
            </div>
            <h1 className="font-display text-[clamp(2.6rem,6.4vw,6.25rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper">
              {headlineLines.map((line, i) =>
                <span key={line.text} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className={`block ${line.accent ? 'text-accent' : ''}`}
                    initial={reduce ? false : { y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}>
                    {line.text}
                  </motion.span>
                </span>
              )}
            </h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="mt-6 max-w-md text-base leading-relaxed text-paper/85 dark:text-paper/70 md:text-lg">
              Smart, reliable and affordable automation solutions for homes, apartments, villas and offices. Making Smart Living Accessible to Everyone.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3">
              <CtaButton size="lg" onClick={() => scrollToSection('products')}>
                Explore Touch Switches
              </CtaButton>
              <CtaButton
                size="lg"
                variant="ghost"
                onClick={() => scrollToSection('contact')}>
                Book Free Consultation
              </CtaButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Mid-scroll caption: rooms light up */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto max-w-7xl -translate-y-1/2 px-6 md:px-12">
          <motion.div style={{ opacity: captionOpacity, y: captionY }}>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Connected rooms</p>
            <ul className="mt-5 space-y-2">
              {heroRooms.map((room, i) =>
              <li
                key={room.id}
                className={`flex items-center gap-4 font-display text-3xl font-medium tracking-tight transition-colors duration-300 md:text-5xl ${
                i === roomIndex ? 'text-paper' : 'text-paper/35 group-hover:text-paper/70'}`
                }>
                
                  <span
                  className={`h-px transition-[width,background-color] duration-300 ease-out-expo ${
                  i === roomIndex ? 'w-10 bg-accent' : 'w-4 bg-paper/30'}`
                  } />
                
                  {room.name}
                </li>
              )}
            </ul>
            <p className="mt-6 text-sm text-paper/80 dark:text-paper/60 font-medium">24 devices online · 3 scenes active</p>
          </motion.div>
        </div>

        {/* IVA interface panel */}
        <motion.div
          style={{ y: panelY }}
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="absolute bottom-[9vh] right-[4vw] hidden lg:block">
          
          <HeroPanel roomIndex={roomIndex} />
        </motion.div>

        <motion.div style={{ opacity: exitFade }} className="pointer-events-none absolute inset-0 bg-ink" />
      </div>
    </section>);

}