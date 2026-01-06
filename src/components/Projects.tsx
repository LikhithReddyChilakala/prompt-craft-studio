import { useState } from 'react';
import { Github, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const timelineProjects = [
  {
    title: 'Tic Tac Toe',
    description: 'Classic game with clean code practices and winner detection algorithms.',
    tags: ['Java', 'OOP', 'Game Logic'],
    position: 0, // Bottom - oldest
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
    position: 4, // Top - newest
  },
];

const featuredProject = {
  title: 'Weekly Compliance Logic Engine',
  description: 'Automated compliance tracking system built at Tata Elxsi. Streamlined weekly compliance processes for enterprise-level operations.',
  tags: ['Python', 'pandas', 'numpy', 'Automation'],
  company: 'Tata Elxsi',
};

// Get color based on position (0 = bottom/red, 4 = top/green)
const getNodeColor = (position: number) => {
  const colors = [
    { border: '#FF4500', glow: 'rgba(255, 69, 0, 0.6)' },      // Red
    { border: '#FF6B00', glow: 'rgba(255, 107, 0, 0.6)' },     // Orange-Red
    { border: '#FF8C00', glow: 'rgba(255, 140, 0, 0.6)' },     // Orange
    { border: '#FFD700', glow: 'rgba(255, 215, 0, 0.6)' },     // Gold
    { border: '#39FF14', glow: 'rgba(57, 255, 20, 0.6)' },     // Neon Green
  ];
  return colors[position];
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#121212] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-serif text-foreground select-none">
          作
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Two-Column Asymmetric Layout */}
        <div className="grid lg:grid-cols-[60%_40%] gap-8 max-w-6xl mx-auto min-h-[600px]">
          
          {/* Left Column - Diagonal Timeline */}
          <div className="relative h-[500px] lg:h-auto">
            {/* The Diagonal Gradient Line */}
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
              {/* Main diagonal line */}
              <line 
                x1="10%" 
                y1="90%" 
                x2="90%" 
                y2="10%" 
                stroke="url(#diagonalGradient)" 
                strokeWidth="3"
                filter="url(#glow)"
                strokeLinecap="round"
              />
              {/* Subtle glow line behind */}
              <line 
                x1="10%" 
                y1="90%" 
                x2="90%" 
                y2="10%" 
                stroke="url(#diagonalGradient)" 
                strokeWidth="8"
                opacity="0.3"
                strokeLinecap="round"
              />
            </svg>

            {/* Project Nodes */}
            {timelineProjects.map((project, index) => {
              const nodeColor = getNodeColor(project.position);
              // Calculate position along diagonal (bottom-left to top-right)
              const progress = project.position / (timelineProjects.length - 1);
              const left = 10 + progress * 80; // 10% to 90%
              const top = 90 - progress * 80;  // 90% to 10%
              
              return (
                <div
                  key={project.title}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  style={{ 
                    left: `${left}%`, 
                    top: `${top}%`,
                  }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Glowing Node */}
                  <div
                    className="w-5 h-5 rounded-full bg-background border-2 transition-all duration-300"
                    style={{
                      borderColor: nodeColor.border,
                      boxShadow: hoveredProject === index 
                        ? `0 0 20px ${nodeColor.glow}, 0 0 40px ${nodeColor.glow}`
                        : `0 0 10px ${nodeColor.glow}`,
                      transform: hoveredProject === index ? 'scale(1.5)' : 'scale(1)',
                    }}
                  />
                  
                  {/* Tooltip Card */}
                  <div
                    className={`absolute left-8 top-1/2 -translate-y-1/2 w-56 p-4 bg-card/95 backdrop-blur-sm border rounded-lg transition-all duration-300 ${
                      hoveredProject === index 
                        ? 'opacity-100 translate-x-0 pointer-events-auto' 
                        : 'opacity-0 -translate-x-4 pointer-events-none'
                    }`}
                    style={{
                      borderColor: nodeColor.border,
                      boxShadow: `0 0 20px ${nodeColor.glow}`,
                    }}
                  >
                    <h4 className="font-serif font-bold text-foreground mb-2">{project.title}</h4>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-medium rounded"
                          style={{ 
                            backgroundColor: `${nodeColor.border}20`,
                            color: nodeColor.border,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Labels */}
            <div className="absolute bottom-4 left-4 text-xs text-muted-foreground/60 uppercase tracking-widest">
              Origin
            </div>
            <div className="absolute top-4 right-4 text-xs text-muted-foreground/60 uppercase tracking-widest">
              Present
            </div>
          </div>

          {/* Right Column - Featured Showcase Portal */}
          <div className="flex items-center justify-center relative">
            {/* The Hexagonal Portal */}
            <div className="relative">
              {/* Outer Glow Ring */}
              <div 
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(57, 255, 20, 0.3) 0%, transparent 70%)',
                  transform: 'scale(1.5)',
                }}
              />
              
              {/* Main Portal Circle */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full flex flex-col items-center justify-center text-center p-8 border-2"
                style={{
                  borderColor: '#39FF14',
                  background: 'radial-gradient(circle at center, rgba(57, 255, 20, 0.1) 0%, rgba(18, 18, 18, 0.95) 70%)',
                  boxShadow: `
                    0 0 30px rgba(57, 255, 20, 0.4),
                    0 0 60px rgba(57, 255, 20, 0.2),
                    0 0 100px rgba(57, 255, 20, 0.1),
                    inset 0 0 30px rgba(57, 255, 20, 0.1)
                  `,
                }}
              >
                {/* Inner Ring */}
                <div 
                  className="absolute inset-4 rounded-full border opacity-40"
                  style={{ borderColor: '#39FF14' }}
                />
                
                {/* Company Badge */}
                <div 
                  className="absolute -top-3 px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase"
                  style={{
                    backgroundColor: '#39FF14',
                    color: '#121212',
                  }}
                >
                  <Zap className="inline w-3 h-3 mr-1" />
                  {featuredProject.company}
                </div>
                
                {/* Content */}
                <h3 className="font-serif font-bold text-lg md:text-xl text-foreground mb-3 leading-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-3 px-2">
                  {featuredProject.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1">
                  {featuredProject.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full"
                      style={{
                        backgroundColor: 'rgba(57, 255, 20, 0.2)',
                        color: '#39FF14',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connecting Arrow from Timeline */}
              <svg
                className="absolute -left-16 top-1/2 -translate-y-1/2 w-16 h-8 hidden lg:block"
                viewBox="0 0 64 32"
              >
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#39FF14" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 16 L48 16 M40 8 L48 16 L40 24"
                  stroke="url(#arrowGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
              </svg>
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
