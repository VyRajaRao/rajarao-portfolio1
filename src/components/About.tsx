import { Button } from "@/components/ui/button";
import { Calendar, GraduationCap, MapPin, Download } from "lucide-react";

const About = () => {
  const focusAreas = [
    "Web Development",
    "Data Structures & Algorithms", 
    "Cybersecurity",
    "DevOps"
  ];

  return (
    <section id="about" className="py-20 bg-background-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              About <span className="bg-gradient-neon bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-foreground-muted text-lg">Getting to know the person behind the code</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-poppins font-semibold text-foreground">Who I Am</h3>
              
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  I'm a third-year B.Tech CSE student at MLR Institute of Technology, learning about 
                  building digital solutions and exploring the fascinating world of technology.
                </p>
                
                <p>
                  My journey focuses on web development and data structures & algorithms, while I'm 
                  actively expanding into cybersecurity, DevOps. I believe in learning 
                  by building—shipping projects, exploring APIs.
                </p>
                
                <p>
                  When I'm not coding, you'll find me researching the latest security trends, 
                  experimenting with new frameworks.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Current Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area, index) => (
                    <span 
                      key={area}
                      className={`px-3 py-1 rounded-full text-sm glass-card border border-neon-${
                        ['blue', 'cyan', 'green', 'violet', 'orange'][index]
                      }/30 hover:border-neon-${
                        ['blue', 'cyan', 'green', 'violet', 'orange'][index]
                      }/60 transition-all cursor-pointer hover:scale-105`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Info */}
            <div className="space-y-8">
              {/* Education Card */}
              <div className="glass-card p-6 rounded-2xl hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neon-blue/10 border border-neon-blue/30">
                    <GraduationCap className="h-6 w-6 text-neon-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Education</h4>
                    
                    <div className="space-y-4">
                      {/* Current */}
                      <div className="border-l-2 border-neon-blue pl-4">
                        <h5 className="font-medium text-foreground">B.Tech, Computer Science & Engineering</h5>
                        <p className="text-foreground-muted">MLR Institute of Technology</p>
                        <div className="flex items-center gap-4 mt-1 text-sm text-foreground-muted">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            2023 – 2027 (Expected)
                          </span>
                        </div>
                      </div>
                      
                      {/* Previous */}
                      <div className="border-l-2 border-card-border pl-4">
                        <h5 className="font-medium text-foreground">Class XII</h5>
                        <p className="text-foreground-muted">DAV Public School, Bacheli</p>
                        <div className="flex items-center gap-1 mt-1 text-sm text-foreground-muted">
                          <Calendar className="h-3 w-3" />
                          Completed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl text-center hover-lift">
                  <div className="text-2xl font-bold text-neon-blue mb-1">3rd</div>
                  <div className="text-sm text-foreground-muted">Year Student</div>
                </div>
                
                <div className="glass-card p-4 rounded-xl text-center hover-lift">
                  <div className="text-2xl font-bold text-neon-cyan mb-1">2027</div>
                  <div className="text-sm text-foreground-muted">Graduation</div>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card p-4 rounded-xl hover-lift">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neon-green/10 border border-neon-green/30">
                    <MapPin className="h-4 w-4 text-neon-green" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Based in India</div>
                    <div className="text-sm text-foreground-muted">Open to remote opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;