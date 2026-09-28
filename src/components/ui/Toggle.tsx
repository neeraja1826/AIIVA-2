import React from 'react';

type ToggleProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
};

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
        checked ? 'bg-accent' : 'bg-paper/20'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white dark:bg-paper shadow transition-transform duration-200 ease-out-expo ${
          checked ? 'translate-x-[22px]' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}