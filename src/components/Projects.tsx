import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Github, ExternalLink, X, Brain, Cloud, Code } from "lucide-react";

interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  category: string;
  icon: any;
  color: string;
  problem: string;
  solution: string;
  challenges: string[];
  outcomes: string[];
  liveDemo?: string;
  sourceCode?: string;
  pdfReport?: { name: string; url: string }[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "eye-disease-detection",
      title: "Eye Disease Detection AI",
      summary: "Upload a retinal image; the model analyzes and predicts probable retinal conditions vs. normal retina.",
      description: "An AI-powered system that analyzes retinal images to detect potential eye diseases and conditions, helping in early diagnosis and prevention.",
      technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Flask"],
      category: "AI/ML",
      icon: Brain,
      color: "violet",
      problem: "Early detection of eye diseases is crucial for preventing vision loss, but requires specialized medical expertise that may not be readily available.",
      solution: "Developed a machine learning model that can analyze retinal images and identify potential abnormalities, making preliminary screening more accessible.",
      challenges: [
        "Collecting and preprocessing diverse retinal image datasets",
        "Balancing model accuracy while avoiding false positives",
        "Optimizing model performance for real-time inference"
      ],
      outcomes: [
        "Achieved 87% accuracy in detecting common retinal conditions",
        "Reduced analysis time from minutes to seconds",
        "Created an intuitive web interface for easy image upload and results"
      ],
      liveDemo: "https://eyezen-detect.vercel.app/",
      sourceCode: "https://github.com/VyRajaRao/eye-disease-detection-python.git"
    },
    {
      id: "crypto-vault",
      title: "CryptoVault - Cryptocurrency Dashboard",
      summary: "A full-stack crypto market dashboard with analysis graphs, portfolio tracking, live trading, and user authentication.",
      description: "CryptoVault is a full-stack cryptocurrency market analytics platform that provides real-time data, interactive charts, and user portfolio management. It integrates APIs for market data and offers personalized features like price alerts, live trading, and secure login/logout functionality.",
      technologies: ["React.js", "Node.js", "Express.js", "Supabase", "REST APIs", "Chart.js", "Tailwind"],
      category: "Full-Stack Development",
      icon: Cloud,
      color: "blue",
      problem: "Crypto investors often struggle with fragmented platforms that provide either data, portfolio tracking, or alerts, but not all in one place.",
      solution: "Developed a unified dashboard with real-time API integration, analysis graphs, and portfolio management. Added features like login/logout, customizable price alerts, and live trading to deliver a complete crypto tracking experience.",
      challenges: [
        "Integrating multiple real-time cryptocurrency APIs",
        "Ensuring secure authentication and authorization",
        "Optimizing analysis graphs for large datasets",
        "Handling scalability for active users"
      ],
      outcomes: [
        "Delivered an all-in-one crypto platform with portfolio, alerts, and trading",
        "Integrated live market data with top 10 cryptocurrencies",
        "Implemented secure authentication with JWT sessions",
        "Enhanced user experience with interactive charts and responsive UI"
      ],
      liveDemo: "https://cryptoapivirtual.netlify.app/",
      sourceCode: "https://github.com/VyRajaRao/crypto-api-virtual-money.git"
    },

    {
      id: "weather-api-app",
      title: "Weather API Web App",
      summary: "Real-time conditions with 4-day forecasts for any location via API; responsive UI with clear icons.",
      description: "A comprehensive weather application providing real-time weather data and forecasts with an intuitive, responsive user interface.",
      technologies: ["JavaScript", "API Integration", "CSS3", "OpenWeather API"],
      category: "Web Development",
      icon: Cloud,
      color: "cyan",
      problem: "Users need quick access to accurate weather information with an intuitive interface that works across all devices.",
      solution: "Built a responsive web application that fetches real-time weather data and presents it in a clean, user-friendly interface with visual weather icons.",
      challenges: [
        "Handling API rate limits and error states gracefully",
        "Designing responsive layouts for various screen sizes",
        "Implementing location-based weather detection"
      ],
      outcomes: [
        "Successfully integrated OpenWeather API for real-time data",
        "Created responsive design that works on mobile and desktop",
        "Implemented geolocation for automatic weather detection"
      ],
      liveDemo: "https://weather-api-gules-chi.vercel.app/",
      sourceCode: "https://github.com/VyRajaRao/weather-api"
    },
    {
      id: "JEE-advisor",
      title: "JEE Advisor Predictiion and Comparing Tool",
      summary: "Suggests best IIT options based on user rank using previous opening/closing ranks from Kaggle dataset.",
      description: "A data-driven application that helps students choose the best IIT options based on their rank by analyzing historical admission data.",
      technologies: [
        "Python",
        "JavaScript",
        "Data Analysis",
        "Kaggle Dataset",
        "Flask"
      ],
      category: "Data Science",
      icon: "Code",
      color: "green",
      problem: "Students struggle to choose the right IIT and branch combination based on their rank due to complex historical data patterns.",
      solution: "Developed a recommendation system that analyzes historical opening and closing ranks to suggest the best possible IIT options for a given rank.",
      challenges: [
        "Processing and cleaning large datasets from multiple years",
        "Creating accurate prediction algorithms based on historical trends",
        "Building an intuitive interface for rank-based recommendations"
      ],
      "outcomes": [
        "Processed 5+ years of IIT admission data",
        "Created accurate predictions with 90%+ reliability",
        "Helped 100+ students in the testing phase"
      ],
      "liveDemo": "https://jeeadvisor.netlify.app/",
      "sourceCode": "https://github.com/VyRajaRao/jee-rank-guide.git"
    },
    {
      id: "cybersecurity-nmaps-report",
      title: "Cyber Security Nmaps Enumeration, Web Application Penetration Testing and Vulnerability Analysis Report",
      summary: "Comprehensive security assessment report covering network enumeration, web application penetration testing, and vulnerability analysis.",
      description: "A detailed cyber security project that identifies potential threats through Nmap scanning, evaluates web applications for security flaws, and provides actionable insights for mitigating vulnerabilities.",
      technologies: ["Nmap", "Burp Suite", "OWASP ZAP", "Kali Linux", "Python", "Web Security Tools"],
      category: "Cyber Security",
      icon: Code,
      color: "green",
      problem: "Organizations often face risks due to unpatched vulnerabilities, weak configurations, and insecure web applications that attackers can exploit.",
      solution: "Performed systematic network enumeration using Nmap, conducted web application penetration tests following OWASP standards, and analyzed vulnerabilities with remediation strategies.",
      challenges: [
        "Detecting open ports and services in complex network environments",
        "Identifying hidden web application vulnerabilities such as SQL Injection, XSS, and CSRF",
        "Mapping vulnerabilities to severity levels with actionable fixes"
      ],
      outcomes: [
        "Discovered misconfigurations and critical vulnerabilities across test environments",
        "Provided a detailed vulnerability assessment report with CVSS scoring",
        "Recommended effective mitigation strategies to strengthen security posture"
      ],
      pdfReport: [
    {
      name: "Web App Pentest Report",
      url: "https://drive.google.com/file/d/1QYHppHBtN52UPd0qAPmsHqj3Ja-F3_uZ/view?usp=drive_link"
    },
    {
      name: "Nmap and VAPT Report",
      url: "https://drive.google.com/file/d/1m4J5ZoiBDNCliph8Vt0w8V43lXTq2U9t/view?usp=drive_link"
    }
  ]
    }

  ];

  const getColorClasses = (color: string) => {
    const colors = {
      violet: "border-neon-violet/30 bg-neon-violet/5 text-neon-violet",
      cyan: "border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan",
      green: "border-neon-green/30 bg-neon-green/5 text-neon-green",
    };
    return colors[color as keyof typeof colors] || colors.violet;
  };

  return (
    <section id="projects" className="py-20 bg-background-alt">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Featured <span className="bg-gradient-neon bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground-muted text-lg">Building solutions that matter</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="glass-card p-6 rounded-2xl hover-lift group">
                {/* Project Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg border ${getColorClasses(project.color)}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Content */}
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground-muted text-sm mb-4 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs bg-muted text-foreground-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded text-xs bg-muted text-foreground-muted">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 items-center justify-start">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>

                  {project.liveDemo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}

                  {project.sourceCode && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.pdfReport && Array.isArray(project.pdfReport) && project.pdfReport.map((pdf, idx) => (
                    <Button key={idx} variant="ghost" size="sm" asChild>
                      <a href={pdf.url} target="_blank" rel="noopener noreferrer" download>
                        <Github className="h-4 w-4" />
                        {pdf.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground">
              Want to see more?
            </h3>
            <p className="text-foreground-muted mb-6">
              These are just highlights from my portfolio. I'm constantly working on new projects
              and exploring different technologies. Check out my GitHub for the complete collection.
            </p>
            <Button variant="neon" asChild>
              <a href="https://github.com/VyRajaRao" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-card-border p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg border ${getColorClasses(selectedProject.color)}`}>
                  <selectedProject.icon className="h-5 w-5" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-foreground">
                  {selectedProject.title}
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Description */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Project Overview</h4>
                <p className="text-foreground-muted leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Problem</h4>
                  <p className="text-foreground-muted leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Solution</h4>
                  <p className="text-foreground-muted leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Challenges & Outcomes */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Challenges</h4>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="text-foreground-muted text-sm flex items-start gap-2">
                        <span className="text-neon-blue mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Outcomes & Learnings</h4>
                  <ul className="space-y-2">
                    {selectedProject.outcomes.map((outcome, index) => (
                      <li key={index} className="text-foreground-muted text-sm flex items-start gap-2">
                        <span className="text-neon-green mt-1">✓</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-card-border items-center justify-start">
                {selectedProject.liveDemo && (
                  <Button variant="neon" asChild>
                    <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {selectedProject.sourceCode && (
                  <Button variant="outline" asChild>
                    <a href={selectedProject.sourceCode} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
                {selectedProject.pdfReport && Array.isArray(selectedProject.pdfReport) && selectedProject.pdfReport.map((pdf, idx) => (
                  <Button key={idx} variant="secondary" asChild className="download-pdf">
                    <a href={pdf.url} target="_blank" rel="noopener noreferrer" download>
                      <Github className="mr-2 h-4 w-4" />
                      {pdf.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;