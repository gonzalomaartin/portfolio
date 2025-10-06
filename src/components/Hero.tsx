import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Avatar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-smooth" />
            <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-smooth" />
            <img
              src={profileAvatar}
              alt="Profile"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/30 shadow-glow group-hover:scale-105 transition-smooth"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
              Your Name Here
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
              Computer Science Student | Software Developer
            </p>
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Building innovative solutions through code. Passionate about creating elegant and efficient software.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="accent">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Button asChild size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
          </a>
        </div>
      </div>
    </section>
  );
};
