import React from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "TA Management System",
      description: "Developed a comprehensive system to streamline assignments, schedules, and evaluations, implementing advanced database queries to enhance data handling and reporting, thus reducing administrative overhead.",
      tags: ["React", "Node.js", "PostgreSQL"],
      repoUrl: "https://github.com/zaim-abbasi"
    },
    {
      title: "Multi-User Messaging Platform",
      description: "Architected a robust terminal-based multi-user messaging platform using advanced network protocols, enabling secure peer-to-peer communication across local networks.",
      tags: ["Python", "Networking", "Security"],
      repoUrl: "https://github.com/zaim-abbasi"
    },
    {
      title: "Terminal Maze Game",
      description: "Designed a terminal-based Maze Game utilizing advanced data structures and pathfinding algorithms. Created a dynamic maze generation system with varying difficulty levels and integrated intelligent opponent AI.",
      tags: ["C++", "Algorithms", "Data Structures"],
      repoUrl: "https://github.com/zaim-abbasi"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div className="pixel-container">
        <div className="text-center mb-16">
          <div className="pixel-badge inline-block mb-3">My Work</div>
          <h2 className="text-3xl mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my projects showcasing problem-solving abilities and
            technical expertise across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="pixel-card bg-card hover:border-accent h-auto"
            >
              <div className="p-4">
                <h3 className="text-lg mb-2 font-pixel">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs border-2 border-muted hover:border-accent transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="pixel-button w-full"
                  asChild
                >
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="pixel-button bg-accent hover:bg-accent/90 h-9"
            asChild
          >
            <a
              href="https://github.com/zaim-abbasi/zaim-abbasi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github size={16} />
              <span>View More on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;