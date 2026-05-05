import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import ExportProcess from '@/components/ExportProcess';
import Imports from '@/components/Imports';
import PartnerWithUs from '@/components/PartnerWithUs';
import GlobalReach from '@/components/GlobalReach';
import Testimonials from '@/components/Testimonials';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <ExportProcess />
      <Imports />
      <PartnerWithUs />
      <GlobalReach />
      <Testimonials />
      {/* <Certifications /> */}
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
