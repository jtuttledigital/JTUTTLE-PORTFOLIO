# Codex Prompt — Claude Portfolio Redesign Refactor

Use `docs/johntuttle-redesign-handoff.md` as the primary implementation guide for a phased UI refinement of this existing Next.js portfolio site.

This is a controlled refactor, not a rebuild.

## Primary Goal

Implement the Claude-generated redesign direction incrementally while preserving:

- the current site architecture
- existing content and project structure
- working routes, links, and handlers
- deployability after every pass

Treat the current working build as the source of truth.
Treat `docs/johntuttle-redesign-handoff.md` as the visual/system direction document.

---

## Working Rules

- Do **not** redesign the whole site in one pass
- Do **not** break the build
- Do **not** rewrite architecture unless necessary
- Do **not** remove content to make the redesign easier
- Do **not** over-style or introduce unnecessary visual complexity
- Prefer reusable tokens, shared classes, and safe incremental refactors
- Reuse existing components where possible
- If a change is risky, defer it and explain why

---

## Required Process

Before making changes:

1. Read `docs/johntuttle-redesign-handoff.md` fully
2. Audit the current codebase and identify:
   - app structure
   - component structure
   - styling approach
   - typography setup
   - reusable UI primitives
   - safe refactor points
3. Compare the handoff document to the actual codebase
4. Adapt the implementation plan to the real codebase rather than assuming the handoff structure exists exactly

Then:

1. Propose phased implementation passes
2. Execute **only Phase 1**
3. Keep the site stable and coherent after Phase 1
4. Update `docs/johntuttle-redesign-handoff.md` with:
   - implementation notes
   - files changed
   - what was completed
   - what was deferred
   - recommended next phase
5. Stop and report back

---

## Design Direction to Preserve

Use the Claude redesign direction as the target feel:

- dark, refined portfolio UI
- modern product-design aesthetic
- cleaner and more contemporary than the Stitch direction
- strong readability and section clarity
- restrained premium feel
- polished cards and layout rhythm
- controlled accent usage
- better hierarchy and scannability
- professional and approachable, not overly futuristic

This direction should feel:

- product-design-forward
- contemporary
- intentional
- polished
- readable on both desktop and mobile

---

## Phase Plan

### Phase 1 — Foundation + Safe Visual Cleanup

Goal:
Introduce the Claude direction at the token, spacing, and typography-hierarchy level without destabilizing the layout.

Safe tasks for Phase 1:
- refine global color usage only where low-risk
- improve spacing consistency
- tighten typography hierarchy
- refine small labels, metadata, and supporting text
- improve section rhythm where possible without structural rewrites
- introduce or refine reusable visual tokens if helpful
- preserve existing layout and content structure

Do **not** do in Phase 1:
- full hero redesign
- navigation replacement
- project card rebuild
- major section restructuring
- animation-heavy work
- component renaming/reorganization unless required for safety

Success criteria for Phase 1:
- the site still looks like the same portfolio
- the visual system feels more polished
- readability improves
- spacing and hierarchy are cleaner
- the build remains stable
- no unfinished partial refactors remain

---

### Phase 2 — Typography + Hierarchy

Potential future work:
- hero text refinement
- headline scale
- body copy rhythm
- metadata styles
- section-heading system

---

### Phase 3 — Layout Chrome

Potential future work:
- header/nav refinement
- footer cleanup
- spacing framework across sections
- container consistency

---

### Phase 4 — Component Polish

Potential future work:
- cards
- buttons
- badges
- metadata rows
- project previews
- hover states

---

### Phase 5 — Section Refinement

Potential future work:
- hero
- about
- experience
- selected work
- CTA/footer flow

---

### Phase 6 — Mobile + Interaction Polish

Potential future work:
- responsive spacing cleanup
- tap targets
- visual density on small screens
- subtle motion or interaction polish if appropriate

---

## Guardrails

### Stability
- Keep all existing pages functional
- Keep all routes, handlers, and links working
- Preserve analytics and click behavior if present

### Design Discipline
- Favor readability over novelty
- Keep accent usage restrained
- Avoid turning the portfolio into a generic SaaS landing page
- Avoid visual noise
- Maintain a premium, calm, product-oriented presentation

### Implementation Discipline
- Prefer centralized styling over one-off hacks
- Reuse existing components where possible
- Avoid unnecessary file churn
- Defer risky work instead of forcing it into the current phase

---

## Acceptance Requirements for Phase 1

- site compiles successfully
- core pages still function
- visual hierarchy is improved
- spacing is more consistent
- supporting text and metadata feel more polished
- UI feels more cohesive
- no major regression is introduced
- `docs/johntuttle-redesign-handoff.md` is updated with implementation notes

---

## Required Output After Phase 1

Return a concise implementation summary containing:

1. Audit findings
2. Proposed phase plan
3. What changed in Phase 1
4. Exact files changed
5. What to test manually
6. What was deferred and why
7. Recommended Phase 2
8. Confirmation that `docs/johntuttle-redesign-handoff.md` was updated

---

## Important

If the existing site already contains prior redesign work, partial component refactors, or experiments, integrate carefully rather than replacing them wholesale.

Treat this as a guided refinement pass based on the Claude handoff document, not a fresh redesign.
Execute only Phase 1 and stop.