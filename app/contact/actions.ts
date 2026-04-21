"use server";

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

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  // Server-side validation
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

  // TODO: Integrate an email service (e.g. Resend, SendGrid) here.
  // For now, log the submission and return success.
  console.log("[ContactForm] New enquiry received:", {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  });

  return {
    status: "success",
    message:
      "Thank you for your enquiry. Our executive team will be in touch shortly.",
  };
}
