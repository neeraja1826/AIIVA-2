import React, { useState } from 'react';
import { LockIcon, LockOpenIcon, SunriseIcon, FilmIcon, MoonIcon } from 'lucide-react';
import { images } from '../../data/images';

const quickScenes = [
  { id: 'morning', label: 'Morning', icon: SunriseIcon },
  { id: 'movie', label: 'Movie', icon: FilmIcon },
  { id: 'night', label: 'Night', icon: MoonIcon }
];

export function PhoneSecurity() {
  const [locked, setLocked] = useState(true);
  const [scene, setScene] = useState('night');

  return (
    <div className="w-[260px] rounded-[44px] border border-paper/15 bg-surface/95 p-2.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:border-paper/10 dark:bg-surface/90 dark:shadow-[0_50px_120px_-30px_rgba(0,0,0,0.95)]">
      <div className="flex h-[520px] flex-col overflow-hidden rounded-[36px] bg-raised/70 px-4 pb-5 pt-3">
        <div className="flex items-center justify-between px-2 text-[11px] font-semibold text-paper/80">
          <span className="tabular-nums">21:14</span>
          <span className="h-5 w-20 rounded-full bg-paper/80 dark:bg-black" aria-hidden />
          <span>AIIVA</span>
        </div>

        <p className="mt-5 px-1 text-[11px] uppercase tracking-[0.22em] text-muted font-medium">Entrance</p>
        <p className="px-1 font-display text-xl font-semibold text-paper">Front door</p>

        <div className="relative mt-4 h-44 overflow-hidden rounded-3xl">
          <img src={images.entrance} alt="Live camera view of the front entrance" className="h-full w-full object-cover" />
          <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            LIVE
          </span>
          <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-medium tabular-nums text-white/90 backdrop-blur">
            21:14:08
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl border border-paper/10 bg-paper/[0.04] px-4 py-3">
          <div>
            <p className="text-xs text-muted font-medium">Status</p>
            <p className="text-sm font-semibold text-paper">{locked ? 'Locked' : 'Unlocked'}</p>
          </div>
          <span className={`flex h-9 w-9 items-center justify-center rounded-full ${locked ? 'bg-accent/15 text-accent' : 'bg-paper/10 text-paper'}`}>
            {locked ? <LockIcon className="h-4 w-4" aria-hidden /> : <LockOpenIcon className="h-4 w-4" aria-hidden />}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setLocked((v) => !v)}
          className={`mt-3 h-12 rounded-2xl text-sm font-semibold shadow-sm transition-[background-color,transform] duration-150 active:scale-[0.97] ${
            locked ? 'bg-paper text-ink hover:opacity-90' : 'bg-accent text-white dark:text-ink hover:brightness-110'
          }`}
        >
          {locked ? 'Unlock door' : 'Lock door'}
        </button>

        <p className="mt-auto px-1 text-[11px] uppercase tracking-[0.22em] text-muted font-medium">Scenes</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {quickScenes.map((s) => {
            const Icon = s.icon;
            const active = scene === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setScene(s.id)}
                aria-pressed={active}
                className={`flex flex-col items-center gap-1.5 rounded-2xl border py-3 text-[11px] font-medium transition-colors duration-150 ${
                  active ? 'border-accent/50 bg-accent/15 text-accent font-semibold' : 'border-paper/10 bg-paper/[0.04] text-paper/80 hover:text-paper'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}