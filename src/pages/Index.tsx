import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
