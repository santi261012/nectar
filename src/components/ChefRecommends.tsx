import { Wine, Sparkles, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { chefRecommendsData } from '../data';

interface ChefRecommendsProps {
  onSelectDish: (dishName: string) => void;
}

export default function ChefRecommends({ onSelectDish }: ChefRecommendsProps) {

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
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full gold-light-beam pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase font-semibold">
            Recomendaciones de Autor
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white mt-3 mb-4 font-light tracking-tight">
            Platillos <span className="italic text-gold font-normal">Sugeridos</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Recetas únicas diseñadas para lograr un maridaje perfecto con etiquetas seleccionadas de nuestra cava subterránea.
          </p>
        </div>

        {/* Large Recommendations Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {chefRecommendsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between h-full hover:border-gold/30 hover:shadow-2xl transition-all duration-500 ease-out transform"
            >
              <div>
                {/* Image Section */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Elegant warm gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-black/10 to-transparent opacity-90" />
                  
                  {/* Floating pricing badge */}
                  <div className="absolute bottom-6 right-6 bg-gold text-white font-serif text-lg font-medium py-1.5 px-4 rounded-full shadow-lg">
                    ${item.price}
                  </div>

                  {/* Micro label */}
                  <div className="absolute top-6 left-6 flex items-center gap-1.5 bg-brand-dark/80 backdrop-blur-md border border-gold/40 text-gold font-sans text-[10px] tracking-widest uppercase font-semibold py-1.5 px-3 rounded-md">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    CHEF RECOMIENDA
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 text-left space-y-4">
                  <h3 className="font-serif text-2xl text-white font-light group-hover:text-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Pairing recommendation box */}
                  <div className="flex items-start gap-3 bg-brand-dark/50 border border-white/[0.03] rounded-xl p-4 mt-6">
                    <Wine className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-[11px] sm:text-xs text-gold/90 font-medium italic">
                      {item.pairing}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0 text-left">
                <button
                  onClick={() => handleOrder(item.name)}
                  className="w-full bg-gold hover:bg-gold-hover text-white text-xs tracking-widest font-semibold py-4 px-4 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 group/btn"
                >
                  <Plus className="w-4 h-4 text-white group-hover/btn:rotate-90 transition-transform" />
                  RESERVAR EXPERIENCIA
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
