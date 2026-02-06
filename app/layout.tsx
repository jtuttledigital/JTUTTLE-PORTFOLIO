// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { BottomBar } from "@/components/BottomBar";

const siteUrl = "https://johntuttle.cv";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "John Tuttle — Product Designer",
    template: "%s — John Tuttle",
  },
  description:
    "Product Designer building systems, interfaces, and AI-assisted tools. Seattle, WA.",

  applicationName: "John Tuttle",
  authors: [{ name: "John Tuttle" }],
  creator: "John Tuttle",

  icons: {
    // ✅ Keep J_only.svg as favicon
    icon: [{ url: "/J_only.svg", type: "image/svg+xml" }],

    // ✅ Newly added
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "John Tuttle — Product Designer",
    description:
      "Product Designer building systems, interfaces, and AI-assisted tools. Seattle, WA.",
    siteName: "John Tuttle",

    // ✅ Newly added
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "John Tuttle — Product Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "John Tuttle — Product Designer",
    description:
      "Product Designer building systems, interfaces, and AI-assisted tools. Seattle, WA.",

    // ✅ Newly added
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink text-neutral-100 antialiased">
        {/* pb matches BottomBar height so it reveals naturally at page end */}
        <div className="relative min-h-screen pb-[22rem] md:pb-[10rem]">
          {/* content sits above the footer */}
          <div className="relative z-10">{children}</div>

          {/* footer is fixed and “behind” content */}
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
