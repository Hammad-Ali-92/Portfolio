import React from "react";

export const ProjectsHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-block mb-3 text-sm font-mono text-accent/80 bg-accent/5 px-4 py-1.5 rounded-full border-2 border-accent/10">
        My Work
      </div>
      <h2 className="text-3xl mb-4 font-mono">Projects</h2>
      <p className="text-muted-foreground/70 max-w-2xl mx-auto font-mono">
        A selection of my projects showcasing problem-solving abilities 
        and technical expertise across different domains.
      </p>
    </div>
  );
};