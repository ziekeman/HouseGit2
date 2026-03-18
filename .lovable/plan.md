

## Match h2 styles to h1

The h1 in Hero.tsx uses: `text-[2.8rem] sm:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.08em]`

The h2s across the site use smaller sizes and no tight tracking. I'll update all h2s to match the h1's font size, leading, and letter spacing.

### Changes

**1. `src/components/TalentsSection.tsx` (line 82)**
- Change `text-4xl lg:text-5xl` → `text-[2.8rem] sm:text-7xl lg:text-8xl`
- Add `leading-[0.9] tracking-[-0.08em]`

**2. `src/components/CasesSection.tsx` (lines 38, 44, 50)**
- Same changes for all three h2 elements

**3. `src/components/AboutSection.tsx` (lines 15, 18)**
- Change `text-4xl lg:text-6xl` → `text-[2.8rem] sm:text-7xl lg:text-8xl`
- Add `leading-[0.9] tracking-[-0.08em]`
- Remove `leading-none` (replaced by `leading-[0.9]`)

