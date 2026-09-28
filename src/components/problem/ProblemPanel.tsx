import React from 'react';
import type { Problem } from '../../types/home';

type ProblemPanelProps = {
  problem: Problem;
};

export function ProblemPanel({ problem }: ProblemPanelProps) {
  return (
    <article className="relative flex h-[62vh] max-h-[560px] min-h-[420px] w-[78vw] shrink-0 flex-col overflow-hidden rounded-[28px] border border-paper/10 bg-raised shadow-lg sm:w-[420px]">
      <img src={problem.image} alt={problem.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />

      <div className="relative flex h-full flex-col p-7">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {problem.stat}
        </span>

        <div className="mt-auto">
          <h3 className="font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-[2.1rem]">
            {problem.title}
          </h3>
          <div className="mt-6 border-t border-white/20 pt-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">With AIIVA</p>
            <p className="mt-2 text-sm leading-relaxed text-white/85">{problem.fix}</p>
          </div>
        </div>
      </div>
    </article>);

}