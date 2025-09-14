import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button"; // Import the Button component
import { Home } from "lucide-react"; // Import an icon for the button

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      `404 Error: User attempted to access non-existent route: ${location.pathname}`
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-background text-white">
      <div className="text-center p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-card">
        <h1 className="text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          404
        </h1>
        <p className="text-2xl text-muted-foreground mb-8">
          Oops! The page you're looking for has ventured into the unknown.
        </p>
        <Button 
          asChild 
          className="bg-gradient-primary hover:opacity-90 text-white"
        >
          <a href="/">
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
