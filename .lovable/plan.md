

## Plan: Add "Brands we've worked with" Section

### What
Create a new `BrandsSection` component with an asymmetrical logo grid, placed between TalentsSection and CasesSection in the page layout.

### Assets
Copy all 10 uploaded logo images to `src/assets/brands/`:
- Rijksoverheid, Revolut, Odido, Mercedes Gomes, KNVB, Videoland, Under Armour, New York Pizza, Bacardi, bol.com

### Component: `src/components/BrandsSection.tsx`
- Section heading: "Brands we've worked with"
- Asymmetrical grid using CSS Grid with varying column spans and row spans to create visual interest
- Desktop: ~4 columns with some logos spanning 2 cols or having different heights
- Mobile: 2-column grid, still with some asymmetry
- Each logo displayed in a rounded container with padding, subtle background (light gray or white), and hover scale effect
- Logos use `object-contain` to preserve aspect ratios
- Wrapped in `AnimatedSection` for scroll-triggered fade-in with staggered delays

### Layout
- Grid pattern example (desktop):
  - Row 1: small, wide (2-col span), small
  - Row 2: wide (2-col span), small, small  
  - Row 3: small, small, wide (2-col span)
- This creates the asymmetrical feel while remaining clean

### Page Integration
Update `src/pages/Index.tsx` to import and place `BrandsSection` between `TalentsSection` and `CasesSection`.

### Styling
- Match the site's existing aesthetic: clean backgrounds, rounded corners, modern typography
- Section padding consistent with other sections
- Logo containers with subtle hover animations

