"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const heroSignals = [
  "Kathmandu-based Australia guidance",
  "Budget clarity before shortlist",
  "Reply within 1 working day",
];

const heroProofItems = [
  {
    label: "Route",
    value: "Course, city, budget",
  },
  {
    label: "Support",
    value: "Phone + WhatsApp",
  },
  {
    label: "Focus",
    value: "Australia only",
  },
];

const fitCards = [
  {
    title: "+2 students",
    description:
      "For students comparing bachelor options, city fit, and the first budget decisions after +2.",
  },
  {
    title: "Bachelor's graduates",
    description:
      "For master's applicants narrowing course fit, intake timing, and realistic career outcomes.",
  },
  {
    title: "PR-aware planners",
    description:
      "For students and families weighing post-study work, scholarship tradeoffs, and long-term route logic.",
  },
];

const roadmap = [
  "Choose course and city",
  "Check eligibility",
  "Shortlist universities",
  "Prepare documents and SOP",
  "Apply for visa",
  "Get ready to depart",
];

const reasons = [
  {
    title: "Globally recognized degrees",
    description:
      "Australia stays relevant for students who want internationally portable qualifications and clearer academic progression.",
  },
  {
    title: "Post-study work pathways",
    description:
      "Many families weigh Australia for the mix of campus experience, work rights, and life after graduation.",
  },
  {
    title: "Part-time work while studying",
    description:
      "Students often want a route where part-time work can support living costs without pretending money becomes easy.",
  },
  {
    title: "Strong city options",
    description:
      "Sydney, Melbourne, Brisbane, Adelaide, and Perth all come with different cost, pace, and opportunity tradeoffs.",
  },
];

const courseMatches = [
  {
    course: "IT / Data / Cybersecurity",
    cities: "Melbourne, Sydney",
    note: "For students prioritising strong tech ecosystems and broad course options.",
  },
  {
    course: "Nursing / Public Health",
    cities: "Brisbane, Adelaide",
    note: "For students looking at healthcare pathways with practical demand and clearer licensing conversations.",
  },
  {
    course: "Business / Accounting",
    cities: "Sydney, Melbourne",
    note: "For students balancing reputation, internships, and market visibility.",
  },
  {
    course: "Hospitality / Cookery",
    cities: "Gold Coast, Adelaide",
    note: "For students exploring practical programmes with visible service-sector demand.",
  },
];

const budgetCards = [
  {
    label: "Tuition range",
    value: "Course-by-course estimates before you shortlist",
  },
  {
    label: "Living costs by city",
    value: "Rent, transport, and day-to-day reality by location",
  },
  {
    label: "Scholarship opportunities",
    value: "Options worth chasing before time is wasted",
  },
];

const documents = [
  "Academic transcripts and certificates",
  "English test score planning",
  "SOP and supporting documents",
  "Financial documentation",
  "GTE and visa preparation",
];

const stories = [
  {
    student: "Riya S.",
    origin: "Kathmandu",
    course: "Master of Business Analytics",
    destination: "Melbourne",
    result: "Reached offer stage with a clearer budget and document plan.",
    quote:
      "The process finally felt ordered. We knew what to prepare first, what could wait, and which options were realistic.",
    image: "/avatar-riya.svg",
  },
  {
    student: "Sujan KC",
    origin: "Pokhara",
    course: "Bachelor of IT",
    destination: "Sydney",
    result:
      "Moved from generic enquiries to a shortlist that actually fit his budget and goals.",
    quote:
      "The advice felt built for students from Nepal instead of sounding like the same answer given to everyone.",
    image: "/avatar-sujan.svg",
  },
  {
    student: "Asmita G.",
    origin: "Chitwan",
    course: "Nursing pathway",
    destination: "Adelaide",
    result:
      "Turned a stressful route into a step-by-step plan with fewer surprises.",
    quote:
      "Budget clarity and document review made the move feel manageable instead of overwhelming.",
    image: "/avatar-asmita.svg",
  },
];

const faqs = [
  {
    question: "How much does it cost to study in Australia from Nepal?",
    answer:
      "That depends on your course, city, and living setup. The first job is to map realistic tuition and living-cost ranges before you shortlist universities.",
  },
  {
    question: "Which intake should I target?",
    answer:
      "The best intake matches your documents, English-test timing, and application quality. The nearest deadline is not always the right one.",
  },
  {
    question: "Can I get scholarships?",
    answer:
      "Yes, but not every scholarship is worth chasing. Good guidance helps you focus on the ones that actually change your budget picture.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Timelines depend on intake pressure and how ready your documents are. A cleaner file usually creates a calmer visa process.",
  },
  {
    question: "Which courses are best for jobs after graduation?",
    answer:
      "That depends on your background and goals, but students often compare IT, nursing, public health, business, and practical hospitality routes for employability.",
  },
];

const initialForm = {
  name: "",
  phone: "",
  level: "After +2",
  intake: "Feb 2027",
};

type FormState = typeof initialForm;
type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Home() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const statusMessage = useMemo(() => {
    if (isSubmitting) {
      return "Sending your details. This usually takes a few seconds.";
    }

    if (isSubmitted) {
      return "Your request is in. Expect a response within one working day, or message on WhatsApp if your timeline is urgent.";
    }

    if (Object.keys(errors).length > 0) {
      return "Please fix the highlighted fields before submitting.";
    }

    return "";
  }, [errors, isSubmitted, isSubmitting]);

  function validate(nextForm: FormState) {
    const nextErrors: FormErrors = {};

    if (!nextForm.name.trim()) {
      nextErrors.name = "Enter your full name.";
    }

    if (!nextForm.phone.trim()) {
      nextErrors.phone = "Enter your phone number.";
    }

    return nextErrors;
  }

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm(initialForm);
    }, 900);
  }

  return (
    <main className="bg-[var(--color-cloud)] pb-24 text-[var(--color-ink)] md:pb-0">
      <section className="border-b border-[color:rgba(15,39,71,0.12)] bg-[radial-gradient(circle_at_top,_rgba(255,122,89,0.18),_transparent_24%),linear-gradient(180deg,_#f8fafc_0%,_#f4e7d3_100%)]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[color:rgba(15,39,71,0.12)] bg-white/78 px-4 py-2 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-coral)]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
                Nepal to Australia corridor specialist
              </p>
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] font-semibold text-[var(--color-navy)] sm:text-6xl lg:text-7xl">
              Plan your Australia move from Nepal with clarity on course,
              budget, and visa steps.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:rgba(27,27,27,0.82)] sm:text-xl">
              Get guidance that reduces anxiety first: what you can study, what
              it may cost, which scholarships matter, and what needs to be ready
              before you apply.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[color:rgba(27,27,27,0.72)]">
              Not a generic study-abroad agency covering every destination at
              once. This page is built for students and families comparing the
              Nepal to Australia route properly.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-coral)] px-7 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(255,122,89,0.35)]"
              >
                Book Free Counselling
              </a>
              <a
                href="https://wa.me/9779800000000"
                className="inline-flex items-center justify-center rounded-full border border-[color:rgba(15,39,71,0.16)] bg-white px-7 py-3 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-sand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(15,39,71,0.14)]"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroSignals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center rounded-full border border-[color:rgba(15,39,71,0.1)] bg-white/78 px-4 py-2 text-sm text-[var(--color-navy)] backdrop-blur-sm"
                >
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[color:rgba(15,39,71,0.68)]">
              <span>15-minute first call</span>
              <span className="text-[var(--color-coral)]">•</span>
              <span>Course, budget, and visa direction</span>
              <span className="text-[var(--color-coral)]">•</span>
              <span>Clear next steps after the call</span>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-[2.4rem] border border-[color:rgba(15,39,71,0.12)] bg-[linear-gradient(180deg,_rgba(15,39,71,1)_0%,_rgba(24,55,96,1)_100%)] text-white shadow-[0_28px_80px_rgba(15,39,71,0.18)]">
              <div className="bg-[radial-gradient(circle_at_top,_rgba(255,122,89,0.16),_transparent_42%)] px-6 pt-6 sm:px-7 sm:pt-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:rgba(244,231,211,0.8)]">
                    Route snapshot
                  </p>
                  <p className="rounded-full border border-white/12 bg-white/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:rgba(244,231,211,0.84)]">
                    Feb / Jul 2027
                  </p>
                </div>

                <h2 className="mt-4 max-w-lg text-2xl leading-tight font-semibold !text-white sm:text-[2rem]">
                  A calmer way to plan your Australia move.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/76 sm:text-base">
                  Start with the shortlist, cost range, and document readiness
                  so the rest of the process feels more manageable.
                </p>

                <Image
                  src="/route-hero.svg"
                  alt="Illustration of the Nepal to Australia study route"
                  width={960}
                  height={640}
                  className="mt-8 h-auto w-full"
                  priority
                />
              </div>

              <div className="grid gap-4 border-t border-white/10 px-6 py-5 sm:grid-cols-3 sm:px-7 sm:py-6">
                {heroProofItems.map((item) => (
                  <div key={item.label} className="grid gap-2">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/48">
                      {item.label}
                    </p>
                    <p className="text-sm leading-6 text-white/84">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
              Quick self-qualifier
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-navy)] sm:text-5xl">
              Is Australia the right next step for you?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[color:rgba(27,27,27,0.72)]">
              Sort yourself quickly before you read everything else. If you can
              see your situation here, the rest of the page should feel more
              useful immediately.
            </p>
            <a
              href="#lead-form"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-[color:rgba(15,39,71,0.16)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-sand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(15,39,71,0.14)]"
            >
              Talk to an Australia counsellor
            </a>
          </div>
          <div className="grid gap-4">
            {fitCards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-[color:rgba(15,39,71,0.08)] bg-white p-6 shadow-[0_18px_40px_rgba(15,39,71,0.04)]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-eucalyptus)]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--color-navy)]">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-[color:rgba(27,27,27,0.72)]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-18 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
              Nepal to Australia roadmap
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-navy)] sm:text-5xl">
              Your path in 6 clear steps.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[color:rgba(27,27,27,0.72)]">
              No guesswork. No vague promises. Just the next right step.
            </p>
          </div>
          <ol className="grid gap-4">
            {roadmap.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-[1.5rem] border border-[color:rgba(15,39,71,0.09)] bg-[var(--color-cloud)] p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy)] font-mono text-sm text-white">
                  0{index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-[var(--color-ink)]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
              Why students from Nepal choose Australia
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-navy)] sm:text-5xl">
              A destination choice is also a life setup choice.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="rounded-[1.75rem] border border-[color:rgba(15,39,71,0.08)] bg-[color:rgba(244,231,211,0.45)] p-7"
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
                  Reason 0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--color-navy)]">
                  {reason.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[color:rgba(27,27,27,0.75)]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[color:rgba(244,231,211,0.8)]">
              Course + city match
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight !text-white sm:text-5xl">
              Popular choices for Nepali students.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {courseMatches.map((match) => (
              <article
                key={match.course}
                className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold !text-white">{match.course}</h3>
                    <p className="mt-3 max-w-lg text-base leading-7 text-white/78">
                      {match.note}
                    </p>
                  </div>
                  <p className="font-mono text-sm uppercase tracking-[0.22em] text-[color:rgba(244,231,211,0.8)]">
                    {match.cities}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-18 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
            Money reality
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-navy)] sm:text-5xl">
            Let&apos;s talk budget honestly.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[color:rgba(27,27,27,0.72)]">
            We help you plan for what is realistic, not what sounds nice in an
            ad. Tuition, living costs, and scholarship options should reduce
            anxiety, not create false hope.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {budgetCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[1.5rem] border border-[color:rgba(15,39,71,0.08)] bg-white p-5"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-eucalyptus)]">
                  {card.label}
                </p>
                <p className="mt-3 text-lg font-semibold leading-7 text-[var(--color-navy)]">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-[color:rgba(15,39,71,0.08)] bg-white p-8 shadow-[0_18px_40px_rgba(15,39,71,0.05)]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
            Documents + visa confidence
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--color-navy)] sm:text-4xl">
            What usually slows students down.
          </h2>
          <ul className="mt-5 space-y-4 text-base leading-7 text-[color:rgba(27,27,27,0.74)]">
            {documents.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-coral)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#lead-form"
            className="mt-8 inline-flex rounded-full bg-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-eucalyptus)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(15,39,71,0.14)]"
          >
            Get your document review
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
                Student stories
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-navy)] sm:text-5xl">
                From Nepal to campus in Australia.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[color:rgba(27,27,27,0.72)]">
              Use route snapshots, not generic testimonial cards. Origin,
              course, destination, and result should all be visible at a glance.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <article
                key={`${story.student}-${story.destination}`}
                className="rounded-[1.75rem] border border-[color:rgba(15,39,71,0.08)] bg-[var(--color-cloud)] p-7"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={story.image}
                    alt={`Illustrated route snapshot for ${story.student}`}
                    width={72}
                    height={72}
                    className="h-18 w-18 rounded-2xl border border-[color:rgba(15,39,71,0.08)] bg-white"
                  />
                  <div>
                    <p className="text-base font-semibold text-[var(--color-navy)]">
                      {story.student}
                    </p>
                    <p className="mt-1 text-sm text-[color:rgba(27,27,27,0.66)]">
                      {story.origin}, Nepal
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-[color:rgba(15,39,71,0.08)] bg-white px-4 py-4">
                  <div className="flex items-start justify-between gap-4 border-b border-[color:rgba(15,39,71,0.08)] pb-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-eucalyptus)]">
                        Route
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[var(--color-navy)]">
                        {story.origin} to {story.destination}
                      </p>
                    </div>
                    <p className="text-right text-sm text-[color:rgba(27,27,27,0.66)]">
                      {story.course}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-eucalyptus)]">
                      Result
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[color:rgba(27,27,27,0.72)]">
                      {story.result}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-lg leading-8 text-[var(--color-ink)]">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] bg-[var(--color-navy)] px-8 py-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:rgba(244,231,211,0.8)]">
              Counsellor trust block
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight !text-white">
              Talk to someone who knows this corridor.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
              The point here is simple: show the people, the office signal, and
              the contact paths clearly before the final ask.
            </p>
          </div>
          <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/6 p-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:rgba(244,231,211,0.8)]">
                Reach us
              </p>
              <p className="mt-3 text-base font-semibold">Phone and WhatsApp</p>
              <p className="mt-1 text-sm text-white/72">+977 98XXXXXXXX</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:rgba(244,231,211,0.8)]">
                Office signal
              </p>
              <p className="mt-3 text-base font-semibold">
                Kathmandu consultation desk
              </p>
              <p className="mt-1 text-sm text-white/72">
                In-person and remote guidance
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:rgba(244,231,211,0.8)]">
                Hours
              </p>
              <p className="mt-3 text-base font-semibold">
                Sun to Fri, 10am to 6pm
              </p>
              <p className="mt-1 text-sm text-white/72">
                Reply timing matters for anxious leads
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:rgba(244,231,211,0.8)]">
                Scope
              </p>
              <p className="mt-3 text-base font-semibold">
                Shortlist to departure
              </p>
              <p className="mt-1 text-sm text-white/72">
                Course, documents, visa, pre-departure
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:rgba(244,231,211,0.5)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
                FAQ
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[var(--color-navy)] sm:text-5xl">
                Questions students and families ask before they commit.
              </h2>
            </div>
            <Accordion defaultValue={["faq-0"]} className="grid gap-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="rounded-[1.5rem] border border-[color:rgba(15,39,71,0.08)] bg-white px-2 not-last:border-b-0"
                >
                  <AccordionTrigger className="rounded-[1.1rem] px-4 py-4 text-lg font-semibold text-[var(--color-navy)] hover:no-underline focus-visible:border-[color:rgba(15,39,71,0.14)] focus-visible:ring-[color:rgba(15,39,71,0.14)] [&_[data-slot=accordion-trigger-icon]]:mt-1 [&_[data-slot=accordion-trigger-icon]]:text-[var(--color-eucalyptus)]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-base leading-7 text-[color:rgba(27,27,27,0.72)]">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
        <div
          id="lead-form"
          className="rounded-[2rem] border border-[color:rgba(15,39,71,0.08)] bg-white p-8 shadow-[0_18px_40px_rgba(15,39,71,0.05)]"
        >
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
                Final CTA
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-navy)]">
                Ready to plan your Australia move?
              </h2>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-[color:rgba(27,27,27,0.68)]">
                <span>15-minute first call</span>
                <span className="text-[var(--color-coral)]">•</span>
                <span>Phone or WhatsApp</span>
                <span className="text-[var(--color-coral)]">•</span>
                <span>Clear next steps after the call</span>
              </div>
              <p className="mt-6 max-w-xl text-base leading-7 text-[color:rgba(27,27,27,0.72)]">
                Share the basics and the first conversation can focus on course
                fit, budget reality, and the next documents you actually need.
              </p>
            </div>

            <div>
              <p
                aria-live="polite"
                className="min-h-6 text-sm text-[color:rgba(27,27,27,0.64)]"
              >
                {statusMessage}
              </p>

              {isSubmitted ? (
                <div className="mt-2 rounded-[1.75rem] border border-[color:rgba(47,125,109,0.22)] bg-[color:rgba(47,125,109,0.08)] p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
                    Request received
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--color-navy)]">
                    Your counselling request is in.
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[color:rgba(27,27,27,0.72)]">
                    Expect a response within one working day. If your intake
                    timing is urgent, use WhatsApp so the team can triage you
                    faster.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://wa.me/9779800000000"
                      className={cn(
                        buttonVariants({ variant: "trust" }),
                        "px-6",
                      )}
                    >
                      Continue on WhatsApp
                    </a>
                    <Button
                      type="button"
                      variant="outline"
                      className="px-6"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send another request
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  className="mt-2 grid gap-4 sm:grid-cols-2"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <Label>
                    Full name
                    <Input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="Your name"
                      className="bg-background"
                    />
                    {errors.name ? (
                      <span
                        id="name-error"
                        className="text-sm text-[var(--color-error)]"
                      >
                        {errors.name}
                      </span>
                    ) : null}
                  </Label>

                  <Label>
                    Phone number
                    <Input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      placeholder="98XXXXXXXX"
                      className="bg-background"
                    />
                    {errors.phone ? (
                      <span
                        id="phone-error"
                        className="text-sm text-[var(--color-error)]"
                      >
                        {errors.phone}
                      </span>
                    ) : null}
                  </Label>

                  <Label>
                    Study level
                    <Select
                      name="level"
                      value={form.level}
                      onChange={(event) =>
                        updateField("level", event.target.value)
                      }
                      className="bg-background"
                    >
                      <option>After +2</option>
                      <option>Master&apos;s</option>
                      <option>Diploma</option>
                    </Select>
                  </Label>

                  <Label>
                    Preferred intake
                    <Select
                      name="intake"
                      value={form.intake}
                      onChange={(event) =>
                        updateField("intake", event.target.value)
                      }
                      className="bg-background"
                    >
                      <option>Feb 2027</option>
                      <option>Jul 2027</option>
                      <option>Not sure yet</option>
                    </Select>
                  </Label>

                  <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xl text-sm leading-6 text-[color:rgba(27,27,27,0.64)]">
                      If the form feels slow or you need a faster reply, use
                      WhatsApp as the backup route.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href="https://wa.me/9779800000000"
                        className={cn(
                          buttonVariants({ variant: "outline" }),
                          "px-6",
                        )}
                      >
                        WhatsApp instead
                      </a>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-7"
                      >
                        {isSubmitting ? "Sending..." : "Book My Free Session"}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-[color:rgba(15,39,71,0.12)] bg-white/96 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex w-full max-w-7xl gap-3">
          <a
            href="#lead-form"
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[var(--color-coral)] px-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(255,122,89,0.35)]"
          >
            Book counselling
          </a>
          <a
            href="https://wa.me/9779800000000"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[color:rgba(15,39,71,0.12)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(15,39,71,0.14)]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
