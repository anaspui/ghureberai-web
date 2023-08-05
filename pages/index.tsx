import Contact from './Contact';
import Footer from './Footer';
import Gallery from './Gallery';
import Hero from './Hero';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Partner from './Partner';
import Testimonial from './Testimonial';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partner />
      <Gallery />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}
