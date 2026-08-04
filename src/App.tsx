import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Mempelai from './components/Mempelai';
import Acara from './components/Acara';
import Galeri from './components/Galeri';
import RSVP from './components/RSVP';
import Cover from './components/Cover';
import MusicPlayer from './components/MusicPlayer';
import { GlobalFixedFrame } from './components/FrameBorder';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });

    // Inisialisasi Locomotive Scroll untuk efek smooth scroll
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.1,
      },
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <Cover isOpened={isOpened} onOpen={() => setIsOpened(true)} />
      <GlobalFixedFrame />
      <Layout>
        <Hero />
        <Mempelai />
        <Acara />
        <Galeri />
        <RSVP />
      </Layout>
      <MusicPlayer isOpened={isOpened} />
    </>
  );
}

export default App;
