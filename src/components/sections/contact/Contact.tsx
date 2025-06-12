import React from "react";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-20 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-[95%]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl mb-4 font-mono">Contact</h2>
          <p className="text-muted-foreground/70 max-w-3xl font-mono text-sm md:text-base">
            Have a project or opportunity to discuss? Reach out—I'm always open to new challenges and collaborations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.2fr] gap-6 md:gap-12 items-stretch">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;