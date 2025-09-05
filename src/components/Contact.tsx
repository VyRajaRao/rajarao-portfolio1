import { useState } from "react";
import emailjs from 'emailjs-com';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    emailjs.send(
      'service_x4bewkj',
      'template_wz1rlwk',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'j1YarIKgApIHXEp_Q'
    ).then(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }).catch(() => {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "vyraja777@gmail.com",
      href: "mailto:vyraja777@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 86299 23817",
      href: "tel:+918629923817",
      color: "cyan"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/VyRajaRao",
      href: "https://github.com/VyRajaRao",
      color: "violet"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/vyrajarao",
      href: "https://linkedin.com/in/vyrajarao",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-neon-blue/30 bg-neon-blue/5 text-neon-blue hover:border-neon-blue/50",
      cyan: "border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan hover:border-neon-cyan/50",
      violet: "border-neon-violet/30 bg-neon-violet/5 text-neon-violet hover:border-neon-violet/50",
      green: "border-neon-green/30 bg-neon-green/5 text-neon-green hover:border-neon-green/50",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="contact" className="py-20 bg-background-alt">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Get In <span className="bg-gradient-neon bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-foreground-muted text-lg">Let's build something amazing together!</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-4">
                  Let's Connect
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or simply connect with fellow developers and tech enthusiasts. Whether you're 
                  looking for an intern, have a project idea, or want to share knowledge, 
                  feel free to reach out!
                </p>
                
                <div className="flex items-center gap-2 text-foreground-muted mb-6">
                  <MapPin className="h-5 w-5 text-neon-green" />
                  <span>Based in India • Open to remote opportunities</span>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="grid gap-4">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`glass-card p-4 rounded-xl border transition-all hover-lift ${getColorClasses(method.color)}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-current/10">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{method.label}</div>
                          <div className="text-sm text-foreground-muted">{method.value}</div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Quick Stats */}
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="font-semibold text-foreground mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">Response Time</span>
                    <span className="text-neon-blue font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">Availability</span>
                    <span className="text-neon-green font-medium">Open for opportunities</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground-muted">Preferred Contact</span>
                    <span className="text-neon-violet font-medium">Email or LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-background/50 border-card-border focus:border-neon-blue/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-card-border focus:border-neon-blue/50"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={5}
                    className="bg-background/50 border-card-border focus:border-neon-blue/50 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="neon" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-foreground-muted text-center">
                  I'll get back to you as soon as possible. Usually within 24 hours!
                </p>
              </form>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground">
                Ready to Collaborate?
              </h3>
              <p className="text-foreground-muted mb-6">
                Whether it's an internship, a project collaboration, or just a tech discussion, 
                I'm always open to new connections and opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="neon" asChild>
                  <a href="mailto:vyraja777@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://linkedin.com/in/vyrajarao" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;