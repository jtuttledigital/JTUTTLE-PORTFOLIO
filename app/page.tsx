// app/page.tsx
"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectExpanded } from "@/components/ProjectExpanded";
import { LayoutGrid } from "@/components/LayoutGrid";
import { projects } from "@/lib/projects";

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

      <main className="pt-5 relative z-10">
        <div className="bg-[#111111] pb-10">
        {activeProject ? (
          <ProjectExpanded
            project={activeProject}
            onClose={() => setActiveSlug(null)}
          />
        ) : (
          <>
            {/* ABOUT / TEAM / DESCRIPTION (6-col section grid) */}
            <LayoutGrid mdCols={6} className="mb-10 text-sm gap-y-10">
              {/* ABOUT — cols 1–3 */}
              <div className="md:col-span-3">
                <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
                  ABOUT
                </h2>
                    <p className="text-neutral-300 leading-relaxed">
                      I design tools, interfaces, and systems that connect{" "}
                      <span className="text-neutral-100">
                        strategy, interaction, and execution
                      </span>
                      . My background spans agency work, large tech, and business ownership—from
                      high-pressure brand and campaign work to building and running a profitable
                      local company. Today, I focus on{" "}
                      <span className="text-neutral-100">
                        product design and AI-enabled systems
                      </span>
                      , with an emphasis on clarity, craft, and shipping things that work in the
                      real world.
                    </p>
              </div>

              {/* TEAM — col 4 */}
              <div className="md:col-span-1">
                <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
                  TEAM
                </h2>

                <ul className="space-y-6 text-neutral-300">
                  <li>J. Tuttle Digital</li>
                  <li>Alto Moving</li>
                  <li>Microsoft (contract)</li>
                  <li>Agencies (Virgen, Morse Best, etc.)</li>
                </ul>
              </div>

              {/* DESCRIPTION — cols 5–6 */}
              <div className="md:col-span-2">
                <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
                  DESCRIPTION
                </h2>

                <ul className="space-y-6 text-neutral-300">
                  <li>Interaction / Product Designer, 2024 – Present</li>
                  <li>Founder / Product &amp; Operations, 2017 – Present</li>
                  <li>Digital Production Artist, Media &amp; Bing</li>
                  <li>Designer / Jr. Art Director</li>
                </ul>
              </div>
            </LayoutGrid>

            {/* Tiles (keep your 3-col tile grid behavior as-is) */}
            <LayoutGrid className="gap-y-6">
              <div className="md:col-span-3">
                <ProjectGrid onSelect={(slug) => setActiveSlug(slug)} />
              </div>
            </LayoutGrid>
          </>
        )}
        </div>
      </main>
    </>
  );
}
