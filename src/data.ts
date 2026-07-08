import { MenuItem, SpecialtyItem, ChefRecommendItem, GalleryItem, Testimonial } from './types';

export const specialtiesData: SpecialtyItem[] = [
  {
    id: 'spec-1',
    name: 'Salmón Glaseado al Bourbon',
    description: 'Salmón salvaje cocinado a fuego lento sobre madera de cerezo, glaseado con reducción de bourbon artesanal, romero fresco y microvegetales sobre puré de coliflor trufado.',
    price: 34,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    tag: 'Firma de la Casa'
  },
  {
    id: 'spec-2',
    name: 'Filete Mignon con Costra de Espresso',
    description: 'Corte premium de res añejado por 28 días, sellado a la parrilla con costra de granos de café arábica y pimienta negra, bañado en salsa bordelesa de frutos rojos.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tag: 'Recomendación Chef'
  },
  {
    id: 'spec-3',
    name: 'Pulpo Braseado al Carbón de Encino',
    description: 'Tentáculo de pulpo del Cantábrico marinado en adobo de chiles secos, braseado al carbón de encino, acompañado de papas confitadas al romero y alioli de ajo negro.',
    price: 38,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tag: 'Especial de Temporada'
  }
];

export const menuData: MenuItem[] = [
  // ENTRADAS
  {
    id: 'menu-1',
    name: 'Carpaccio de Wagyu trufado',
    description: 'Láminas finas de res wagyu, lascas de trufa negra fresca, arúgula salvaje, aceite de oliva virgen extra y emulsión de yema curada.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    category: 'entradas',
    tag: 'Exclusivo'
  },
  {
    id: 'menu-2',
    name: 'Vieiras Selladas en Mantequilla Noisette',
    description: 'Vieiras gigantes de mar, crema ligera de chícharos a la menta, tocino crujiente de bellota y aire de limón real.',
    price: 26,
    image: 'https://images.unsplash.com/photo-1532636875304-0c8fe1197e1d?auto=format&fit=crop&w=800&q=80',
    category: 'entradas'
  },
  {
    id: 'menu-3',
    name: 'Tostada de Atún Bluefin Aleta Azul',
    description: 'Atún fresco marinado en soya añeja y cítricos, aguacate tatemado, poro frito y mayonesa spicy casera sobre won-ton crujiente.',
    price: 19,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    category: 'entradas',
    tag: 'Favorito'
  },

  // FUERTES
  {
    id: 'menu-4',
    name: 'Magret de Pato con Reducción de Higo',
    description: 'Pechuga de pato de granja sellada al término perfecto con piel crocante, salsa aterciopelada de higos al oporto y milhojas de camote tatemado.',
    price: 39,
    image: 'https://images.unsplash.com/photo-1514516313030-3df7fb09d8d6?auto=format&fit=crop&w=800&q=80',
    category: 'fuertes'
  },
  {
    id: 'menu-5',
    name: 'Costillar de Cordero en Costra de Hierbas',
    description: 'Costillar de cordero lechal con costra aromática de pistacho, menta y perejil, servido con polenta cremosa al parmesano de 24 meses.',
    price: 42,
    image: 'https://images.unsplash.com/photo-1514516313030-3df7fb09d8d6?auto=format&fit=crop&w=800&q=80', // Fallback to duck/meat plate
    category: 'fuertes',
    tag: 'Premium'
  },
  {
    id: 'menu-6',
    name: 'Risotto de Setas Silvestres y Trufa',
    description: 'Arroz arborio cocido con caldo de hongos porcini, selección de setas de bosque salteadas, mantequilla artesanal y ralladura de trufa de invierno.',
    price: 32,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
    category: 'fuertes'
  },

  // POSTRES
  {
    id: 'menu-7',
    name: 'Domo de Chocolate Obsidiana',
    description: 'Chocolate belga oscuro al 70%, centro líquido de frutos del bosque, bizcocho de avellana tatemada y tierra de cacao salado.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    category: 'postres',
    tag: 'Espectáculo Visual'
  },
  {
    id: 'menu-8',
    name: 'Texturas de Matcha y Pistacho',
    description: 'Mousse esponjosa de matcha ceremonial Uji, bizcocho genovés húmedo, helado artesanal de pistacho siciliano y crocante de sésamo.',
    price: 14,
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80',
    category: 'postres'
  },

  // BEBIDAS
  {
    id: 'menu-9',
    name: 'Aura Dorada (Coctel de Autor)',
    description: 'Mezcal espadín artesanal infusionado con cardamomo, licor de damiana, jarabe de piña asada, limón amarillo y escarcha de sal de gusano con oro de 24k.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    category: 'bebidas',
    tag: 'Firma Coctelería'
  },
  {
    id: 'menu-10',
    name: 'Néctar del Edén',
    description: 'Ginebra botánica premium, licor de flor de saúco, cordial de moras silvestres, agua tónica artesanal y pétalos de rosa orgánicos deshidratados.',
    price: 17,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    category: 'bebidas'
  }
];

export const chefRecommendsData: ChefRecommendItem[] = [
  {
    id: 'rec-1',
    name: 'Ceviche de Maracuyá y Coco',
    description: 'Pesca fresca del día marinada en leche de tigre de maracuyá y coco, cubos de camote al almíbar de canela, cebolla morada fina y brotes de cilantro salvaje.',
    price: 26,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    pairing: 'Maridaje ideal: Sauvignon Blanc Reserva o Champaña Brut'
  },
  {
    id: 'rec-2',
    name: 'Costilla Cortada braseada 36 horas',
    description: 'Costilla short rib braseada lentamente a baja temperatura durante 36 horas en salsa demi-glace de chiles secos, servido sobre puré rústico de camote y ceniza de cebolla.',
    price: 43,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    pairing: 'Maridaje ideal: Cabernet Sauvignon o Syrah Añejado'
  },
  {
    id: 'rec-3',
    name: 'Tarta de Higo Rústico y Queso de Cabra',
    description: 'Hojaldre crujiente horneado al momento con queso de cabra cremoso macerado en miel orgánica, higos frescos de huerto y reducción balsámica de módena envejecida de 12 años.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=800&q=80',
    pairing: 'Maridaje ideal: Oporto Tawny 10 Años o Cosecha Tardía Semillon'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Nuestro Salón Principal',
    category: 'salon',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-2',
    title: 'El Arte de Emplatar',
    category: 'plato',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-3',
    title: 'Nuestra Cava Privada',
    category: 'bodega',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-4',
    title: 'Fuego y Precisión',
    category: 'cocina',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-5',
    title: 'Atardecer en la Terraza',
    category: 'salon',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-6',
    title: 'Textura Cruda en Vajilla de Piedra',
    category: 'plato',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carolina Varela',
    role: 'Crítica Gastronómica de El Manjar',
    comment: 'Una experiencia verdaderamente sublime. El pulpo al encino es de los mejores que he probado fuera de Galicia: tierno por dentro, crujiente por fuera y con una profundidad ahumada perfecta. La atmósfera nocturna e íntima te transporta.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'Hace 2 semanas'
  },
  {
    id: 'test-2',
    name: 'Mauricio Altamirano',
    role: 'Sommelier y Chef Ejecutivo',
    comment: 'El cuidado en la selección de ingredientes es evidente en cada bocado del filete Mignon con costra de espresso. La carta de vinos de su bodega subterránea es impecable, con algunas de las mejores añadas de Baja California e Italia.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'Hace 1 mes'
  },
  {
    id: 'test-3',
    name: 'Valeria Sotomayor',
    role: 'Asidua Gourmet',
    comment: 'Reservamos la Cava Subterránea para nuestro aniversario y la atención del sommelier y los meseros superó toda expectativa. El coctel Aura Dorada es todo un espectáculo visual y aromático. Se nota la pasión en cada detalle.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    date: 'Hace 3 días'
  }
];

export const statsData = [
  { value: '15k+', label: 'Comensales Felices' },
  { value: '3', label: 'Estrellas Michelín (Inspiración)' },
  { value: '120+', label: 'Etiquetas de Vino Premium' },
  { value: '25+', label: 'Platillos de Autor Únicos' }
];
