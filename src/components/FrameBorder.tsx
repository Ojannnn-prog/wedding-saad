import React from 'react';

/**
 * Komponen Frame Layar Penuh (Fixed Full-Screen Frame)
 * - Tepi Atas: Group of 510 Objects.svg (utuh tanpa dicrop, menutupi sebagian layar dengan anggun)
 * - Tepi Bawah: Group of 743 Objects.svg (rotasi 180 derajat, utuh tanpa dicrop)
 * - 4 Sudut: Group of 545 Objects.svg (Atas-Kiri, Atas-Kanan, Bawah-Kiri, Bawah-Kanan) terlihat jelas semua
 * - Tepi Kiri & Kanan (Pinggiran): Menggunakan border_floral_2.svg agar penuh, mewah, dan menyatu
 */
export const GlobalFixedFrame: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[110] select-none overflow-hidden">
      {/* Garis Bingkai Emas/Pink Perimeter yang Menyatu Antar Sisi (Seamed Royal Border Line) */}
      <div className="absolute inset-2 sm:inset-4 md:inset-6 border-[2px] sm:border-[3px] border-primary/30 rounded-[20px] sm:rounded-[28px] pointer-events-none shadow-[inset_0_0_20px_rgba(236,182,190,0.15)] transition-all" />

      {/* 1. Tepi Atas (Group of 510 Objects.svg) - Tampil Utuh Tanpa Di-crop */}
      <div className="absolute top-0 left-0 right-0 w-full flex justify-center">
        <img
          src="/Group of 510 Objects.svg"
          alt="Border Tepi Atas"
          className="w-full h-auto object-contain object-top opacity-95"
        />
      </div>

      {/* 2. Tepi Bawah (Group of 743 Objects.svg) - Rotasi 180 Derajat, Tampil Utuh Tanpa Di-crop */}
      <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center">
        <img
          src="/Group of 743 Objects.svg"
          alt="Border Tepi Bawah"
          className="w-full h-auto object-contain object-bottom opacity-95 rotate-180"
        />
      </div>

      {/* 5. 4 Sudut Layar (Group of 545 Objects.svg) - Semua Terlihat Jelas Tanpa Terpotong */}
      {/* Sudut Atas Kiri */}
      <img
        src="/Group of 545 Objects.svg"
        alt="Sudut Kiri Atas"
        className="absolute top-0 left-0 w-24 sm:w-36 md:w-52 lg:w-64 h-auto object-contain opacity-95 pointer-events-none z-20"
      />

      {/* Sudut Atas Kanan */}
      <img
        src="/Group of 545 Objects.svg"
        alt="Sudut Kanan Atas"
        className="absolute top-0 right-0 w-24 sm:w-36 md:w-52 lg:w-64 h-auto object-contain opacity-95 pointer-events-none z-20 -scale-x-100"
      />

      {/* Sudut Bawah Kiri */}
      <img
        src="/Group of 545 Objects.svg"
        alt="Sudut Kiri Bawah"
        className="absolute bottom-0 left-0 w-24 sm:w-36 md:w-52 lg:w-64 h-auto object-contain opacity-95 pointer-events-none z-20 -scale-y-100"
      />

      {/* Sudut Bawah Kanan */}
      <img
        src="/Group of 545 Objects.svg"
        alt="Sudut Kanan Bawah"
        className="absolute bottom-0 right-0 w-24 sm:w-36 md:w-52 lg:w-64 h-auto object-contain opacity-95 pointer-events-none z-20 scale-[-1]"
      />
    </div>
  );
};

interface SectionFrameProps {
  variant?: 'luxury-corners' | 'floral-corners' | 'top-bottom' | 'full-ornate' | 'garland-corners';
  className?: string;
  opacity?: string;
}

export const SectionFrame: React.FC<SectionFrameProps> = ({
  variant = 'full-ornate',
  className = '',
  opacity = 'opacity-85'
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-10 ${className}`}>
      {/* Garland Corners (Group of 246 & 271 Objects) */}
      {variant === 'garland-corners' && (
        <>
          <img
            src="/Group of 246 Objects.svg"
            alt="Garland Kiri Atas"
            loading="lazy"
            decoding="async"
            className={`absolute -top-2 left-0 sm:left-2 md:left-4 w-20 sm:w-32 md:w-44 lg:w-52 object-contain ${opacity}`}
          />
          <img
            src="/Group of 271 Objects.svg"
            alt="Garland Kanan Atas"
            loading="lazy"
            decoding="async"
            className={`absolute -top-2 right-0 sm:right-2 md:right-4 w-20 sm:w-32 md:w-44 lg:w-52 object-contain -scale-x-100 ${opacity}`}
          />
          <img
            src="/Group of 246 Objects.svg"
            alt="Garland Kiri Bawah"
            loading="lazy"
            decoding="async"
            className={`absolute -bottom-2 left-0 sm:left-2 md:left-4 w-20 sm:w-32 md:w-44 lg:w-52 object-contain -scale-y-100 ${opacity}`}
          />
          <img
            src="/Group of 271 Objects.svg"
            alt="Garland Kanan Bawah"
            loading="lazy"
            decoding="async"
            className={`absolute -bottom-2 right-0 sm:right-2 md:right-4 w-20 sm:w-32 md:w-44 lg:w-52 object-contain scale-[-1] ${opacity}`}
          />
        </>
      )}
    </div>
  );
};

/**
 * Komponen pembatas horizontal estetik antar section / kartu
 */
export const HorizontalDividerSVG: React.FC<{
  variant?: 'wide' | 'medium' | 'slim';
  className?: string;
}> = () => {
  return null;
};
