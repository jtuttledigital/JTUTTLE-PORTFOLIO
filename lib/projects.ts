// lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tileImage: string;
  heroImage: string;
};

export const projects: Project[] = [
  {
    slug: "brand-designer",
    title: "Brand Designer",
    subtitle: "AI-assisted brand systems",
    category: "Digital Toolmaking",
    tileImage: "/projects/brand-designer-tile.png",
    heroImage: "/projects/brand-designer-hero.png",
  },
  {
    slug: "alto-moving",
    title: "Alto Moving",
    subtitle: "Founder / product / ops",
    category: "Service / Product",
    tileImage: "/projects/alto-tile.png",
    heroImage: "/projects/alto-hero.png",
  },
  {
    slug: "ai-content-pipeline",
    title: "AI Content Pipeline",
    subtitle: "Notion · Make · Video",
    category: "Workflow Automation",
    tileImage: "/projects/ai-pipeline-tile.png",
    heroImage: "/projects/ai-pipeline-hero.png",
  },
];
