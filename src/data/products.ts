export interface Product {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: { [key: string]: string };
  image: string;
  popular?: boolean;
  type: 'switch-8touch' | 'switch-fan' | 'switch-4gang' | 'switch-regulator' | 'gateway' | 'sensor';
}

export const productsData: Product[] = [
  {
    id: 'aiiva-8gang-dual-socket',
    name: 'AIIVA Ultra Touch 8-Gang + Dual Socket Panel',
    category: 'Smart Touch Switches',
    subtitle: '12-Module Black Tempered Crystal Glass Plate',
    description:
      'Engineered for master living rooms and executive cabins. Features 8 ultra-responsive capacitive feather-touch switches with dual universal 3-pin power sockets and subtle blue/white LED status illumination.',
    features: [
      '8 Independent capacitive touch switch channels',
      '2 Universal 3-pin power sockets with safety shutters',
      'Toughened scratch-resistant tempered crystal glass',
      'Dual-color LED backlighting with night-glow mode',
      'App, voice (Alexa/Google), touch and scene control',
      'Retrofit ready — fits standard 12M metal concealed back-box'
    ],
    specs: {
      'Panel Finish': 'Black Tempered Crystal Glass (2.5D Beveled)',
      'Touch Circuits': '8 Channels (Up to 1000W resistive load each)',
      'Socket Capacity': 'Dual Universal 6A/16A with Surge Protection',
      'Connectivity': 'Wi-Fi 2.4GHz + Zigbee 3.0 / BLE Mesh',
      'Operating Voltage': '110V - 240V AC, 50/60Hz',
      'Response Time': '< 0.02 seconds capacitive touch'
    },
    image: '/images/products/switch-8touch-dual-socket.png',
    popular: true,
    type: 'switch-8touch'
  },
  {
    id: 'aiiva-6gang-fan-dual-socket',
    name: 'AIIVA Smart Comfort 6-Touch + Fan Regulator + Dual Socket',
    category: 'Smart Touch Switches',
    subtitle: 'Integrated Digital Fan Speed Control & Dual Power Sockets',
    description:
      'The ultimate bedroom and hall automation switchboard. Combines 6 smart lighting/appliance touch switches, an integrated digital stepless fan speed regulator with visual speed feedback, and 2 universal sockets.',
    features: [
      '6 Smart capacitive touch lighting channels',
      'Dedicated digital stepless fan speed regulator with Up/Down buttons & icon',
      'Dual high-grade universal power sockets',
      'Silent capacitor-based hum-free fan speed regulation',
      'Schedule timers, memory recall after power recovery',
      'Flame-retardant polycarbonate back housing'
    ],
    specs: {
      'Panel Finish': 'Glossy Black Scratch-Proof Crystal Glass',
      'Lighting Circuits': '6 Touch Gangs (LED, CFL, Halogen, Fans)',
      'Fan Controller': 'Digital 5-Speed Stepless Hum-Free Regulator',
      'Sockets': '2 Universal 6/16A Sockets',
      'Connectivity': 'Smart Cloud, Mobile App, Voice Assistants',
      'Operating Temp': '-10°C to +55°C'
    },
    image: '/images/products/switch-fan-dual-socket.png',
    popular: true,
    type: 'switch-fan'
  },
  {
    id: 'aiiva-4gang-touch-switch',
    name: 'AIIVA Touch 4-Gang Smart Switch Panel',
    category: 'Smart Touch Switches',
    subtitle: 'Compact 4-Channel Capacitive Glass Touch Plate',
    description:
      'Sleek square touch panel designed for bedrooms, dining areas, balconies and corridors. Offers 4 smart lighting points with capacitive touch feedback, remote mobile control, and scene memory.',
    features: [
      '4 Smart touch channels in a compact square footprint',
      'Feather-light capacitive touch with instantaneous trigger',
      'Crystal glass surface with waterproof and shockproof insulation',
      'Soft ambient LED indicators for effortless night location',
      'Direct replacement for standard 2M / 4M electrical switchboards'
    ],
    specs: {
      'Panel Finish': 'Toughened Glass Plate (Black)',
      'Circuits': '4 Independent Smart Channels',
      'Max Load': '600W per channel',
      'Insulation': '100% Shockproof Glass Front',
      'Control Methods': 'Touch / Mobile App / Voice / Multi-way Two-way Sync'
    },
    image: '/images/products/switch-4gang-touch.png',
    type: 'switch-4gang'
  },
  {
    id: 'aiiva-fan-speed-regulator',
    name: 'AIIVA Stepless Smart Fan Touch Regulator',
    category: 'Smart Fan Controllers',
    subtitle: 'Dedicated Precision Fan Speed Touch Controller',
    description:
      'Say goodbye to noisy mechanical fan knobs. AIIVA’s digital fan touch regulator delivers smooth, humming-free speed regulation from 1 to 5 with intuitive Up/Down touch arrows and illuminated fan status indicator.',
    features: [
      'Digital capacitive touch Up/Down speed increment',
      'Zero hum, silent electronic speed modulation',
      'Real-time fan status backlighting',
      'Set fan sleep timers and smart temperature-triggered speed curves',
      'Compact 2-Module modular fitment'
    ],
    specs: {
      'Panel Finish': 'Toughened Black Glass with Backlit Fan Glyph',
      'Speed Steps': '5-Speed Electronic Stepless Control',
      'Max Fan Power': '150W Ceiling / Exhaust Fans',
      'Safety': 'Built-in thermal overload and surge fuse',
      'Automation': 'Works with Room Temperature sensors for auto speed adjust'
    },
    image: '/images/products/switch-fan-regulator.png',
    type: 'switch-regulator'
  }
];

export const productCategories = [
  'All Products',
  'Smart Touch Switches',
  'Smart Fan Controllers',
  'Sensors & Detectors',
  'Controllers & Gateways'
];
