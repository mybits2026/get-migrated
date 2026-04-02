import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/email";
import type { ContactFormPayload } from "@/types/contact";

export const runtime = "nodejs";

const maxNameLength = 120;
const maxEmailLength = 320;
const maxMessageLength = 4000;

export async function POST(request: Request) {
  let payload: ContactFormPayload;

  try {
    payload = (await request.json()) as ContactFormPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return NextResponse.json({ ok: false, message: validationError }, { status: 400 });
  }

  try {
    await sendLeadEmail({
      name: payload.name.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),
    });

    return NextResponse.json({ ok: true, message: "Lead submitted successfully." });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "We could not submit your message right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}

function validatePayload(payload: ContactFormPayload | null | undefined) {
  if (!payload || typeof payload !== "object") {
    return "Invalid payload.";
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return "Name, email, and message are required.";
  }

  if (name.length > maxNameLength) {
    return "Name is too long.";
  }

  if (email.length > maxEmailLength) {
    return "Email is too long.";
  }

  if (message.length > maxMessageLength) {
    return "Message is too long.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Please provide a valid email address.";
  }

  return null;
}