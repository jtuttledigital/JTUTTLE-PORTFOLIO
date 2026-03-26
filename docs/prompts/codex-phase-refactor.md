## Usage

Copy this prompt into Codex and run against the repo.
Primary reference doc:
- docs/google-stitch-guidelines.md

You are working inside an existing Next.js portfolio codebase.

Primary instruction:
Use the file `docs/google-stitch-guidelines.md` as the implementation guide for a phased UI refinement pass inspired by the “Obsidian Craft” redesign direction.

This is a controlled refactor, not a rebuild.

Core objective:
Evolve the current portfolio toward the Stitch-inspired dark editorial aesthetic while preserving the existing site structure, content, functionality, and deployability at every step.

Before making changes:
1. Read `docs/google-stitch-guidelines.md` fully.
2. Audit the current codebase structure, including:
   - app/
   - components/
   - lib/
   - styling system
   - current typography setup
   - current project/content data flow
3. Identify the safest points of integration.
4. Compare the guideline doc to the actual codebase and note where the file structure or component names differ.
5. Do not assume the guideline’s suggested file structure already exists.

Working rules:
- Do NOT do a full redesign in one pass.
- Do NOT break the build.
- Do NOT rewrite architecture unless absolutely necessary.
- Do NOT remove or simplify content just to match the mockup.
- Do NOT blindly recreate the Stitch mockup 1:1 if the existing site already has better structure.
- Prefer small, reversible, testable improvements.
- Reuse existing components where possible.
- If something is risky, defer it to a later phase and explain why.

Design direction to preserve:
- Dark editorial aesthetic
- Deep black / charcoal surfaces
- Lime accent `#ADFF2F`
- Space Grotesk typography if safe to implement
- High contrast, minimal, systems-oriented feel
- Selective accent usage on highlights, dates, tags, small metadata, and emphasis text
- Stronger hierarchy, spacing, and card polish
- Mobile experience must remain clean and readable

Execution workflow:
You must work in phases and stop after completing one full safe phase.

Required process:
1. Read the guideline doc
2. Audit the current implementation
3. Propose a phase plan based on both the doc and the actual codebase
4. Execute ONLY Phase 1
5. Verify the phase is complete and coherent
6. Update `docs/google-stitch-guidelines.md` with:
   - what was implemented
   - files changed
   - deviations from original plan
   - what should happen in the next phase
7. Stop and report back

Phase structure:
Phase 1 — Foundation / Design Token Pass
Goal:
Introduce the redesign language at the token/global-style level without destabilizing layout.

Safe tasks for Phase 1:
- Add or refine global color tokens to match the Obsidian Craft direction
- Safely introduce the lime accent color `#ADFF2F`
- Set or prepare typography foundation for Space Grotesk if low-risk
- Update global backgrounds / text defaults only where safe
- Apply accent color to very small UI elements only if appropriate:
  - highlighted words
  - dates
  - labels
  - badges
  - metadata
- Preserve all existing layout and content structure

Avoid in Phase 1:
- major layout rewrites
- hero restructuring
- project card redesign
- navigation replacement
- animation work
- large component moves/renames unless required for safety

Phase 2 — Global Layout Chrome
Potential future work:
- navbar/header refinement
- footer cleanup
- drawer/menu direction
- container spacing rhythm

Phase 3 — Text-Heavy Sections
Potential future work:
- hero typography refinement
- experience index styling
- headline emphasis treatment
- editorial spacing improvements

Phase 4 — Project Presentation
Potential future work:
- project card polish
- image treatment
- lime badges
- metadata consistency
- hover refinement

Phase 5 — About / Manifesto / CTA
Potential future work:
- manifesto section treatment
- quote block styling
- stack/focus metadata
- footer CTA polish

Phase 6 — Motion / Interaction / Mobile Cleanup
Potential future work:
- menu animation
- subtle hover behavior
- responsive spacing
- mobile hierarchy validation

Implementation guardrails:
- Keep all existing routes functional
- Preserve project links and click behavior
- Preserve analytics / props / handlers
- Preserve image loading correctness
- Use `next/image` properly where relevant
- Keep accessibility and text contrast high
- Avoid introducing inconsistent one-off classes
- Prefer centralized styling and reusable primitives
- If using wrappers or theme scopes, do so intentionally and minimally

Acceptance requirements for Phase 1:
- Site compiles successfully
- Site remains visually coherent and complete
- Core pages still work
- Theme direction is visibly improved
- Accent usage feels restrained and intentional
- Text contrast remains strong
- No partial refactor is left in an unfinished state

Required output after Phase 1:
Return a concise implementation summary with:
1. Audit findings
2. Phase plan
3. What changed in Phase 1
4. Exact files changed
5. What to test manually
6. What was deferred and why
7. Recommended Phase 2
8. Confirmation that `docs/google-stitch-guidelines.md` was updated with implementation notes
## 9. Implementation Logging

For each completed phase, append:

### Phase X — [Name]
- Date:
- Objective:
- Files changed:
- Summary of changes:
- Risks encountered:
- Deferred items:
- Manual test checklist:
- Result:

Important:
If the existing codebase already contains prior redesign work or partial UI changes, integrate with them carefully instead of replacing them wholesale.
Treat the live build as the source of truth and the guideline doc as a visual/system direction document.