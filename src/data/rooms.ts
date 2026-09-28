import { images } from './images';
import type { Room } from '../types/home';

export const rooms: Room[] = [
{
  id: 'living',
  name: 'Living Room',
  summary: 'Evening scene active · 6 devices',
  image: images.heroLiving,
  imageAlt: 'Luxury living room at blue hour with cove lighting and city views',
  controls: [
  { type: 'level', label: 'Lighting', level: 72 },
  { type: 'toggle', label: 'Curtains', options: ['Open', 'Closed'], on: true },
  { type: 'stepper', label: 'Temperature', value: 22, unit: '°C', min: 16, max: 28 },
  { type: 'toggle', label: 'Entertainment', options: ['Ready', 'Off'], on: true }]

},
{
  id: 'bedroom',
  name: 'Bedroom',
  summary: 'Wind-down scene · 4 devices',
  image: images.bedroom,
  imageAlt: 'Modern master bedroom with soft headboard lighting at dusk',
  controls: [
  { type: 'level', label: 'Lighting', level: 30 },
  { type: 'toggle', label: 'Curtains', options: ['Open', 'Closed'], on: false },
  { type: 'stepper', label: 'Temperature', value: 20, unit: '°C', min: 16, max: 28 },
  { type: 'status', label: 'Wake scene', value: '06:45' }]

},
{
  id: 'kitchen',
  name: 'Kitchen',
  summary: 'Cooking scene · 5 devices',
  image: images.kitchen,
  imageAlt: 'Minimal dark kitchen with marble island and pendant lighting',
  controls: [
  { type: 'level', label: 'Task lighting', level: 90 },
  { type: 'stepper', label: 'Climate', value: 21, unit: '°C', min: 16, max: 28 },
  { type: 'toggle', label: 'Appliances', options: ['Active', 'Idle'], on: true },
  { type: 'status', label: 'Leak sensor', value: 'Clear' }]

},
{
  id: 'entrance',
  name: 'Entrance',
  summary: 'Secured · 4 devices',
  image: images.entrance,
  imageAlt: 'Villa entrance with pivot door and smart lock at night',
  controls: [
  { type: 'toggle', label: 'Front door', options: ['Locked', 'Unlocked'], on: true },
  { type: 'status', label: 'Camera', value: 'Live' },
  { type: 'level', label: 'Path lights', level: 40 },
  { type: 'status', label: 'Visitors today', value: '1' }]

},
{
  id: 'outdoor',
  name: 'Outdoor',
  summary: 'Night mode · 7 devices',
  image: images.outdoor,
  imageAlt: 'Villa terrace and infinity pool at blue hour',
  controls: [
  { type: 'level', label: 'Garden lights', level: 55 },
  { type: 'stepper', label: 'Pool', value: 27, unit: '°C', min: 20, max: 32 },
  { type: 'status', label: 'Irrigation', value: '06:00' },
  { type: 'toggle', label: 'Perimeter', options: ['Armed', 'Off'], on: true }]

}];