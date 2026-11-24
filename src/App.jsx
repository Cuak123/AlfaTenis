import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Programs from './components/Programs.jsx';
import Coaches from './components/Coaches.jsx';
import Testimonials from './components/Testimonials.jsx';
import Competition from './components/Competition.jsx';
import Pricing from './components/Pricing.jsx';
import Gallery from './components/Gallery.jsx';
import Location from './components/Location.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

/**
 * Rebuild in progress — live sections are whatever is imported here.
 *
 * `Header.jsx` is the last pre-rebuild orphan: it still reads the legacy
 * src/config/site.js and is NOT imported. Everything else now runs off the
 * content layer.
 *
 * Order is deliberate: what we teach (Programas), what it costs (Precios), who
 * teaches it (Profesores), who vouches for it (Testimonios), then the proof —
 * tournaments and photos — and finally logistics and objections.
 *
 * Precios will slot between Programs and Location when the numbers land.
 */
export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Programs />
        <Pricing />
        <Coaches />
        <Testimonials />
        <Competition />
        <Gallery />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
