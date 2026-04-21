"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Loader2, CheckCircle2, AlertCircle, User, Mail, BookOpen, MessageSquare } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { fadeUp } from "./SummarySection";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <AnimatePresence>
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22 }}
        className="mt-1.5 text-xs font-medium flex items-center gap-1.5"
        style={{ color: "#e05252" }}
        aria-live="polite"
      >
        <AlertCircle size={12} />
        {errors[0]}
      </motion.p>
    </AnimatePresence>
  );
}

const inputBase = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(248,171,29,0.18)",
  color: "#ffffff",
  fontFamily: "var(--font-body)",
  transition: "border-color 0.2s, box-shadow 0.2s",
} as const;

const inputFocusClass =
  "focus:outline-none focus-visible:ring-0 placeholder:text-white/30";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  // Clear the form on success
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <motion.div
      variants={fadeUp}
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(13,43,35,0.92) 0%, rgba(28,82,68,0.85) 100%)",
        border: "1px solid rgba(248,171,29,0.15)",
        boxShadow: "0 32px 64px rgba(13,43,35,0.3)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Decorative amber glow top-right */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #F8AB1D 0%, transparent 70%)" }}
      />

      <div className="relative z-10 p-8 sm:p-10">
        {/* Header */}
        <div className="mb-8">
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: "var(--color-amber)", fontFamily: "var(--font-heading)" }}
          >
            Send an Enquiry
          </p>
          <h3
            className="text-2xl sm:text-3xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get in Touch
          </h3>
          <p className="text-white/50 text-sm mt-2 leading-relaxed">
            Fill in the form and our executive team will respond to your enquiry within one business day.
          </p>
        </div>

        {/* Success Banner */}
        <AnimatePresence>
          {state.status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 rounded-2xl p-4 flex items-start gap-3"
              style={{
                background: "rgba(28,82,68,0.6)",
                border: "1px solid rgba(248,171,29,0.35)",
              }}
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 size={20} className="shrink-0 mt-0.5" style={{ color: "var(--color-amber)" }} />
              <p className="text-white/90 text-sm leading-relaxed">{state.message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <form ref={formRef} action={formAction} noValidate className="flex flex-col gap-5">
          {/* Name + Email row */}
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "var(--color-amber)", fontFamily: "var(--font-heading)" }}
              >
                <User size={12} />
                Full Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="John Smith"
                required
                autoComplete="name"
                className={`w-full rounded-xl px-4 py-3 text-sm ${inputFocusClass}`}
                style={inputBase}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(248,171,29,0.55)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(248,171,29,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(248,171,29,0.18)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <FieldError errors={state.errors?.name} />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "var(--color-amber)", fontFamily: "var(--font-heading)" }}
              >
                <Mail size={12} />
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="john@company.com"
                required
                autoComplete="email"
                className={`w-full rounded-xl px-4 py-3 text-sm ${inputFocusClass}`}
                style={inputBase}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(248,171,29,0.55)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(248,171,29,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(248,171,29,0.18)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <FieldError errors={state.errors?.email} />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="contact-subject"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-amber)", fontFamily: "var(--font-heading)" }}
            >
              <BookOpen size={12} />
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Trade Enquiry — Non-Manufactured Gold"
              required
              className={`w-full rounded-xl px-4 py-3 text-sm ${inputFocusClass}`}
              style={inputBase}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(248,171,29,0.55)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(248,171,29,0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(248,171,29,0.18)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <FieldError errors={state.errors?.subject} />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-amber)", fontFamily: "var(--font-heading)" }}
            >
              <MessageSquare size={12} />
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Please describe your enquiry or business interest in detail…"
              required
              className={`w-full rounded-xl px-4 py-3 text-sm resize-none ${inputFocusClass}`}
              style={inputBase}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(248,171,29,0.55)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(248,171,29,0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(248,171,29,0.18)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <FieldError errors={state.errors?.message} />
          </div>

          {/* Generic error */}
          <AnimatePresence>
            {state.status === "error" && !Object.keys(state.errors ?? {}).length && (
              <motion.p
                key="generic-error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm flex items-center gap-2"
                style={{ color: "#e05252" }}
                role="alert"
                aria-live="assertive"
              >
                <AlertCircle size={14} />
                {state.message}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isPending}
            whileHover={!isPending ? { y: -2, boxShadow: "0 12px 32px rgba(248,171,29,0.35)" } : {}}
            whileTap={!isPending ? { scale: 0.98 } : {}}
            transition={{ duration: 0.2 }}
            className="mt-2 w-full flex items-center justify-center gap-3 rounded-2xl py-4 text-sm font-bold tracking-wide cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: isPending
                ? "rgba(248,171,29,0.6)"
                : "var(--color-amber)",
              color: "var(--color-forest-dark)",
              fontFamily: "var(--font-heading)",
              boxShadow: "0 4px 16px rgba(248,171,29,0.2)",
            }}
            aria-label="Submit contact form"
          >
            {isPending ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending Enquiry…
              </>
            ) : (
              <>
                <Send size={16} />
                Send Enquiry
              </>
            )}
          </motion.button>

          <p className="text-white/25 text-[10px] text-center tracking-wide">
            For official correspondence only. All communications are treated with strict confidentiality.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
