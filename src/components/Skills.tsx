import { useState } from "react";
import { Code, Database, Shield, Settings, Globe, Brain } from "lucide-react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: [
        { name: "C", level: 85, description: "System programming & DSA" },
        { name: "C++", level: 88, description: "Competitive programming" },
        { name: "Python", level: 80, description: "AI/ML & scripting" },
        { name: "Java", level: 75, description: "OOP & backend development" }
      ]
    },
    {
      title: "Web Technologies", 
      icon: Globe,
      color: "cyan",
      skills: [
        { name: "HTML", level: 90, description: "Semantic markup" },
        { name: "CSS", level: 85, description: "Styling & animations" },
        { name: "React.js", level: 78, description: "Component-based UI" },
        { name: "Tailwind CSS", level: 80, description: "Utility-first styling" },
      ]
    },
    {
      title: "Databases & Cloud",
      icon: Database, 
      color: "green",
      skills: [
        { name: "MySQL", level: 75, description: "Relational database design" },
        { name: "OCI", level: 65, description: "Oracle Cloud Infrastructure" },
      ]
    },
    {
      title: "Cybersecurity Tools",
      icon: Shield,
      color: "violet", 
      skills: [
        { name: "Burp Suite", level: 70, description: "Web application security testing" },
        { name: "Wireshark", level: 68, description: "Network protocol analysis" },
        { name: "OWASP ZAP", level: 65, description: "Security vulnerability scanning" },
      ]
    },
    {
      title: "DevOps & Core Concepts",
      icon: Settings,
      color: "orange",
      skills: [
        { name: "Git", level: 80, description: "Version control & collaboration" },
        { name: "DSA", level: 82, description: "Algorithms & data structures" },
        { name: "API Integration", level: 75, description: "RESTful services" }
        
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "yellow",
      skills: [
        { name: "TensorFlow", level: 65, description: "Deep learning frameworks" },
        { name: "OpenCV", level: 70, description: "Computer vision" },
        { name: "NumPy", level: 75, description: "Numerical computing" },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-neon-blue/30 bg-neon-blue/5 text-neon-blue",
      cyan: "border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan", 
      green: "border-neon-green/30 bg-neon-green/5 text-neon-green",
      violet: "border-neon-violet/30 bg-neon-violet/5 text-neon-violet",
      orange: "border-neon-orange/30 bg-neon-orange/5 text-neon-orange",
      yellow: "border-neon-yellow/30 bg-neon-yellow/5 text-neon-yellow",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Skills & <span className="bg-gradient-neon bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-foreground-muted text-lg">Technologies I work with and tools I use</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="glass-card p-6 rounded-2xl hover-lift">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg border ${getColorClasses(category.color)}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-poppins font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Name */}
                      <div className="mb-2">
                        <span className="font-medium text-foreground group-hover:text-neon-blue transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      {/* Description (on hover) */}
                      {hoveredSkill === skill.name && (
                        <div className="mt-2 text-sm text-foreground-muted animate-fade-in">
                          {skill.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground">
              Always Learning, Always Growing
            </h3>
            <p className="text-foreground-muted mb-6">
              I'm constantly exploring new technologies and expanding my skill set. 
              Currently diving deeper into DevSecOps and advanced cybersecurity practices.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Docker", "Kubernetes", "CI/CD", "Penetration Testing", "Cloud Security"].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm glass-card border border-neon-blue/20 text-foreground-muted hover:border-neon-blue/40 transition-all"
                >
                  {skill} <span className="text-neon-blue">📚</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;