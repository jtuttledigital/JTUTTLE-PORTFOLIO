// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { BottomBar } from "@/components/BottomBar";

export const metadata: Metadata = {
  title: "J. Tuttle Digital",
  description: "Product Designer – portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0B0C] text-neutral-100 antialiased">
        {/* pb matches BottomBar height so it reveals naturally at page end */}
        <div className="relative min-h-screen pb-[10rem]">
          {/* content sits above the footer */}
          <div className="relative z-10">{children}</div>

          {/* footer is fixed and “behind” content */}
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
