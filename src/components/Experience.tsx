import { GraduationCap, Award, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const experiences = [
  {
    icon: GraduationCap,
    title: "Bachelor of Science in Computer Science",
    organization: "Your University Name",
    period: "2020 - 2024",
    description: "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development, Machine Learning, Software Engineering",
  },
  {
    icon: Briefcase,
    title: "Software Development Intern",
    organization: "Tech Company Name",
    period: "Summer 2023",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality features on schedule.",
  },
  {
    icon: Award,
    title: "Hackathon Winner",
    organization: "University Tech Fest",
    period: "2023",
    description: "Led a team to build an innovative solution for sustainable campus living. Won first place among 50+ competing teams.",
  },
  {
    icon: Briefcase,
    title: "Research Assistant",
    organization: "University CS Department",
    period: "2022 - 2023",
    description: "Assisted in research on machine learning applications in healthcare. Co-authored a paper published in a peer-reviewed conference.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              My academic journey and professional experiences
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={exp.title}
                className="border-none shadow-lg hover:shadow-xl transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <exp.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium mb-1">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Download Resume CTA */}
          <div className="mt-12 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
