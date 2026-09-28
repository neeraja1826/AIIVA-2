import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { Benefit } from '../../types/home';

type BenefitRowProps = {
  benefit: Benefit;
  index: number;
};

export function BenefitRow({ benefit, index }: BenefitRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 95%', 'center 55%'] });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    reduce
      ? ['inset(0% 0% 0% 0% round 28px)', 'inset(0% 0% 0% 0% round 28px)']
      : ['inset(0% 50% 0% 50% round 28px)', 'inset(0% 0% 0% 0% round 28px)']
  );
  const imageScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.15, 1]);
  const textOpacity = useTransform(
    scrollYProgress,
    reduce ? [-1, -0.5] : [0.25, 0.9],
    [0.18, 1]
  );
  const captionOpacity = useTransform(scrollYProgress, reduce ? [-1, -0.5] : [0.6, 1], [0, 1]);
  const alignRight = index % 2 === 1;

  return (
    <div ref={ref} className="relative flex h-[30vh] min-h-[220px] items-center md:h-[38vh]">
      <motion.div style={{ clipPath }} className="absolute inset-0 overflow-hidden rounded-[28px] border border-paper/10 bg-raised shadow-md" aria-hidden>
        <motion.img src={benefit.image} alt="" style={{ scale: imageScale }} className="h-full w-full object-cover opacity-70 dark:opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/85 via-surface/60 to-surface/85 dark:from-ink/60 dark:via-ink/30 dark:to-ink/60" />
      </motion.div>

      <div
        className={`relative flex w-full flex-col gap-3 px-6 md:flex-row md:items-end md:justify-between md:px-12 ${
          alignRight ? 'md:flex-row-reverse md:text-right' : ''
        }`}
      >
        <motion.h3
          style={{ opacity: textOpacity }}
          className="font-display text-[clamp(2.5rem,10vw,10rem)] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-paper"
        >
          {benefit.word}
        </motion.h3>
        <motion.p style={{ opacity: captionOpacity }} className="max-w-xs text-sm font-medium leading-relaxed text-paper/85 dark:text-paper/80 md:pb-4">
          {benefit.caption}
        </motion.p>
      </div>
    </div>
  );
}