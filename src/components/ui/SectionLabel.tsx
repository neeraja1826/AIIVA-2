import React from 'react';

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p className={`inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-muted ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </p>);

}