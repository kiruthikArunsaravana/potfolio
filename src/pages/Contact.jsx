import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, Github, Code, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+919345584621",
      href: "tel:+919345584621",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "kiruthiksaravana91@gmail.com",
      href: "mailto:kiruthiksaravana91@gmail.com?subject=Hello&body=I would like to connect with you.",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Kiruthik Arun S",
      href: "https://www.linkedin.com/in/kiruthik-arun-s-1ba516305/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "kiruthikarun",
      href: "https://github.com/kiruthikArunsaravana",
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: "LeetCode",
      value: "kiruthik_arun_s",
      href: "https://leetcode.com/u/kiruthiksaravana/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />

      <div className="pt-20">
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Get In{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                I'm always interested in new opportunities and collaborations.
                Let's connect and discuss how we can work together!
              </p>
            </div>

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Image Side */}
              <div className="flex items-center justify-center">
                <img
                  src="/KIRUTHIK.jpg"
                  alt="Contact Illustration"
                  className="rounded-xl shadow-lg max-h-[500px] object-cover"
                />
              </div>

              {/* Contact Information & Let's Connect */}
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-sm text-muted-foreground">
                            {info.value}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </Card>

                {/* Let's Connect */}
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
                  <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm actively seeking opportunities in software development
                    and would love to discuss potential collaborations, projects,
                    or full-time positions. Feel free to reach out through any of
                    the channels below.
                  </p>

                  <div className="space-y-3">
                    {/* Email Link */}
                    <a
                      href="mailto:kiruthiksaravana91@gmail.com?subject=Hello&body=I would like to connect with you."
                      className="w-full bg-gradient-primary hover:opacity-90 flex items-center justify-center p-3 rounded-lg"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>

                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href="https://www.linkedin.com/in/kiruthik-arun-s-1ba516305/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
