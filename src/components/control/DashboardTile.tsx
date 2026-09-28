import React from 'react';

type DashboardTileProps = {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
};

export function DashboardTile({ children, className = '', highlighted = false }: DashboardTileProps) {
  return (
    <div
      className={`flex flex-col rounded-3xl border p-5 transition-colors duration-300 ${
      highlighted ? 'border-accent/25 bg-accent/[0.06]' : 'border-paper/[0.06] bg-paper/[0.03]'} ${
      className}`}>
      
      {children}
    </div>);

}