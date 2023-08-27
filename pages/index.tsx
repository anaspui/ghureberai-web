import Head from 'next/head';
import Footer from './Footer';
import Gallery from './Gallery';
import Hero from './Hero';
import Partner from './Partner';
import Stats from './Stats';
import Testimonial from './Testimonial';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ghureberai</title>
      </Head>
      <Hero />
      <Partner />
      <Stats />
      <Gallery />
      <Testimonial />
      <Footer />
    </>
  );
}
