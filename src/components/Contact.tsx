import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-primary mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to opportunities in Java backend development. 
            Let's discuss how I can contribute to your team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-medium text-foreground mb-6">
                Get in Touch
              </h3>

              <a
                href="mailto:likhithreddy2423@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                  <p className="text-foreground font-medium">likhithreddy2423@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/likhith-reddy-chilakala-027497231/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">LinkedIn</p>
                  <p className="text-foreground font-medium">Likhith Reddy Chilakala</p>
                </div>
              </a>

              <a
                href="https://github.com/LikhithReddyChilakala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">GitHub</p>
                  <p className="text-foreground font-medium">LikhithReddyChilakala</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="p-3 bg-secondary rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                  <p className="text-foreground font-medium">Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-serif font-medium text-foreground mb-6">
                Quick Message
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in working together? Drop me a message and I'll get back to you as soon as possible.
              </p>
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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
              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-2xl font-serif text-primary mb-2">一期一会</p>
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
