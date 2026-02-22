// components/BottomBar.tsx
import { LayoutGrid } from "@/components/LayoutGrid";
import { AppLink } from "@/components/AppLink";
import Image from "next/image";

export function BottomBar() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 border-t border-neutral-800 bg-[#1c1c1c] footer-dot-grid">
      {/* dot-grid background */}
      <div className="absolute inset-0 opacity-80 [background-size:18px_18px]" />

      <LayoutGrid mdCols={6} className="relative z-10 h-full items-start py-6 text-sm">
        {/* COLS 1–3 */}
        <div className="md:col-span-3">
          <div className="inline-flex items-center">
  <Image
    src="/jtd_favicon.svg"
    alt="J. Tuttle Digital"
    width={28}
    height={28}
    className="opacity-90"
    priority
  />
</div>


          <div className="mt-3 space-y-2 text-neutral-400">
            <div>Last updated 2025-12-04</div>
            <div>Built with Next.js</div>
          </div>
        </div>

        {/* COL 4 */}
        <div className="mt-6 md:mt-0 md:col-start-4 md:col-span-1">
          <nav className="flex flex-col gap-2">
            <AppLink className="link w-fit" href="https://soundcloud.com/jtuttledigital">
              Audio
            </AppLink>

            <AppLink className="link w-fit" href="https://www.linkedin.com/in/jtuttledigital">
              LinkedIn
            </AppLink>

            <AppLink className="link w-fit" href="https://github.com/jtuttledigital">
              GitHub
            </AppLink>

            <AppLink className="link w-fit" href="https://x.com/jtuttledigital">
              X
            </AppLink>
          </nav>
        </div>

        {/* COLS 5–6 */}
        <div className="mt-6 md:mt-0 md:col-start-5 md:col-span-2">
  <div>
    <div className="font-mono text-[11px] leading-relaxed text-neutral-400 pl-[0.35rem]">
      $ run creativity --pair-mode
    </div>

    <div className="mt-1 font-sans text-neutral-100">
      <AppLink className="link" href="mailto:jtuttledigital@gmail.com">
        jtuttledigital@gmail.com
      </AppLink>
    </div>
  </div>
</div>

      </LayoutGrid>
    </footer>
  );
}
