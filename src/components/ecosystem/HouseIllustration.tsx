import React from 'react';
import type { SystemId } from '../../types/home';

type HouseIllustrationProps = {
  active: SystemId;
  className?: string;
};

const fade = { transition: 'fill 300ms ease-out, stroke 300ms ease-out, opacity 300ms ease-out' };

export function HouseIllustration({ active, className = '' }: HouseIllustrationProps) {
  const lit = active === 'lighting';
  const glass = (on: boolean) => ({
    fill: on ? 'rgb(var(--color-accent) / 0.28)' : 'rgb(var(--color-accent) / 0.08)',
    stroke: on ? 'rgb(var(--color-accent))' : 'rgb(var(--color-accent) / 0.45)'
  });
  const door = active === 'security' || active === 'access';

  return (
    <svg viewBox="0 0 420 280" className={className} role="img" aria-label="Illustrated modern home connected to IVA Core">
      <line x1="0" y1="250" x2="420" y2="250" stroke="rgb(var(--color-paper) / 0.2)" />

      {/* Tree */}
      <line x1="20" y1="250" x2="20" y2="208" stroke="rgb(var(--color-paper) / 0.35)" />
      <circle cx="20" cy="193" r="16" fill="none" stroke="rgb(var(--color-paper) / 0.2)" />

      {/* Lower volume */}
      <polygon points="40,150 340,150 364,134 64,134" className="fill-raised" stroke="rgb(var(--color-paper) / 0.3)" strokeLinejoin="round" />
      <polygon points="340,150 364,134 364,234 340,250" className="fill-surface" stroke="rgb(var(--color-paper) / 0.3)" strokeLinejoin="round" />
      <rect x="40" y="150" width="300" height="100" className="fill-raised" stroke="rgb(var(--color-paper) / 0.3)" />

      {/* Battery on side */}
      <polygon
        points="347,206 357,199 357,219 347,226"
        style={fade}
        fill={active === 'energy' ? 'rgb(var(--color-accent))' : 'rgb(var(--color-paper) / 0.15)'} />

      {/* Upper volume */}
      <polygon points="150,70 390,70 414,54 174,54" className="fill-raised" stroke="rgb(var(--color-paper) / 0.3)" strokeLinejoin="round" />
      <polygon points="390,70 414,54 414,134 390,150" className="fill-surface" stroke="rgb(var(--color-paper) / 0.3)" strokeLinejoin="round" />
      <rect x="150" y="70" width="240" height="80" className="fill-raised" stroke="rgb(var(--color-paper) / 0.3)" />

      {/* Solar array */}
      <g style={fade} stroke={active === 'energy' ? 'rgb(var(--color-accent))' : 'rgb(var(--color-paper) / 0.2)'} fill="none">
        <polygon points="196,67 372,67 388,57 212,57" />
        {[240, 284, 328].map((x) =>
          <line key={x} x1={x} y1={67} x2={x + 16} y2={57} />
        )}
      </g>

      {/* Upper windows */}
      <rect x="166" y="84" width="100" height="52" style={fade} {...glass(lit)} />
      <rect x="280" y="84" width="96" height="52" style={fade} {...glass(lit)} />
      <line x1="216" y1="84" x2="216" y2="136" stroke="rgb(var(--color-paper) / 0.14)" />
      <line x1="328" y1="84" x2="328" y2="136" stroke="rgb(var(--color-paper) / 0.14)" />

      {/* Curtains */}
      <g style={fade} fill={active === 'curtains' ? 'rgb(var(--color-accent) / 0.45)' : 'rgb(var(--color-paper) / 0.1)'}>
        <rect x="166" y="84" width={active === 'curtains' ? 8 : 16} height="52" style={{ transition: 'width 300ms ease-out, fill 300ms ease-out' }} />
        <rect x={active === 'curtains' ? 368 : 360} y="84" width={active === 'curtains' ? 8 : 16} height="52" style={{ transition: 'x 300ms ease-out, width 300ms ease-out, fill 300ms ease-out' }} />
      </g>

      {/* Living glass + media wall */}
      <rect x="56" y="166" width="130" height="70" style={fade} {...glass(lit || active === 'entertainment')} />
      <line x1="99" y1="166" x2="99" y2="236" stroke="rgb(var(--color-paper) / 0.14)" />
      <line x1="142" y1="166" x2="142" y2="236" stroke="rgb(var(--color-paper) / 0.14)" />
      <rect
        x="108"
        y="192"
        width="26"
        height="16"
        rx="1.5"
        style={fade}
        fill={active === 'entertainment' ? 'rgb(var(--color-accent))' : 'rgb(var(--color-paper) / 0.08)'} />

      {/* Climate airflow */}
      <g style={{ ...fade, opacity: active === 'climate' ? 1 : 0 }} stroke="rgb(var(--color-accent))" fill="none" strokeLinecap="round">
        <path d="M66 180 q 6 -4 12 0 t 12 0" />
        <path d="M66 190 q 6 -4 12 0 t 12 0" />
        <path d="M290 98 q 6 -4 12 0 t 12 0" />
      </g>

      {/* Door */}
      <rect x="200" y="178" width="36" height="72" style={fade} className="fill-surface" stroke={door ? 'rgb(var(--color-accent))' : 'rgb(var(--color-paper) / 0.3)'} />
      <line x1="229" y1="208" x2="229" y2="220" style={fade} stroke={door ? 'rgb(var(--color-accent))' : 'rgb(var(--color-paper) / 0.3)'} strokeLinecap="round" />
      <circle cx="244" cy="172" r="2.5" style={fade} fill={active === 'security' ? 'rgb(var(--color-accent))' : 'rgb(var(--color-paper) / 0.14)'} />
      <rect x="241" y="198" width="5" height="9" rx="1" style={fade} fill={active === 'climate' ? 'rgb(var(--color-accent))' : 'rgb(var(--color-paper) / 0.14)'} />

      {/* Kitchen glass */}
      <rect x="252" y="166" width="76" height="70" style={fade} {...glass(lit)} />
      <line x1="290" y1="166" x2="290" y2="236" stroke="rgb(var(--color-paper) / 0.14)" />
    </svg>
  );
}