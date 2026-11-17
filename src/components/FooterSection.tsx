import React from 'react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import { ArrowUpRight, Mail, Instagram, Twitter, Linkedin, Globe, Sparkles } from 'lucide-react';

interface FooterSectionProps {
  onContactClick: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onContactClick }) => {
  const socials = [
    { name: 'X / Twitter', url: 'https://twitter.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Behance', url: 'https://behance.net' },
    { name: 'ArtStation', url: 'https://artstation.com' },
  ];

  return (
    <footer
      id="contact"
      aria-label="Contact and Footer"
      className="bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 pt-20 pb-12 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-between">
        {/* Top Callout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 font-medium mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Available for select commissions & projects</span>
            </div>
            <h2 className="hero-heading font-black uppercase text-[clamp(2.2rem,6vw,5rem)] leading-none">
              Have An Idea?
            </h2>
            <p className="text-[#D7E2EA]/70 font-light mt-3 text-base sm:text-lg max-w-lg">
              Let&apos;s turn abstract visions into striking 3D reality. Reach out and get a response within 24 hours.
            </p>
          </div>

          <div className="shrink-0">
            <ContactButton onClick={onContactClick} label="Get In Touch" />
          </div>
        </div>

        {/* Links & Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium mb-4">
              Navigation
            </span>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium mb-4">
              Capabilities
            </span>
            <ul className="space-y-2 text-sm font-light text-[#D7E2EA]/70">
              <li>3D Modeling & Assets</li>
              <li>Photorealistic Renders</li>
              <li>Motion Graphics</li>
              <li>Brand Identity</li>
              <li>Web Visual Design</li>
            </ul>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium mb-4">
              Connect
            </span>
            <ul className="space-y-2 text-sm font-light">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors group"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium mb-4">
              Direct Contact
            </span>
            <p className="text-sm text-[#D7E2EA]/80 font-light mb-2">
              akshat@3dcreator.design
            </p>
            <p className="text-xs text-[#D7E2EA]/50">
              Remote worldwide / Available for contract & freelance
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/50 gap-4">
          <p>© {new Date().getFullYear()} Akshat. All Rights Reserved. 3D Creator & Visual Designer.</p>
          <div className="flex items-center gap-6">
            <span>Crafted with Kanit &amp; Tailwind</span>
            <span>Smooth 60FPS Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
