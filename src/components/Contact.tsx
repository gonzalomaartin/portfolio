import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1.5 bg-gradient-primary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Feel free to reach out! I'm always open to discussing new opportunities, collaborations, or just connecting.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <Card className="group border-border shadow-lg hover:shadow-accent transition-smooth hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/30 animate-slide-up">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Email
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="mailto:your.email@example.com"
                  className="text-muted-foreground hover:text-primary transition-smooth font-medium block break-all"
                >
                  your.email@example.com
                </a>
              </CardContent>
            </Card>

            {/* GitHub Card */}
            <Card className="group border-border shadow-lg hover:shadow-accent transition-smooth hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/30 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                  <Github className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  GitHub
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth font-medium"
                >
                  github.com/yourusername
                </a>
              </CardContent>
            </Card>

            {/* LinkedIn Card */}
            <Card className="group border-border shadow-lg hover:shadow-accent transition-smooth hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/30 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                  <Linkedin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  LinkedIn
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth font-medium"
                >
                  linkedin.com/in/yourname
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
