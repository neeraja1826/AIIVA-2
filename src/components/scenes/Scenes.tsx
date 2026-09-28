import React, { useState } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { SceneTimeline } from './SceneTimeline';
import { scenes } from '../../data/scenes';

export function Scenes() {
  const [activeId, setActiveId] = useState(scenes[0].id);
  const active = scenes.find((s) => s.id === activeId) ?? scenes[0];

  return (
    <section aria-labelledby="scenes-heading" className="relative overflow-hidden border-t border-paper/[0.05] bg-ink py-28 md:py-40">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgb(var(--color-violet) / 0.1), transparent)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <SectionLabel>Smart Scenes</SectionLabel>
        <h2
          id="scenes-heading"
          className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper"
        >
          Your routine. <span className="text-paper/35">Automated.</span>
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="flex flex-col justify-between">
            <ul className="border-t border-paper/10">
              {scenes.map((scene) => {
                const isActive = scene.id === activeId;
                return (
                  <li key={scene.id} className="border-b border-paper/10">
                    <button
                      type="button"
                      onClick={() => setActiveId(scene.id)}
                      aria-pressed={isActive}
                      className="group relative flex w-full items-center justify-between gap-4 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span
                        className={`absolute left-0 top-1/2 h-8 w-px -translate-y-1/2 bg-accent transition-transform duration-300 ease-out-expo ${
                          isActive ? 'scale-y-100' : 'scale-y-0'
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`font-display text-2xl font-semibold uppercase tracking-[-0.01em] transition-[color,transform] duration-300 ease-out-expo md:text-4xl ${
                          isActive ? 'translate-x-5 text-paper' : 'text-muted/80 hover:text-paper dark:text-paper/30 dark:hover:text-paper/60'
                        }`}
                      >
                        {scene.name}
                      </span>
                      <span className={`text-right text-xs font-medium transition-colors duration-200 ${isActive ? 'text-accent font-semibold' : 'text-muted'}`}>
                        {scene.trigger}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted">
              Scenes combine devices across rooms into a single moment — triggered by time, presence, voice or a single
              tap.
            </p>
          </div>

          <SceneTimeline scene={active} />
        </div>
      </div>
    </section>
  );
}