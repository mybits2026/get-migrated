# V1 Sprint Board

## Purpose

This is the week-by-week execution board for PR Guidance V1.

Use this together with:
- `docs/TEAM_BRIEFING_V1.md`
- `docs/PR_GUIDANCE_V1_SRS.md`
- `docs/V1_EXECUTION_TASK_LIST.md`

## Sprint Goal

Get from planning to a real manual beta with the first 10 target users, while keeping the wedge narrow and the trust boundary clean.

## Operating Rule

Do not expand scope during these sprints.

V1 is still:
- service-first
- no-login
- no document upload
- early-stage clarity and prep only
- licensed expert review only when needed

## Week 1: Lock The System

### Goal

Turn strategy into a working internal operating model.

### Must ship this week

- Decide the first 1-2 supported case types
- Finalize support eligibility rules
- Finalize triage rules
- Finalize staleness rules
- Finalize expert handoff trigger rules
- Set up the single source of truth case tracker
- Create 10 synthetic cases
- Run all 10 synthetic cases through the rules
- Resolve inconsistencies in support/triage decisions

### Deliverables

- updated SRS if any rules change
- working case tracker
- completed synthetic-case test pass
- agreed rule tables

### Success criteria

- two team members can classify the same synthetic case the same way
- unsupported cases are easy to reject
- Green / Yellow / Red logic is consistent internally

### Risks this week

- rules are still too vague
- supported cohort is still too broad
- team members interpret boundaries differently

### If blocked

- cut case types further
- simplify rule wording
- do not move to Week 2 until synthetic cases are stable

## Week 2: Ship The Beta Surface

### Goal

Create the user-facing funnel and the internal delivery assets.

### Must ship this week

- Final landing page copy
- Live landing page
- Live beta signup form
- Live 3-step intake flow
- Guided action plan template
- Delivery message template
- Unsupported-case decline/referral script
- Stale roadmap re-review script
- Follow-up message templates
- Beta pricing decision

### Deliverables

- working landing page
- working intake form
- final action plan template
- message/script pack for beta ops

### Success criteria

- a user can go from landing page to completed intake without confusion
- the copy does not imply legal sign-off
- the action plan template feels like a path, not a report

### Risks this week

- landing page still sounds like generic immigration content
- intake feels too bureaucratic
- action plan still reads like a PDF dump

### If blocked

- simplify copy
- shorten intake
- remove anything that feels like enterprise software or agent replacement

## Week 3: Start Real Beta With First 3 Users

### Goal

Test the system with real people before scaling to 10.

### Must ship this week

- Recruit first 3 real target users
- Run them through the intake
- Deliver guided action plans manually
- Log all follow-ups in the tracker
- Track payment status from day one
- Track confusion points and trust objections
- Track whether users understand the product boundary

### Deliverables

- first 3 real cases completed or actively in progress
- real-world notes on confusion, trust, and willingness to pay
- updated scripts if expectation mismatch appears

### Success criteria

- users understand what the product is and is not
- at least some users pay
- the team can deliver within promised turnaround time

### Risks this week

- users expect full legal migration advice
- users do not trust a no-login experience
- handoff language is unclear

### If blocked

- tighten positioning again
- improve messaging before recruiting more users
- do not scale outreach until expectation mismatch is fixed

## Week 4: Expand To 10 Users And Evaluate

### Goal

Pressure-test the wedge with enough real users to make a real decision.

### Must ship this week

- Recruit up to 10 total real users
- Deliver all cases manually
- Track reclassification rate
- Track drop-off reasons
- Track expert-review request rate
- Track whether users say confusion was reduced
- Evaluate stop conditions
- Decide continue, narrow, revise, or pause

### Deliverables

- first-10-user results summary
- wedge decision memo
- updated next-step recommendation

### Success criteria

- enough paid demand exists to justify continuing
- supported cases repeat enough to productize later
- trust boundary remains intact

### Risks this week

- too many unsupported cases
- too little willingness to pay
- expert handoff unreliable
- too much bespoke manual work with no repeatable pattern

### If blocked

- narrow the wedge further
- change pricing or positioning
- pause and revise before adding software

## Weekly Rituals

Run these every week.

### Monday

- review open cases
- review blocked cases
- review turnaround deadlines
- review handoff needs

### Midweek

- check drop-off reasons
- check confusing intake questions
- check whether users misunderstand the offer

### Friday

- review metrics
- review stop conditions
- decide what to keep, cut, or tighten next week

## Core Metrics To Review Weekly

- signups
- intake completion rate
- paid conversion rate
- roadmap turnaround time
- reclassification rate
- drop-off reasons
- expert-review request rate
- user-reported confusion reduction

## Stop Conditions

Pause and revise if:

- fewer than 5 of the first 10 serious users pay
- triage remains inconsistent
- users repeatedly think we are offering legal sign-off
- unsupported cases dominate
- expert handoff is unreliable
- the action plan is not clear enough for users to act on

## Team Rule

For the next 4 weeks, optimize for learning speed and trust quality.

Do not optimize for:
- polish for its own sake
- broad scope
- fake traction
- building software before the manual pattern is proven
