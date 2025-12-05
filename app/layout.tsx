// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { BottomBar } from "@/components/BottomBar";

export const metadata: Metadata = {
  title: "J. Tuttle Digital",
  description: "Interaction / Product Designer — J. Tuttle Digital portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-neutral-100">
        <div className="min-h-screen flex flex-col">
          {/* children already include the Header */}
          <main className="flex-1 pb-0">{children}</main>
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
