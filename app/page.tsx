// app/page.tsx
"use client";

import { useMemo, useState } from "react";
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
                    <h2 className="text-[10px] font-mono tracking-[0.25em] meta-kicker">
                      ABOUT
                    </h2>

                    <p className="max-w-[66ch] text-[15px] leading-7 text-neutral-200">
                      I design tools, interfaces, and systems that connect{" "}
                      <span className="font-semibold text-neutral-50">strategy, interaction, and execution</span>.
                      My background spans agency work, large tech, and business ownership—from
                      high-pressure brand and campaign work to building and running a profitable
                      local company. Today, I focus on{" "}
                      <span className="font-semibold text-neutral-50">product design and AI-enabled systems</span>,
                      with an emphasis on clarity, craft, and shipping things that work in the
                      real world.
                    </p>
                  </div>
                </div>


                {/* TEAM + DESCRIPTION — paired rows, aligned to rails:
    mobile: 2 cols (TEAM | DESCRIPTION)
    md+:    3 cols (TEAM | DESCRIPTION spans 2)
*/}
                <div className="md:col-span-3 rounded-xl bg-panel/95 py-6 md:py-8">
                  <div className="mb-6 text-[10px] font-mono tracking-[0.25em] meta-kicker">
                    EXPERIENCE INDEX
                  </div>

                  <div className="grid gap-y-7">
                    <div className="grid gap-y-2">
                      <div className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">Independent</div>
                      <div className="text-[15px] leading-relaxed font-medium text-neutral-100">
                        Product Designer
                      </div>
                      <div className="text-[15px] leading-7 text-neutral-300">
                        Systems, interaction, and AI-enabled tools.
                      </div>
                    </div>

                    <div className="grid gap-y-2">
                      <div className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">Alto Moving</div>
                      <div className="text-[15px] leading-relaxed font-medium text-neutral-100">
                        Founder & Product Lead
                      </div>
                      <div className="text-[15px] leading-7 text-neutral-300">
                        Product direction, brand systems, and automation.
                      </div>
                    </div>

                    <div className="grid gap-y-2">
                      <div className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">Microsoft (Media Acquisitions Digital Studio)</div>
                      <div className="text-[15px] leading-relaxed font-medium text-neutral-100">
                        Digital Production Artist
                      </div>
                      <div className="text-[15px] leading-7 text-neutral-300">
                        Motion, interaction, and media systems.
                      </div>
                    </div>

                    <div className="grid gap-y-2">
                      <div className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">Agencies (Morse Best Innovations, Virgen)</div>
                      <div className="text-[15px] leading-relaxed font-medium text-neutral-100">
                        Designer
                      </div>
                      <div className="text-[15px] leading-7 text-neutral-300">
                        Prototypes, UX systems, and narrative-driven product work.
                      </div>
                    </div>
                  </div>
                </div>

              </LayoutGrid>

              {/* SELECTED WORK */}
              <LayoutGrid className="gap-y-8">
                <div className="md:col-span-3">
                  <div className="mb-6">
                    <div className="text-[10px] font-mono tracking-[0.25em] meta-kicker">
                      SELECTED WORK
                    </div>
                    <h2 className="mt-2.5 text-[1.48rem] leading-tight tracking-tight font-semibold text-neutral-100">
                      Projects and Product Systems
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
