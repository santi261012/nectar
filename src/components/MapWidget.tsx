import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function MapWidget() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/[0.02]">
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full gold-light-beam pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase font-semibold">
                Ubicación & Contacto
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight">
                Dónde <span className="italic text-gold font-normal">encontrarnos</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold" />
            </div>

            {/* List of contact metrics */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-card border border-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-500 uppercase tracking-widest font-semibold">Dirección Principal</p>
                  <p className="font-serif text-white text-base mt-1">Av. Campos Elíseos 425, Polanco</p>
                  <p className="font-sans text-gray-400 text-xs mt-0.5">Ciudad de México, CP 11560</p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-card border border-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-500 uppercase tracking-widest font-semibold">Teléfono & VIP Hotline</p>
                  <p className="font-serif text-white text-base mt-1">+52 55 3578 4127</p>
                  <p className="font-sans text-gray-400 text-xs mt-0.5">Reservaciones especiales y eventos privados</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-card border border-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-500 uppercase tracking-widest font-semibold">Correo de Atención</p>
                  <p className="font-serif text-white text-base mt-1">experiencias@nectar-gourmet.com</p>
                  <p className="font-sans text-gray-400 text-xs mt-0.5">Respuestas en menos de 12 horas</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-card border border-white/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-sans text-xs text-gray-500 uppercase tracking-widest font-semibold">Horario de Servicio</p>
                  <p className="font-serif text-white text-base mt-1">Martes a Sábado: 14:00 - 01:00 Hrs</p>
                  <p className="font-sans text-gray-400 text-xs mt-0.5">Domingo: 13:00 - 18:00 Hrs (Lunes cerrado)</p>
                </div>
              </div>
            </div>

            {/* Valet Parking guarantee */}
            <div className="bg-brand-card/60 rounded-2xl border border-white/5 p-4 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
              <p className="font-sans text-xs text-gray-300 font-light text-left leading-relaxed">
                <strong className="text-white font-medium">Servicio de Valet Parking Gratuito:</strong> 
                Contamos con estacionamiento techado y seguridad las 24 horas para su absoluta tranquilidad.
              </p>
            </div>
          </div>

          {/* Map Column (Elegant Dark Vector Style Map Widget) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="w-full h-full min-h-[350px] bg-brand-card rounded-3xl border border-white/5 p-6 relative overflow-hidden flex flex-col justify-between text-left shadow-2xl">
              
              {/* Abstract Roads & Grid Layout to look like high-end dark map design */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(#C67C32_0.5px,transparent_0.5px)] [background-size:16px_16px]" />
              
              {/* Decorative map lines */}
              <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
              <div className="absolute top-2/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0" />
              <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent z-0" />
              <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-gradient-to-b from-transparent via-white/15 to-transparent z-0" />

              {/* Glowing Landmark Indicator */}
              <div className="absolute top-[48%] left-[58%] z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                {/* Concentric rings pulsing */}
                <span className="absolute inline-flex h-16 w-16 rounded-full bg-gold/10 animate-ping" />
                <span className="absolute inline-flex h-8 w-8 rounded-full bg-gold/20" />
                <div className="w-10 h-10 rounded-full bg-brand-dark border-2 border-gold flex items-center justify-center shadow-2xl relative z-20">
                  <span className="w-3 h-3 rounded-full bg-gold" />
                </div>
                
                {/* Glowing label */}
                <div className="mt-2 bg-brand-dark/95 border border-gold/40 rounded-lg px-3 py-1.5 shadow-xl text-center backdrop-blur-sm">
                  <p className="font-serif text-[11px] text-white font-medium">NÉCTAR RESTAURANTE</p>
                  <p className="font-sans text-[8px] text-gold tracking-widest uppercase">Campos Elíseos 425</p>
                </div>
              </div>

              {/* Other mock landmarks for immersion */}
              <div className="absolute top-[20%] left-[25%] z-10 flex items-center gap-2 pointer-events-none bg-brand-dark/50 px-2 py-1 rounded text-[10px] text-gray-500 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                Parque Lincoln
              </div>
              <div className="absolute bottom-[20%] left-[70%] z-10 flex items-center gap-2 pointer-events-none bg-brand-dark/50 px-2 py-1 rounded text-[10px] text-gray-500 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                Torre Virreyes
              </div>

              {/* Map Controls Overlay (Interactive feel) */}
              <div className="relative z-10 flex justify-between items-start w-full">
                <span className="bg-brand-dark border border-white/10 text-white font-sans text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-lg">
                  MAPA DE ACCESO VIP
                </span>
                <span className="bg-gold/10 border border-gold/30 text-gold font-sans text-[9px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md">
                  GPS ONLINE
                </span>
              </div>

              <div className="relative z-10 space-y-2 mt-auto pt-32">
                <p className="font-serif text-white text-lg font-light">¿Cómo llegar?</p>
                <p className="font-sans text-gray-400 text-xs leading-relaxed max-w-sm">
                  Ubicados estratégicamente en la zona exclusiva de Polanco. Con fácil acceso desde el Anillo Periférico y Paseo de la Reforma.
                </p>
                <div className="flex gap-3 pt-2">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gold hover:bg-gold-hover text-white text-[10px] font-sans tracking-widest uppercase font-semibold py-2 px-4 rounded-full transition-colors inline-block text-center"
                  >
                    Google Maps
                  </a>
                  <a 
                    href="https://www.waze.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand-dark hover:bg-white/5 text-gray-300 text-[10px] font-sans tracking-widest uppercase font-semibold py-2 px-4 border border-white/10 rounded-full transition-colors inline-block text-center"
                  >
                    Waze
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
