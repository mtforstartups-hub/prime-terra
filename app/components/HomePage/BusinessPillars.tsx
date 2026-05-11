"use client";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "./SummarySection";
import {
  AlertCircle,
  ShieldCheck,
  Coins,
  Compass,
  Factory,
  Building2,
  ArrowRight,
  Stone,
} from "lucide-react";

const tradingItems = [
  {
    title: "Proprietary Sourcing",
    description:
      "Direct acquisition of raw and unrefined Gold and Silver from verified sources on the company's own account and sell to institutional global buyers.",
    icon: Compass,
  },
  {
    title: "Processing Coordination",
    description:
      "Strategic partnerships with accredited international refineries to purify inventory into market-ready forms.",
    icon: Factory,
  },
  {
    title: "Asset Management",
    description:
      "Operating strictly as a principal trader, the company holds, transports, and transacts physical gold and silver to capitalize on global spot market conditions.",
    icon: Building2,
  },
];

const footerNote =
  "Operating strictly as a principal trader with no third-party brokerage or custody services provided.";

export default function BusinessPillars() {
  return (
    <section
      id="business"
      className="py-20 overflow-hidden relative"
      style={{
        background: "linear-gradient(180deg, #f8fbf9 0%, #ffffff 100%)",
      }}
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, var(--color-forest-dark) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-10 flex flex-col items-center text-center sm:items-start sm:text-left"
        >
          <motion.div variants={fadeUp}>
            {/* <span
              className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
              style={{
                color: "var(--color-amber)",
                background: "rgba(248,171,29,0.1)",
                border: "1px solid rgba(248,171,29,0.25)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Our Focus
            </span> */}
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              style={{
                color: "var(--color-forest-dark)",
                fontFamily: "var(--font-heading)",
              }}
            >
              What We Do
            </h2>
            {/* <p className="text-charcoal-light/80 max-w-2xl leading-relaxed text-sm sm:text-base">
              Prime Terra Global Ventures operates through three synergistic
              business activities, ensuring a secure and streamlined pipeline
              from raw acquisition to global market distribution.
            </p> */}
          </motion.div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="rounded-[2.5rem] overflow-hidden"
          style={{
            boxShadow: "0 20px 40px -10px rgba(28,82,68,0.15)",
            border: "1px solid rgba(28,82,68,0.08)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* ── Left: Identity Panel ── */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 relative flex flex-col justify-center gap-6 p-10 md:p-14 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-forest) 0%, var(--color-forest-dark) 100%)",
              }}
            >
              {/* Decorative Watermark */}
              <div className="absolute -bottom-16 -right-16 opacity-[0.04] text-white pointer-events-none transform -rotate-12">
                <Coins size={300} strokeWidth={1} />
              </div>

              {/* Icon + label row */}
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                  style={{
                    background: "rgba(248,171,29,0.15)",
                    border: "1px solid rgba(248,171,29,0.3)",
                    color: "var(--color-amber)",
                  }}
                >
                  <Stone size={22} />
                </div>
                {/* <span
                  className="text-[11px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-amber)" }}
                >
                  Primary Mandate
                </span> */}
              </div>

              {/* Title */}
              <div className="relative z-10">
                <h3
                  className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Precious Metal Trading
                </h3>

                {/* Amber accent rule */}
                <div
                  className="w-16 h-1 rounded-full opacity-80"
                  style={{ background: "var(--color-amber)" }}
                />
              </div>

              {/* Key facts glass pills */}
              <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                {[
                  "Gold & Silver",
                  "Institutional Buyers",
                  "Global Markets",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <ShieldCheck
                      size={14}
                      style={{ color: "var(--color-amber)" }}
                    />
                    <span className="text-white/80 text-xs font-medium tracking-wide">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Feature Rows ── */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-3 bg-white flex flex-col"
            >
              <div
                className="flex-1 flex flex-col divide-y"
                style={{ borderColor: "rgba(28,82,68,0.06)" }}
              >
                {tradingItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="group flex gap-5 px-8 md:px-12 py-8 transition-all duration-300 hover:bg-[#f8fbf9] cursor-default"
                    >
                      {/* Interactive Icon Container */}
                      <div className="shrink-0 mt-1 relative">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 bg-forest/5 group-hover:bg-forest/10">
                          <Icon
                            size={20}
                            style={{ color: "var(--color-forest)" }}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Content with slide effect */}
                      <div className="flex flex-col gap-2 transition-transform duration-300 group-hover:translate-x-1">
                        <h4
                          className="text-lg font-bold flex items-center gap-2"
                          style={{
                            color: "var(--color-forest-dark)",
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          {item.title}
                          <ArrowRight
                            size={14}
                            className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                            style={{ color: "var(--color-amber)" }}
                          />
                        </h4>
                        <p className="text-sm leading-relaxed text-charcoal-light/90">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer note */}
              <div
                className="px-8 md:px-12 py-5 flex gap-3 items-start border-t"
                style={{
                  background: "rgba(248,171,29,0.03)",
                  borderColor: "rgba(28,82,68,0.06)",
                }}
              >
                <AlertCircle
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--color-amber)" }}
                />
                <p
                  className="text-[12px] leading-relaxed italic"
                  style={{ color: "var(--color-forest-dark)" }}
                >
                  <span className="font-semibold opacity-80">
                    Important Note:
                  </span>{" "}
                  <span className="opacity-70">{footerNote}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Foundation Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="h-px w-full mt-16"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(28,82,68,0.15) 50%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
