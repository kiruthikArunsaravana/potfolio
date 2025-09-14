import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Infosys",
      period: "02/2025 to 04/2025",
      description: "Worked on backend development using Spring Boot and React. Gained experience with CRUD operations and data visualization tools.",
      technologies: ["Spring Boot", "React", "CRUD", "Data Visualization"]
    },
    {
      title: "Full Stack Developer Intern", 
      company: "Infosys",
      period: "06/2024 to 07/2024",
      description: "Learned industry fundamentals, soft skills, and full-stack basics. Practiced frontend and backend integration using sample modules.",
      technologies: ["Frontend", "Backend", "Integration", "Industry Practices"]
    }
  ];

  const projects = [
    {
      title: "Expense Management System",
      description: "Complete expense tracking application with user login, income/expense tracking, and analytics with Chart.js",
      technologies: ["React", "CSS", "Chart.js", "User Authentication"]
    },
    {
      title: "Client Purchase & Finance Tracker",
      description: "Manages client purchases, payments, and profit tracking. Includes next purchase reminders and detailed reports.",
      technologies: ["React", "CSS", "Java", "Spring Boot", "MySQL", "Git", "Chart.js"]
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the projects I've worked on
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-card relative">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:min-w-[200px]">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground lg:justify-center">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                    <h5 className="text-primary font-semibold mb-4">{exp.company}</h5>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default Experience;