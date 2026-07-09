import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, MapPin, Clock, FileText, CheckCircle2, Award, Sparkles, Loader2 } from 'lucide-react';
import { ReservationData } from '../types';

interface ReservationFormProps {
  selectedDish: string;
  onClearDish: () => void;
}

export default function ReservationForm({ selectedDish, onClearDish }: ReservationFormProps) {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '20:00',
    guests: 2,
    specialRequests: '',
    seatingPreference: 'main'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  // If a dish is selected from menu/specialties, pre-populate in special requests
  useEffect(() => {
    if (selectedDish) {
      setFormData(prev => ({
        ...prev,
        specialRequests: `Me encantaría probar la recomendación: "${selectedDish}". ${prev.specialRequests}`
      }));
    }
  }, [selectedDish]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const adjustGuests = (amount: number) => {
    setFormData(prev => {
      const newCount = prev.guests + amount;
      if (newCount >= 1 && newCount <= 12) {
        return { ...prev, guests: newCount };
      }
      return prev;
    });
  };

  const getWhatsAppMessage = (codeToUse: string) => {
    const zoneName = seatingNames[formData.seatingPreference as keyof typeof seatingNames] || formData.seatingPreference;
    return `¡Hola! Me gustaría confirmar una reservación:

👤 *Nombre:* ${formData.name}
📞 *Teléfono:* ${formData.phone}
✉️ *Email:* ${formData.email}
📅 *Fecha:* ${formData.date}
⏰ *Hora:* ${formData.time} Hrs
👥 *Comensales:* ${formData.guests} Persona/s
📍 *Zona:* ${zoneName}
🎟️ *Código de Referencia:* ${codeToUse}
📝 *Anotaciones:* ${formData.specialRequests || 'Ninguna'}`;
  };

  const handleSendToWhatsApp = (codeToUse: string) => {
    const message = getWhatsAppMessage(codeToUse);
    const encodedText = encodeURIComponent(message);
    const phoneNumber = '525535784127';
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    setIsLoading(true);
    const generatedCode = `NEC-${Math.floor(1000 + Math.random() * 9000)}`;

    // Simulate luxury API call with loader
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setReservationCode(generatedCode);
      onClearDish(); // clear shared state once booked
      
      // Auto-open WhatsApp with the pre-formatted reservation text
      handleSendToWhatsApp(generatedCode);
    }, 1500);
  };

  const seatingNames = {
    main: 'Salón Principal (Obsidiana)',
    terrace: 'La Terraza del Atardecer',
    vault: 'Cava Privada Subterránea',
    bar: 'Oyster & Cocktail Bar'
  };

  return (
    <section id="reservaciones" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full gold-light-beam pointer-events-none opacity-20" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full gold-light-beam pointer-events-none opacity-25" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase font-semibold">
            Planifique su visita
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white mt-3 mb-4 font-light tracking-tight">
            Reservar <span className="italic text-gold font-normal">Mesa</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Asegure su mesa en nuestro salón principal o salas privadas. Recomendamos realizar su reserva 
            con un mínimo de 48 horas de anticipación.
          </p>
        </div>

        <div className="bg-brand-dark rounded-3xl border border-white/5 shadow-2xl overflow-hidden relative">
          
          {/* Subtle gold line on top border */}
          <div className="h-1.5 w-full bg-gradient-to-r from-gold/50 via-gold to-gold/50" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="p-6 sm:p-12 space-y-8 text-left"
              >
                {/* Selected dish notice banner */}
                {selectedDish && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gold/10 border border-gold/40 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-gold flex-shrink-0 animate-pulse" />
                      <p className="font-sans text-xs sm:text-sm text-white font-light">
                        Has seleccionado probar: <strong className="text-gold font-semibold">{selectedDish}</strong>. 
                        Hemos añadido esta preferencia a tu solicitud.
                      </p>
                    </div>
                    <button 
                      type="button" 
                      onClick={onClearDish}
                      className="text-gray-400 hover:text-white font-sans text-xs px-2"
                    >
                      Quitar
                    </button>
                  </motion.div>
                )}

                {/* Grid for Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs tracking-widest text-gray-400 uppercase font-medium">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ej. Alejandro Soler"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-brand-card/70 text-white placeholder-gray-600 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-gold font-sans text-sm transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs tracking-widest text-gray-400 uppercase font-medium">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-brand-card/70 text-white placeholder-gray-600 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-gold font-sans text-sm transition-colors"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs tracking-widest text-gray-400 uppercase font-medium">
                      Teléfono Móvil *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+52 55 1234 5678"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-brand-card/70 text-white placeholder-gray-600 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-gold font-sans text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Grid for Reservation Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  
                  {/* Date Picker */}
                  <div className="space-y-2 flex flex-col">
                    <label className="font-sans text-xs tracking-widest text-gray-400 uppercase font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      Fecha de Reserva *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-brand-card/70 text-white border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-gold font-sans text-sm transition-colors cursor-pointer"
                    />
                  </div>

                  {/* Shift Time Picker */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs tracking-widest text-gray-400 uppercase font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold" />
                      Hora de Turno *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full bg-brand-card/70 text-white border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-gold font-sans text-sm transition-colors cursor-pointer"
                    >
                      <option value="19:00">19:00 (Cena Inicial)</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00 (Turno Prime)</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00 (Cena Nocturna)</option>
                      <option value="22:30">22:30</option>
                    </select>
                  </div>

                  {/* Guests Tally */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs tracking-widest text-gray-400 uppercase font-medium flex items-center gap-2">
                      <Users className="w-4 h-4 text-gold" />
                      Comensales
                    </label>
                    <div className="flex items-center justify-between bg-brand-card/70 border border-white/10 rounded-xl py-1 px-2 h-[46px]">
                      <button
                        type="button"
                        onClick={() => adjustGuests(-1)}
                        className="text-gray-400 hover:text-gold w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="font-sans text-white font-medium text-sm">{formData.guests}</span>
                      <button
                        type="button"
                        onClick={() => adjustGuests(1)}
                        className="text-gray-400 hover:text-gold w-8 h-8 rounded-full bg-white/5 flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Seating preference */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs tracking-widest text-gray-400 uppercase font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold" />
                      Ubicación de Mesa
                    </label>
                    <select
                      name="seatingPreference"
                      value={formData.seatingPreference}
                      onChange={handleInputChange}
                      className="w-full bg-brand-card/70 text-white border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-gold font-sans text-sm transition-colors cursor-pointer"
                    >
                      <option value="main">Salón Principal</option>
                      <option value="terrace">La Terraza</option>
                      <option value="vault">Cava Subterránea</option>
                      <option value="bar">Oyster & Bar</option>
                    </select>
                  </div>

                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className="font-sans text-xs tracking-widest text-gray-400 uppercase font-medium flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gold" />
                    Anotaciones o Alergias Alimentarias
                  </label>
                  <textarea
                    name="specialRequests"
                    rows={3}
                    placeholder="Escriba aquí restricciones alimentarias, si celebra un aniversario o si prefiere una mesa en particular..."
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full bg-brand-card/70 text-white placeholder-gray-600 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-gold font-sans text-sm transition-colors"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full sm:w-auto inline-flex items-center justify-center bg-gold hover:bg-gold-hover disabled:bg-gold/40 text-white font-sans text-xs tracking-[0.25em] font-semibold py-4 px-12 rounded-full shadow-lg shadow-gold/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        PROCESANDO SOLICITUD...
                      </span>
                    ) : (
                      'CONFIRMAR MI RESERVA'
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              // Successful Booking Screen
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 sm:p-16 text-center space-y-8 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-gold" />
                </div>

                <div className="space-y-3">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-gold uppercase font-bold">Completado con Éxito</span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">¡Su mesa está reservada!</h3>
                  <div className="w-12 h-0.5 bg-gold mx-auto" />
                  <p className="font-sans text-gray-300 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
                    Estimado/a <strong className="text-white font-medium">{formData.name}</strong>, hemos recibido su solicitud. 
                    Un correo electrónico de confirmación con los detalles del sommelier ha sido enviado a <strong className="text-white font-medium">{formData.email}</strong>.
                  </p>
                </div>

                {/* Ticket Details Box */}
                <div className="max-w-md w-full bg-brand-card rounded-2xl border border-gold/30 p-6 sm:p-8 space-y-4 shadow-xl relative overflow-hidden">
                  {/* Decorative cutouts */}
                  <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-brand-dark -translate-y-1/2 border-r border-white/5" />
                  <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-brand-dark -translate-y-1/2 border-l border-white/5" />

                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="font-sans text-[10px] tracking-widest text-gray-400 uppercase">CÓDIGO DE RESERVA</span>
                    <span className="font-mono text-gold text-base font-bold tracking-widest">{reservationCode}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-left pt-2">
                    <div>
                      <p className="font-sans text-[9px] tracking-widest text-gray-500 uppercase">FECHA</p>
                      <p className="font-serif text-white text-sm font-medium mt-1">{formData.date}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] tracking-widest text-gray-500 uppercase">HORA</p>
                      <p className="font-serif text-white text-sm font-medium mt-1">{formData.time} Hrs</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] tracking-widest text-gray-500 uppercase">COMENSALES</p>
                      <p className="font-serif text-white text-sm font-medium mt-1">{formData.guests} Persona/s</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] tracking-widest text-gray-500 uppercase">ZONA</p>
                      <p className="font-serif text-white text-sm font-medium mt-1">
                        {seatingNames[formData.seatingPreference as keyof typeof seatingNames]}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 text-center">
                    <p className="font-sans text-[9px] text-gray-500 leading-normal uppercase tracking-wider">
                      ★ Presente este código digital al ingresar al recinto. Vestimenta formal requerida.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col items-center gap-4 w-full">
                  <button
                    onClick={() => handleSendToWhatsApp(reservationCode)}
                    className="w-full max-w-md inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans text-xs tracking-[0.2em] font-bold py-4 px-8 rounded-full shadow-lg shadow-green-500/15 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.431 2.522 1.222 3.513l-.8 2.923 2.993-.785a5.734 5.734 0 003.351.984h.003c3.181 0 5.768-2.587 5.769-5.766.001-3.182-2.586-5.768-5.769-5.768zm3.395 8.16c-.15.424-.755.774-1.047.828-.271.05-.62.078-1.009-.047-.243-.078-.553-.186-.94-.355-1.63-.715-2.673-2.373-2.755-2.483-.081-.11-.661-.88-.661-1.678 0-.798.412-1.19.559-1.341.146-.151.32-.189.426-.189.106 0 .213.001.303.006.096.005.226-.036.353.272.131.321.448 1.092.487 1.171.039.08.064.172.012.277-.052.106-.078.172-.156.264-.078.093-.164.207-.234.28-.078.082-.16.17-.069.326.091.151.405.67.868 1.082.597.53 1.097.694 1.25.758.151.064.24-.002.293-.064.072-.083.308-.358.39-.481.082-.123.164-.103.277-.062.112.042.712.336.834.397.123.061.205.091.235.143.03.051.03.301-.12.725z"/>
                    </svg>
                    ENVIAR RESERVA POR WHATSAPP
                  </button>

                  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          date: '',
                          time: '20:00',
                          guests: 2,
                          specialRequests: '',
                          seatingPreference: 'main'
                        });
                      }}
                      className="font-sans text-xs tracking-widest uppercase text-gold hover:text-white transition-colors duration-300 py-3 px-4"
                    >
                      Hacer otra reservación
                    </button>
                    
                    <button
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="bg-brand-card hover:bg-white/5 border border-white/10 text-white font-sans text-xs tracking-widest uppercase font-semibold py-3 px-6 rounded-full transition-all duration-300"
                    >
                      Volver al Inicio
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
