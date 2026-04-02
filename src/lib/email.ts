import "server-only";

import { Resend } from "resend";
import type { ContactFormPayload } from "@/types/contact";

const resendApiKey = process.env.RESEND_API_KEY?.trim();
const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim();
const defaultFromEmail = "onboarding@resend.dev";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendLeadEmail(payload: ContactFormPayload) {
  if (!resend) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  if (!contactToEmail) {
    throw new Error("CONTACT_TO_EMAIL is not configured");
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || defaultFromEmail;
  const submittedAt = new Date().toISOString();

  const subject = `New lead from ${payload.name}`;
  const text = [
    "A new lead was submitted from the homepage contact form.",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Submitted at (UTC): ${submittedAt}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const html = `
    <h2>New Lead Submission</h2>
    <p>A new lead was submitted from the homepage contact form.</p>
    <ul>
      <li><strong>Name:</strong> ${escapeHtml(payload.name)}</li>
      <li><strong>Email:</strong> ${escapeHtml(payload.email)}</li>
      <li><strong>Submitted at (UTC):</strong> ${escapeHtml(submittedAt)}</li>
    </ul>
    <h3>Message</h3>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
  `;

  await resend.emails.send({
    from: fromEmail,
    to: contactToEmail,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}