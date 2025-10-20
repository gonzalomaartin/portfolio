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
import taskManagerPreview from "@/assets/project-taskmanager.jpg";
import dashboardPreview from "@/assets/project-dashboard.jpg";
import chatbotPreview from "@/assets/project-chatbot.jpg";
import CRMPreview from "@/assets/project-crm.png";
import CRMIcon from "@/assets/CRM-icon.png";
import HouseIcon from "@/assets/house-icon.png";
import TennisBallIcon from "@/assets/tennis-ball-icon.png";
import RobotArmIcon from "@/assets/robot-arm-icon.png";

const projects = [
  {
    title: "CRM Pro",
    description: "A full-stack CRM application with user authentication, contact management, and sales tracking. Built with modern web technologies for optimal performance.",
    technologies: ["Python", "Django", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/gonzalomaartin/CRM",
    demo: "https://crmpro.gonzalomartin.dev",
    preview: CRMPreview,
    icon: CRMIcon,
    slowLoad: true,
  },
  {
    title: "Valencia Housing Price Predictor",
    description: (
      <>
        Machine learning model leveraging web-scraped real estate data from Idealista to predict housing prices in Valencia with <span className="font-bold text-lg text-foreground">98.5%</span> accuracy.
      </>
    ),
    technologies: ["Python", "Scikit-learn", "Pandas", "BeautifulSoup"],
    github: "https://github.com/gonzalomaartin/Valencia-Housing-Price-Prediction",
    demo: "https://crmpro.gonzalomartin.dev",
    preview: taskManagerPreview,
    icon: HouseIcon,
    slowLoad: true,
  },
  {
    title: "3D Vision Tracking for Multi-Robot Control",
    description: "Real-time computer vision system combining YOLO object detection for tennis ball tracking with hand gesture recognition. The number of fingers shown on camera determines how many robots perform synchronized pick-and-place operations at the translated ball position in simulation.",
    technologies: ["Python", "YOLO", "OpenCV", "MediaPipe", "RoboDK"],
    github: "https://github.com/gonzalomaartin/3D-Tracking-for-Multi-Robot-Control",
    demo: "https://demo.example.com",
    preview: dashboardPreview,
    icon: RobotArmIcon, 
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
            Explore some of my recent projects that solve real-world problems with innovative solutions
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
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative w-full h-80 md:h-96 overflow-hidden bg-muted block cursor-pointer"
                    >
                      <img
                        src={project.preview}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-smooth duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent opacity-60" />
                    </a>

                    <div className="grid md:grid-cols-2 gap-6 p-8">
                      {/* Left column - Description */}
                      <div className="space-y-4 relative z-10">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth flex-shrink-0">
                            {project.icon ? (
                              <img src={project.icon} alt={`${project.title} icon`} className="w-full h-full object-contain rounded-xl" />
                            ) : (
                              <div className="w-6 h-6 bg-primary-foreground/90 rounded" />
                            )}
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                              {project.title}
                            </h3>
                            {project.slowLoad && (
                              <p className="text-sm text-muted-foreground/80 italic mb-2">
                                ⏱️ Demo may take a moment to load
                              </p>
                            )}
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
                          <Button asChild variant="accent" size="lg" className="flex-1 shadow-md hover:shadow-lg transition-transform hover:scale-105">
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
                          <Button asChild variant="outline" size="lg" className="flex-1 border-2 border-border hover:bg-secondary hover:border-accent transition-transform hover:scale-105">
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
