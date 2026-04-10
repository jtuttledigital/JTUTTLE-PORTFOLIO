// components/ProjectGrid.tsx
"use client";

import Image from "next/image";
import { projects } from "@/lib/projects";
import { LogoCube } from "@/components/LogoCube";

type ProjectGridProps = {
  onSelect: (slug: string) => void;
};

export function ProjectGrid({ onSelect }: ProjectGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project: any) => (
        <article
          key={project.slug}
          className="group rounded-xl border border-neutral-700/90 bg-panel/95 shadow-[0_8px_26px_rgba(0,0,0,0.28)] hover:border-neutral-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.32)] transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-[2px] overflow-hidden flex flex-col cursor-pointer"
          onClick={() => onSelect(project.slug)}
        >
          <div className="relative aspect-[16/10] bg-black overflow-hidden border-b border-neutral-800/90">
            {project.tileComponent === "LogoCube" ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <LogoCube
                  size={360}
                  fitPadding={0.92}
                  interactive={false}
                  className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.55)]"
                />
              </div>
            ) : project.tileVideoWebm || project.tileVideoMp4 ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-contain transition-transform duration-200 ease-out group-hover:scale-[1.01]"
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
                className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.01]"
                sizes="(min-width: 1024px) 33vw, 100vw"
                priority={project.slug === "brand-designer"}
              />
            )}

            <div className="pointer-events-none absolute inset-0 bg-black/8 transition-opacity duration-200 ease-out group-hover:opacity-70" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 bg-[rgba(173,255,47,0.05)]" />
          </div>

          {/* Text */}
          <div className="flex-1 px-6 py-6 flex flex-col justify-between gap-5">
            <div>
              <div className="mb-3 text-[11px] font-mono tracking-[0.23em] text-neutral-500 uppercase">
                {project.category}
              </div>
              <h3 className="text-[17px] leading-tight font-semibold text-neutral-100">
                {project.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-300 min-h-[2.7rem]">
                {project.subtitle}
              </p>
            </div>

            <div className="cta-tertiary mt-6 inline-flex items-center gap-2 text-[12px] font-mono tracking-[0.14em] uppercase">
              <span className="relative transition-colors duration-200 ease-out hover:text-[#CFFF66] after:absolute after:left-0 after:-bottom-[2px] after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#ADFF2F] after:transition-transform after:duration-200 after:ease-out group-hover:after:scale-x-100">
                View project
              </span>
              <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-[2px]">→</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
