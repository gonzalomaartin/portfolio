import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ecommercePreview from "@/assets/project-ecommerce.jpg";
import taskManagerPreview from "@/assets/project-taskmanager.jpg";
import dashboardPreview from "@/assets/project-dashboard.jpg";
import chatbotPreview from "@/assets/project-chatbot.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, and payment integration. Built with modern web technologies for optimal performance.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    preview: ecommercePreview,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workflows, and deadline tracking. Features intuitive drag-and-drop interface.",
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    preview: taskManagerPreview,
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing complex datasets with charts, filters, and export capabilities. Helps teams make data-driven decisions.",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    preview: dashboardPreview,
  },
  {
    title: "AI Chatbot",
    description: "Intelligent chatbot using natural language processing to provide automated customer support. Integrates with multiple platforms and APIs.",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    preview: chatbotPreview,
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

        {/* Projects Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="pl-6 md:basis-full lg:basis-full">
                  <Card
                    className="group border-border shadow-lg hover:shadow-accent transition-smooth hover:-translate-y-1 animate-slide-up flex flex-col bg-gradient-to-br from-card to-secondary/30 relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
                    
                    {/* Project Preview Image */}
                    <div className="relative w-full h-80 md:h-96 overflow-hidden bg-muted">
                      <img
                        src={project.preview}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-smooth duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent opacity-60" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 p-8">
                      {/* Left column - Description */}
                      <div className="space-y-4 relative z-10">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth flex-shrink-0">
                            <div className="w-6 h-6 bg-primary-foreground/90 rounded" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right column - Technologies and Actions */}
                      <div className="space-y-6 relative z-10 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="secondary" 
                                className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-smooth text-sm px-3 py-1"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button asChild variant="accent" size="lg" className="flex-1 shadow-md hover:shadow-lg">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <Github className="w-5 h-5" />
                              View Code
                            </a>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="flex-1 border-2 border-border hover:bg-secondary hover:border-accent">
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <ExternalLink className="w-5 h-5" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-card border-border text-foreground hover:bg-secondary hover:text-accent -left-4 md:-left-12" />
            <CarouselNext className="bg-card border-border text-foreground hover:bg-secondary hover:text-accent -right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
