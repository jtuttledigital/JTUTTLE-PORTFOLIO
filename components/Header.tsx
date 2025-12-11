// components/Header.tsx
import Image from "next/image";
import { LayoutGrid } from "./LayoutGrid";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#0D0D0E]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0D0D0E]/75">
      {/* Same grid as main content & footer */}
      <LayoutGrid className="items-center py-6 text-sm border-b border-neutral-800">
        {/* Col 1: Logo */}
        <div className="flex items-center">
          <Image
            src="/logo-jtuttledigital.svg"
            width={145}
            height={32}
            alt="J. Tuttle Digital"
            priority
          />
        </div>

        {/* Col 2: Role */}
        <div className="text-neutral-300 text-[13px]">
          Interaction / Product Designer
        </div>

        {/* Col 3: Location — lines up with DESCRIPTION + 3rd tile + footer col 3 */}
        <div className="text-neutral-300 text-[13px]">Seattle, WA</div>
      </LayoutGrid>
    </header>
  );
}
