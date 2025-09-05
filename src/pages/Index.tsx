import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-card-border bg-background-alt">
        <div className="container mx-auto px-6 text-center">
          <p className="text-foreground-muted text-sm">
            © 2025 Vasamsetti Yesepu Raja. Built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a 
              href="https://github.com/VyRajaRao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-neon-blue transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/vyrajarao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-neon-blue transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:vyraja777@gmail.com"
              className="text-foreground-muted hover:text-neon-blue transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
