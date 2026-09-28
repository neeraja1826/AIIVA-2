import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

type CtaButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'light' | 'ghost' | 'accent';
  size?: 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
};

const variants = {
  light: 'bg-paper text-ink hover:opacity-90 dark:hover:bg-white dark:hover:text-ink',
  ghost: 'border border-paper/20 bg-paper/[0.04] text-paper hover:border-paper/40 hover:bg-paper/[0.08]',
  accent: 'bg-accent text-white dark:text-ink hover:brightness-110'
};

const sizes = {
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]'
};

export function CtaButton({
  children,
  onClick,
  href,
  variant = 'light',
  size = 'md',
  icon,
  className = ''
}: CtaButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,border-color,transform,filter] duration-150 ease-out-expo active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${variants[variant]} ${sizes[size]} ${className}`;

  const content =
  <>
      {children}
      <span className="transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5" aria-hidden>
        {icon ?? <ArrowRightIcon className="h-4 w-4" />}
      </span>
    </>;


  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>);

  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>);

}