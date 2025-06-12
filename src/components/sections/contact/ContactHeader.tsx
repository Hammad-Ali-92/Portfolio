import React from "react";

export const ContactHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="pixel-badge inline-block mb-3">
        Get in Touch
      </div>
      <h2 className="text-3xl mb-4">Contact Me</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Have a project in mind or want to discuss opportunities? 
        Feel free to reach out. I'm always open to new challenges 
        and collaborations.
      </p>
    </div>
  );
};