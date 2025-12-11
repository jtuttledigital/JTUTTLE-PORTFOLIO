// components/HoverLink.tsx
import Link from "next/link";

type HoverLinkProps = {
  href: string;
  label: string;
};

export function HoverLink({ href, label }: HoverLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className="
        group inline-flex items-center gap-1
        text-[11px] text-neutral-300
        transition-colors
        hover:text-accent
      "
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <span className="relative inline-flex items-center">
        {/* Label */}
        <span className="transition-colors group-hover:text-accent">
          {label}
        </span>

        {/* Arrow that fades in / nudges up on hover */}
        <span
          aria-hidden
          className="
            pointer-events-none
            ml-1 text-[10px]
            opacity-0 translate-y-[2px]
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all
          "
        >
          ↗
        </span>
      </span>
    </Link>
  );
}
