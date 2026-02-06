# JTUTTLE-PORTFOLIO — UI/Dev Rules (v1)

This repo is a portfolio UI prototype built in Next.js + Tailwind.
The goal is a clean, minimal starting point inspired by modern case-study layouts
(sticky rails, simple typography, predictable spacing). We will evolve beyond the initial inspiration after v1.

---

## Product Behaviors (Locked)

### Sticky Header (Global)
- Header is `position: sticky` at the top.
- Header height is a constant (currently `h-20` / 80px).
- Header shows a Close control ONLY when a project is expanded.

### Projects: Grid → Expanded Project View (NOT a modal)
Projects open as an **expanded in-page section** below the header.

When a project is opened:
- The Project Grid is hidden (tight v1 UX).
- The Expanded Project View renders in normal document flow.
- Close returns to the grid.

### Expanded Project View Layout
1) **Hero (full-bleed)**
   - Full-width image under the header.
   - Scrolls normally.
2) **Content section (3-column grid)**
   - Left rail = tile description/meta (sticky)
   - Right stream = long-form detail content (scrolls)
   - Right stream may contain nested sub-grids/columns.

### Sticky Rail Rules
- The left rail becomes sticky after the hero scrolls away.
- Use `position: sticky` with a top offset that accounts for the sticky header:
  - `top = headerHeight + spacing`
- Avoid `overflow: hidden/auto` on sticky ancestors, which breaks sticky behavior.

---

## State Model (Locked)

State lives in `app/page.tsx`:

- `activeSlug: string | null`
  - `null` => project grid shown
  - `string` => expanded project view shown

Header receives:
- `overlayOpen` = Boolean(activeSlug)
- `onCloseOverlay` = () => setActiveSlug(null)

ProjectGrid receives:
- `activeSlug`
- `onSelect(slug | null)`

---

## Design System Rules (Locked)

### Spacing + Sizing
- Use a 4px/8px rhythm.
- Prefer Tailwind spacing scale (`p-6`, `gap-6`, `mt-4`, etc).
- Avoid one-off values like `15px` unless explicitly justified.

### Units
- Prefer Tailwind utilities (rem-based).
- Avoid hard-coded px except for border hairlines and rare micro-tuning.

### Typography
- Primary: Inter
- Mono: JetBrains Mono

### Colors (Tokens)
- Use Tailwind tokens (`ink`, `paper`, `accent`, etc) from `tailwind.config.js`.
- Avoid inline hex except for temporary experiments.

### Icons (SVG)
- Normalize icons to `viewBox="0 0 24 24"`.
- Use `currentColor` for fill/stroke so Tailwind `text-*` controls color.
- Size icons using Tailwind (e.g. `h-4 w-4`, `h-5 w-5`) rather than SVG width/height.

---

## Components (v1)

- `Header` — sticky top chrome, shows close when project expanded
- `ProjectGrid` — 3-up tile grid (hidden when a project is expanded)
- `ProjectExpanded` — expanded project view (hero + sticky left rail + right stream)
- `LayoutGrid` — shared 3-column layout grid

---

## Implementation Notes

### Sticky Rail Gotcha
Sticky will not work if any ancestor has:
- `overflow: hidden`
- `overflow: auto`
- `overflow: scroll`

Keep ancestors overflow-visible.

### Scroll-into-view
When opening a project, scroll the expanded section into view for clarity.

---

## Milestones

### v1
- All tiles added
- Expanded view layout implemented for each project
- Spacing + tokens normalized to 4/8 rhythm

### v2 (optional)
- Route-based project pages: `/projects/[slug]` for deep links + back button
