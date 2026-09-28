export interface Director {
  name: string;
  designation: string;
  profile: string;
}

export interface ContactInfo {
  address: string;
  landmark: string;
  city: string;
  pin: string;
  phones: string[];
  whatsapp: string;
  email: string;
  workingHours: string;
  workingDays: string;
  socials: {
    instagram: string;
    youtube: string;
  };
}

export interface CompanyInfo {
  legalName: string;
  shortName: string;
  tagline: string;
  motto: string;
  slogan: string;
  introduction: string;
  detailedProfile: string;
  focus: string;
  directors: Director[];
  contact: ContactInfo;
  services: {
    title: string;
    description: string;
    applicable: boolean;
    badge?: string;
  }[];
}

export const companyData: CompanyInfo = {
  legalName: 'AIIVA AUTOMATION PRIVATE LIMITED',
  shortName: 'AIIVA Automation',
  tagline: 'SMART AND AFFORDABLE',
  motto: 'Smart Living. Simple Automation. Affordable Technology.',
  slogan: 'AIIVA Automation — Making Smart Living Accessible to Everyone.',
  introduction:
    'AIIVA Automation is a Hyderabad-based home and building automation company providing smart, reliable and affordable automation solutions for homes, apartments, villas, offices and commercial spaces.',
  detailedProfile:
    'We offer solutions for lighting, curtains, climate control, security, access control, smart switches, sensors and complete home automation—designed to make everyday living more comfortable, secure and energy-efficient.',
  focus: 'Quality products, professional installation, seamless integration and value-for-money automation.',
  directors: [
    {
      name: 'DONEPUDI KRISHNA SUMANTH',
      designation: 'Director',
      profile: 'Marketing, Sales & Strategic Business Growth'
    },
    {
      name: 'DONEPUDI SRISHA',
      designation: 'Director',
      profile: 'Administration, Operations & Brand Building'
    }
  ],
  contact: {
    address: '#504, The Legend, Palace Colony, Basheer Bagh',
    landmark: 'Palace Colony, Basheer Bagh',
    city: 'Hyderabad',
    pin: '500063',
    phones: ['9000006000', '9704300006'],
    whatsapp: '9000006000',
    email: 'AIIVAAUTOMATION@GMAIL.COM',
    workingHours: '9:00 AM TO 7:00 PM',
    workingDays: 'Monday to Saturday',
    socials: {
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com'
    }
  },
  services: [
    {
      title: 'Smart Home Automation',
      description:
        'Complete connected intelligence for luxury villas, apartments and penthouses. Control lighting, shading, entertainment and climate from your smartphone or feather-touch glass panels.',
      applicable: true,
      badge: 'Residential'
    },
    {
      title: 'Commercial Automation',
      description:
        'Smart meeting rooms, conference systems, energy tracking and central control for corporate offices, retail showrooms, co-working spaces and executive cabins.',
      applicable: true,
      badge: 'Commercial'
    },
    {
      title: 'Building Automation',
      description:
        'Centralized building management for residential societies, commercial complexes and high-rises—optimizing common area lighting, pumping systems, corridors and energy efficiency.',
      applicable: true,
      badge: 'Enterprise'
    },
    {
      title: 'IoT Solutions & Smart Switches',
      description:
        'State-of-the-art capacitive glass touch switches, smart dimmers, digital fan regulators, and smart sensors with real-time feedback and voice assistant compatibility.',
      applicable: true,
      badge: 'Hardware'
    },
    {
      title: 'Lighting & Curtain Automation',
      description:
        'Architectural circadian lighting scenes, dimming controls, and motorized silent curtain and blind tracks synchronised with daylight and room occupancy.',
      applicable: true,
      badge: 'Lifestyle'
    },
    {
      title: 'Retrofit & New Construction Solutions',
      description:
        'Zero civil damage retrofit modules that fit directly behind existing switchboards in 1 day, alongside turnkey automation engineering for new constructions.',
      applicable: true,
      badge: 'Turnkey'
    }
  ]
};
