import { Github, Linkedin, Mail } from 'lucide-react';
import developerSketch from '@/assets/developer-sketch.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle diagonal pattern like Robb's */}
        <div 
          className="absolute right-0 top-0 w-1/2 h-full opacity-[0.04] hidden lg:block"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 10px,
              hsl(var(--zen-neon)) 10px,
              hsl(var(--zen-neon)) 11px
            )`
          }}
        />
        
        {/* Neon accent lines */}
        <div className="absolute top-0 right-1/4 w-px h-[40%] bg-gradient-to-b from-zen-neon/60 via-zen-neon/20 to-transparent" />
        <div className="absolute bottom-0 left-1/3 w-px h-[30%] bg-gradient-to-t from-primary/40 via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left: Content - Centered more */}
          <div className="flex flex-col justify-center lg:pl-12">
            {/* Name - Reduced size */}
            <h1 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-grotesk font-bold text-foreground leading-[1.1] mb-1 tracking-[-0.02em]">
                Hi,
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-grotesk font-extrabold leading-[1.1] tracking-[-0.02em]">
                <span className="text-primary relative inline-block">
                  Likhith Reddy Chilakala
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-zen-neon" />
                </span>
                <span className="text-foreground">, here</span>
                <span className="text-zen-neon">.</span>
              </span>
            </h1>

            {/* Description - Clean and simple like Robb */}
            <p 
              className="text-lg md:text-xl text-muted-foreground mt-8 opacity-0 animate-fade-in max-w-md"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              I'm a <span className="text-foreground font-semibold">Java Backend Developer</span> from
              <br />Markapur, Andhra Pradesh (open to relocate).
            </p>

            {/* Social Links - Bottom left aligned */}
            <div
              className="flex items-center gap-6 mt-12 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <a
                href="https://github.com/LikhithReddyChilakala"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-zen-neon transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={22} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/likhith-reddy-chilakala-027497231/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-zen-neon transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:likhithreddy2423@gmail.com"
                className="group flex items-center gap-2 text-muted-foreground hover:text-zen-neon transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={22} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Right: Developer Sketch with Spectrum Radiance */}
          <div 
            className="hidden lg:flex items-center justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div className="relative w-[500px] h-[500px] animate-float">
              {/* Radiating lines effect - multi-color spectrum beams */}
              <div 
                className="absolute inset-[-100px] z-0"
                style={{
                  background: `
                    conic-gradient(
                      from 0deg at 50% 50%,
                      transparent 0deg,
                      rgba(57, 255, 20, 0.6) 5deg,
                      transparent 10deg,
                      transparent 20deg,
                      rgba(220, 38, 38, 0.6) 25deg,
                      transparent 30deg,
                      transparent 40deg,
                      rgba(255, 200, 0, 0.6) 45deg,
                      transparent 50deg,
                      transparent 60deg,
                      rgba(57, 255, 20, 0.6) 65deg,
                      transparent 70deg,
                      transparent 80deg,
                      rgba(255, 120, 0, 0.6) 85deg,
                      transparent 90deg,
                      transparent 100deg,
                      rgba(220, 38, 38, 0.6) 105deg,
                      transparent 110deg,
                      transparent 120deg,
                      rgba(57, 255, 20, 0.5) 125deg,
                      transparent 130deg,
                      transparent 140deg,
                      rgba(255, 200, 0, 0.5) 145deg,
                      transparent 150deg,
                      transparent 160deg,
                      rgba(255, 120, 0, 0.5) 165deg,
                      transparent 170deg,
                      transparent 180deg,
                      rgba(220, 38, 38, 0.5) 185deg,
                      transparent 190deg,
                      transparent 200deg,
                      rgba(57, 255, 20, 0.6) 205deg,
                      transparent 210deg,
                      transparent 220deg,
                      rgba(255, 200, 0, 0.6) 225deg,
                      transparent 230deg,
                      transparent 240deg,
                      rgba(220, 38, 38, 0.5) 245deg,
                      transparent 250deg,
                      transparent 260deg,
                      rgba(255, 120, 0, 0.6) 265deg,
                      transparent 270deg,
                      transparent 280deg,
                      rgba(57, 255, 20, 0.5) 285deg,
                      transparent 290deg,
                      transparent 300deg,
                      rgba(220, 38, 38, 0.6) 305deg,
                      transparent 310deg,
                      transparent 320deg,
                      rgba(255, 200, 0, 0.5) 325deg,
                      transparent 330deg,
                      transparent 340deg,
                      rgba(57, 255, 20, 0.6) 345deg,
                      transparent 350deg,
                      transparent 360deg
                    )
                  `,
                  filter: 'blur(2px)',
                  animation: 'spectrum-rotate 30s linear infinite',
                }}
              />
              
              {/* Secondary glow layer for depth */}
              <div 
                className="absolute inset-[-80px] z-0"
                style={{
                  background: `
                    conic-gradient(
                      from 15deg at 50% 50%,
                      transparent 0deg,
                      rgba(57, 255, 20, 0.3) 8deg,
                      transparent 16deg,
                      transparent 35deg,
                      rgba(220, 38, 38, 0.3) 43deg,
                      transparent 51deg,
                      transparent 70deg,
                      rgba(255, 200, 0, 0.3) 78deg,
                      transparent 86deg,
                      transparent 105deg,
                      rgba(255, 120, 0, 0.3) 113deg,
                      transparent 121deg,
                      transparent 140deg,
                      rgba(57, 255, 20, 0.3) 148deg,
                      transparent 156deg,
                      transparent 175deg,
                      rgba(220, 38, 38, 0.3) 183deg,
                      transparent 191deg,
                      transparent 210deg,
                      rgba(255, 200, 0, 0.3) 218deg,
                      transparent 226deg,
                      transparent 245deg,
                      rgba(255, 120, 0, 0.3) 253deg,
                      transparent 261deg,
                      transparent 280deg,
                      rgba(57, 255, 20, 0.3) 288deg,
                      transparent 296deg,
                      transparent 315deg,
                      rgba(220, 38, 38, 0.3) 323deg,
                      transparent 331deg,
                      transparent 350deg,
                      rgba(255, 200, 0, 0.3) 358deg,
                      transparent 360deg
                    )
                  `,
                  filter: 'blur(8px)',
                  animation: 'spectrum-rotate 25s linear infinite reverse',
                }}
              />
              
              {/* Central glow behind image */}
              <div 
                className="absolute inset-0 rounded-full z-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(57, 255, 20, 0.4) 0%, rgba(220, 38, 38, 0.2) 40%, transparent 70%)',
                  filter: 'blur(30px)',
                  animation: 'spectrum-pulse 3s ease-in-out infinite',
                }}
              />
              
              {/* The sketch image with multi-color neon drop shadows */}
              <img 
                src={developerSketch} 
                alt="Developer illustration - stylized sketch of a developer with laptop"
                className="relative z-10 w-full h-full object-contain"
                style={{
                  filter: `
                    drop-shadow(0 0 10px rgba(57, 255, 20, 0.8))
                    drop-shadow(0 0 20px rgba(57, 255, 20, 0.5))
                    drop-shadow(0 0 35px rgba(220, 38, 38, 0.4))
                    drop-shadow(0 0 50px rgba(255, 200, 0, 0.3))
                  `,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Centered at bottom */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-zen-neon transition-colors group"
        >
          <span className="text-xs tracking-[0.4em] uppercase font-mono">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent group-hover:from-zen-neon transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
