import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData } from '../data';
import { Coffee, Utensils, Flame, Cake, ChefHat } from 'lucide-react';

interface FeaturedMenuProps {
  onSelectDish: (dishName: string) => void;
}

export default function FeaturedMenu({ onSelectDish }: FeaturedMenuProps) {
  const [activeCategory, setActiveCategory] = useState<'entradas' | 'fuertes' | 'postres' | 'bebidas'>('entradas');

  const categories = [
    { id: 'entradas', label: 'Entradas', icon: Utensils },
    { id: 'fuertes', label: 'Fuertes', icon: Flame },
    { id: 'postres', label: 'Postres', icon: Cake },
    { id: 'bebidas', label: 'Bebidas/Cocteles', icon: Coffee }
  ];

  const filteredItems = menuData.filter(item => item.category === activeCategory);

  const handleOrder = (dishName: string) => {
    onSelectDish(dishName);
    const reservationSection = document.getElementById('reservaciones');
    if (reservationSection) {
      const offset = reservationSection.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="menu" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative light beam */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full gold-light-beam pointer-events-none opacity-30" />
      <div className="absolute bottom-1/3 right-0 w-[450px] h-[450px] rounded-full gold-light-beam pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase font-semibold">
            Nuestra Carta
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white mt-3 mb-4 font-light tracking-tight">
            Menú <span className="italic text-gold font-normal">Destacado</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Nuestros platillos cambian según la estación del año para asegurar ingredientes de la más alta calidad. 
            Déjese consentir por nuestra sinfonía de texturas y aromas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-sans text-xs sm:text-sm tracking-wider uppercase font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gold text-white shadow-lg shadow-gold/20 scale-105'
                    : 'bg-brand-card text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Items Grid with Motion Transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-brand-card rounded-xl overflow-hidden border border-white/5 flex flex-col justify-between h-full hover:border-gold/30 transition-all duration-300"
              >
                <div>
                  {/* Zooming Image with tags */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-card/90 via-transparent to-transparent opacity-80" />
                    
                    {/* Tag badge if any */}
                    {item.tag && (
                      <span className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-md border border-gold/40 text-gold font-sans text-[9px] tracking-widest uppercase font-semibold py-1 px-3 rounded">
                        {item.tag}
                      </span>
                    )}

                    <div className="absolute bottom-4 right-4 bg-brand-card/90 backdrop-blur-sm px-3 py-1 rounded-md border border-white/5">
                      <p className="font-serif text-lg text-gold font-semibold">${item.price}</p>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 text-left flex flex-col space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl text-white font-medium group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 border-t border-white/5 mt-4 text-left">
                  <button
                    onClick={() => handleOrder(item.name)}
                    className="w-full mt-4 bg-transparent hover:bg-gold/10 text-white hover:text-gold font-sans text-xs tracking-widest uppercase font-semibold py-3 px-4 border border-white/10 hover:border-gold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ChefHat className="w-4 h-4 text-gold" />
                    SOLICITAR EN MESA
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
