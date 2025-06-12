import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { PixelAvatar, PixelComputer } from "./PixelArt";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">            
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-mono mb-2 text-accent">Hi, I'm Zaim Abbasi</h2>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  SWE | Full-Stack Engineer | Ex NADRA | Software Engineering Undergraduate, FAST (Class of '26)
                </h1>
              </div>
              
              <p className="text-lg max-w-md leading-relaxed font-mono text-muted-foreground">
                Passionate about building scalable applications and solving complex problems through elegant solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-accent text-accent-foreground font-mono text-sm h-10"
                  asChild
                >
                  <a href="#projects">View my Work</a>
                </Button>

                <Button 
                  variant="outline"
                  className="font-mono text-sm h-10"
                  asChild
                >
                  <a href="/cv.pdf" download>
                    <FileDown size={16} className="mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
              
              <div className="flex gap-6 pt-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:hello@example.com"
                  className="p-3 border-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 right-0 -top-8">
                <PixelComputer className="opacity-80" />
              </div>
              <div className="relative z-10">
                <PixelAvatar className="w-64 h-64" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;