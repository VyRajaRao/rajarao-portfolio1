import { Calendar, Trophy, Users, Lightbulb } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Zenith Hackathon",
      role: "Participant",
      year: "2024",
      type: "hackathon",
      description: "Participated in this competitive hackathon, collaborating with team members to develop innovative solutions within tight deadlines.",
      skills: ["Team Collaboration", "Rapid Prototyping", "Problem Solving", "Time Management"],
      icon: Trophy,
      color: "blue"
    },
    {
      title: "Init Saga Hackathon", 
      role: "Participant",
      year: "2024",
      type: "hackathon",
      description: "Engaged in another challenging hackathon experience, further developing technical skills and learning from peer developers.",
      skills: ["Innovation", "Technical Implementation", "Presentation Skills", "Networking"],
      icon: Lightbulb,
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-neon-blue/30 bg-neon-blue/5 text-neon-blue",
      cyan: "border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Experience & <span className="bg-gradient-neon bg-clip-text text-transparent">Growth</span>
          </h2>
          <p className="text-foreground-muted text-lg">Learning through participation and collaboration</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Current Status */}
          <div className="glass-card p-6 rounded-2xl mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-lg border border-neon-violet/30 bg-neon-violet/5">
                <Users className="h-6 w-6 text-neon-violet" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground">Current Status</h3>
            </div>
            <p className="text-foreground-muted leading-relaxed max-w-2xl mx-auto">
              Currently building experience through academic projects, hackathons, and self-directed learning. 
              Actively seeking <span className="text-neon-blue font-medium">internship opportunities</span> to 
              apply my skills in real-world environments and contribute to meaningful projects.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="font-poppins font-semibold text-xl text-foreground text-center mb-8">
              Hackathons & Participation
            </h3>
            
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={exp.title} className="relative">
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-neon-blue/50 to-transparent"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline Icon */}
                    <div className={`p-3 rounded-lg border ${getColorClasses(exp.color)} flex-shrink-0`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    {/* Content */}
                    <div className="glass-card p-6 rounded-2xl flex-1 hover-lift">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="font-poppins font-semibold text-lg text-foreground">
                            {exp.title}
                          </h4>
                          <p className="text-foreground-muted">{exp.role}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground-muted mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          {exp.year}
                        </div>
                      </div>
                      
                      <p className="text-foreground-muted leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      
                      {/* Skills Gained */}
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Skills Developed:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="px-3 py-1 rounded-full text-xs bg-muted text-foreground-muted border border-card-border"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Future Goals */}
          <div className="mt-16 text-center">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground">
                Looking Forward
              </h3>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                I'm actively seeking opportunities to grow through internships, collaborative projects, 
                and mentorship. My goal is to contribute to real-world solutions while expanding my 
                expertise in web development, cybersecurity, and DevOps.
              </p>
              
              {/* Goals */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-neon-green/20 bg-neon-green/5">
                  <div className="text-neon-green mb-2">🎯</div>
                  <div className="text-sm font-medium text-foreground">Internships</div>
                  <div className="text-xs text-foreground-muted">Industry experience</div>
                </div>
                
                <div className="p-4 rounded-lg border border-neon-blue/20 bg-neon-blue/5">
                  <div className="text-neon-blue mb-2">🤝</div>
                  <div className="text-sm font-medium text-foreground">Collaborations</div>
                  <div className="text-xs text-foreground-muted">Open source & teams</div>
                </div>
                
                <div className="p-4 rounded-lg border border-neon-violet/20 bg-neon-violet/5">
                  <div className="text-neon-violet mb-2">📚</div>
                  <div className="text-sm font-medium text-foreground">Mentorship</div>
                  <div className="text-xs text-foreground-muted">Learning from experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;