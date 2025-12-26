# J. Tuttle Digital – Developer README  
**Architecture, layout rules, and guardrails for future development**  
*(Internal reference used by VS Code AI, ChatGPT, and Codex agents)*

---

## 🚩 Purpose of This Document
This README exists so *any* AI tool (ChatGPT / Codex / VS Code Chat) always understands:

- The layout architecture  
- The spacing system  
- The grid system  
- The overlay & modal rules  
- Z-index stacking  
- What NOT to modify unless explicitly asked  

AI agents often lose context in long sessions — this document prevents drift.

---

# 1. 🎨 Layout Philosophy  
The site follows a “Joseph Zhang style” 3-column responsive layout:

```
|<----15px---->| [Col 1] [15px] [Col 2] [15px] [Col 3] |<----15px---->|
```

**Applies globally to:**
- Header  
- About / Team / Description rows  
- Tile grid  
- Footer (BottomBar)  
- Overlay modals  

### Column Responsibilities:
| Column | Meaning | Used For |
|-------|---------|----------|
| Col 1 | Intro content | ABOUT |
| Col 2 | Career / metadata | TEAM |
| Col 3 | Descriptions / statements | DESCRIPTION, headers, footer alignment |

Spacing system is symmetric left + right, must always stay **15px**.

---

# 2. 🧱 Grid System Rules (Do Not Break)

All major layout sections use the shared `LayoutGrid`:

```tsx
grid-template-columns: repeat(3, minmax(0, 1fr))
gap-x: 15px;
padding-left: 15px;
padding-right: 15px;
```

### DO NOT CHANGE:
❌ The number of columns  
❌ The column widths  
❌ The 15px left/right padding  
❌ The 15px internal gutters  

Unless instructed explicitly by the developer (John Tuttle).

---

# 3. 📌 Header Behavior

### Header is:
- **Fixed to top**
- **z-index: 50**
- **Always visible**
- Overlay/modal content scrolls **behind** the header
- 15px left/right padding always maintained

Never let content overlap *above* the header.

---

# 4. 📌 BottomBar (Footer) Behavior

### Footer is:
- **Fixed to bottom**
- **z-index: 30** (below header, above backdrop, below content)
- **Always anchored to the bottom of the browser window**
- Revealed when main content scrolls up

### Required behavior:
Content area must include **140px of transparent padding** at the bottom so the footer becomes visible when the user scrolls to the end.

### Padding rule:
```tsx
<main className="pb-[140px]"> ... </main>
```

This ensures the content scrolls *past* its natural end to reveal the footer behind it.

---

# 5. 🚫 What AI Must *NOT* Change
Without explicit instruction:

### DO NOT MODIFY:
- The 3-column `LayoutGrid`
- Any 15px paddings or gutters
- Header fixed behavior
- Footer fixed behavior
- Z-index stacking order
- The 140px bottom spacer in `<main>`
- Modal scroll-lock behavior
- Modal grid structure  
- Tile grid column widths  

These are foundational architecture decisions.

---

# 6. 🖼 Project Modal Rules
Modal (`ProjectModal`) behavior:

### 6.1 Overlay behaviors
- Backdrop dim uses `z-30`
- Project content container uses `z-40`
- Header remains visible (`z-50`)
- Footer remains visible (`z-30`)
- Modal scrolls **independently**

### 6.2 Close button
- Large **X** in top-right is required  
- The header itself may become a clickable “back” navigational element in future iterations

### 6.3 Modal padding:
```
left/right: 15px  
top padding: enough to clear header (pt-24)  
bottom: natural content height  
```

### 6.4 Modal grid:
```
[left narrative] [middle meta] [right tools/links]
```

### 6.5 Allowed modifications:
- Adding gallery items  
- Adding sections  
- Adding second image row  
(As long as core grid stays intact)

---

# 7. 🧩 Tile Hover & Interaction Rules
### Hover behavior requirements:
- Subtle inner-shadow OR gradient lift  
- Border lightening on hover  
- Entire tile is clickable  
- Opens the modal  

### Tile grid behaviors:
- Must remain exactly **3 columns wide**
- Must respect 15px gaps
- Must not shift column widths at responsive breakpoints except under `md:` rules defined in LayoutGrid

---

# 8. 🧭 Responsive Rules
IMPORTANT:

- Mobile stacks to 1 column  
- Tablet stacks to 2 columns  
- Desktop stays 3 columns  
- All spacing/padding rules stay consistent regardless of device width

No “special” breakpoints should override the 15px system.

---

# 9. 🔐 Z-Index Stack Summary

| Layer | z-index | Notes |
|-------|---------|-------|
| Header | 50 | Always on top |
| Modal content | 40 | Scrollable |
| Footer (BottomBar) | 30 | Fixed bottom |
| Modal backdrop | 30 | Same layer as footer but underneath due to DOM order |
| Main content | 10–20 | Scrolls naturally |
| Page background | 0 | Base |

Never modify the z-index ordering unless the developer asks.

---

# 10. 🗂 Files AI Should Be Aware Of

### Layout & Structure
- `/components/LayoutGrid.tsx`
- `/components/Header.tsx`
- `/components/BottomBar.tsx`
- `/app/page.tsx`
- `/app/layout.tsx`

### Projects
- `/components/ProjectGrid.tsx`
- `/components/ProjectModal.tsx`
- `/components/HoverLink.tsx`

### Styling
- `globals.css`
- `tailwind.config.js`

---

# 11. 🌱 Future Enhancements (Do Not Start Unless Asked)

Ideas intentionally **NOT** implemented yet:

- Nested 2-column layout inside Column 2  
- ABOUT bleeding partially into Column 2  
- Animated tile hover  
- Header clickable collapse  
- Modal microinteractions  
- Smooth transitions between page + modal  
- The "design system" page  

These must only be built upon direct request.

---

# 12. 💬 AI Work Protocol (How VS Code / ChatGPT Must Behave)

When making changes:

### ALWAYS CONFIRM:
> “Do you want this applied globally or only to this component?”

### ALWAYS FOLLOW:
> “Do not modify layout architecture unless explicitly asked.”

### ALWAYS ASK IF UNSURE:
> “Should this follow the 15px spacing and 3-column alignment rules?”

Consistency > creativity when working inside this codebase.

---

# 13. 📌 Developer Notes for John Tuttle (Project Owner)

- You may override any architectural rule — just state your intention clearly.  
- If you begin a new “layout wave,” update the README and your notes.  
- Codex/VSCode Chat will behave best when this README is open in the editor.

---

# End of Developer README
