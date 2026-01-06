import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
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
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-foreground leading-[1.1] mb-1">
                Hi,{' '}
                <span className="text-primary relative inline-block">
                  Likhith Reddy Chilakala
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-zen-neon" />
                </span>
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-foreground leading-[1.1]">
                here<span className="text-zen-neon">.</span>
              </span>
            </h1>

            {/* Description - Clean and simple like Robb */}
            <p 
              className="text-lg md:text-xl text-muted-foreground mt-8 opacity-0 animate-fade-in max-w-md"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              I'm a <span className="text-foreground font-semibold">Java Backend Developer</span> from
              <br />Hyderabad, India.
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

          {/* Right: Large Decorative Graphic - Like Robb's illustration */}
          <div 
            className="hidden lg:flex items-center justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Diagonal pattern background circle */}
              <div 
                className="absolute inset-0 rounded-full opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 8px,
                    hsl(var(--zen-neon)) 8px,
                    hsl(var(--zen-neon)) 9px
                  )`
                }}
              />
              
              {/* Main decorative circle */}
              <div className="absolute inset-4 rounded-full border-2 border-primary/40 bg-primary/5" />
              <div className="absolute inset-12 rounded-full border border-zen-neon/30" />
              
              {/* Center kanji - prominent like Robb's face */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-serif text-foreground/15 select-none leading-none">
                道
              </div>
              
              {/* Accent elements */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-zen-neon/50" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary/50" />
              
              {/* Small decorative dots */}
              <div className="absolute top-1/4 right-0 w-3 h-3 rounded-full bg-zen-neon/60" />
              <div className="absolute bottom-1/4 left-0 w-3 h-3 rounded-full bg-primary/60" />
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
