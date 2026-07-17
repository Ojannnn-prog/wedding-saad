import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Map } from 'lucide-react';
import { FloralBottomRight, FloatingPetals } from './Ornaments';

const Acara: React.FC = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const calculateTimeLeft = () => {
    // Tanggal acara: 12 September 2026
    const targetDate = new Date('2026-09-12T09:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    let timeLeft = {
      hari: 0,
      jam: 0,
      menit: 0,
      detik: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="acara" className="py-24 bg-background relative overflow-hidden">
      <FloatingPetals />
      
      <FloralBottomRight className="absolute top-0 right-0 opacity-50 pointer-events-none w-48 h-48 md:w-64 md:h-64 rotate-180" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUpVariant}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display text-heading mb-6">Detail Acara</h2>
          <p className="text-textMain font-sans max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami yang akan dilaksanakan pada:
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeUpVariant}
          className="flex justify-center gap-4 md:gap-8 mb-20"
        >
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-secondary rounded-xl flex items-center justify-center shadow-sm shadow-pink-100 border border-white mb-3">
                <span className="text-2xl md:text-4xl font-serif text-heading">{value}</span>
              </div>
              <span className="text-xs md:text-sm font-sans uppercase tracking-widest text-textMain/70">{unit}</span>
            </div>
          ))}
        </motion.div>

        {/* Kalender September 2026 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={fadeUpVariant}
          className="flex justify-center mb-16"
        >
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-pink-100 border border-secondary w-full max-w-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary rounded-bl-full opacity-50 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-display text-heading mb-6 text-center">September 2026</h3>
            
            <div className="grid grid-cols-7 gap-2 text-center mb-2">
              {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
                <div key={day} className="text-xs md:text-sm font-bold text-textMain/70 font-sans">{day}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center">
              {/* September 2026 starts on a Tuesday (index 2) */}
              <div className="p-2 md:p-3"></div>
              <div className="p-2 md:p-3"></div>
              
              {/* 30 Days of September */}
              {Array.from({ length: 30 }).map((_, i) => {
                const date = i + 1;
                const isWedding = date === 12;
                return (
                  <div 
                    key={date} 
                    className={`p-2 md:p-3 flex items-center justify-center rounded-full text-sm md:text-base font-sans transition-all ${
                      isWedding 
                        ? 'bg-primary text-white font-bold shadow-md shadow-pink-300 scale-110' 
                        : 'text-textMain hover:bg-secondary'
                    }`}
                  >
                    {date}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeUpVariant}
            className="flex-1 bg-white p-8 md:p-10 rounded-2xl shadow-lg shadow-pink-100 border border-secondary relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <h3 className="text-3xl md:text-4xl font-display text-heading mb-8">Akad Nikah</h3>
              
              <div className="flex flex-col gap-5 w-full mb-8">
                <div className="flex items-center gap-4 text-textMain">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold font-sans text-sm md:text-base">Sabtu, 12 September 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-textMain">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-sans text-sm md:text-base">09.00 WIB - Selesai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-textMain">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="font-semibold font-sans text-sm md:text-base">Baiturrahman</p>
                    <p className="text-xs md:text-sm font-sans text-textMain/80 mt-1">
                      Jl. Nagrog No.65, Pasirjati, Kec. Ujung Berung, Kota Bandung, Jawa Barat 40616
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto w-full pt-4 border-t border-secondary">
                <a 
                  href="https://maps.app.goo.gl/vzWaZnjVVWgefYPj8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-heading text-white w-full px-6 py-3 rounded-full font-sans text-sm font-medium transition-colors shadow-md shadow-pink-200"
                >
                  <Map className="w-4 h-4" />
                  Buka Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variants={fadeUpVariant}
            className="flex-1 bg-white p-8 md:p-10 rounded-2xl shadow-lg shadow-pink-100 border border-secondary relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-secondary rounded-br-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <h3 className="text-3xl md:text-4xl font-display text-heading mb-8">Resepsi</h3>
              
              <div className="flex flex-col gap-5 w-full mb-8">
                <div className="flex items-center gap-4 text-textMain">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold font-sans text-sm md:text-base">Sabtu, 12 September 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-textMain">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-sans text-sm md:text-base">11.00 WIB - 14.00 WIB</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-textMain">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="font-semibold font-sans text-sm md:text-base">Baiturrahman</p>
                    <p className="text-xs md:text-sm font-sans text-textMain/80 mt-1">
                      Jl. Nagrog No.65, Pasirjati, Kec. Ujung Berung, Kota Bandung, Jawa Barat 40616
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto w-full pt-4 border-t border-secondary">
                <a 
                  href="https://maps.app.goo.gl/vzWaZnjVVWgefYPj8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-heading text-white w-full px-6 py-3 rounded-full font-sans text-sm font-medium transition-colors shadow-md shadow-pink-200"
                >
                  <Map className="w-4 h-4" />
                  Buka Google Maps
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Acara;
