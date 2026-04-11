# V1 Execution Task List

## Purpose

This document converts `docs/PR_GUIDANCE_V1_SRS.md` into concrete workstreams.

Suggested owner labels:
- Founder
- Product/Ops
- Design/Content
- Engineering
- Partnerships

Adjust owners based on team size.

## Workstream 1: Scope Lock

Owner: Founder

- Confirm the exact first 1-2 supported case types for V1
- Confirm what counts as early-stage PR clarity/prep vs too-late-stage
- Confirm unsupported-case boundaries
- Confirm the formal messaging boundary
- Confirm stop conditions and success thresholds

Definition of done:
- team agrees on first supported case types
- no one on team describes the product as agent replacement

## Workstream 2: Rule System

Owner: Founder / Product-Ops

- Turn support eligibility rules into a checklist
- Turn triage rules into a decision table
- Turn staleness rules into a decision table
- Turn expert handoff triggers into a decision table
- Define examples for Green, Yellow, and Red cases
- Define contradiction-handling rule for incomplete/conflicting intakes

Definition of done:
- rules are written in one place
- two team members can classify the same synthetic case consistently

## Workstream 3: Synthetic Validation

Owner: Product-Ops

- Create tracker rows for the 10 synthetic cases
- Run each case through support check
- Run each case through triage
- Assign user-facing status wording for each case
- Check handoff trigger decision for each case
- Check roadmap staleness handling for each case
- Log inconsistencies and fix rule tables

Definition of done:
- all 10 synthetic cases are completed
- inconsistent decisions are resolved
- rule updates are captured in the SRS or ops docs

## Workstream 4: Landing Page

Owner: Design/Content

- Finalize headline, subheadline, and CTA
- Finalize trust stack copy
- Finalize “who it’s for” and “who it’s not for” sections
- Finalize boundary note explaining guidance vs licensed review
- Finalize beta offer copy
- Implement a simple signup form

Definition of done:
- page explains the offer in under 10 seconds
- page does not imply legal sign-off or full-service migration support

## Workstream 5: Intake Flow

Owner: Product / Design / Engineering

- Build the 3-step intake flow
- Add helper copy for confusing questions
- Keep intake short and calm
- Ensure no document upload is requested in V1
- Add submission confirmation screen/message
- Define where intake data writes into the tracker

Definition of done:
- intake captures enough info for support + triage + action plan
- intake does not feel like a legal form wall

## Workstream 6: Case Tracker Setup

Owner: Product-Ops / Engineering

- Choose the tool for the tracker
- Create required fields from the SRS
- Define case status values
- Add roadmap version, created date, and expiry date fields
- Add follow-up date field
- Add drop-off reason field
- Add paid/unpaid field
- Add expert-handoff-required field

Definition of done:
- every case can be tracked from signup to closure in one place
- no case depends on WhatsApp or memory as the source of truth

## Workstream 7: Guided Action Plan

Owner: Product / Design / Founder

- Create the guided action plan template
- Lock the top-section hierarchy:
  - current status
  - top 3 next actions
  - guidance status
  - what is still missing
  - when expert review is recommended
  - expiry date
- Add plain-English case summary section
- Add key risks section
- Add checklist section
- Add messaging boundary note

Definition of done:
- any team member using the template produces the same structure
- the template feels like a path, not a report dump

## Workstream 8: Delivery And Follow-Up Ops

Owner: Product-Ops

- Write the delivery message template
- Write the unsupported-case decline/referral message
- Write the stale-roadmap re-review message
- Write follow-up message templates
- Define when cases move to `waiting_on_user`
- Define when cases move to `needs_re-review`

Definition of done:
- users receive consistent wording
- the team can move cases without improvising every message

## Workstream 9: Partnerships / Expert Handoff

Owner: Founder / Partnerships

- Define what qualifies as expert handoff
- Identify the initial licensed expert or partner process
- Define what information is passed during handoff
- Define how partner quality/reliability will be monitored
- Define fallback if partner is unavailable

Definition of done:
- the team knows exactly when and how to escalate
- partner handoff does not feel improvised

## Workstream 10: Beta Pricing And Payment

Owner: Founder

- Choose the beta pricing point
- Decide whether there is one package or two tiers
- Define when payment is requested
- Define refund boundary if expectations mismatch

Definition of done:
- team knows what is being sold
- users are charged from the start

## Workstream 11: Outreach And Recruitment

Owner: Founder / Growth

- Identify initial Nepali student groups and channels
- Write outreach messages for WhatsApp/Facebook/community groups
- Create a short founder story message that explains the problem clearly
- Recruit first 3 users manually
- Expand to 10 once the first cases confirm the flow works

Definition of done:
- at least 3 real target users enter the funnel

## Workstream 12: Beta Measurement

Owner: Founder / Product-Ops

- Track signup count
- Track intake completion rate
- Track paid conversion rate
- Track roadmap turnaround time
- Track reclassification rate
- Track drop-off reasons
- Track expert-review request rate
- Track user feedback on whether confusion was reduced

Definition of done:
- first 10 cases produce usable data
- team can answer whether the wedge is working

## Workstream 13: Review Gates

Owner: Founder

### Gate 1: before real users
- 10 synthetic cases completed
- rule inconsistencies resolved
- landing page and intake live
- tracker ready
- action plan template ready

### Gate 2: after first 3 real users
- confirm users understand the offer
- confirm no major expectation mismatch
- confirm team can deliver within promised time

### Gate 3: after first 10 real users
- decide whether to continue, narrow further, or revise

## Suggested Sequencing

### Week 1
- lock supported case types
- finalize rule tables
- run synthetic cases
- set up tracker

### Week 2
- ship landing page
- ship intake
- finalize action plan template
- finalize delivery scripts

### Week 3
- recruit first 3 real users
- deliver manually
- log confusion points and expectation mismatches

### Week 4
- recruit up to 10 real users
- evaluate success metrics and stop conditions

## Unassigned Decisions Still Open

- exact first 1-2 supported case types
- exact beta price
- exact licensed expert handoff setup

These should be decided before broad outreach.
