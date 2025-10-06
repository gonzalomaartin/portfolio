import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center max-w-7xl mx-auto animate-fade-in">
          {/* Name and Title - Left side */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm md:text-base text-muted-foreground tracking-wider">
                Hi, I'm Your Name
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight">
                COMPUTER<br />
                SCIENCE<br />
                <span className="italic font-light">STUDENT</span>
              </h1>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-0.5 bg-accent" />
                <p className="text-xs md:text-sm text-muted-foreground tracking-wider">
                  SOFTWARE DEVELOPER
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              I create immersive, high-performing software solutions tailored for startups, agencies, and teams that need speed, scalability, and full control.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" variant="accent" className="text-base font-medium">
                <a href="#contact">Get in touch</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base font-medium border-border text-foreground hover:bg-secondary">
                <a href="#projects">See work</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <Button asChild size="icon" variant="ghost" className="text-foreground hover:bg-secondary hover:text-accent">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost" className="text-foreground hover:bg-secondary hover:text-accent">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Avatar - Right side (integrated, no extra space) */}
          <div className="hidden lg:flex justify-end">
            <div className="relative group">
              <div className="absolute -inset-3 border-l-2 border-t-2 border-border opacity-40" />
              <div className="absolute -inset-3 border-r-2 border-b-2 border-border opacity-40" />
              <img
                src={profileAvatar}
                alt="Profile"
                className="relative w-64 h-80 xl:w-72 xl:h-96 object-cover transition-smooth"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};
