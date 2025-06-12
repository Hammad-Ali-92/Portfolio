import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-accent/10 hover:border-accent/20 transition-all duration-300 h-full flex flex-col"
    >
      <div className="space-y-2 md:space-y-4 flex-1">
        <motion.h3 
          className="text-base md:text-lg font-mono group-hover:text-accent transition-colors duration-300 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {title}
          <div className="h-px flex-1 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
        </motion.h3>

        <motion.p 
          className="text-muted-foreground/70 text-xs md:text-sm font-mono leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-1.5 pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-1.5 py-0.5 text-[10px] md:text-xs border border-accent/10 bg-accent/5 hover:bg-accent/10 hover:border-accent/20 transition-colors rounded-md font-mono"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};