import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 py-16 dark:bg-black">
      <main className="flex w-full max-w-5xl flex-col gap-16 px-6 sm:px-10">
        <section className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-black md:p-12">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
              Get Migrated
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Clear migration guidance from Nepal to Australia.
            </h1>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Share your situation and goals. We will follow up with practical,
              step-by-step advice tailored to your pathway.
            </p>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-black md:p-12"
        >
          <div className="mb-6 space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Tell us where you are in your journey
            </h2>
            <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Fill in your details and message. We will respond with the next
              steps you can take confidently.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
