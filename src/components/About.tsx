import { Code, Database, Laptop, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skills = [
  {
    icon: Zap,
    title: "AI & Machine Learning",
    description: "Machine Learning, Computer Vision, Data Science",
  },
  {
    icon: Code,
    title: "Problem Solving",
    description: "Data Structures & Algorithms, System Design",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Python, Django, SQL, REST APIs",
  },
  {
    icon: Laptop,
    title: "Programming & Tools",
    description: "C++, GitHub, Git, Linux",
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
                  I'm a Computer Science & Robotics student with a passion for solving complex problems 
                  through cutting-edge technologies. My interests lie at the intersection of AI, machine learning, 
                  autonomous systems and software development, where I develop intelligent solutions to tackle real-world challenges.
                </p>
                <p className="text-foreground leading-relaxed">
                  With a strong focus on continuous learning and innovation, I'm constantly exploring new technologies 
                  and methodologies across various domains. I thrive on tackling challenging problems that push 
                  the boundaries of what's possible, whether it's developing intelligent algorithms, building 
                  scalable systems, or creating solutions that make a meaningful impact.
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
