import { images } from './images';
import type { Problem } from '../types/home';

export const problems: Problem[] = [
{
  id: 'lights',
  title: 'Lights left on',
  stat: '4 rooms lit · nobody home',
  fix: 'Presence sensing switches off empty rooms.',
  image: images.lighting,
  imageAlt: 'Open-plan living space with every light switched on'
},
{
  id: 'climate',
  title: 'Temperature constantly adjusted',
  stat: '11 manual changes today',
  fix: 'Climate learns your comfort and adjusts ahead of you.',
  image: images.climate,
  imageAlt: 'Thermostat panel on a dark plaster wall'
},
{
  id: 'remotes',
  title: 'Multiple remotes',
  stat: '5 remotes · 3 apps',
  fix: 'One interface for every screen and speaker — or just your voice.',
  image: images.entertainment,
  imageAlt: 'Private home theatre with reclining seats'
},
{
  id: 'security',
  title: 'Security systems disconnected',
  stat: 'Locks, cameras, alarm — separate',
  fix: 'Locks, cameras and alarm act as one system.',
  image: images.security,
  imageAlt: 'Smart lock and intercom on a villa facade at night'
},
{
  id: 'curtains',
  title: 'Curtains manually operated',
  stat: 'Opened by hand, twice a day',
  fix: 'Curtains follow sunrise, heat and privacy.',
  image: images.curtains,
  imageAlt: 'Tall window with sheer curtains at blue hour'
}];