# V1 Feature Specs

## Purpose

This document provides lean implementation-ready feature specs for V1.

It is meant to sit below:
- `docs/PR_GUIDANCE_V1_SRS.md`
- `docs/TEAM_BRIEFING_V1.md`

This is not a long enterprise PRD. It is the minimum detailed spec needed so the team can implement V1 consistently.

## V1 Product Constraints

All feature specs in this document assume:

- service-first V1
- no-login experience
- no document upload/storage in V1
- target cohort is narrow
- product provides clarity, preparation, organization, and next steps
- product does not provide final legal sign-off

## Feature 1: Landing Page

### Purpose

Explain the offer clearly, qualify the right users, and get them into the beta intake flow.

### Primary user

Nepali student or recent graduate in Australia who is early in the PR journey and is looking for clarity and prep guidance.

### User problem being solved

The user needs to quickly understand:
- what the product is
- whether it is for them
- why it is different from generic content or expensive agents
- what the next step is

### Required sections

1. Headline
2. Subheadline
3. Trust stack
4. Problem explanation
5. Solution explanation
6. How it works
7. Who it is for
8. Who it is not for
9. Messaging boundary note
10. Beta CTA

### Required messaging

The page must clearly communicate:
- built for Nepali students and recent graduates in Australia
- personalized action plan, not generic immigration content
- cheaper than full-service agents
- licensed expert review when needed

### CTA behavior

Primary CTA:
- take the user to beta signup / intake start

### Rules

- page must not imply guaranteed PR outcomes
- page must not imply full-service migration agent replacement
- page must not imply final legal migration sign-off
- page must clearly state early-stage clarity/prep focus

### Edge cases

- user is outside target cohort
- user wants final legal help immediately
- user is already at final submission-critical stage

### Expected outcome

Qualified users proceed to intake.
Unqualified users self-filter or are filtered later without confusion.

### Acceptance criteria

- a user can explain the offer in one sentence after reading the page
- the page makes the legal/service boundary clear
- the page does not sound like generic immigration content

## Feature 2: Beta Signup And 3-Step Intake

### Purpose

Collect enough information to decide support fit, triage risk, and produce a first action plan.

### Primary user

Qualified user from the landing page.

### User problem being solved

The user needs to provide information without feeling like they are entering a legal paperwork maze.

### Structure

#### Step 1: Current situation

Required fields:
- current visa
- visa expiry
- studying / working / both
- city and state

#### Step 2: Goal

Required fields:
- what the user is trying to figure out
- biggest PR blocker
- whether they want clarity, prep help, or expert review

#### Step 3: Background

Required fields:
- study background
- work background
- English test status
- anything that may make the case more complex

### UX rules

- intake must be split into 3 clear steps
- helper copy must use plain English
- progress should feel calm, not bureaucratic
- no document upload in V1
- copy should reassure the user that this is for a guided action plan, not full-service agent lock-in

### Validation rules

- required fields must be present before progression
- contradictory answers should be flagged for manual review
- incomplete but recoverable answers should still submit

### Output

On successful submission:
- create a case record in the tracker
- generate case ID
- mark status as `new`

### Post-submit state

User sees confirmation message that:
- the intake was received
- the team will review fit
- the purpose is to prepare a guided action plan if the user is a fit

### Edge cases

- user abandons mid-intake
- user gives contradictory answers
- user states they need final legal review now
- user is outside target cohort

### Acceptance criteria

- intake collects enough info for support + triage + roadmap creation
- users do not confuse this with full legal onboarding
- team can identify missing info without re-asking everything

## Feature 3: Case Tracker

### Purpose

Serve as the single source of truth for every case from signup to closure.

### Primary user

Internal team.

### Problem being solved

Prevent case state from living across WhatsApp, memory, notes, and random docs.

### Required data fields

#### Identity
- case_id
- created_at
- updated_at
- full_name
- email
- whatsapp
- city
- state
- nationality

#### Eligibility
- target_cohort_fit
- supported_case_yes_no
- unsupported_reason

#### User context
- current_visa
- visa_expiry
- study_status
- qualification
- work_status
- work_relevance_notes
- pathway_goal
- biggest_blocker

#### Assessment
- intake_completeness
- internal_triage_status
- user_facing_status
- missing_info
- key_risks
- confidence_level

#### Roadmap metadata
- roadmap_version
- roadmap_created_at
- roadmap_last_updated_at
- roadmap_expiry_at
- top_3_next_actions
- expert_review_recommended_yes_no
- expert_review_trigger

#### Ops
- current_case_status
- owner
- turnaround_deadline
- last_user_contact_at
- next_follow_up_at
- user_dropped_off_yes_no
- drop_off_reason

#### Outcome
- paid_yes_no
- amount_paid
- user_feedback
- reclassified_yes_no
- closed_at
- close_reason

### Required case statuses

- new
- intake_complete
- unsupported
- triaged
- roadmap_sent
- waiting_on_user
- needs_re-review
- ready_for_expert
- closed

### Rules

- no case should exist outside the tracker
- every support/triage decision must be recorded
- roadmap version and expiry must always be recorded
- follow-up state must always be visible

### Acceptance criteria

- any teammate can open a case and understand current state immediately
- every user can be traced from signup to outcome
- drop-off reasons and reclassification are visible

## Feature 4: Support Eligibility And Triage Engine

### Purpose

Determine whether a user fits V1 and what level of guidance/risk handling is appropriate.

### Primary user

Internal team.

### Problem being solved

Prevent inconsistent decisions and avoid wasting time on unsupported or high-risk cases.

### Support eligibility rules

Support only users who fit all of the following:
- Nepali student or recent graduate in Australia
- early-stage PR clarity/prep need
- not at final submission-critical stage
- not expecting full-service migration-agent replacement

Mark unsupported if:
- outside target cohort
- needs immediate legal sign-off
- wants full-service handling now
- case complexity exceeds current V1 support boundary

### Internal triage states

- Green
- Yellow
- Red

### User-facing status labels

- Clear to continue with guided prep
- Needs careful review later
- Needs licensed review before continuing

### Triage rules

#### Green
- enough information to guide next steps
- common/simple pattern
- no obvious early legal complexity

#### Yellow
- useful to continue prep
- one or more material uncertainties remain
- expert review likely needed before a risky step

#### Red
- major uncertainty or complexity
- early licensed review required
- standard DIY-guided path should not continue alone

### Rules

- if deciding between two statuses, choose the safer one
- user-facing messaging must be softer than internal status labels
- traffic-light logic should not be shown without explanation

### Edge cases

- contradictory answers
- incomplete but recoverable case
- user expects certainty from non-licensed guidance
- user returns with changed circumstances

### Acceptance criteria

- two teammates classify the same case consistently
- unsupported cases are easy to reject
- handoff timing is clear

## Feature 5: Guided Action Plan

### Purpose

Give the user a clear, calm, practical path forward.

### Primary user

Supported and triaged beta user.

### User problem being solved

The user needs to know where they stand, what to do next, what is missing, and when expert review is required.

### Required hierarchy

Every plan must begin with:

1. current status
2. top 3 next actions
3. guidance status
4. what is still missing
5. when expert review is recommended
6. expiry date

### Required sections below top summary

- situation in plain English
- likely pathway direction
- key risks
- checklist
- messaging boundary note

### Required metadata

- roadmap version
- created date
- last updated date
- expiry date

### Wording rules

- plain English only
- calm and specific tone
- no guarantee language
- no final legal sign-off language
- uncertainty must be visible where relevant

### Staleness rules

- roadmap expires after 30 days unless re-reviewed
- roadmap becomes stale immediately if material user circumstances change

### Edge cases

- incomplete intake means visible missing-info section
- Yellow case needs later expert review note
- Red case should not read like a normal proceed-alone plan

### Acceptance criteria

- user can identify first next step immediately
- user understands what is guidance vs what needs licensed review
- user can see the expiry date and risk boundary clearly

## Feature 6: Expert Handoff

### Purpose

Escalate risky cases or risky moments to a licensed migration professional.

### Primary user

Yellow or Red case user, or user requesting final confidence before acting.

### Problem being solved

Maintain a clean trust/legal boundary while still helping the user complete the process safely.

### Trigger conditions

Handoff is required when:
- case is Red at intake
- Yellow case reaches a risky step
- user asks for final confidence before acting
- important pathway assumptions remain unresolved
- our guidance boundary is reached

### Required handoff steps

1. mark case as `ready_for_expert`
2. state clearly why handoff is recommended
3. summarize the case cleanly
4. pass only the needed case context
5. record whether handoff was completed

### Fallback condition

If licensed partner or expert is unavailable:
- user must be informed quickly
- team must not imply expert review is happening when it is not

### Acceptance criteria

- user understands why escalation is happening
- partner handoff does not feel improvised
- cases are not lost between roadmap and expert review

## Feature 7: Beta Ops Workflow

### Purpose

Run the manual beta reliably and consistently.

### Primary user

Internal ops/founder team.

### Required operating steps

1. create case from signup
2. review intake
3. mark supported vs unsupported
4. triage using written rules
5. create guided action plan
6. quality-check wording and risk clarity
7. deliver plan
8. set follow-up
9. trigger expert handoff if needed
10. close case and log outcome

### Required operational scripts

- delivery message
- unsupported decline/referral message
- stale roadmap re-review message
- follow-up message templates

### Service-level targets

- intake reviewed within 24 hours
- roadmap delivered within 48 hours
- escalation decision made quickly for risky cases

### Capacity rules

- active case cap must be visible internally
- use waitlist when overloaded
- do not accept more cases than can be served within promised turnaround time

### Acceptance criteria

- team can run cases without inventing a new process each time
- users receive a consistent experience
- delays, drop-off, and reclassification are visible

## Feature 8: Analytics And Validation Layer

### Purpose

Measure whether the wedge works before building more software.

### Primary user

Founder and product/ops team.

### Required metrics

- signup count
- intake completion rate
- paid conversion rate
- roadmap turnaround time
- reclassification rate
- drop-off reasons
- expert-review request rate
- user-reported confusion reduction

### Required validation milestones

Before real users:
- 10 synthetic cases completed

Before meaningful software build-out:
- 10 real manual cases completed

### Stop conditions

Pause and revise if:
- fewer than 5 of first 10 serious users pay
- triage is inconsistent
- users repeatedly think we are offering legal sign-off
- unsupported cases dominate
- expert handoff is unreliable
- users cannot act on the guided plan clearly

### Acceptance criteria

- team can answer whether the wedge is working
- team can see whether trust and willingness to pay are real

## Open Implementation Questions

- Which exact 1-2 case types are the first supported cases?
- What exact beta price will be used?
- What exact expert handoff process or partner will be used?

These do not block the feature specs from existing, but they do need to be resolved before broader beta rollout.
