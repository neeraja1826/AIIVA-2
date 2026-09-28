import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`group relative flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 bg-paper/[0.04] text-paper transition-all duration-200 hover:border-paper/30 hover:bg-paper/[0.08] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        {isDark ? (
          <SunIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <MoonIcon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </span>
    </button>
  );
}
