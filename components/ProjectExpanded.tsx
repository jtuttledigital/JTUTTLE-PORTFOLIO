// components/ProjectExpanded.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectMedia, ProjectFact } from "@/lib/projects";
import { LayoutGrid } from "./LayoutGrid";

type ProjectExpandedProps = {
  project: Project;
  onClose?: () => void;
  onBack?: () => void; // optional legacy support
};

function AspectClass(media: Pick<ProjectMedia, "span" | "aspect">) {
  // Width is controlled by the grid. Aspect controls height only.
  if (media.span === "full") return "aspect-[16/9]";
  if (media.aspect === "portrait") return "aspect-[4/5]";
  return "aspect-[16/10]";
}

function MediaCard({ media }: { media: ProjectMedia }) {
  return (
    <figure
      className={[
        "overflow-hidden border border-neutral-800 bg-black",
        media.span === "full" ? "md:col-span-2" : "md:col-span-1",
      ].join(" ")}
    >
      <div className={["relative", AspectClass(media)].join(" ")}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          className="object-cover"
          sizes={
            media.span === "full"
              ? "(min-width: 1024px) 66vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
        />
        {/* Dev-friendly label overlay (keeps layout legible while images are placeholders). */}
        <div className="pointer-events-none absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-[11px] font-mono text-neutral-200">
          {media.caption ?? media.alt}
        </div>
      </div>

      {media.caption ? (
        <figcaption className="px-4 py-3 text-[11px] font-mono text-neutral-400">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function FactsGrid({ facts }: { facts: ProjectFact[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {facts.map((f) => (
        <div key={f.label} className="min-w-0">
          <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500">
            {f.label}
          </div>
          <div className="mt-1 text-[13px] text-neutral-200">{f.value}</div>
        </div>
      ))}
    </div>
  );
}

export function ProjectExpanded({ project, onClose, onBack }: ProjectExpandedProps) {
  const handleClose = onClose ?? onBack ?? (() => {});

  // Back-compat: if a project still uses supportingImages, treat them as half-width landscape media.

  const fallbackMedia: ProjectMedia[] = (project.supportingImages ?? []).map(
    (src, idx) => ({
      src,
      alt: `${project.title} image ${idx + 1}`,
      span: "half",
      aspect: "landscape",
    })
  );

  const mediaStack =
    project.supportingMedia && project.supportingMedia.length > 0
      ? project.supportingMedia
      : fallbackMedia;

  return (
    <main className="bg-[#111111]">
      {/* Hero: prefers video, falls back to image */}
{(project.heroVideoWebm || project.heroVideoMp4) ? (
  <LayoutGrid className="pt-5">
    <div className="md:col-span-3">
      <div className="relative w-full bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-auto"
          poster={project.heroImage}
        >
          {project.heroVideoWebm ? (
            <source src={project.heroVideoWebm} type="video/webm" />
          ) : null}
          {project.heroVideoMp4 ? (
            <source src={project.heroVideoMp4} type="video/mp4" />
          ) : null}
        </video>
      </div>
    </div>
  </LayoutGrid>
) : project.heroImage ? (
  <LayoutGrid className="pt-5">
    <div className="md:col-span-3">
      <div className="relative w-full bg-black">
        <Image
          src={project.heroImage}
          alt={project.title}
          width={3000}
          height={1688}
          priority
          className="w-full h-auto"
          sizes="100vw"
        />
      </div>
    </div>
  </LayoutGrid>
) : null}

      {/* Shared 3-column grid */}
      <LayoutGrid className="gap-y-10 py-10 text-sm">
        {/* Left rail (col 1) */}
        <aside className="md:sticky md:top-[88px] self-start">
          <div className="mb-2 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
            {project.category}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">
            {project.title}
          </h1>
          <p className="mt-2 text-neutral-400">{project.subtitle}</p>

          {/* Primary CTAs (left rail) */}
{project.links ? (
  <div className="mt-6 flex flex-col gap-3">
    {project.links.demo && (
      <Link
        href={project.links.demo}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-[#1c1c1c] px-5 py-4 text-neutral-200 hover:border-accent/70 transition-colors"
      >
        <span className="font-mono text-[12px] tracking-[0.12em] uppercase">
          Live demo
        </span>
        <span
          aria-hidden
          className="text-neutral-400 group-hover:text-accent transition-colors"
        >
          →
        </span>
      </Link>
    )}

    {project.links.repo && (
      <Link
        href={project.links.repo}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-[#1c1c1c] px-5 py-4 text-neutral-200 hover:border-accent/70 transition-colors"
      >
        <span className="font-mono text-[12px] tracking-[0.12em] uppercase">
          GitHub repo
        </span>
        <span
          aria-hidden
          className="text-neutral-400 group-hover:text-accent transition-colors"
        >
          →
        </span>
      </Link>
    )}

    {project.links.caseStudy && (
      <Link
        href={project.links.caseStudy}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-between rounded-xl border border-neutral-800 bg-[#1c1c1c] px-5 py-4 text-neutral-200 hover:border-accent/70 transition-colors"
      >
        <span className="font-mono text-[12px] tracking-[0.12em] uppercase">
          Case study
        </span>
        <span
          aria-hidden
          className="text-neutral-400 group-hover:text-accent transition-colors"
        >
          →
        </span>
      </Link>
    )}
  </div>
) : null}

          <button
            type="button"
            onClick={handleClose}
            className="mt-8 text-[13px] text-neutral-400 hover:text-accent transition-colors"
          >
            ← Back to projects
          </button>
        </aside>

        {/* Right stream (cols 2 + 3) */}
        <section className="md:col-span-2 min-w-0">
          {/* 1) Full-width intro copy */}
          <p className="text-neutral-200 leading-relaxed">{project.description}</p>

          {/* 2) 4-up facts grid (Role/Team/Duration/Tools) */}
          {project.facts && project.facts.length > 0 ? (
            <div className="mt-8">
              <FactsGrid facts={project.facts} />
            </div>
          ) : null}

          {/* 3/4) Media stack: full-width + portrait + 2-up, etc. */}
          {mediaStack.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {mediaStack.map((m) => (
                <MediaCard key={`${m.src}-${m.alt}`} media={m} />
              ))}
            </div>
          ) : null}

          {/* 6) Conclusion / sources block */}
          {project.conclusion ? (
            <div className="mt-10 border-t border-neutral-800 pt-6">
              <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500">
                NOTES
              </div>
              <p className="mt-3 text-neutral-300 leading-relaxed">
                {project.conclusion}
              </p>
            </div>
          ) : null}
        </section>
      </LayoutGrid>
    </main>
  );
}
