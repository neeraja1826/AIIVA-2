import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { scrollToSection } from '../../hooks/useSmoothScroll';
import type { Automation } from '../../types/home';

type AutomationModuleProps = {
  module: Automation;
};

const titleSizes = {
  lg: 'text-3xl md:text-5xl',
  md: 'text-2xl md:text-3xl',
  sm: 'text-2xl'
};

export function AutomationModule({ module }: AutomationModuleProps) {
  return (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('contact');
      }}
      aria-label={`${module.title} — ${module.tagline}`}
      className={`group relative isolate flex flex-col overflow-hidden rounded-[28px] border border-paper/10 bg-raised shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${module.layout}`}>
      
      <img
        src={module.image}
        alt={module.imageAlt}
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.06]" />
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

      <div className="flex items-start justify-between p-6 md:p-7">
        <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
          {module.metric}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-[background-color,color,border-color] duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden />
        </span>
      </div>

      <div className="mt-auto p-6 md:p-8">
        <span className="block h-px w-8 bg-accent transition-[width] duration-300 ease-out-expo group-hover:w-20" aria-hidden />
        <h3
          className={`mt-4 font-display font-semibold uppercase tracking-[-0.02em] text-white transition-transform duration-300 ease-out-expo group-hover:translate-x-1.5 ${titleSizes[module.size]}`}>
          
          {module.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">{module.tagline}</p>
        <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-out-expo group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100">
          <div className="overflow-hidden">
            <ul className="flex flex-wrap gap-2 pt-4">
              {module.details.map((detail) =>
              <li
                key={detail}
                className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                
                  {detail}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </a>);

}