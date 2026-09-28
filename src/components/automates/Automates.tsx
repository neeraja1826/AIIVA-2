import React from 'react';
import { AutomationModule } from './AutomationModule';
import { automations } from '../../data/automations';

export function Automates() {
  return (
    <section aria-labelledby="automates-heading" className="bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            id="automates-heading"
            className="font-display text-[clamp(2.5rem,5.5vw,5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper">
            
            What AIIVA
            <br />
            automates.
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-muted">
            Six systems, designed and installed as one — each quietly doing its job so you don't have to.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[280px]">
          {automations.map((module) =>
          <AutomationModule key={module.id} module={module} />
          )}
        </div>
      </div>
    </section>);

}