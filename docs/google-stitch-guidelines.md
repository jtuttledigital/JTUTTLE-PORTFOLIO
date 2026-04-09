# UI Redesign System Spec
## Obsidian Craft Portfolio

---

## 1. Overview

The "Obsidian Craft" redesign evolves the portfolio into a **high-end editorial digital index**.

This is not a layout rewrite. It is a **system-level refinement** focused on:
- visual hierarchy
- typography
- color system
- component consistency

The goal is to create a portfolio that feels:
- precise
- curated
- intentional
- system-driven

---

## 2. Core Design System

### Theme
Dark editorial interface with minimal noise and high contrast.

### Color System

| Token            | Value     | Usage |
|------------------|----------|------|
| Background 900   | #0E0E0E  | Primary background |
| Background 800   | #131313  | Panels / surfaces |
| Background 700   | #1C1B1B  | Subtle elevation |
| Accent           | #ADFF2F  | Highlights, tags, emphasis |
| Text Primary     | #FFFFFF  | Main text |
| Text Secondary   | #A1A1A1  | Supporting text |

**Rule:**
Accent color is **sparse and intentional**, never dominant.

---

### Typography

Primary Font: **Space Grotesk**

| Usage        | Style |
|-------------|------|
| Headings     | Bold, uppercase, tight tracking |
| Body         | Regular, readable |
| Labels       | Small, uppercase, spaced |

**Principles:**
- Strong hierarchy
- Tight leading on headlines
- Clean readable body
- No decorative typography

---

## 3. UI System Principles

1. **Editorial over UI-heavy**
2. **Whitespace replaces borders**
3. **Hierarchy > decoration**
4. **System consistency across components**
5. **Accent used for meaning, not style**

---

## 4. Section Architecture

### A. Navigation

- Fixed top bar
- Transparent with blur
- Left: logo
- Right: menu trigger

**Mobile Menu:**
- Full-height drawer
- Large uppercase links
- “Curated Index” label

---

### B. Hero

- Large, dominant headline
- Mixed white + accent text
- Supporting paragraph below

**Behavior:**
- Immediate clarity
- Strong first impression
- No clutter

---

### C. Selected Projects

- Vertical stack
- Large image (greyscale default)
- Title + description
- Metadata / tags

**Visual Rules:**
- Images default grayscale
- Color revealed on hover (optional)
- "Lead Design" badge uses accent color

---

### D. Experience Index

- Minimal list layout
- No borders
- Spacing-driven separation

**Fields:**
- Date
- Role
- Company
- Description
- Location

---

### E. Manifesto / About

- Portrait image
- Quote block (high contrast)
- Supporting body text

**Metadata:**
- Core Stack
- Focus

Displayed as small accent-tagged items

---

### F. Footer / CTA

- "Get in Touch"
- Accent sub-label
- External links (LinkedIn, GitHub, etc.)
- Minimal copyright

---

## 5. Component System (Target Structure)

> Adapt to existing codebase — do not force restructure unless necessary

---

## 6. Implementation Notes

### Phase 1 — Foundation / Design Token Pass
- Date: 2026-03-25
- Objective:
  Introduce Obsidian Craft foundation tokens and safe typography/accent refinements without changing layout structure or behavior.
- Files changed:
  - app/globals.css
  - tailwind.config.js
  - app/layout.tsx
  - app/page.tsx
  - components/Header.tsx
  - components/ProjectGrid.tsx
  - components/ProjectExpanded.tsx
  - components/BottomBar.tsx
- Summary of changes:
  - Added/refined global token set for dark surfaces, text, and accent:
    - Backgrounds: `#0E0E0E`, `#131313`, `#1C1B1B`
    - Text: `#FFFFFF`, `#A1A1A1`
    - Accent: `#ADFF2F` (+ hover/background/underline variants)
  - Added `meta-kicker` utility class for restrained metadata accent usage.
  - Updated Tailwind aliases to match Phase 1 tokens (`ink`, `panel`, `elevate`, `accent`, `mute`).
  - Introduced Space Grotesk as global sans foundation in `app/layout.tsx` via `next/font/google`.
  - Replaced a narrow set of hardcoded surface colors with tokenized classes in page/chrome/components.
  - Applied accent tone to small metadata labels only (section kickers, category/meta labels, footer updated date).
- Risks encountered:
  - `next build` failed in sandbox due Turbopack process binding permissions; build succeeded when rerun outside sandbox.
  - Existing `bg-black` media containers were intentionally preserved to avoid visual regressions in image/video framing.
- Deferred items:
  - Header/nav structural refinement and menu behavior (Phase 2).
  - Footer layout/content re-architecture (Phase 2/5).
  - Hero hierarchy and section-level typography restructuring (Phase 3).
  - Project card composition and interaction polish beyond token pass (Phase 4).
  - Motion/interaction tuning and mobile rhythm cleanup (Phase 6).
- Manual test checklist:
  - Home page renders with updated dark token palette and restrained lime accent.
  - Header/footer remain functional and visually coherent on mobile + desktop.
  - Project grid opens expanded project views and close action works.
  - External links, mailto link, and CTA buttons preserve behavior.
  - Text contrast remains readable across key sections.
  - `npm run build` completes successfully.
- Result:
  Phase 1 complete and stable. No Phase 2 work executed.

### Phase 2 — Typography, Hierarchy, and Readability Pass
- Date: 2026-03-25
- Objective:
  Strengthen editorial hierarchy and reading comfort across hero/section/copy/meta text while preserving the existing structure and Phase 1 token system.
- Files changed:
  - app/page.tsx
  - components/ProjectGrid.tsx
  - components/ProjectExpanded.tsx
  - components/BottomBar.tsx
- Summary of changes:
  - Improved home-page intro hierarchy:
    - Increased spacing rhythm in the top content block.
    - Raised body copy readability with larger size/line-height and stronger primary vs secondary contrast.
    - Clarified team/description rows with stronger role labels and more readable description text.
  - Refined project card typography hierarchy:
    - Upgraded title/subtitle scale and spacing.
    - Tightened metadata + CTA readability without changing card structure/behavior.
    - Moved card surface to `bg-panel` for cleaner separation from page background.
  - Refined expanded project view hierarchy:
    - Stronger title/subtitle and description readability.
    - Improved facts/value contrast and caption/conclusion line-height.
    - Adjusted section spacing rhythm (without component re-architecture).
  - Readability/background-effect adjustment:
    - Reduced footer dot-grid overlay opacity from `0.80` to `0.45` to lower visual bleed-through.
- Risks encountered:
  - Build still requires running outside sandbox due Turbopack process binding permissions.
- Deferred items:
  - Navigation/menu pattern updates and header behavioral changes.
  - Any project card structural redesign or interaction overhaul.
  - Motion/animation refinement.
  - Broad site-wide spacing rewrite beyond targeted sections.
- Manual test checklist:
  - Home section hierarchy feels clearer (kickers, body copy, team rows).
  - Project card title/subtitle/CTA contrast and readability are improved on mobile + desktop.
  - Expanded project pages maintain layout integrity with improved text hierarchy.
  - Footer texture is less visually dominant behind content.
  - `npm run build` completes successfully.
- Result:
  Phase 2 complete and stable. Stopped after Phase 2.

### Phase 3 — Layout Chrome and Component Cohesion Pass
- Date: 2026-03-25
- Objective:
  Improve header/footer chrome and unify section/card surface behavior so the interface feels more cohesive and intentional without structural rewrites.
- Files changed:
  - app/page.tsx
  - components/Header.tsx
  - components/ProjectGrid.tsx
  - components/ProjectExpanded.tsx
  - components/BottomBar.tsx
- Summary of changes:
  - Header/nav chrome polish:
    - Switched header shell to panel-like sticky chrome (`bg-panel/90`, stronger blur, consistent bottom border).
    - Harmonized role/location labels into compact metadata styling.
    - Added subtle border treatment to close controls for more consistent chrome behavior.
  - Section container consistency:
    - Converted ABOUT and TEAM/DESCRIPTION blocks into matching panel containers (shared radius/border/surface treatment).
    - Tightened major section spacing rhythm between intro block and project grid.
  - Project card consistency polish:
    - Unified card shell treatment (rounded corners, consistent border opacity and panel surface).
    - Added consistent media/text separation via card image rail divider.
    - Increased inter-card rhythm slightly for cleaner scanability.
  - Expanded project panel consistency:
    - Applied matching rounded panel framing to media cards and consistent caption divider behavior.
    - Slightly improved media stack spacing rhythm.
  - Footer structure refinement:
    - Added lightweight metadata labels (`STATUS`, `LINKS`, `CONTACT`) for column clarity.
    - Reduced grid texture overlay opacity from `0.45` to `0.30` to keep content readability ahead of background effect.
- Risks encountered:
  - Build still requires running outside sandbox due Turbopack process binding permissions.
- Deferred items:
  - Hero-specific composition rewrite.
  - Deep project-card interaction enhancements (hover/media behavior beyond basic polish).
  - Navigation behavior changes (drawer/menu architecture).
  - Motion-focused refinements.
  - Full responsive spacing normalization pass.
- Manual test checklist:
  - Sticky header remains stable and readable on mobile + desktop.
  - Intro section panels feel visually balanced and spacing rhythm is coherent.
  - Project cards retain click behavior and present consistent border/surface treatment.
  - Expanded project media cards preserve rendering while matching panel style.
  - Footer labels/readability are improved and texture remains subtle.
  - `npm run build` completes successfully.
- Result:
  Phase 3 complete and stable. Stopped after Phase 3.

### Phase 4 — Section and Project Presentation Refinement
- Date: 2026-03-25
- Objective:
  Refine project presentation and section-level hierarchy so the portfolio reads as a cohesive, system-driven product while preserving existing architecture and behavior.
- Files changed:
  - app/page.tsx
  - components/ProjectGrid.tsx
  - components/BottomBar.tsx
- Summary of changes:
  - Project cards (highest-priority pass):
    - Tightened card rhythm and spacing consistency (`gap-6` grid cadence + stable text block rhythm).
    - Refined media treatment for consistency by applying grayscale/contrast normalization on card media.
    - Added subtle static tonal veil to reduce image clash with panel/background and preserve legibility.
    - Polished “View project” styling to align with system metadata language (mono, tighter tracking, restrained accent on hover).
    - Kept card behavior and structure intact.
  - Selected Work section:
    - Added clear section framing with metadata kicker and heading above project grid.
    - Improved section scanability and hierarchy without introducing new architecture.
  - Experience section:
    - Refactored hierarchy inside existing section container to clearly separate company, role, and supporting description.
    - Reduced visual clutter by using whitespace-driven grouping rather than additional separators.
  - About/Bio section:
    - Slightly tightened line length for reading comfort.
    - Refined emphasis text using stronger neutral weight rather than accent overuse.
  - Footer/CTA:
    - Reduced dot-grid competition further (`opacity: 0.22`) for readability.
    - Clarified primary vs secondary hierarchy with stronger email emphasis and softer utility line treatment.
    - Normalized footer link tone for consistency.
- Risks encountered:
  - Build remains dependent on running outside sandbox due Turbopack process binding permissions.
- Deferred items:
  - Deep project detail-page narrative choreography and media sequencing.
  - Any motion-driven project card interactions.
  - Hero rewrite or significant copy restructuring.
  - Cross-page responsive micro-spacing pass.
  - CTA content strategy changes.
- Manual test checklist:
  - Selected Work heading hierarchy appears correctly above cards.
  - Card media tonal consistency is improved and does not overpower text.
  - Card spacing and “View project” treatment are consistent across all projects.
  - Experience entries are easier to scan (company → role → description).
  - About paragraph remains readable with clearer emphasis hierarchy.
  - Footer hierarchy reads clearly (primary contact vs secondary metadata/links).
  - `npm run build` completes successfully.
- Result:
  Phase 4 complete and stable. Stopped after Phase 4.

### Phase 5 — Noise Reduction and Visual Balance Pass
- Date: 2026-03-25
- Objective:
  Reduce visual competition, enforce accent discipline, and improve compositional balance so the UI feels calmer and more premium without changing layout architecture.
- Files changed:
  - app/globals.css
  - app/page.tsx
  - components/ProjectGrid.tsx
  - components/BottomBar.tsx
- What was reduced or removed:
  - Reduced global decorative grid intensity:
    - Dot brightness lowered and density reduced in `.footer-dot-grid`.
    - Footer overlay opacity reduced again and pattern scaled up to appear less active.
  - Reduced accent frequency:
    - `meta-kicker` shifted from lime accent tone to neutral supporting tone.
    - Card labels and footer labels moved toward neutral hierarchy.
    - Removed strong accent behavior from project card link hover in favor of neutral emphasis.
  - Reduced footer noise:
    - Removed the `$ run creativity --pair-mode` line.
    - Simplified status/metadata presentation and kept grouping clearer.
- Summary of changes:
  - Background/grid:
    - Decorative texture now behaves as atmospheric background rather than a competing visual layer.
  - Card visual balance:
    - Increased card separation from page background using subtle shadow and cleaner border/surface contrast.
    - Refined internal card rhythm (`label → title → description → link`) for steadier scanability.
    - Adjusted media toning and overlay stack to keep image dominant while avoiding clash.
  - Selected Work / Experience / About:
    - Preserved structure while tightening heading spacing and maintaining cleaner line-length emphasis.
    - Experience hierarchy remains whitespace-driven and easier to parse.
  - Footer/CTA:
    - Simplified hierarchy and reduced decorative interference.
    - Contact remains clear as the primary footer action.
- Risks encountered:
  - Build still requires running outside sandbox due Turbopack process binding permissions.
- Manual test checklist:
  - Background texture feels passive and non-competitive.
  - Accent appears intentional and not overly frequent.
  - Cards feel clearly layered above page background and remain easy to scan.
  - Footer can be parsed quickly (links vs contact vs metadata).
  - Text spacing feels even with no visibly floaty blocks.
  - `npm run build` completes successfully.
- Recommended final polish phase (Phase 6):
  - Run a full-page compositional QA pass focused on micro-spacing consistency at breakpoints.
  - Harmonize final interactive states (hover/focus contrast) for links and CTAs.
  - Perform final accessibility contrast and keyboard-focus audit.
  - Execute a last “subtraction pass” for any remaining non-essential visual treatments.
- Result:
  Phase 5 complete and stable. Stopped after Phase 5.

### Phase 6 — Interaction and Hover Signature Pass
- Date: 2026-03-25
- Objective:
  Add subtle, premium-feeling interaction feedback focused on project cards and links while keeping motion restrained and performance-safe.
- Files changed:
  - app/globals.css
  - components/ProjectGrid.tsx
- Interaction rules:
  - Interactive motion uses tight durations (`180–200ms`) with `ease-out`.
  - Only interactive elements respond (cards, links, and card CTA micro-elements).
  - Motion remains subtle (small lift/shift, mild filter transitions, no glow-heavy effects).
  - Accent appears as a restrained tint layer, not a dominant color state.
- Hover behavior spec:
  - Project cards:
    - Default: muted media (`grayscale`, reduced saturation), calm neutral shell.
    - Hover: slight card lift (`-2px`), modest border/shadow emphasis, media regains subtle color/contrast.
    - Added very subtle lime-tinted overlay (`rgba(173,255,47,0.05)`).
  - Card CTA (`View project`):
    - Underline reveal on hover.
    - Arrow shifts slightly to the right.
    - Text color lifts from neutral-400 to neutral-200.
  - Shared links (`.link`):
    - Underline starts lower-opacity and resolves to full intent on hover/focus.
    - Arrow micro-motion shifts right.
    - Accent background is softened for less visual aggression.
- Limitations:
  - Interaction pass intentionally scoped to card + link systems only; no global animation rollout.
  - Touch devices rely mostly on active/focus feedback rather than hover.
  - Turbopack build still requires running outside sandbox permissions.
- Result:
  Phase 6 complete and stable. Stopped after Phase 6.

### Phase 7 — Final Containment and Readability Polish Pass
- Date: 2026-03-26
- Objective:
  Resolve background/content bleed-through and finalize readability polish without altering architecture or design direction.
- Files changed:
  - app/layout.tsx
  - app/page.tsx
  - components/BottomBar.tsx
- What was corrected in background/content layering:
  - Added a dedicated content-surface containment layer in `app/layout.tsx`:
    - `absolute` background layer (`bg-ink`) sits above the fixed footer and below scrollable content.
    - Layer is clipped above the footer zone (`bottom: var(--bottombar-height)`) to preserve footer visibility.
  - Increased opacity of primary intro content panels (`bg-panel/95`) in `app/page.tsx` to reduce translucency bleed.
  - Further softened footer pattern energy in `components/BottomBar.tsx`:
    - More opaque footer surface (`bg-panel/95`).
    - Lower pattern overlay opacity and slightly larger pattern spacing.
- Additional polish:
  - Preserved CTA hierarchy and interaction system from prior phases (no hover-dependent visibility introduced).
  - Kept surface and border logic consistent with established system.
- Any remaining known issues:
  - `--bottombar-height` is fixed; if footer height changes significantly in future revisions, clipping value should be adjusted to keep containment exact.
  - Turbopack build remains dependent on running outside sandbox permissions.
- Result:
  Phase 7 complete and stable. Stopped after Phase 7.
