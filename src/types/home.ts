import type { LucideIcon } from 'lucide-react';

export type NavLink = {label: string;id: string;};

export type HeroHotspot = {
  id: string;
  label: string;
  value: string;
  x: number;
  y: number;
  reveal: number;
};

export type HeroRoom = {
  id: string;
  name: string;
  temp: number;
  lights: number;
  curtains: string;
  security: string;
};

export type Problem = {
  id: string;
  title: string;
  stat: string;
  fix: string;
  image: string;
  imageAlt: string;
};

export type SystemId =
'lighting' |
'climate' |
'security' |
'curtains' |
'entertainment' |
'energy' |
'access';

export type HomeSystem = {
  id: SystemId;
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
  description: string;
  example: string;
};

export type RoomControl =
{type: 'level';label: string;level: number;} |
{type: 'toggle';label: string;options: [string, string];on: boolean;} |
{type: 'stepper';label: string;value: number;unit: string;min: number;max: number;} |
{type: 'status';label: string;value: string;};

export type Room = {
  id: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  controls: RoomControl[];
};

export type Automation = {
  id: string;
  title: string;
  tagline: string;
  metric: string;
  details: string[];
  image: string;
  imageAlt: string;
  layout: string;
  size: 'lg' | 'md' | 'sm';
};

export type SceneStep = {
  action: string;
  detail: string;
  value: string;
  offset: string;
  icon: LucideIcon;
};

export type Scene = {
  id: string;
  name: string;
  trigger: string;
  icon: LucideIcon;
  image: string;
  steps: SceneStep[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  meta: string;
};

export type Benefit = {
  word: string;
  caption: string;
  image: string;
};