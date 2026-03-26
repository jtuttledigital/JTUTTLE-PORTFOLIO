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
