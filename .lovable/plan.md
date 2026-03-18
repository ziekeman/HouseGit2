

## Plan: Add Agrandir Font Family & Update Heading Fonts

### What changes

1. **Save all 9 Agrandir font files** to `public/fonts/` (since fonts are referenced via CSS `url()`)

2. **Register all font variants** in `src/index.css` with `@font-face` declarations:
   - Agrandir Regular (weight 400)
   - Agrandir TextBold (weight 700)
   - Agrandir GrandHeavy (weight 900)
   - Agrandir GrandLight (weight 300)
   - Agrandir Narrow (weight 400, separate family)
   - Agrandir Tight (weight 400, separate family)
   - Agrandir ThinItalic (weight 100, italic)
   - Agrandir WideBlackItalic (weight 900, italic — current style)
   - Agrandir WideLight (weight 300, wide family)

3. **Switch h1/h2 to a non-cursive variant** — replace the current `Agrandir Wide` (which is Wide Black, a bold/italic-feeling font) with **Agrandir GrandHeavy** for h1/h2. This is a heavy, non-italic variant that will look strong but not cursive. Other headings (h3-h6) will also use this by default.

4. **Update Tailwind config** `fontFamily.display` to reference the new primary heading font.

### Files modified
- `public/fonts/` — 9 new font files
- `src/index.css` — new `@font-face` rules, update heading font-family
- `tailwind.config.ts` — update display font family reference

