// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { BottomBar } from "@/components/BottomBar";

export const metadata: Metadata = {
  title: "J. Tuttle Digital",
  description: "Interaction / Product Designer – portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0B0C] text-neutral-100 antialiased">
        <div className="relative min-h-screen">
          {/* No bottom padding here – page.tsx handles spacing */}
          <main className="relative">
            {children}
          </main>

          {/* Fixed footer behind content */}
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
