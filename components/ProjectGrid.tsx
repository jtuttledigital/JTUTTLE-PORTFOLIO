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
          className="group bg-panel border border-neutral-800/80 hover:border-accent/70 transition-colors overflow-hidden flex flex-col cursor-pointer"
          onClick={() => onSelect(project.slug)}
        >
          <div className="relative aspect-[16/10] bg-black overflow-hidden">
  {project.tileVideoWebm || project.tileVideoMp4 ? (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-contain"
      poster={project.tileImage}
    >
      {project.tileVideoWebm ? (
        <source src={project.tileVideoWebm} type="video/webm" />
      ) : null}
      {project.tileVideoMp4 ? (
        <source src={project.tileVideoMp4} type="video/mp4" />
      ) : null}
    </video>
  ) : (
    <Image
      src={project.tileImage}
      alt={project.title}
      fill
      className="object-cover"
      sizes="(min-width: 1024px) 33vw, 100vw"
      priority={project.slug === "brand-designer"}
    />
  )}

  {/* hover veil stays */}
  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20" />
</div>

          {/* Text */}
          <div className="flex-1 px-6 py-6 flex flex-col justify-between">
            <div>
              <div className="mb-3 text-[10px] font-mono tracking-[0.25em] meta-kicker uppercase">
                {project.category}
              </div>
              <h3 className="text-[16px] leading-tight font-semibold text-neutral-100">
                {project.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-300">
                {project.subtitle}
              </p>
            </div>

            <div className="mt-7 text-[11px] tracking-[0.08em] uppercase text-neutral-400 group-hover:text-accent inline-flex items-center gap-1">
              View project <span aria-hidden>→</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
