import {
  SunriseIcon,
  FilmIcon,
  MoonIcon,
  PlaneIcon,
  BlindsIcon,
  SunIcon,
  ThermometerIcon,
  LightbulbIcon,
  TvIcon,
  LockIcon,
  ShieldCheckIcon,
  LightbulbOffIcon,
  GaugeIcon } from
'lucide-react';
import { images } from './images';
import type { Scene } from '../types/home';

export const scenes: Scene[] = [
{
  id: 'morning',
  name: 'Good Morning',
  trigger: '06:45 · Weekdays',
  icon: SunriseIcon,
  image: images.bedroom,
  steps: [
  { action: 'Curtains open', detail: 'Bedroom · Living room', value: '100%', offset: '00:00', icon: BlindsIcon },
  { action: 'Lights gradually brighten', detail: 'Warm white over 10 min', value: '0 → 80%', offset: '+00:05', icon: SunIcon },
  { action: 'Climate adjusts', detail: 'Whole home', value: '21.5°C', offset: '+00:10', icon: ThermometerIcon }]

},
{
  id: 'movie',
  name: 'Movie Night',
  trigger: 'Voice · “Movie night”',
  icon: FilmIcon,
  image: images.entertainment,
  steps: [
  { action: 'Lights dim', detail: 'Living room · Hallway', value: '12%', offset: '00:00', icon: LightbulbIcon },
  { action: 'Curtains close', detail: 'Living room', value: 'Closed', offset: '+00:02', icon: BlindsIcon },
  { action: 'Entertainment starts', detail: 'Screen · Surround audio', value: 'On', offset: '+00:04', icon: TvIcon }]

},
{
  id: 'night',
  name: 'Good Night',
  trigger: '23:00 · or bedside button',
  icon: MoonIcon,
  image: images.efficiency,
  steps: [
  { action: 'Lights turn off', detail: 'All rooms · path lights stay low', value: 'Off', offset: '00:00', icon: LightbulbOffIcon },
  { action: 'Doors lock', detail: 'Front · Garage · Terrace', value: 'Locked', offset: '+00:01', icon: LockIcon },
  { action: 'Security activates', detail: 'Night mode · Perimeter', value: 'Armed', offset: '+00:02', icon: ShieldCheckIcon }]

},
{
  id: 'away',
  name: 'Away',
  trigger: 'When the last person leaves',
  icon: PlaneIcon,
  image: images.outdoor,
  steps: [
  { action: 'Security activates', detail: 'Full arm · cameras recording', value: 'Armed', offset: '00:00', icon: ShieldCheckIcon },
  { action: 'Lights switch off', detail: 'All rooms', value: 'Off', offset: '+00:01', icon: LightbulbOffIcon },
  { action: 'Climate enters energy mode', detail: 'Setback until you return', value: '18°C', offset: '+00:02', icon: GaugeIcon }]

}];