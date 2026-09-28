import React from 'react';

type EnergyRingProps = {
  value: number;
};

export function EnergyRing({ value }: EnergyRingProps) {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-24 w-24">
      <svg viewBox="0 0 84 84" className="h-full w-full -rotate-90" aria-hidden>
        <circle cx="42" cy="42" r={r} fill="none" stroke="rgb(var(--color-paper) / 0.1)" strokeWidth="6" />
        <circle
          cx="42"
          cy="42"
          r={r}
          fill="none"
          stroke="rgb(var(--color-accent))"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-xl font-medium tabular-nums text-paper">{value}%</span>
        <span className="text-[10px] text-muted">solar</span>
      </div>
    </div>
  );
}