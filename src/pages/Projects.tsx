import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Expense Management System",
      description: "A comprehensive financial tracking application that helps users manage their income and expenses with detailed analytics and reporting features.",
      longDescription: "Complete expense tracking application with user login, income/expense tracking, and analytics with Chart.js. Features include user authentication, income/expense tracking with categorization, interactive charts and data visualization, detailed financial reports and insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      iconBg: "bg-green-500",
      technologies: ["React", "CSS", "Chart.js", "User Authentication"],
      category: "Full Stack Development",
      keyFeatures: [
        "User Authentication",
        "Income/Expense Tracking", 
        "Data Visualization",
        "Financial Reports"
      ],
      projectDetails: "Built using React and CSS with Chart.js for interactive data visualization. Features include secure user authentication, comprehensive expense categorization, real-time analytics dashboard, and detailed financial reporting.",
       githubUrl: "https://github.com/kiruthikArunsaravana/ExpenseManagementSystem.git"
      
    },
    {
      id: 2, 
      title: "Client Purchase & Finance Tracker",
      description: "Manages client purchases, payments, and profit tracking. Includes next purchase reminders and detailed reports.",
      longDescription: "A comprehensive client management system that tracks purchases, payments, and calculates profit margins. Features automated reminders for follow-up purchases and generates detailed business reports.",
      icon: <BarChart3 className="w-8 h-8" />,
      iconBg: "bg-blue-500",
      technologies: ["React", "CSS", "Java", "Spring Boot", "MySQL", "Git", "Chart.js"],
      category: "Full Stack Development",
      keyFeatures: [
        "Client Management",
        "Purchase Tracking",
        "Payment Processing", 
        "Profit Analytics",
        "Automated Reminders"
      ],
      projectDetails: "Built using React frontend with Java Spring Boot backend and MySQL database. Features include comprehensive client purchase tracking, automated payment reminders, profit margin calculations, and detailed business analytics with Chart.js visualizations.",
       githubUrl: "https://github.com/kiruthikArunsaravana/Business-Management.git"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />
      
      <div className="pt-20">
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                A showcase of my full-stack development projects, featuring modern web technologies 
                and real-world applications that solve business problems.
              </p>
            </div>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <Card key={project.id} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Project Icon & Basic Info */}
                    <div className="lg:col-span-1">
                      <div className={`w-16 h-16 ${project.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                        {project.icon}
                      </div>
                      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
                        {project.category}
                      </Badge>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-primary">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="default" size="sm" className="bg-gradient-primary hover:opacity-90">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            <Github className="w-4 h-4 mr-2" />
                            Code 
                          </Button>
                        </a>

                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-4 text-primary">Project Details</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.projectDetails}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-4">Key Features:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.keyFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;