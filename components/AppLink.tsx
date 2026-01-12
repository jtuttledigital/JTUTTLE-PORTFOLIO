import Link from "next/link";
import * as React from "react";

type AppLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  "aria-label"?: string;
};

function isInternalHref(href: string) {
  // Internal app routes: /, /projects/alto-moving, etc.
  return href.startsWith("/") && !href.startsWith("//");
}

function isSpecialScheme(href: string) {
  // These should NOT open new tabs
  return (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function AppLink({
  href,
  children,
  className = "link",
  ...rest
}: AppLinkProps) {
  // Internal navigation → Next.js Link
  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  // mailto / tel / hash → plain anchor, no _blank
  if (isSpecialScheme(href)) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  // External → plain anchor, new tab + security attrs
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Fallback (rare)
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}
