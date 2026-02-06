// components/LayoutGrid.tsx
import type { ReactNode } from "react";

type LayoutGridProps = {
  children: ReactNode;
  className?: string;

  /** Number of columns at md+ breakpoint (default: 3) */
  mdCols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  /** Max width of the centered container (default: 1440px) */
  maxWidthClassName?: string;

  /** Horizontal padding (default: 15px like your gutters) */
  pxClassName?: string;

  /** Horizontal gap between columns (default: 15px like your gutters) */
  gapXClassName?: string;
};

export function LayoutGrid({
  children,
  className = "",
  mdCols = 3,
  maxWidthClassName = "max-w-[1440px]",
  pxClassName = "px-[15px]",
  gapXClassName = "gap-x-[15px]",
}: LayoutGridProps) {
  const mdColsClass =
    {
      1: "md:grid-cols-1",
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
      5: "md:grid-cols-5",
      6: "md:grid-cols-6",
      7: "md:grid-cols-7",
      8: "md:grid-cols-8",
      9: "md:grid-cols-9",
      10: "md:grid-cols-10",
      11: "md:grid-cols-11",
      12: "md:grid-cols-12",
    }[mdCols] ?? "md:grid-cols-3";

  return (
    <div className="w-full flex justify-center">
      <div
        className={[
          "w-full",
          maxWidthClassName,
          pxClassName,
          "grid",
          "grid-cols-1",
          mdColsClass,
          gapXClassName,
          className,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
