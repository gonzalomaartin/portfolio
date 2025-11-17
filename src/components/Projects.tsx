import React from "react";
import { ExternalLink, Github, X as CloseIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import Vision3DVideo from "@/assets/Vision3D Video Final.mp4";
import CRMPreview from "@/assets/project-crm.png";
import CRMIcon from "@/assets/CRM-icon.png";
import Vision3DPreview from "@/assets/3DVisionPreview.png";
import RobotArmIcon from "@/assets/robot-arm-icon.png";
import HousePredictorPreview from "@/assets/vlc-house-predictor-img.png";
import HouseIcon from "@/assets/house-icon.png";
import AITennisPreview from "@/assets/tennis-match.avif";
import TennisBallIcon from "@/assets/tennis-ball-icon.png";
import ShoppingCartIcon from "@/assets/shopping-cart-icon.png";
import AIProdRecommenderPreview from "@/assets/ai-prod-recommender.png";

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
    description: "Machine learning model leveraging web-scraped real estate data from Idealista to predict housing prices in Valencia with 75% accuracy.",
    technologies: ["Python", "Scikit-learn", "Pandas", "BeautifulSoup"],
    github: "https://github.com/gonzalomaartin/Valencia-Housing-Price-Prediction",
    demo: "https://vlc-house-predictor.gonzalomartin.dev/",
    preview: HousePredictorPreview,
    icon: HouseIcon,
    slowLoad: true,
  },
  {
    title: "3D Vision Tracking for Multi-Robot Control",
    description: "Real-time computer vision system combining YOLO object detection for tennis ball tracking with hand gesture recognition. The number of fingers shown on camera determines how many robots perform synchronized move operations at the translated ball position in simulation.",
    technologies: ["Python", "YOLO", "OpenCV", "MediaPipe", "RoboDK"],
    github: "https://github.com/gonzalomaartin/3D-Tracking-for-Multi-Robot-Control",
    demo: Vision3DVideo,
    preview: Vision3DPreview,
    icon: RobotArmIcon,
  },
  {
    title: "AI Tennis Judge",
    description: "Computer vision application that determines whether a tennis ball landed in or out by accurately tracking the ball's trajectory and bounce. It also provides player statistics, heatmaps, average ball speed calculations, and match summaries — designed for real-time analysis and coaching insights.",
    technologies: ["Python", "OpenCV", "YOLO", "PyTorch"],
    github: "https://github.com/gonzalomaartin/AI-Tennis-Judge",
    demo: "https://ai-tennis-judge.gonzalomartin.dev",
    preview: AITennisPreview,
    icon: TennisBallIcon,
    slowLoad: true,
  }, 
    {
    title: "AI-Powered Product Recommendation System",
    description: "Scraped data from Mercadona asynchronously and used an LLM and a VLM for text and image-based normalization (e.g., brand, allergens, claims, nutritional info). Developed an agentic system that responds to user queries based on the processed data, leveraging a dual-database architecture with a relational database for fast filtered lookups and a vector database for semantic search.",
    technologies: ["Python", "Langchain", "ChromaDB", "Playwright"],
    github: "https://github.com/gonzalomaartin/AI-Product-Recommender",
    demo: "https://www.gonzalomartin.dev",
    preview: AIProdRecommenderPreview,
    icon: ShoppingCartIcon, 
    slowLoad: true,
  }
];

export const Projects = () => {
  const [videoOpen, setVideoOpen] = React.useState(false);
  const handleOpenVideo = (project) => {
    if (project.title === "3D Vision Tracking for Multi-Robot Control") {
      setVideoOpen(true);
    }
  };
  const handleCloseVideo = () => setVideoOpen(false);

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
                    {project.comingSoon ? (
                      <div className="relative w-full h-80 md:h-96 overflow-hidden bg-muted block cursor-default">
                        {/* Diagonal ribbon */}
                        <div className="absolute -top-4 left-4 z-30 transform -rotate-12">
                          <div className="bg-amber-300 text-amber-900 px-3 py-1 font-semibold text-xs shadow-md">IN DEVELOPMENT</div>
                        </div>
                        <img
                          src={project.preview}
                          alt={`${project.title} preview`}
                          className="w-full h-full object-cover object-center filter grayscale brightness-60 transition-smooth duration-500"
                        />
                        <div className="absolute inset-0 bg-gray-200/30" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
                          <span className="text-2xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wider bg-gray-100/85 px-4 py-2 rounded animate-pulse">COMING SOON</span>
                        </div>
                      </div>
                    ) : project.title === "3D Vision Tracking for Multi-Robot Control" ? (
                      <div className="relative w-full h-80 md:h-96 overflow-hidden bg-muted block">
                        <video
                          src={project.demo}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover object-center rounded"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent opacity-60 pointer-events-none" />
                      </div>
                    ) : (
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
                    )}


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
                            <div className="flex items-center gap-3">
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                                {project.title}
                              </h3>
                              {project.comingSoon && (
                                <Badge className="ml-2 bg-yellow-100 text-yellow-800 border-yellow-200">Coming Soon</Badge>
                              )}
                            </div>
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
                          {project.comingSoon || project.title === "AI Tennis Judge" ? (
                            <>
                              <div className="flex-1">
                                <span className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded text-sm font-medium bg-muted text-muted-foreground border border-border cursor-not-allowed opacity-80">
                                  <Github className="w-5 h-5" />
                                  View Code
                                </span>
                              </div>
                              <div className="flex-1">
                                <span className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded text-sm font-medium bg-muted text-muted-foreground border border-border cursor-not-allowed opacity-80">
                                  <ExternalLink className="w-5 h-5" />
                                  Live Demo
                                </span>
                              </div>
                            </>
                          ) : (
                            <>
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
                              {project.title === "3D Vision Tracking for Multi-Robot Control" ? (
                                <Button disabled variant="outline" size="lg" className="flex-1 border-2 border-border opacity-60 cursor-not-allowed">
                                  <span className="flex items-center justify-center gap-2">
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                  </span>
                                </Button>
                              ) : (
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
                              )}
                            </>
                          )}
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
