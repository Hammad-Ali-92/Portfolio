import React from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    content: "hammadaliduggaljutt@gmail.com",
    link: "mailto:hammadaliduggaljutt@gmail.com",
    linkText: "Send an email"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    content: "Islamabad, PK",
    subContent: "Available for remote work worldwide"
  }
];

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/Hammad-i220628",
    label: "GitHub"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/hammad-ali-duggal-030ba427b",
    label: "LinkedIn"
  }
];

export const ContactInfo: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col gap-3"
    >
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/10 hover:border-accent/20 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/5 border-2 border-accent/10 text-accent flex-shrink-0">
              {item.icon}
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <h3 className="font-mono text-lg">{item.title}</h3>
              <p className="font-mono text-muted-foreground/70 break-all text-sm md:text-base">
                {item.content}
              </p>
              {item.subContent && (
                <p className="font-mono text-sm text-muted-foreground/50">
                  {item.subContent}
                </p>
              )}
              {item.link && (
                <a
                  href={item.link}
                  className="inline-block mt-2 text-accent hover:text-accent/80 font-mono text-sm transition-colors"
                >
                  {item.linkText}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        variants={itemVariants}
        className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/10 hover:border-accent/20 transition-all duration-300 flex-grow"
      >
        <div className="h-full flex flex-col">
          <h3 className="font-mono text-lg mb-3">Social Links</h3>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-accent/5 border-2 border-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};