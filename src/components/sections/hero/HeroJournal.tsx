import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Cloud, Database } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AboutItem {
  icon: React.ReactNode;
  text: string;
  type: "work" | "learning" | "passion";
}

const aboutItems: AboutItem[] = [
  {
    icon: <Code2 size={16} className="text-pixel-green" />,
    text: "I'm currently working on Full Stack Websites",
    type: "work",
  },
  {
    icon: <Cloud size={16} className="text-pixel-blue" />,
    text: "Learning Cloud Computing & DevOps",
    type: "learning",
  },
  {
    icon: <Database size={16} className="text-pixel-purple" />,
    text: "Passionate about Backend Development & System Design",
    type: "passion",
  },
];

export const HeroJournal: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative bg-card/50 backdrop-blur-sm border-2 rounded-xl p-6 shadow-xl">      
      <div className="flex items-center gap-3 mb-6">
        <span className="text-accent animate-pulse">●</span>
        <h2 className={cn(
          "font-mono",
          isMobile ? "text-lg" : "text-xl"
        )}>About Me</h2>
      </div>

      <div className="space-y-6">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6 py-2 group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300" />
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className={cn(
                    "px-3 py-1 rounded-full font-mono transition-colors duration-300",
                    "bg-accent/10 text-accent border border-accent/20",
                    "group-hover:bg-accent/20 group-hover:border-accent/30",
                    isMobile ? "text-[10px]" : "text-xs"
                  )}>
                    {item.type}
                  </span>
                </div>
              </div>
              
              <p className={cn(
                "text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300 font-mono leading-relaxed",
                isMobile ? "text-xs" : "text-sm"
              )}>
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};