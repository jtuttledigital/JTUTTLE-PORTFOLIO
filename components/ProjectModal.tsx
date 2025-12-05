// components/ProjectModal.tsx
"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Project } from "@/lib/projects";
import { HoverLink } from "./HoverLink";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
      {/* click outside to close */}
      <button
        aria-label="Close project"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <div className="relative z-10 mx-auto mt-6 mb-8 max-w-6xl bg-ink border border-neutral-800 shadow-soft">
        {/* top bar */}
        <div className="flex items-center justify-between px-6 md:px-8 py-4 text-[11px] text-neutral-400 border-b border-neutral-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-neutral-200">{project.title}</span>
            <span className="text-neutral-600">/</span>
            <span>{project.role}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{project.yearRange}</span>
            <button
              onClick={onClose}
              className="text-neutral-500 hover:text-accent text-xs"
            >
              ✕
            </button>
          </div>
        </div>

        {/* content */}
        <div className="max-h-[80vh] overflow-y-auto">
          <div className="border-b border-neutral-800">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-[1.5fr,1.5fr,1fr] gap-8 px-6 md:px-8 py-8 text-sm">
            <div className="space-y-3">
              <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500">
                {project.category}
              </div>
              <h1 className="text-lg font-medium text-neutral-100">
                {project.title}
              </h1>
              <p className="text-neutral-300 leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="space-y-3 text-neutral-300 leading-relaxed">
              <p>{project.columnA}</p>
              <p>{project.columnB}</p>
            </div>

            <div className="space-y-4 text-xs text-neutral-400">
              <div>
                <div className="uppercase tracking-[0.2em] text-neutral-500 mb-1">
                  ROLE
                </div>
                <div>{project.roleDetails}</div>
              </div>
              <div>
                <div className="uppercase tracking-[0.2em] text-neutral-500 mb-1">
                  DURATION
                </div>
                <div>{project.yearRange}</div>
              </div>
              <div>
                <div className="uppercase tracking-[0.2em] text-neutral-500 mb-1">
                  STACK / TOOLS
                </div>
                <div>{project.stack}</div>
              </div>
              {project.links.length > 0 && (
                <div>
                  <div className="uppercase tracking-[0.2em] text-neutral-500 mb-1">
                    LINKS
                  </div>
                  <div className="space-y-1">
                    {project.links.map((link) => (
                      <HoverLink key={link.href} href={link.href}>
                        {link.label}
                      </HoverLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
