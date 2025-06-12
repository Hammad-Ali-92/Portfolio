import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Calendar, Code2, Laptop } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface JournalEntry {
  date: string;
  title: string;
  description: string;
  type: "tech" | "project";
  icon: React.ReactNode;
}

const journalEntries: JournalEntry[] = [
  {
    date: "March 23, 2025",
    title: "Finalized Portfolio Website",
    description:
      "Finished and launched my portfolio built with React, Tailwind CSS, and Framer Motion. Feels great to have it live!",
    type: "project",
    icon: <Laptop size={16} className="text-pixel-green" />,
  },
  {
    date: "March 15, 2025",
    title: "Integrated shadcn/ui Components",
    description:
      "Used shadcn/ui to make my portfolio cleaner and more reusable. Really improved the component structure.",
    type: "tech",
    icon: <Code2 size={16} className="text-pixel-blue" />,
  },
  {
    date: "March 10, 2025",
    title: "Advanced Framer Motion Animations",
    description:
      "Made my website smoother with Framer Motion animations. Transitions and interactions feel way better now.",
    type: "tech",
    icon: <Calendar size={16} className="text-pixel-purple" />,
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
        )}>Journal</h2>
      </div>

      <div className="space-y-6">
        {journalEntries.map((entry, index) => (
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
                  {entry.icon}
                  <span className={cn(
                    "font-mono text-muted-foreground",
                    isMobile ? "text-[10px]" : "text-xs"
                  )}>
                    {entry.date}
                  </span>
                </div>
                <span className={cn(
                  "px-3 py-1 rounded-full font-mono transition-colors duration-300",
                  "bg-accent/10 text-accent border border-accent/20",
                  "group-hover:bg-accent/20 group-hover:border-accent/30",
                  isMobile ? "text-[10px]" : "text-xs"
                )}>
                  {entry.type}
                </span>
              </div>
              
              <h3 className={cn(
                "font-mono font-semibold group-hover:text-accent transition-colors duration-300",
                isMobile ? "text-sm" : "text-base"
              )}>
                {entry.title}
              </h3>
              
              <p className={cn(
                "text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300 font-mono",
                isMobile ? "text-xs" : "text-sm"
              )}>
                {entry.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};