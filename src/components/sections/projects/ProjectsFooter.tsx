import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const ProjectsFooter: React.FC = () => {
  return (
    <div className="text-center mt-12">
      <Button className="bg-accent hover:bg-accent/90 h-9 font-mono" asChild>
        <a
          href="https://github.com/Hammad-Ali-92?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          <Github size={16} />
          <span>View More on GitHub</span>
        </a>
      </Button>
    </div>
  );
};