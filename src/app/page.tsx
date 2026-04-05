"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  ComponentProps,
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { ContactForm } from "@/components/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const { brandName, corridor, contact } = siteConfig;
const contactPhone = contact.phone.display;
const contactEmail = contact.email;
const whatsappHref = contact.phone.whatsappHref;
const phoneHref = contact.phone.href;
const emailHref = `mailto:${contact.email}`;

const heroSignals = [
  "Australia-based course guidance",
  "Budget clarity before shortlist",
  contact.responseTime,
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

const navItems = [
  {
    label: "Roadmap",
    href: "#roadmap",
  },
  {
    label: "Budget",
    href: "#budget",
  },
  {
    label: "Stories",
    href: "#stories",
  },
  {
    label: "FAQ",
    href: "#faq",
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
  {
    title: "Choose your course, level, and city",
    description:
      "Compare what fits your goals, budget, and preferred student city before you commit.",
    tag: "Course fit",
  },
  {
    title: "Check eligibility and English requirements",
    description:
      "Review academics, English tests, and any gaps early so the shortlist stays realistic.",
    tag: "Eligibility",
  },
  {
    title: "Plan your budget, scholarships, and intake",
    description:
      "Map tuition, living costs, scholarship chances, and intake timing before you apply.",
    tag: "Budget",
  },
  {
    title: "Apply and secure your offer",
    description:
      "Shortlist the right universities, submit clean applications, and track offer conditions carefully.",
    tag: "Applications",
  },
  {
    title: "Prepare CoE, finances, and visa documents",
    description:
      "Get the paperwork in order for enrolment, financial proof, and your visa file.",
    tag: "Visa prep",
  },
  {
    title: "Get travel-ready and arrival-ready",
    description:
      "Sort pre-departure planning so landing in Australia feels organised, not rushed.",
    tag: "Departure",
  },
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

function Reveal({
  children,
  className,
  delay = 0,
  style,
  ...props
}: ComponentProps<"div"> & {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    let frame = 0;

    if (!node) {
      return;
    }

    const reveal = () => {
      frame = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });
    };

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      reveal();

      return () => {
        window.cancelAnimationFrame(frame);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        reveal();
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "reveal-visible", className)}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="bg-[var(--color-cloud)] pb-24 text-[var(--color-ink)] md:pb-0">
      <header className="sticky top-0 z-30 border-b border-[color:rgba(15,39,71,0.08)] bg-[color:rgba(248,250,252,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <a href="#top" className="min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(15,39,71,0.14)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
              {corridor.label}
            </p>
            <p className="mt-1 truncate font-display text-lg font-semibold text-[color:rgba(15,39,71,0.9)]">
              {brandName}
            </p>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:rgba(15,39,71,0.76)] transition-colors hover:text-[var(--color-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(15,39,71,0.14)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappHref}
              className="inline-flex items-center justify-center rounded-full border border-[color:rgba(15,39,71,0.12)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-sand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(15,39,71,0.14)]"
            >
              WhatsApp
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-coral)] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(255,122,89,0.35)]"
            >
              Book Free Counselling
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[color:rgba(15,39,71,0.12)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-navy)] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <Menu
                className={cn(
                  "absolute size-5 transition-all duration-200 ease-out",
                  isMenuOpen
                    ? "scale-75 rotate-90 opacity-0"
                    : "scale-100 rotate-0 opacity-100",
                )}
              />
              <X
                className={cn(
                  "absolute size-5 transition-all duration-200 ease-out",
                  isMenuOpen
                    ? "scale-100 rotate-0 opacity-100"
                    : "scale-75 -rotate-90 opacity-0",
                )}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "absolute inset-x-4 top-full z-40 overflow-hidden rounded-[1.75rem] border border-[color:rgba(15,39,71,0.1)] bg-[color:rgba(248,250,252,0.98)] shadow-[0_24px_60px_rgba(15,39,71,0.16)] transition-all duration-250 ease-out lg:hidden",
            isMenuOpen
              ? "pointer-events-auto mt-3 max-h-[24rem] opacity-100"
              : "pointer-events-none mt-1 max-h-0 opacity-0",
          )}
          aria-hidden={!isMenuOpen}
        >
          <nav
            className={cn(
              "grid gap-2 p-4 transition-all duration-250 ease-out",
              isMenuOpen ? "translate-y-0" : "-translate-y-2",
            )}
            aria-label="Mobile primary"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[1.25rem] px-4 py-3 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center rounded-full border border-[color:rgba(15,39,71,0.12)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-navy)]"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp
              </a>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-coral)] px-5 py-3 text-sm font-semibold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Free Counselling
              </a>
            </div>
          </nav>
        </div>
      </header>

      {isMenuOpen ? (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-20 bg-[color:rgba(11,28,52,0.28)] backdrop-blur-[3px] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : null}

      <section className="border-b border-[color:rgba(15,39,71,0.12)] bg-[radial-gradient(circle_at_top,_rgba(255,122,89,0.18),_transparent_24%),linear-gradient(180deg,_#f8fafc_0%,_#f4e7d3_100%)]">
        <div id="top" className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-24">
          <Reveal className="max-w-3xl" delay={40}>
            <div className="inline-flex items-center gap-3 rounded-full border border-[color:rgba(15,39,71,0.12)] bg-white/78 px-4 py-2 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-coral)]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
                {corridor.label} corridor specialist
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
                href={whatsappHref}
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
          </Reveal>

          <Reveal delay={140}>
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
                  alt={`Illustration of the ${corridor.label} study route`}
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
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="max-w-3xl">
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
          </Reveal>
          <div className="grid gap-4">
            {fitCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 90} className="h-full">
                <article className="flex h-full flex-col rounded-[1.75rem] border border-[color:rgba(15,39,71,0.08)] bg-white p-6 shadow-[0_18px_40px_rgba(15,39,71,0.04)]">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-eucalyptus)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--color-navy)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-xl flex-1 text-base leading-7 text-[color:rgba(27,27,27,0.72)]">
                    {card.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
              Nepal to Australia roadmap
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-navy)] sm:text-[2.8rem]">
              Your path in 6 clear steps.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[color:rgba(27,27,27,0.72)]">
              No guesswork. No vague promises. Just the next right step.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ol className="relative grid gap-3 before:absolute before:bottom-5 before:left-[1.2rem] before:top-5 before:w-px before:bg-[color:rgba(15,39,71,0.14)] sm:before:left-[1.3rem]">
            {roadmap.map((step, index) => (
              <li
                key={step.title}
                className="relative flex gap-3 rounded-[1.25rem] border border-[color:rgba(15,39,71,0.09)] bg-[var(--color-cloud)] p-4 shadow-[0_14px_32px_rgba(15,39,71,0.04)]"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-[var(--color-navy)] font-mono text-xs text-white shadow-[0_10px_24px_rgba(15,39,71,0.16)]">
                  0{index + 1}
                </span>
                <div className="pt-0.5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-eucalyptus)]">
                    {step.tag}
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold leading-6 text-[var(--color-navy)] sm:text-[1.05rem]">
                    {step.title}
                  </h3>
                </div>
              </li>
            ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
              Why students from Nepal choose Australia
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-navy)] sm:text-5xl">
              A destination choice is also a life setup choice.
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 80} className="h-full">
                <article className="flex h-full flex-col rounded-[1.75rem] border border-[color:rgba(15,39,71,0.08)] bg-[color:rgba(244,231,211,0.45)] p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
                    Reason 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--color-navy)]">
                    {reason.title}
                  </h3>
                  <p className="mt-3 max-w-2xl flex-1 text-base leading-7 text-[color:rgba(27,27,27,0.75)]">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-navy)] text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-[color:rgba(244,231,211,0.8)]">
              Course + city match
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight !text-white sm:text-5xl">
              Popular choices for Nepali students.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {courseMatches.map((match) => (
              <Reveal key={match.course} delay={90} className="h-full">
                <article className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/6 p-6 transition-colors duration-300 ease-in-out hover:bg-white/9">
                  <p className="font-mono text-sm uppercase tracking-[0.22em] text-[color:rgba(244,231,211,0.8)]">
                    {match.cities}
                  </p>
                  <div className="mt-4 flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold !text-white">{match.course}</h3>
                    <p className="mt-3 flex-1 text-base leading-7 text-white/78">
                      {match.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="budget" className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-18 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <Reveal>
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
              <Reveal key={card.label} delay={60} className="h-full">
                <div className="flex h-full flex-col rounded-[1.5rem] border border-[color:rgba(15,39,71,0.08)] bg-white p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-eucalyptus)]">
                    {card.label}
                  </p>
                  <p className="mt-3 flex-1 text-lg font-semibold leading-7 text-[var(--color-navy)]">
                    {card.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="rounded-[2rem] border border-[color:rgba(15,39,71,0.08)] bg-white p-8 shadow-[0_18px_40px_rgba(15,39,71,0.05)]">
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
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#lead-form"
              className="inline-flex rounded-full bg-[var(--color-navy)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-eucalyptus)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(15,39,71,0.14)]"
            >
              Get your document review
            </a>
            <span className="rounded-full border border-[color:rgba(15,39,71,0.08)] bg-[var(--color-cloud)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-eucalyptus)]">
              Coming soon
            </span>
          </div>
        </Reveal>
      </section>

      <section id="stories" className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
          <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {stories.map((story, index) => (
              <Reveal key={`${story.student}-${story.destination}`} delay={index * 100} className="h-full">
                <article className="flex h-full flex-col rounded-[1.75rem] border border-[color:rgba(15,39,71,0.08)] bg-[var(--color-cloud)] p-7 transition-transform duration-300 ease-in-out hover:-translate-y-1">
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

                  <p className="mt-6 flex-1 text-lg leading-8 text-[var(--color-ink)]">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] bg-[var(--color-navy)] px-8 py-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
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
          </Reveal>
          <Reveal delay={120} className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/6 p-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:rgba(244,231,211,0.8)]">
                Reach us
              </p>
              <p className="mt-3 text-base font-semibold">
                Phone, WhatsApp, and email
              </p>
              <p className="mt-1 text-sm text-white/72">{contactPhone}</p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-1 inline-block text-sm text-white/72 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {contactEmail}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:rgba(244,231,211,0.8)]">
                Office signal
              </p>
              <p className="mt-3 text-base font-semibold">
                Australia-based counsellor
              </p>
              <p className="mt-1 text-sm text-white/72">
                Remote guidance from Australia
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
          </Reveal>
        </div>
      </section>

      <section id="faq" className="bg-[color:rgba(244,231,211,0.5)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <Reveal>
              <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--color-eucalyptus)]">
                FAQ
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[var(--color-navy)] sm:text-5xl">
                Questions students and families ask before they commit.
              </h2>
            </Reveal>
            <Reveal delay={100}>
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
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 lg:px-10">
        <Reveal
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
              <p className="mb-4 text-sm leading-6 text-[color:rgba(27,27,27,0.64)]">
                Send us your details and message. If your timeline is urgent,
                use WhatsApp for the fastest reply.
              </p>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="relative overflow-hidden border-t border-[color:rgba(15,39,71,0.08)] bg-[linear-gradient(180deg,_rgba(15,39,71,1)_0%,_rgba(11,28,52,1)_100%)] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,_transparent,_rgba(244,231,211,0.7),_transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(255,122,89,0.18),_transparent_48%)]" />
        <div className="pointer-events-none absolute -right-24 top-16 h-64 w-64 rounded-full border border-white/6 bg-[radial-gradient(circle,_rgba(244,231,211,0.08),_transparent_68%)] blur-2xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 py-18 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-18 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:rgba(244,231,211,0.74)]">
                {brandName}
              </p>
              <span className="h-px w-14 bg-[linear-gradient(90deg,_rgba(244,231,211,0.6),_transparent)]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[color:rgba(248,250,252,0.42)]">
                Final note
              </p>
            </div>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[0.98] !text-white sm:text-5xl lg:text-[3.65rem]">
              A more grounded way
              <br className="hidden sm:block" />
              to plan the {corridor.label} route.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[color:rgba(248,250,252,0.74)] sm:text-lg">
              Built for students and families who want course fit, cost
              clarity, and visa preparation explained properly instead of being
              rushed into a generic shortlist.
            </p>
          </div>

          <div className="grid gap-8 border-t border-white/10 pt-8 lg:border-t-0 lg:border-l lg:pl-14 lg:pt-1">
            <a
              href={phoneHref}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(255,122,89,0.34)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:rgba(244,231,211,0.58)]">
                Phone
              </p>
              <p className="mt-2 text-[1.9rem] leading-[1.05] text-white transition-colors group-hover:text-[color:rgba(244,231,211,0.92)]">
                {contactPhone}
              </p>
            </a>

            <a
              href={emailHref}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(255,122,89,0.34)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:rgba(244,231,211,0.58)]">
                Email
              </p>
              <p className="mt-2 text-lg leading-[1.2] text-white transition-colors group-hover:text-[color:rgba(244,231,211,0.92)] sm:text-xl">
                {contactEmail}
              </p>
            </a>

            <a
              href={whatsappHref}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(255,122,89,0.34)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:rgba(244,231,211,0.58)]">
                WhatsApp
              </p>
              <p className="mt-2 text-lg leading-[1.2] text-[color:rgba(255,240,236,0.92)] transition-colors group-hover:text-white sm:text-xl">
                Message for the fastest reply
              </p>
            </a>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-[color:rgba(248,250,252,0.52)] sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <p className="max-w-xl">
                {brandName}. Corridor-focused guidance for {corridor.label}.
              </p>
              <a
                href="#lead-form"
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:rgba(244,231,211,0.82)] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(255,122,89,0.34)]"
              >
                Book counselling
              </a>
            </div>
            <p>© 2026 {brandName}. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
