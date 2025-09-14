import { Button } from "@/components/ui/button";
import { Download, Eye, Github, Linkedin, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-glow rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-glow rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Kiruthik Arun S
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Full Stack Developer & Software Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Seeking a challenging role in a growth-focused organization where I can apply my 
                technical skills, keep learning, and contribute to impactful software solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                <a href="/KIRUTHIK ARUN S.pdf" download="Kiruthik_Resume.pdf">Download Resume</a>
              </Button>
              <Button variant="outline-hero" size="lg" className="group" >
                <Eye className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                <a href="/projects"> View My Work</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
             <a 
  href="https://github.com/kiruthikArunsaravana" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    variant="ghost" 
    size="icon" 
    className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 hover:scale-110 transition-all duration-300"
  >
    <Github className="w-5 h-5" />
  </Button>
</a>
             <a 
  href="https://www.linkedin.com/in/kiruthik-arun-s-1ba516305/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    variant="ghost" 
    size="icon" 
    className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 hover:scale-110 transition-all duration-300"
  >
    <Linkedin className="w-5 h-5" />
  </Button>
</a>

             
            </div>
          </div>

          {/* Right Content - Glowing Circle */}
           <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-primary p-1 shadow-glow">
                <img 
                  src="/KIRUTHIK.jpg" 
                  alt="Kiruthik Arun S - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;