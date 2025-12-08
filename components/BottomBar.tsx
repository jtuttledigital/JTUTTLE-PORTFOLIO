// components/BottomBar.tsx
import { FooterLink } from "./FooterLink";
import { LayoutGrid } from "./LayoutGrid";

export function BottomBar() {
  return (
    <footer className="border-t border-neutral-800 bg-[#111113] footer-dot-grid">
      {/* Same 3-column grid + padding as the rest of the page */}
      <LayoutGrid className="py-12 text-[11px] text-neutral-400 gap-y-10 md:gap-y-0">
        {/* Column 1: version + timestamp */}
        <div className="flex flex-col items-start gap-2">
          <span className="inline-flex items-center rounded-full border border-accent/70 px-2 py-0.5 font-mono text-[10px] text-accent">
            v1.0.0
          </span>
          <span>Last updated 2025-12-04</span>
        </div>

        {/* Column 2: stacked links, left-aligned */}
        <div className="flex flex-col items-start space-y-2">
          <FooterLink href="#" label="Audio" />
          <FooterLink href="#" label="LinkedIn" />
          <FooterLink href="#" label="GitHub" />
          <FooterLink href="#" label="X" />
        </div>

        {/* Column 3: terminal-style contact — aligns with DESCRIPTION + 3rd tile */}
        <div className="flex flex-col items-start text-neutral-300 leading-tight">
          <div className="font-mono text-[10.5px] text-neutral-500">
            $ run creativity --pair-mode
          </div>
          <a
            href="mailto:john@jtuttledigital.com"
            className="hover:text-accent transition-colors"
          >
            john@jtuttledigital.com
          </a>
        </div>
      </LayoutGrid>
    </footer>
  );
}
