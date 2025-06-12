import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="pixel-container">
        <div className="text-center mb-16">
          <div className="pixel-badge inline-block mb-3">
            Get in Touch
          </div>
          <h2 className="text-3xl mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            Feel free to reach out. I'm always open to new challenges 
            and collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="pixel-card border-2 hover:border-accent">            
            <form onSubmit={handleSubmit}>              
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-pixel text-sm">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pixel-borders focus:border-accent"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-pixel text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pixel-borders focus:border-accent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-pixel text-sm">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="pixel-borders min-h-[150px] focus:border-accent"
                  placeholder="Your message here..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="pixel-button w-full bg-accent hover:bg-accent/90 flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-white animate-pulse"></span>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="pixel-card hover:border-accent p-4">
              <div className="p-3 border-2 text-accent border-accent inline-block">
                <Mail size={24} />
              </div>
              <h3 className="text-lg mt-4 mb-1 font-pixel">Email</h3>
              <p className="text-muted-foreground">zaim.abbasi@example.com</p>
              <a 
                href="mailto:zaim.abbasi@example.com" 
                className="text-accent hover:underline mt-1 inline-block"
              >
                Send an email
              </a>
            </div>
            
            <div className="pixel-card hover:border-accent p-4">
              <div className="p-3 border-2 text-accent border-accent inline-block">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg mt-4 mb-1 font-pixel">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
              <p className="text-muted-foreground text-sm mt-1">
                Available for remote work worldwide
              </p>
            </div>
            
            <div className="pixel-card hover:border-accent p-4">
              <div className="p-3 border-2 text-accent border-accent inline-block">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-lg mt-4 mb-1 font-pixel">Social</h3>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border-2 hover:text-accent hover:border-accent transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border-2 hover:text-accent hover:border-accent transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;