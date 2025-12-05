// app/page.tsx
import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* main content — same 25px-ish side padding as header/footer */}
      <div className="px-6 md:px-10 pt-12 pb-20">
        {/* ABOUT / TEAM / DESCRIPTION */}
        <section
          className="
            grid gap-10 mb-20 text-sm
            md:grid-cols-[minmax(0,2.15fr)_minmax(0,1.2fr)_minmax(0,1fr)]
          "
        >
          {/* ABOUT */}
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

          {/* TEAM */}
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

          {/* DESCRIPTION */}
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
              without burning out. I like building the connective tissue
              between ideas, prototypes, and the unglamorous details that make
              products feel reliable.
            </p>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section>
          <h2 className="mb-4 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
            SELECTED WORK
          </h2>
          <ProjectGrid />
        </section>

        {/* Small note above footer */}
        <footer className="mt-16 text-[11px] text-neutral-500">
          Built with Next.js, Tailwind, and a lot of experiments in AI-powered
          tooling.
        </footer>
      </div>
    </>
  );
}
