// components/BottomBar.tsx
import { LayoutGrid } from "@/components/LayoutGrid";

export function BottomBar() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 h-[10rem] border-t border-neutral-800 bg-[#0B0B0C]">
      {/* dot-grid background */}
      <div className="absolute inset-0 opacity-80 [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:18px_18px]" />

      <LayoutGrid mdCols={6} className="relative z-10 h-full items-start py-6 text-sm">
        {/* COLS 1–3 */}
        <div className="md:col-span-3">
          <div className="inline-flex items-center rounded-full border border-neutral-700 px-3 py-1 text-[11px] font-mono text-neutral-200">
            v1.0.0
          </div>

          <div className="mt-3 space-y-2 text-neutral-400">
            <div>Last updated 2025-12-04</div>
            <div>Built with Next.js.</div>
          </div>
        </div>

        {/* COL 4 */}
        <div className="mt-6 md:mt-0 md:col-start-4 md:col-span-1">
          <nav className="flex flex-col gap-2">
            <a className="w-fit text-neutral-300 hover:text-neutral-100 underline-offset-4 hover:underline" href="#">
              Audio
            </a>
            <a className="w-fit text-neutral-300 hover:text-neutral-100 underline-offset-4 hover:underline" href="#">
              LinkedIn
            </a>
            <a className="w-fit text-neutral-300 hover:text-neutral-100 underline-offset-4 hover:underline" href="#">
              GitHub
            </a>
            <a className="w-fit text-neutral-300 hover:text-neutral-100 underline-offset-4 hover:underline" href="#">
              X
            </a>
          </nav>
        </div>

        {/* COLS 5–6 */}
        <div className="mt-6 md:mt-0 md:col-start-5 md:col-span-2">
          <div className="font-mono text-[11px] leading-relaxed text-neutral-400">
            <div>$ run creativity --pair-mode</div>
            <div className="text-neutral-300">john@jtuttledigital.com</div>
          </div>
        </div>
      </LayoutGrid>
    </footer>
  );
}
