// app/page.tsx
import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10 pb-16">
      <Header />

      {/* ABOUT / TEAM / FOCUS band */}
      <section className="grid md:grid-cols-[2fr,1.2fr,1.2fr] gap-10 mb-16 text-sm">
        <div>
          <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
            ABOUT
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            I&apos;ve moved between{" "}
            <span className="text-neutral-100">
              agencies, tech, and running my own business
            </span>{" "}
            —from Microsoft contracts and ad work to building Alto Moving into a
            profitable local brand. Now I&apos;m focused on{" "}
            <span className="text-neutral-100">
              AI-powered tools, creative systems, and product design
            </span>{" "}
            that help small teams punch above their weight.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
            TEAM
          </h2>
          <ul className="space-y-2 text-neutral-300">
            <li>
              <div>J. Tuttle Digital</div>
              <div className="text-neutral-500 text-[11px]">
                Creative Technologist / Product Designer, 2024 – Present
              </div>
            </li>
            <li>
              <div>Alto Moving</div>
              <div className="text-neutral-500 text-[11px]">
                Founder / Product & Operations, 2017 – Present
              </div>
            </li>
            <li>
              <div>Microsoft (contract)</div>
              <div className="text-neutral-500 text-[11px]">
                Digital Production Artist, Media & Bing
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

        <div>
          <h2 className="mb-3 text-[10px] font-mono tracking-[0.25em] text-neutral-500">
            FOCUS
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            AI-assisted brand systems, interface design for everyday tools,
            content pipelines, and the unglamorous parts of product work:
            hand-offs, naming, and turning messy real-world constraints into
            clear experiences.
          </p>
        </div>
      </section>

      <ProjectGrid />

      <footer className="mt-20 pb-4 text-[11px] text-neutral-500">
        Built with Next.js, Tailwind, and a lot of experiments in AI-powered
        tooling.
      </footer>
    </div>
  );
}
