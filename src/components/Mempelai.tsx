import React from 'react';
import { motion } from 'framer-motion';
import { FloatingPetals, RoseCenter, FloralTopRight } from './Ornaments';

const Mempelai: React.FC = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="mempelai" className="py-24 bg-white relative overflow-hidden">
      <FloatingPetals />
      <RoseCenter className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 mix-blend-multiply pointer-events-none" />
      <FloralTopRight className="absolute top-0 right-0 opacity-60 pointer-events-none w-56 h-56 md:w-80 md:h-80" />
      
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
          
          {/* Bride / Wanita - Ratu Nabila */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeUpVariant}
            className="flex flex-col items-center text-center w-full md:w-1/2"
          >
            <div className="relative mb-8">
              {/* Ornamen Sudut Kartu Foto Wanita */}
              <img src="/Group of 271 Objects.svg" alt="Sudut Kiri Foto" className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 pointer-events-none opacity-85 z-20" />
              <img src="/Group of 271 Objects.svg" alt="Sudut Kanan Foto" className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 pointer-events-none opacity-85 -scale-x-100 z-20" />
              {/* Image Frame - Rounded Top */}
              <div className="w-56 h-72 md:w-64 md:h-80 rounded-t-full rounded-b-xl overflow-hidden shadow-md shadow-pink-100 border-[6px] border-white relative z-10 bg-white">
                <img 
                  src="/DSC_2263.jpg" 
                  alt="Mempelai Wanita" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform-gpu will-change-transform"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl z-0" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-heading mb-3">Ratu Nabila</h3>
            <p className="text-sm font-sans text-textMain/80 mb-1">Putri dari</p>
            <p className="text-base font-sans text-textMain font-semibold leading-relaxed">
              Bapak Drs. Akhmad Kawakibi, M.M. <br />
              <span className="font-normal">&amp;</span> Ibu Hj. Dini Kusuma Mustikaning Dyah, A.Md.
            </p>
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

          {/* Groom / Pria - Saad Saputra */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeUpVariant}
            className="flex flex-col items-center text-center w-full md:w-1/2"
          >
            <div className="relative mb-8">
              {/* Ornamen Sudut Kartu Foto Pria */}
              <img src="/Group of 271 Objects.svg" alt="Sudut Kiri Foto" className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 pointer-events-none opacity-85 z-20" />
              <img src="/Group of 271 Objects.svg" alt="Sudut Kanan Foto" className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 pointer-events-none opacity-85 -scale-x-100 z-20" />
              {/* Image Frame - Rounded Top */}
              <div className="w-56 h-72 md:w-64 md:h-80 rounded-t-full rounded-b-xl overflow-hidden shadow-md shadow-pink-100 border-[6px] border-white relative z-10 bg-white">
                <img 
                  src="/DSC_2398.jpg" 
                  alt="Mempelai Pria" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform-gpu will-change-transform"
                />
              </div>
              {/* Soft Shadow / Glow */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl z-0" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif text-heading mb-3">Saad Saputra</h3>
            <p className="text-sm font-sans text-textMain/80 mb-1">Putra dari</p>
            <p className="text-base font-sans text-textMain font-semibold leading-relaxed">
              Bapak Sanuri <br />
              <span className="font-normal">&amp;</span> Ibu Sar'ah
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Mempelai;
