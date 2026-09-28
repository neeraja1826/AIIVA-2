import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { heroRooms } from '../../data/hero';

type HeroPanelProps = {
  roomIndex: number;
};

const planRooms = [
  { x: 2, y: 2, w: 70, h: 56 },
  { x: 76, y: 2, w: 42, h: 26 },
  { x: 76, y: 32, w: 42, h: 26 }
];

export function HeroPanel({ roomIndex }: HeroPanelProps) {
  const room = heroRooms[roomIndex];

  return (
    <div className="w-[300px] rounded-[28px] border border-paper/15 bg-surface/95 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)] backdrop-blur-2xl dark:border-paper/10 dark:bg-ink/60 dark:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between">
        <span className="font-display text-[11px] font-semibold tracking-[0.26em] text-paper">AIIVA HOME</span>
        <span className="flex items-center gap-1.5 text-[11px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          Online
        </span>
      </div>

      <svg viewBox="0 0 120 60" className="mt-4 h-auto w-full" aria-hidden>
        {planRooms.map((r, i) => (
          <rect
            key={i}
            x={r.x}
            y={r.y}
            width={r.w}
            height={r.h}
            rx={4}
            style={{ transition: 'fill 250ms ease-out, stroke 250ms ease-out' }}
            fill={i === roomIndex ? 'rgb(var(--color-accent) / 0.15)' : 'rgb(var(--color-paper) / 0.05)'}
            stroke={i === roomIndex ? 'rgb(var(--color-accent))' : 'rgb(var(--color-paper) / 0.2)'}
            strokeWidth={0.7}
          />
        ))}
      </svg>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={room.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="text-sm text-muted">{room.name}</p>
              <p className="mt-1 font-display text-5xl font-light tabular-nums tracking-tight text-paper">
                {room.temp}°C
              </p>
            </div>
            <p className="pb-1.5 text-[11px] text-muted">Comfort mode</p>
          </div>

          <dl className="mt-5 space-y-3.5 border-t border-paper/10 pt-4 text-sm">
            <div>
              <div className="flex items-center justify-between">
                <dt className="text-paper/75">Lights</dt>
                <dd className="font-medium tabular-nums text-paper">{room.lights}%</dd>
              </div>
              <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-paper/10">
                <div className="h-full rounded-full bg-accent" style={{ width: `${room.lights}%` }} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-paper/75">Curtains</dt>
              <dd className="text-xs font-medium uppercase tracking-[0.14em] text-paper">{room.curtains}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-paper/75">Security</dt>
              <dd className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {room.security}
              </dd>
            </div>
          </dl>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}