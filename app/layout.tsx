// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { BottomBar } from "@/components/BottomBar";

const siteUrl = "https://johntuttle.cv";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="app-content-fill text-neutral-100 antialiased font-sans">
        {/* pb matches BottomBar height so it reveals naturally at page end */}
        <div className="relative isolate min-h-screen app-content-fill pb-[22rem] md:pb-[14rem]">
          {/* footer is fixed and behind content */}
          <BottomBar />

          {/* content sits above the footer */}
          <div className="relative z-20 w-full min-h-screen app-content-fill">{children}</div>
        </div>
      </body>
    </html>
  );
}
