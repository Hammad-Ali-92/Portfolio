import React from "react";
import { SkillCard } from "./SkillCard";

const skills = [
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "Backend",
    technologies: ["Node", "Next", "Python"]
  },
  {
    title: "Databases",
    technologies: ["Supabase", "MongoDB", "MsSQL", "MySQL"]
  },
  {
    title: "Architecture",
    technologies: ["Microservices", "REST", "System Design"]
  }
];

export const AboutSkills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
};