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

function MediaCard({ media }: { media: ProjectMedia }) {
  return (
    <figure
      className={[
        "overflow-hidden rounded-xl border border-neutral-800/90 bg-panel",
        media.span === "full" ? "md:col-span-2" : "md:col-span-1",
      ].join(" ")}
    >
      {/* Always let the image define height (no aspect-box, no crop) */}
      <div className="bg-black">
        <Image
          src={media.src}
          alt={media.alt}
          width={1600}
          height={1000}
          className="w-full h-auto object-contain"
          sizes={
            media.span === "full"
              ? "(min-width: 1024px) 66vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
        />
      </div>

      {media.caption ? (
        <figcaption className="border-t border-neutral-800/90 px-4 py-3 text-[11px] leading-relaxed font-mono text-neutral-400">
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
          <div className="text-[10px] font-mono tracking-[0.25em] meta-kicker">
            {f.label}
          </div>
          <div className="mt-1.5 text-[13px] leading-relaxed text-neutral-100">{f.value}</div>
        </div>
      ))}
    </div>
  );
}

function heroWidthClass(_maxWidth: Project["heroMaxWidth"]) {
  // Phase: full-canvas detail surface. Keep wrappers unconstrained.
  return "max-w-none";
}

export function ProjectExpanded({
  project,
  onClose,
  onBack,
}: ProjectExpandedProps) {
  const handleClose = onClose ?? onBack ?? (() => {});

  // Back-compat: if a project still uses supportingImages, treat them as half-width media.
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

  const heroClass = heroWidthClass(project.heroMaxWidth);

  return (
    <main className="w-full">
      {/* Hero: prefers video, falls back to image */}
      {project.heroVideoWebm || project.heroVideoMp4 ? (
        <LayoutGrid mdCols={12} className="pt-5">
          <div className="md:col-span-12">
            <div className={["w-full", heroClass].join(" ")}>
              <div className="relative w-full bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="block w-full h-auto"
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
          </div>
        </LayoutGrid>
      ) : project.heroImage ? (
        <LayoutGrid mdCols={12} className="pt-5">
          <div className="md:col-span-12">
            <div className={["w-full", heroClass].join(" ")}>
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
          </div>
        </LayoutGrid>
      ) : null}

      {/* Shared 3-column grid */}
      <LayoutGrid mdCols={12} className="gap-y-12 py-12 text-sm">
        {/* Left rail (col 1) */}
        <aside className="md:col-span-3 md:sticky md:top-[88px] self-start">
          <div className="mb-2 text-[10px] font-mono tracking-[0.25em] meta-kicker">
            {project.category}
          </div>
          <h1 className="text-3xl md:text-[2.15rem] leading-tight font-semibold tracking-tight text-neutral-100">
            {project.title}
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-neutral-300">{project.subtitle}</p>

          {/* Primary CTAs (left rail) */}
          {project.links ? (
            <div className="mt-6 flex flex-col gap-3">
              {project.links.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="cta cta-primary w-full"
                >
                  <span>
                    Live demo
                  </span>
                  <span
                    aria-hidden
                    className="text-neutral-900/80"
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
                  className="cta cta-secondary w-full"
                >
                  <span>
                    GitHub repo
                  </span>
                  <span
                    aria-hidden
                    className="text-neutral-500 group-hover:text-accent transition-colors"
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
                  className="cta cta-secondary w-full"
                >
                  <span>
                    Case study
                  </span>
                  <span
                    aria-hidden
                    className="text-neutral-500 group-hover:text-accent transition-colors"
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
            className="mt-9 text-[13px] tracking-[0.06em] uppercase text-neutral-400 hover:text-accent transition-colors"
          >
            ← Back to projects
          </button>
        </aside>

        {/* Right stream (cols 2 + 3) */}
        <section className="md:col-span-9 min-w-0">
          {/* DESCRIPTION */}
          <div className="mb-10">
            <div className="text-[10px] font-mono tracking-[0.25em] meta-kicker">
              DESCRIPTION
            </div>
            <p className="mt-5 text-[15px] leading-7 text-neutral-200 max-w-[70ch]">
              {project.description}
            </p>
          </div>

          {/* Facts grid */}
          {project.facts && project.facts.length > 0 ? (
            <div className="mt-8">
              <FactsGrid facts={project.facts} />
            </div>
          ) : null}

          {/* Media stack */}
          {mediaStack.length > 0 ? (
            <div className="mt-8 grid gap-7 md:grid-cols-2">
              {mediaStack.map((m) => (
                <MediaCard key={`${m.src}-${m.alt}`} media={m} />
              ))}
            </div>
          ) : null}

          {/* Conclusion / sources block */}
          {project.conclusion ? (
            <div className="mt-10 border-t border-neutral-800 pt-6">
              <div className="mt-5 space-y-5 text-[15px] leading-7 text-neutral-300">
                {project.conclusion.split("\n").map((line, idx) => {
                  const t = line.trim();
                  if (!t) return null;

                  if (t === "—" || t === "---") {
                    return <hr key={idx} className="border-neutral-800" />;
                  }

                  const isHeading = /^[A-Z0-9 /&-]{3,}$/.test(t) && t.length <= 32;
                  if (isHeading) {
                    return (
                      <h4
                        key={idx}
                        className="text-[10px] font-mono tracking-[0.25em] meta-kicker"
                      >
                        {t}
                      </h4>
                    );
                  }

                  if (t.startsWith("•")) {
                    return (
                      <ul key={idx} className="list-disc pl-5">
                        <li className="text-neutral-300">{t.slice(1).trim()}</li>
                      </ul>
                    );
                  }

                  return (
                    <p key={idx} className="text-neutral-300">
                      {t}
                    </p>
                  );
                })}
              </div>
            </div>
          ) : null}
        </section>
      </LayoutGrid>
    </main>
  );
}
