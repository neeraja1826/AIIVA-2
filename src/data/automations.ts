import { images } from './images';
import type { Automation } from '../types/home';

export const automations: Automation[] = [
{
  id: 'lighting',
  title: 'Smart Lighting',
  tagline: 'Light that follows the day, the mood and the people in the room.',
  metric: 'Adaptive · circadian',
  details: ['Daylight-tuned colour', 'Presence sensing', 'Scene memory'],
  image: images.lighting,
  imageAlt: 'Open-plan living space with layered architectural lighting',
  layout: 'h-[440px] md:h-auto md:col-span-12 md:row-span-2',
  size: 'lg'
},
{
  id: 'security',
  title: 'Security',
  tagline: 'Locks, cameras and sensors that act as one.',
  metric: 'Monitored 24/7',
  details: ['Keyless entry', 'Live video', 'Instant alerts'],
  image: images.security,
  imageAlt: 'Smart door lock and intercom on a dark facade',
  layout: 'h-[420px] md:h-auto md:col-span-7 md:row-span-2',
  size: 'lg'
},
{
  id: 'climate',
  title: 'Climate',
  tagline: 'Room-by-room comfort.',
  metric: '±0.5°C precision',
  details: ['Learns routines', 'Window-aware'],
  image: images.climate,
  imageAlt: 'Smart thermostat on a textured wall',
  layout: 'h-[320px] md:h-auto md:col-span-5',
  size: 'sm'
},
{
  id: 'curtains',
  title: 'Curtains',
  tagline: 'Shading that tracks the sun.',
  metric: 'Silent motors',
  details: ['Sunrise wake', 'Heat protection'],
  image: images.curtains,
  imageAlt: 'Motorised sheer curtains at a tall window',
  layout: 'h-[320px] md:h-auto md:col-span-5',
  size: 'sm'
},
{
  id: 'entertainment',
  title: 'Entertainment',
  tagline: 'Every screen and speaker, one command.',
  metric: 'Multi-room audio',
  details: ['Home cinema', 'Voice control'],
  image: images.entertainment,
  imageAlt: 'Private home theatre with a softly glowing screen',
  layout: 'h-[360px] md:h-auto md:col-span-5',
  size: 'md'
},
{
  id: 'energy',
  title: 'Energy',
  tagline: 'Solar, battery and usage — balanced automatically.',
  metric: '−32% average usage',
  details: ['Solar forecasting', 'Battery scheduling', 'Live usage'],
  image: images.energy,
  imageAlt: 'Modern villa with solar roof and home battery at dusk',
  layout: 'h-[360px] md:h-auto md:col-span-7',
  size: 'md'
}];