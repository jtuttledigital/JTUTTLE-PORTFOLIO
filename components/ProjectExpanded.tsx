// components/ProjectExpanded.tsx
"use client";

import Image from "next/image";
import { LayoutGrid } from "./LayoutGrid";

type ProjectExpandedProps = {
  project: any | null;
  onClose: () => void;
};

function firstLink(project: any, keys: string[]) {
  for (const k of keys) {
    const v = project?.[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return null;
}

export function ProjectExpanded({ project, onClose }: ProjectExpandedProps) {
  if (!project) return null;

  const heroSrc =
    project.heroImage ??
    project.hero ??
    project.coverImage ??
    project.tileImage ??
    null;

  const demoUrl =
    project.links?.demo ??
    project.links?.live ??
    project.links?.website ??
    firstLink(project, ["demoUrl", "liveUrl", "websiteUrl"]);

  const repoUrl =
    project.links?.repo ??
    project.links?.github ??
    firstLink(project, ["repoUrl", "githubUrl"]);

  const caseStudyUrl =
    project.links?.caseStudy ?? firstLink(project, ["caseStudyUrl"]);

  return (
    <section className="bg-[#0D0D0E]">
      {/* HERO (full-bleed, scrolls normally) */}
      {heroSrc ? (
        <div className="w-full border-b border-neutral-800">
          <div className="relative w-full h-[min(60vh,560px)] bg-black">
            <Image
              src={heroSrc}
              alt={project.title ?? "Project"}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}

      {/* CONTENT (3-col grid; left sticky, right scrolls) */}
      <div className="py-10">
        <LayoutGrid className="gap-y-10">
          {/* LEFT RAIL (sticky) */}
          <aside className="md:col-span-1">
            <div className="sticky top-[96px] self-start">
              <div className="space-y-5">
                {/* Category */}
                {project.category ? (
                  <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                    {project.category}
                  </div>
                ) : null}

                {/* Title */}
                <h1 className="text-xl md:text-2xl font-semibold text-neutral-100 leading-tight">
                  {project.title ?? "Project"}
                </h1>

                {/* Subtitle / short blurb */}
                {project.subtitle ? (
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {project.subtitle}
                  </p>
                ) : null}

                {/* Meta rows (optional) */}
                <div className="grid gap-3 text-sm">
                  {project.role ? (
                    <div>
                      <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                        Role
                      </div>
                      <div className="text-neutral-200">{project.role}</div>
                    </div>
                  ) : null}

                  {project.tools ? (
                    <div>
                      <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                        Tools
                      </div>
                      <div className="text-neutral-200">{project.tools}</div>
                    </div>
                  ) : null}

                  {project.year ? (
                    <div>
                      <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase">
                        Year
                      </div>
                      <div className="text-neutral-200">{project.year}</div>
                    </div>
                  ) : null}
                </div>

                {/* Actions */}
                <div className="grid gap-3">
                  {demoUrl ? (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-md border border-neutral-800 bg-[#111111] px-4 py-3 text-sm text-neutral-200 hover:border-accent/70 hover:text-accent transition-colors"
                    >
                      <span>Live demo</span>
                      <span aria-hidden>→</span>
                    </a>
                  ) : null}

                  {repoUrl ? (
                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-md border border-neutral-800 bg-[#111111] px-4 py-3 text-sm text-neutral-200 hover:border-accent/70 hover:text-accent transition-colors"
                    >
                      <span>GitHub repo</span>
                      <span aria-hidden>→</span>
                    </a>
                  ) : null}

                  {caseStudyUrl ? (
                    <a
                      href={caseStudyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-between rounded-md border border-neutral-800 bg-[#111111] px-4 py-3 text-sm text-neutral-200 hover:border-accent/70 hover:text-accent transition-colors"
                    >
                      <span>Case study</span>
                      <span aria-hidden>→</span>
                    </a>
                  ) : null}

                  {/* Optional "Back" link (secondary; header X is primary) */}
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-left text-sm text-neutral-400 hover:text-accent transition-colors"
                  >
                    ← Back to projects
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT STREAM (spans cols 2–3) */}
          <div className="md:col-span-2">
            <div className="space-y-12">
              {/* Long description (optional) */}
              {project.description ? (
                <section className="prose prose-invert max-w-none prose-p:text-neutral-300">
                  <p>{project.description}</p>
                </section>
              ) : null}

              {/* Example nested grid for supporting media (optional) */}
              {Array.isArray(project.supportingImages) &&
              project.supportingImages.length ? (
                <section className="grid gap-6 md:grid-cols-2">
                  {project.supportingImages.map((src: string, i: number) => (
                    <div
                      key={`${src}-${i}`}
                      className="relative w-full h-[320px] bg-black border border-neutral-800 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={src}
                        alt={`${project.title ?? "Project"} image ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                  ))}
                </section>
              ) : null}

              {/* Placeholder section if no content is wired yet */}
              {!project.description &&
              (!Array.isArray(project.supportingImages) ||
                !project.supportingImages.length) ? (
                <section className="border border-neutral-800 bg-[#111111] rounded-lg p-6">
                  <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 uppercase mb-3">
                    Project details
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Wire details into <code className="text-neutral-200">lib/projects</code>{" "}
                    (description, supportingImages, links) and this panel will
                    render them. The layout is locked: left rail stays sticky,
                    right stream scrolls and can contain nested grids.
                  </p>
                </section>
              ) : null}
            </div>
          </div>
        </LayoutGrid>
      </div>
    </section>
  );
}
