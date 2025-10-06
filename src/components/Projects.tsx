import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, and payment integration. Built with modern web technologies for optimal performance.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workflows, and deadline tracking. Features intuitive drag-and-drop interface.",
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing complex datasets with charts, filters, and export capabilities. Helps teams make data-driven decisions.",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "AI Chatbot",
    description: "Intelligent chatbot using natural language processing to provide automated customer support. Integrates with multiple platforms and APIs.",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group border-border shadow-lg hover:shadow-accent transition-smooth hover:-translate-y-2 animate-slide-up flex flex-col bg-gradient-to-br from-card to-secondary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                    <div className="w-6 h-6 bg-primary-foreground/90 rounded" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3 relative z-10">
                <Button asChild variant="default" size="sm" className="flex-1 shadow-md hover:shadow-lg">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1 border-primary/20 hover:bg-primary/10 hover:border-primary/40">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
