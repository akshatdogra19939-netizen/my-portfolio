import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FooterSection from './components/FooterSection';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit'] min-h-screen selection:bg-purple-600 selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      <main className="w-full relative" style={{ overflowX: 'clip' }}>
        {/* 1. HERO SECTION */}
        <HeroSection onContactClick={openContactModal} />

        {/* 2. MARQUEE SECTION */}
        <MarqueeSection />

        {/* 3. ABOUT SECTION */}
        <AboutSection onContactClick={openContactModal} />

        {/* 4. SERVICES SECTION */}
        <ServicesSection />

        {/* FOOTER & DIRECT CONTACT */}
        <FooterSection onContactClick={openContactModal} />
      </main>

      {/* Global Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </div>
  );
}
