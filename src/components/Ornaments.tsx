import React from 'react';

// Ornamen Ranting Bunga Estetik Kiri Atas (Mawar & Daun)
export const FloralTopLeft: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none ${className}`}>
    {/* Ranting Besar */}
    <path d="M5,5 Q40,10 70,80" stroke="#B5C1B4" strokeWidth="2" fill="none" />
    <path d="M10,10 Q50,20 80,60" stroke="#B5C1B4" strokeWidth="1.5" fill="none" />
    <path d="M5,30 Q20,20 40,50" stroke="#B5C1B4" strokeWidth="1" fill="none" />
    
    {/* Kelopak Mawar Besar */}
    <path d="M20,20 C30,10 50,30 40,40 C30,50 10,30 20,20 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M25,25 C30,20 40,30 35,35 C30,40 20,30 25,25 Z" fill="#C48B89" opacity="0.95" />
    
    <path d="M45,40 C55,30 75,50 65,60 C55,70 35,50 45,40 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M50,45 C55,40 65,50 60,55 C55,60 45,50 50,45 Z" fill="#C48B89" opacity="0.95" />
    
    <path d="M10,50 C20,40 30,55 25,65 C20,75 0,60 10,50 Z" fill="#E8C5C4" opacity="0.8" />
    
    <path d="M65,65 Q85,55 95,75 Q75,85 65,65 Z" fill="#E8C5C4" opacity="0.8" />
    
    {/* Bunga Sakura / Melati Kecil Bertumpuk */}
    <circle cx="30" cy="20" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="27" cy="25" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="35" cy="23" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="31" cy="23" r="2.5" fill="#C48B89" />

    <circle cx="70" cy="40" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="67" cy="45" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="74" cy="42" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="70" cy="43" r="2" fill="#DDA7A5" />
    
    <circle cx="45" cy="15" r="3" fill="#FFF" opacity="0.9" />
    <circle cx="43" cy="19" r="3" fill="#FFF" opacity="0.9" />
    <circle cx="48" cy="17" r="3" fill="#FFF" opacity="0.9" />
    <circle cx="45" cy="17" r="1.5" fill="#C48B89" />

    {/* Dedaunan Lebat */}
    <path d="M15,35 Q10,15 30,10 Q35,30 15,35 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M40,55 Q35,35 55,30 Q60,50 40,55 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M60,80 Q55,60 75,55 Q80,75 60,80 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M25,5 Q10,-5 5,10 Q20,20 25,5 Z" fill="#9DAF9B" opacity="0.7" />
    <path d="M80,30 Q90,20 95,35 Q85,45 80,30 Z" fill="#9DAF9B" opacity="0.7" />
  </svg>
);

// Ornamen Ranting Bunga Estetik Kanan Bawah
export const FloralBottomRight: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none ${className}`}>
    <path d="M95,95 Q50,90 20,20" stroke="#B5C1B4" strokeWidth="2" fill="none" />
    <path d="M90,90 Q50,80 30,40" stroke="#B5C1B4" strokeWidth="1.5" fill="none" />
    <path d="M95,70 Q80,80 60,50" stroke="#B5C1B4" strokeWidth="1" fill="none" />
    
    <path d="M80,80 C60,90 50,70 70,60 C90,50 100,70 80,80 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M75,75 C65,80 60,70 70,65 C80,60 85,70 75,75 Z" fill="#C48B89" opacity="0.95" />
    
    <path d="M55,60 C35,70 25,50 45,40 C65,30 75,50 55,60 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M50,55 C40,60 35,50 45,45 C55,40 60,50 50,55 Z" fill="#C48B89" opacity="0.95" />
    
    <path d="M35,35 C15,45 5,25 25,15 C45,5 55,25 35,35 Z" fill="#E8C5C4" opacity="0.8" />
    
    <path d="M90,50 C80,60 60,45 65,35 C70,25 100,40 90,50 Z" fill="#E8C5C4" opacity="0.8" />

    {/* Bunga Sakura / Melati Kecil */}
    <circle cx="75" cy="85" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="71" cy="80" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="79" cy="81" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="75" cy="82" r="2.5" fill="#C48B89" />

    <circle cx="35" cy="55" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="31" cy="51" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="39" cy="52" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="35" cy="52" r="2" fill="#C48B89" />

    <circle cx="65" cy="25" r="3" fill="#FFF" opacity="0.8" />
    <circle cx="62" cy="22" r="3" fill="#FFF" opacity="0.8" />
    <circle cx="68" cy="23" r="3" fill="#FFF" opacity="0.8" />
    <circle cx="65" cy="23" r="1.5" fill="#DDA7A5" />

    <path d="M85,65 Q90,85 70,90 Q65,70 85,65 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M60,45 Q65,65 45,70 Q40,50 60,45 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M40,20 Q45,40 25,45 Q20,25 40,20 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M75,95 Q90,105 95,90 Q80,80 75,95 Z" fill="#9DAF9B" opacity="0.7" />
    <path d="M20,70 Q10,80 5,65 Q15,55 20,70 Z" fill="#9DAF9B" opacity="0.7" />
  </svg>
);

// Ornamen Ranting Bunga Estetik Kanan Atas
export const FloralTopRight: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none ${className}`}>
    <path d="M95,5 Q50,15 20,80" stroke="#B5C1B4" strokeWidth="2" fill="none" />
    <path d="M90,10 Q50,20 30,60" stroke="#B5C1B4" strokeWidth="1.5" fill="none" />
    <path d="M95,30 Q80,20 60,50" stroke="#B5C1B4" strokeWidth="1" fill="none" />
    
    <path d="M80,20 C60,10 50,30 70,40 C90,50 100,30 80,20 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M75,25 C65,20 60,30 70,35 C80,40 85,30 75,25 Z" fill="#C48B89" opacity="0.95" />
    
    <path d="M55,40 C35,30 25,50 45,60 C65,70 75,50 55,40 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M50,45 C40,40 35,50 45,55 C55,60 60,50 50,45 Z" fill="#C48B89" opacity="0.95" />
    
    <path d="M35,65 C15,55 5,75 25,85 C45,95 55,75 35,65 Z" fill="#E8C5C4" opacity="0.8" />
    
    <circle cx="70" cy="20" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="67" cy="25" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="74" cy="22" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="70" cy="23" r="2.5" fill="#C48B89" />

    <circle cx="45" cy="85" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="42" cy="81" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="48" cy="82" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="45" cy="82" r="2" fill="#DDA7A5" />

    <path d="M85,35 Q90,15 70,10 Q65,30 85,35 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M60,55 Q65,35 45,30 Q40,50 60,55 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M40,80 Q45,60 25,55 Q20,75 40,80 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M75,5 Q90,-5 95,10 Q80,20 75,5 Z" fill="#9DAF9B" opacity="0.7" />
  </svg>
);

// Ornamen Ranting Bunga Estetik Kiri Bawah
export const FloralBottomLeft: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none ${className}`}>
    <path d="M5,95 Q50,85 80,20" stroke="#B5C1B4" strokeWidth="2" fill="none" />
    <path d="M10,90 Q50,80 60,40" stroke="#B5C1B4" strokeWidth="1.5" fill="none" />
    
    <path d="M20,80 C40,90 50,70 30,60 C10,50 0,70 20,80 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M25,75 C35,80 40,70 30,65 C20,60 15,70 25,75 Z" fill="#C48B89" opacity="0.95" />
    
    <path d="M45,60 C65,70 75,50 55,40 C35,30 25,50 45,60 Z" fill="#DDA7A5" opacity="0.9" />
    <path d="M50,55 C60,60 65,50 55,45 C45,40 40,50 50,55 Z" fill="#C48B89" opacity="0.95" />
    
    <path d="M65,35 C85,45 95,25 75,15 C55,5 45,25 65,35 Z" fill="#E8C5C4" opacity="0.8" />

    <circle cx="30" cy="80" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="27" cy="75" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="34" cy="78" r="5" fill="#FFF" opacity="0.9" />
    <circle cx="30" cy="77" r="2.5" fill="#C48B89" />

    <circle cx="55" cy="15" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="52" cy="11" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="58" cy="12" r="4" fill="#FFF" opacity="0.9" />
    <circle cx="55" cy="12" r="2" fill="#DDA7A5" />
    
    <path d="M15,65 Q10,85 30,90 Q35,70 15,65 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M40,45 Q35,65 55,70 Q60,50 40,45 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M60,20 Q55,40 75,45 Q80,25 60,20 Z" fill="#B5C1B4" opacity="0.8" />
    <path d="M25,95 Q10,105 5,90 Q20,80 25,95 Z" fill="#9DAF9B" opacity="0.7" />
  </svg>
);

// Ornamen Bunga Mawar Tengah
export const RoseCenter: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`pointer-events-none ${className}`}>
    <circle cx="50" cy="50" r="30" fill="#DDA7A5" opacity="0.3" style={{ filter: "blur(10px)" }} />
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
      {/* Meningkatkan jumlah kelopak bunga secara drastis untuk efek "sangat ramai" (100+) */}
      {[...Array(120)].map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const animationDuration = `${10 + Math.random() * 30}s`;
        const animationDelay = `-${Math.random() * 30}s`;
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
