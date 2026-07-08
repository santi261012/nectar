import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center bg-brand-bg pt-16 overflow-hidden"
    >
      {/* Dark Ambient lighting in background */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full gold-light-beam pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full gold-light-beam pointer-events-none z-0 opacity-50" />

      {/* Abstract Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-gold"></span>
              <span className="font-sans text-xs sm:text-sm tracking-[0.4em] uppercase text-gold font-semibold">
                ALTA COCINA EXPERIMENTAL
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white leading-tight font-light tracking-tight">
              La mejor <br />
              <span className="font-serif italic font-normal text-gold">experiencia</span> <br />
              gastronómica.
            </h1>

            <p className="font-sans text-gray-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light">
              Donde la excelencia culinaria se fusiona con el misterio de la noche. 
              Descubra sabores atrevidos, técnicas vanguardistas y una atmósfera 
              diseñada para deleitar todos sus sentidos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('reservaciones')}
                className="group flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-white text-xs sm:text-sm tracking-widest font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-gold/10 hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                RESERVAR AHORA
              </button>
              
              <button
                onClick={() => handleScrollTo('menu')}
                className="group flex items-center justify-center gap-2 border border-white/20 hover:border-gold hover:bg-gold/5 text-white text-xs sm:text-sm tracking-widest font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                VER MENÚ
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </button>
            </div>

            {/* Quick trust micro-copy */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 w-full">
              <div>
                <p className="font-serif text-2xl text-gold">01</p>
                <p className="font-sans text-[10px] tracking-widest text-gray-400 uppercase">Ingredientes Orgánicos</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-gold">02</p>
                <p className="font-sans text-[10px] tracking-widest text-gray-400 uppercase">Sabor de Autor</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-gold">03</p>
                <p className="font-sans text-[10px] tracking-widest text-gray-400 uppercase">Cava Exclusiva</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Media (Parallax / Floating Salmon signature dish) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Soft glowing gold ring behind */}
            <div className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-gold/10 pointer-events-none z-0" />
            <div className="absolute inset-0 m-auto w-[310px] h-[310px] sm:w-[410px] sm:h-[410px] rounded-full border border-gold/5 pointer-events-none z-0" />
            
            {/* Animated Light beams */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-gold/10 rounded-full blur-3xl"
            />

            {/* Main dish floating wrapper */}
            <motion.div
              animate={{ 
                y: [-8, 8, -8],
                rotate: [0, 1.5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[430px] md:h-[430px]"
            >
              {/* Premium Salmon Food Photo with circular styling as in reference image */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold/30 p-2 sm:p-3 bg-brand-dark shadow-2xl relative group">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80" 
                    alt="Salmón Glaseado de Néctar" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle elegant vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Floating micro-badge: Signature */}
              <div className="absolute -top-2 -right-2 sm:top-4 sm:right-4 bg-brand-card/90 backdrop-blur-md border border-gold/40 text-gold font-sans text-[10px] tracking-[0.25em] uppercase font-semibold py-2 px-4 rounded-full shadow-xl">
                ★ FIRMA
              </div>

              {/* Floating micro-badge: Pairing */}
              <div className="absolute bottom-6 -left-6 sm:bottom-12 sm:left-2 bg-brand-card/90 backdrop-blur-md border border-white/5 text-gray-300 font-sans text-[9px] tracking-widest uppercase py-2 px-3 rounded-md shadow-xl max-w-[150px] text-center hidden sm:block">
                Recomendado con Chardonnay Reserva
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Slide-down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 pointer-events-none">
        <span className="font-sans text-[9px] tracking-[0.3em] text-gray-500 uppercase">Deslizar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-1.5 h-6 rounded-full bg-gold/50"
        />
      </div>
    </section>
  );
}
