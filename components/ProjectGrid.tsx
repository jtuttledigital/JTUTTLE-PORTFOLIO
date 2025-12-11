// components/ProjectGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { ProjectModal } from "./ProjectModal";

export function ProjectGrid() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activeProject =
    projects.find((p: any) => p.slug === activeSlug) ?? null;

  return (
    <>
      <div className="grid md:grid-cols-3 gap-[15px]">
        {projects.map((project: any) => (
          <article
            key={project.slug}
            className="group bg-[#111111] border border-neutral-800/80 hover:border-accent/70 transition-colors overflow-hidden flex flex-col cursor-pointer"
            onClick={() => setActiveSlug(project.slug)}
          >
            {/* Tile image + subtle hover veil */}
            <div className="relative aspect-[16/10] bg-black">
              <Image
                src={project.tileImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
                priority={project.slug === "brand-designer"}
              />

              {/* Subtle hover overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30" />
            </div>

            {/* Text */}
            <div className="flex-1 px-6 py-5 flex flex-col justify-between">
              <div>
                <div className="mb-2 text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                  {project.category}
                </div>
                <h3 className="text-sm font-medium text-neutral-100">
                  {project.title}
                </h3>
                <p className="mt-1 text-[11px] text-neutral-400">
                  {project.subtitle}
                </p>
              </div>

              <button
                type="button"
                className="mt-6 text-[11px] text-neutral-300 hover:text-accent inline-flex items-center gap-1"
              >
                View project <span aria-hidden>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Full-screen project view */}
      <ProjectModal project={activeProject} onClose={() => setActiveSlug(null)} />
    </>
  );
}
