import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import VideoSection from '../components/VideoSection';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Testimonial from '../components/Testimonial';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <VideoSection />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonial />
      <ContactCTA />
      <Footer />
    </>
  );
}
