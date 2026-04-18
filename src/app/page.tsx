import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-cloud">
      {/* Navbar/Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
        <div className="font-bold text-xl text-trust tracking-tight">Get Migrated</div>
        <Button className="bg-action text-white hover:opacity-90 rounded-full px-6">
          Start Intake
        </Button>
      </header>

      {/* Hero */}
      <section className="max-w-3xl mx-auto py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-trust mb-6 leading-tight">
          PR Readiness, planned properly.
        </h1>
        <p className="text-lg text-ink/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Get a clear, honest, and actionable roadmap for your PR journey in Australia before you spend thousands on a migration agent.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-trust text-white hover:opacity-90 rounded-full px-8 py-6 text-lg">
            Start Your Free Intake
          </Button>
        </div>
      </section>

      {/* The 3-Step Clear Path */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-trust text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-cloud shadow-sm rounded-2xl border border-gray-100">
              <div className="text-3xl font-black text-action mb-6">1</div>
              <h3 className="font-bold text-xl mb-3 text-trust">The Intake</h3>
              <p className="text-ink/80 leading-relaxed">
                Tell us about your visa status, goals, and blockers in a quick 3-step form. No account required.
              </p>
            </div>
            <div className="p-8 bg-cloud shadow-sm rounded-2xl border border-gray-100">
              <div className="text-3xl font-black text-action mb-6">2</div>
              <h3 className="font-bold text-xl mb-3 text-trust">The Review</h3>
              <p className="text-ink/80 leading-relaxed">
                Our experts manually review your case to check for immediate red flags or clear pathways.
              </p>
            </div>
            <div className="p-8 bg-cloud shadow-sm rounded-2xl border border-gray-100">
              <div className="text-3xl font-black text-action mb-6">3</div>
              <h3 className="font-bold text-xl mb-3 text-trust">The Action Plan</h3>
              <p className="text-ink/80 leading-relaxed">
                Receive a personalized Guided Action Plan outlining your next steps and exactly when to see a licensed agent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
