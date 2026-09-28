import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { BenefitRow } from './BenefitRow';
import { benefits } from '../../data/benefits';

export function Benefits() {
  return (
    <section id="benefits" aria-labelledby="benefits-heading" className="bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Why AIIVA</SectionLabel>
            <h2 id="benefits-heading" className="mt-6 max-w-xl font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-paper md:text-4xl">
              Five things you'll feel from the very first day.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted">
            AIIVA Automation designs and installs connected homes that feel effortless — built around the people who live
            in them.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1440px] flex-col gap-3 px-3 md:px-6">
        {benefits.map((benefit, i) =>
          <BenefitRow key={benefit.word} benefit={benefit} index={i} />
        )}
      </div>
    </section>
  );
}