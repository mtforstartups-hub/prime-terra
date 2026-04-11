"use client";
import { motion } from "motion/react";
import Badge from "../Badge";
import { fadeUp, staggerContainer } from "./SummarySection";
import {
  Coins,
  Briefcase,
  Globe,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface PillarItem {
  title: string;
  description: string;
}

interface PillarProps {
  index: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: PillarItem[];
  footerNote?: string;
  isPrimary?: boolean;
}

function Pillar({
  index,
  icon,
  title,
  subtitle,
  items,
  footerNote,
  isPrimary,
}: PillarProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={`relative group flex flex-col h-full rounded-4xl overflow-hidden transition-all duration-500 hover:z-10`}
      style={{
        background: isPrimary ? "var(--color-forest)" : "white",
        border: isPrimary ? "none" : "1px solid rgba(28,82,68,0.12)",
        boxShadow: isPrimary
          ? "0 20px 50px rgba(28,82,68,0.15)"
          : "0 10px 30px rgba(0,0,0,0.02)",
      }}
    >
      {/* Background Index Number */}
      <div
        className={`absolute -top-4 -right-4 text-[120px] font-black leading-none select-none pointer-events-none opacity-[0.03] italic`}
        style={{ color: isPrimary ? "white" : "var(--color-forest)" }}
      >
        {index}
      </div>

      <div className="p-8 md:p-10 flex flex-col h-full">
        {/* Header Section */}
        <div className="mb-10">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
            style={{
              background: isPrimary
                ? "var(--color-amber)"
                : "rgba(28,82,68,0.05)",
              color: isPrimary
                ? "var(--color-forest-dark)"
                : "var(--color-forest)",
            }}
          >
            {icon}
          </div>

          <div className="flex flex-col gap-1">
            <span
              className="text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{
                color: isPrimary
                  ? "rgba(248,171,29,0.8)"
                  : "var(--color-amber-dark)",
              }}
            >
              Pillar {index}
            </span>
            <h3
              className={`text-2xl font-extrabold leading-tight`}
              style={{
                color: isPrimary ? "white" : "var(--color-forest-dark)",
                fontFamily: "var(--font-heading)",
              }}
            >
              {title}
            </h3>
            <p
              className={`text-sm font-medium mt-1 ${isPrimary ? "text-white/60" : "text-charcoal-light"}`}
            >
              {subtitle}
            </p>
          </div>
        </div>

        {/* Structured Items Section */}
        <div className="grow flex flex-col gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1 shrink-0">
                <CheckCircle2
                  size={18}
                  className={isPrimary ? "text-amber" : "text-forest"}
                  // style={{
                  //   color: isPrimary
                  //     ? "var(--color-amber)"
                  //     : "var(--color-forest)",
                  // }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4
                  className={`text-[15px] font-bold ${isPrimary ? "text-white" : "text-forest-dark"}`}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-sm leading-relaxed ${isPrimary ? "text-white/70" : "text-charcoal-light"}`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note Section (Maintains Symmetry) */}
        <div
          className={`mt-10 pt-6 border-t flex gap-3`}
          style={{
            borderColor: isPrimary
              ? "rgba(255,255,255,0.1)"
              : "rgba(28,82,68,0.08)",
          }}
        >
          {footerNote ? (
            <>
              <AlertCircle
                size={16}
                className={`shrink-0 mt-0.5 ${isPrimary ? "text-amber" : "text-amber-dark"}`}
              />
              <p
                className={`text-[11px] leading-relaxed italic ${isPrimary ? "text-white/50" : "text-charcoal-light"}`}
              >
                {footerNote}
              </p>
            </>
          ) : (
            <div className="h-4" /> // Empty space to keep alignment
          )}
        </div>
      </div>

      {/* Hover Decoration */}
      <motion.div className="absolute inset-0 border-2 border-transparent rounded-4xl pointer-events-none transition-colors duration-500 group-hover:border-amber/20" />
    </motion.div>
  );
}

export default function BusinessPillars() {
  const pillars = [
    {
      index: "01",
      icon: <Coins size={28} />,
      title: "Precious Metal Trading",
      subtitle: "The Company's Primary Mandate",
      isPrimary: true,
      items: [
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
      ],
      footerNote:
        "Operating strictly as a principal trader with no third-party brokerage or custody services provided.",
    },
    {
      index: "02",
      icon: <Briefcase size={28} />,
      title: "Financing Broker",
      subtitle: "Internal Capital Structuring",
      items: [
        {
          title: "Capital Optimization",
          description:
            "Structure and optimize capital for our own proprietary precious metal purchases.",
        },
        {
          title: "Internal Letters of Credit",
          description:
            "Manage internal cash flow during international commodity trading cycles.",
        },
        {
          title: "Cash Flow Management",
          description:
            "Establish internal letters of credit and multi-currency settlements to facilitate our own cross-border physical gold and silver transactions.",
        },
      ],
      footerNote:
        "This activity is strictly an internal enablement tool. Prime Terra does not act as a lender or provide credit to third parties.",
    },
    {
      index: "03",
      icon: <Globe size={28} />,
      title: "Management Consultancies",
      subtitle: "Strategic Advisory Support",
      items: [
        {
          title: "Supply Chain Strategy",
          description:
            "Advising on the optimization of global logistics and provenance tracking for high-value physical commodities.",
        },
        {
          title: "Operational Efficiency",
          description:
            "Applying IT-driven management methodologies to drive operational scale and minimize trade friction.",
        },
        {
          title: "Technological Integration",
          description:
            "Implementing advanced enterprise systems to enhance transparency and security within the trading lifecycle.",
        },
      ],
      footerNote:
        "Leveraging the founder's 20+ years of IT consulting expertise to create technology-enabled commodity operations.",
    },
  ];

  return (
    <section
      id="business"
      className="py-24 overflow-hidden"
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
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 max-w-4xl text-forest-dark font-heading">
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch"
        >
          {pillars.map((pillar) => (
            <Pillar key={pillar.index} {...pillar} />
          ))}
        </motion.div>

        {/* Foundation Line (Architectural Concept) */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px w-full mt-16 md:mt-24"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(28,82,68,0.1) 50%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
