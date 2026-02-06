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

  // Optional media sources
  heroImage?: string;
  tileVideoWebm?: string;
  tileVideoMp4?: string;
  heroVideoWebm?: string;
  heroVideoMp4?: string;
  heroMaxWidth?: "md" | "lg" | "xl" | "none";

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
   * If provided, ProjectExpanded will treat these as half-width landscape media.
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
    tileImage: "/projects/brand-designer/zip_2400x1350.png",

    // Expanded hero
    heroImage: "/projects/brand-designer/hero_3000.png",

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
        src: "/projects/brand-designer/type_2400x1350.png",
        alt: "Brand Designer — typography screen",
        caption: "Curated type sets with preview, lock states, and iterative suggestions.",
        span: "full",
        aspect: "landscape",
      },
      {
        src: "/projects/brand-designer/palette_2400x1350.png",
        alt: "Brand Designer — palette screen",
        caption: "Four-color core palette with optional support color and lockable shuffles.",
        span: "full",
        aspect: "landscape",
      },
      {
        src: "/projects/brand-designer/logo_2400x1350.png",
        alt: "Brand Designer — logo screen",
        caption: "Prompt-driven logo generation with iteration and export controls.",
        span: "full",
        aspect: "landscape",
      },
      {
        src: "/projects/brand-designer/preview_1500x2000.png",
        alt: "Brand Designer — board preview",
        caption: "Live brand board for quick review and handoff.",
        span: "full",
        aspect: "portrait",
      },
      
      {
        src: "/projects/brand-designer/zip_2400x1350.png",
        alt: "Brand Designer — token export",
        caption: "Export pack: tokens, CSS, Tailwind config, logo, and PDF board.",
        span: "full",
        aspect: "landscape",
      },
      
    ],

    conclusion: `
OVERVIEW
Brand Designer was built as an interactive design system rather than a one-shot generator. The project explores how AI can support early-stage brand decisions while keeping designers in control of constraints, intent, and outcomes.

Instead of optimizing for automation, the tool emphasizes visibility, iteration, and system coherence.

—

DESIGN APPROACH
• Treat brand identity as a connected system (type, color, logo), not isolated outputs  
• Use opinionated defaults and curated starting points to reduce noise  
• Make every control reversible, inspectable, and intentionally optional  

AI suggestions are framed as guidance — never overrides.

—

KEY DECISIONS
• Typography balances curated sets with exploratory suggestions instead of pure randomness  
• Palette colors influence logo generation only when explicitly enabled  
• Monochrome and minimal logo treatments are preserved by default  
• Iteration refines prior results rather than regenerating from scratch  

These choices prioritize design judgment over novelty.

—

TECHNICAL NOTES
• Client-only architecture for predictable interaction and zero hydration ambiguity  
• Deterministic state with explicit user control and clear persistence boundaries  
• Real-time brand board preview to surface tradeoffs instantly  
• Export pipeline produces usable design artifacts (tokens, CSS variables, Tailwind config)

The system is intentionally lightweight and transparent.

—

REFLECTION
Brand Designer functions both as a usable tool and as a case study in AI-assisted creative systems. It reflects my approach to product design: clear constraints, thoughtful defaults, and interfaces that encourage exploration without sacrificing control.

This project is less about generating brands — and more about designing the systems that support good decisions.
`.trim(),
  },

  {
    slug: "alto-moving",
    category: "PRODUCT DESIGN",
    title: "Alto Moving",
    subtitle: "Site design and development.",
    tileImage: "/projects/alto/alto-tile.png",
    heroImage: "/projects/alto/alto-tile.png",
    description:
      "A production website and brand system built for a real operating business. The project focuses on scalable layout systems, clear messaging, and conversion-driven UX to support local SEO, lead flow, and ongoing iteration as the business grows.",
    links: {
      demo: "https://altomoving.com",
    },
    facts: [
      { label: "ROLE", value: "Designer / Builder" },
      { label: "TEAM", value: "Solo" },
      { label: "DURATION", value: "2020–Present" },
      { label: "TOOLS", value: "Figma / Webflow" },
    ],
    conclusion:
      "Built as a living system rather than a static site, the project expanded to include a custom estimate application used to qualify leads and generate pricing. The work reflects an ongoing balance between design quality, operational constraints, and real customer behavior.",
  },

  {
    slug: "bing",
    category: "PRODUCT DESIGN",
    title: "Bing",
    subtitle: "Motion and interactive media experiments",
    tileImage: "/projects/bing/tile.jpg",

    tileVideoWebm: "/projects/bing/northern-lights-loop.webm",
    tileVideoMp4: "/projects/bing/northern-lights-loop.mp4",

    heroVideoWebm: "/projects/bing/northern-lights-loop.webm",
    heroVideoMp4: "/projects/bing/northern-lights-loop.mp4",

    heroImage: "/projects/bing/tile.jpg",

    description:
      "Concept and production work exploring motion, compositing, and interactive media systems for Bing.",

    links: {
      // intentionally omitted
    },
  },
];
