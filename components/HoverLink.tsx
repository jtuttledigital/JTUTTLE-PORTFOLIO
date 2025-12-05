// components/HoverLink.tsx
import Link from "next/link";
import { ReactNode } from "react";

type HoverLinkProps = {
  href: string;
  children: ReactNode;
};

export function HoverLink({ href, children }: HoverLinkProps) {
  const isExternal = href.startsWith("http");
  const linkProps = isExternal
    ? { target: "_blank", rel: "noreferrer" }
    : undefined;

  return (
    <Link
      href={href}
      {...linkProps}
      className="group inline-flex items-center gap-1 text-xs text-neutral-300 hover:text-accent transition-colors"
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="translate-x-[-4px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-transform duration-150"
      >
        ↗
      </span>
    </Link>
  );
}
