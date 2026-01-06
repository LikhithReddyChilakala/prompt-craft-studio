import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(180deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Japanese character watermark */}
        <div className="absolute top-1/4 right-[10%] text-[300px] font-serif text-zen-crimson/[0.08] select-none leading-none hidden lg:block">
          侍
        </div>
        
        {/* Neon accent line */}
        <div className="absolute top-0 right-1/4 w-px h-[40%] bg-gradient-to-b from-zen-neon/60 via-zen-neon/20 to-transparent" />
        <div className="absolute bottom-0 left-1/3 w-px h-[30%] bg-gradient-to-t from-zen-crimson/40 via-zen-crimson/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            {/* Name - Robb style compact */}
            <h1 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <span className="block text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Hi, my
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                name is{' '}
                <span className="text-zen-crimson">Likhith</span>
                <span className="text-zen-neon">.</span>
              </span>
            </h1>

            {/* Description */}
            <p 
              className="text-base md:text-lg text-muted-foreground mt-6 opacity-0 animate-fade-in max-w-md"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              I'm a <span className="text-foreground font-medium">Java Backend Developer</span> from
              <br />Hyderabad, India.
            </p>

            {/* Social Links */}
            <div
              className="flex items-center gap-5 mt-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <a
                href="https://github.com/LikhithReddyChilakala"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-zen-neon transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/likhith-reddy-chilakala-027497231/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-zen-neon transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:likhithreddy2423@gmail.com"
                className="group flex items-center gap-2 text-muted-foreground hover:text-zen-neon transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm hidden sm:inline">Email</span>
              </a>
            </div>
          </div>

          {/* Right: Decorative Visual */}
          <div 
            className="hidden lg:flex items-center justify-center opacity-0 animate-fade-in relative"
            style={{ animationDelay: '0.6s' }}
          >
            {/* Abstract samurai silhouette suggestion with geometric shapes */}
            <div className="relative w-80 h-96">
              {/* Main circle - like a moon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-zen-crimson/30 bg-zen-crimson/5" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-zen-neon/20" />
              
              {/* Decorative lines */}
              <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-zen-neon/30 to-transparent" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zen-crimson/30 to-transparent" />
              
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-zen-neon/40" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-zen-crimson/40" />
              
              {/* Center kanji */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-serif text-foreground/10">
                道
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1s' }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-zen-neon transition-colors group"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-mono">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
