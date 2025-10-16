import { GraduationCap, Award, Briefcase, Search } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import CDTMLogo from "@/assets/CDTM-logo.png";
import UPVLogo from "@/assets/UPV-logo.png";
import WinnerconLogo from "@/assets/winnercon-logo.jpg";

const education = [
  {
    icon: GraduationCap,
    logo: CDTMLogo,
    title: "Honours Degree in Digital Technology & Management",
    organization: "Center for Digital Technology and Management (CDTM)",
    period: "2025-2026",
    description: "Selective interdisciplinary program for top-performing students, focused on developing skills in technology, innovation, and entrepreneurship through hands-on projects and collaboration with leading businesses.",
  },
  {
    icon: Award,
    logo: UPVLogo,
    title: "BSc Industrial Computer Science & Robotics",
    organization: "Valencia Polytechnic University (UPV)",
    period: "2022-2026",
    description: (
      <>
        Relevant coursework: Machine Learning, Computer Vision, 3D Vision, Mobile Robotics, Intelligent Agents, Data Structures & Algorithms.
        <br />
        Active participation in competitive programming contests and hackathons.
      </>
    ),
  },
];

const experiences = [
  {
    icon: Briefcase,
    title: "Seeking Software Engineering Internship",
    organization: "Available Winter 2026",
    period: "Looking for opportunities",
    description: "Actively seeking internship opportunities with companies working on cutting-edge technologies in AI, machine learning, robotics, or software development. Eager to learn, grow, and contribute to innovative projects while applying my technical skills.",
    available: true,
  },
  {
    icon: Briefcase,
    logo: WinnerconLogo,
    title: "Systems Installer",
    organization: "Winnercon",
    period: "Jun 2023 - Jul 2023",
    description: "Installed and configured digital display systems in educational environments. Conducted site assessments, performed hardware and software testing, and troubleshooting to ensure optimal performance of display units in classrooms and auditoriums.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Academic background and professional development
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-accent" />
                Education
              </h3>
              {education.map((item, index) => (
                <Card
                  key={item.title}
                  className="border-border shadow-lg hover:shadow-xl transition-smooth animate-slide-up bg-background"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg flex items-center justify-center w-16 h-16">
                        {item.logo ? (
                          <img src={item.logo} alt={`${item.organization} logo`} className="w-full h-full object-contain" />
                        ) : (
                          <item.icon className="w-6 h-6 text-accent" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-accent font-medium mb-1">
                          {item.organization}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.period}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Experience Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-accent" />
                Experience
              </h3>
              {experiences.map((item, index) => (
                <Card
                  key={item.title}
                  className="border-border shadow-lg hover:shadow-xl transition-smooth animate-slide-up bg-background"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg flex items-center justify-center w-16 h-16">
                        {item.logo ? (
                          <img src={item.logo} alt={`${item.organization} logo`} className="w-full h-full object-contain" />
                        ) : (
                          <item.icon className="w-6 h-6 text-accent" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-bold text-foreground">
                            {item.title}
                          </h4>
                          {item.available && (
                            <Badge className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                              Available
                            </Badge>
                          )}
                        </div>
                        <p className="text-accent font-medium mb-1">
                          {item.organization}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.period}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Download Resume CTA */}
          <div className="mt-12 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth shadow-lg transition-transform hover:scale-105"
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
