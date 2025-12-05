// components/BottomBar.tsx
import { FooterLink } from "./FooterLink";

export function BottomBar() {
  return (
    <footer className="border-t border-neutral-800 bg-[#111113] footer-dot-grid">
      <div
        className="
          mx-auto max-w-6xl px-6 md:px-10
          py-12
          text-[11px] text-neutral-400
          grid gap-10
          md:grid-cols-[minmax(0,2.15fr)_minmax(0,1.2fr)_minmax(0,1fr)]
        "
      >
        {/* Left: version pill */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-accent/70 px-2 py-0.5 font-mono text-[9px] tracking-wide text-accent bg-[#111113]/80">
            v1.0.0
          </span>
          <span className="hidden sm:inline">Last updated 2025-12-04</span>
        </div>

        {/* Middle: links */}
        <div className="space-y-2">
          <FooterLink href="#" label="Audio" index={1} />
          <FooterLink href="#" label="LinkedIn" index={2} />
          <FooterLink href="#" label="GitHub" index={3} />
          <FooterLink href="#" label="X" index={4} />
        </div>

        {/* Right: terminal-style contact */}
        <div className="text-right leading-tight text-neutral-300">
          <div className="font-mono text-[10px] text-neutral-500">
            $ run creativity --pair-mode
          </div>
          <a
            href="mailto:john@jtuttledigital.com"
            className="hover:text-accent transition-colors"
          >
            john@jtuttledigital.com
          </a>
        </div>
      </div>
    </footer>
  );
}
