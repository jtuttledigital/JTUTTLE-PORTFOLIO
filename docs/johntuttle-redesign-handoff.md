# johntuttle.cv — UI Redesign Handoff

**Document type:** Design system + engineering handoff + phased refactor guide  
**Target:** Codex (VS Code) — incremental implementation against existing Next.js codebase  
**Status:** Reference only. Do not restructure the site or rearchitect routing.

---

## Overview

This document specifies a visual redesign of `johntuttle.cv` — a working Next.js portfolio site. The existing codebase and routing architecture are preserved. Each implementation phase must leave the site fully functional and visually coherent on completion.

The redesign direction is: **dark-mode, product-design-forward, restrained premium**. The aesthetic draws from contemporary product UI — not decorative, not maximalist, not a blog. Think tool UI meets polished portfolio. Every decision should make the work feel more credible and the designer more serious.

This is not a Stitch clone. Stitch's futuristic glows and grid overlays are a reference point for dark UI confidence — not a target. The final result should feel more Vercel or Linear than science fiction.

---

## Core Aesthetic

- Dark interface with near-black base (`#0d0d0f` range), not pure black
- Subtle surface layering — background, panel, elevated card — three tiers max
- One restrained accent color (blue: `#4f8ef7`). Used sparingly. Not decorative.
- Borders as structure, not decoration — thin, low-opacity white
- Type-led hierarchy. The heading does the heavy lifting; supporting elements step back
- No gradients on UI surfaces. Gradient use is limited to project thumbnail fills only
- No glassmorphism in structural elements. Blur/backdrop-filter only on the sticky nav
- Micro-interactions only — hover state shifts, subtle lifts on cards. No scroll animations in Phase 1

---

## Design Principles

**Restraint over decoration.** If something can be removed without losing clarity, remove it.

**Hierarchy through contrast.** Use color weight and size to lead the eye — not icons, not borders, not background fills.

**Accent as signal, not style.** Blue (`#4f8ef7`) marks interactive elements and active states. It should not appear in decorative contexts.

**Cards earn their surface.** Not every element needs a card. Cards are for bounded, actionable, or navigable content — project entries, experience rows. Prose panels use a subtler surface treatment.

**The work is the hero.** Project thumbnails and case study entries get the most visual investment. Everything else supports them.

---

## Color System

### Base Surfaces

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#0d0d0f` | Page background |
| `--surface-1` | `#131317` | Cards, panels, nav |
| `--surface-2` | `#1c1c22` | Hover states, nested surfaces |
| `--surface-3` | `#26262f` | Elevated elements, dropdowns |

### Typography

| Token | Hex | Usage |
|---|---|---|
| `--fg` | `#f0f0f4` | Primary text |
| `--fg-2` | `#9898a8` | Secondary text, descriptions |
| `--fg-3` | `#5a5a6a` | Tertiary — labels, metadata, timestamps |

### Borders

| Token | Value | Usage |
|---|---|---|
| `--border` | `rgba(255,255,255,0.07)` | Default structural borders |
| `--border-strong` | `rgba(255,255,255,0.12)` | Hover states, emphasized borders |

### Accent

| Token | Hex | Usage |
|---|---|---|
| `--accent` | `#4f8ef7` | CTAs, links, active chips, section labels |
| `--accent-bg` | `rgba(79,142,247,0.10)` | Chip backgrounds, badge fills |
| `--accent-border` | `rgba(79,142,247,0.28)` | Chip/badge borders |

### Status Chips (Experience Tags)

| Role | Background | Text |
|---|---|---|
| Current / Active | `rgba(79,142,247,0.12)` | `#4f8ef7` |
| Founder | `rgba(52,211,153,0.12)` | `#34d399` |
| Big Tech | `rgba(251,191,36,0.10)` | `#fbbf24` |
| Agency | `rgba(167,139,250,0.12)` | `#a78bfa` |

**Accent usage rule:** Blue appears in: nav CTA button, section tag labels, project "View project" links, chip fills for active/current role, and the hero badge. Nowhere else.

---

## Typography System

### Font Stack

```css
--font-display: 'Google Sans Display', 'DM Sans', system-ui, sans-serif;
--font-sans:    'Google Sans', 'DM Sans', system-ui, sans-serif;
--font-mono:    'Google Sans Mono', 'Fira Mono', 'Courier New', monospace;
```

If Google Sans is unavailable (no CDN), fall back to `DM Sans` from Google Fonts. Do not use Inter, Roboto, or system-ui as the primary display font — they are too generic for this context.

### Scale

| Role | Size | Weight | Color Token | Notes |
|---|---|---|---|---|
| Hero H1 | `clamp(48px, 7.5vw, 76px)` | 400 | `--fg` | Display font. Line-height 1.05. Letter-spacing -0.035em |
| Section heading | — | — | — | Not used. Sections use tag labels only |
| Card title | `17–19px` | 500 | `--fg` | Display font. Letter-spacing -0.02em |
| Body / about | `15px` | 300 | `--fg-2` | Line-height 1.8 |
| Experience role | `14px` | 500 | `--fg` | — |
| Experience desc | `13px` | 400 | `--fg-3` | Truncate with ellipsis on overflow |
| Section tag label | `11px` | 500 | `--accent` | Uppercase. Letter-spacing 0.10em |
| Project category | `10px` | 500 | `--fg-3` | Uppercase. Letter-spacing 0.10em |
| Chip / badge | `11px` | 500 | (per chip) | No uppercase |
| Nav links | `13.5px` | 400 | `--fg-2` | — |
| Footer / metadata | `12px` | 400 | `--fg-3` | — |
| Mono (terminal string) | `12px` | 400 | `--fg-3` | Monospace font |

### Rules

- Do not exceed two weights in any single component: 400 and 500 only
- Avoid bold (600+) entirely — it reads heavy on dark surfaces
- Line-height for prose: 1.75–1.8. For UI labels: 1.0–1.2
- Letter-spacing: negative on large display text, neutral on body, positive on uppercase labels

---

## Layout + Spacing Principles

### Page Structure

```
nav (sticky, 56px)
└── .wrap (max-width: 960px, margin: 0 auto, padding: 0 32px)
    ├── .hero
    ├── .section [about]
    ├── .section [experience]
    ├── .section [work]
    └── footer
```

Preserve the existing page structure and component boundaries. Apply styles within them.

### Spacing Scale

| Purpose | Value |
|---|---|
| Section vertical padding | `60px 0` |
| Hero top padding | `88px` |
| Card internal padding | `18–20px` horizontal, `16–20px` vertical |
| About panel padding | `32px 36px` |
| Component gap (list rows) | `2px` |
| Grid gap (project cards) | `10px` |
| Section tag → content | `24px` |
| Wrap horizontal padding | `32px` (mobile: `20px`) |

### Grid

- Project cards: `repeat(3, 1fr)` — do not use `auto-fit` with min-width; it breaks at narrow viewports
- Stats bar: `display: flex` with `flex: 1` per cell — no grid
- Experience list: single column, `flex-direction: column`

### Border Radius

| Element | Value |
|---|---|
| Page cards (project, about) | `16px` |
| Experience rows | `12px` |
| Nav logomark | `8px` |
| Chips / badges | `20px` (pill) |
| Buttons | `22px` (pill) |
| Footer mono badge | `7px` |
| Stats bar | `14px` |

---

## Section-by-Section UI Breakdown

### Navigation

- Height: `56px`. Sticky. `z-index: 200`.
- Background: `rgba(13,13,15,0.85)` with `backdrop-filter: blur(20px)`. Border-bottom: `1px solid var(--border)`.
- Left: logomark (28×28px, blue square, radius 8px, white initials) + site name (14px, 500).
- Right: two ghost nav links + one filled blue CTA pill (`Contact` or `Get in touch`).
- Do not add more nav items. Do not add a hamburger in Phase 1.

### Hero

- Eyebrow badge: availability status + location. Blue-tinted pill. Glowing teal dot (status indicator).
- H1: three-line display type. Mixed color — primary `--fg`, dim lines `--fg-3`, accent `+` in `--accent`. Do not restyle this as a single color.
- Subheading: 16px, weight 300, `--fg-2`. Max-width 500px.
- CTA row: filled blue button + ghost outline button. Gap `10px`.
- Stats bar: three-cell horizontal panel below the CTAs. `border: 1px solid var(--border)`, radius `14px`. Each cell: large number (display font, 26px) + label (12px, `--fg-3`). Dividers between cells.

### About

- Section tag label + horizontal rule (the `section-header` pattern used throughout).
- Content in a single panel: `--surface-1` background, `1px solid var(--border)`, radius `16px`, padding `32px 36px`.
- Text: 15px, weight 300, `--fg-2`. Key phrases bolded at weight 500 in `--fg`.
- No icon, no avatar, no decorative element.

### Experience

- Section tag label + rule.
- List of rows. Each row: `--surface-1`, radius `12px`, `1px solid var(--border)`. Hover: `--surface-2`, `--border-strong`.
- Row layout: `display: flex`, `align-items: center`, gap `16px`.
  - Icon square (36×36px, rounded `9px`, tinted background per role)
  - Text block (role name at 14px/500/`--fg`, description at 13px/400/`--fg-3`, overflow ellipsis)
  - Status chip (right-aligned, pill, color per role)
- `gap: 2px` between rows (not margin — keeps rows visually grouped).

### Selected Work / Projects

- Section tag label + rule.
- Three-column grid. Each card: `--surface-1`, radius `16px`, `1px solid var(--border)`.
- Hover: border shifts to `rgba(79,142,247,0.35)`, card lifts `translateY(-3px)`. Transition `0.18s`.
- Thumbnail area: fixed height `130px`. Gradient fill (two-color, low opacity — see project thumbnail values in Color System). Centered glyph at 36px, opacity 0.4.
- Body: category label (uppercase, 10px, `--fg-3`) → card title (17px, display font, `--fg`) → subtitle (12.5px, `--fg-3`) → "View project →" link in `--accent`.
- "View project" gap widens on hover (`5px` → `8px`). CSS transition only.

### Footer

- `border-top: 1px solid var(--border)`. Padding `28px 0`.
- Left: monospace terminal string in a tinted badge + updated date string.
- Right: four circular social icon buttons (32×32px, border, hover brightens).
- No footer nav. No copyright line beyond the build note.

---

## Component Direction

### Section Header Pattern

Used before every major section. Reusable.

```html
<div class="section-header">
  <span class="section-tag">Label</span>
  <div class="section-line"></div>
</div>
```

```css
.section-header { display: flex; align-items: baseline; gap: 14px; margin-bottom: 24px; }
.section-tag { font-size: 11px; font-weight: 500; letter-spacing: 0.10em; text-transform: uppercase; color: var(--accent); }
.section-line { flex: 1; height: 1px; background: var(--border); }
```

### Chip / Badge

```css
.chip {
  font-size: 11px; font-weight: 500;
  padding: 4px 10px; border-radius: 20px;
  white-space: nowrap;
}
```

Apply color class per role. No icon inside chips. No uppercase in chips.

### Button Variants

**Primary (blue fill):**  
`background: var(--accent)`, `color: #fff`, `border: none`, `border-radius: 22px`, `padding: 11px 22px`, `font-size: 14px`, `font-weight: 500`.  
Hover: `opacity: 0.85`.

**Ghost (outline):**  
`background: transparent`, `color: var(--fg-2)`, `border: 1px solid var(--border-strong)`, same radius and padding.  
Hover: `color: var(--fg)`, `background: rgba(255,255,255,0.04)`.

No tertiary/text-only button style. Do not add more button variants.

### Nav Logomark

```css
.nav-logomark {
  width: 28px; height: 28px;
  border-radius: 8px;
  background: var(--accent);
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 600; color: #fff;
}
```

### Stats Bar Cell

```css
.stat { flex: 1; padding: 18px 24px; border-right: 1px solid var(--border); }
.stat:last-child { border-right: none; }
.stat-n { font-size: 26px; font-weight: 500; letter-spacing: -0.03em; line-height: 1; margin-bottom: 4px; }
.stat-label { font-size: 12px; color: var(--fg-3); }
```

---

## Styling Notes

### CSS Variable Setup

Declare all tokens on `:root` at the top of the global stylesheet (or in a dedicated `tokens.css`). Do not hardcode hex values in component styles — always reference tokens. This makes dark mode theming and future adjustments one-line changes.

### Backdrop Filter

`backdrop-filter: blur(20px)` on the nav only. Include `-webkit-backdrop-filter` for Safari. Do not apply blur elsewhere — it degrades performance and reads as decorative.

### Transitions

Default: `0.15s ease` on color, background, border-color, opacity.  
Card hover lift: `transform 0.18s ease`.  
Do not animate layout properties (width, height, padding). Do not use `all` as the transition property.

### Background Texture

The subtle grid overlay and ambient orb in the prototype are optional in Phase 1. If implemented, use `position: fixed`, `pointer-events: none`, `z-index: 0` — they must never affect layout or clickability. Implemented with `::before` / `::after` on `body`, not in the DOM.

If the existing site uses a light or neutral background, the darkest safe step is replacing `background-color` on `body` and `html` with `var(--bg)`. Do this in isolation and verify no components assume a light background.

### z-index Ladder

| Element | z-index |
|---|---|
| Body overlays (grid, orb) | 0 |
| Page content | 1 |
| Sticky nav | 200 |

Do not introduce additional stacking contexts unless required.

---

## Phased Implementation Plan

### Phase 1 — Foundation (Safe, Isolated)

**Goal:** Establish the token system and dark base without touching component logic.

Tasks:
- Add CSS custom properties (all `--` tokens) to `:root` in global styles
- Set `background-color` on `body` and `html` to `var(--bg)`
- Set default `color` on `body` to `var(--fg)`
- Import Google Fonts (Google Sans, Google Sans Display, Google Sans Mono) — or DM Sans as fallback — in `_document.tsx` or equivalent
- Apply `--font-sans` to `body`, `--font-display` to display headings, `--font-mono` to code/terminal elements
- Set `box-sizing: border-box` globally if not already set
- Remove or override any existing light-mode background assumptions in global CSS

**Safe because:** Token declarations don't affect layout. Font imports are additive. Background color change is global but reversible.

**Verification:** Site loads. All text is visible. No layout breakage. Fonts render correctly.

---

### Phase 2 — Navigation

**Goal:** Restyle the nav component to match the spec.

Tasks:
- Apply sticky positioning, `56px` height, dark background with blur, border-bottom
- Add logomark element (initials square) if not present — insert into nav JSX
- Restyle nav links to ghost style with hover state
- Add or restyle CTA button to filled blue pill
- Remove any light-mode nav background or box-shadow

**Safe because:** Nav is a single isolated component. Does not affect page routing or content.

**Verification:** Nav sticks on scroll. Blur visible against page content. All links functional. Mobile: confirm nav doesn't overflow.

---

### Phase 3 — Hero Section

**Goal:** Restyle the hero typography, badge, and stats bar.

Tasks:
- Apply display font and scale to H1. Apply mixed-color span treatment.
- Add or restyle availability badge (pill with dot)
- Restyle subheading to 16px/300/`--fg-2`
- Restyle CTA buttons to filled + ghost variants
- Add stats bar below CTAs (if not present, add as new JSX block with static content)

**Riskier elements in this phase:**
- Adding the stats bar requires new JSX — confirm it doesn't conflict with existing hero layout assumptions
- H1 span color treatment requires wrapping words in `<span>` — check if H1 content is hardcoded or CMS-driven

**Verification:** Hero reads correctly at all breakpoints. Stats bar doesn't overflow on mobile.

---

### Phase 4 — About + Experience Sections

**Goal:** Apply panel and list-row styles to existing content sections.

Tasks:
- Wrap About text in `.about-panel` surface card
- Apply section-header pattern (tag label + horizontal rule) to all sections
- Restyle experience rows to the icon + text + chip layout
- Add or verify icon squares per role. Apply chip colors per role.
- Apply hover state to experience rows

**Riskier elements:**
- If experience data is mapped from an array/CMS, icon and chip color assignment needs a mapping function — define it once, apply consistently
- Do not change the data structure of experience entries; only restyle the rendered output

**Verification:** All experience entries visible. Chips correct per role. Hover states work. No content clipped.

---

### Phase 5 — Project Cards

**Goal:** Restyle the work/project section cards.

Tasks:
- Apply three-column grid
- Restyle each card: dark surface, radius, border, hover lift + border glow
- Apply gradient thumbnail fills (per project color coding)
- Style project body: category label → title → subtitle → link
- Animate "View project" gap on hover

**Riskier elements:**
- Thumbnail images from the existing site may conflict with the gradient placeholder system — decide per project: use existing image with `object-fit: cover`, or replace with gradient fill
- Do not remove or break existing `<Link>` or `<a>` wrappers on project cards

**Verification:** All three projects visible and linked. Cards don't collapse on mobile (switch to single column). Hover interaction smooth.

---

### Phase 6 — Footer

**Goal:** Restyle footer to match spec.

Tasks:
- Apply `border-top`, dark background, flex layout
- Restyle terminal string as monospace badge
- Add circular social icon buttons or restyle existing links
- Remove any footer elements not in the spec (e.g., excessive nav links, redundant copy)

**Verification:** Footer content complete. Social links functional. No layout overflow.

---

### Phase 7 — Polish + Background Texture (Optional)

**Goal:** Add ambient background elements and refine transitions.

Tasks:
- Add `body::before` grid overlay (fixed, pointer-events none, z-index 0)
- Add `body::after` ambient orb (radial gradient, fixed, right-top)
- Add `fadeUp` entrance animations to hero elements with staggered delay
- Audit all transitions — ensure `0.15s ease` consistency
- Audit font rendering across browsers
- Audit mobile breakpoints: nav, hero H1 size, project grid, stats bar

**Safe because:** All additions are visual-only and non-structural. Background pseudo-elements cannot affect layout.

---

## Guardrails for Safe Refactoring

**Preserve all of the following throughout every phase:**

- Existing page routing and file structure (`pages/`, `app/`, or equivalent)
- All `<Link>` and `<a>` elements — do not rewrap or replace
- Next.js `Image` components — do not replace with `<img>` tags
- All existing `className` names on structural elements unless you are replacing the style entirely
- Any existing animation or scroll logic — do not delete, only override visually
- Data-fetching logic, even if co-located with styled components

**Never do this during a refactor phase:**

- Delete a CSS class without verifying it has no other consumers
- Replace a layout system (e.g., CSS Grid → Flexbox) in a component that has responsive logic
- Change a component's exported interface or props
- Rename files
- Modify `next.config.js`, `tailwind.config.js`, or any build config

**When in doubt:** Apply a new class alongside the old one, verify visually, then remove the old one in the same commit. Don't stage a removal separately from its replacement.

---

## Deferred Work (Do Not Attempt in Phases 1–6)

The following carry meaningful risk and should wait until the core redesign is stable:

- Routing changes or new pages
- Project detail page redesign — depends on page-specific layout assumptions
- Dark/light mode toggle — requires a theming architecture decision upfront
- Custom cursor or pointer effects
- Scroll-triggered animations (Intersection Observer) — can conflict with existing scroll logic
- Video thumbnails for project cards (the Bing project has a `.webm`) — handle after card layout is stable
- Any refactor of the CMS or data layer
- Replacing the font CDN with self-hosted fonts
- Tailwind migration (if site is currently using CSS modules or plain CSS)

---

## Acceptance Checklist

Each phase is complete when all of the following are true:

- [ ] Site loads without console errors
- [ ] All navigation links functional
- [ ] No content clipped, overflowing, or invisible
- [ ] Hover states work on: nav links, experience rows, project cards, social buttons
- [ ] Mobile breakpoint (≤640px): nav, hero, cards, footer all readable and non-overflowing
- [ ] Fonts rendering: display font on H1 and card titles, sans on body, mono on terminal string
- [ ] Accent color (`#4f8ef7`) appears only in specified locations — no accidental bleed
- [ ] Background is `#0d0d0f`, not pure black and not any light value
- [ ] All project links still navigate correctly
- [ ] No regressions from the previous phase

---

## Implementation Log Template

Copy and append for each phase completed.

```
## Phase [N] — [Name]
Date: YYYY-MM-DD
Files modified:
- 

Changes made:
- 

Regressions found:
- 

Resolved:
- 

Status: [ ] In progress  [ ] Complete  [ ] Blocked
Notes:
```

---

## Notes

**Accent restraint in practice.** If you find yourself reaching for `--accent` on a UI label, hover background, or decorative line — stop. Ask: is this interactive or active? If no, use `--fg-3` or `--border` instead. The accent earns its prominence by appearing rarely.

**The stats bar is structural, not decorative.** The three numbers (roles, years, focus) are not marketing copy — they give the hero section visual weight and keep the page from feeling like a blank text drop. Keep the copy functional and honest.

**Project thumbnails are placeholders.** The gradient fills used in the prototype are intentional stand-ins. If the actual project has a strong hero image, use it (`object-fit: cover`, full bleed, no radius on the image itself). If not, the gradient is a respectable default.

**Google Sans licensing.** Google Sans is available via Google Fonts as of 2024 for web use. Verify this hasn't changed before shipping. DM Sans is a reliable open-license fallback with a similar geometric voice.

**This document is the source of truth for Codex.** If a design decision isn't in this file, default to the most conservative interpretation — match the closest analogous spec'd component, use the token system, and flag it in the implementation log.
