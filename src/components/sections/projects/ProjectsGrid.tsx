import React from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Event-Verse Management System",
    description:
      "Built a comprehensive desktop/web-based application for managing events, ticketing, and analytics. Developed using C# and .NET with SQL Server for robust data management, supporting organizers, attendees, and sponsors with role-specific functionalities.",
    tags: ["C#", ".NET", "SQL Server", "Desktop App"],
    repoUrl: "https://github.com/Hammad-Ali-92",
  },
  {
    title: "Digital Content Platform",
    description:
      "Built a platform for creators to monetize content with paywalls and instant payments. Supports credit cards, PayPal, and crypto, ensuring secure transactions and reliable earnings.",
    tags: ["React.js", "Supabase", "Node.js", "Tailwind CSS"],
    repoUrl: "https://github.com/Hammad-Ali-92",
  },
  {
    title: "Multi-User Messaging Platform",
    description:
      "Developed a messaging platform with secure peer-to-peer communication using advanced network protocols, encryption, and authentication to enable seamless multi-user interactions over local networks.",
    tags: ["Java", "Networking", "Socket Programming"],
    repoUrl: "https://github.com/Hammad-Ali-92",
  },
];

export const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};