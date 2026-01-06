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
            <div className="relative w-[400px] h-[500px] animate-float">
              {/* Warm radiance glow layers - Yellow/Orange/Red/Pink */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255, 215, 0, 0.5) 0%, transparent 55%)',
                  filter: 'blur(35px)',
                  animation: 'spectrum-pulse 2.5s ease-in-out infinite',
                }}
              />
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse at 40% 50%, rgba(255, 140, 0, 0.45) 0%, transparent 50%)',
                  filter: 'blur(40px)',
                  animation: 'spectrum-pulse 3s ease-in-out infinite 0.3s, spectrum-rotate 10s linear infinite',
                }}
              />
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse at 60% 50%, rgba(255, 69, 0, 0.4) 0%, transparent 55%)',
                  filter: 'blur(45px)',
                  animation: 'spectrum-pulse 3.5s ease-in-out infinite 0.6s, spectrum-rotate 12s linear infinite reverse',
                }}
              />
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse at 50% 60%, rgba(220, 20, 60, 0.35) 0%, transparent 60%)',
                  filter: 'blur(50px)',
                  animation: 'spectrum-pulse 4s ease-in-out infinite 0.9s, spectrum-rotate 14s linear infinite',
                }}
              />
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse at 50% 40%, rgba(255, 105, 180, 0.3) 0%, transparent 50%)',
                  filter: 'blur(45px)',
                  animation: 'spectrum-pulse 3s ease-in-out infinite 1.2s, spectrum-rotate 11s linear infinite reverse',
                }}
              />
              
              {/* The sketch image with warm drop shadows */}
              <img 
                src={developerSketch} 
                alt="Developer illustration - stylized sketch of a developer with laptop"
                className="relative z-10 w-full h-full object-contain"
                style={{
                  filter: `
                    drop-shadow(0 0 12px rgba(255, 215, 0, 0.7))
                    drop-shadow(0 0 25px rgba(255, 140, 0, 0.5))
                    drop-shadow(0 0 40px rgba(255, 69, 0, 0.4))
                    drop-shadow(0 0 55px rgba(220, 20, 60, 0.3))
                    drop-shadow(0 0 70px rgba(255, 105, 180, 0.2))
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
