

## Problem

The headline "FROM TALENT" is wrapping across two lines on the current viewport because `text-6xl` (3.75rem / 60px) on mobile and `text-8xl` (6rem / 96px) on desktop is too large for the container width. The user wants exactly two lines:
- Line 1: FROM TALENT
- Line 2: TO IMPACT

## Solution

1. **Add `whitespace-nowrap`** to each `<span>` block to prevent "FROM TALENT" from breaking into two lines.
2. **Use responsive font sizing** that fits the container — switch to viewport-based or smaller fixed sizes. Since the text is in a 2-column grid (50% width on desktop), `text-8xl` (96px) is too wide for "FROM TALENT" to fit on one line.
3. Reduce sizes slightly: `text-5xl sm:text-6xl lg:text-8xl` and add `whitespace-nowrap` so it never wraps mid-phrase. Alternatively, use `text-[clamp(3rem,8vw,6rem)]` for fluid sizing that always fits.

**Recommended approach**: Add `whitespace-nowrap` to each span and slightly reduce mobile font size to `text-5xl` so "FROM TALENT" fits on one line on smaller screens. Desktop `text-8xl` should be fine in the grid column width.

### Changes in `src/components/Hero.tsx`:
- Line 110: Change `text-6xl sm:text-7xl lg:text-8xl` to `text-[2.8rem] sm:text-7xl lg:text-8xl`
- Lines 112, 115: Add `whitespace-nowrap` to each `<span>`

