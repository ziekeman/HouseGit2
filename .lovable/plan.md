

## Talent Page: Side-by-Side Layout

### Change
Redesign `src/pages/TalentPage.tsx` from a stacked vertical layout to a two-column layout that fits above the fold.

### Layout
- **Full viewport height** (`h-screen`) with no scrolling needed
- **Left column (~45%)**: Talent image, full height, with rounded corners matching site style
- **Right column (~55%)**: Name heading (font-agrandir, uppercase), bio text, and social media buttons — vertically centered
- Back button stays fixed top-left
- Social buttons as a horizontal row below the bio text
- On mobile: stack vertically with image on top, content below (scrollable)

### File changed
`src/pages/TalentPage.tsx` — complete rewrite of the layout JSX and classes. No other files need changes.

### Spacing & style details
- Outer padding with `p-6` or `p-8`
- Gap between columns: `gap-8 lg:gap-12`
- Image: `object-cover`, rounded-2xl, fills left column height
- Bio text: `text-sm` or `text-base` with `leading-relaxed` to fit longer bios
- For very long bios, right column gets `overflow-y-auto` to scroll internally while image stays fixed

