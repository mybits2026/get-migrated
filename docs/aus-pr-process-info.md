# Get Migrated - MVP Feature Scope

## Target Audience
End-to-end Australian PR process for applicants already onshore in Australia (General Skilled Migration - subclasses 189, 190, 491).

## The 5 Phases of the User Journey

### Phase 1: Profiling & Eligibility (The "Thought")
* **Occupation Check:** Checking if nominated occupation is on the Medium and Long-term Strategic Skills List (MLTSSL) or the Short-term Skilled Occupation List (STSOL).
* **Points Calculation:** Tallying points for Age, English proficiency, Work experience (Aussie & overseas), Education level, Australian study requirement, Specialist education, Credentialled community language (NAATI), Professional Year (PY), and Partner skills.
* **Goal Setting:** The app identifies point deficits and suggests actions (e.g., "Take a NAATI test to gain 5 points").

### Phase 2: Qualification & Readiness (Gathering the Ammo)
* **English Test:** Booking, preparing, and sitting for IELTS, PTE, or TOEFL. Aiming for Proficient (10 pts) or Superior (20 pts).
* **Skills Assessment:** Applying to the relevant authority (e.g., ACS for IT, VETASSESS for general trades, CPA for accounting). This requires collecting degree transcripts, employment reference letters, and payslips.
* **Bonus Points Collection:** Enrolling in and completing a Professional Year (PY) or passing a NAATI CCL language test.

### Phase 3: The Marketplace (Raising the Hand)
* **Expression of Interest (EOI):** Lodging a profile in the government’s SkillSelect system. They declare their points and desired visa subclasses (189, 190, 491).
* **Registration of Interest (ROI) for State Nomination:** Applying directly to specific states (e.g., NSW, VIC) following their specific criteria.
* **The Waiting Game:** Tracking EOI expiration (they last 2 years) and points age-outs (e.g., losing points when turning 33).

### Phase 4: The Formal Application (The "Golden Ticket")
* **Lodgement (60-Day Deadline):** The user has 60 days from the Invitation to Apply (ITA) to submit the visa application via ImmiAccount.
* **Document Upload:** Attaching all evidence claimed in the EOI.
* **Bridging Visa Activation:** Tracking that the Bridging Visa sits dormant until their current visa expires.
* **Health and Character:** Booking medical examinations and obtaining police clearances (AFP and overseas).

### Phase 5: Processing & Outcome
* **Status Tracking:** Application status changes to "Received", then "Initial Assessment".
* **Request for Further Information (s56 RFI):** Managing the 28-day window to provide more documents if requested by a case officer.
* **The Grant:** The final PR grant notice and VEVO update.

## Key MVP Architecture Modules
1. **Rules Engine:** A robust Points Calculator module that updates dynamically based on user inputs.
2. **Document Vault:** Secure storage for passports, IELTS TRFs, Skills Assessment PDFs, and payslips.
3. **Milestone Tracker:** A clear visual pipeline showing exactly where they are in these 5 phases.
4. **Task & Deadline Manager:** Push notifications for expiring documents and deadlines.
