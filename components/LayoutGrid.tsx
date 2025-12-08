// components/LayoutGrid.tsx
import type { ReactNode } from "react";

type LayoutGridProps = {
  children: ReactNode;
  className?: string;
};

export function LayoutGrid({ children, className = "" }: LayoutGridProps) {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`
          w-full
          max-w-[1440px]
          px-[15px]
          grid
          grid-cols-1
          md:grid-cols-3
          gap-x-[15px]
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}
