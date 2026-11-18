import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Programs from './components/Programs.jsx';
import Location from './components/Location.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

/**
 * Rebuild in progress — live sections are whatever is imported here.
 *
 * Still to come: Precios (blocked on real figures), Testimonios and Galería
 * (blocked on consent). Their old versions sit in src/components/
 * reading from the legacy src/config/site.js and are NOT imported.
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
        <Location />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
