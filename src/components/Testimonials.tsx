import { Star, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { testimonialsData, statsData } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full gold-light-beam pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <MessageSquare className="w-4 h-4 text-gold" />
            <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase font-semibold">
              Reseñas y Experiencias
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white mt-2 mb-4 font-light tracking-tight">
            La voz de nuestros <span className="italic text-gold font-normal">comensales</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            No hay mayor galardón para nuestro equipo que la lealtad y el testimonio de quienes nos honran con su visita.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-brand-card rounded-2xl p-8 border border-white/5 flex flex-col justify-between h-full hover:border-gold/30 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Rating stars */}
                <div className="flex space-x-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Comment quote */}
                <p className="font-sans text-gray-300 text-sm leading-relaxed font-light italic mb-8">
                  "{item.comment}"
                </p>
              </div>

              {/* Author details */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/40">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-serif text-white font-medium text-base">{item.name}</p>
                  <p className="font-sans text-gold text-[10px] tracking-wider uppercase font-semibold">{item.role}</p>
                  <p className="font-sans text-gray-500 text-[9px] uppercase mt-0.5">{item.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COUNTER OF SATISFIED CLIENTS & STATS */}
        <div className="border-t border-b border-white/5 py-12 bg-brand-bg/40 rounded-3xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <span className="font-serif text-4xl sm:text-5xl text-gold font-light tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans text-[10px] sm:text-xs tracking-widest text-gray-400 uppercase font-medium max-w-[150px]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
