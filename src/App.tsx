import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/hero/Hero';
import { Problem } from './components/problem/Problem';
import { Ecosystem } from './components/ecosystem/Ecosystem';
import { ProductShowcase } from './components/products/ProductShowcase';
import { SmartRooms } from './components/rooms/SmartRooms';
import { Automates } from './components/automates/Automates';
import { Scenes } from './components/scenes/Scenes';
import { ControlCenter } from './components/control/ControlCenter';
import { HowItWorks } from './components/HowItWorks';
import { ProjectsShowcase } from './components/projects/ProjectsShowcase';
import { AboutCompany } from './components/about/AboutCompany';
import { Benefits } from './components/benefits/Benefits';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { ThemeProvider } from './hooks/useTheme';

function AppContent() {
  useSmoothScroll();

  return (
    <div className="min-h-screen w-full bg-ink font-sans text-paper antialiased [overflow-x:clip] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Ecosystem />
        <ProductShowcase />
        <SmartRooms />
        <Automates />
        <Scenes />
        <ControlCenter />
        <HowItWorks />
        <ProjectsShowcase />
        <AboutCompany />
        <Benefits />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
export default App;