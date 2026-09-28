import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import type { RoomControl } from '../../types/home';

type RoomControlRowProps = {
  control: RoomControl;
};

export function RoomControlRow({ control }: RoomControlRowProps) {
  const [level, setLevel] = useState(control.type === 'level' ? control.level : 0);
  const [on, setOn] = useState(control.type === 'toggle' ? control.on : false);
  const [value, setValue] = useState(control.type === 'stepper' ? control.value : 0);

  if (control.type === 'level') {
    return (
      <div className="group rounded-2xl px-4 py-3.5 transition-colors duration-200 hover:bg-paper/[0.05]">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2.5 text-paper/70 transition-colors duration-200 group-hover:text-paper">
            <span className={`h-1.5 w-1.5 rounded-full ${level > 0 ? 'bg-accent' : 'bg-paper/25'}`} aria-hidden />
            {control.label}
          </span>
          <span className="font-medium tabular-nums text-paper">{level}%</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          aria-label={`${control.label} level`}
          className="iva-range-thin mt-2.5"
          style={{ '--val': `${level}%` } as React.CSSProperties} />
        
      </div>);

  }

  if (control.type === 'toggle') {
    return (
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        aria-pressed={on}
        className="group flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-sm transition-colors duration-200 hover:bg-paper/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        
        <span className="text-paper/70 transition-colors duration-200 group-hover:text-paper">{control.label}</span>
        <span
          className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] transition-[color,transform] duration-200 ease-out-expo group-hover:-translate-x-0.5 ${
          on ? 'text-accent' : 'text-paper/50'}`
          }>
          
          <span className={`h-1.5 w-1.5 rounded-full ${on ? 'bg-accent' : 'bg-paper/30'}`} aria-hidden />
          {on ? control.options[0] : control.options[1]}
        </span>
      </button>);

  }

  if (control.type === 'stepper') {
    const step = (d: number) => setValue((v) => Math.min(control.max, Math.max(control.min, v + d)));
    return (
      <div className="group flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors duration-200 hover:bg-paper/[0.05]">
        <span className="text-paper/70 transition-colors duration-200 group-hover:text-paper">{control.label}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label={`Decrease ${control.label}`}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-paper/10 text-paper/70 transition-colors duration-150 hover:border-paper/30 hover:text-paper active:scale-95">
            
            <MinusIcon className="h-3 w-3" />
          </button>
          <span className="w-12 text-center font-medium tabular-nums text-paper">
            {value}
            {control.unit}
          </span>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label={`Increase ${control.label}`}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-paper/10 text-paper/70 transition-colors duration-150 hover:border-paper/30 hover:text-paper active:scale-95">
            
            <PlusIcon className="h-3 w-3" />
          </button>
        </div>
      </div>);

  }

  return (
    <div className="flex items-center justify-between px-4 py-3.5 text-sm">
      <span className="text-paper/70">{control.label}</span>
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-paper">{control.value}</span>
    </div>);

}