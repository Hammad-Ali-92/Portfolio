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
    title: "Ecommerce Fullstack Web Application",
    description:
      "Developed a responsive eCommerce application with dynamic content, secure user authentication, and admin product management. Built with React + TypeScript, TailwindCSS, Node.js, Express.js, MongoDB, and JWT authentication.",
    tags: ["TypeScript", "React.js", "Node.js", "MongoDB"],
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