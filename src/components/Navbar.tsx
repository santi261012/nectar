import React, { useState, useEffect } from 'react';
import { Menu, X, Wine } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Menú', href: '#menu' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Reservaciones', href: '#reservaciones' },
    { name: 'Galería', href: '#galeria' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section highlights
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = 'inicio';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 80; // height of navbar roughly
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#inicio" className="flex items-center gap-2 group">
              <span className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-brand-dark group-hover:border-gold transition-all duration-300">
                <Wine className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-widest text-white leading-none font-semibold">NÉCTAR</span>
                <span className="font-sans text-[9px] tracking-[0.3em] text-gold uppercase">ALTA COCINA</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                    isActive ? 'text-gold font-medium' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Book table CTA */}
          <div className="hidden md:block">
            <a
              href="#reservaciones"
              onClick={(e) => handleScrollTo(e, '#reservaciones')}
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out border border-gold rounded-full shadow-md group bg-transparent text-xs tracking-widest uppercase"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gold group-hover:translate-x-0 ease">
                RESERVAR MESA
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-gold transition-all duration-300 transform group-hover:translate-x-full ease">
                RESERVAR MESA
              </span>
              <span className="relative invisible">RESERVAR MESA</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-gold focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-white/5 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="block px-3 py-2 text-base font-serif tracking-wider text-gray-200 hover:text-gold hover:bg-white/5 rounded-lg transition-all"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#reservaciones"
                  onClick={(e) => handleScrollTo(e, '#reservaciones')}
                  className="block w-full text-center bg-gold hover:bg-gold-hover text-white font-sans text-xs font-semibold py-3 px-4 rounded-full tracking-widest uppercase transition-all duration-300"
                >
                  RESERVAR MESA
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
