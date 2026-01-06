import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactCards = [
    {
      id: 'email',
      label: 'Email',
      icon: Mail,
      value: 'likhithreddy2423@gmail.com',
      href: 'mailto:likhithreddy2423@gmail.com',
      description: 'Direct communication channel',
      borderColor: 'border-zen-neon/50',
      glowColor: 'shadow-zen-neon/20',
      iconColor: 'text-zen-neon',
      badgeBg: 'bg-zen-neon/10',
      badgeText: 'text-zen-neon',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: Linkedin,
      value: 'Likhith Reddy',
      href: 'https://www.linkedin.com/in/likhith-reddy-chilakala-027497231/',
      description: 'Professional network presence',
      borderColor: 'border-orange-500/50',
      glowColor: 'shadow-orange-500/20',
      iconColor: 'text-orange-500',
      badgeBg: 'bg-orange-500/10',
      badgeText: 'text-orange-500',
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: Github,
      value: 'LikhithReddyChilakala',
      href: 'https://github.com/LikhithReddyChilakala',
      description: 'Open source contributions',
      borderColor: 'border-zen-red/50',
      glowColor: 'shadow-zen-red/20',
      iconColor: 'text-zen-red',
      badgeBg: 'bg-zen-red/10',
      badgeText: 'text-zen-red',
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 relative bg-transparent"
    >
      {/* Dotted overlay on transparent background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to opportunities in Java backend development. 
            Let's discuss how I can contribute to your team.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Left Column: Stacked Contact Cards */}
          <div className="flex flex-col gap-4">
            {contactCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                target={card.id !== 'email' ? '_blank' : undefined}
                rel={card.id !== 'email' ? 'noopener noreferrer' : undefined}
                className={`
                  relative p-6 rounded-xl
                  bg-card/80 backdrop-blur-sm
                  border ${card.borderColor}
                  shadow-lg ${card.glowColor}
                  hover:scale-[1.02] transition-all duration-300
                  group
                `}
              >
                {/* Pill Badge - Top Right */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full ${card.badgeBg} ${card.badgeText} text-xs font-medium`}>
                  {card.label}
                </div>

                {/* Icon - Top Left */}
                <div className={`mb-4 ${card.iconColor}`}>
                  <card.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                {/* Main Value Text */}
                <p className="text-xl md:text-2xl font-bold text-foreground mb-2 break-all">
                  {card.value}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </a>
            ))}
          </div>

          {/* Right Column: Large Form Card */}
          <div className="h-full">
            <div className="h-full p-8 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/10 flex flex-col">
              {/* Badge */}
              <div className="flex justify-end mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  Quick Message
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4 text-primary">
                <Send className="w-8 h-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Send a Message
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                Interested in working together? Drop me a message and I'll get back to you as soon as possible.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  Available for full-time backend development roles
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  Open to freelance and contract opportunities
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  Response time typically within 24 hours
                </li>
              </ul>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                asChild
              >
                <a
                  href="mailto:likhithreddy2423@gmail.com?subject=Let's Connect - Portfolio Inquiry"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Email
                </a>
              </Button>

              {/* Japanese Quote */}
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-2xl font-serif text-zen-neon mb-2">一期一会</p>
                <p className="text-xs text-muted-foreground italic">
                  "One time, one meeting" — treasure every encounter
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Likhith Reddy Chilakala. Crafted with discipline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
