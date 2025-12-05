import Image from "next/image";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-[#0D0D0E]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0D0D0E]/75 border-b border-neutral-800">
      {/* INNER GRID — matches Joseph Zhang’s spacing */}
      <div className="px-6 md:px-10">
        
        {/* TOP ROW — 3 columns */}
        <div
          className="
            grid 
            grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)_minmax(0,1fr)]
            items-center 
            py-6
            text-sm
          "
        >
          {/* LEFT — Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-jtuttledigital.svg"
              width={145}
              height={32}
              alt="JTuttle Digital"
              priority
            />
          </div>

          {/* MIDDLE — Role */}
          <div className="text-neutral-300 text-[13px]">
            Interaction / Product Designer
          </div>

          {/* RIGHT — Location */}
          <div className="text-right text-neutral-300 text-[13px]">
            Seattle, WA
          </div>
        </div>

        {/* DIVIDER LINE (should align w/ same grid columns) */}
        <div className="border-t border-neutral-800"></div>
      </div>
    </header>
  );
}
