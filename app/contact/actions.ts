"use server";

import nodemailer from "nodemailer";
import { buildEnquiryEmail } from "./email-template";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

// ─── Nodemailer Transporter ────────────────────────────────────────────────────
// Reads credentials from environment variables (set these in your .env.local
// file for local dev and in Plesk's Node.js env var settings on the server).
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: (process.env.SMTP_SECURE ?? "true") === "true", // true for port 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// ─── Server Action ─────────────────────────────────────────────────────────────
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  // ── Server-side validation ──
  const errors: ContactFormState["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = ["Please enter your full name (at least 2 characters)."];
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = ["Please enter a valid email address."];
  }

  if (!subject || subject.length < 3) {
    errors.subject = ["Please enter a subject (at least 3 characters)."];
  }

  if (!message || message.length < 10) {
    errors.message = ["Please enter your message (at least 10 characters)."];
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please correct the errors below.", errors };
  }

  const timestamp = new Date().toISOString();

  // ── Send email ──
  try {
    const transporter = createTransporter();

    // The recipient(s) — comma-separated list from env, e.g. "a@b.com,c@d.com"
    const recipients = process.env.CONTACT_FORM_RECIPIENTS ?? process.env.SMTP_USER ?? "";

    if (!recipients) {
      console.error("[ContactForm] CONTACT_FORM_RECIPIENTS is not set.");
      throw new Error("Recipient email is not configured.");
    }

    const htmlBody = buildEnquiryEmail({ name, email, subject, message, timestamp });

    await transporter.sendMail({
      from: `"Prime Terra Website" <${process.env.SMTP_USER}>`,
      to: recipients,
      replyTo: `"${name}" <${email}>`,
      subject: `[Website Enquiry] ${subject}`,
      html: htmlBody,
      // Plain-text fallback for email clients that don't render HTML
      text: `New enquiry from ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}\n\nReceived: ${timestamp}`,
    });

    console.log(`[ContactForm] Enquiry from ${email} sent to ${recipients}`);
  } catch (err) {
    console.error("[ContactForm] Failed to send email:", err);
    return {
      status: "error",
      message:
        "We were unable to send your message at this time. Please try again later or reach out to us directly.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you for your enquiry. Our executive team will be in touch shortly.",
  };
}
