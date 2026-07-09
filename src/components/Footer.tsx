import React, { useState } from 'react';
import { Wine, Instagram, Facebook, Calendar, Mail, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    // Simulate API newsletter signup
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg text-gray-400 font-sans border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      {/* Subtle light leak in corner */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full gold-light-beam pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 text-left">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#inicio" className="flex items-center gap-2 group">
              <span className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-brand-dark group-hover:border-gold transition-colors">
                <Wine className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-widest text-white leading-none font-semibold">NÉCTAR</span>
                <span className="font-sans text-[9px] tracking-[0.3em] text-gold uppercase">ALTA COCINA</span>
              </div>
            </a>
            
            <p className="text-sm font-light leading-relaxed text-gray-300">
              Un santuario gastronómico diseñado para redefinir sus sentidos en una atmósfera de elegancia, 
              sofisticación y misterio nocturno. Sabores que cautivan y memorias eternas.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-dark hover:bg-gold hover:text-white border border-white/5 hover:border-gold flex items-center justify-center transition-all duration-300 text-gray-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-dark hover:bg-gold hover:text-white border border-white/5 hover:border-gold flex items-center justify-center transition-all duration-300 text-gray-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://tripadvisor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-dark hover:bg-gold hover:text-white border border-white/5 hover:border-gold flex items-center justify-center transition-all duration-300 font-serif text-xs font-bold text-gray-300"
                aria-label="Tripadvisor"
              >
                TA
              </a>
              <a 
                href="https://guide.michelin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-dark hover:bg-gold hover:text-white border border-white/5 hover:border-gold flex items-center justify-center transition-all duration-300 text-gold hover:text-white font-sans text-lg font-bold"
                aria-label="Michelin Guide"
              >
                ★
              </a>
            </div>
          </div>

          {/* Column 2: Working Hours */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="font-serif text-white text-lg font-light tracking-wide">Horarios</h4>
            <div className="w-8 h-0.5 bg-gold" />
            <ul className="space-y-3 font-sans text-xs tracking-wide uppercase">
              <li className="flex flex-col">
                <span className="text-gray-500 text-[10px]">Martes a Jueves</span>
                <span className="text-white font-medium mt-1">14:00 - 23:00 Hrs</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-500 text-[10px]">Viernes y Sábado</span>
                <span className="text-white font-medium mt-1">14:00 - 01:00 Hrs</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-500 text-[10px]">Domingo</span>
                <span className="text-white font-medium mt-1">13:00 - 18:00 Hrs</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-500 text-[10px]">Lunes</span>
                <span className="text-gold font-semibold mt-1">Cerrado</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="font-serif text-white text-lg font-light tracking-wide">Contacto</h4>
            <div className="w-8 h-0.5 bg-gold" />
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Campos Elíseos 425,<br />Polanco, CDMX, 11560</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:experiencias@nectar-gourmet.com" className="hover:text-gold transition-colors">experiencias@nectar-gourmet.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Reserva Telefónica</span>
                <span className="text-white text-base mt-1 font-serif">+52 55 3578 4127</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-white text-lg font-light tracking-wide">Suscripción VIP</h4>
            <div className="w-8 h-0.5 bg-gold" />
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Únase a nuestra lista privada para recibir invitaciones a cenas maridaje de autor, menús especiales y primicias de temporada.
            </p>

            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form 
                  key="subscribe-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe} 
                  className="flex flex-col gap-2 pt-2"
                >
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Su correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-brand-card text-white placeholder-gray-600 border border-white/5 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-gold font-sans text-xs transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full bg-gold hover:bg-gold-hover disabled:bg-gold/40 text-white flex items-center justify-center transition-all duration-300"
                      aria-label="Suscribirse"
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="subscribe-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gold/10 border border-gold/40 rounded-xl p-3 flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <p className="font-sans text-[11px] text-white">
                    ¡Registrado con éxito! Revise su bandeja pronto.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Legal and Copyright bottom band */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light gap-4 text-center md:text-left">
          <div>
            <p>© {currentYear} Néctar Alta Cocina S.A. de C.V. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#inicio" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#inicio" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#inicio" className="hover:text-white transition-colors">Políticas de Vestimenta</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
