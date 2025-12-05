// components/BottomBar.tsx
import { FooterLink } from "./FooterLink";

export function BottomBar() {
  return (
    <footer className="border-t border-neutral-800 bg-[#111113] footer-dot-grid">
      <div
        className="
          px-6 md:px-10
          py-12
          text-[11px] text-neutral-400
          grid gap-10
          md:grid-cols-[minmax(0,2.15fr)_minmax(0,1.2fr)_minmax(0,1fr)]
        "
      >
        {/* Left: version pill + timestamp */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-accent/70 px-2 py-0.5 font-mono text-[9px] tracking-wide text-accent bg-[#111113]/80">
            v1.0.0
          </span>
          <span className="hidden sm:inline">Last updated 2025-12-04</span>
        </div>

        {/* Middle: stacked links (one per line) */}
        <div className="space-y-2">
  <FooterLink href="#" label="Audio" />
  <FooterLink href="#" label="LinkedIn" />
  <FooterLink href="#" label="GitHub" />
  <FooterLink href="#" label="X" />
</div>

        {/* Right: terminal-style contact */}
        <div id="contact" className="text-right leading-tight">
          <a
            href="mailto:you@jtuttledigital.com"
            className="text-[11px] text-neutral-200 hover:text-accent transition-colors"
          >
            $ sudo make something awesome --together<br className="hidden md:block" />
            john@jtuttledigital.com
          </a>
        </div>
      </div>
    </footer>
  );
}
