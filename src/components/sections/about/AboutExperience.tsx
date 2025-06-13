import React from "react";
import { ExperienceItem } from "./ExperienceItem";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    role: "Event-Verse",
    company: "Desktop/Web-Based Application",
    type: "Project",
    location: "Pakistan",
    duration: "2023 - 2024",
    technologies: ["C#", ".NET", "SQL Server"],
    points: [
      "Scalable system for managing events, ticketing, and analytics",
      "Utilized C# for the application logic and SQL Server for managing data related to events, ticketing, attendees, vendors, and analytics",
      "The system supports organizers, attendees, and sponsors with role-specific functionalities"
    ]
  },
  {
    role: "ID Verification",
    company: "Mobile App Design using Figma",
    type: "Project",
    location: "Design Project",
    duration: "2024",
    technologies: ["Figma", "HCI Usability Principles"],
    points: [
      "Designed a mobile application interface focused on secure and user-friendly ID verification",
      "Applied core HCI usability principles and design guidelines to create intuitive, accessible, and aesthetically consistent user flows",
      "Created user flows for ID scanning, validation, and user onboarding"
    ]
  }
];

export const AboutExperience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-accent/10">              
          <h3 className="text-xl mb-6 font-mono pb-2 border-b-2 border-accent/10 flex justify-between items-center">
            <span>Experience</span>
            {experiences.length > 1 && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  className="h-8 w-8 rounded-lg border-2 border-accent/20 hover:bg-accent hover:text-accent-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="h-8 w-8 rounded-lg border-2 border-accent/20 hover:bg-accent hover:text-accent-foreground"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </h3>
          
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ExperienceItem {...experiences[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {experiences.length > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-accent/20"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};