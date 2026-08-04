import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import { FloralTopLeft, FloralBottomRight, FloatingPetals, RoseCenter } from './Ornaments';
import { SectionFrame } from './FrameBorder';
import { globalAudio } from '../lib/audioManager';

interface CoverProps {
  isOpened: boolean;
  onOpen: () => void;
}

const Cover: React.FC<CoverProps> = ({ isOpened, onOpen }) => {
  // Mencegah scroll di body ketika cover belum dibuka
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpened]);

  const handleOpen = () => {
    // Memutar musik langsung saat tombol diklik (menghindari blokir autoplay browser)
    globalAudio.play().catch(e => console.error("Audio play failed:", e));
    onOpen();
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
          }}
        >
          <FloatingPetals />

          {/* Ornamen Floral Estetik */}
          <FloralTopLeft className="absolute top-0 left-0 p-2 opacity-80 pointer-events-none w-56 h-56 md:w-72 md:h-72" />
          <FloralBottomRight className="absolute bottom-0 right-0 p-2 opacity-80 pointer-events-none w-56 h-56 md:w-72 md:h-72" />

          {/* Kartu Undangan (Amplop) */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-10 md:p-16 max-w-sm md:max-w-md w-11/12 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl shadow-pink-200/40 border-2 border-white overflow-hidden">
            <SectionFrame variant="luxury-corners" opacity="opacity-75" />
            
            {/* Ornamen Mawar di Belakang Teks Utama */}
            <RoseCenter className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-40 mix-blend-multiply pointer-events-none" />

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs md:text-sm font-sans tracking-[0.2em] text-textMain/80 mb-6 uppercase"
            >
              Undangan Pernikahan
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-6xl font-display text-heading mb-8 drop-shadow-sm"
            >
              Ratu & Putra
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center mb-10 w-full"
            >
              <p className="text-sm font-sans text-textMain/80 mb-3">Kepada Yth. Bapak/Ibu/Saudara/i</p>
              <div className="font-serif text-xl md:text-2xl text-textMain font-semibold border-b border-primary/40 pb-3 w-4/5">
                Tamu Undangan
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              onClick={handleOpen}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full overflow-hidden shadow-lg shadow-pink-200 transition-transform hover:scale-105 active:scale-95 z-50"
            >
              <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 bg-white transition-opacity"></span>
              <MailOpen className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span className="font-sans font-medium tracking-wide relative z-10">Buka Undangan</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cover;
