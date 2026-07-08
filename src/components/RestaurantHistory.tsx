import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, Heart, Sparkles, X } from 'lucide-react';

export default function RestaurantHistory() {
  const [showChefModal, setShowChefModal] = useState(false);

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full gold-light-beam pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text narrative */}
          <div className="lg:col-span-6 text-left flex flex-col space-y-6">
            <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase font-semibold">
              Nuestra Esencia
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight leading-tight">
              Una herencia de <br />
              <span className="italic text-gold font-normal">sabor y distinción</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold" />
            
            <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Néctar nació como un santuario gastronómico secreto para quienes buscan 
              ir más allá de lo cotidiano. Nuestra filosofía se centra en redefinir la relación 
              entre la tierra, el fuego y el comensal, transformando ingredientes autóctonos 
              en momentos memorables.
            </p>
            
            <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              Cada receta es fruto de meses de rigurosa experimentación culinaria, donde el respeto al 
              ingrediente orgánico y la armonía visual de cada emplatado se orquestan bajo el liderazgo 
              de nuestro galardonado Chef Ejecutivo, Santiago Altamirano.
            </p>

            {/* List of values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-3 bg-brand-dark/55 border border-white/5 rounded-xl p-4">
                <Award className="w-8 h-8 text-gold flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif text-white font-medium text-sm">Artesanal</span>
                  <span className="font-sans text-[10px] text-gray-400">Hecho a mano</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-brand-dark/55 border border-white/5 rounded-xl p-4">
                <ShieldCheck className="w-8 h-8 text-gold flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif text-white font-medium text-sm">Sustentable</span>
                  <span className="font-sans text-[10px] text-gray-400">Huerto propio</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-brand-dark/55 border border-white/5 rounded-xl p-4">
                <Heart className="w-8 h-8 text-gold flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-serif text-white font-medium text-sm">Pasión</span>
                  <span className="font-sans text-[10px] text-gray-400">Amor al arte</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setShowChefModal(true)}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-gold/10 text-white hover:text-gold font-sans text-xs tracking-widest uppercase font-semibold py-4 px-8 border border-white/10 hover:border-gold rounded-full transition-all duration-300 shadow-md"
              >
                CONOCER AL CHEF
                <Sparkles className="w-4 h-4 text-gold" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium interior photograph with layered border elements */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Elegant glowing background ring */}
            <div className="absolute w-[80%] h-[80%] rounded-2xl border border-gold/10 -top-4 -left-4 pointer-events-none z-0" />
            <div className="absolute w-[80%] h-[80%] rounded-2xl border border-gold/10 -bottom-4 -right-4 pointer-events-none z-0" />

            <div className="relative z-10 w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
                alt="Salón Privado de Néctar"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Warm dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              
              {/* Inner content overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <p className="font-serif text-white text-xl sm:text-2xl font-light mb-1">El Salón Obsidiana</p>
                <p className="font-sans text-gold text-xs tracking-widest uppercase">Capacidad para 45 comensales • Reserva requerida</p>
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-card/95 backdrop-blur-md border border-gold/30 p-5 rounded-xl shadow-xl hidden md:block text-left max-w-[200px]">
              <p className="font-serif text-3xl text-gold font-bold leading-none">100%</p>
              <p className="font-sans text-[11px] font-semibold text-white tracking-wider uppercase mt-2">Privacidad & Confort</p>
              <p className="font-sans text-[10px] text-gray-400 mt-1">Cavas climatizadas y acústica diseñada para conversaciones íntimas.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Chef Bio Interactive Modal */}
      <AnimatePresence>
        {showChefModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-card border border-gold/30 max-w-2xl w-full rounded-2xl overflow-hidden relative shadow-2xl"
            >
              <button
                onClick={() => setShowChefModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gold bg-black/40 hover:bg-black/60 p-2 rounded-full transition-all z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto relative">
                  <img
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80"
                    alt="Chef Santiago Altamirano"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent md:hidden" />
                </div>
                
                <div className="p-6 sm:p-8 text-left flex flex-col justify-center space-y-4">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase font-bold">Chef Ejecutivo</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">Santiago Altamirano</h3>
                  <div className="w-12 h-0.5 bg-gold" />
                  
                  <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                    "Para mí, la gastronomía no es alimentar el cuerpo; es conmover el alma. Busco plasmar en cada plato un fragmento de la memoria colectiva, respetando los ciclos de la naturaleza y empujando las fronteras del sabor con elegancia."
                  </p>
                  
                  <p className="font-sans text-gray-400 text-[11px] leading-relaxed">
                    Formado en San Sebastián e influenciado por la alta cocina japonesa, Santiago ha liderado cocinas de renombre antes de fundar Néctar en el corazón de nuestra ciudad.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
