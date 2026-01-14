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
              <div className="md:col-span-3 md:pr-35">
  <div className="grid gap-y-4">
    <h2 className="text-[10px] font-mono tracking-[0.25em] text-neutral-500">
      ABOUT
    </h2>

    <p className="text-neutral-300 leading-relaxed">
      I design tools, interfaces, and systems that connect{" "}
      <span className="text-neutral-100">strategy, interaction, and execution</span>.
      My background spans agency work, large tech, and business ownership—from
      high-pressure brand and campaign work to building and running a profitable
      local company. Today, I focus on{" "}
      <span className="text-neutral-100">product design and AI-enabled systems</span>,
      with an emphasis on clarity, craft, and shipping things that work in the
      real world.
    </p>
  </div>
</div>


              {/* TEAM + DESCRIPTION — paired rows, aligned to rails:
    mobile: 2 cols (TEAM | DESCRIPTION)
    md+:    3 cols (TEAM | DESCRIPTION spans 2)
*/}
<div className="md:col-span-3">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
    {/* Headings */}
    <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500">
      TEAM
    </div>
    <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 md:col-span-2">
      DESCRIPTION
    </div>

    {/* Row 1 */}
    <div className="text-neutral-300">Independent</div>
    <div className="text-neutral-300 md:col-span-2">
      Product Designer — systems, interaction, AI-enabled tools
    </div>

    {/* Row 2 */}
    <div className="text-neutral-300">Alto Moving</div>
    <div className="text-neutral-300 md:col-span-2">
      Founder & Product Lead — product, brand, automation
    </div>

    {/* Row 3 */}
    <div className="text-neutral-300">Microsoft (Media Acquisitions Digital Studio)</div>
    <div className="text-neutral-300 md:col-span-2">
      Digital Production Artist — motion, interaction, media systems
    </div>

    {/* Row 4 */}
    <div className="text-neutral-300">Agencies (Morse Best Innovations, Virgen)</div>
    <div className="text-neutral-300 md:col-span-2">
      Designer — prototypes, UX, storytelling
    </div>
  </div>
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
