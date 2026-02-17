import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Staff from './components/Staff';
import Competition from './components/Competition';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Programs from './components/Programs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Location from './components/Location';
import FAQ from './components/FAQ';

function App() {
  // Simple loading state for initial smooth reveal
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-brand-dark transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <Programs />
        <Pricing />
        <Staff />
        <Testimonials />
        <Gallery />
        <Competition />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
