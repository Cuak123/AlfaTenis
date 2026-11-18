import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Programs from './components/Programs.jsx';
import Coaches from './components/Coaches.jsx';
import Location from './components/Location.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

/**
 * Rebuild in progress — live sections are whatever is imported here.
 *
 * Still to come: Competición (awaiting a decision on how to frame the October
 * tournament), Precios (blocked on real figures) and Galería (blocked on
 * consent). Testimonios now has authorised quotes in the client's sheet.
 * The old versions sit in src/components/ reading from the legacy
 * src/config/site.js and are NOT imported.
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
        <Coaches />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
