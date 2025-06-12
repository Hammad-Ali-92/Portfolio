import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xwployde", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _replyto: "hammadaliduggaljutt@gmail.com"
        })
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        if ('errors' in data) {
          toast.error(data.errors.map((error: any) => error.message).join(", "));
        } else {
          toast.error("Failed to send message. Please try again.");
        }
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            value={formData.name}
            onChange={handleChange}
            required
            className="font-mono bg-background/50 border-accent/10 focus:border-accent/20 focus-visible:ring-1 focus-visible:ring-accent/20"
            placeholder="Your Name"
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
            value={formData.email}
            onChange={handleChange}
            required
            className="font-mono bg-background/50 border-accent/10 focus:border-accent/20 focus-visible:ring-1 focus-visible:ring-accent/20"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="flex-grow">
          <label htmlFor="message" className="block mb-2 font-mono text-sm">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="font-mono h-[calc(100%-2rem)] min-h-[100px] bg-background/50 border-accent/10 focus:border-accent/20 focus-visible:ring-1 focus-visible:ring-accent/20 resize-none mb-4"
            placeholder="Your message here..."
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-mono group"
          disabled={loading}
        >
          {loading ? (
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
      </form>
    </motion.div>
  );
};