export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'entradas' | 'fuertes' | 'postres' | 'bebidas';
  tag?: string;
}

export interface SpecialtyItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag: string;
}

export interface ChefRecommendItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  pairing: string; // Wine or beverage pairing suggestion
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'plato' | 'salon' | 'bodega' | 'cocina';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
  seatingPreference: 'main' | 'terrace' | 'vault' | 'bar';
}
