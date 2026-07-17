import React from 'react';
import { motion } from 'framer-motion';
import { FloatingPetals } from './Ornaments';

const Mempelai: React.FC = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="mempelai" className="py-24 bg-secondary overflow-hidden relative">
      <FloatingPetals />
      
      {/* Watermark Ornamen Floral (opsional, sangat transparan) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-[800px] h-[800px]">
        <svg viewBox="0 0 100 100" fill="#6B4454" xmlns="http://www.w3.org/2000/svg">
           <path d="M50 0 C 75 25, 100 50, 50 100 C 0 50, 25 25, 50 0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          variants={fadeUpVariant}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-display text-heading mb-6">Bismillahirrohmanirrohim</h2>
          <p className="font-serif text-xl md:text-2xl text-heading mb-6 leading-relaxed" dir="rtl">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </p>
          <p className="text-textMain font-sans max-w-3xl mx-auto leading-relaxed text-xs md:text-sm italic">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepada-Nya, dan Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir." <br/><span className="font-semibold block mt-2">(Q.S Ar-Rum : 21)</span>
          </p>
        </motion.div>

        {/* Profiles */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-20">
          
          {/* Groom / Pria */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeUpVariant}
            className="flex flex-col items-center text-center w-full md:w-1/2"
          >
            <div className="relative mb-8">
              {/* Image Frame - Rounded Top */}
              <div className="w-56 h-72 md:w-64 md:h-80 rounded-t-full rounded-b-xl overflow-hidden shadow-md shadow-pink-100 border-[6px] border-white relative z-10 bg-white">
                <img 
                  src="/DSC_2398.jpg" 
                  alt="Mempelai Pria" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Soft Shadow / Glow */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl z-0" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-heading mb-3">Putra</h3>
            <p className="text-sm font-sans text-textMain/80 mb-1">Putra dari</p>
            <p className="text-base font-sans text-textMain font-semibold">Bapak (Menyusul) & Ibu (Menyusul)</p>
          </motion.div>

          {/* Divider "&" */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="hidden md:flex items-center justify-center"
          >
            <span className="text-7xl font-display text-primary drop-shadow-sm">&</span>
          </motion.div>
          <div className="md:hidden flex items-center justify-center my-4">
            <span className="text-6xl font-display text-primary">&</span>
          </div>

          {/* Bride / Wanita */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeUpVariant}
            className="flex flex-col items-center text-center w-full md:w-1/2"
          >
            <div className="relative mb-8">
              {/* Image Frame - Rounded Top */}
              <div className="w-56 h-72 md:w-64 md:h-80 rounded-t-full rounded-b-xl overflow-hidden shadow-md shadow-pink-100 border-[6px] border-white relative z-10 bg-white">
                <img 
                  src="/DSC_2263.jpg" 
                  alt="Mempelai Wanita" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl z-0" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-heading mb-3">Ratu</h3>
            <p className="text-sm font-sans text-textMain/80 mb-1">Putri dari</p>
            <p className="text-base font-sans text-textMain font-semibold">Bapak (Menyusul) & Ibu (Menyusul)</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Mempelai;
