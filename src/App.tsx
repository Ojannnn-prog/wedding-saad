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

function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // Inisialisasi AOS (Animate On Scroll)
    // Menonaktifkan animasi AOS pada perangkat seluler (opsional) atau mengurangi kompleksitasnya
    AOS.init({
      duration: 600, // sedikit lebih cepat
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      disable: 'mobile', // Matikan AOS di mobile untuk performa kentang, atau biarkan menyala? Kita set false saja tapi lebih cepat
    });
    
    // Kita hapus LocomotiveScroll agar menggunakan native scroll yang jauh lebih ringan dan lancar di HP kentang.
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
