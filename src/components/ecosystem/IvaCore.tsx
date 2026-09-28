import React from 'react';

export function IvaCore() {
  return (
    <div className="relative flex h-[112px] w-[112px] items-center justify-center rounded-full border border-accent/40 bg-surface shadow-[0_0_90px_10px_rgba(76,201,255,0.16),0_0_40px_rgba(124,140,255,0.12)]">
      <div className="absolute inset-2 rounded-full border border-paper/10" aria-hidden />
      <div className="absolute inset-5 rounded-full bg-accent/[0.07]" aria-hidden />
      <div className="relative text-center">
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-paper">AIIVA</p>
        <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-accent">Core</p>
      </div>
    </div>);

}