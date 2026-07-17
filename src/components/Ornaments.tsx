import React from 'react';

// Ornamen Ranting Bunga Estetik Kiri Atas (Mawar & Daun)
export const FloralTopLeft: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none ${className}`}>
    <path d="M10,10 Q50,20 80,80" stroke="#B5C1B4" strokeWidth="1.5" fill="none" />
    <path d="M20,20 Q40,10 50,30 Q30,40 20,20 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M45,40 Q65,30 75,50 Q55,60 45,40 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M65,65 Q85,55 95,75 Q75,85 65,65 Z" fill="#DDA7A5" opacity="0.9" />
    {/* Bunga Tambahan (Sakura / Melati Kecil) */}
    <circle cx="30" cy="20" r="4" fill="#FFF" opacity="0.8" />
    <circle cx="28" cy="24" r="4" fill="#FFF" opacity="0.8" />
    <circle cx="34" cy="22" r="4" fill="#FFF" opacity="0.8" />
    <circle cx="31" cy="23" r="2" fill="#DDA7A5" />

    <circle cx="70" cy="40" r="3" fill="#FFF" opacity="0.9" />
    <circle cx="68" cy="44" r="3" fill="#FFF" opacity="0.9" />
    <circle cx="73" cy="42" r="3" fill="#FFF" opacity="0.9" />
    <circle cx="70" cy="42" r="1.5" fill="#DDA7A5" />

    <path d="M15,35 Q10,15 30,10 Q35,30 15,35 Z" fill="#B5C1B4" opacity="0.7" />
    <path d="M40,55 Q35,35 55,30 Q60,50 40,55 Z" fill="#B5C1B4" opacity="0.7" />
    <path d="M60,80 Q55,60 75,55 Q80,75 60,80 Z" fill="#B5C1B4" opacity="0.7" />
  </svg>
);

// Ornamen Ranting Bunga Estetik Kanan Bawah
export const FloralBottomRight: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none ${className}`}>
    <path d="M90,90 Q50,80 20,20" stroke="#B5C1B4" strokeWidth="1.5" fill="none" />
    <path d="M80,80 Q60,90 50,70 Q70,60 80,80 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M55,60 Q35,70 25,50 Q45,40 55,60 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M35,35 Q15,45 5,25 Q25,15 35,35 Z" fill="#DDA7A5" opacity="0.9" />

    {/* Bunga Sakura / Melati Kecil */}
    <circle cx="75" cy="85" r="4" fill="#FFF" opacity="0.8" />
    <circle cx="72" cy="81" r="4" fill="#FFF" opacity="0.8" />
    <circle cx="78" cy="82" r="4" fill="#FFF" opacity="0.8" />
    <circle cx="75" cy="83" r="2" fill="#DDA7A5" />

    <circle cx="35" cy="55" r="5" fill="#FFF" opacity="0.7" />
    <circle cx="32" cy="51" r="5" fill="#FFF" opacity="0.7" />
    <circle cx="38" cy="52" r="5" fill="#FFF" opacity="0.7" />
    <circle cx="35" cy="53" r="2.5" fill="#DDA7A5" />

    <path d="M85,65 Q90,85 70,90 Q65,70 85,65 Z" fill="#B5C1B4" opacity="0.7" />
    <path d="M60,45 Q65,65 45,70 Q40,50 60,45 Z" fill="#B5C1B4" opacity="0.7" />
    <path d="M40,20 Q45,40 25,45 Q20,25 40,20 Z" fill="#B5C1B4" opacity="0.7" />
  </svg>
);

// Ornamen Ranting Bunga Estetik Kanan Atas
export const FloralTopRight: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none ${className}`}>
    <path d="M90,10 Q50,20 20,80" stroke="#B5C1B4" strokeWidth="1.5" fill="none" />
    <path d="M80,20 Q60,10 50,30 Q70,40 80,20 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M55,40 Q35,30 25,50 Q45,60 55,40 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M35,65 Q15,55 5,75 Q25,85 35,65 Z" fill="#DDA7A5" opacity="0.9" />
    <circle cx="70" cy="20" r="3" fill="#FFF" opacity="0.8" />
    <circle cx="68" cy="24" r="3" fill="#FFF" opacity="0.8" />
    <circle cx="73" cy="22" r="3" fill="#FFF" opacity="0.8" />
    <path d="M85,35 Q90,15 70,10 Q65,30 85,35 Z" fill="#B5C1B4" opacity="0.7" />
    <path d="M60,55 Q65,35 45,30 Q40,50 60,55 Z" fill="#B5C1B4" opacity="0.7" />
    <path d="M40,80 Q45,60 25,55 Q20,75 40,80 Z" fill="#B5C1B4" opacity="0.7" />
  </svg>
);

// Ornamen Ranting Bunga Estetik Kiri Bawah
export const FloralBottomLeft: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none ${className}`}>
    <path d="M10,90 Q50,80 80,20" stroke="#B5C1B4" strokeWidth="1.5" fill="none" />
    <path d="M20,80 Q40,90 50,70 Q30,60 20,80 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M45,60 Q65,70 75,50 Q55,40 45,60 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M65,35 Q85,45 95,25 Q75,15 65,35 Z" fill="#DDA7A5" opacity="0.9" />
    <circle cx="30" cy="80" r="4" fill="#FFF" opacity="0.8" />
    <circle cx="28" cy="76" r="4" fill="#FFF" opacity="0.8" />
    <circle cx="33" cy="78" r="4" fill="#FFF" opacity="0.8" />
    <path d="M15,65 Q10,85 30,90 Q35,70 15,65 Z" fill="#B5C1B4" opacity="0.7" />
    <path d="M40,45 Q35,65 55,70 Q60,50 40,45 Z" fill="#B5C1B4" opacity="0.7" />
    <path d="M60,20 Q55,40 75,45 Q80,25 60,20 Z" fill="#B5C1B4" opacity="0.7" />
  </svg>
);

// Ornamen Bunga Mawar Tengah
export const RoseCenter: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none ${className}`}>
    <circle cx="50" cy="50" r="30" fill="#DDA7A5" opacity="0.3" blur="10"/>
    <path d="M50,20 C60,20 70,30 70,50 C70,70 60,80 50,80 C40,80 30,70 30,50 C30,30 40,20 50,20 Z" fill="#DDA7A5" opacity="0.6" />
    <path d="M50,30 C55,30 60,40 60,50 C60,60 55,70 50,70 C45,70 40,60 40,50 C40,40 45,30 50,30 Z" fill="#C48B89" opacity="0.8" />
    <path d="M50,40 C52,40 55,45 55,50 C55,55 52,60 50,60 C48,60 45,55 45,50 C45,45 48,40 50,40 Z" fill="#A86A68" opacity="0.9" />
    {/* Daun */}
    <path d="M30,50 Q10,40 20,30 Q30,20 40,40 Z" fill="#B5C1B4" opacity="0.7" />
    <path d="M70,50 Q90,60 80,70 Q70,80 60,60 Z" fill="#B5C1B4" opacity="0.7" />
  </svg>
);

export const FloatingPetals: React.FC = () => {
  const colors = [
    "bg-primary/40", // Mawar
    "bg-white/60", // Melati putih
    "bg-pink-300/40", // Sakura
    "bg-[#C48B89]/30" // Deep rose
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Meningkatkan jumlah kelopak bunga secara drastis untuk efek "ramai" */}
      {[...Array(50)].map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const animationDuration = `${15 + Math.random() * 25}s`;
        const animationDelay = `-${Math.random() * 20}s`;
        const colorClass = colors[i % colors.length];
        const isCircle = i % 3 === 0; // Beberapa kelopak berbentuk bundar (seperti bunga melati/sakura kecil)
        
        return (
          <div 
            key={i}
            className={`absolute ${colorClass} mix-blend-multiply ${
              isCircle ? 'rounded-full' : 'rounded-tl-full rounded-br-full rounded-tr-sm rounded-bl-sm'
            }`}
            style={{
              left,
              top,
              width: `${isCircle ? 6 + Math.random() * 8 : 10 + Math.random() * 20}px`,
              height: `${isCircle ? 6 + Math.random() * 8 : 10 + Math.random() * 20}px`,
              animation: `float-heavy ${animationDuration} ease-in-out ${animationDelay} infinite`,
              transform: `rotate(${Math.random() * 360}deg)`,
              filter: `blur(${Math.random() * 2}px)`
            }}
          />
        );
      })}
      <style>{`
        @keyframes float-heavy {
          0% { transform: translate(0, -20px) rotate(0deg); opacity: 0; }
          20% { opacity: 0.9; }
          50% { transform: translate(${Math.random() * 100 > 50 ? 50 : -50}px, 150px) rotate(180deg); opacity: 0.5; }
          80% { opacity: 0.9; }
          100% { transform: translate(${Math.random() * 100 > 50 ? -40 : 40}px, 300px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
