import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    // Show quick pulse notification after 4 seconds to grab attention organically
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const encodedText = encodeURIComponent(messageText);
    const phoneNumber = '525584219900'; // mockup luxury number
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    setMessageText('');
    setIsOpen(false);
  };

  const selectQuickMessage = (text: string) => {
    const encodedText = encodeURIComponent(text);
    const phoneNumber = '525584219900';
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Interactive Chat Popup Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-brand-card border border-gold/30 rounded-2xl w-[320px] shadow-2xl overflow-hidden mb-4 text-left"
          >
            {/* Header */}
            <div className="bg-brand-dark p-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold flex items-center justify-center relative">
                  <User className="w-5 h-5 text-gold" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-brand-dark" />
                </div>
                <div>
                  <p className="font-serif text-white text-sm font-medium">Asistencia VIP Néctar</p>
                  <p className="font-sans text-[10px] text-emerald-400">En línea • Responde al instante</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-full bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-4 max-h-[220px] overflow-y-auto bg-brand-bg/50">
              <div className="bg-brand-dark/90 rounded-2xl p-3 border border-white/5 max-w-[85%]">
                <p className="font-sans text-xs text-gray-300 leading-relaxed">
                  ¡Hola! Bienvenido a la atención digital de <strong className="text-gold font-medium">Néctar Alta Cocina</strong>. 
                  ¿En qué podemos asistirle hoy?
                </p>
                <span className="font-sans text-[8px] text-gray-500 block text-right mt-1">20:46</span>
              </div>

              {/* Quick options */}
              <div className="space-y-1.5 pt-2">
                <p className="font-sans text-[9px] tracking-wider text-gray-500 uppercase font-semibold mb-1">PREGUNTAS FRECUENTES</p>
                <button
                  onClick={() => selectQuickMessage('Hola, me gustaría consultar la disponibilidad para eventos privados o cenas corporativas en el Salón Obsidiana.')}
                  className="block w-full text-left bg-brand-dark hover:bg-gold/10 text-gray-300 hover:text-gold border border-white/5 hover:border-gold/30 rounded-lg p-2 font-sans text-[11px] transition-all"
                >
                  🥂 Eventos Privados / Grupos
                </button>
                <button
                  onClick={() => selectQuickMessage('Hola, ¿cuentan con menús con opciones veganas o libres de gluten integrados en su carta actual?')}
                  className="block w-full text-left bg-brand-dark hover:bg-gold/10 text-gray-300 hover:text-gold border border-white/5 hover:border-gold/30 rounded-lg p-2 font-sans text-[11px] transition-all"
                >
                  🌿 Opciones de Alérgenos / Vegano
                </button>
              </div>
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSend} className="p-3 bg-brand-dark flex gap-2 border-t border-white/5">
              <input
                type="text"
                placeholder="Escriba su mensaje..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="flex-grow bg-brand-card text-white border border-white/10 rounded-xl py-2 px-3 focus:outline-none focus:border-gold font-sans text-xs"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-hover text-white p-2 rounded-xl transition-all flex items-center justify-center shrink-0"
                aria-label="Enviar"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating pulsing notice */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-brand-card border border-gold/30 text-white font-sans text-[11px] font-medium tracking-wide py-2.5 px-4 rounded-xl shadow-xl mb-3 flex items-center gap-2 relative max-w-[250px] text-left"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-ping flex-shrink-0" />
            ¿Tiene alguna consulta VIP? Escríbanos aquí.
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowNotification(false);
              }}
              className="text-gray-400 hover:text-white ml-1 text-xs"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="w-14 h-14 rounded-full bg-gold hover:bg-gold-hover text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer"
        aria-label="Abrir asistencia WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-6 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-dark border-2 border-gold text-white font-sans text-[8px] flex items-center justify-center font-bold">
          1
        </span>
      </button>

    </div>
  );
}
