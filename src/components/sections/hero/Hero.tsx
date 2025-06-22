import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroJournal } from "./HeroJournal";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section 
      id="home" 
      className={cn(
        "min-h-screen flex items-center justify-center relative overflow-hidden",
        isMobile && "pt-24 pb-8" // Increased top padding and added bottom padding for mobile
      )}
      aria-label="Hero Section"
    >      
      <div className="container mx-auto px-4 max-w-[95%]">
        <div className={cn(
          "grid items-start",
          isMobile 
            ? "grid-cols-1 gap-12 h-full content-center" // Increased gap between sections on mobile
            : "grid-cols-[1fr,1fr] gap-12 pt-20" // Two equal columns on desktop
        )}>
          {/* Left side - Name and main content */}
          <motion.div 
            className="order-1 flex flex-col justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >            
            <div className="w-full">
              <HeroContent />
            </div>
          </motion.div>
          
          {/* Right side - About Me section */}
          <motion.div 
            className={cn(
              "order-2 flex items-start",
              isMobile ? "mt-0" : "pt-8" // Add some top padding on desktop to align better
            )}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full">
              <HeroJournal />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;