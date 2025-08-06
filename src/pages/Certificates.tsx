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
      description:
        "Fundamental Java programming concepts including object-oriented programming, data structures, and algorithm implementation.",
      skillsDemonstrated: ["Java", "OOP", "Data Structures", "Algorithms"],
      details:
        "Comprehensive assessment covering core Java programming concepts, object-oriented design principles, and practical problem-solving skills.",
      link: "https://drive.google.com/file/d/1jclpYYg0MbFcqcJIrlPxxXLuJWnRKZo5/view?usp=sharing",
    },
    {
  id: 2,
  title: "A Complete Guide to Java Programming",
  issuer: "Udemy",
  year: "2025",
  status: "Completed",
  icon: <Award className="w-8 h-8" />,
  iconBg: "bg-yellow-500",
  category: "Programming",
  description:
    "Comprehensive Java programming course covering core concepts, object-oriented programming, and practical examples for real-world applications.",
  skillsDemonstrated: ["Java", "OOP", "Programming Fundamentals", "Practical Examples"],
  details:
    "Successfully completed Udemy's Java programming course with examples, gaining hands-on experience in Java fundamentals, OOP principles, and real-world problem-solving.",
  link: "https://drive.google.com/file/d/1BDxgl-fPTZEdBYDBMSqkM8IFRLDOSShU/view?usp=sharing",
},

    {
      id: 3,
      title: "Infosys Springboard Full Stack Program",
      issuer: "Infosys",
      year: "2025",
      status: "Completed",
      icon: <Rocket className="w-8 h-8" />,
      iconBg: "bg-blue-500",
      category: "Full Stack Development",
      description:
        "Comprehensive full-stack development program covering modern web technologies, backend systems, and industry best practices.",
      skillsDemonstrated: ["React", "Spring Boot", "MySQL", "REST APIs", "Git"],
      details:
        "Intensive program covering frontend development with React, backend development with Spring Boot, database management with MySQL, and modern development practices including version control and API design.",
      link: "https://drive.google.com/file/d/1bOmKJDqlnyOWXQLjCWsy_EvgMak_wg75/view?usp=sharing",
    },
    
     {
  id: 4,
  title: "SQL (Basic)",
  issuer: "HackerRank",
  year: "2025",
  status: "Verified",
  icon: <Award className="w-8 h-8" />,
  iconBg: "bg-indigo-500",
  category: "Database",
  description:
    "Covers fundamental concepts of SQL including data retrieval, filtering, aggregation, and basic database operations.",
  skillsDemonstrated: ["SQL", "Data Querying", "Database Management"],
  details:
    "Successfully passed the HackerRank SQL (Basic) assessment, demonstrating proficiency in writing SQL queries, filtering data, and understanding relational database concepts.",
  link: "https://drive.google.com/file/d/1CpOGiZ2S46YAXgNkcjvN1IGOxIJnoaya/view?usp=sharing",
},

   {
  id: 5,
  title: "AWS Academy Graduate - Cloud Architecting",
  issuer: "AWS Academy",
  year: "2025",
  status: "Completed",
  icon: <Award className="w-8 h-8" />,
  iconBg: "bg-orange-400",
  category: "Cloud Computing",
  description:
    "Comprehensive cloud architecting course covering AWS services, infrastructure design, and best practices for cloud solutions.",
  skillsDemonstrated: ["AWS Cloud", "Cloud Architecture", "Infrastructure Design", "Cloud Solutions"],
  details:
    "Completed AWS Academy Graduate - Cloud Architecting course, gaining knowledge in AWS core services, solution architecture design, and cloud infrastructure best practices.",
  link: "https://drive.google.com/file/d/17VDT6RAVPiAuQK8iLflNiKho4YNMDSFJ/view?usp=sharing",
},
{
  id: 6,
  title: "AWS Academy Graduate - Cloud Operations",
  issuer: "AWS Academy",
  year: "2025",
  status: "Completed",
  icon: <Award className="w-8 h-8" />,
  iconBg: "bg-orange-500",
  category: "Cloud Computing",
  description:
    "Comprehensive training program focused on AWS cloud operations, monitoring, deployment, and management of cloud services.",
  skillsDemonstrated: ["AWS Cloud", "Cloud Operations", "Deployment", "Monitoring", "Cloud Management"],
  details:
    "Successfully completed AWS Academy Graduate - Cloud Operations course, gaining practical experience in managing, deploying, and monitoring AWS cloud services.",
  link: "https://drive.google.com/file/d/1Fwl2mpoxWXlGmkDjrWoHYYiUS480tUgu/view?usp=sharing",
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
              {certificates.map((cert) => (
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

                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="default" 
                      className="w-full bg-gradient-primary hover:opacity-90"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </a>
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
