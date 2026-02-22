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
      demo: "https://brand-designer-three.vercel.app",
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
        caption:
          "Curated type sets with preview, lock states, and iterative suggestions.",
        span: "full",
        aspect: "landscape",
      },
      {
        src: "/projects/brand-designer/palette_2400x1350.png",
        alt: "Brand Designer — palette screen",
        caption:
          "Four-color core palette with optional support color and lockable shuffles.",
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
    category: "PRODUCT ECOSYSTEM",
    title: "Alto Moving",
    subtitle: "Brand, website, estimator, automation",
    tileImage: "/projects/alto/alto-tile.png",

    // Expanded hero
    heroImage: "/projects/alto/alto-tile.png",

    description:
      "Built the brand identity and digital product ecosystem for a local moving startup — spanning visual identity, a conversion-focused website, an interactive cost estimator, and lightweight automation systems.",

    // NOTE: caseStudy = website, demo = estimator (keeps existing CTA rendering unchanged)
    links: {
      caseStudy: "https://www.altomoving.com",
      demo: "https://alto-estimator.vercel.app",
    },

    facts: [
      { label: "ROLE", value: "Product Designer / Visual Designer / Front-End" },
      { label: "TEAM", value: "Solo" },
      { label: "DURATION", value: "2020–2025" },
      { label: "TOOLS", value: "Figma, Webflow, JS, Automation" },
    ],

    supportingMedia: [
      {
        src: "/projects/alto/logo-mark_2400x1350.png",
        alt: "Alto Moving — logo mark and favicon variants",
        caption:
          "Market-attuned identity optimized for legibility across trucks, hats, decals, and mobile.",
        span: "full",
        aspect: "landscape",
      },
      {
        src: "/projects/alto/home_2400x1350.png",
        alt: "Alto Moving — homepage",
        caption: "Conversion-focused homepage structured around clarity and trust.",
        span: "full",
        aspect: "landscape",
      },
      {
        src: "/projects/alto/mobile_1500x2000.png",
        alt: "Alto Moving — mobile layouts",
        caption: "Mobile-first layout and service hierarchy for fast decision-making.",
        span: "full",
        aspect: "portrait",
      },
      {
        src: "/projects/alto/estimator-input_2400x1350.png",
        alt: "Alto Estimator — input flow",
        caption:
          "Interactive estimator designed to reduce quoting friction and qualify leads.",
        span: "full",
        aspect: "landscape",
      },
      {
        src: "/projects/alto/estimator-result_2400x1350.png",
        alt: "Alto Estimator — results screen",
        caption:
          "Results and next steps: pricing expectations before contact to improve lead quality.",
        span: "full",
        aspect: "landscape",
      },
      {
        src: "/projects/alto/pipeline_2400x1350.png",
        alt: "Alto Moving — content automation pipeline",
        caption: "Modular pipeline: idea → script → voice → video → review → schedule.",
        span: "full",
        aspect: "landscape",
      },
    ],

    conclusion: `
BRAND SYSTEM
Designed a market-attuned identity optimized for clarity, legibility, and small-scale reproduction across trucks, hats, decals, and mobile screens. The identity acted as a credibility multiplier, helping the business feel more established than its size and driving strong internal adoption.

—

WEBSITE
Designed and built a conversion-focused marketing site structured around service clarity and fast decision-making. Emphasis on mobile-first layout, clean hierarchy, and practical trust signals.

—

ESTIMATOR APP
Designed an interactive cost estimator to qualify leads and set pricing expectations before contact. Reduced back-and-forth quoting, improved lead quality, and supported modular pricing logic.

—

AUTOMATION
Built a lightweight content automation pipeline using AI tools with a human review step to support ongoing brand presence:
Idea → Script → Voice → Video → Review → Schedule

—

OUTCOME
• Reached profitability  
• Generated consistent inbound leads  
• Reduced manual operational overhead  

—

WHAT THIS DEMONSTRATES
• End-to-end product ownership  
• Market-driven visual design  
• UI/UX + front-end implementation  
• Systems thinking
`.trim(),
  },

  {
    slug: "bing",
  category: "PRODUCT SYSTEMS",
  title: "Bing",
  subtitle: "Homepage motion system (DIS / Microsoft)",
  tileImage: "/projects/bing/tile.jpg",

  tileVideoWebm: "/projects/bing/northern-lights-loop.webm",
  tileVideoMp4: "/projects/bing/northern-lights-loop.mp4",

  heroVideoWebm: "/projects/bing/northern-lights-loop.webm",
  heroVideoMp4: "/projects/bing/northern-lights-loop.mp4",

  heroImage: "/projects/bing/tile.jpg",

  heroMaxWidth: "md",

  description:
    "Prototyped a seamless looping video approach for Bing’s homepage at Microsoft (DIS), establishing a repeatable workflow that balanced premium visual quality with strict web performance constraints.",

  facts: [
    { label: "ROLE", value: "Visual / Motion Designer" },
    { label: "TEAM", value: "Media Acquisitions Digital Studio (DIS)" },
    { label: "DURATION", value: "Early HTML5 era (approx. 2009–2010)" },
    { label: "TOOLS", value: "After Effects, Photoshop" },
  ],

  // supportingMedia: [
  //   {
  //     src: "/projects/bing/tile.jpg",
  //     alt: "Bing — still frame from looping homepage video",
  //     caption:
  //       "Representative homepage loop (Northern Lights). Additional examples will be added as archives are recovered.",
  //     span: "full",
  //     aspect: "landscape",
  //   },
  // ],

  conclusion: `
OVERVIEW
At Microsoft’s Media Acquisitions Digital Studio (DIS), I prototyped and productionized a seamless looping-video approach for Bing’s homepage. The objective was to introduce motion without visible start/stop seams while keeping assets small enough for reliable web delivery.

—

PROBLEM
Bing wanted homepage motion that could be produced repeatedly (across many daily visuals) with consistent quality and predictable performance. Standard video playback created obvious loop seams and inconsistent results.

—

APPROACH
• Chose loop-friendly footage and edit points to hide repetition  
• Used crossfade / blend techniques to return clips into themselves  
• Built After Effects templates + export presets to standardize output  
• Defined delivery specs to keep playback smooth and file sizes controlled  

—

OUTCOME
• The prototype validated the approach and enabled broader adoption  
• DIS became a primary production partner for Bing homepage motion loops  
• Templates and export specs were reused as internal reference standards  
• Example work was featured in a Microsoft company-wide presentation  

—

WHAT THIS DEMONSTRATES
• Systems thinking applied to motion design  
• Shipping under performance and platform constraints  
• Repeatable production workflows (templates, specs, standards)
`.trim(),
  },
];