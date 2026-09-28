import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FanIcon, ZapIcon, SparklesIcon, CheckCircle2Icon, PowerIcon, SlidersIcon } from 'lucide-react';

export type SwitchModelType =
  | '8touch-fan-socket'
  | '8touch-dual-socket'
  | '8touch-single-socket'
  | '8touch-pure'
  | '6touch-fan'
  | '4gang-fan'
  | '4gang'
  | 'fan-regulator';

export function InteractiveSwitchSimulator() {
  const [activeModel, setActiveModel] = useState<SwitchModelType>('8touch-fan-socket');

  // Switch states
  const [switches8, setSwitches8] = useState<boolean[]>([true, false, true, true, false, true, false, true]);
  const [switches6, setSwitches6] = useState<boolean[]>([true, true, false, true, false, true]);
  const [switches4, setSwitches4] = useState<boolean[]>([true, false, true, false]);
  const [switches4fan, setSwitches4fan] = useState<boolean[]>([true, true, false, true]);

  // Fan regulator states
  const [fanSpeed, setFanSpeed] = useState<number>(3);
  const [fanPower, setFanPower] = useState<boolean>(true);

  const [soloFanSpeed, setSoloFanSpeed] = useState<number>(4);
  const [soloFanPower, setSoloFanPower] = useState<boolean>(true);

  // Sockets state (interactive simulation)
  const [socket1Active, setSocket1Active] = useState<boolean>(true);
  const [socket2Active, setSocket2Active] = useState<boolean>(false);

  const toggleSwitch8 = (index: number) => {
    setSwitches8((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const toggleSwitch6 = (index: number) => {
    setSwitches6((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const toggleSwitch4 = (index: number) => {
    setSwitches4((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const toggleSwitch4fan = (index: number) => {
    setSwitches4fan((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const adjustFan = (delta: number) => {
    setFanSpeed((prev) => {
      const next = prev + delta;
      if (next < 0) return 0;
      if (next > 5) return 5;
      if (next === 0) setFanPower(false);
      else setFanPower(true);
      return next;
    });
  };

  const adjustSoloFan = (delta: number) => {
    setSoloFanSpeed((prev) => {
      const next = prev + delta;
      if (next < 0) return 0;
      if (next > 5) return 5;
      if (next === 0) setSoloFanPower(false);
      else setSoloFanPower(true);
      return next;
    });
  };

  const models: { id: SwitchModelType; label: string; tag: string }[] = [
    { id: '8touch-fan-socket', label: '8-Touch + Fan + Socket', tag: 'Grand Master' },
    { id: '8touch-pure', label: '8-Gang Pure Touch', tag: '8 Lights' },
    { id: '8touch-single-socket', label: '8-Touch + 1 Socket', tag: 'Executive' },
    { id: '8touch-dual-socket', label: '8-Touch + 2 Sockets', tag: 'Dual Power' },
    { id: '6touch-fan', label: '6-Touch + Fan + 2 Sockets', tag: 'Popular' },
    { id: '4gang-fan', label: '4-Touch + Fan Regulator', tag: 'Bedroom' },
    { id: '4gang', label: '4-Gang Touch Panel', tag: 'Square' },
    { id: 'fan-regulator', label: 'Digital Fan Regulator', tag: 'Stepless' },
  ];

  return (
    <div className="rounded-3xl border border-paper/10 bg-surface/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-paper/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Interactive Touch Simulator
            </span>
          </div>
          <h3 className="mt-1 font-display text-xl md:text-2xl font-semibold text-paper">
            Experience AIIVA Capacitive Glass Touch
          </h3>
          <p className="text-xs text-muted">
            Click on the capacitive touch points, fan arrows, or sockets to test real-time LED illumination and response.
          </p>
        </div>

        {/* Quick specs pill */}
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-accent/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent border border-accent/30">
            {models.find((m) => m.id === activeModel)?.label}
          </span>
        </div>
      </div>

      {/* Model Tabs Navigation */}
      <div className="mt-6 flex flex-wrap gap-2 pb-2">
        {models.map((m) => {
          const isActive = activeModel === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setActiveModel(m.id)}
              className={`group flex items-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-medium transition-all ${
                isActive
                  ? 'bg-accent text-white dark:text-ink font-semibold shadow-lg shadow-accent/20 ring-1 ring-accent'
                  : 'bg-ink/50 text-paper/70 hover:text-paper hover:bg-ink/90 border border-paper/10'
              }`}
            >
              <span>{m.label}</span>
              <span
                className={`rounded-md px-1.5 py-0.5 text-[9px] uppercase font-bold tracking-wider ${
                  isActive ? 'bg-black/20 text-white dark:text-ink' : 'bg-paper/10 text-muted'
                }`}
              >
                {m.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Simulator Plate Canvas */}
      <div className="my-8 flex flex-col items-center justify-center">
        {/* Outer Glass Bevel Frame */}
        <div className="relative rounded-[32px] p-4 sm:p-5 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-neutral-700/60 max-w-full overflow-hidden">
          {/* Glass glare & reflection effect */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none" />

          {/* 1. Grand Master: 8-Touch + Fan + Single Socket */}
          {activeModel === '8touch-fan-socket' && (
            <div className="w-[330px] sm:w-[500px] md:w-[560px] bg-black rounded-[24px] p-5 sm:p-7 border border-neutral-800 shadow-inner flex flex-col gap-5">
              {/* Top Row: 4 Gangs + Fan Controller */}
              <div className="grid grid-cols-6 gap-2.5 sm:gap-3 items-center">
                {/* 4 Gangs */}
                {switches8.slice(0, 4).map((on, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSwitch8(idx)}
                    className="col-span-1 group relative flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95 cursor-pointer"
                  >
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                      L{idx + 1}
                    </span>
                    <div
                      className={`h-7 w-1.5 rounded-full transition-all duration-300 ${
                        on
                          ? 'bg-sky-400 shadow-[0_0_14px_#38bdf8]'
                          : 'bg-neutral-600 group-hover:bg-neutral-500'
                      }`}
                    />
                    <span className="mt-1.5 text-[9px] font-medium text-neutral-300">
                      {on ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}

                {/* Fan Speed Controller (2 cols) */}
                <div className="col-span-2 flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-neutral-950/90 border border-neutral-800">
                  <div className="flex items-center gap-2">
                    <FanIcon
                      className={`h-5 w-5 sm:h-6 sm:w-6 transition-all ${
                        fanPower && fanSpeed > 0
                          ? 'text-sky-400 drop-shadow-[0_0_8px_#38bdf8] animate-spin'
                          : 'text-neutral-600'
                      }`}
                      style={{
                        animationDuration:
                          fanSpeed === 5
                            ? '0.35s'
                            : fanSpeed === 4
                            ? '0.55s'
                            : fanSpeed === 3
                            ? '0.85s'
                            : fanSpeed === 2
                            ? '1.3s'
                            : '2.2s'
                      }}
                    />
                    <div>
                      <div className="text-[9px] text-neutral-400 uppercase tracking-wider font-mono">Fan</div>
                      <div className="font-display text-xs sm:text-sm font-bold text-paper">
                        {fanSpeed > 0 ? `Speed ${fanSpeed}` : 'OFF'}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => adjustFan(1)}
                      disabled={fanSpeed >= 5}
                      className="p-1 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30 text-[10px]"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={() => adjustFan(-1)}
                      disabled={fanSpeed <= 0}
                      className="p-1 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30 text-[10px]"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Row: 4 Gangs + 1 Heavy Duty Power Socket */}
              <div className="grid grid-cols-6 gap-2.5 sm:gap-3 items-center border-t border-neutral-800/80 pt-4">
                {/* 4 Gangs */}
                {switches8.slice(4, 8).map((on, idx) => (
                  <button
                    key={idx + 4}
                    type="button"
                    onClick={() => toggleSwitch8(idx + 4)}
                    className="col-span-1 group relative flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95 cursor-pointer"
                  >
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                      L{idx + 5}
                    </span>
                    <div
                      className={`h-7 w-1.5 rounded-full transition-all duration-300 ${
                        on
                          ? 'bg-sky-400 shadow-[0_0_14px_#38bdf8]'
                          : 'bg-neutral-600 group-hover:bg-neutral-500'
                      }`}
                    />
                    <span className="mt-1.5 text-[9px] font-medium text-neutral-300">
                      {on ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}

                {/* Single 16A Power Socket (2 cols) */}
                <div
                  onClick={() => setSocket1Active(!socket1Active)}
                  className="col-span-2 flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-neutral-950/70 border border-neutral-800 cursor-pointer hover:border-neutral-600 transition-all"
                  title="Click to toggle socket power indicator"
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        socket1Active ? 'bg-sky-400 shadow-[0_0_6px_#38bdf8]' : 'bg-neutral-600'
                      }`}
                    />
                    <span className="text-[9px] text-neutral-400 font-mono">16A SOCKET</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-neutral-900 border border-neutral-700 shadow-inner" />
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. 8-Gang Pure Touch Panel (All Touch, No Socket) */}
          {activeModel === '8touch-pure' && (
            <div className="w-[330px] sm:w-[480px] md:w-[520px] bg-black rounded-[24px] p-6 sm:p-8 border border-neutral-800 shadow-inner flex flex-col gap-5">
              {/* Row 1: 4 Touch Points */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4 items-center">
                {switches8.slice(0, 4).map((on, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSwitch8(idx)}
                    className="group relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95 cursor-pointer"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                      Zone {idx + 1}
                    </span>
                    <div
                      className={`h-8 w-1.5 rounded-full transition-all duration-300 ${
                        on
                          ? 'bg-sky-400 shadow-[0_0_14px_#38bdf8]'
                          : 'bg-neutral-600 group-hover:bg-neutral-500'
                      }`}
                    />
                    <span className="mt-2 text-[10px] font-medium text-neutral-300">
                      {on ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Row 2: 4 Touch Points */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4 items-center border-t border-neutral-800/80 pt-4">
                {switches8.slice(4, 8).map((on, idx) => (
                  <button
                    key={idx + 4}
                    type="button"
                    onClick={() => toggleSwitch8(idx + 4)}
                    className="group relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95 cursor-pointer"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                      Zone {idx + 5}
                    </span>
                    <div
                      className={`h-8 w-1.5 rounded-full transition-all duration-300 ${
                        on
                          ? 'bg-sky-400 shadow-[0_0_14px_#38bdf8]'
                          : 'bg-neutral-600 group-hover:bg-neutral-500'
                      }`}
                    />
                    <span className="mt-2 text-[10px] font-medium text-neutral-300">
                      {on ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 3. 8-Gang + Single Socket Panel */}
          {activeModel === '8touch-single-socket' && (
            <div className="w-[330px] sm:w-[500px] md:w-[560px] bg-black rounded-[24px] p-5 sm:p-7 border border-neutral-800 shadow-inner flex flex-col gap-5">
              <div className="grid grid-cols-5 gap-3 items-center">
                {/* 8 Touch Gangs (4 columns) */}
                <div className="col-span-4 grid grid-cols-4 gap-2.5 sm:gap-3">
                  {switches8.map((on, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleSwitch8(idx)}
                      className="group relative flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95 cursor-pointer"
                    >
                      <span className="text-[9px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                        L{idx + 1}
                      </span>
                      <div
                        className={`h-6 w-1.5 rounded-full transition-all duration-300 ${
                          on
                            ? 'bg-sky-400 shadow-[0_0_12px_#38bdf8]'
                            : 'bg-neutral-600 group-hover:bg-neutral-500'
                        }`}
                      />
                      <span className="mt-1.5 text-[9px] font-medium text-neutral-300">
                        {on ? 'ON' : 'OFF'}
                      </span>
                    </button>
                  ))}
                </div>

                {/* 1 Universal 16A Socket on Right (1 column, full height) */}
                <div
                  onClick={() => setSocket1Active(!socket1Active)}
                  className="col-span-1 h-full flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-950/70 border border-neutral-800 cursor-pointer hover:border-neutral-600 transition-all"
                  title="Click to toggle socket power indicator"
                >
                  <div className="flex items-center gap-1 mb-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        socket1Active ? 'bg-sky-400 shadow-[0_0_6px_#38bdf8]' : 'bg-neutral-600'
                      }`}
                    />
                    <span className="text-[9px] text-neutral-400 font-mono">16A</span>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-3.5 w-3.5 rounded-full bg-neutral-900 border border-neutral-700 shadow-inner" />
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. 8-Gang + Dual Socket Panel */}
          {activeModel === '8touch-dual-socket' && (
            <div className="w-[330px] sm:w-[480px] md:w-[520px] bg-black rounded-[24px] p-5 sm:p-7 border border-neutral-800 shadow-inner flex flex-col gap-5">
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 items-center">
                {switches8.map((on, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSwitch8(idx)}
                    className="group relative flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95 cursor-pointer"
                  >
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                      L{idx + 1}
                    </span>
                    <div
                      className={`h-6 w-1.5 rounded-full transition-all duration-300 ${
                        on
                          ? 'bg-sky-400 shadow-[0_0_12px_#38bdf8]'
                          : 'bg-neutral-600 group-hover:bg-neutral-500'
                      }`}
                    />
                    <span className="mt-1.5 text-[9px] font-medium text-neutral-300">
                      {on ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Dual Sockets */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t border-neutral-800/80 pt-4">
                <div
                  onClick={() => setSocket1Active(!socket1Active)}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-950/60 border border-neutral-800 cursor-pointer hover:border-neutral-600"
                >
                  <span className="text-[9px] text-neutral-500 font-mono mb-2">UNIVERSAL SOCKET A</span>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-neutral-900 border border-neutral-700 shadow-inner" />
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setSocket2Active(!socket2Active)}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-950/60 border border-neutral-800 cursor-pointer hover:border-neutral-600"
                >
                  <span className="text-[9px] text-neutral-500 font-mono mb-2">UNIVERSAL SOCKET B</span>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-neutral-900 border border-neutral-700 shadow-inner" />
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. 6-Touch + Fan + Dual Socket */}
          {activeModel === '6touch-fan' && (
            <div className="w-[330px] sm:w-[480px] md:w-[520px] bg-black rounded-[24px] p-5 sm:p-7 border border-neutral-800 shadow-inner flex flex-col gap-5">
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 items-center">
                {/* 6 Gang Switches */}
                {switches6.map((on, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSwitch6(idx)}
                    className="group relative flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95 cursor-pointer"
                  >
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                      L{idx + 1}
                    </span>
                    <div
                      className={`h-6 w-1.5 rounded-full transition-all duration-300 ${
                        on
                          ? 'bg-sky-400 shadow-[0_0_12px_#38bdf8]'
                          : 'bg-neutral-600 group-hover:bg-neutral-500'
                      }`}
                    />
                    <span className="mt-1.5 text-[9px] font-medium text-neutral-300">
                      {on ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}

                {/* Integrated Fan Speed Controller */}
                <div className="col-span-2 flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-neutral-950/90 border border-neutral-800">
                  <div className="flex items-center gap-2">
                    <FanIcon
                      className={`h-5 w-5 sm:h-6 sm:w-6 transition-all ${
                        fanPower && fanSpeed > 0
                          ? 'text-sky-400 drop-shadow-[0_0_8px_#38bdf8] animate-spin'
                          : 'text-neutral-600'
                      }`}
                      style={{
                        animationDuration:
                          fanSpeed === 5
                            ? '0.4s'
                            : fanSpeed === 4
                            ? '0.6s'
                            : fanSpeed === 3
                            ? '0.9s'
                            : fanSpeed === 2
                            ? '1.4s'
                            : '2.2s'
                      }}
                    />
                    <div>
                      <div className="text-[9px] text-neutral-400 uppercase tracking-wider font-mono">Fan Speed</div>
                      <div className="font-display text-xs sm:text-sm font-bold text-paper">
                        {fanSpeed > 0 ? `Speed ${fanSpeed}` : 'OFF'}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => adjustFan(1)}
                      disabled={fanSpeed >= 5}
                      className="p-1 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30 text-[10px]"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={() => adjustFan(-1)}
                      disabled={fanSpeed <= 0}
                      className="p-1 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30 text-[10px]"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>

              {/* Dual Universal Power Sockets */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t border-neutral-800/80 pt-4">
                <div
                  onClick={() => setSocket1Active(!socket1Active)}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-950/60 border border-neutral-800 cursor-pointer hover:border-neutral-600"
                >
                  <span className="text-[9px] text-neutral-500 font-mono mb-2">POWER SOCKET 1</span>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-neutral-900 border border-neutral-700 shadow-inner" />
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setSocket2Active(!socket2Active)}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-950/60 border border-neutral-800 cursor-pointer hover:border-neutral-600"
                >
                  <span className="text-[9px] text-neutral-500 font-mono mb-2">POWER SOCKET 2</span>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-neutral-900 border border-neutral-700 shadow-inner" />
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                      <div className="h-2 w-2 rounded-full bg-neutral-900 border border-neutral-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. 4-Touch + Fan Controller (New configuration) */}
          {activeModel === '4gang-fan' && (
            <div className="w-[320px] sm:w-[420px] md:w-[460px] bg-black rounded-[24px] p-6 sm:p-8 border border-neutral-800 shadow-inner flex items-center justify-between gap-5">
              {/* Left: 4 Touch Gangs (2x2) */}
              <div className="grid grid-cols-2 gap-3 flex-1">
                {switches4fan.map((on, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSwitch4fan(idx)}
                    className="group relative flex flex-col items-center justify-center p-3.5 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95 cursor-pointer"
                  >
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 mb-1.5 font-mono">
                      L{idx + 1}
                    </span>
                    <div
                      className={`h-7 w-1.5 rounded-full transition-all duration-300 ${
                        on
                          ? 'bg-sky-400 shadow-[0_0_12px_#38bdf8]'
                          : 'bg-neutral-600 group-hover:bg-neutral-500'
                      }`}
                    />
                    <span className="mt-1.5 text-[9px] font-medium text-neutral-300">
                      {on ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Right: Fan Regulator Section */}
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-950/90 border border-neutral-800 w-36 sm:w-40">
                <button
                  type="button"
                  onClick={() => adjustFan(1)}
                  disabled={fanSpeed >= 5}
                  className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30 text-xs font-bold"
                >
                  ▲
                </button>

                <div className="my-3 flex flex-col items-center gap-1.5">
                  <FanIcon
                    className={`h-7 w-7 transition-all ${
                      fanPower && fanSpeed > 0
                        ? 'text-sky-400 drop-shadow-[0_0_10px_#38bdf8] animate-spin'
                        : 'text-neutral-600'
                    }`}
                    style={{
                      animationDuration:
                        fanSpeed === 5
                          ? '0.4s'
                          : fanSpeed === 4
                          ? '0.6s'
                          : fanSpeed === 3
                          ? '0.9s'
                          : fanSpeed === 2
                          ? '1.4s'
                          : '2.2s'
                    }}
                  />
                  <div className="text-center">
                    <div className="text-[9px] text-neutral-400 uppercase font-mono">Fan Speed</div>
                    <div className="font-display text-sm font-bold text-paper">
                      {fanSpeed > 0 ? `Level ${fanSpeed}` : 'OFF'}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => adjustFan(-1)}
                  disabled={fanSpeed <= 0}
                  className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30 text-xs font-bold"
                >
                  ▼
                </button>
              </div>
            </div>
          )}

          {/* 7. 4-Gang Touch Model */}
          {activeModel === '4gang' && (
            <div className="w-[260px] sm:w-[320px] aspect-square bg-black rounded-[24px] p-6 sm:p-8 border border-neutral-800 shadow-inner flex flex-col justify-center gap-6">
              <div className="grid grid-cols-2 gap-5 items-center">
                {switches4.map((on, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSwitch4(idx)}
                    className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95 cursor-pointer"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                      Gang {idx + 1}
                    </span>
                    <div
                      className={`h-8 w-2 rounded-full transition-all duration-300 ${
                        on
                          ? 'bg-sky-400 shadow-[0_0_14px_#38bdf8]'
                          : 'bg-neutral-600 group-hover:bg-neutral-500'
                      }`}
                    />
                    <span className="mt-2 text-xs font-semibold text-neutral-200">
                      {on ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 8. Dedicated Fan Speed Controller */}
          {activeModel === 'fan-regulator' && (
            <div className="w-[240px] sm:w-[280px] aspect-square bg-black rounded-[24px] p-6 sm:p-8 border border-neutral-800 shadow-inner flex flex-col items-center justify-between">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                AIIVA STEPLESS FAN CONTROLLER
              </div>

              <div className="flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={() => adjustSoloFan(1)}
                  disabled={soloFanSpeed >= 5}
                  className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:bg-neutral-800 active:scale-95 disabled:opacity-30"
                >
                  <span className="text-lg font-bold">▲</span>
                </button>

                <div className="flex items-center gap-3">
                  <FanIcon
                    className={`h-10 w-10 transition-all ${
                      soloFanPower && soloFanSpeed > 0
                        ? 'text-sky-400 drop-shadow-[0_0_12px_#38bdf8] animate-spin'
                        : 'text-neutral-600'
                    }`}
                    style={{
                      animationDuration:
                        soloFanSpeed === 5
                          ? '0.4s'
                          : soloFanSpeed === 4
                          ? '0.6s'
                          : soloFanSpeed === 3
                          ? '0.9s'
                          : soloFanSpeed === 2
                          ? '1.4s'
                          : '2.2s'
                    }}
                  />
                  <div className="text-center">
                    <span className="text-xs text-neutral-400">Level</span>
                    <div className="font-display text-2xl font-bold text-paper">
                      {soloFanSpeed > 0 ? soloFanSpeed : 'OFF'}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => adjustSoloFan(-1)}
                  disabled={soloFanSpeed <= 0}
                  className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:bg-neutral-800 active:scale-95 disabled:opacity-30"
                >
                  <span className="text-lg font-bold">▼</span>
                </button>
              </div>

              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <span
                    key={lvl}
                    className={`h-1.5 w-6 rounded-full transition-all ${
                      lvl <= soloFanSpeed ? 'bg-sky-400 shadow-[0_0_6px_#38bdf8]' : 'bg-neutral-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Highlights footer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-paper/10 pt-5 text-center text-xs text-muted">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-paper">&lt; 0.02s</span>
          <span>Instant Touch Latency</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-paper">Dual LED Color</span>
          <span>Night Glow Status</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-paper">Toughened Glass</span>
          <span>Scratch & Shockproof</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-paper">100% Retrofit</span>
          <span>Zero Rewiring Required</span>
        </div>
      </div>
    </div>
  );
}
