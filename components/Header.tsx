// components/Header.tsx
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-[#0D0D0E]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0D0D0E]/75">
      {/* ~24–25px padding left/right */}
      <div className="px-6 md:px-10">
        {/* 3 columns: logo | role | location */}
        <div
          className="
            grid 
            grid-cols-[minmax(0,2.15fr)_minmax(0,1.2fr)_minmax(0,1fr)]
            items-center 
            py-6
            text-sm
          "
        >
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

          {/* Col 3: Location */}
          <div className="text-neutral-300 text-[13px]">
            Seattle, WA
          </div>
        </div>

        {/* Divider aligned with same width */}
        <div className="border-t border-neutral-800" />
      </div>
    </header>
  );
}
