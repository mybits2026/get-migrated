"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { IntakeForm } from "@/components/IntakeForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-cloud font-sans text-ink">
      {/* Navbar/Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
        <div className="font-bold text-xl text-trust tracking-tight">Get Migrated</div>
        <a href="#intake" className="text-sm font-semibold text-trust hover:text-action transition-colors">
          Start Intake
        </a>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-trust mb-6 leading-[1.1] tracking-tight">
          PR Readiness, planned properly.
        </h1>
        <p className="text-xl text-ink/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get a clear, honest, and actionable roadmap for your PR journey in Australia before you spend thousands on a migration agent.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#intake" className={buttonVariants({ variant: "default", size: "lg", className: "text-lg px-8 rounded-full" })}>
            Start Your Free Intake
          </a>
        </div>
      </section>

      {/* The 3-Step Clear Path */}
      <section className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-trust text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="size-16 rounded-full bg-cloud flex items-center justify-center text-2xl font-black text-action mb-6 border border-gray-100">
                1
              </div>
              <h3 className="font-bold text-xl mb-3 text-trust">The Intake</h3>
              <p className="text-ink/70 leading-relaxed max-w-sm">
                Tell us about your visa status, goals, and blockers in a quick 3-step form. No account required.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="size-16 rounded-full bg-cloud flex items-center justify-center text-2xl font-black text-action mb-6 border border-gray-100">
                2
              </div>
              <h3 className="font-bold text-xl mb-3 text-trust">The Review</h3>
              <p className="text-ink/70 leading-relaxed max-w-sm">
                Our experts manually review your case to check for immediate red flags or clear pathways.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="size-16 rounded-full bg-cloud flex items-center justify-center text-2xl font-black text-action mb-6 border border-gray-100">
                3
              </div>
              <h3 className="font-bold text-xl mb-3 text-trust">The Action Plan</h3>
              <p className="text-ink/70 leading-relaxed max-w-sm">
                Receive a personalized Guided Action Plan outlining your next steps and exactly when to see a licensed agent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section id="intake" className="py-24 px-6 bg-cloud">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trust mb-4">Start Your Intake</h2>
          <p className="text-lg text-ink/70">
            It takes 2 minutes. We use this to decide if we can help you and to prepare your Guided Action Plan.
          </p>
        </div>
        <IntakeForm />
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100 text-center">
        <p className="text-sm text-ink/50 mb-4">
          Get Migrated is a preparation and clarity service. We do not provide final legal migration advice.
        </p>
        <p className="text-sm text-ink/50">
          © {new Date().getFullYear()} Get Migrated.
        </p>
      </footer>
    </main>
  );
}
