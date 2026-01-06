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

  // Calculate layer opacities based on scroll
  const starsOpacity = Math.max(0, 1 - scrollProgress * 4);
  const asteroidsOpacity = Math.max(0, 1 - scrollProgress * 3);
  const rocketOpacity = scrollProgress > 0.1 && scrollProgress < 0.5 ? Math.min(1, (scrollProgress - 0.1) * 5) : scrollProgress >= 0.5 ? Math.max(0, 1 - (scrollProgress - 0.5) * 4) : 0;
  const cloudsOpacity = scrollProgress > 0.3 && scrollProgress < 0.8 ? Math.min(0.6, (scrollProgress - 0.3) * 2) : scrollProgress >= 0.8 ? Math.max(0, 0.6 - (scrollProgress - 0.8) * 3) : 0;
  const birdsOpacity = Math.max(0, (scrollProgress - 0.7) * 3);
  const skylineOpacity = Math.max(0, (scrollProgress - 0.75) * 4);

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
        className="fixed inset-0 -z-25 pointer-events-none overflow-hidden transition-opacity duration-500"
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

      {/* Layer 1: Asteroids (Hero Section) */}
      <div 
        className="fixed inset-0 -z-24 pointer-events-none overflow-hidden transition-opacity duration-700"
        style={{ opacity: asteroidsOpacity }}
      >
        {/* Asteroid 1 - Large */}
        <svg 
          className="absolute animate-asteroid-1" 
          style={{ top: '15%', left: '-5%' }}
          width="80" height="60" viewBox="0 0 80 60"
        >
          <path
            d="M10,30 Q5,15 20,10 Q35,5 50,12 Q65,8 75,25 Q78,40 60,50 Q45,55 30,52 Q15,48 10,30"
            fill="#2a2a2a"
            stroke="#3a3a3a"
            strokeWidth="1"
          />
          <circle cx="25" cy="25" r="4" fill="#1a1a1a" />
          <circle cx="50" cy="35" r="6" fill="#1a1a1a" />
          <circle cx="40" cy="20" r="3" fill="#1a1a1a" />
        </svg>

        {/* Asteroid 2 - Medium */}
        <svg 
          className="absolute animate-asteroid-2" 
          style={{ top: '35%', right: '-3%' }}
          width="50" height="40" viewBox="0 0 50 40"
        >
          <path
            d="M5,20 Q8,8 20,5 Q32,3 42,12 Q48,22 40,32 Q28,38 15,35 Q3,30 5,20"
            fill="#333333"
            stroke="#444444"
            strokeWidth="1"
          />
          <circle cx="20" cy="18" r="3" fill="#222222" />
          <circle cx="32" cy="25" r="4" fill="#222222" />
        </svg>

        {/* Asteroid 3 - Small */}
        <svg 
          className="absolute animate-asteroid-3" 
          style={{ top: '55%', left: '10%' }}
          width="35" height="30" viewBox="0 0 35 30"
        >
          <path
            d="M5,15 Q3,8 12,5 Q22,3 30,10 Q33,18 25,25 Q15,28 8,22 Q2,18 5,15"
            fill="#2d2d2d"
            stroke="#3d3d3d"
            strokeWidth="1"
          />
          <circle cx="15" cy="12" r="2" fill="#1d1d1d" />
        </svg>
      </div>

      {/* Layer 1: Comets/Shooting Stars */}
      <div 
        className="fixed inset-0 -z-23 pointer-events-none overflow-hidden"
        style={{ opacity: starsOpacity }}
      >
        <div className="absolute animate-comet-1" style={{ top: '20%', left: '-10%' }}>
          <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_6px_2px_rgba(255,255,255,0.8)]" />
          <div className="absolute top-0 left-1 w-20 h-px bg-gradient-to-r from-white/60 to-transparent" />
        </div>
        <div className="absolute animate-comet-2" style={{ top: '40%', left: '-10%' }}>
          <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full shadow-[0_0_8px_3px_rgba(57,255,20,0.6)]" />
          <div className="absolute top-0.5 left-1.5 w-24 h-px bg-gradient-to-r from-[#39FF14]/50 to-transparent" />
        </div>
        <div className="absolute animate-comet-3" style={{ top: '60%', left: '-10%' }}>
          <div className="w-1 h-1 bg-[#FF4500] rounded-full shadow-[0_0_6px_2px_rgba(255,69,0,0.6)]" />
          <div className="absolute top-0 left-1 w-16 h-px bg-gradient-to-r from-[#FF4500]/50 to-transparent" />
        </div>
      </div>

      {/* Layer 2: Rocket Ship (About Section) */}
      <div 
        className="fixed -z-22 pointer-events-none overflow-hidden transition-opacity duration-700"
        style={{ 
          opacity: rocketOpacity,
          left: '5%',
          bottom: '10%',
          width: '60px',
          height: '100vh',
        }}
      >
        <svg 
          className="absolute animate-rocket-ascend" 
          width="40" height="80" viewBox="0 0 40 80"
        >
          {/* Rocket body */}
          <ellipse cx="20" cy="35" rx="10" ry="25" fill="#555" stroke="#666" strokeWidth="1" />
          {/* Rocket nose */}
          <path d="M10,15 Q20,0 30,15" fill="#39FF14" />
          {/* Windows */}
          <circle cx="20" cy="25" r="4" fill="#0a192f" stroke="#39FF14" strokeWidth="1" />
          <circle cx="20" cy="38" r="3" fill="#0a192f" stroke="#39FF14" strokeWidth="0.5" />
          {/* Fins */}
          <path d="M10,55 L5,70 L12,55" fill="#FF4500" />
          <path d="M30,55 L35,70 L28,55" fill="#FF4500" />
          {/* Flames */}
          <ellipse cx="20" cy="68" rx="6" ry="10" fill="#FF4500" className="animate-flame" />
          <ellipse cx="20" cy="70" rx="4" ry="8" fill="#FFD700" className="animate-flame" />
          <ellipse cx="20" cy="72" rx="2" ry="5" fill="#fff" className="animate-flame" />
        </svg>
        {/* Smoke trail */}
        <div className="absolute left-4 top-20 w-8 h-96 bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-sm animate-smoke" />
      </div>

      {/* Layer 2: Airplane (About Section) */}
      <div 
        className="fixed -z-21 pointer-events-none overflow-hidden transition-opacity duration-700"
        style={{ 
          opacity: rocketOpacity * 0.6,
          top: '35%',
          left: '-5%',
          width: '110vw',
        }}
      >
        <svg 
          className="absolute animate-airplane" 
          width="30" height="15" viewBox="0 0 30 15"
        >
          {/* Plane body */}
          <ellipse cx="15" cy="7.5" rx="12" ry="3" fill="#444" />
          {/* Wings */}
          <path d="M10,7.5 L8,2 L20,7.5 L8,13 L10,7.5" fill="#555" />
          {/* Tail */}
          <path d="M3,7.5 L1,3 L5,7.5 L1,12 L3,7.5" fill="#555" />
          {/* Window glow */}
          <circle cx="18" cy="7.5" r="1" fill="#39FF14" opacity="0.8" />
        </svg>
      </div>

      {/* Layer 2: Nebula/Fog Layers */}
      <div 
        className="fixed inset-0 -z-20 pointer-events-none overflow-hidden"
        style={{ opacity: 0.05 }}
      >
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] animate-nebula-drift-1"
          style={{
            background: 'radial-gradient(circle, #39FF14 0%, transparent 70%)',
            top: '20%',
            left: '-10%',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] animate-nebula-drift-2"
          style={{
            background: 'radial-gradient(circle, #FF4500 0%, transparent 70%)',
            top: '50%',
            right: '-15%',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[80px] animate-nebula-drift-3"
          style={{
            background: 'radial-gradient(circle, #39FF14 0%, transparent 70%)',
            bottom: '10%',
            left: '30%',
          }}
        />
      </div>

      {/* Layer 3: Parallax Cloud Layers (Projects Section) */}
      <div 
        className="fixed inset-0 -z-15 pointer-events-none overflow-hidden transition-opacity duration-700"
        style={{ opacity: cloudsOpacity }}
      >
        {/* Back Layer - Slow dark clouds */}
        <svg className="absolute w-full h-full" preserveAspectRatio="none">
          <defs>
            <filter id="cloudBlur1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            </filter>
          </defs>
          <g filter="url(#cloudBlur1)" className="animate-cloud-back">
            <ellipse cx="15%" cy="45%" rx="200" ry="60" fill="rgba(20,20,40,0.4)" />
            <ellipse cx="40%" cy="50%" rx="250" ry="70" fill="rgba(25,25,50,0.35)" />
            <ellipse cx="70%" cy="42%" rx="180" ry="55" fill="rgba(20,20,40,0.4)" />
            <ellipse cx="90%" cy="55%" rx="220" ry="65" fill="rgba(25,25,50,0.35)" />
          </g>
        </svg>

        {/* Front Layer - Faster lighter clouds */}
        <svg className="absolute w-full h-full" preserveAspectRatio="none">
          <defs>
            <filter id="cloudBlur2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
            </filter>
          </defs>
          <g filter="url(#cloudBlur2)" className="animate-cloud-front">
            <ellipse cx="25%" cy="48%" rx="150" ry="45" fill="rgba(40,40,60,0.25)" />
            <ellipse cx="55%" cy="52%" rx="180" ry="50" fill="rgba(45,45,70,0.2)" />
            <ellipse cx="80%" cy="46%" rx="160" ry="48" fill="rgba(40,40,60,0.25)" />
          </g>
        </svg>
      </div>

      {/* Layer 4: Birds (Contact Section) */}
      <div 
        className="fixed -z-12 pointer-events-none overflow-hidden transition-opacity duration-700"
        style={{ 
          opacity: birdsOpacity,
          top: '70%',
          left: '-10%',
          width: '120vw',
        }}
      >
        {/* Flock of birds - V shapes */}
        <svg className="animate-birds-flock" width="200" height="60" viewBox="0 0 200 60">
          <g fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round">
            {/* Bird 1 */}
            <path d="M10,30 L20,25 M20,25 L30,30" className="animate-bird-flap" />
            {/* Bird 2 */}
            <path d="M35,20 L45,15 M45,15 L55,20" className="animate-bird-flap" style={{ animationDelay: '0.2s' }} />
            {/* Bird 3 */}
            <path d="M50,35 L60,30 M60,30 L70,35" className="animate-bird-flap" style={{ animationDelay: '0.4s' }} />
            {/* Bird 4 */}
            <path d="M75,25 L85,20 M85,20 L95,25" className="animate-bird-flap" style={{ animationDelay: '0.1s' }} />
            {/* Bird 5 */}
            <path d="M90,40 L100,35 M100,35 L110,40" className="animate-bird-flap" style={{ animationDelay: '0.3s' }} />
            {/* Bird 6 */}
            <path d="M115,28 L125,23 M125,23 L135,28" className="animate-bird-flap" style={{ animationDelay: '0.5s' }} />
            {/* Bird 7 */}
            <path d="M140,18 L150,13 M150,13 L160,18" className="animate-bird-flap" style={{ animationDelay: '0.25s' }} />
            {/* Bird 8 */}
            <path d="M155,38 L165,33 M165,33 L175,38" className="animate-bird-flap" style={{ animationDelay: '0.45s' }} />
          </g>
        </svg>
      </div>

      {/* Layer 4: South Indian Town Skyline Silhouette */}
      <div 
        className="fixed bottom-0 left-0 right-0 -z-10 pointer-events-none transition-opacity duration-700"
        style={{ 
          opacity: skylineOpacity,
          height: '200px',
        }}
      >
        <svg 
          viewBox="0 0 1440 200" 
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="skylineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="20%" stopColor="#000000" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000000" stopOpacity="1" />
            </linearGradient>
          </defs>
          
          {/* South Indian Town Silhouette */}
          <path
            d="M0,200 L0,180 
               
               /* Coconut Tree 1 */
               L20,180 L25,120 Q30,115 35,120 L35,125 Q28,118 32,125 L32,130 Q25,122 30,130 L30,135
               Q40,110 50,125 Q45,115 55,130 Q50,118 60,135 Q55,122 62,140
               L40,140 L42,180
               
               /* Small House 1 */
               L60,180 L60,160 L65,150 L85,150 L90,160 L90,180
               
               /* Coconut Tree 2 */
               L100,180 L105,130 Q110,125 115,130 L115,135 Q108,128 112,135 L112,140
               Q120,115 130,130 Q125,120 135,135 Q130,122 140,140
               L120,145 L122,180
               
               /* Temple Gopuram 1 - Tiered Tower */
               L150,180 L150,140 L155,140 L155,120 L160,120 L160,100 L165,100 L165,80 
               L170,80 L172,65 L175,55 L178,65 L180,80 
               L185,80 L185,100 L190,100 L190,120 L195,120 L195,140 L200,140 L200,180
               
               /* Small Houses */
               L220,180 L220,165 L225,155 L245,155 L250,165 L250,180
               L260,180 L260,168 L265,158 L280,158 L285,168 L285,180
               
               /* Coconut Tree 3 */
               L300,180 L305,125 Q310,120 315,125 L315,130 Q308,123 312,130
               Q320,105 330,120 Q325,110 335,125 Q330,115 340,130
               L320,135 L322,180
               
               /* Temple Gopuram 2 - Larger */
               L360,180 L360,130 L365,130 L365,105 L370,105 L370,85 L375,85 L375,65 L380,65 
               L382,50 L385,35 L388,50 L390,65 
               L395,65 L395,85 L400,85 L400,105 L405,105 L405,130 L410,130 L410,180
               
               /* Coconut Tree 4 */
               L430,180 L435,115 Q440,110 445,115 L445,120 Q438,113 442,120
               Q450,95 460,110 Q455,100 465,115 Q460,105 470,120
               L450,125 L452,180
               
               /* Row of Small Houses with Mangalore Tiles */
               L480,180 L480,162 L485,152 L505,152 L510,162 L510,180
               L520,180 L520,165 L525,155 L545,155 L550,165 L550,180
               L560,180 L560,160 L565,150 L590,150 L595,160 L595,180
               
               /* Coconut Tree 5 */
               L620,180 L625,120 Q630,115 635,120 L635,125 Q628,118 632,125
               Q640,100 650,115 Q645,105 655,120 Q650,110 660,125
               L640,130 L642,180
               
               /* Small Temple */
               L680,180 L680,155 L685,155 L685,140 L695,130 L705,140 L705,155 L710,155 L710,180
               
               /* Coconut Trees Cluster */
               L740,180 L745,130 Q750,125 755,130 Q760,110 770,125 Q765,115 775,130 L760,135 L762,180
               L780,180 L785,125 Q790,120 795,125 Q800,105 810,120 Q805,110 815,125 L800,130 L802,180
               
               /* Large Temple Gopuram - Main Feature */
               L850,180 L850,120 L855,120 L855,95 L860,95 L860,75 L865,75 L865,55 L870,55 L870,40
               L875,40 L878,25 L882,15 L886,25 L890,40
               L895,40 L895,55 L900,55 L900,75 L905,75 L905,95 L910,95 L910,120 L915,120 L915,180
               
               /* Coconut Tree 6 */
               L940,180 L945,125 Q950,120 955,125 L955,130 Q948,123 952,130
               Q960,105 970,120 Q965,110 975,125 Q970,115 980,130
               L960,135 L962,180
               
               /* Houses */
               L1000,180 L1000,165 L1005,155 L1025,155 L1030,165 L1030,180
               L1045,180 L1045,160 L1050,150 L1075,150 L1080,160 L1080,180
               
               /* Coconut Tree 7 */
               L1100,180 L1105,120 Q1110,115 1115,120 L1115,125
               Q1120,100 1130,115 Q1125,105 1135,120 Q1130,110 1140,125
               L1120,130 L1122,180
               
               /* Small Temple 2 */
               L1160,180 L1160,150 L1165,150 L1165,135 L1175,125 L1185,135 L1185,150 L1190,150 L1190,180
               
               /* Coconut Tree 8 */
               L1220,180 L1225,115 Q1230,110 1235,115 L1235,120
               Q1240,95 1250,110 Q1245,100 1255,115 Q1250,105 1260,120
               L1240,125 L1242,180
               
               /* Final Houses */
               L1280,180 L1280,165 L1285,155 L1310,155 L1315,165 L1315,180
               L1330,180 L1330,168 L1335,158 L1355,158 L1360,168 L1360,180
               
               /* Coconut Tree 9 */
               L1380,180 L1385,125 Q1390,120 1395,125 L1395,130
               Q1400,105 1410,120 Q1405,110 1415,125
               L1400,130 L1402,180
               
               L1440,180 L1440,200 Z"
            fill="#000000"
          />
          
          {/* Decorative temple lights */}
          <g fill="#39FF14" opacity="0.2">
            {/* Gopuram 1 lights */}
            <circle cx="175" cy="60" r="2" />
            <circle cx="172" cy="75" r="1.5" />
            <circle cx="178" cy="75" r="1.5" />
            {/* Gopuram 2 lights */}
            <circle cx="385" cy="42" r="2" />
            <circle cx="382" cy="60" r="1.5" />
            <circle cx="388" cy="60" r="1.5" />
            {/* Main Gopuram lights */}
            <circle cx="882" cy="22" r="2.5" />
            <circle cx="878" cy="35" r="2" />
            <circle cx="886" cy="35" r="2" />
            <circle cx="875" cy="50" r="1.5" />
            <circle cx="889" cy="50" r="1.5" />
            {/* Small temple lights */}
            <circle cx="695" cy="135" r="1.5" />
            <circle cx="1175" cy="130" r="1.5" />
          </g>
          
          {/* House window lights */}
          <g fill="#FFD700" opacity="0.15">
            <rect x="72" y="158" width="4" height="5" />
            <rect x="232" y="162" width="3" height="4" />
            <rect x="270" y="165" width="3" height="4" />
            <rect x="492" y="158" width="3" height="5" />
            <rect x="532" y="162" width="3" height="4" />
            <rect x="575" y="157" width="4" height="5" />
            <rect x="1012" y="162" width="3" height="4" />
            <rect x="1060" y="157" width="4" height="5" />
            <rect x="1295" y="162" width="3" height="4" />
            <rect x="1345" y="165" width="3" height="4" />
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
        
        /* Asteroid animations */
        @keyframes asteroid-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(120vw, 30vh) rotate(360deg); }
        }
        
        @keyframes asteroid-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-100vw, 20vh) rotate(-270deg); }
        }
        
        @keyframes asteroid-3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(80vw, -15vh) rotate(180deg); }
        }
        
        .animate-asteroid-1 {
          animation: asteroid-1 60s linear infinite;
        }
        
        .animate-asteroid-2 {
          animation: asteroid-2 75s linear infinite;
        }
        
        .animate-asteroid-3 {
          animation: asteroid-3 90s linear infinite;
        }
        
        /* Comet animations */
        @keyframes comet-1 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(120vw, 15vh); opacity: 0; }
        }
        
        @keyframes comet-2 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(110vw, 20vh); opacity: 0; }
        }
        
        @keyframes comet-3 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(100vw, 10vh); opacity: 0; }
        }
        
        .animate-comet-1 {
          animation: comet-1 8s linear infinite;
        }
        
        .animate-comet-2 {
          animation: comet-2 12s linear infinite 3s;
        }
        
        .animate-comet-3 {
          animation: comet-3 10s linear infinite 6s;
        }
        
        /* Rocket animation */
        @keyframes rocket-ascend {
          0% { transform: translateY(100vh) rotate(-15deg); }
          100% { transform: translateY(-150vh) rotate(-15deg); }
        }
        
        .animate-rocket-ascend {
          animation: rocket-ascend 25s linear infinite;
        }
        
        @keyframes flame {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
          50% { transform: scaleY(1.2) scaleX(0.9); opacity: 1; }
        }
        
        .animate-flame {
          animation: flame 0.15s ease-in-out infinite;
        }
        
        @keyframes smoke {
          0% { opacity: 0.3; transform: scaleX(1); }
          100% { opacity: 0; transform: scaleX(2); }
        }
        
        .animate-smoke {
          animation: smoke 2s ease-out infinite;
        }
        
        /* Airplane animation */
        @keyframes airplane {
          0% { transform: translateX(0); }
          100% { transform: translateX(110vw); }
        }
        
        .animate-airplane {
          animation: airplane 40s linear infinite;
        }
        
        /* Cloud animations */
        @keyframes cloud-back {
          0% { transform: translateX(0); }
          100% { transform: translateX(-30%); }
        }
        
        @keyframes cloud-front {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-cloud-back {
          animation: cloud-back 60s linear infinite;
        }
        
        .animate-cloud-front {
          animation: cloud-front 40s linear infinite;
        }
        
        /* Birds animations */
        @keyframes birds-flock {
          0% { transform: translateX(0); }
          100% { transform: translateX(110vw); }
        }
        
        @keyframes bird-flap {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.7); }
        }
        
        .animate-birds-flock {
          animation: birds-flock 30s linear infinite;
        }
        
        .animate-bird-flap {
          animation: bird-flap 0.4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default CosmicBackground;
