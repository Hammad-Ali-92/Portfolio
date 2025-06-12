
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t-2 relative overflow-hidden">
      {/* Pixel decorations */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pixel-blue via-pixel-purple to-pixel-green"></div>
      
      {/* Pixel art decorative elements */}
      <div className="absolute top-4 left-12 w-2 h-2 bg-pixel-blue opacity-30"></div>
      <div className="absolute top-6 left-16 w-1 h-1 bg-pixel-green opacity-30"></div>
      <div className="absolute bottom-4 right-12 w-2 h-2 bg-pixel-purple opacity-30"></div>
      <div className="absolute bottom-6 right-16 w-1 h-1 bg-pixel-pink opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <a href="#home" className="font-pixel text-xl tracking-wider inline-block group" aria-label="Back to top">
              <span className="text-pixel-blue group-hover:text-pixel-cyan transition-colors duration-300">HAMMAD</span>
              <span>.</span>
              <span className="text-pixel-green group-hover:text-pixel-yellow transition-colors duration-300">ALI</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2 font-mono">
              © {currentYear} • Built with ♥ and pixels
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <a 
              href="#home" 
              className="p-3 border-2 border-dashed hover:border-pixel-blue hover:text-pixel-blue transition-colors duration-300 group relative overflow-hidden"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
              <span className="absolute inset-0 bg-pixel-blue/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-left"></span>
            </a>
            <span className="text-xs text-muted-foreground mt-2 font-pixel">
              BACK TO TOP
            </span>
          </div>
          
          <div className="text-sm text-right">
            <p className="font-mono">Software Engineer • Problem Solver</p>
            <div className="flex gap-2 mt-1 justify-end">
              <span className="w-2 h-2 bg-pixel-blue"></span>
              <span className="w-2 h-2 bg-pixel-green"></span>
              <span className="w-2 h-2 bg-pixel-purple"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
