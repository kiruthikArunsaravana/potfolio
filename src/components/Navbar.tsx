import { Button } from "@/components/ui/button";
import { Code2, Home, FolderOpen, Award, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Kiruthik Arun S
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
              <a href="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </a>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
              <a href="/projects">
                <FolderOpen className="w-4 h-4 mr-2" />
                Projects
              </a>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
              <a href="/certificates">
                <Award className="w-4 h-4 mr-2" />
                Certificates
              </a>
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
              <a href="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;