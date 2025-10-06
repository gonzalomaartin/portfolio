import { Code, Database, Laptop, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS, Next.js",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, SQL, REST APIs",
  },
  {
    icon: Laptop,
    title: "Tools & Platforms",
    description: "Git, Docker, AWS, Linux",
  },
  {
    icon: Zap,
    title: "Problem Solving",
    description: "Algorithms, Data Structures, System Design",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Learn more about my background and expertise
            </p>
          </div>

          {/* About Content */}
          <div className="mb-12 animate-slide-up">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-foreground leading-relaxed mb-4">
                  I'm a passionate Computer Science student with a strong foundation in software development 
                  and a keen interest in building innovative solutions. My journey in tech began with a curiosity 
                  about how things work, which evolved into a deep love for creating elegant and efficient code.
                </p>
                <p className="text-foreground leading-relaxed">
                  Throughout my studies, I've worked on various projects ranging from web applications to 
                  data-driven solutions. I'm constantly learning new technologies and best practices to stay 
                  current in this ever-evolving field. My goal is to leverage my skills to solve real-world 
                  problems and contribute to meaningful projects.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className="border-none shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <skill.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
