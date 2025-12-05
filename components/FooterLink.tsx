// components/FooterLink.tsx
import Link from "next/link";

type FooterLinkProps = {
  href: string;
  label: string;
  index: number;
};

export function FooterLink({ href, label, index }: FooterLinkProps) {
  const isExternal = href.startsWith("http");
  const linkProps = isExternal
    ? { target: "_blank", rel: "noreferrer" }
    : undefined;

  return (
    <Link
      href={href}
      {...linkProps}
      className="group inline-flex items-baseline gap-1 text-sm text-neutral-100"
    >
      {/* Highlight / underline */}
      <span className="relative inline-flex">
        {/* Green highlight bg on hover */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-sm bg-accent/90 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-150"
        />
        {/* Dotted underline word */}
        <span className="relative z-10 border-b border-dotted border-neutral-400 group-hover:border-transparent px-0.5">
          {label}
        </span>
      </span>

      {/* Index number */}
      <span className="text-[10px] text-accent align-top leading-none group-hover:-translate-y-0.5 transition-transform duration-150">
        {index}
      </span>

      {/* Arrow on hover */}
      <span
        aria-hidden
        className="text-[11px] text-accent opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
      >
        ↗
      </span>
    </Link>
  );
}
