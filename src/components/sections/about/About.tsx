import React from "react";
import { motion } from "framer-motion";
import { AboutSkills } from "./AboutSkills";
import { AboutExperience } from "./AboutExperience";

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-[95%]">
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl mb-4 font-mono">Skills & Experience</h2>
          <p className="text-muted-foreground/70 max-w-3xl font-mono text-sm md:text-base">
            Third-year Software Engineering student at FAST (Class of '26), passionate about 
            building scalable applications and learning new technologies.
          </p>
        </motion.div>
        
        <AboutSkills />
        <AboutExperience />
      </div>
    </section>
  );
};

export default About;