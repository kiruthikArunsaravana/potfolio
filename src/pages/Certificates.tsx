import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, CheckCircle, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Java (Basic)",
      issuer: "HackerRank",
      year: "2024",
      status: "Verified",
      icon: <Award className="w-8 h-8" />,
      iconBg: "bg-orange-500",
      category: "Programming",
      description: "Fundamental Java programming concepts including object-oriented programming, data structures, and algorithm implementation.",
      skillsDemonstrated: ["Java", "OOP", "Data Structures", "Algorithms"],
      details: "Comprehensive assessment covering core Java programming concepts, object-oriented design principles, and practical problem-solving skills."
    },
    {
      id: 2,
      title: "Infosys Springboard Full Stack Program",
      issuer: "Infosys",
      year: "2025", 
      status: "Completed",
      icon: <Rocket className="w-8 h-8" />,
      iconBg: "bg-blue-500",
      category: "Full Stack Development",
      description: "Comprehensive full-stack development program covering modern web technologies, backend systems, and industry best practices.",
      skillsDemonstrated: ["React", "Spring Boot", "MySQL", "REST APIs", "Git"],
      details: "Intensive program covering frontend development with React, backend development with Spring Boot, database management with MySQL, and modern development practices including version control and API design."
    },
    {
      id: 3,
      title: "Front End Development - HTML",
      issuer: "Great Learning",
      year: "2024",
      status: "Completed",
      icon: <Award className="w-8 h-8" />,
      iconBg: "bg-green-500", 
      category: "Frontend Development",
      description: "Foundational course covering HTML structure, semantic markup, and modern web development practices.",
      skillsDemonstrated: ["HTML", "Web Development", "Semantic Markup"],
      details: "Comprehensive introduction to HTML5, semantic web development, accessibility best practices, and modern web standards."
    },
    {
      id: 4,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2024",
      status: "Completed",
      icon: <Award className="w-8 h-8" />,
      iconBg: "bg-purple-500",
      category: "Cybersecurity", 
      description: "Foundational cybersecurity concepts, threat analysis, and security best practices for modern digital environments.",
      skillsDemonstrated: ["Cybersecurity", "Threat Analysis", "Security Practices"],
      details: "Introduction to cybersecurity fundamentals, threat landscape analysis, risk assessment, and implementation of security measures in digital systems."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Verified":
        return "text-green-500 bg-green-500/10 border-green-500/20";
      case "Completed":
        return "text-blue-500 bg-blue-500/10 border-blue-500/20";
      default:
        return "text-muted-foreground bg-muted/10 border-border/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Verified":
        return <CheckCircle className="w-4 h-4" />;
      case "Completed":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />
      
      <div className="pt-20">
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                My <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Professional certifications and achievements that demonstrate my commitment to 
                continuous learning and expertise in modern technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <Card key={cert.id} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${cert.iconBg} rounded-2xl flex items-center justify-center`}>
                      {cert.icon}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${getStatusColor(cert.status)} flex items-center gap-2`}
                    >
                      {getStatusIcon(cert.status)}
                      {cert.status}
                    </Badge>
                  </div>

                  <h2 className="text-xl font-bold mb-2">{cert.title}</h2>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="text-primary font-semibold">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </div>

                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                    {cert.category}
                  </Badge>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Skills Demonstrated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skillsDemonstrated.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    {cert.details}
                  </p>

                  <Button 
                    variant="default" 
                    className="w-full bg-gradient-primary hover:opacity-90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certificates;