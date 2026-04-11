"use client";
import { motion } from "motion/react";
import Badge from "../Badge";
import { fadeUp, staggerContainer } from "./SummarySection";
import { BarChart3, Factory, Handshake } from "lucide-react";

function PillarCard({
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
      className="rounded-3xl p-7 flex flex-col gap-4 h-full transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(28,82,68,0.05)",
        border: "1px solid rgba(28,82,68,0.15)",
      }}
      whileHover={{ boxShadow: "0 12px 40px rgba(28,82,68,0.12)" }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
        style={{
          background: "var(--color-forest)",
          color: "var(--color-amber)",
        }}
      >
        {icon}
      </div>
      <h3
        className="text-lg font-bold text-charcoal"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="text-charcoal-light text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function BusinessPillars() {
  return (
    <section
      id="business"
      className="py-24"
      style={{ background: "linear-gradient(180deg, #f8fbf9 0%, #fff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-14"
        >
          <motion.div variants={fadeUp}>
            <Badge text="What We Do" />
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              style={{
                color: "var(--color-forest-dark)",
                fontFamily: "var(--font-heading)",
              }}
            >
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

        {/* Pillar I */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="mb-6">
            <span
              className="text-xs font-bold tracking-widest uppercase mr-2"
              style={{ color: "var(--color-forest)" }}
            >
              Pillar I
            </span>
            <span className="text-charcoal font-bold text-lg">
              Non-Manufactured Precious Metal Trading{" "}
              <span style={{ color: "var(--color-forest)" }}>
                (Primary Mandate)
              </span>
            </span>
            <p className="text-charcoal-light text-sm mt-1">
              Our core business is the proprietary trading of non-manufactured{" "}
              <strong>Gold</strong> and <strong>Silver</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <PillarCard
              icon={<Handshake size={20} />}
              title="Proprietary Sourcing & Sales"
              description="We purchase raw/unrefined gold and silver on our own account and sell to institutional global buyers."
            />
            <PillarCard
              icon={<Factory size={20} />}
              title="Processing Coordination"
              description="We coordinate independently with accredited international refineries to purify our proprietary inventory into market-ready forms."
            />
            <PillarCard
              icon={<BarChart3 size={20} />}
              title="Asset Management"
              description="Operating strictly as a principal trader, the company holds, transports, and transacts physical gold and silver to capitalize on global spot market conditions."
            />
          </div>
        </motion.div>

        {/* Pillar II & III */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Pillar II */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl p-8"
            style={{
              background: "rgba(28,82,68,0.04)",
              border: "1px solid rgba(28,82,68,0.15)",
            }}
          >
            <span
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: "var(--color-forest)" }}
            >
              Pillar II
            </span>
            <h3
              className="text-2xl font-extrabold mt-1 mb-1"
              style={{
                color: "var(--color-forest-dark)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Financing Broker
            </h3>
            <p
              className="text-sm italic mb-5"
              style={{ color: "var(--color-forest)" }}
            >
              Internal Capital Structuring
            </p>
            <div
              className="rounded-2xl p-4 mb-5 text-sm italic"
              style={{
                background: "rgba(248,171,29,0.08)",
                border: "1px solid rgba(248,171,29,0.2)",
                color: "var(--color-charcoal)",
              }}
            >
              Please note: Prime Terra Global Ventures does not act as a lender,
              nor do we provide supply chain financing or credit facilities to
              third parties. Our &quot;Financing Broker&quot; activity is
              strictly an internal enablement tool.
            </div>
            <p className="text-sm text-charcoal-light mb-3">
              It allows the company to:
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Structure and optimize capital for our own proprietary precious metal purchases.",
                "Manage internal cash flow during international commodity trading cycles.",
                "Establish internal letters of credit and multi-currency settlements to facilitate our own cross-border physical gold and silver transactions.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-charcoal-light"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: "var(--color-forest)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pillar III */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl p-8 text-white"
            style={{ background: "var(--color-forest)" }}
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-amber">
              Pillar III
            </span>
            <h3
              className="text-2xl font-extrabold mt-1 mb-1 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Management Consultancies
            </h3>
            <p className="text-sm italic mb-5 text-amber">Strategic Advisory</p>
            <p className="text-sm text-white/75 mb-5 leading-relaxed">
              Leveraging our founder&apos;s 20+ years in IT/Management
              consulting and 40-year family legacy in the jewelry trade, this
              pillar provides high-level strategic advisory.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Optimizing global supply chains for precious metals.",
                "Advising on technology-enabled business transformation and enterprise integration within the physical commodities space.",
                "Driving operational scale and capital efficiency methodologies.",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-white/80">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: "var(--color-amber)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
