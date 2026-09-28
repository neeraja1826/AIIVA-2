import type { HeroHotspot, HeroRoom } from '../types/home';

// Coordinates are percentages of the hero image (16:9)
export const heroHub = { x: 86.6, y: 43.4 };

export const heroHotspots: HeroHotspot[] = [
{ id: 'lighting', label: 'Cove lighting', value: '78%', x: 44, y: 10, reveal: 0.06 },
{ id: 'curtains', label: 'Curtains', value: 'Open', x: 9, y: 42, reveal: 0.12 },
{ id: 'lamp', label: 'Ambient lamp', value: '40%', x: 61.2, y: 54, reveal: 0.18 },
{ id: 'entertainment', label: 'Entertainment', value: 'Ready', x: 70.8, y: 46, reveal: 0.24 }];


export const heroRooms: HeroRoom[] = [
{ id: 'living', name: 'Living Room', temp: 22, lights: 78, curtains: 'Open', security: 'Safe' },
{ id: 'kitchen', name: 'Kitchen', temp: 21, lights: 64, curtains: 'Open', security: 'Safe' },
{ id: 'bedroom', name: 'Bedroom', temp: 20, lights: 32, curtains: 'Closed', security: 'Safe' }];