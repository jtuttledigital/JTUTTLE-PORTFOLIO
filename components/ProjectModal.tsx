// components/ProjectModal.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { HoverLink } from "./HoverLink";

interface ProjectModalProps {
  project: any | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll while modal is open
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  // ESC to close
  useEffect(() => {
    if (!project) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, onClose]);

  if (!project) return null;

  const hasLinks =
    Array.isArray(project.links) && project.links.length > 0;

  const longCopy =
    project.longDescription ||
    project.description ||
    project.subtitle ||
    "";

  return (
    <>
      {/* Fixed close button above everything, doesn’t scroll */}
      <button
  type="button"
  onClick={onClose}
  aria-label="Close project"
  className="
    fixed
    top-6
    right-6
    z-50
    inline-flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    border
    border-neutral-700
    bg-black/80
    text-neutral-200
    hover:border-accent
    hover:text-accent
    transition-colors
  "
>
  <Image src="/x.svg" alt="" width={16} height={16} />
</button>
      {/* Dim background under header/footer (header is z-50 so it stays visible) */}
      <div
        className="fixed inset-0 z-20 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Scrollable project content, beneath header (z-40) */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <div className="h-full overflow-y-auto pointer-events-auto">
          {/* 15px viewport padding, start below header-ish */}
          <div className="min-h-full flex flex-col px-[15px] pt-24 pb-40">
            {/* (removed the old close button row here) */}

            {/* Hero / main image */}
            <div className="relative w-full aspect-[16/9] bg-black mb-10">
              <Image
                src={project.heroImage ?? project.tileImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>

            {/* Layout grid inside the modal */}
            <div className="grid gap-10 text-sm md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)_minmax(0,1fr)]">
              {/* Left: narrative */}
              <div>
                <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                  {project.title}
                </h2>
                <p className="text-neutral-200 leading-relaxed">
                  {longCopy}
                </p>
              </div>

              {/* Middle: meta */}
              <div className="space-y-4 text-neutral-300">
                {project.client && (
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                      Client
                    </div>
                    <div>{project.client}</div>
                  </div>
                )}

                {project.role && (
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                      Role
                    </div>
                    <div>{project.role}</div>
                  </div>
                )}

                {project.duration && (
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                      Duration
                    </div>
                    <div>{project.duration}</div>
                  </div>
                )}
              </div>

              {/* Right: tools + links */}
              <div className="space-y-4 text-neutral-300">
                {project.stack && (
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                      Tools
                    </div>
                    <div>{project.stack}</div>
                  </div>
                )}

                {hasLinks && (
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase mb-1">
                      Links
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link: any) => (
                        <HoverLink
                          key={link.href}
                          href={link.href}
                          label={link.label}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Optional gallery images */}
            {Array.isArray(project.gallery) && project.gallery.length > 0 && (
              <div className="mt-12 space-y-6">
                {project.gallery.map((image: any) => (
                  <div
                    key={image.src}
                    className="relative w-full overflow-hidden rounded-xl border border-neutral-800/80 bg-black"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt ?? project.title}
                      width={1920}
                      height={1080}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
