"use client";
import { motion } from "motion/react";
import Badge from "../Badge";
import { fadeUp, staggerContainer } from "./SummarySection";
import { Coins, AlertCircle, ShieldCheck } from "lucide-react";

const tradingItems = [
  {
    title: "Proprietary Sourcing",
    description:
      "Direct acquisition of raw and unrefined Gold and Silver from verified sources on the company's own account and sell to institutional global buyers.",
  },
  {
    title: "Processing Coordination",
    description:
      "Strategic partnerships with accredited international refineries to purify inventory into market-ready forms.",
  },
  {
    title: "Asset Management",
    description:
      "Operating strictly as a principal trader, the company holds, transports, and transacts physical gold and silver to capitalize on global spot market conditions.",
  },
];

const footerNote =
  "Operating strictly as a principal trader with no third-party brokerage or custody services provided.";

export default function BusinessPillars() {
  return (
    <section
      id="business"
      className="py-16 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f8fbf9 0%, #fff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-10"
        >
          <motion.div variants={fadeUp}>
            <Badge text="What We Do" />
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 max-w-4xl text-forest-dark font-heading">
              Strategic Business Pillars
            </h2>
            <p className="text-charcoal-light max-w-2xl leading-relaxed">
              Prime Terra Global Ventures operates through three synergistic
              business activities, all legally authorized under its DIEZA Trade
              License. The secondary activities serve as dedicated internal
              support structures for the primary trading operations.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="rounded-3xl overflow-hidden"
          style={{ boxShadow: "0 12px 40px rgba(28,82,68,0.12)", border: "1px solid rgba(28,82,68,0.1)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* ── Left: Identity Panel ── */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 flex flex-col justify-center gap-5 p-8 md:p-10"
              style={{ background: "var(--color-forest)" }}
            >
              {/* Icon + label row */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--color-amber)", color: "var(--color-forest-dark)" }}
                >
                  <Coins size={22} />
                </div>
                <span
                  className="text-[10px] font-bold tracking-[0.22em] uppercase"
                  style={{ color: "rgba(248,171,29,0.8)" }}
                >
                  Primary Mandate
                </span>
              </div>

              {/* Title + subtitle */}
              <div>
                <h3
                  className="text-2xl md:text-3xl font-extrabold leading-tight text-white mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Precious Metal Trading
                </h3>
                <p className="text-white/55 text-sm">
                  The Company&apos;s Primary Mandate
                </p>
              </div>

              {/* Amber accent rule */}
              <div
                className="w-12 h-0.5 rounded-full"
                style={{ background: "var(--color-amber)" }}
              />

              {/* Key facts strip */}
              <div className="flex flex-col gap-2">
                {["Gold & Silver", "Institutional Buyers", "Global Markets"].map((tag) => (
                  <div key={tag} className="flex items-center gap-2">
                    <ShieldCheck size={13} style={{ color: "rgba(248,171,29,0.6)" }} />
                    <span className="text-white/60 text-xs">{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Feature Rows ── */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-3 bg-white flex flex-col divide-y"
              style={{ borderColor: "rgba(28,82,68,0.08)" }}
            >
              {tradingItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group flex gap-4 px-8 md:px-10 py-6 transition-colors duration-200 hover:bg-[#f8fbf9]"
                >
                  {/* Left accent bar */}
                  <div
                    className="w-0.5 shrink-0 rounded-full self-stretch transition-colors duration-200 group-hover:opacity-100 opacity-40"
                    style={{ background: "var(--color-amber)" }}
                  />

                  {/* Content */}
                  <div className="flex flex-col gap-1">
                    <h4
                      className="text-[14px] font-bold text-forest-dark"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-charcoal-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Footer note */}
              <div
                className="px-8 md:px-10 py-4 flex gap-2.5 items-start"
                style={{ background: "rgba(28,82,68,0.025)" }}
              >
                <AlertCircle size={14} className="shrink-0 mt-0.5 text-amber-dark" />
                <p className="text-[11px] leading-relaxed italic text-charcoal-light">
                  {footerNote}
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Foundation Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px w-full mt-14"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(28,82,68,0.1) 50%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
