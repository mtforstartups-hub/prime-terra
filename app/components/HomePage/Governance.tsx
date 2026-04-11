"use client";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "./SummarySection";
import { Leaf, Scale, ShieldCheck } from "lucide-react";

function GovCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-3xl p-7 flex flex-col gap-4 h-full"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
        style={{
          background: "rgba(248,171,29,0.15)",
          color: "var(--color-amber)",
        }}
      >
        {icon}
      </div>
      <h3
        className="text-lg font-bold text-white"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Governance() {
  return (
    <section
      id="governance"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--color-forest-dark)" }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-14"
        >
          <motion.div variants={fadeUp}>
            <span
              className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
              style={{
                color: "var(--color-amber)",
                background: "rgba(248,171,29,0.1)",
                border: "1px solid rgba(248,171,29,0.25)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Compliance
            </span>
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-4 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Corporate Governance &amp; Compliance
            </h2>
            <p className="text-white/60 max-w-2xl leading-relaxed">
              Prime Terra Global Ventures maintains a rigorous corporate
              governance framework to ensure all physical commodity trading is
              conducted with the highest ethical and legal standards.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          <GovCard
            icon={<Scale size={20} />}
            title="Institutional Framework"
            description="We operate in strict adherence to Dubai Law No. 16 of 2021 and DIEZA Implementing Regulations 2023."
          />
          <GovCard
            icon={<ShieldCheck size={20} />}
            title="AML & CFT Compliance"
            description="The company maintains a comprehensive Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) Standard Operating Procedure. We conduct thorough Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) to verify the legal origin of all gold and silver sourced."
          />
          <GovCard
            icon={<Leaf size={20} />}
            title="Responsible Sourcing"
            description="We align our proprietary trading operations with the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals, ensuring that all gold and silver acquisitions meet international ethical sourcing standards and are free from conflict-affected areas."
          />
        </motion.div>
      </div>
    </section>
  );
}
