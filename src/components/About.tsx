import { Code, Database, Lightbulb, Target } from 'lucide-react';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'JavaScript', level: 75 },
  { name: 'MySQL', level: 85 },
  { name: 'NoSQL', level: 70 },
  { name: 'DSA', level: 80 },
  { name: 'System Design (LLD)', level: 75 },
  { name: 'HTML/CSS', level: 80 },
];

const values = [
  {
    icon: Target,
    title: 'Value Creation',
    description: 'The only metric that truly matters in building software.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, efficient, and elegant solutions.',
  },
  {
    icon: Database,
    title: 'System Thinking',
    description: 'Designing scalable architectures with precision.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Embracing growth through disciplined upskilling.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            The Path of a Developer
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Left Column - Bio */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A stoic-oriented thinker and Java Backend Developer driven by a philosophy 
              where value creation is the ultimate measure of success. With 9 months of 
              internship experience at <span className="text-foreground font-medium">Tata Elxsi</span>, 
              I honed my skills in enterprise-level development.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a 2024 graduate from <span className="text-foreground font-medium">R.M.K. Engineering College</span>, 
              I've committed to intensive upskilling at <span className="text-foreground font-medium">Scaler Academy</span> and 
              <span className="text-foreground font-medium"> BITSoM</span>, mastering DSA, System Design, 
              and Product Management with AI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I look beyond just writing code—I focus on building unique solutions that 
              deliver tangible results. Currently returning from a strategic career break 
              with a sharpened skillset and commitment to excellence.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <value.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-foreground text-sm mb-1">{value.title}</h4>
                  <p className="text-xs text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-xl font-serif font-medium text-foreground mb-8">
              Technical Arsenal
            </h3>

            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Education Timeline */}
            <div className="mt-12">
              <h3 className="text-xl font-serif font-medium text-foreground mb-6">
                Education & Training
              </h3>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-primary">
                  <p className="text-sm text-muted-foreground">2025 - Present</p>
                  <h4 className="font-medium text-foreground">BITSoM</h4>
                  <p className="text-sm text-muted-foreground">Product Management with Gen AI</p>
                </div>
                <div className="pl-4 border-l-2 border-border hover:border-primary transition-colors">
                  <p className="text-sm text-muted-foreground">2025 - Present</p>
                  <h4 className="font-medium text-foreground">Scaler Academy</h4>
                  <p className="text-sm text-muted-foreground">DSA, SQL, System Design</p>
                </div>
                <div className="pl-4 border-l-2 border-border hover:border-primary transition-colors">
                  <p className="text-sm text-muted-foreground">2020 - 2024</p>
                  <h4 className="font-medium text-foreground">R.M.K. Engineering College</h4>
                  <p className="text-sm text-muted-foreground">Bachelor's Degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
