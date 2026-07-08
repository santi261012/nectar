import { Sprout, ChefHat, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Sprout,
      title: 'Ingredientes Frescos',
      description: 'Cosechamos vegetales orgánicos y hierbas aromáticas de nuestro propio huerto privado diariamente. Apoyamos el comercio local con pesca sustentable del día y cortes de libre pastoreo con trazabilidad garantizada.',
      bullet: 'Calidad 100% Orgánica'
    },
    {
      icon: ChefHat,
      title: 'Chefs Profesionales',
      description: 'Liderados por mentes creativas con formación internacional en restaurantes galardonados con estrellas Michelin. Innovamos constantemente mediante investigación culinaria y técnicas tradicionales perfeccionadas.',
      bullet: 'Técnicas de Vanguardia'
    },
    {
      icon: Award,
      title: 'Servicio Premium',
      description: 'Creemos que la alta cocina es un ritual sagrado. Nuestro personal de sala y sommelier certificados diseñan un recorrido personalizado de maridaje, sincronizando el servicio a la perfección para su comodidad.',
      bullet: 'Atención 5 Estrellas'
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] rounded-full gold-light-beam pointer-events-none opacity-20" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] rounded-full gold-light-beam pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase font-semibold">
            Nuestros Pilares
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white mt-3 mb-4 font-light tracking-tight">
            ¿Por qué elegir <span className="italic text-gold font-normal">Néctar</span>?
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Creamos experiencias efímeras pero inolvidables a través de una rigurosa filosofía de calidad, 
            respeto al ingrediente y hospitalidad exclusiva.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-brand-dark hover:bg-brand-card rounded-2xl p-8 sm:p-10 border border-white/[0.03] transition-colors duration-400 text-left flex flex-col justify-between h-full group shadow-lg"
              >
                <div>
                  {/* Circular Orange Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-gold group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-white mb-4 font-light group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Custom checkmark detail */}
                <div className="flex items-center space-x-2 border-t border-white/5 pt-4">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span className="font-sans text-xs tracking-wider text-gray-300 group-hover:text-gold transition-colors uppercase font-medium">
                    {item.bullet}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
