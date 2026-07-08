import { Sparkles, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { specialtiesData } from '../data';

interface SpecialtiesProps {
  onSelectDish: (dishName: string) => void;
}

export default function Specialties({ onSelectDish }: SpecialtiesProps) {
  
  const handleOrderSpecialty = (dishName: string) => {
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
    <section id="especialidades" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full gold-light-beam pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Titles */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-3"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase font-semibold">
              Obras de Arte de la Casa
            </span>
            <Sparkles className="w-4 h-4 text-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl text-white mb-6 font-light tracking-tight"
          >
            Especialidades <span className="italic text-gold font-normal">Firma</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-0.5 bg-gold mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light"
          >
            Una selección exclusiva de platillos elaborados por nuestro chef ejecutivo, 
            donde convergen ingredientes premium de origen y técnicas de vanguardia internacional.
          </motion.p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialtiesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 card-gold-glow flex flex-col h-full transform transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-black/20 to-transparent opacity-80" />
                
                {/* Micro tag badge */}
                <span className="absolute top-4 left-4 bg-gold/90 backdrop-blur-md text-white font-sans text-[10px] tracking-widest uppercase font-semibold py-1.5 px-3 rounded-full shadow-lg">
                  {item.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow text-left">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-light group-hover:text-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="font-serif text-xl text-gold font-medium ml-2">
                    ${item.price}
                  </span>
                </div>

                <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed font-light flex-grow mb-6">
                  {item.description}
                </p>

                {/* Card CTA */}
                <button
                  onClick={() => handleOrderSpecialty(item.name)}
                  className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-gold border border-gold/40 hover:border-gold text-gold hover:text-white text-xs tracking-widest font-semibold py-3 px-4 rounded-full transition-all duration-300 group-hover:shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" />
                  RESERVAR & PROBAR
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
