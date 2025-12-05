// components/BottomBar.tsx
import { FooterLink } from "./FooterLink";

export function BottomBar() {
  return (
    <footer className="border-t border-neutral-800 bg-[#111113] footer-dot-grid">
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          md:px-9              /* ≈35px padding at desktop */
          py-12
          text-[11px]
          text-neutral-400
          grid
          gap-10
          md:grid-cols-[minmax(0,2.15fr)_minmax(0,1.2fr)_minmax(0,1fr)]
        "
      >
        {/* Column 1: version + timestamp, top-left aligned */}
        <div className="flex flex-col items-start gap-2">
          <span className="inline-flex items-center rounded-full border border-accent/70 px-2 py-0.5 font-mono text-[9px] tracking-wide text-accent bg-[#111113]/80">
            v1.0.0
          </span>
          <span>Last updated 2025-12-04</span>
        </div>

        {/* Column 2: stacked links, left aligned */}
        <div className="flex flex-col items-start space-y-2">
          <FooterLink href="#" label="Audio" />
          <FooterLink href="#" label="LinkedIn" />
          <FooterLink href="#" label="GitHub" />
          <FooterLink href="#" label="X" />
        </div>

        {/* Column 3: terminal-style contact, top-left aligned */}
        <div className="flex flex-col items-start text-neutral-300 leading-tight">
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
