import {
  LightbulbIcon,
  ThermometerIcon,
  ShieldCheckIcon,
  BlindsIcon,
  TvIcon,
  ZapIcon,
  KeyRoundIcon } from
'lucide-react';
import type { HomeSystem } from '../types/home';

// x / y are percentages of the 5:3 diagram canvas
export const coreCenter = { x: 50, y: 64 };

export const systems: HomeSystem[] = [
{
  id: 'lighting',
  label: 'Lighting',
  icon: LightbulbIcon,
  x: 14,
  y: 16,
  description: 'Layered scenes that follow daylight, presence and time of day.',
  example: 'Dims to 30% at sunset'
},
{
  id: 'climate',
  label: 'Climate',
  icon: ThermometerIcon,
  x: 7,
  y: 48,
  description: 'Every room held at the temperature you actually like.',
  example: 'Bedroom to 20°C by 22:30'
},
{
  id: 'security',
  label: 'Security',
  icon: ShieldCheckIcon,
  x: 14,
  y: 80,
  description: 'Cameras, sensors and alarm armed and monitored as one.',
  example: 'Arms when the last person leaves'
},
{
  id: 'curtains',
  label: 'Curtains',
  icon: BlindsIcon,
  x: 86,
  y: 16,
  description: 'Motorised shading that tracks sun, heat and privacy.',
  example: 'West façade closes at 16:00'
},
{
  id: 'entertainment',
  label: 'Entertainment',
  icon: TvIcon,
  x: 93,
  y: 48,
  description: 'Every screen and speaker, one tap or one word away.',
  example: 'Movie night in one command'
},
{
  id: 'energy',
  label: 'Energy',
  icon: ZapIcon,
  x: 86,
  y: 80,
  description: 'Solar, battery and usage balanced automatically.',
  example: 'Runs appliances at solar peak'
},
{
  id: 'access',
  label: 'Access',
  icon: KeyRoundIcon,
  x: 50,
  y: 93,
  description: 'Keyless entry, guest codes and gate control from anywhere.',
  example: 'Guest code valid Sat 10:00–14:00'
}];