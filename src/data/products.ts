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
    id: 'aiiva-8gang-fan-single-socket',
    name: 'AIIVA Grand Master 8-Touch + Fan Controller + Socket Panel',
    category: 'Smart Touch Switches',
    subtitle: 'All-in-One Master Living Room & Suite Automation Center',
    description:
      'The ultimate all-in-one smart switchboard. Combines 8 capacitive lighting touch switches, a built-in 5-speed digital stepless fan speed controller with Up/Down buttons, and a heavy-duty universal power socket on a single luxury glass panel.',
    features: [
      '8 Independent capacitive touch lighting channels',
      'Built-in 5-speed digital stepless fan speed controller with backlit fan glyph',
      '1 Universal 16A heavy-duty power socket with child safety shutter',
      'Comprehensive room automation in a single unified master switchboard',
      'Multi-way 2-way virtual sync without running extra physical wiring',
      'Voice, app, schedule timers, and room scene automation ready'
    ],
    specs: {
      'Panel Finish': 'Premium 2.5D Beveled Black Crystal Glass',
      'Lighting Control': '8 Independent Channels (800W each)',
      'Fan Regulator': '5-Speed Hum-Free Electronic Stepless (150W)',
      'Power Socket': '1 Universal 6A/16A Heavy Duty (Surge Protected)',
      'Connectivity': 'Wi-Fi 2.4GHz + Zigbee 3.0 & BLE Mesh',
      'Operating Voltage': '110V - 240V AC, 50/60Hz'
    },
    image: '/images/products/switch-8gang-fan-single-socket.png',
    popular: true,
    type: 'switch-8touch'
  },
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
    id: 'aiiva-8gang-single-socket',
    name: 'AIIVA Executive 8-Gang Touch + Single 16A Socket Panel',
    category: 'Smart Touch Switches',
    subtitle: '8 Smart Touch Channels with Heavy-Duty 16A Power Outlet',
    description:
      'Tailored for entertainment centers, kitchen counters, and bedroom utility boards requiring extensive lighting control combined with a dedicated heavy-duty 16A universal power outlet.',
    features: [
      '8 Smart capacitive touch lighting channels',
      '1 Universal 16A/6A power socket with internal child-safety shutter',
      'Scratch-proof, waterproof tempered glass exterior',
      'Flame-retardant industrial polycarbonate rear housing',
      'Independent socket control with surge suppression',
      'Supports smart scenes, group triggers, and remote automation'
    ],
    specs: {
      'Panel Finish': 'Black Scratch-Resistant Crystal Glass',
      'Touch Channels': '8 Gangs (LED, Chandeliers, Downlights)',
      'Power Socket': '1 Universal 6A/16A (Up to 3500W load)',
      'Operating Voltage': '110V - 240V AC, 50/60Hz',
      'Control Protocol': 'Wi-Fi 2.4GHz + Local BLE / Mesh',
      'Dimensions': 'Fits standard 8M/12M modular back-boxes'
    },
    image: '/images/products/switch-8gang-single-socket.png',
    type: 'switch-8touch'
  },
  {
    id: 'aiiva-8gang-pure-touch',
    name: 'AIIVA Ultra Touch 8-Gang Pure Switch Panel',
    category: 'Smart Touch Switches',
    subtitle: '8-Channel Dedicated Capacitive Glass Touch Plate',
    description:
      'Designed for multi-light zone control in spacious living halls, corridors, conference rooms, and commercial offices. Controls 8 independent lighting circuits with ultra-sensitive capacitive feather touch.',
    features: [
      '8 Independent capacitive touch lighting channels',
      'Slim horizontal plate form-factor with clean all-touch front',
      'Scratch-resistant tempered crystal glass with beveled edge',
      'Dual-color LED backlighting with night-glow locator',
      'Full app, voice assistant (Alexa/Google), touch and automation routines',
      'Seamless retrofit into standard electrical concealed metal boxes'
    ],
    specs: {
      'Panel Finish': 'Black Tempered Crystal Glass (2.5D Edge)',
      'Circuits': '8 Smart Touch Channels (up to 800W per channel)',
      'Connectivity': 'Wi-Fi 2.4GHz + Zigbee 3.0 / BLE Mesh',
      'Operating Voltage': '110V - 240V AC, 50/60Hz',
      'Response Time': '< 0.02 seconds capacitive touch',
      'Memory': 'Power outage status recall & state memory'
    },
    image: '/images/products/switch-8gang-pure-touch.png',
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
    id: 'aiiva-4gang-fan-touch',
    name: 'AIIVA Comfort 4-Gang Touch + Fan Controller Panel',
    category: 'Smart Fan Controllers',
    subtitle: 'Compact 4-Light Touch + Stepless Digital Fan Regulator',
    description:
      'The optimal bedroom and study room automation board. Integrates 4 smart capacitive touch lighting switches alongside a dedicated 5-speed digital stepless fan regulator with Up/Down touch controls and visual glyph indicator.',
    features: [
      '4 Independent capacitive touch lighting gangs',
      'Integrated digital 5-speed stepless hum-free fan regulator',
      'Intuitive Up/Down fan speed adjustment arrows with illuminated fan glyph',
      'Zero electrical humming noise with advanced capacitor regulation',
      'Direct timer scheduling & sleep temperature curve automation',
      'Shockproof crystal glass front plate'
    ],
    specs: {
      'Panel Finish': 'Toughened Black Glass with Backlit Glyphs',
      'Lighting Channels': '4 Capacitive Gangs (600W max per channel)',
      'Fan Speed Control': '5-Step Electronic Stepless (150W max)',
      'Connectivity': 'Wi-Fi + BLE Mesh / Zigbee Integration',
      'Voice & App': 'Google Home, Amazon Alexa, AIIVA Mobile App',
      'Safety': 'Surge protection and thermal overload cut-off'
    },
    image: '/images/products/switch-4gang-fan-touch.png',
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
