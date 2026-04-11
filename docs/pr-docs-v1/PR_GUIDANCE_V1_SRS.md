# PR Guidance V1 SRS

## Document Status

- Status: Draft for team execution
- Product stage: Pre-product, manual beta
- Scope: V1 validation only
- Primary audience: founding team, operators, design/engineering collaborators

## 1. Product Summary

We are building a service-first product for Nepali students and recent graduates in Australia who are early in their PR journey and need clarity and prep guidance before final application-critical steps.

The product does not try to replace a licensed migration agent. It unbundles the expensive process by owning the clarity, preparation, and organization layer, then routes users to a licensed expert only when the risky step arrives.

## 2. Problem Statement

Today, users choose between two bad options:

1. DIY through scattered Facebook groups, YouTube videos, friends, and conflicting advice
2. Pay a full-service migration agent thousands of dollars earlier than they want to

The pain is not just lack of information. The pain is:

- information is scattered
- stakes are high
- users are risk-sensitive
- they want to save money without making a life-changing mistake

## 3. Target User

### In scope

- Nepali students or recent graduates in Australia
- Early-stage PR clarity and prep needs
- Users who want a guided path before final submission-heavy steps
- Users willing to do prep themselves if the process is clear

### Out of scope for V1

- Full-service migration-agent replacement
- Users already at final submission-critical stages
- Cases requiring immediate legal sign-off
- Non-target cohorts
- Broad support for all visa/PR scenarios

## 4. Product Thesis

If we help users understand what applies to them, what to do next, what is still missing, and when licensed review is necessary, we can save them money and reduce confusion without pretending to provide final legal migration advice.

## 5. Why These Decisions Were Made

### Why service-first, not software-first

Trust is the bottleneck, not UI sophistication. Users in this category buy confidence before they buy software.

### Why narrow the wedge

"Nepali students in Australia" already hides many different workflows. V1 is narrowed further to early-stage clarity and prep so that repeated patterns can emerge before software is built.

### Why not replace migration agents

The legal and trust boundary is too risky for V1. The product wins by unbundling the prep layer, not by claiming final authority.

### Why no document upload in V1

It adds privacy risk, compliance burden, and false expectations before it is necessary to validate the wedge.

### Why no-login in V1

Accounts add complexity before the core workflow is proven. V1 stays ops-first. If trust friction appears, a lightweight continuity layer is the first follow-up.

## 6. V1 Scope

### Included

- Landing page
- Short beta signup
- 3-step intake flow
- Single source of truth case tracker
- Support eligibility rules
- Triage rules
- Staleness rules
- Expert handoff trigger rules
- Guided action plan template
- Manual delivery workflow
- Licensed expert handoff when needed

### Explicitly not included

- Full self-serve app
- User accounts
- Document vault
- Automated eligibility engine
- Marketplace of multiple agents
- Broad cohort expansion

## 7. Core User Flow

```text
Landing page
  -> beta signup
    -> 3-step intake
      -> support eligibility check
        -> triage
          -> guided action plan
            -> user follows next steps
              -> expert handoff if triggered
                -> case closes or loops for re-review
```

## 8. User-Facing Promise

### Core message

Get a personalized action plan for PR clarity and prep, then use a licensed expert only when the risky step arrives.

### Trust stack

- Built for Nepali students in Australia
- Personalized action plan, not generic immigration articles
- Cheaper than full-service agents
- Licensed expert review when needed

### Messaging boundary

We help with:

- clarity
- preparation
- organization
- next steps
- expert review when needed

We do not claim:

- guaranteed PR outcomes
- final legal migration sign-off
- full-service migration agent replacement

## 9. Feature Specs

### 9.1 Landing Page

Purpose:
- explain the problem
- explain the trust model
- qualify beta users

Required sections:
- headline
- subheadline
- trust stack
- how it works
- who it is for
- who it is not for
- boundary note
- beta CTA

### 9.2 3-Step Intake

Purpose:
- collect enough information to decide support fit and create an action plan

Step 1:
- current visa
- visa expiry
- study/work status
- city/state

Step 2:
- current goal
- biggest blocker
- whether the user wants clarity, prep help, or expert review

Step 3:
- study background
- work background
- English test status
- anything that may make the case more complex

Rules:
- no document upload in V1
- plain English helper copy
- calm, staged flow

### 9.3 Case Tracker

Purpose:
- act as the single source of truth

Required fields:
- case ID
- contact info
- cohort fit
- supported yes/no
- unsupported reason
- internal triage status
- user-facing status
- missing info
- risks
- roadmap dates
- expiry date
- current case status
- follow-up dates
- handoff required yes/no
- paid yes/no
- drop-off reason

### 9.4 Guided Action Plan

Required hierarchy:

1. current status
2. top 3 next actions
3. guidance status
4. what is still missing
5. when expert review is recommended
6. expiry date

Then include:
- situation in plain English
- likely direction
- key risks
- checklist
- boundary note

### 9.5 Expert Handoff

Purpose:
- route risky cases to licensed professionals at the correct point

Required triggers:
- Red case at intake
- Yellow case approaching a risky step
- user asks for final confidence before acting
- pathway fit is materially unclear
- our guidance boundary is reached

## 10. Decision Rules

### 10.1 Support eligibility

Support only users who fit the target cohort and are still in early-stage PR clarity/prep.

Reject or refer if:
- user wants full-service legal handling
- user is already at a final submission-critical stage
- user falls outside the target cohort
- case complexity exceeds current V1 scope

### 10.2 Triage

Internal states:
- Green
- Yellow
- Red

External states:
- Clear to continue with guided prep
- Needs careful review later
- Needs licensed review before continuing

Design note:
Use internal 3-tier logic operationally, but do not present blunt traffic-light language without explanation to users.

### 10.3 Staleness

Every guided action plan expires after 30 days unless re-reviewed.

Immediate re-review required if:
- visa/work/study/partner status changes
- underlying assumptions materially change
- user returns after a long gap

### 10.4 Handoff triggers

Escalate to licensed review when:
- case is Red
- Yellow case reaches a risky step
- user asks for legal confidence
- important pathway assumptions remain unresolved

## 11. States and Statuses

### Case statuses

- new
- intake_complete
- unsupported
- triaged
- roadmap_sent
- waiting_on_user
- needs_re-review
- ready_for_expert
- closed

## 12. Operations SOP Summary

1. create case from signup
2. review intake
3. mark supported vs unsupported
4. triage with written rules
5. create guided action plan
6. quality-check for clarity and legal-boundary wording
7. deliver plan
8. schedule follow-up
9. trigger expert handoff when rules require it
10. close case and log outcome

## 13. Validation Plan

### Before real users

- run 10 synthetic cases through the rules
- check support/triage consistency
- ensure outputs are not overclaiming

### During beta

- complete 10 manual real-user cases before meaningful software build-out
- charge from the start
- use active case cap and waitlist to protect turnaround time

## 14. Success Metrics

- intake completion rate
- paid conversion rate
- roadmap turnaround time
- reclassification rate
- drop-off reasons
- expert-review request rate
- whether users say confusion was reduced
- how many cases fit the wedge cleanly

## 15. Stop Conditions

Pause and revise if:

- fewer than 5 of the first 10 serious users pay
- triage is inconsistent across synthetic or real cases
- users repeatedly think we are offering legal sign-off
- unsupported cases dominate
- expert handoff is unreliable
- users do not find the action plan clear enough to act on

## 16. Follow-Up Scope

If trust friction appears, the first likely follow-up is a lightweight continuity layer:

- secure return link
- case ID
- versioned action plan
- visible last-updated date

This is a follow-up, not part of V1.

## 17. Open Questions

- Which one or two common case types should V1 explicitly support first?
- What exact pricing should be used for beta users?
- Which licensed expert or partner process will handle handoff quality control?

## 18. Build Order

1. synthetic cases
2. tracker setup
3. landing page
4. intake form
5. guided action plan template
6. real-user outreach
7. manual beta delivery
