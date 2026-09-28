import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FanIcon, ZapIcon, SparklesIcon, CheckCircle2Icon, PowerIcon, SlidersIcon } from 'lucide-react';

export function InteractiveSwitchSimulator() {
  const [activeModel, setActiveModel] = useState<'8touch' | '6touch-fan' | '4gang' | 'fan-regulator'>('6touch-fan');

  // Switch states for 8-touch
  const [switches8, setSwitches8] = useState<boolean[]>([true, false, true, true, false, true, false, false]);

  // Switch states for 6-touch + fan
  const [switches6, setSwitches6] = useState<boolean[]>([true, true, false, true, false, true]);
  const [fanSpeed, setFanSpeed] = useState<number>(3);
  const [fanPower, setFanPower] = useState<boolean>(true);

  // Switch states for 4-gang
  const [switches4, setSwitches4] = useState<boolean[]>([true, false, true, false]);

  // Dedicated fan regulator
  const [soloFanSpeed, setSoloFanSpeed] = useState<number>(4);
  const [soloFanPower, setSoloFanPower] = useState<boolean>(true);

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

  return (
    <div className="rounded-3xl border border-paper/10 bg-surface/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-paper/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Interactive Touch Simulator
            </span>
          </div>
          <h3 className="mt-1 font-display text-xl font-semibold text-paper">
            Experience AIIVA Capacitive Glass Touch
          </h3>
          <p className="text-xs text-muted">Tap the touch points below to test real-time illumination and response</p>
        </div>

        {/* Model Tabs */}
        <div className="flex flex-wrap gap-1.5 rounded-2xl bg-ink/60 p-1 border border-paper/10">
          <button
            type="button"
            onClick={() => setActiveModel('6touch-fan')}
            className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
              activeModel === '6touch-fan'
                ? 'bg-accent text-white dark:text-ink font-semibold shadow'
                : 'text-paper/70 hover:text-paper hover:bg-paper/5'
            }`}
          >
            6-Gang + Fan + Socket
          </button>
          <button
            type="button"
            onClick={() => setActiveModel('8touch')}
            className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
              activeModel === '8touch'
                ? 'bg-accent text-white dark:text-ink font-semibold shadow'
                : 'text-paper/70 hover:text-paper hover:bg-paper/5'
            }`}
          >
            8-Gang + Sockets
          </button>
          <button
            type="button"
            onClick={() => setActiveModel('4gang')}
            className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
              activeModel === '4gang'
                ? 'bg-accent text-white dark:text-ink font-semibold shadow'
                : 'text-paper/70 hover:text-paper hover:bg-paper/5'
            }`}
          >
            4-Gang Touch
          </button>
          <button
            type="button"
            onClick={() => setActiveModel('fan-regulator')}
            className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
              activeModel === 'fan-regulator'
                ? 'bg-accent text-white dark:text-ink font-semibold shadow'
                : 'text-paper/70 hover:text-paper hover:bg-paper/5'
            }`}
          >
            Fan Regulator
          </button>
        </div>
      </div>

      {/* Simulator Plate Canvas */}
      <div className="my-8 flex flex-col items-center justify-center">
        {/* Glass Plate Bevel Container */}
        <div className="relative rounded-[28px] p-4 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-neutral-700/60 max-w-full">
          {/* Glass reflection highlight */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

          {/* 6-Touch + Fan + Dual Socket Model */}
          {activeModel === '6touch-fan' && (
            <div className="w-[320px] sm:w-[440px] md:w-[480px] bg-black rounded-[22px] p-6 sm:p-8 border border-neutral-800 shadow-inner flex flex-col justify-between gap-6">
              {/* Top Row: 6 Touch Points + Fan Controller */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4 items-center">
                {/* 6 Gang Switches */}
                {switches6.map((on, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSwitch6(idx)}
                    className="group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95"
                  >
                    <div className="text-[9px] uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                      L{idx + 1}
                    </div>
                    {/* Glowing slit indicator */}
                    <div
                      className={`h-7 w-1.5 rounded-full transition-all duration-300 ${
                        on
                          ? 'bg-sky-400 shadow-[0_0_12px_#38bdf8]'
                          : 'bg-neutral-600 group-hover:bg-neutral-500'
                      }`}
                    />
                    <span className="mt-2 text-[10px] font-medium text-neutral-300">
                      {on ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}

                {/* Integrated Fan Speed Controller */}
                <div className="col-span-2 flex items-center justify-between p-3 rounded-2xl bg-neutral-950/90 border border-neutral-800">
                  <div className="flex items-center gap-2">
                    <FanIcon
                      className={`h-6 w-6 transition-all ${
                        fanPower && fanSpeed > 0
                          ? 'text-sky-400 drop-shadow-[0_0_8px_#38bdf8] animate-spin'
                          : 'text-neutral-600'
                      }`}
                      style={{
                        animationDuration: fanSpeed === 5 ? '0.4s' : fanSpeed === 4 ? '0.6s' : fanSpeed === 3 ? '0.9s' : fanSpeed === 2 ? '1.4s' : '2.2s'
                      }}
                    />
                    <div>
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">Fan Speed</div>
                      <div className="font-display text-sm font-bold text-paper">
                        {fanSpeed > 0 ? `Speed ${fanSpeed}` : 'OFF'}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => adjustFan(1)}
                      disabled={fanSpeed >= 5}
                      className="p-1 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={() => adjustFan(-1)}
                      disabled={fanSpeed <= 0}
                      className="p-1 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-30"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Dual Universal Power Sockets */}
              <div className="grid grid-cols-2 gap-4 border-t border-neutral-800/80 pt-4">
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 font-mono mb-2">POWER SOCKET 1 (16A)</span>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-3.5 w-3.5 rounded-full bg-neutral-900 border border-neutral-700 shadow-inner" />
                    <div className="flex gap-4">
                      <div className="h-2.5 w-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
                      <div className="h-2.5 w-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 font-mono mb-2">POWER SOCKET 2 (16A)</span>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-3.5 w-3.5 rounded-full bg-neutral-900 border border-neutral-700 shadow-inner" />
                    <div className="flex gap-4">
                      <div className="h-2.5 w-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
                      <div className="h-2.5 w-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 8-Touch + Sockets Model */}
          {activeModel === '8touch' && (
            <div className="w-[320px] sm:w-[440px] md:w-[480px] bg-black rounded-[22px] p-6 sm:p-8 border border-neutral-800 shadow-inner flex flex-col justify-between gap-6">
              <div className="grid grid-cols-4 gap-3 sm:gap-4 items-center">
                {switches8.map((on, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSwitch8(idx)}
                    className="group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95"
                  >
                    <div className="text-[9px] uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                      L{idx + 1}
                    </div>
                    <div
                      className={`h-7 w-1.5 rounded-full transition-all duration-300 ${
                        on
                          ? 'bg-sky-400 shadow-[0_0_12px_#38bdf8]'
                          : 'bg-neutral-600 group-hover:bg-neutral-500'
                      }`}
                    />
                    <span className="mt-2 text-[10px] font-medium text-neutral-300">
                      {on ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Dual Sockets */}
              <div className="grid grid-cols-2 gap-4 border-t border-neutral-800/80 pt-4">
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 font-mono mb-2">UNIVERSAL SOCKET A</span>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-3.5 w-3.5 rounded-full bg-neutral-900 border border-neutral-700 shadow-inner" />
                    <div className="flex gap-4">
                      <div className="h-2.5 w-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
                      <div className="h-2.5 w-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                  <span className="text-[10px] text-neutral-500 font-mono mb-2">UNIVERSAL SOCKET B</span>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="h-3.5 w-3.5 rounded-full bg-neutral-900 border border-neutral-700 shadow-inner" />
                    <div className="flex gap-4">
                      <div className="h-2.5 w-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
                      <div className="h-2.5 w-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4-Gang Touch Model */}
          {activeModel === '4gang' && (
            <div className="w-[260px] sm:w-[320px] aspect-square bg-black rounded-[22px] p-6 sm:p-8 border border-neutral-800 shadow-inner flex flex-col justify-center gap-6">
              <div className="grid grid-cols-2 gap-6 items-center">
                {switches4.map((on, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleSwitch4(idx)}
                    className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                      Gang {idx + 1}
                    </div>
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

          {/* Dedicated Fan Speed Controller */}
          {activeModel === 'fan-regulator' && (
            <div className="w-[240px] sm:w-[280px] aspect-square bg-black rounded-[22px] p-6 sm:p-8 border border-neutral-800 shadow-inner flex flex-col items-center justify-between">
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
                      animationDuration: soloFanSpeed === 5 ? '0.4s' : soloFanSpeed === 4 ? '0.6s' : soloFanSpeed === 3 ? '0.9s' : soloFanSpeed === 2 ? '1.4s' : '2.2s'
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
