import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { FloralTopLeft, FloralBottomRight, FloatingPetals, RoseCenter } from './Ornaments';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const floralLeftRef = useRef(null);
  const floralRightRef = useRef(null);
  const roseCenterRef = useRef(null);

  // Setup efek parallax framer-motion
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Gambar latar bergerak lebih lambat ke bawah saat di-scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  // Opasitas berkurang perlahan saat di-scroll
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  // Efek GSAP untuk animasi mengambang lembut pada ornamen bunga
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (floralLeftRef.current) {
        gsap.to(floralLeftRef.current, {
          y: -15,
          rotation: 3,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        });
      }
      if (floralRightRef.current) {
        gsap.to(floralRightRef.current, {
          y: -15,
          rotation: -3,
          duration: 3.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        });
      }
      if (roseCenterRef.current) {
        gsap.to(roseCenterRef.current, {
          scale: 1.05,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        });
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-background"
      id="hero"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center"
        style={{
          y,
          opacity,
          backgroundImage: "url('/DSC_1980.jpg')"
        }}
      />

      {/* Overlay: Deep Mauve / Muted Burgundy transparan agar teks terbaca */}
      <div className="absolute inset-0 bg-heading/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />

      {/* Ornamen Ekstra di Hero dengan animasi GSAP */}
      <div ref={roseCenterRef} className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <RoseCenter className="w-[500px] h-[500px] opacity-20 mix-blend-overlay" />
      </div>
      <RoseCenter className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-96 h-96 opacity-20 mix-blend-overlay pointer-events-none z-10" />

      {/* Floating Petals di atas Background tapi di bawah Overlay Ornamen */}
      <FloatingPetals />

      {/* Ornamen Bunga Estetik Kiri Atas (GSAP animated) */}
      <div ref={floralLeftRef} className="absolute top-0 left-0 pointer-events-none z-20">
        <FloralTopLeft className="p-4 opacity-90 w-48 h-48 md:w-72 md:h-72" />
      </div>

      {/* Ornamen Bunga Estetik Kanan Bawah (GSAP animated) */}
      <div ref={floralRightRef} className="absolute bottom-0 right-0 pointer-events-none z-20">
        <FloralBottomRight className="p-4 opacity-90 w-48 h-48 md:w-72 md:h-72" />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16" data-aos="fade-up" data-aos-duration="1000">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white text-sm md:text-base font-sans mb-4 tracking-[0.3em] uppercase"
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl text-white font-display mb-6 drop-shadow-lg"
          style={{ textShadow: "2px 4px 10px rgba(0,0,0,0.3)" }}
        >
          Ratu & Putra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white text-lg md:text-2xl font-serif italic mb-16"
        >
          Sabtu, 12 September 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12"
        >
          <Link
            to="mempelai"
            smooth={true}
            duration={1000}
            className="flex flex-col items-center cursor-pointer group"
          >
            <span className="text-white/80 text-xs md:text-sm font-sans mb-3 uppercase tracking-widest group-hover:text-primary transition-colors">
              Buka Undangan
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="text-white/80 w-6 h-6 md:w-8 md:h-8 group-hover:text-primary transition-colors" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
