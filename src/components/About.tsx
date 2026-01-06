import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Java', size: 'lg', position: { top: '5%', left: '10%' } },
  { name: 'Python', size: 'md', position: { top: '15%', left: '55%' } },
  { name: 'JavaScript', size: 'sm', position: { top: '30%', left: '25%' } },
  { name: 'MySQL', size: 'md', position: { top: '45%', left: '5%' } },
  { name: 'NoSQL', size: 'sm', position: { top: '35%', left: '60%' } },
  { name: 'DSA', size: 'lg', position: { top: '55%', left: '40%' } },
  { name: 'System Design', size: 'md', position: { top: '70%', left: '15%' } },
  { name: 'HTML/CSS', size: 'sm', position: { top: '75%', left: '55%' } },
  { name: 'Spring Boot', size: 'md', position: { top: '20%', left: '5%' } },
  { name: 'REST APIs', size: 'sm', position: { top: '60%', left: '65%' } },
];

const timeline = [
  {
    year: '2025',
    title: 'BITSoM',
    description: 'Product Management with Gen AI',
    side: 'right' as const,
  },
  {
    year: '2025',
    title: 'Scaler Academy',
    description: 'DSA, SQL, System Design',
    side: 'left' as const,
  },
  {
    year: '2023-24',
    title: 'Tata Elxsi',
    description: 'Backend Developer Intern - NTG Unit',
    side: 'right' as const,
  },
  {
    year: '2020-24',
    title: 'R.M.K. Engineering College',
    description: "Bachelor's in Engineering",
    side: 'left' as const,
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'lg':
        return 'text-2xl md:text-3xl font-bold';
      case 'md':
        return 'text-lg md:text-xl font-medium';
      default:
        return 'text-sm md:text-base';
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            hsl(var(--zen-neon)) 100px,
            hsl(var(--zen-neon)) 101px
          )`
        }}
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`text-xs tracking-[0.3em] uppercase text-primary mb-4 block font-mono transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            心得 — Understanding
          </span>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            The Path of a Developer
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Column - Interactive Skills Cloud */}
          <div className="relative">
            <h3 
              className={`text-lg font-serif text-muted-foreground mb-8 flex items-center gap-3 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <span className="w-8 h-px bg-gradient-to-r from-primary to-zen-neon" />
              Technical Arsenal
            </h3>

            {/* Skills Cloud Container */}
            <div className="relative h-[400px] md:h-[500px]">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`absolute cursor-default select-none transition-all duration-500 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{
                    top: skill.position.top,
                    left: skill.position.left,
                    transitionDelay: `${300 + index * 100}ms`,
                  }}
                >
                  <span
                    className={`
                      ${getSizeClasses(skill.size)}
                      text-muted-foreground/40 font-serif
                      hover:text-zen-neon hover:drop-shadow-[0_0_20px_hsl(var(--zen-neon))]
                      hover:scale-110
                      transition-all duration-300 ease-out
                      inline-block
                    `}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/20" />
              <div className="absolute top-10 right-10 w-3 h-3 rounded-full bg-zen-neon/30" />
            </div>

            {/* Bio text */}
            <p 
              className={`text-muted-foreground leading-relaxed mt-8 max-w-md transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              A stoic-oriented thinker driven by value creation. Beyond writing code, 
              I focus on building unique solutions that deliver tangible results.
            </p>
          </div>

          {/* Right Column - Bamboo Timeline */}
          <div className="relative">
            <h3 
              className={`text-lg font-serif text-muted-foreground mb-8 flex items-center gap-3 justify-end transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              The Path
              <span className="w-8 h-px bg-gradient-to-l from-primary to-zen-neon" />
            </h3>

            {/* Timeline Container */}
            <div className="relative">
              {/* Bamboo Stalk - Central Line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1">
                {/* Main stem with gradient */}
                <div 
                  className={`w-full h-full bg-gradient-to-b from-zen-neon via-primary to-zen-neon rounded-full transition-all duration-1000 ${
                    isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  }`}
                  style={{ transformOrigin: 'top' }}
                />
                
                {/* Bamboo nodes */}
                {[0, 25, 50, 75].map((pos) => (
                  <div
                    key={pos}
                    className={`absolute left-1/2 -translate-x-1/2 w-3 h-1 bg-zen-neon/60 rounded-full transition-all duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ top: `${pos}%`, transitionDelay: `${800 + pos * 10}ms` }}
                  />
                ))}
              </div>

              {/* Timeline Items */}
              <div className="space-y-8 relative">
                {timeline.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-center gap-4 ${
                      item.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                    } transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    {/* Content Card */}
                    <div 
                      className={`flex-1 p-5 bg-card/50 border border-border/50 rounded-lg 
                        hover:border-zen-neon/50 hover:bg-card/80 transition-all duration-300 group
                        ${item.side === 'left' ? 'text-right' : 'text-left'}`}
                    >
                      <span className="text-xs font-mono text-zen-neon tracking-wider">
                        {item.year}
                      </span>
                      <h4 className="font-serif font-medium text-foreground text-lg mt-1 group-hover:text-zen-neon transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Center Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-background border-2 border-zen-neon group-hover:bg-zen-neon transition-colors" />
                      {/* Branch line */}
                      <div 
                        className={`absolute top-1/2 -translate-y-1/2 h-px w-8 bg-gradient-to-r ${
                          item.side === 'left' 
                            ? 'right-full from-transparent to-zen-neon/50' 
                            : 'left-full from-zen-neon/50 to-transparent'
                        }`}
                      />
                    </div>

                    {/* Spacer for other side */}
                    <div className="flex-1" />
                  </div>
                ))}
              </div>

              {/* Decorative leaf at bottom */}
              <div 
                className={`absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl text-zen-neon/20 font-serif transition-all duration-1000 delay-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                竹
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
