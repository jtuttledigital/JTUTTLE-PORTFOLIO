// lib/projects.ts

export type ProjectLinks = Partial<{
  demo: string;
  live: string;
  website: string;
  repo: string;
  github: string;
  caseStudy: string;
}>;

export type Project = {
  slug: string;

  // Tile (collapsed)
  category: string;   // small mono label
  title: string;      // big title
  subtitle: string;   // one-liner
  tileImage: string;  // used by ProjectGrid tile

  // Expanded (below-header “project view”)
  heroImage?: string; // ProjectExpanded checks heroImage first
  hero?: string;      // fallback
  coverImage?: string;// fallback

  description: string;         // left sticky rail
  supportingImages?: string[]; // right scrolling stream
  links?: ProjectLinks;        // buttons/CTAs
};

export const projects: Project[] = [
  {
    slug: "brand-designer",
    category: "DIGITAL TOOLMAKING",
    title: "Brand Designer",
    subtitle: "AI-assisted brand systems",
    tileImage: "/projects/brand-designer/tile.jpg",

    // Expanded hero (full-width image under header)
    heroImage: "/projects/brand-designer/hero.jpg",

    description:
      "AI-assisted brand system generator that outputs palettes, typography, logos, and exportable brand boards (tokens, CSS vars, Tailwind snippets, PDFs). Built to move from prompt → usable system fast.",

    links: {
      repo: "https://github.com/jtuttledigital/brand-designer",
      demo: "https://brand-designer-demo.example.com",
    },

    supportingImages: [
      "/projects/brand-designer/shot-01.jpg",
      "/projects/brand-designer/shot-02.jpg",
      "/projects/brand-designer/shot-03.jpg",
    ],
  },

  {
    slug: "media-acquisitions",
    category: "PRODUCT DESIGN",
    title: "Media Acquisitions",
    subtitle: "Photo composite and design concept",
    tileImage: "/projects/media-acquisitions/tile.jpg",
    heroImage: "/projects/media-acquisitions/hero.jpg",
    description:
      "A concept project exploring layout systems, editorial type, and visual compositing. Emphasis on structure, pacing, and interaction-ready composition.",
    links: {
      caseStudy: "https://jtuttledigital.com/projects/media-acquisitions",
    },
    supportingImages: [
      "/projects/media-acquisitions/shot-01.jpg",
      "/projects/media-acquisitions/shot-02.jpg",
    ],
  },

  {
    slug: "jtuttle-portfolio",
    category: "ENGINEERING + DESIGN",
    title: "J. Tuttle Portfolio",
    subtitle: "Next.js build with a minimal interaction system",
    tileImage: "/projects/jtuttle-portfolio/tile.jpg",
    heroImage: "/projects/jtuttle-portfolio/hero.jpg",
    description:
      "A minimal portfolio system designed for speed, clarity, and maintainability. Structured as reusable components, shared grid primitives, and token-driven styling.",
    links: {
      repo: "https://github.com/jtuttledigital/JTUTTLE-PORTFOLIO",
      live: "https://jtuttledigital.com",
    },
    supportingImages: [
      "/projects/jtuttle-portfolio/shot-01.jpg",
      "/projects/jtuttle-portfolio/shot-02.jpg",
    ],
  },
];
