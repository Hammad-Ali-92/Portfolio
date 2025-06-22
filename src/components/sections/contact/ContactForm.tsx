import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xpwryall");

  // Show success message if form was submitted successfully
  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-full bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/10 hover:border-accent/20 transition-all duration-300 flex items-center justify-center"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="h-16 w-16 text-accent mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-mono text-accent mb-2">Message Sent!</h3>
            <p className="text-muted-foreground/70 font-mono text-sm">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="h-full bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/10 hover:border-accent/20 transition-all duration-300"
    >
      <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col">
        <div>
          <label htmlFor="name" className="block mb-2 font-mono text-sm">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            className="font-mono bg-background/50 border-accent/10 focus:border-accent/20 focus-visible:ring-1 focus-visible:ring-accent/20"
            placeholder="Your Name"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-red-500 text-xs font-mono mt-1"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 font-mono text-sm">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="font-mono bg-background/50 border-accent/10 focus:border-accent/20 focus-visible:ring-1 focus-visible:ring-accent/20"
            placeholder="your.email@example.com"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-xs font-mono mt-1"
          />
        </div>
        
        <div className="flex-grow">
          <label htmlFor="message" className="block mb-2 font-mono text-sm">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            className="font-mono h-[calc(100%-2rem)] min-h-[100px] bg-background/50 border-accent/10 focus:border-accent/20 focus-visible:ring-1 focus-visible:ring-accent/20 resize-none mb-4"
            placeholder="Your message here..."
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-xs font-mono mt-1"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-mono group"
          disabled={state.submitting}
        >
          {state.submitting ? (
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-current rounded-full animate-pulse"></span>
              <span>Sending...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <span>Send Message</span>
            </span>
          )}
        </Button>

        {/* Display general form errors */}
        {state.errors && state.errors.length > 0 && (
          <div className="text-red-500 text-xs font-mono text-center">
            {state.errors.map((error, index) => (
              <div key={index}>{error.message}</div>
            ))}
          </div>
        )}
      </form>
    </motion.div>
  );
};