import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/Hammad-Ali-92",
    icon: Github,
    label: "GitHub Profile",
    delay: 0.1
  },
  {
    href: "https://www.linkedin.com/in/hammad-ali-duggal-030ba427b",
    icon: Linkedin,
    label: "LinkedIn Profile",
    delay: 0.2
  },
  {
    href: "mailto:hammadaliduggaljutt@gmail.com",
    icon: Mail,
    label: "Email Contact",
    delay: 0.3
  },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="h-10 inline-flex items-center border-2 border-accent/10 rounded-lg px-2 bg-background/50 backdrop-blur-sm self-start">
      <div className="flex gap-2">
        {socialLinks.map(({ href, icon: Icon, label, delay }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-foreground hover:text-accent transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            aria-label={label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={16} className="transition-transform duration-300" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};