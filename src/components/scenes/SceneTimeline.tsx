import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { CheckIcon, RotateCcwIcon } from 'lucide-react';
import type { Scene } from '../../types/home';

type SceneTimelineProps = {
  scene: Scene;
};

export function SceneTimeline({ scene }: SceneTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion() ?? false;
  const [completed, setCompleted] = useState(0);
  const [runId, setRunId] = useState(0);
  const total = scene.steps.length;

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCompleted(total);
      return;
    }
    setCompleted(0);
    const timers = scene.steps.map((_, i) => window.setTimeout(() => setCompleted(i + 1), 600 + i * 750));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [scene, inView, reduce, runId, total]);

  const running = completed < total;
  const SceneIcon = scene.icon;

  return (
    <div ref={ref} className="relative overflow-hidden rounded-[32px] border border-paper/15 bg-surface shadow-xl">
      <AnimatePresence initial={false}>
        <motion.img
          key={scene.id}
          src={scene.image}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.38 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 h-full w-full object-cover dark:opacity-25" />
        
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-surface/70 via-surface/90 to-surface dark:from-surface/60 dark:via-surface/85 dark:to-surface" />

      <div className="relative p-6 md:p-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-paper/15 bg-surface/90 dark:bg-ink/50 text-accent shadow-sm">
              <SceneIcon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-paper">{scene.name}</p>
              <p className="mt-0.5 text-sm text-muted font-medium">{scene.trigger}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setRunId((n) => n + 1)}
            disabled={running}
            className="flex items-center gap-2 rounded-full border border-paper/15 bg-surface/80 px-3.5 py-2 text-xs font-medium text-paper/80 shadow-sm transition-colors duration-150 hover:border-paper/30 hover:text-paper disabled:pointer-events-none disabled:opacity-40">
            
            <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden />
            Replay
          </button>
        </div>

        <p className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium" aria-live="polite">
          <span className={`h-1.5 w-1.5 rounded-full ${running ? 'bg-violet' : 'bg-accent'}`} aria-hidden />
          <span className={running ? 'text-violet' : 'text-accent'}>
            {running ? 'Running scene' : `Scene complete · ${total} actions`}
          </span>
        </p>

        <ol className="relative mt-6">
          <span className="absolute bottom-8 left-[83px] top-8 w-px -translate-x-1/2 bg-paper/15" aria-hidden />
          <motion.span
            className="absolute bottom-8 left-[83px] top-8 w-px origin-top -translate-x-1/2 bg-accent"
            animate={{ scaleY: total > 1 ? Math.max(0, completed - 1) / (total - 1) : 1 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            aria-hidden />
          
          {scene.steps.map((step, i) => {
            const state = i < completed ? 'done' : i === completed && running ? 'running' : 'pending';
            const StepIcon = step.icon;
            return (
              <li key={`${scene.id}-${step.action}`} className="relative grid grid-cols-[48px_40px_1fr] items-center gap-4 py-4 md:grid-cols-[48px_40px_1fr_auto]">
                <span className="text-xs tabular-nums text-muted font-medium">{step.offset}</span>
                <span
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 ${
                  state === 'done' ?
                  'border-accent bg-accent text-white dark:text-ink' :
                  state === 'running' ?
                  'border-accent bg-surface text-accent font-semibold shadow-sm' :
                  'border-paper/15 bg-surface text-muted'}`
                  }>
                  
                  <StepIcon className="h-4 w-4" aria-hidden />
                </span>
                <div className={`transition-opacity duration-200 ${state === 'pending' ? 'opacity-40' : 'opacity-100'}`}>
                  <p className="font-display text-lg font-medium text-paper md:text-xl">{step.action}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {step.detail} · <span className="text-paper/90 font-medium">{step.value}</span>
                  </p>
                </div>
                <span
                  className={`col-start-3 flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-200 md:col-start-auto ${
                  state === 'done' ?
                  'bg-accent/15 text-accent' :
                  state === 'running' ?
                  'bg-violet/15 text-violet' :
                  'bg-paper/[0.06] text-muted'}`
                  }>
                  
                  {state === 'done' && <CheckIcon className="h-3 w-3" aria-hidden />}
                  {state === 'done' ? 'Done' : state === 'running' ? 'Running' : 'Queued'}
                </span>
              </li>);

          })}
        </ol>
      </div>
    </div>);

}