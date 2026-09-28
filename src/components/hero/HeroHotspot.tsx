import React from 'react';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import type { HeroHotspot as HeroHotspotType } from '../../types/home';

type HeroHotspotProps = {
  hotspot: HeroHotspotType;
  progress: MotionValue<number>;
  reduce: boolean;
};

export function HeroHotspot({ hotspot, progress, reduce }: HeroHotspotProps) {
  const start = reduce ? -1 : hotspot.reveal;
  const opacity = useTransform(progress, [start, start + 0.06], [0, 1]);
  const y = useTransform(progress, [start, start + 0.06], [8, 0]);

  return (
    <motion.div className="absolute" style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%`, opacity }}>
      <span className="absolute flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/50 bg-surface/80 dark:bg-ink/40">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <motion.div
        style={{ y }}
        className="absolute left-3.5 top-3.5 hidden items-center gap-2 whitespace-nowrap rounded-full border border-paper/15 bg-surface/95 dark:bg-ink/65 py-1 pl-2.5 pr-3 text-[11px] shadow-lg backdrop-blur-md md:flex">
        
        <span className="text-muted dark:text-paper/60 font-medium">{hotspot.label}</span>
        <span className="font-semibold tabular-nums text-paper">{hotspot.value}</span>
      </motion.div>
    </motion.div>);

}