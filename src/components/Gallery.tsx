import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryData } from '../data';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'plato' | 'salon' | 'bodega' | 'cocina'>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Todas' },
    { id: 'plato', label: 'Platos' },
    { id: 'salon', label: 'Salón' },
    { id: 'bodega', label: 'La Bodega' },
    { id: 'cocina', label: 'Cocina' }
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? galleryData
    : galleryData.filter(photo => photo.category === selectedCategory);

  const handleOpenLightbox = (photoId: string) => {
    const index = galleryData.findIndex(p => p.id === photoId);
    if (index !== -1) {
      setActivePhotoIndex(index);
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % galleryData.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + galleryData.length) % galleryData.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background glow element */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full gold-light-beam pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <ImageIcon className="w-4 h-4 text-gold" />
            <span className="font-sans text-xs tracking-[0.4em] text-gold uppercase font-semibold">
              Registro Visual
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white mt-2 mb-4 font-light tracking-tight">
            Galería <span className="italic text-gold font-normal">Fotográfica</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Un recorrido por los rincones más exclusivos de nuestro salón, la cava subterránea y el alma de nuestra cocina.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-brand-dark text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid Photos */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-72 sm:h-80 rounded-xl overflow-hidden border border-white/5 bg-black cursor-pointer shadow-lg"
                onClick={() => handleOpenLightbox(photo.id)}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center mb-3 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-serif text-white text-lg font-light transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {photo.title}
                  </h4>
                  <p className="font-sans text-gold text-[10px] tracking-widest uppercase mt-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                    {photo.category === 'salon' ? 'Salón' : photo.category === 'plato' ? 'Plato' : photo.category === 'bodega' ? 'La Bodega' : 'Cocina'}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 z-50 select-none"
            onClick={() => setActivePhotoIndex(null)}
          >
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-gold bg-white/5 hover:bg-white/15 p-2 rounded-full transition-all"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrevPhoto}
              className="absolute left-6 text-white hover:text-gold bg-white/5 hover:bg-white/15 p-3 rounded-full transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextPhoto}
              className="absolute right-6 text-white hover:text-gold bg-white/5 hover:bg-white/15 p-3 rounded-full transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryData[activePhotoIndex].image}
                alt={galleryData[activePhotoIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              />
              <div className="text-center mt-4">
                <p className="font-serif text-white text-xl font-light">{galleryData[activePhotoIndex].title}</p>
                <p className="font-sans text-gold text-xs tracking-widest uppercase mt-1">
                  Categoría: {galleryData[activePhotoIndex].category.toUpperCase()}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
