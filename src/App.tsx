import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedMenu from './components/FeaturedMenu';
import RestaurantHistory from './components/RestaurantHistory';
import ChefRecommends from './components/ChefRecommends';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import MapWidget from './components/MapWidget';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

export default function App() {
  // State to hold any dish chosen from Specialties, Chef Recommends, or Menu sections
  const [selectedDish, setSelectedDish] = useState<string>('');

  const handleSelectDish = (dishName: string) => {
    setSelectedDish(dishName);
  };

  const handleClearDish = () => {
    setSelectedDish('');
  };

  return (
    <div className="relative bg-brand-bg text-white min-h-screen selection:bg-gold selection:text-white antialiased">
      {/* Premium navigation bar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Specialties section */}
      <Specialties onSelectDish={handleSelectDish} />

      {/* Why Choose Us value pillars */}
      <WhyChooseUs />

      {/* Interactive food menu */}
      <FeaturedMenu onSelectDish={handleSelectDish} />

      {/* Restaurant story and interior showoff */}
      <RestaurantHistory />

      {/* Chef recommendations */}
      <ChefRecommends onSelectDish={handleSelectDish} />

      {/* Filterable photography gallery */}
      <Gallery />

      {/* User reviews and satisfaction counter statistics */}
      <Testimonials />

      {/* Gourmet reservation system */}
      <ReservationFormWrapper selectedDish={selectedDish} onClearDish={handleClearDish} />

      {/* Contact information & visual map */}
      <MapWidget />

      {/* Shared micro-interactions widgets */}
      <WhatsAppButton />
      <BackToTop />

      {/* Footer layout */}
      <Footer />
    </div>
  );
}

// Lazy loading wrapper for Reservation form so that it handles custom state smoothly
import ReservationForm from './components/ReservationForm';

interface ReservationFormWrapperProps {
  selectedDish: string;
  onClearDish: () => void;
}

function ReservationFormWrapper({ selectedDish, onClearDish }: ReservationFormWrapperProps) {
  return (
    <ReservationForm selectedDish={selectedDish} onClearDish={onClearDish} />
  );
}
