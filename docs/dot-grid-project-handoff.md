# Dot Grid Project Integration Handoff

## Objective

Add a new portfolio project for **Dot Grid** using the same implementation pattern, structure, and quality level as the existing **JT Cube** project.

This should feel like a first-class portfolio project, not a temporary test.

Use the existing project architecture, data shape, routing pattern, media handling, and visual treatment already established in the portfolio for projects like **JT Cube** and the other current project entries.

---

## Source of truth

Before making changes, inspect the existing implementation for:

- `jt-cube`
- other current portfolio projects
- project data/config files
- project card/tile components
- project detail / expanded project components
- media rendering patterns
- CTA/button patterns
- any project type definitions or shared interfaces

Match the existing system rather than inventing a new structure.

---

## New project to add

### Project slug
`dot-grid`

### Project title
`3D Dot Grid`

### Short label / category
Use the same category pattern as the other projects.

Preferred framing:
`Spatial UI System`
or
`Interaction / Visual System`

Use whichever aligns best with the current portfolio taxonomy.

---

## Media asset

Use this media file as the primary hero / preview asset:

`/projects/dot-grid/MAI-dots.mp4`

This file already exists in:

`public/projects/dot-grid/MAI-dots.mp4`

### Media behavior
For any video usage, ensure it is:

- autoplay
- loop
- muted
- playsInline

Use the same media component conventions already used elsewhere in the portfolio when possible.

---

## Project positioning

This project should be framed as a **spatial interface system for AI tools**, not just a visual experiment.

The emphasis is:

- depth as hierarchy
- cursor-driven motion as interaction
- ambient movement without visual overload
- product-friendly motion language
- applied to an AI interface concept

---

## Project copy

### Title
`3D Dot Grid`

### Subtitle / one-line summary
`A cursor-responsive spatial UI system exploring depth, motion, and hierarchy for AI interfaces.`

### Overview
`This project explores how a layered 3D dot-grid can create a more spatial, responsive interface surface for modern AI products. Rather than treating the effect as standalone motion, the system was developed as a product-facing UI layer—using depth, perspective, and cursor influence to add atmosphere and hierarchy without overwhelming the experience.`

### Secondary description
`The interaction is intentionally restrained. Dots shift in response to cursor movement like a subtle field, creating a sense of depth and motion that feels ambient rather than decorative. The system was applied to a concept redesign of Microsoft MAI Playground to test how this visual language could support AI-focused interfaces.`

### Goals
Use the same formatting style as other projects. Include these ideas:

- Create spatial depth without visual noise
- Explore cursor-driven motion as a soft interaction layer
- Build a system that feels product-friendly, not flashy
- Test the visual language inside an AI interface concept

### Stack
Use the same stack display pattern as other projects.

Include:
- Next.js
- React
- TypeScript
- Framer Motion

Only include items if they match how stack data is currently represented in the portfolio.

---

## CTAs

Add the same CTA structure used by other portfolio projects.

Use these CTA labels if the pattern supports them:

- `Live Demo`
- `View Code`

If the project detail page also has an internal portfolio expansion, preserve that existing pattern.

### CTA targets
Use placeholders if needed, but wire the fields cleanly.

For now:

- Live Demo → placeholder or upcoming Vercel URL field
- View Code → GitHub repo URL field or placeholder

Do not hardcode broken links if the current project system expects optional fields.

---

## Implementation requirements

### 1. Reuse the existing project system
Do not create a one-off project page if the portfolio already uses a shared project data model.

Add `dot-grid` to the same system used by the current projects.

### 2. Match JT Cube structure
Use JT Cube as the reference model for:

- data entry shape
- media treatment
- detail layout
- card/tile behavior
- expanded project content
- transitions
- typography hierarchy
- spacing rules

### 3. Use the MP4 as primary media
The new MP4 should appear:

- in the project card/tile preview if appropriate
- in the project detail hero/media area

Use the same rendering logic and fallback pattern already present in the portfolio.

### 4. Preserve performance
Avoid introducing unnecessary JS or custom video logic unless required by the current implementation pattern.

### 5. Preserve portfolio visual consistency
This project should feel native to the current portfolio system.

Do not redesign the project layout.
Do not change global styles.
Do not alter unrelated projects.

---

## Recommended content structure

Wherever the existing project detail layout allows, structure the new project content in this order:

1. Hero media
2. Title + summary
3. Overview
4. Goals / system intent
5. Stack
6. CTA links

If the current portfolio supports supporting images/media, leave room for future additions but only implement what is currently needed for a clean first pass.

---

## Notes on tone

The project should read as:

- thoughtful
- product-aware
- system-driven
- visually exploratory, but disciplined

Avoid language that makes it sound like only a visual effect study.

Preferred language:
- spatial UI system
- interface surface
- cursor-responsive field
- depth and hierarchy
- ambient motion
- product-friendly motion

Avoid language like:
- just an experiment
- just a visual effect
- flashy animation
- decorative motion

---

## Expected outcome

After implementation, the portfolio should include a new **Dot Grid** project that:

- appears alongside the other portfolio projects
- matches the same quality bar as JT Cube
- uses the MP4 as preview/hero media
- has clean copy and CTA support
- feels ready for portfolio review and iteration

---

## Deliverable

Make the necessary code and content changes to add the new project cleanly into the existing portfolio project system.

Do not redesign the portfolio.
Do not modify unrelated project entries unless required for consistency.
Keep the implementation tight, reusable, and aligned with existing project patterns.