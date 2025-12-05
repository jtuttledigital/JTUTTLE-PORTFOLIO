// components/ProjectGrid.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, Project } from "@/lib/projects";
import { ProjectModal } from "./ProjectModal";

export function ProjectGrid() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section className="space-y-4">
        <h2 className="text-[10px] font-mono tracking-[0.25em] text-neutral-500">
          SELECTED WORK
        </h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(220px,auto)]">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative flex flex-col overflow-hidden border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 transition-colors text-left"
            >
              <Image
                src={project.tileImage}
                alt={project.title}
                width={800}
                height={500}
                className="h-48 w-full object-cover"
              />
              <div className="flex-1 px-4 py-3 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="text-[9px] font-mono tracking-[0.25em] text-neutral-500">
                    {project.category}
                  </div>
                  <div className="text-sm font-medium text-neutral-100">
                    {project.title}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {project.role}
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-neutral-400 group-hover:text-accent flex items-center gap-1">
                  View project
                  <span
                    aria-hidden
                    className="translate-x-[-3px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-transform"
                  >
                    →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
