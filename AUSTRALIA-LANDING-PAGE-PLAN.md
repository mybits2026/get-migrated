# Australia Landing Page Plan

## Goal

Create a Nepal -> Australia landing page that feels like a trusted corridor specialist, not a generic study-abroad consultancy. The page should answer one question quickly: can this team help someone like me move from Nepal to Australia with clarity and confidence?

## Core Positioning

- Primary promise: `Nepal to Australia, planned properly.`
- Supporting promise: course, scholarship, visa, and pre-departure guidance for Nepali students who want a clearer path.
- Conversion principle: reduce anxiety first, then ask for the lead.
- Trust principle: specific route clarity beats generic aspiration.

## Information Architecture

### Section Order

1. Hero
2. Quick Self-Qualifier
3. Nepal -> Australia Roadmap
4. Why Australia for Nepali Students
5. Course + City Match
6. Money Reality
7. Documents + Visa Confidence
8. Student Stories
9. Counsellor Trust Block
10. FAQ
11. Final CTA + Short Lead Form

### Section Jobs

- Hero: establish corridor specialization, calm authority, and primary action.
- Quick Self-Qualifier: answer "is this page for someone like me?" immediately after the hero.
- Roadmap: turn the route into a finite, understandable process.
- Why Australia: justify destination choice without drifting into generic marketing.
- Course + City Match: prove route knowledge with concrete academic and city pairings.
- Money Reality: replace wishful thinking with realistic planning.
- Documents + Visa Confidence: show where the route usually slows down and how guidance reduces risk.
- Student Stories: prove real outcomes from the same corridor before asking for trust in staff.
- Counsellor Trust Block: show who the user will actually speak with and how to reach them.
- FAQ: remove last-mile objections.
- Final CTA + Form: convert with low friction and high clarity.

### Page Flow

```text
HERO
  -> "What is this?"
  -> "Why trust this corridor specialist?"
  -> Primary CTA / Secondary CTA

QUICK SELF-QUALIFIER
  -> "Is this route for me?"

ROADMAP
  -> "What happens next?"

WHY AUSTRALIA / COURSE + CITY MATCH / MONEY / DOCUMENTS
  -> "Is this route realistic, relevant, and manageable?"

STUDENT STORIES
  -> "Have people like me actually done this?"

COUNSELLOR TRUST BLOCK
  -> "Who will help me and how do I contact them?"

FAQ + FINAL FORM
  -> "I understand enough to take the next step."
```

## Hero

- Headline: `Nepal to Australia, planned properly.`
- Subhead: `Courses, scholarships, visa guidance, and step-by-step support for Nepali students who want a clearer path to studying in Australia.`
- Primary CTA: `Book Free Counselling`
- Secondary CTA: `See Australia Roadmap`
- Proof row:
  - Australia-focused counsellors
  - Visa and document guidance
  - Scholarship and budget planning
  - Support from shortlist to departure
- Hero hierarchy:
  1. Corridor specialization label
  2. Headline
  3. Subhead
  4. CTA pair
  5. Proof row
- Visual direction: poster-like hero with one strong route visual anchor, not a card grid.

## Quick Self-Qualifier

- Title: `Is Australia the right next step for you?`
- Purpose: help visitors self-identify before they process the full route.
- Segments:
  - `+2 student / bachelor's after +2`
  - `Bachelor's for master's applicants`
  - `Students targeting PR-aware careers or post-study work`
- CTA: `Talk to an Australia counsellor`
- Design rule: this should feel like a short sorting aid, not a decorative feature-card section.

## Nepal -> Australia Roadmap

- Title: `Your path in 6 clear steps`
- Steps:
  1. Choose course and city
  2. Check eligibility
  3. Shortlist universities
  4. Prepare documents and SOP
  5. Apply for visa
  6. Get ready to depart
- Support line: `No guesswork. No vague promises. Just the next right step.`
- Display rule: use clear sequencing and mono-style metadata so the process feels factual.

## Why Australia for Nepali Students

- Title: `Why students from Nepal choose Australia`
- Blocks:
  - Globally recognized degrees
  - Post-study work pathways
  - Part-time work while studying
  - Strong options in Sydney, Melbourne, Brisbane, Adelaide, Perth
- Tone: practical, not dreamy. This section supports the route; it should not become a generic destination ad.

## Course + City Match

- Title: `Popular choices for Nepali students`
- Rows:
  - `IT / Data / Cybersecurity -> Melbourne, Sydney`
  - `Nursing / Public Health -> Brisbane, Adelaide`
  - `Business / Accounting -> Sydney, Melbourne`
  - `Hospitality / Cookery -> Gold Coast, Adelaide`
- Design rule: this should read like route guidance, not a pricing table or service menu.

## Money Reality

- Title: `Let's talk budget honestly`
- Blocks:
  - Tuition range
  - Living costs by city
  - Scholarship opportunities
- Supporting line: `We help you plan for what is realistic, not what sounds nice in an ad.`
- Emotional tone: sober but supportive. State tradeoffs plainly, then show how clarity helps.

## Documents + Visa Confidence

- Title: `What usually slows students down`
- Checklist:
  - Academic transcripts
  - English test score
  - SOP and supporting documents
  - Financial documentation
  - GTE / visa prep
- CTA: `Get your document review`
- Design rule: this section should feel procedural and confidence-building, not fear-based.

## Student Stories

- Title: `From Nepal to campus in Australia`
- Order: show this before the counsellor block.
- Format: route snapshots, not generic testimonial cards.
- Required fields per story:
  - Origin city in Nepal
  - Course / study level
  - Destination city and university if available
  - One-line outcome or result
  - Short quote
- Preferred places: Kathmandu, Pokhara, Chitwan where possible.
- Trust rule: never use stock-photo testimonials.
- Fallback: if full names or photos are unavailable, use anonymized but verified route snapshots.

## Counsellor Trust Block

- Title: `Talk to someone who knows this corridor`
- Show:
  - Counsellor photo
  - Office locations
  - Phone / WhatsApp
  - Office hours
- CTA: `Book Your Free Session`
- Purpose: convert credibility into contact, after outcome proof is established.

## FAQ + Final CTA

- FAQ questions:
  - How much does it cost to study in Australia from Nepal?
  - Which intake should I target?
  - Can I get scholarships?
  - How long does the visa process take?
  - Which courses are best for jobs after graduation?
- Final CTA headline: `Ready to plan your Australia move?`
- Form fields:
  - Name
  - Phone
  - Study level
  - Preferred intake

## Interaction States

| Feature | Loading | Empty | Error | Success | Partial |
|--------|---------|-------|-------|---------|---------|
| Final lead form | Disable submit, show progress text and calm waiting state | Not applicable | Inline field errors plus submission error with retry and WhatsApp fallback | Inline success panel with response-time promise, next steps, and WhatsApp backup | Accept partial browsing without forcing completion until submit |
| FAQ | Accordion expands instantly with clear state change | Not applicable | If dynamic content fails later, show static fallback questions | User gets answer inline without losing scroll position | Not applicable |
| Student stories | Reserve layout and skeleton text if async later | If no stories are available, show one honest note explaining stories are being verified and keep counsellor block visible | Broken image or missing proof falls back to text-only verified snapshot | Story content reinforces route credibility | Use anonymized verified stories if names/photos are unavailable |
| Document review CTA | Button remains visible and tappable | Not applicable | If link or form target fails, show direct phone/WhatsApp contact | User reaches review flow or booking action | Not applicable |

## User Journey Storyboard

| Step | User Does | User Feels | Plan Support |
|------|-----------|------------|--------------|
| 1 | Lands on page | Unsure, cautious | Corridor-specific hero, strong promise, immediate CTA |
| 2 | Scans qualifier | Curious, self-checking | Quick Self-Qualifier confirms fit |
| 3 | Reads roadmap | Less overwhelmed | Finite six-step process removes vagueness |
| 4 | Reviews destination/course/budget/documents | Serious, comparing options | Practical route details and cost realism |
| 5 | Reads stories | More confident | Proof from similar journeys in the same corridor |
| 6 | Checks counsellor block | Reassured, legitimacy-focused | Visible humans, offices, hours, contact details |
| 7 | Submits form | Hopeful but anxious | Inline success panel explains what happens next |

## AI Slop Guardrails

- Do not use a generic SaaS feature grid as the first impression.
- Do not turn student stories into interchangeable testimonial cards.
- Do not center every heading and paragraph by default.
- Do not use decorative icon circles as section filler.
- Do not spread coral accent across large surfaces.
- Do not use busy imagery behind text.
- Do not let the page rhythm become "hero -> three cards -> three cards -> three cards".
- Each section must have one job.
- If a layout decision feels generic, prefer route-specific editorial structure over card repetition.

## Design System Alignment

- Calibrate all visuals against `DESIGN.md`.
- Typography:
  - `Fraunces` for hero and major section headings.
  - `Instrument Sans` for body, UI, and form copy.
  - `IBM Plex Mono` for route labels, step markers, checklist metadata, and small procedural details.
- Color:
  - Navy-led structure for headings and major surfaces.
  - Eucalyptus for route signals and supportive metadata.
  - Coral reserved mainly for primary CTAs and select emphasis only.
  - Warm support surface may appear in reassurance sections such as budget or trust-adjacent content.
- Layout: poster-like hero followed by scannable conversion blocks.

## Responsive Behavior

- Mobile:
  - Single-column flow.
  - Keep hero CTA pair stacked with clear spacing.
  - Self-Qualifier becomes vertically stacked choices with strong tap targets.
  - Roadmap steps remain sequential and easy to scan.
  - Student stories become stacked route snapshots.
  - Add a restrained sticky mobile CTA bar with one primary action and one secondary contact option.
- Tablet:
  - Split grids where comparison helps, especially proof and route content.
  - Preserve reading order from mobile.
- Desktop:
  - Use wider split layouts where they increase clarity, not card density.

## Accessibility Requirements

- Minimum touch target: `44px`.
- Strong visible focus states for all links, buttons, and FAQ controls.
- Proper labels for every form field.
- FAQ interactions use semantic buttons and readable expanded states.
- Maintain contrast in line with the navy-led design system.
- Provide truthful alt text for route and people imagery.
- Do not rely on color alone to communicate status or emphasis.

## Not in Scope

- Dark mode: not a priority for this landing page.
- Multi-country landing variations: this plan is corridor-specific to Nepal -> Australia.
- Deep university database or searchable listings: the page should guide and convert, not become a directory.
- Long-form CMS story archive: only enough route-proof content to build trust.

## What Already Exists

- `DESIGN.md` defines the corridor-specific design system and visual constraints.
- The current `src/app/page.tsx` already uses the same hero promise and trust-first page structure.
- The current codebase already uses `Fraunces`, `Instrument Sans`, `IBM Plex Mono`, and the approved navy/eucalyptus/coral palette.
- Existing page patterns worth reusing: route hero, mono metadata labels, split editorial layouts, trust-first sequencing.

## Review Decisions Made

1. Keep `Quick Self-Qualifier` immediately after the hero.
2. Keep `Student Stories` before `Counsellor Trust Block`.
3. Use an inline success panel after form submission, with response-time promise, next steps, and WhatsApp fallback.
4. Keep the budget section sober but supportive.
5. Format stories as route snapshots, not generic testimonial cards.
6. Reserve coral mainly for CTAs and select emphasis.
7. Add a restrained sticky mobile CTA bar with one primary and one secondary action.
8. Allow anonymized but verified story snapshots if full names/photos are unavailable.

## Unresolved Decisions

- None from this review.

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | — |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | — | — |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 0 | — | — |
| Design Review | `/plan-design-review` | UI/UX gaps | 1 | issues_open | score: 6/10 -> 9/10, 8 decisions |

**UNRESOLVED:** 0

**VERDICT:** DESIGN REVIEW COMPLETE — eng review required before implementation is considered fully review-cleared.
