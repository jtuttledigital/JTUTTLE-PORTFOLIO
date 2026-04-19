// app/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectExpanded } from "@/components/ProjectExpanded";
import { LayoutGrid } from "@/components/LayoutGrid";
import { projects } from "@/lib/projects";
import { RAIL_X_PADDING_CLASS } from "@/lib/layout";

export default function HomePage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activeProject = useMemo(() => {
    if (!activeSlug) return null;
    return projects.find((p: any) => p.slug === activeSlug) ?? null;
  }, [activeSlug]);

  const projectOpen = Boolean(activeProject);

  useEffect(() => {
    if (!activeSlug) return;

    // Ensure project-open always lands at the hero/top rail.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, [activeSlug]);

  return (
    <>
      <Header
        projectOpen={projectOpen}
        onCloseProject={() => setActiveSlug(null)}
      />

      <main className="relative z-20 w-full min-h-screen pt-20">
        {activeProject ? (
          <ProjectExpanded
            project={activeProject}
            onClose={() => setActiveSlug(null)}
          />
        ) : (
          <>
              {/* ABOUT / TEAM / DESCRIPTION (6-col section grid) */}
              <LayoutGrid mdCols={6} pxClassName={RAIL_X_PADDING_CLASS} className="mb-14 text-sm gap-y-12">
                {/* ABOUT — cols 1–3 */}
                <div className="md:col-span-3 rounded-xl bg-panel/95 py-6 md:py-8 md:pr-12">
                  <div className="grid gap-y-5">
                    <h2 className="text-[11px] font-mono tracking-[0.25em] meta-kicker">
                      ABOUT
                    </h2>

                    <div className="max-w-[66ch] space-y-5 text-[15px] leading-7 text-neutral-200">
                      <p>
                        I design tools, interfaces, and systems that make{" "}
                        <span className="font-semibold text-neutral-50">complex technology usable</span>.
                        My work spans product design, visual systems, and prototyping, with a focus
                        on building{" "}
                        <span className="font-semibold text-neutral-50">real, functional experiences</span>{" "}
                        - from AI-assisted workflows to operational tools and interactive media.
                      </p>
                      <p>
                        My background includes agency work, Microsoft media systems, and building and
                        running my own company, where I designed{" "}
                        <span className="font-semibold text-neutral-50">products end-to-end</span> - from
                        brand and UI to the workflows behind them. Today, I focus on
                        design-technologist work at the intersection of design, engineering, and AI,
                        shaping tools and interfaces that{" "}
                        <span className="font-semibold text-neutral-50">cut through complexity</span>{" "}
                        and turn powerful systems into clear, usable experiences.
                      </p>
                    </div>
                  </div>
                </div>


                {/* TEAM + DESCRIPTION — paired rows, aligned to rails:
    mobile: 2 cols (TEAM | DESCRIPTION)
    md+:    3 cols (TEAM | DESCRIPTION spans 2)
*/}
                <div className="md:col-span-3 rounded-xl bg-panel/95 py-6 md:py-8">
                  <div className="mb-6 text-[11px] font-mono tracking-[0.25em] meta-kicker">
                    EXPERIENCE INDEX
                  </div>

                  <div className="grid gap-y-7">
                    <div className="grid gap-y-1.5">
                      <div className="grid gap-y-1 md:flex md:items-baseline md:gap-2.5">
                        <div className="text-[16px] leading-tight font-medium text-neutral-100">Independent</div>
                        <span aria-hidden className="hidden md:inline text-neutral-600">|</span>
                        <div className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                          Product Designer
                        </div>
                      </div>
                      <div className="text-[15px] leading-6 text-neutral-300">
                        Systems, interaction, and AI-enabled tools.
                      </div>
                    </div>

                    <div className="grid gap-y-1.5">
                      <div className="grid gap-y-1 md:flex md:items-baseline md:gap-2.5">
                        <div className="text-[16px] leading-tight font-medium text-neutral-100">Alto Moving</div>
                        <span aria-hidden className="hidden md:inline text-neutral-600">|</span>
                        <div className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                          Founder & Product Lead
                        </div>
                      </div>
                      <div className="text-[15px] leading-6 text-neutral-300">
                        Product direction, brand systems, and automation.
                      </div>
                    </div>

                    <div className="grid gap-y-1.5">
                      <div className="grid gap-y-1 md:flex md:items-baseline md:gap-2.5">
                        <div className="text-[16px] leading-tight font-medium text-neutral-100">Microsoft (Media Acquisitions Digital Studio)</div>
                        <span aria-hidden className="hidden md:inline text-neutral-600">|</span>
                        <div className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                          Digital Production Artist
                        </div>
                      </div>
                      <div className="text-[15px] leading-6 text-neutral-300">
                        Motion, interaction, and media systems.
                      </div>
                    </div>

                    <div className="grid gap-y-1.5">
                      <div className="grid gap-y-1 md:flex md:items-baseline md:gap-2.5">
                        <div className="text-[16px] leading-tight font-medium text-neutral-100">Agencies (Morse Best Innovations, Virgen)</div>
                        <span aria-hidden className="hidden md:inline text-neutral-600">|</span>
                        <div className="text-[11px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                          Designer
                        </div>
                      </div>
                      <div className="text-[15px] leading-6 text-neutral-300">
                        Prototypes, UX systems, and narrative-driven product work.
                      </div>
                    </div>
                  </div>
                </div>

              </LayoutGrid>

              {/* SELECTED WORK */}
              <LayoutGrid pxClassName={RAIL_X_PADDING_CLASS} className="gap-y-[15px]">
                <div className="md:col-span-3">
                  <div>
                    <div className="text-[11px] font-mono tracking-[0.25em] meta-kicker">
                      SELECTED WORK
                    </div>
                    <h2 className="mt-2.5 text-[1.6rem] leading-tight tracking-tight font-semibold text-neutral-100">
                      Selected Work — Systems, Tools, and Interfaces
                    </h2>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <ProjectGrid onSelect={(slug) => setActiveSlug(slug)} />
                </div>
              </LayoutGrid>
          </>
        )}
      </main>
    </>
  );
}
