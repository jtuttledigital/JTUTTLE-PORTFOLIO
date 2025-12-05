// lib/projects.ts

export type Project = {
  id: string;
  title: string;
  category: string;
  role: string;
  yearRange: string;
  tileImage: string;
  heroImage: string;
  summary: string;
  columnA: string;
  columnB: string;
  roleDetails: string;
  stack: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "brand-designer",
    title: "Brand Designer",
    category: "DIGITAL TOOLMAKING",
    role: "AI-ASSISTED BRAND SYSTEMS",
    yearRange: "2024 – Present",
    tileImage: "/projects/brand-designer-tile.png",
    heroImage: "/projects/brand-designer-hero.png",
    summary:
      "An AI-assisted tool for generating cohesive brand systems in minutes—font trios, palettes, logo prompts, and exportable tokens in one focused interface.",
    columnA:
      "Brand Designer compresses years of agency brand work into a tool other designers and founders can use. It proposes options but keeps the workflow opinionated, fast, and easy to iterate on.",
    columnB:
      "This project is my sandbox for exploring how AI fits into real design processes: where to automate, where to keep human control, and how to make complex systems feel approachable.",
    roleDetails: "Product design, interaction design, frontend implementation.",
    stack: "Next.js, TypeScript, Tailwind, OpenAI, Replicate",
    links: [
      {
        label: "Live prototype",
        href: "https://jtuttledigital.com/brand-designer",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/YOUR-GITHUB/brand-designer",
      },
    ],
  },
  {
    id: "alto-moving",
    title: "Alto Moving",
    category: "SERVICE / PRODUCT",
    role: "FOUNDER / PRODUCT / OPS",
    yearRange: "2017 – Present",
    tileImage: "/projects/alto-tile.png",
    heroImage: "/projects/alto-hero.png",
    summary:
      "A Seattle-based moving company I built from scratch—brand, website, operations, quoting flows, and advertising—to understand how products live in the real world.",
    columnA:
      "I handled everything from branding and web design to quoting flows, CRM, and Google Ads. Alto became a profitable, multi-six-figure business serving the Seattle area.",
    columnB:
      "Treating Alto as a product taught me how design, copy, logistics, and operations snap together. It also gave me a deep respect for boring problems and invisible systems.",
    roleDetails: "Founder, product design, service design, growth.",
    stack: "Webflow / WordPress, Google Ads, Notion, spreadsheets, phone calls.",
    links: [
      {
        label: "Visit Alto Moving",
        href: "https://altomoving.com",
      },
    ],
  },
  {
    id: "ai-content-pipeline",
    title: "AI Content Pipeline",
    category: "WORKFLOW AUTOMATION",
    role: "NOTION • MAKE • VIDEO",
    yearRange: "2024 – Present",
    tileImage: "/projects/ai-pipeline-tile.png",
    heroImage: "/projects/ai-pipeline-hero.png",
    summary:
      "A content system that turns a Notion board into scripts, voiceover, and short-form video for Alto Moving and my personal brand.",
    columnA:
      "I designed a pipeline from Notion ideas → AI-assisted scripts → audio → edited vertical video. Everything runs through a preview step so I can keep quality high.",
    columnB:
      "The goal is to ship useful content every week without burning out. This project is where I prototype how AI and automation can support small teams and solo builders.",
    roleDetails: "Systems design, automation, light video editing.",
    stack: "Notion, Make, ChatGPT, ElevenLabs, CapCut / Runway",
    links: [],
  },
];
