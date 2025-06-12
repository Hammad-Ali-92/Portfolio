import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  technologies: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  technologies
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card/50 backdrop-blur-sm rounded-2xl p-3 border-2 border-accent/10 hover:border-accent/20 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-sm md:text-base font-mono group-hover:text-accent transition-colors duration-300 mt-2">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech, techIndex) => (
          <motion.span 
            key={techIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: techIndex * 0.1 }}
            className="px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm border border-accent/10 bg-accent/5 hover:bg-accent/10 hover:border-accent/20 transition-colors rounded-md font-mono"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};