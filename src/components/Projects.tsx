import { useState, useEffect, useCallback } from 'react';
import { Github, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const timelineProjects = [
  {
    title: 'Tic Tac Toe',
    description: 'Classic game with clean code practices and winner detection algorithms.',
    tags: ['Java', 'OOP', 'Game Logic'],
    position: 0,
  },
  {
    title: 'Parking Lot System',
    description: 'Low-level design with multiple floors and spot allocation strategies.',
    tags: ['Java', 'LLD', 'Strategy Pattern'],
    position: 1,
  },
  {
    title: 'Library Management',
    description: 'Full-featured backend with OOP principles and CRUD operations.',
    tags: ['Java', 'OOP', 'MySQL'],
    position: 2,
  },
  {
    title: 'Book My Show Clone',
    description: 'Movie ticket booking with seat selection and booking logic.',
    tags: ['Java', 'LLD', 'Design Patterns'],
    position: 3,
  },
  {
    title: 'Splitwise Clone',
    description: 'Expense splitting with equal/unequal splits and balance calculations.',
    tags: ['Java', 'OOP', 'Algorithms'],
    position: 4,
  },
];

const featuredProject = {
  title: 'Weekly Compliance Logic Engine',
  description: 'Automated compliance tracking system built at Tata Elxsi. Streamlined weekly compliance processes for enterprise-level operations.',
  tags: ['Python', 'pandas', 'numpy', 'Automation'],
  company: 'Tata Elxsi',
};

const allProjects = [
  ...timelineProjects,
  { ...featuredProject, position: 5, isFeatured: true },
];

const getNodeColor = (position: number) => {
  const colors = [
    { border: '#FF4500', glow: 'rgba(255, 69, 0, 0.6)' },
    { border: '#FF6B00', glow: 'rgba(255, 107, 0, 0.6)' },
    { border: '#FF8C00', glow: 'rgba(255, 140, 0, 0.6)' },
    { border: '#FFD700', glow: 'rgba(255, 215, 0, 0.6)' },
    { border: '#39FF14', glow: 'rgba(57, 255, 20, 0.6)' },
  ];
  return colors[position] || colors[4];
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % allProjects.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNodeHover = useCallback((index: number) => {
    setIsPaused(true);
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 150);
  }, []);

  const handleNodeLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  const handleFeaturedHover = useCallback(() => {
    setIsPaused(true);
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(5);
      setIsTransitioning(false);
    }, 150);
  }, []);

  const currentProject = allProjects[activeIndex];
  const isFeaturedActive = activeIndex === 5;

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#121212] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-primary mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Crafted Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A journey through system design, OOP principles, and backend engineering.
          </p>
        </div>

        {/* Main 2-Column Grid (50/50) */}
        <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto min-h-[700px]">
          
          {/* LEFT COLUMN - Timeline Zone */}
          <div className="relative h-[600px] lg:h-auto border-r border-muted-foreground/10">
            {/* Cinema Background Text - Confined to Left */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none overflow-hidden">
              <p className="text-muted-foreground/40 text-xs tracking-widest uppercase mb-6">
                Hover on nodes to explore
              </p>
              
              <div className="relative h-28 flex items-center justify-center overflow-hidden px-4">
                <h2
                  className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center transition-all duration-300 max-w-full ${
                    isTransitioning ? 'opacity-0 scale-95' : 'opacity-20 scale-100'
                  }`}
                  style={{
                    color: isFeaturedActive ? '#FFA500' : getNodeColor(activeIndex).border,
                    textShadow: isFeaturedActive 
                      ? '0 0 60px rgba(255, 165, 0, 0.3)' 
                      : `0 0 60px ${getNodeColor(activeIndex).glow}`,
                  }}
                >
                  {currentProject.title}
                </h2>
              </div>
            </div>

            {/* Diagonal Timeline */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="diagonalGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF4500" />
                  <stop offset="25%" stopColor="#FF6B00" />
                  <stop offset="50%" stopColor="#FF8C00" />
                  <stop offset="75%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#39FF14" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <line 
                x1="15%" 
                y1="85%" 
                x2="85%" 
                y2="15%" 
                stroke="url(#diagonalGradient)" 
                strokeWidth="3"
                filter="url(#glow)"
                strokeLinecap="round"
              />
              <line 
                x1="15%" 
                y1="85%" 
                x2="85%" 
                y2="15%" 
                stroke="url(#diagonalGradient)" 
                strokeWidth="8"
                opacity="0.3"
                strokeLinecap="round"
              />
            </svg>

            {/* Project Nodes */}
            {timelineProjects.map((project, index) => {
              const nodeColor = getNodeColor(project.position);
              const progress = project.position / (timelineProjects.length - 1);
              const left = 15 + progress * 70;
              const top = 85 - progress * 70;
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={project.title}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  style={{ 
                    left: `${left}%`, 
                    top: `${top}%`,
                  }}
                  onMouseEnter={() => handleNodeHover(index)}
                  onMouseLeave={handleNodeLeave}
                >
                  <div
                    className="w-5 h-5 rounded-full bg-background border-2 transition-all duration-300"
                    style={{
                      borderColor: nodeColor.border,
                      boxShadow: isActive 
                        ? `0 0 25px ${nodeColor.glow}, 0 0 50px ${nodeColor.glow}, 0 0 75px ${nodeColor.glow}`
                        : `0 0 10px ${nodeColor.glow}`,
                      transform: isActive ? 'scale(1.8)' : 'scale(1)',
                      backgroundColor: isActive ? nodeColor.border : 'var(--background)',
                    }}
                  />
                </div>
              );
            })}

            {/* Labels */}
            <div className="absolute bottom-6 left-6 text-xs text-muted-foreground/60 uppercase tracking-widest">
              Origin
            </div>
            <div className="absolute top-6 right-6 text-xs text-muted-foreground/60 uppercase tracking-widest">
              Present
            </div>
          </div>

          {/* RIGHT COLUMN - Info Zone (Split Vertically) */}
          <div className="flex flex-col h-[700px] lg:h-auto">
            
            {/* TOP-RIGHT QUADRANT - Project Detail Card */}
            <div className="flex-1 flex items-center justify-center p-8 border-b border-muted-foreground/10">
              <div 
                className="w-full max-w-md p-6 rounded-lg border backdrop-blur-sm transition-all duration-300"
                style={{
                  borderColor: isFeaturedActive ? '#FFA500' : getNodeColor(activeIndex).border,
                  backgroundColor: 'rgba(18, 18, 18, 0.9)',
                  boxShadow: isFeaturedActive 
                    ? '0 0 30px rgba(255, 165, 0, 0.2)' 
                    : `0 0 30px ${getNodeColor(activeIndex).glow}`,
                }}
              >
                <div className="text-xs text-muted-foreground/60 uppercase tracking-widest mb-3">
                  {isFeaturedActive ? 'Featured Project' : `Project ${activeIndex + 1} of ${timelineProjects.length}`}
                </div>
                <h3 
                  className={`font-serif font-bold text-2xl mb-3 transition-all duration-300 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ color: isFeaturedActive ? '#FFA500' : getNodeColor(activeIndex).border }}
                >
                  {currentProject.title}
                </h3>
                <p className={`text-muted-foreground mb-4 text-sm leading-relaxed transition-all duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                  {currentProject.description}
                </p>
                <div className={`flex flex-wrap gap-2 transition-all duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: isFeaturedActive 
                          ? 'rgba(255, 165, 0, 0.2)' 
                          : `${getNodeColor(activeIndex).border}20`,
                        color: isFeaturedActive ? '#FFA500' : getNodeColor(activeIndex).border,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM-RIGHT QUADRANT - Tata Elxsi Triangle */}
            <div className="flex-1 flex items-end justify-end p-8">
              <div 
                className="relative cursor-pointer group"
                onMouseEnter={handleFeaturedHover}
                onMouseLeave={handleNodeLeave}
              >
                {/* Outer Glow */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 ${isFeaturedActive ? 'opacity-100' : 'opacity-60'}`}
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                    background: 'radial-gradient(circle at 50% 70%, rgba(255, 165, 0, 0.4) 0%, transparent 70%)',
                    transform: 'scale(1.3)',
                    filter: 'blur(20px)',
                  }}
                />
                
                {/* Main Triangle */}
                <div
                  className={`relative w-48 h-44 md:w-56 md:h-52 flex flex-col items-center justify-center text-center p-6 transition-all duration-500 ${
                    isFeaturedActive ? 'scale-105' : 'scale-100'
                  }`}
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                    background: `linear-gradient(180deg, rgba(255, 165, 0, 0.15) 0%, rgba(255, 215, 0, 0.1) 50%, rgba(18, 18, 18, 0.95) 100%)`,
                  }}
                >
                  {/* Triangle Border */}
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 87"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="triangleGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFA500" />
                        <stop offset="100%" stopColor="#FFD700" />
                      </linearGradient>
                      <filter id="triangleGlow">
                        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <polygon 
                      points="50,0 100,87 0,87" 
                      fill="none" 
                      stroke="url(#triangleGradient)" 
                      strokeWidth="1.5"
                      filter="url(#triangleGlow)"
                    />
                  </svg>
                  
                  {/* Company Badge */}
                  <div 
                    className="absolute top-6 px-2 py-0.5 rounded-full text-[9px] font-medium tracking-wider uppercase"
                    style={{
                      background: 'linear-gradient(135deg, #FFA500, #FFD700)',
                      color: '#121212',
                    }}
                  >
                    <Zap className="inline w-2.5 h-2.5 mr-0.5" />
                    {featuredProject.company}
                  </div>
                  
                  {/* Title Only */}
                  <h3 
                    className="font-serif font-bold text-xs md:text-sm text-foreground leading-tight mt-6 px-3"
                    style={{
                      textShadow: isFeaturedActive ? '0 0 20px rgba(255, 165, 0, 0.5)' : 'none',
                    }}
                  >
                    {featuredProject.title}
                  </h3>
                </div>

                {/* Pulsing Animation */}
                <div 
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isFeaturedActive ? 'opacity-100' : 'opacity-50'}`}
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                >
                  <div 
                    className="w-full h-full"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255, 165, 0, 0.1) 0%, transparent 50%)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="border-zen-neon/50 text-zen-neon hover:bg-zen-neon/10 hover:border-zen-neon"
            asChild
          >
            <a
              href="https://github.com/LikhithReddyChilakala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
