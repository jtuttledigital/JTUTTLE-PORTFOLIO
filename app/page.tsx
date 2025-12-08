// app/page.tsx
import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";
import { LayoutGrid } from "@/components/LayoutGrid";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="pt-12 pb-20">
        {/* ABOUT / TEAM / DESCRIPTION on the shared 3-column grid */}
        <LayoutGrid className="mb-20 text-sm gap-y-10">
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

          {/* DESCRIPTION — column 3 (aligned with 3rd tile + footer col 3) */}
          <div>
            <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
              DESCRIPTION
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              I&apos;m currently focused on{" "}
              <span className="text-neutral-100">
                AI-assisted brand systems, product surfaces for everyday tools,
              </span>{" "}
              and content workflows that help small teams show up consistently
              without burning out. I like building the connective tissue between
              ideas, prototypes, and the unglamorous details that make products
              feel reliable.
            </p>
          </div>
        </LayoutGrid>

        {/* SELECTED WORK + tiles, still on the same overall grid */}
        <LayoutGrid className="gap-y-6">
          {/* Section label spans all three columns */}
          <div className="md:col-span-3">
            <h2 className="mb-2 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
              SELECTED WORK
            </h2>
          </div>

          {/* Tiles span all three columns, but manage their own internal 3-col grid */}
          <div className="md:col-span-3">
            <ProjectGrid />
          </div>
        </LayoutGrid>

        {/* Small note above footer, centered with same width as everything else */}
        <LayoutGrid className="mt-16">
          <div className="md:col-span-3 text-[11px] text-neutral-500">
            Built with Next.js, Tailwind, and a lot of experiments in AI-powered
            tooling.
          </div>
        </LayoutGrid>
      </main>
    </>
  );
}
