import React from "react";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsFooter } from "./ProjectsFooter";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-20 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-[95%]">
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl mb-4 font-mono">Projects</h2>
          <p className="text-muted-foreground/70 max-w-3xl font-mono text-sm md:text-base">
            A selection of my projects showcasing problem-solving abilities 
            and technical expertise across different domains.
          </p>
        </motion.div>
        
        <ProjectsGrid />
        <ProjectsFooter />
      </div>
    </section>
  );
};

export default Projects;