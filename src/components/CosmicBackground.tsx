import { useEffect, useRef, useState } from 'react';

const CosmicBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate static star positions
  const stars = useRef(
    Array.from({ length: 120 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }))
  ).current;

  // Calculate star opacity based on scroll (fade out after hero)
  const starsOpacity = Math.max(0, 1 - scrollProgress * 4);

  return (
    <>
      {/* Master Gradient Background */}
      <div 
        className="fixed inset-0 -z-30 pointer-events-none"
        style={{
          background: `linear-gradient(
            180deg,
            #000000 0%,
            #000000 10%,
            #100b20 30%,
            #0a192f 60%,
            #121212 100%
          )`,
        }}
      />

      {/* Layer 1: Twinkling Stars (Hero Section) */}
      <div 
        ref={starsRef}
        className="fixed inset-0 -z-20 pointer-events-none overflow-hidden transition-opacity duration-500"
        style={{ opacity: starsOpacity }}
      >
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Layer 2: Nebula/Fog Layers */}
      <div 
        className="fixed inset-0 -z-15 pointer-events-none overflow-hidden"
        style={{ opacity: 0.05 }}
      >
        {/* Green nebula cloud */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] animate-nebula-drift-1"
          style={{
            background: 'radial-gradient(circle, #39FF14 0%, transparent 70%)',
            top: '20%',
            left: '-10%',
          }}
        />
        {/* Red nebula cloud */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] animate-nebula-drift-2"
          style={{
            background: 'radial-gradient(circle, #FF4500 0%, transparent 70%)',
            top: '50%',
            right: '-15%',
          }}
        />
        {/* Secondary green */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[80px] animate-nebula-drift-3"
          style={{
            background: 'radial-gradient(circle, #39FF14 0%, transparent 70%)',
            bottom: '10%',
            left: '30%',
          }}
        />
      </div>

      {/* Layer 3: City Skyline Silhouette (Footer) */}
      <div 
        className="fixed bottom-0 left-0 right-0 -z-10 pointer-events-none transition-opacity duration-700"
        style={{ 
          opacity: Math.max(0, (scrollProgress - 0.7) * 3.3),
          height: '180px',
        }}
      >
        <svg 
          viewBox="0 0 1440 180" 
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="30%" stopColor="#000000" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* City skyline silhouette path */}
          <path
            d="M0,180 L0,140 L30,140 L30,120 L50,120 L50,100 L70,100 L70,120 L90,120 L90,130 
               L120,130 L120,90 L140,90 L140,70 L160,70 L160,90 L180,90 L180,120 
               L220,120 L220,80 L240,80 L240,60 L250,50 L260,60 L260,80 L280,80 L280,110 
               L320,110 L320,85 L340,85 L340,65 L360,65 L360,85 L380,85 L380,130 
               L420,130 L420,95 L440,95 L440,55 L450,40 L460,55 L460,95 L480,95 L480,120 
               L520,120 L520,100 L540,100 L540,75 L560,75 L560,100 L580,100 L580,135 
               L620,135 L620,110 L640,110 L640,70 L660,70 L660,50 L680,50 L680,70 L700,70 L700,110 
               L740,110 L740,125 L760,125 L760,90 L780,90 L780,60 L790,45 L800,60 L800,90 L820,90 L820,130 
               L860,130 L860,105 L880,105 L880,80 L900,80 L900,105 L920,105 L920,140 
               L960,140 L960,115 L980,115 L980,85 L1000,85 L1000,55 L1010,35 L1020,55 L1020,85 L1040,85 L1040,120 
               L1080,120 L1080,100 L1100,100 L1100,70 L1120,70 L1120,100 L1140,100 L1140,135 
               L1180,135 L1180,90 L1200,90 L1200,65 L1220,65 L1220,90 L1240,90 L1240,125 
               L1280,125 L1280,105 L1300,105 L1300,75 L1320,75 L1320,50 L1330,30 L1340,50 L1340,75 L1360,75 L1360,110 
               L1400,110 L1400,130 L1440,130 L1440,180 Z"
            fill="#000000"
          />
          {/* Subtle window lights */}
          <g fill="#39FF14" opacity="0.15">
            <rect x="145" y="75" width="3" height="3" />
            <rect x="155" y="78" width="3" height="3" />
            <rect x="245" y="65" width="3" height="3" />
            <rect x="445" y="60" width="3" height="3" />
            <rect x="455" y="70" width="3" height="3" />
            <rect x="665" y="55" width="3" height="3" />
            <rect x="675" y="62" width="3" height="3" />
            <rect x="785" y="55" width="3" height="3" />
            <rect x="795" y="70" width="3" height="3" />
            <rect x="1005" y="45" width="3" height="3" />
            <rect x="1015" y="60" width="3" height="3" />
            <rect x="1325" y="40" width="3" height="3" />
            <rect x="1335" y="55" width="3" height="3" />
          </g>
        </svg>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes nebula-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }
        
        @keyframes nebula-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 15px) scale(1.05); }
        }
        
        @keyframes nebula-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 25px) scale(1.08); }
        }
      `}</style>
    </>
  );
};

export default CosmicBackground;
