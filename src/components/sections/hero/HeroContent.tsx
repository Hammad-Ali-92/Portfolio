import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroContent: React.FC = () => {
  const isMobile = useIsMobile();
  
  const handleOpenCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open('https://drive.google.com/file/d/10mJ2QEmzYGwUAkzAQwfspTtgyohUBl7s/view?usp=drivesdk', '_blank');
  };

  return (
    <motion.div
      className="space-y-8 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-base font-mono text-accent/80">Hi, I'm</h2>
          <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-mono tracking-tight`}>
            Hammad Ali
            <span className="text-accent">.</span>
          </h1>
          <p className={`${isMobile ? 'text-base' : 'text-xl'} font-mono text-muted-foreground/80`}>
            Software & Product Engineer
          </p>
        </motion.div>

        <motion.p
          className={`${isMobile ? 'text-sm' : 'text-base'} max-w-md leading-relaxed font-mono text-muted-foreground/70`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I build simple, scalable solutions that work smoothly and feel natural
          to use.
        </motion.p>
      </div>

      <motion.div
        className="flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className={`flex ${isMobile ? 'flex-col w-full' : 'gap-4'}`}>
          <Button
            className={`bg-accent hover:bg-accent/90 text-accent-foreground font-mono text-sm h-10 px-6 group relative overflow-hidden ${
              isMobile ? 'w-full mb-3' : ''
            }`}
            asChild
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2"
              aria-label="View my work"
            >
              <span className="relative z-10">View my Work</span>
              {!isMobile && (
                <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              )}
            </a>
          </Button>

          <Button
            variant="outline"
            className={`bg-background hover:bg-accent/5 text-accent border-2 border-accent/20 font-mono text-sm h-10 px-6 ${
              isMobile ? 'w-full' : ''
            }`}
            asChild
          >
            <a
              href="#"
              onClick={handleOpenCV}
              className="flex items-center justify-center gap-2"
              aria-label="View CV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown size={18} className="transition-transform group-hover:scale-110 duration-300" />
              <span>View CV</span>
            </a>
          </Button>
        </div>
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
};