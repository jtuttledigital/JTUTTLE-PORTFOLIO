// components/BottomBar.tsx
import { LayoutGrid } from "@/components/LayoutGrid";
import { AppLink } from "@/components/AppLink";
import { RAIL_X_PADDING_CLASS } from "@/lib/layout";
import Image from "next/image";

export function BottomBar() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 border-t border-neutral-800/90 bg-[#131313]/95 footer-dot-grid">
      <LayoutGrid mdCols={6} pxClassName={RAIL_X_PADDING_CLASS} className="relative z-10 h-full items-start pt-8 pb-6 md:py-6 text-sm">
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
            <div className="text-[12px] tracking-[0.12em] text-neutral-500">Last updated 2026-04-18</div>
            <div>Designed for clarity. Built to ship.</div>
          </div>
        </div>

        {/* COL 4 */}
        <div className="mt-6 md:mt-0 md:col-start-4 md:col-span-1">
          <div className="mb-3 text-[11px] font-mono tracking-[0.2em] text-neutral-500 uppercase">Links</div>
          <nav className="-ml-[0.35rem] flex flex-col gap-2.5">
            <AppLink className="link w-fit text-neutral-300" href="https://soundcloud.com/jtuttledigital">
              Audio
            </AppLink>

            <AppLink className="link w-fit text-neutral-300" href="https://www.linkedin.com/in/jtuttledigital">
              LinkedIn
            </AppLink>

            <AppLink className="link w-fit text-neutral-300" href="https://github.com/jtuttledigital">
              GitHub
            </AppLink>

            <AppLink className="link w-fit text-neutral-300" href="https://x.com/jtuttledigital">
              X
            </AppLink>
          </nav>
        </div>

        {/* COLS 5–6 */}
        <div className="mt-6 md:mt-0 md:col-start-5 md:col-span-2">
  <div>
    <div className="mb-3 text-[11px] font-mono tracking-[0.2em] text-neutral-500 uppercase">Contact</div>

    <div className="-ml-[0.35rem] font-sans text-neutral-100">
      <AppLink className="link font-medium" href="mailto:jtuttledigital@gmail.com">
        jtuttledigital@gmail.com
      </AppLink>
    </div>
  </div>
</div>

      </LayoutGrid>
    </footer>
  );
}
