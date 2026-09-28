import React from 'react';
import {
  HomeIcon,
  LayoutGridIcon,
  SparklesIcon,
  ZapIcon,
  SettingsIcon,
  LightbulbIcon,
  ThermometerIcon,
  ShieldCheckIcon,
  BlindsIcon,
  MinusIcon,
  PlusIcon
} from 'lucide-react';
import { Toggle } from '../ui/Toggle';
import { DashboardTile } from './DashboardTile';
import { EnergyRing } from './EnergyRing';
import { useDashboard } from '../../hooks/useDashboard';

const sidebarItems = [
  { label: 'Home', icon: HomeIcon },
  { label: 'Rooms', icon: LayoutGridIcon },
  { label: 'Scenes', icon: SparklesIcon },
  { label: 'Energy', icon: ZapIcon },
  { label: 'Settings', icon: SettingsIcon }
];

const presets = [
  { label: 'Relax', value: 35 },
  { label: 'Read', value: 70 },
  { label: 'Bright', value: 100 }
];

export function TabletDashboard() {
  const d = useDashboard();

  return (
    <div className="rounded-[44px] border border-paper/15 bg-surface/95 p-2.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:border-paper/10 dark:bg-surface/90 dark:shadow-[0_60px_160px_-40px_rgba(0,0,0,0.95)]">
      <div className="flex overflow-hidden rounded-[36px] bg-raised/70">
        <aside className="hidden w-[76px] shrink-0 flex-col items-center gap-2 border-r border-paper/10 py-7 sm:flex">
          <span className="mb-5 font-display text-xs font-semibold tracking-[0.2em] text-paper">AIIVA</span>
          {sidebarItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                aria-current={i === 0 ? 'page' : undefined}
                className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-colors duration-150 ${
                  i === 0 ? 'bg-paper/10 text-paper shadow-sm' : 'text-muted hover:text-paper'
                }`}
              >
                <Icon className="h-[18px] w-[18px]" />
              </button>
            );
          })}
        </aside>

        <div className="min-w-0 flex-1 p-5 sm:p-7">
          <header className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">Home</p>
              <p className="mt-1.5 font-display text-xl font-medium text-paper sm:text-2xl">Good evening, Sara</p>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl font-light tabular-nums text-paper sm:text-4xl">22°C</p>
              <p className="text-xs text-muted">Inside · 17° outside</p>
            </div>
          </header>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* Lighting */}
            <DashboardTile highlighted={d.lightsOn} className="sm:col-span-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-colors duration-200 ${
                      d.lightsOn ? 'bg-accent text-white dark:text-ink' : 'bg-paper/[0.06] text-muted'
                    }`}
                  >
                    <LightbulbIcon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs text-muted">Living Room</p>
                    <p className="text-sm font-medium text-paper">Lighting</p>
                  </div>
                </div>
                <Toggle checked={d.lightsOn} onChange={d.setLightsOn} label="Living room lighting" />
              </div>
              <p
                className={`mt-5 font-display text-5xl font-light tabular-nums tracking-tight transition-colors duration-200 ${
                  d.lightsOn ? 'text-paper' : 'text-paper/30'
                }`}
              >
                {d.lightsOn ? d.lightLevel : 0}%
              </p>
              <input
                type="range"
                min={1}
                max={100}
                value={d.lightLevel}
                disabled={!d.lightsOn}
                onChange={(e) => d.setLightLevel(Number(e.target.value))}
                aria-label="Living room brightness"
                className="iva-range mt-4"
                style={{ '--val': `${d.lightLevel}%` } as React.CSSProperties}
              />
              <div className="mt-4 flex gap-2">
                {presets.map((p) => {
                  const selected = d.lightsOn && d.lightLevel === p.value;
                  return (
                    <button
                      key={p.label}
                      type="button"
                      disabled={!d.lightsOn}
                      onClick={() => d.setLightLevel(p.value)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 disabled:opacity-40 ${
                        selected ? 'bg-paper text-ink shadow-sm' : 'border border-paper/10 bg-paper/[0.04] text-paper/80 hover:bg-paper/10 hover:text-paper'
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </DashboardTile>

            {/* Climate */}
            <DashboardTile>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-paper/[0.06] text-accent">
                  <ThermometerIcon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <div>
                  <p className="text-xs text-muted">Bedroom</p>
                  <p className="text-sm font-medium text-paper">Climate</p>
                </div>
              </div>
              <p className="mt-5 font-display text-5xl font-light tabular-nums tracking-tight text-paper">
                {d.bedroomTemp}°C
              </p>
              <p className="mt-1 text-xs text-muted font-medium">Holding · humidity 44%</p>
              <div className="mt-auto flex gap-2 pt-5">
                <button
                  type="button"
                  onClick={() => d.adjustTemp(-0.5)}
                  aria-label="Lower bedroom temperature"
                  className="flex h-11 flex-1 items-center justify-center rounded-2xl border border-paper/10 bg-paper/[0.04] text-paper transition-[background-color,transform] duration-150 hover:bg-paper/10 active:scale-[0.97]"
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => d.adjustTemp(0.5)}
                  aria-label="Raise bedroom temperature"
                  className="flex h-11 flex-1 items-center justify-center rounded-2xl border border-paper/10 bg-paper/[0.04] text-paper transition-[background-color,transform] duration-150 hover:bg-paper/10 active:scale-[0.97]"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </DashboardTile>

            {/* Security */}
            <DashboardTile highlighted={d.armed}>
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-colors duration-200 ${
                    d.armed ? 'bg-accent text-white dark:text-ink' : 'bg-paper/[0.06] text-muted'
                  }`}
                >
                  <ShieldCheckIcon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <Toggle checked={d.armed} onChange={d.setArmed} label="Security system" />
              </div>
              <p className="mt-5 text-xs text-muted">Security</p>
              <p className="font-display text-2xl font-medium text-paper">{d.armed ? 'Protected' : 'Disarmed'}</p>
              <p className="mt-auto pt-3 text-xs text-muted">3 doors locked · 12 sensors</p>
            </DashboardTile>

            {/* Curtains */}
            <DashboardTile>
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-paper/[0.06] text-accent">
                  <BlindsIcon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <Toggle checked={d.curtainsOpen} onChange={d.setCurtainsOpen} label="Living room curtains" />
              </div>
              <p className="mt-5 text-xs text-muted">Curtains</p>
              <p className="font-display text-2xl font-medium text-paper">{d.curtainsOpen ? 'Open' : 'Closed'}</p>
              <div className="relative mt-auto h-10 overflow-hidden rounded-xl border border-paper/[0.08] bg-accent/[0.08]" aria-hidden>
                <div
                  className={`absolute inset-y-0 left-0 bg-paper/20 transition-[width] duration-300 ease-out-expo ${
                    d.curtainsOpen ? 'w-[10%]' : 'w-1/2'
                  }`}
                />
                <div
                  className={`absolute inset-y-0 right-0 bg-paper/20 transition-[width] duration-300 ease-out-expo ${
                    d.curtainsOpen ? 'w-[10%]' : 'w-1/2'
                  }`}
                />
              </div>
            </DashboardTile>

            {/* Energy */}
            <DashboardTile>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-muted">Energy</p>
                  <p className="font-display text-2xl font-medium text-paper">64%</p>
                  <p className="mt-1 text-xs text-muted">from solar today</p>
                </div>
                <EnergyRing value={64} />
              </div>
              <p className="mt-auto pt-3 text-xs text-muted">4.2 kWh used · battery 88%</p>
            </DashboardTile>
          </div>
        </div>
      </div>
    </div>
  );
}