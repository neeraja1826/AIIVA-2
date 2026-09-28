export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Retrofit' | 'Building';
  clientReq: string;
  solutionProvided: string;
  productsUsed: string[];
  image: string;
  testimonial?: {
    clientName: string;
    role: string;
    quote: string;
  };
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'project-jubilee-villa',
    title: 'Luxury Villa 5-BHK Complete Smart Living',
    location: 'Jubilee Hills, Hyderabad',
    type: 'Residential',
    clientReq:
      'Client required end-to-end luxury automation across 3 floors including cove lighting dimming, motorized double curtains, multi-zone VRV AC climate control, smart glass touch panels, and integrated home theatre automation.',
    solutionProvided:
      'Installed AIIVA Ultra Touch 8-Gang & 6-Gang glass panels across all rooms, synchronized with daylight sensors and astronomical clock for circadian lighting. Integrated centralized climate management with automated master "Away" and "Welcome Home" scenes.',
    productsUsed: [
      'AIIVA Ultra Touch 8-Gang + Dual Socket Panels',
      'AIIVA Smart Comfort Fan Controller Plates',
      'AIIVA Smart Gateway Hub',
      'Motorized Curtain Track Controllers',
      'Occupancy & Climate Sensors'
    ],
    image: '/bea51832-84d9-494a-b8ed-ec8293727ba6.jpg',
    testimonial: {
      clientName: 'K. V. Ramana Rao',
      role: 'Villa Owner, Jubilee Hills',
      quote:
        'AIIVA Automation delivered a truly flawless experience. The glass touch switches look like pure luxury on our walls, and managing the entire 3-storey villa from our phones is effortless.'
    }
  },
  {
    id: 'project-financial-district-apt',
    title: 'Modern 3-BHK High-Rise Retrofit Automation',
    location: 'Financial District, Gachibowli, Hyderabad',
    type: 'Retrofit',
    clientReq:
      'Homeowner wanted smart home features in a newly occupied apartment without breaking tiles or changing existing wiring concealed in walls.',
    solutionProvided:
      'Deployed 100% zero-civil-damage AIIVA Retrofit Touch Glass Panels and smart fan regulators into existing standard concealed gang boxes in under 24 hours. Configured voice controls with Alexa and customized sleep/wake scenes.',
    productsUsed: [
      'AIIVA Touch 4-Gang Smart Panels',
      'AIIVA Stepless Fan Regulators',
      'Smart Sensor Node',
      'AIIVA Mobile App Gateway'
    ],
    image: '/b8f7101e-d0c1-46bd-9e71-865e2fdc834a.jpg',
    testimonial: {
      clientName: 'Siddharth & Ananya Varma',
      role: 'Homeowners, Financial District',
      quote:
        'We were worried about wall chipping, but AIIVA completed the retrofit in just one afternoon with zero mess. Smart living at an unbelievably affordable price point!'
    }
  },
  {
    id: 'project-banjara-boardroom',
    title: 'Executive Corporate Boardroom & Smart Office Suite',
    location: 'Banjara Hills, Hyderabad',
    type: 'Commercial',
    clientReq:
      'Corporate client needed one-touch presentation scenes that dim lights, lower motorized projector screens/curtains, configure conference audio, and track power consumption.',
    solutionProvided:
      'Custom commercial automation system with centralized meeting presets ("Presentation", "Video Conf", "All Clear"), intelligent occupancy-based energy conservation, and remote web dashboard for facility managers.',
    productsUsed: [
      'AIIVA Commercial 8-Touch Panels',
      'Smart Scene Controllers',
      'Power Metering Nodes',
      'Access Control & Smart Locks'
    ],
    image: '/be00f9bf-7e2c-41e6-9e00-b47bea3fce3b.jpg',
    testimonial: {
      clientName: 'M. Sreenivasulu',
      role: 'Managing Director, Fintech Firm',
      quote:
        'The presentation automation saves us 10 minutes in every boardroom meeting. AIIVA Automation’s professional installation and support have been top notch.'
    }
  }
];
