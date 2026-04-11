# TODOS

## P1 - Validate migration-compliance boundary for the core offer
- What: Verify with current Australian migration-assistance rules whether the proposed triage, readiness report, and case-specific next-step guidance can legally be offered without a licensed migration agent owning that part of the workflow.
- Why: If the core paid offer crosses into regulated advice, the business promise itself may need to change.
- Pros: Prevents building an unlawful or non-viable product shape; clarifies what can safely be automated or sold.
- Cons: May force a narrower offer or require a licensed partner earlier than planned.
- Context: The outside voice flagged current Home Affairs and OMARA guidance as potentially covering document prep, pathway-fit judgments, and personalized next steps. Current plan assumptions may be too optimistic.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P1
- Depends on / blocked by: None; should happen before implementation scope is finalized.

## P1 - Run a manual-first pilot before productizing the workflow
- What: Validate the offer through interviews and manually delivered readiness help before committing to workflow routes, payment flow, and status surfaces.
- Why: This tests whether the service is truly wanted before building product scaffolding around it.
- Pros: Reduces waste, sharpens the real user pain, and reveals which parts of the workflow repeat enough to productize.
- Cons: Slower to get a polished user-facing product live; more founder-manual work up front.
- Context: The review improved the implementation plan, but the outside voice correctly pointed out that the current plan may still assume too much product before service proof.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P1
- Depends on / blocked by: Compliance validation should happen in parallel or first.

## P1 - Validate licensed-partner dependency and handoff process
- What: Identify whether a licensed migration partner is required for trust/compliance, then define the real handoff: consent, economics, timing, transfer mechanics, and review loop.
- Why: The plan currently treats partner referral as optional, but both the review and outside voice flagged it as a likely dependency.
- Pros: Clarifies whether the offer is credible and operationally sound; reduces ambiguity in pricing and launch messaging.
- Cons: Introduces partner coordination work earlier than expected.
- Context: A vague 'agent-ready summary' is not yet a real handoff process.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P1
- Depends on / blocked by: Compliance validation and partner availability.

## P2 - Define rule-volatility handling for migration-policy drift
- What: Create a lightweight policy-source, policy-date, and re-check process for any prep output that depends on current migration settings.
- Why: Old reports can silently become wrong when criteria shift.
- Pros: Prevents silent trust erosion, improves auditability, and supports future productization.
- Cons: Adds process overhead before scale exists.
- Context: The review found no current plan for source-of-truth policy dates, report versioning, or re-check triggers.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P2
- Depends on / blocked by: Compliance boundary and clearer definition of what the product is allowed to say.

## P1 - Define a single ops source of truth for PR-readiness cases
- What: Choose and document the reliable sink for case intake and manual review state, including case IDs, payment linkage, reviewer ownership, and current state.
- Why: A route and form are not enough; without a real case record, the reduced-scope workflow collapses into inbox chaos.
- Pros: Makes the manual pilot operable, measurable, and less dependent on memory; creates the minimum substrate for later productization.
- Cons: Adds ops/process design before a full product exists.
- Context: The eng review found that even after removing built-in status UI, the underlying states still exist: borderline, paid/unpaid, waiting for more info, refunded, complete.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P1
- Depends on / blocked by: Payment approach and manual-review flow.

## P1 - Make the test harness real before depending on it
- What: Turn the repo’s partial test setup into a runnable harness for this feature: real local Playwright app wiring plus a minimal unit-test lane for rule/helper tests.
- Why: Test intent is fake safety if the harness is still stock or only present in dependencies.
- Pros: Lets the implementation actually ship with the test bundle chosen in review; reduces late surprise when feature work starts.
- Cons: Adds some setup work before feature code.
- Context: `playwright.config.ts` is still the stock example shape and there is no actual unit-test config despite `jest` being installed.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P1
- Depends on / blocked by: Final decision on test framework and route structure.

## P2 - Align shared config and design surfaces with the isolated PR-readiness route
- What: Split or adapt shared metadata, config, and design references so the new `/pr-readiness` route does not inherit misleading study-abroad messaging by accident.
- Why: A separate route is not true isolation if global config and design source-of-truth still point at the old funnel.
- Pros: Reduces brand/SEO/navigation leakage and keeps implementation aligned with the new business direction.
- Cons: Introduces some cross-cutting cleanup beyond the route itself.
- Context: The eng review and outside voice both found that `siteConfig`, metadata, and `DESIGN.md` still describe the old Nepal-to-Australia student funnel.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P2
- Depends on / blocked by: Product-positioning decisions and any follow-up design review.

## P1 - Define the reviewer operations workflow behind the route
- What: Specify the internal casework flow for claimed cases: ownership, requesting more info, attaching the summary artifact, handoff steps, and closeout states.
- Why: The public route is only half the system; without a defined reviewer flow, backend persistence becomes fake progress and the human workflow stays chaotic.
- Pros: Makes the internal side explicit, reduces hidden operational debt, and clarifies what the app does versus what humans do.
- Cons: Adds non-trivial ops design before the product is proven at scale.
- Context: The outside voice flagged that the plan still hides a second product, the internal casework system, inside the phrase `manual review`.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P1
- Depends on / blocked by: Case persistence model, compliance boundary, and artifact lifecycle.

## P2 - Define soft-launch throttles and a kill switch for the route
- What: Document how the route is capped, paused, or rolled back during early rollout: invite/direct-link rules, queue cap, pause criteria, and kill switch.
- Why: A `soft launch` is meaningless without real brakes.
- Pros: Lowers the cost of being wrong and makes rollout reversibility concrete instead of aspirational.
- Cons: Adds operational policy work before public launch.
- Context: The rerun CEO review accepted soft launch first, and the outside voice flagged that this was too vague without traffic controls.
- Effort estimate: S (human) -> S with CC+gstack
- Priority: P2
- Depends on / blocked by: Final route exposure strategy and reviewer capacity assumptions.

## P2 - Revisit route-specific trust treatment for the PR-readiness flow
- What: Define a route-specific trust UX treatment so the PR-readiness experience does not feel like a recycled study-abroad landing page.
- Why: Trust is part of the product in this category, and the reused landing feel may weaken credibility.
- Pros: Improves perceived seriousness and coherence without requiring a full site-wide redesign.
- Cons: Adds design work to a plan already carrying business and ops uncertainty.
- Context: In the rerun CEO review you chose to reuse the current landing feel, but the outside voice strongly flagged this as credibility debt worth making explicit.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P2
- Depends on / blocked by: Any follow-up `/plan-design-review` and route-specific metadata/config decisions.

## P2 - Update DESIGN.md to include the PR-readiness route adaptation
- What: Extend the repo design source of truth with the route-specific adaptation for the PR-readiness flow: hierarchy, tone, layout model, and trust-oriented deviations from the original study-abroad landing page.
- Why: Right now the route-specific design logic lives in the plan review, but the persistent design system file still describes only the old funnel.
- Pros: Prevents future drift, gives designers/engineers one stable source of truth, and keeps route-specific decisions from being lost.
- Cons: Adds documentation/design-system maintenance work.
- Context: This design review brought the route plan from vague marketing reuse toward a more intentional hybrid trust flow, but `DESIGN.md` still only describes the old Nepal-to-Australia student landing page.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P2
- Depends on / blocked by: Final acceptance of the route-specific adaptation direction.

## P1 - Define case-data governance for persisted PR-readiness records
- What: Specify retention, deletion, reviewer access, audit logging, and consent boundaries for the backend case data this route will store.
- Why: Minimal fields alone do not make a persisted-case system safe; the operating rules around the data are still missing.
- Pros: Reduces privacy/compliance ambiguity, makes reviewer access explicit, and keeps the backend from becoming a sensitive data sink with no controls.
- Cons: Adds governance work before the pilot is fully proven.
- Context: The refreshed eng review and outside voice both flagged that backend persistence now exists in the plan, but data governance is still largely implicit.
- Effort estimate: M (human) -> S with CC+gstack
- Priority: P1
- Depends on / blocked by: Final case model, reviewer workflow, and compliance-boundary decisions.
