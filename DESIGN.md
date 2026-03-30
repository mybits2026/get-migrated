# Design System - Get Migrated

## Product Context
- **What this is:** A corridor-focused landing page concept for students in Nepal exploring study options in Australia. The page is designed to feel like a trusted route specialist rather than a generic study-abroad directory.
- **Who it's for:** Nepali students and families comparing courses, budgets, scholarships, visa requirements, and intake timing.
- **Space/industry:** International education, overseas study counselling, student recruitment.
- **Project type:** Student lead-generation landing page.

## Aesthetic Direction
- **Direction:** Editorial trust with corridor-specific warmth.
- **Decoration level:** Intentional.
- **Mood:** Serious, calm, and informed. The page should feel useful before it feels promotional.
- **Reference sites:** https://www.idp.com/nepal/, https://www.aeccglobal.com/np, https://www.applyboard.com/, https://leapscholar.com/

## Typography
- **Display/Hero:** `Fraunces` - Adds gravity and distinction without feeling luxury-brand detached from student needs.
- **Body:** `Instrument Sans` - Clean, contemporary, and readable across dense informational sections.
- **UI/Labels:** `Instrument Sans` - Keeps forms and CTA copy crisp and consistent.
- **Data/Tables:** `IBM Plex Mono` - Gives process details, route markers, and checklist content a more factual, system-like tone.
- **Code:** `IBM Plex Mono`
- **Loading:** Google Fonts via `next/font/google`.
- **Scale:** Hero `4.5rem-3rem`, section title `3rem-2.25rem`, card title `1.5rem`, body `1rem-1.125rem`, meta `0.75rem-0.875rem`.

## Color
- **Approach:** Restrained with one bold accent.
- **Primary:** `#0F2747` - Core trust color for headings, major surfaces, and structural anchors.
- **Secondary:** `#2F7D6D` - Used for route signals, metadata, and subtle reassurance.
- **Accent:** `#FF7A59` - Reserved for primary actions and select emphasis.
- **Neutrals:** `#F8FAFC` background, `#F4E7D3` warm support surface, `#1B1B1B` body text.
- **Semantic:** success `#2F7D6D`, warning `#D98A2B`, error `#B6523A`, info `#0F2747`.
- **Dark mode:** Not a priority for this landing page. If introduced later, preserve the navy-led structure, lower accent saturation slightly, and avoid pure black surfaces.

## Spacing
- **Base unit:** `8px`
- **Density:** Comfortable.
- **Scale:** `2xs(2)` `xs(4)` `sm(8)` `md(16)` `lg(24)` `xl(32)` `2xl(48)` `3xl(64)`

## Layout
- **Approach:** Hybrid. Poster-like hero and proof sections, followed by scannable conversion blocks.
- **Grid:** 1 column on mobile, 2 columns for feature sections on tablet, wider split grids on desktop.
- **Max content width:** `1280px`
- **Border radius:** `sm: 16px`, `md: 24px`, `lg: 32px`, `full: 9999px`

## Motion
- **Approach:** Minimal-functional.
- **Easing:** enter `(ease-out)`, exit `(ease-in)`, move `(ease-in-out)`
- **Duration:** micro `(50-100ms)`, short `(150-250ms)`, medium `(250-400ms)`, long `(400-700ms)`

## Landing Page Messaging
- **Primary promise:** Nepal to Australia, planned properly.
- **Secondary message:** Clear route guidance beats generic study-abroad noise.
- **Conversion principle:** Reduce anxiety first, then ask for the lead.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-30 | Initial design system created | Created for a Nepal -> Australia student lead page with a more specific, trust-first corridor identity. |
