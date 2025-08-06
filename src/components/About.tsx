import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code, Briefcase } from "lucide-react";

const About = () => {
  const skills = {
    technical: ["Java", "Spring Boot", "MySQL", "React", "JavaScript", "CSS", "Chart.js"],
    tools: ["Git", "GitHub"],
    soft: ["Leadership", "Teamwork", "Problem Solving", "Time Management"]
  };

  const education = [
    {
      degree: "B.Tech, Information Technology",
      school: "VSB Engineering College, Karur",
      year: "Expected Graduation in 08/2026"
    },
    {
      degree: "HSC",
      school: "Veveaham Mat.Hr.Sec.School, Dharapuram",
      year: "01/2022"
    },
    {
      degree: "SSLC",
      school: "Veveaham Mat.Hr.Sec.School, Dharapuram", 
      year: "01/2020"
    }
  ];

  

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate full-stack developer with hands-on experience in modern web technologies 
            and a strong foundation in software engineering principles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-primary">{edu.year}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          
          
        </div>

        {/* Skills */}
        <Card className="p-8 mt-12 bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Skills</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;