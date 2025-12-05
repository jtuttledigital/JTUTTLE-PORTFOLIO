// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { BottomBar } from "@/components/BottomBar";

export const metadata: Metadata = {
  title: "J. Tuttle Digital",
  description: "Product Designer & Creative Technologist in Seattle, WA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink text-neutral-100">
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 pb-24">{children}</main>
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
