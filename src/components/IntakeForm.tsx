"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function IntakeForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    currentVisa: "",
    visaExpiry: "",
    currentStatus: "",
    location: "",

    goal: "",
    blocker: "",
    helpType: "",

    studyBackground: "",
    workBackground: "",
    englishTest: "",
    complexities: "",
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Submitted to tracker:", formData);
  };

  const updateData = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-xl mx-auto">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-trust mb-2">Intake Received</h3>
        <p className="text-ink/80 leading-relaxed mb-6">
          Our team is manually reviewing your case. We will prepare your Guided Action Plan to give you clarity and next steps. We&apos;ll be in touch within 1 working day.
        </p>
        <Button variant="trust" onClick={() => window.location.reload()}>
          Done
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-trust">
          {step === 1 && "Step 1: Current Situation"}
          {step === 2 && "Step 2: Your Goal"}
          {step === 3 && "Step 3: Background"}
        </h3>
        <span className="text-sm font-bold text-action bg-action/10 px-3 py-1 rounded-full">
          {step} of 3
        </span>
      </div>

      <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="space-y-2">
              <Label>Current Visa</Label>
              <Select required value={formData.currentVisa} onChange={(e) => updateData("currentVisa", e.target.value)}>
                <option value="" disabled>Select your visa...</option>
                <option value="500">Student (Subclass 500)</option>
                <option value="485">Temporary Graduate (Subclass 485)</option>
                <option value="482">Temporary Skill Shortage (Subclass 482)</option>
                <option value="Other">Other</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Visa Expiry</Label>
              <Input required type="date" value={formData.visaExpiry} onChange={(e) => updateData("visaExpiry", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Currently Doing</Label>
              <Select required value={formData.currentStatus} onChange={(e) => updateData("currentStatus", e.target.value)}>
                <option value="" disabled>Select status...</option>
                <option value="studying">Studying</option>
                <option value="working">Working</option>
                <option value="both">Both Studying & Working</option>
                <option value="neither">Neither</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>City & State</Label>
              <Input required placeholder="e.g. Sydney, NSW" value={formData.location} onChange={(e) => updateData("location", e.target.value)} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="space-y-2">
              <Label>What are you trying to figure out right now?</Label>
              <Textarea required placeholder="e.g. How to get 190 state sponsorship..." value={formData.goal} onChange={(e) => updateData("goal", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>What is your biggest PR blocker?</Label>
              <Textarea required placeholder="e.g. Points are too low, don't have skills assessment..." value={formData.blocker} onChange={(e) => updateData("blocker", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>What kind of help do you want?</Label>
              <Select required value={formData.helpType} onChange={(e) => updateData("helpType", e.target.value)}>
                <option value="" disabled>Select help type...</option>
                <option value="clarity">General clarity on my options</option>
                <option value="prep">Prep help before applying</option>
                <option value="expert">Ready for licensed expert review</option>
              </Select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="space-y-2">
              <Label>Study Background</Label>
              <Input required placeholder="e.g. Master of IT at UTS" value={formData.studyBackground} onChange={(e) => updateData("studyBackground", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Work Background (In Australia)</Label>
              <Input required placeholder="e.g. 1 year as Software Engineer" value={formData.workBackground} onChange={(e) => updateData("workBackground", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>English Test Status</Label>
              <Select required value={formData.englishTest} onChange={(e) => updateData("englishTest", e.target.value)}>
                <option value="" disabled>Select status...</option>
                <option value="proficient">Proficient (PTE 65+ / IELTS 7+)</option>
                <option value="superior">Superior (PTE 79+ / IELTS 8+)</option>
                <option value="planning">Planning to take it</option>
                <option value="not_needed">Not taken/needed</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Anything else making your case complex? (Optional)</Label>
              <Textarea placeholder="Dependents, previous refusals, etc." value={formData.complexities} onChange={(e) => updateData("complexities", e.target.value)} />
            </div>
          </div>
        )}

        <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
          {step > 1 ? (
            <Button type="button" variant="outline" onClick={handlePrev}>Back</Button>
          ) : (
            <div></div> // Spacer
          )}
          {step < 3 ? (
            <Button type="submit" variant="default">Next Step</Button>
          ) : (
            <Button type="submit" variant="default">Submit Intake</Button>
          )}
        </div>
      </form>
    </div>
  );
}
