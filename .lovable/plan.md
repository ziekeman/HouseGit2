

## Plan: Individual Talent Pages

### What we're building
Each talent gets a dedicated page (`/talents/:slug`) with their photo, bio, and social media links. Clicking a talent card on the homepage navigates to their page.

### Data structure
Create a centralized talent data file (`src/data/talents.ts`) containing all talent info:
- `id`, `name`, `slug` (url-friendly), `image`, `bio` (the descriptions you provided), `socials` (array of `{ platform, url }`)

Social URLs will be placeholder `#` links for now since no actual URLs were provided — easy to fill in later.

### Files to create/modify

1. **`src/data/talents.ts`** — Central data with all 10 talents including slug, bio text, and social link placeholders (Instagram, YouTube, etc.)

2. **`src/pages/TalentPage.tsx`** — New page component:
   - Reads `:slug` from URL params
   - Shows talent image (large, hero-style)
   - Name heading
   - Bio paragraphs below
   - Social media buttons (Instagram, YouTube icons) linking to their URLs
   - Back button to return to homepage talents section
   - Matches existing design language (font-agrandir, color scheme)

3. **`src/App.tsx`** — Add route: `<Route path="/talents/:slug" element={<TalentPage />} />`

4. **`src/components/TalentsSection.tsx`** — Wrap each talent card in a `<Link to={/talents/${talent.slug}}>` so clicking navigates to their page. Import talent data from the shared data file instead of defining it locally.

### Design approach
- Full-width hero image at top (same aspect ratio as cards)
- Name in large font-agrandir heading
- Bio text in body font, readable width
- Row of social media icon buttons at bottom of image or below name
- Consistent with existing site styling (dark theme, rounded elements)

