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

      {/* Content background + top padding; bottom space handled by spacer */}
      <main className="pt-5 bg-[#0D0D0E]">
        {/* If a project is open, render the expanded view (in-flow, below header) */}
        {activeProject ? (
          <ProjectExpanded
            project={activeProject}
            onClose={() => setActiveSlug(null)}
          />
        ) : (
          <>
            {/* ABOUT / TEAM / DESCRIPTION on the shared 3-column grid */}
            <LayoutGrid className="mb-10 text-sm gap-y-10">
              {/* ABOUT — column 1 */}
              <div>
                <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
                  ABOUT
                </h2>
                <p className="text-neutral-300 leading-relaxed">
                  I design tools, interfaces, and systems that sit at the
                  intersection of{" "}
                  <span className="text-neutral-100">
                    product design, interaction, and AI
                  </span>
                  . I&apos;ve moved between agencies, tech, and running my own
                  business—from Microsoft contracts and ad work to building Alto
                  Moving into a profitable local brand. I like work that connects
                  strategy, craft, and shipping real things.
                </p>
              </div>

              {/* TEAM — column 2 */}
              <div>
                <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
                  TEAM
                </h2>
                <ul className="space-y-2 text-neutral-300">
                  <li>
                    <div>J. Tuttle Digital</div>
                    <div className="text-neutral-500 text-[11px]">
                      Interaction / Product Designer, 2024 – Present
                    </div>
                  </li>
                  <li>
                    <div>Alto Moving</div>
                    <div className="text-neutral-500 text-[11px]">
                      Founder / Product &amp; Operations, 2017 – Present
                    </div>
                  </li>
                  <li>
                    <div>Microsoft (contract)</div>
                    <div className="text-neutral-500 text-[11px]">
                      Digital Production Artist, Media &amp; Bing
                    </div>
                  </li>
                  <li>
                    <div>Agencies (Virgen, Morse Best, etc.)</div>
                    <div className="text-neutral-500 text-[11px]">
                      Designer / Jr. Art Director
                    </div>
                  </li>
                </ul>
              </div>

              {/* DESCRIPTION — column 3 */}
              <div>
                <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
                  DESCRIPTION
                </h2>
                <p className="text-neutral-300 leading-relaxed">
                  I&apos;m currently focused on{" "}
                  <span className="text-neutral-100">
                    AI-assisted brand systems, product surfaces for everyday
                    tools,
                  </span>{" "}
                  and content workflows that help small teams show up consistently
                  without burning out. I like building the connective tissue
                  between ideas, prototypes, and the unglamorous details that
                  make products feel reliable.
                </p>
              </div>
            </LayoutGrid>

            {/* Tiles */}
            <LayoutGrid className="gap-y-6">
              <div className="md:col-span-3">
                <ProjectGrid onSelect={(slug) => setActiveSlug(slug)} />
              </div>
            </LayoutGrid>
          </>
        )}

        {/* Spacer so the fixed BottomBar can be revealed + stay clickable */}
        <div className="h-[140px] pointer-events-none" />
      </main>
    </>
  );
}
