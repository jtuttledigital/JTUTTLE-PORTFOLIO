// components/ProjectGrid.tsx
"use client";

import Image from "next/image";
import { projects } from "@/lib/projects";

type ProjectGridProps = {
  onSelect: (slug: string) => void;
};

export function ProjectGrid({ onSelect }: ProjectGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {projects.map((project: any) => (
        <article
          key={project.slug}
          className="group bg-[#111111] border border-neutral-800/80 hover:border-accent/70 transition-colors overflow-hidden flex flex-col cursor-pointer"
          onClick={() => onSelect(project.slug)}
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

            <div className="mt-6 text-[11px] text-neutral-300 group-hover:text-accent inline-flex items-center gap-1">
              View project <span aria-hidden>→</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
