import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Programs from './components/Programs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Location from './components/Location';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark animate-fadeIn">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Pricing />
        <Testimonials />
        <Gallery />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
