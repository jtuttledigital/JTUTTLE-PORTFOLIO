// lib/projects.ts
// Source of truth for all project tiles + expanded (ProjectExpanded) content.

export type ProjectLinks = {
  demo?: string;
  repo?: string;
  caseStudy?: string;
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectMedia = {
  /** Path under /public (recommended) */
  src: string;
  alt: string;
  /** Small monospace caption that sits directly under the media */
  caption?: string;
  /** Layout hint for the media grid in ProjectExpanded */
  span?: "full" | "half";
  /** Only affects height (width always fills its column) */
  aspect?: "landscape" | "portrait";
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  tileImage: string;

  /** Full-width hero image under the sticky header */
  heroImage?: string;

  /** Intro paragraph shown at top of the right stream */
  description: string;

  /** Primary CTAs (rendered in left rail) */
  links?: ProjectLinks;

  /**
   * Optional “at a glance” facts, typically 4 items (Role / Team / Duration / Tools).
   * Rendered in the right stream as a 2→4 column grid.
   */
  facts?: ProjectFact[];

  /**
   * Media stack for the right stream.
   * - Use span="full" when you want the image to fill columns 2+3 together.
   * - Use aspect="portrait" when you want a taller card (same width, more height).
   */
  supportingMedia?: ProjectMedia[];

  /**
   * Deprecated (kept for backwards compatibility).
   * If provided, ProjectExpanded will treat these as half-width landscape images.
   */
  supportingImages?: string[];

  /** Optional closing text block (sources, reflection, next steps). */
  conclusion?: string;
};

export const projects: Project[] = [
  {
    slug: "brand-designer",
    category: "DIGITAL TOOLMAKING",
    title: "Brand Designer",
    subtitle: "AI-assisted brand systems",
    tileImage: "/projects/brand-designer/BD_2400x1350.png",

    // Expanded hero (full-width image under header)
    heroImage: "/projects/brand-designer/hero.png",

    description:
      "AI-assisted brand system generator that outputs palettes, typography, logos, and exportable brand boards (tokens, CSS vars, Tailwind snippets, PDFs). Built to move from prompt → usable system fast.",

    links: {
  demo: "https://brand-designer-demo.example.com",
  repo: "https://github.com/jtuttledigital/brand-designer",
},

    facts: [
      { label: "ROLE", value: "Designer / Builder" },
      { label: "TEAM", value: "Solo" },
      { label: "DURATION", value: "2024–Present" },
      { label: "TOOLS", value: "Next.js, Tailwind, AI APIs" },
    ],

    supportingMedia: [
      {
        src: "/projects/brand-designer/brand-designer-tile.png",
        alt: "Brand Designer — overview screen",
        caption: "System overview: palette + type + export targets.",
        span: "full",
        aspect: "landscape",
      },
      {
        src: "/projects/brand-designer/brand-designer-hero.png",
        alt: "Brand Designer — token export",
        caption: "Tokens + snippets: CSS vars, Tailwind config, JSON.",
        span: "full",
        aspect: "landscape",
      },
      {
        src: "/projects/brand-designer/shot-03.jpg",
        alt: "Brand Designer — board preview",
        caption: "Board preview: compact, shippable, client-friendly.",
        span: "full",
        aspect: "portrait",
      },
    ],

    conclusion:
      "Next: tighten onboarding, add a few opinionated presets, and ship a clean ‘export pack’ that plugs into a design system repo. I’m also exploring a lightweight ‘brand audit’ mode for existing products.",
  },

  {
    slug: "media-acquisitions",
    category: "PRODUCT DESIGN",
    title: "Media Acquisitions",
    subtitle: "Photo composite and design concept",
    tileImage: "/projects/media-acquisitions/alto-tile.png",
    heroImage: "/projects/media-acquisitions/alto-tile.png",
    description:
      "A concept project exploring layout systems, editorial type, and visual composition. Built as a fast study in hierarchy, rhythm, and information density.",
    links: {
      demo: "https://example.com",
      repo: "https://github.com/jtuttledigital",
    },
    // Add facts/supportingMedia when ready.
  },

  {
  slug: "bing-homepage-loops",
  category: "MICROSOFT / MEDIA ACQ",
  title: "Bing Homepage Video Loops",
  subtitle: "Seamless HTML5 homepage loop production",
  tileImage: "/projects/bing/tile.jpg",

  tileVideoWebm: "/projects/bing/northern-lights-loop.webm",
  tileVideoMp4: "/projects/bing/northern-lights-loop.mp4",

  heroVideoWebm: "/projects/bing/northern-lights-loop.webm",
  heroVideoMp4: "/projects/bing/northern-lights-loop.mp4",

  heroImage: "/projects/bing/tile.jpg", // optional fallback poster

  // rest...
}


  
];
