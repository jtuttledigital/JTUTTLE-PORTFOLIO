// components/FooterLink.tsx
import Link from "next/link";

type FooterLinkProps = {
  href: string;
  label: string;
};

export function FooterLink({ href, label }: FooterLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        items-baseline
        text-neutral-300
        text-[11px]
      "
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <span className="relative inline-flex items-center">
        {/* highlight behind label on hover */}
        <span
          aria-hidden
          className="
            absolute
            inset-y-[-3px]
            left-[-4px]
            right-[2px]
            rounded-[2px]
            bg-accent
            opacity-0
            group-hover:opacity-100
            transition-opacity
          "
        />

        {/* word with dotted underline */}
        <span
          className="
            relative
            underline
            underline-offset-2
            decoration-neutral-600
            decoration-dotted
          "
        >
          {label}
        </span>

        {/* superscript arrow, no visual space, animates up on hover */}
        <span
          aria-hidden
          className="
            relative
            z-10
            -ml-[1px]          /* visually no space between word and arrow */
            font-mono
            text-[9px]
            text-accent
            -translate-y-[2px]  /* sit a bit higher than baseline */
            opacity-0
            group-hover:opacity-100
            group-hover:-translate-y-[4px]  /* animate up on hover */
            transition-all
          "
        >
          ↗
        </span>
      </span>
    </Link>
  );
}
