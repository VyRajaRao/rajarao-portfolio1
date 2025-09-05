import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import rajaProfile from "@/assets/raja-profile.png";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-blue rounded-full animate-glow-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-neon-violet rounded-full animate-glow-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-neon-cyan rounded-full animate-glow-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-neon-green rounded-full animate-glow-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-neon-blue/30">
                <span className="text-sm text-foreground-muted">👋 Hi, I'm Raja</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                <span className="text-foreground">Web Dev & DSA Learner</span>
                <br />
                <span className="bg-gradient-neon bg-clip-text text-transparent animate-gradient">
                  Cybersecurity & Dev(Sec)Ops Enthusiast
                </span>
              </h1>
              
              <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
                Third-year B.Tech CSE @ MLRIT (2027). I build projects and continuously learn 
                across web development, AI, and security domains.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="neon" 
                size="lg" 
                onClick={scrollToProjects}
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://drive.google.com/file/d/1Tqvn0f5UFj64AjWak_30HMyPnELFI5KO/view?usp=drive_link', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Résumé
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-sm text-foreground-muted">Quick links:</span>
              <div className="flex gap-4">
                <a 
                  href="mailto:vyraja777@gmail.com" 
                  className="text-sm text-neon-blue hover:text-neon-cyan transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://github.com/VyRajaRao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-neon-blue hover:text-neon-cyan transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/vyrajarao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-neon-blue hover:text-neon-cyan transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Rotating Neon Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-neon opacity-75 blur-sm animate-spin" 
                   style={{ animationDuration: '8s' }}></div>
              
              {/* Static Glow Ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-neon opacity-50 blur-md animate-glow-pulse"></div>
              
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-background glass-card">
                  <img 
                    src={rajaProfile} 
                    alt="Vasamsetti Yesepu Raja - Profile Picture"
                    className="w-full h-full object-cover animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;