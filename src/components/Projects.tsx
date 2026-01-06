import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Weekly Compliance Logic Engine',
    description:
      'Automated compliance tracking system built at Tata Elxsi using Python, pandas, and numpy. Streamlined weekly compliance processes for enterprise-level operations.',
    tags: ['Python', 'pandas', 'numpy', 'Automation'],
    type: 'Professional',
    featured: true,
  },
  {
    title: 'Library Management System',
    description:
      'Full-featured backend system demonstrating OOP principles, database design, and CRUD operations for managing library resources.',
    tags: ['Java', 'OOP', 'MySQL', 'System Design'],
    type: 'Personal',
  },
  {
    title: 'Book My Show Clone',
    description:
      'Backend implementation of a movie ticket booking platform with seat selection, show management, and booking logic.',
    tags: ['Java', 'LLD', 'Design Patterns'],
    type: 'Personal',
  },
  {
    title: 'Splitwise Clone',
    description:
      'Expense splitting application backend with support for equal and unequal splits, group management, and balance calculations.',
    tags: ['Java', 'OOP', 'Algorithm Design'],
    type: 'Personal',
  },
  {
    title: 'Parking Lot System',
    description:
      'Low-level design implementation of a parking lot with multiple floors, vehicle types, and spot allocation strategies.',
    tags: ['Java', 'LLD', 'OOP', 'Strategy Pattern'],
    type: 'Personal',
  },
  {
    title: 'Tic Tac Toe',
    description:
      'Classic game implementation showcasing clean code practices, game logic, and winner detection algorithms.',
    tags: ['Java', 'OOP', 'Game Logic'],
    type: 'Personal',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30">
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
            A collection of projects demonstrating system design, OOP principles, and backend engineering.
          </p>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <div
            key={project.title}
            className="mb-12 p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 zen-glow max-w-4xl mx-auto"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs tracking-widest uppercase text-accent">
                Featured • {project.type}
              </span>
              <Folder className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.title}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-6 h-6 text-primary" />
                <span className="text-xs text-muted-foreground">{project.type}</span>
              </div>
              <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-medium bg-secondary text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-secondary"
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
