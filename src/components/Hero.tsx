import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import profileAvatar from "@/assets/profile-picture.png";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start max-w-7xl mx-auto animate-fade-in">
          {/* Name and Title - Left side */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs md:text-sm text-muted-foreground tracking-wider">
                Hi, I'm <span className="text-lg md:text-xl font-semibold">Gonzalo Martin</span>
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                COMPUTER<br />
                SCIENCE &<br />
                ROBOTICS<br />  
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic font-light">STUDENT</span>
              </h1>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-0.5 bg-accent" />
                <p className="text-xs md:text-sm text-muted-foreground tracking-wider">
                  ROBOTICS SOFTWARE ENGINEER
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Passionate about AI, robotics, and cutting-edge technologies. Building innovative solutions that push the boundaries of what's possible in machine learning and autonomous systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" variant="accent" className="text-base font-medium transition-transform hover:scale-105">
                <a href="#contact">Get in touch</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base font-medium border-border text-foreground hover:bg-secondary transition-transform hover:scale-105">
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <Button asChild size="icon" variant="ghost" className="text-foreground hover:bg-secondary hover:text-accent transition-transform hover:scale-105">
                <a href="https://www.linkedin.com/in/gonzalo-martin-penalba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost" className="text-foreground hover:bg-secondary hover:text-accent transition-transform hover:scale-105">
                <a href="https://github.com/gonzalomaartin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Avatar - Centered with description */}
          <div className="flex justify-center items-start">
            <div className="relative group">
              <div className="absolute -inset-3 border-l-2 border-t-2 border-border opacity-40" />
              <div className="absolute -inset-3 border-r-2 border-b-2 border-border opacity-40" />
              <img
                src={profileAvatar}
                alt="Profile"
                className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-[22rem] lg:h-[30rem] object-cover transition-smooth"
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
