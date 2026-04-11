"use client";
import { motion, Variants } from "motion/react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function Badge({ text }: { text: string }) {
  return (
    <span
      className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
      style={{
        color: "var(--color-forest)",
        background: "rgba(28,82,68,0.1)",
        border: "1px solid rgba(28,82,68,0.25)",
        fontFamily: "var(--font-heading)",
      }}
    >
      {text}
    </span>
  );
}

export default function SummarySection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <Badge text="About Us" />
              <h2
                className="text-4xl sm:text-5xl font-extrabold mb-8"
                style={{
                  color: "var(--color-forest)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Executive Summary
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-5">
              <p className="text-charcoal-light leading-relaxed">
                PRIME TERRA GLOBAL VENTURES is a Dubai-based Free Zone Company
                incorporated under the Dubai Integrated Economic Zones Authority
                (DIEZA). Operating as a highly specialized proprietary trading
                firm, the company&apos;s primary mandate is the international
                trade of non-manufactured Gold and Silver.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Unlike traditional intermediaries, Prime Terra operates strictly
                on its own behalf. We acquire raw and unrefined gold and silver,
                oversee internal processing through accredited international
                refineries, and execute direct sales to institutional buyers.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                To optimize these proprietary trading operations, the company
                legally integrates its two supplementary business licenses —
                Financing Broker and Management Consultancies. These internal
                support mechanisms allow Prime Terra to efficiently structure
                its own trade capital and apply decades of executive management
                and supply chain expertise to the precious metals sector.
              </p>
            </motion.div>
          </motion.div>

          {/* Corporate Info Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-3xl overflow-hidden"
            style={{
              border: "1px solid rgba(28,82,68,0.15)",
              boxShadow: "0 16px 48px rgba(28,82,68,0.08)",
            }}
          >
            <div
              className="px-7 py-5"
              style={{ background: "var(--color-forest)" }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase text-amber mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Corporate Information
              </p>
              <p className="text-white/60 text-sm">Legal entity details</p>
            </div>
            <div
              className="divide-y"
              style={{ borderColor: "rgba(28,82,68,0.1)" }}
            >
              {[
                {
                  label: "Legal Entity Name",
                  value:
                    "PRIME TERRA GLOBAL VENTURES NON MANUFACTURED PRECIOUS METAL TRADING - FZCO",
                },
                {
                  label: "Business Type",
                  value: "Free Zone Company with Limited Liability (FZCO)",
                },
                { label: "Registration Number", value: "75073" },
                { label: "License Number", value: "76822" },
                { label: "Formation Date", value: "January 2, 2026" },
                {
                  label: "Jurisdiction",
                  value:
                    "Dubai Silicon Oasis (IFZA), Dubai, United Arab Emirates",
                },
                { label: "Primary Currency", value: "USD" },
              ].map((row) => (
                <div key={row.label} className="flex gap-4 px-7 py-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wide shrink-0 w-36 pt-0.5"
                    style={{
                      color: "var(--color-forest)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {row.label}
                  </span>
                  <span className="text-sm text-charcoal leading-snug">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
