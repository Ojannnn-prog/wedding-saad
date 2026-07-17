import { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Mempelai from './components/Mempelai';
import Acara from './components/Acara';
import Galeri from './components/Galeri';
import RSVP from './components/RSVP';
import Cover from './components/Cover';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Cover isOpened={isOpened} onOpen={() => setIsOpened(true)} />
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
