import React from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Price', href: '#services' },
    { name: 'Contact', href: '#contact', onClick: onContactClick },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.onClick) {
      e.preventDefault();
      item.onClick();
      return;
    }
    if (item.href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full px-6 md:px-10 pt-6 md:pt-8 z-30 relative"
    >
      <nav aria-label="Main Navigation" className="w-full">
        <ul className="flex items-center justify-between w-full list-none p-0 m-0">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:ring-1 focus:ring-[#D7E2EA]/50 rounded-sm"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
