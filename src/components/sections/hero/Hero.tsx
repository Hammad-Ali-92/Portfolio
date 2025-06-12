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
        "h-[100vh] flex items-center justify-center relative overflow-hidden",
        isMobile && "pt-20" // Add top padding only on mobile
      )}
      aria-label="Hero Section"
    >      
      <div className="container mx-auto px-4 max-w-[95%]">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] items-center",
          isMobile ? "gap-8 h-full content-center pb-16" : "gap-12 pt-20" // Add top padding on desktop
        )}>
          <motion.div 
            className="order-1 flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >            
            <div className="w-full lg:max-w-[90%]">
              <HeroContent />
            </div>
          </motion.div>
          
          {!isMobile && (
            <motion.div 
              className="order-2 hidden lg:block h-[70vh] overflow-y-auto journal-scrollbar pr-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="pr-2">
                <HeroJournal />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;