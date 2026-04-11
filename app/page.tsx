"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Handshake,
  Factory,
  BarChart3,
  Scale,
  ShieldCheck,
  Leaf,
  MapPin,
  FileText,
  Hash,
} from "lucide-react";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ─── Reusable animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Section badge ─── */
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

/* ─── Pillar card ─── */
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
        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
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

/* ─── Governance card ─── */
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
        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
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

/* ─── Main Page ─── */
export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      /* Hero lines reveal */
      gsap.from(".hero-line", {
        y: "110%",
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.2,
      });

      /* Hero sub-content fade in */
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.9,
      });

      const heroEl = heroRef.current;
      if (!heroEl) return;

      /* Hero background parallax */
      gsap.to(".hero-bg-img", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: heroEl,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* Hero content fade out on scroll */
      gsap.to(".hero-content", {
        opacity: 0,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: heroEl,
          start: "55% top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="hero-section relative w-full h-screen min-h-[600px] flex items-center overflow-hidden"
      >
        {/* Background image — object-position focuses on gold bars (left half of pdf image) */}
        <div className="hero-bg-img absolute inset-0 w-full h-[120%] -top-[10%]">
          <img
            src="pexels-pixabay-56030.jpg"
            alt="Prime Terra — Gold and Silver Trading"
            className="w-full h-full object-cover"
            style={{ objectPosition: "15% center" }}
          />
        </div>
        {/* Overlay — fully covers the white right-half of the PDF image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(13,43,35,0.88) 0%, rgba(13,43,35,0.82) 45%, rgba(13,43,35,0.95) 100%)",
          }}
        />

        {/* Content */}
        <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <p
            className="hero-sub text-amber text-xs font-bold tracking-[0.25em] uppercase mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Non Manufactured Precious Metal Trading — FZCO
          </p>

          <h1
            className="text-5xl sm:text-6xl lg:text-[5vw] font-extrabold text-white max-w-2xl mb-6 leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <div className="overflow-hidden">
              <span className="block hero-line">Prime Terra</span>
            </div>
            <div className="overflow-hidden">
              <span
                className="block hero-line"
                style={{ color: "var(--color-amber)" }}
              >
                Global Ventures
              </span>
            </div>
          </h1>

          <p className="hero-sub text-white/75 text-base sm:text-lg max-w-lg leading-relaxed mb-10">
            Specialists in Proprietary Gold and Silver Trading &amp; Strategic
            Management, incorporated under DIEZA at Dubai Silicon Oasis.
          </p>

          <div className="hero-sub flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--color-amber)",
                color: "var(--color-forest-dark)",
                fontFamily: "var(--font-heading)",
                boxShadow: "0 4px 20px rgba(248,171,29,0.35)",
              }}
            >
              View Corporate Profile <ArrowRight size={15} />
            </a>
            <Link
              href="/founder"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: "1.5px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(4px)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Meet the Founder <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: "linear-gradient(to bottom, transparent, #fff)",
          }}
        />
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT / EXECUTIVE SUMMARY
      ══════════════════════════════════════════════ */}
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
                  incorporated under the Dubai Integrated Economic Zones
                  Authority (DIEZA). Operating as a highly specialized
                  proprietary trading firm, the company&apos;s primary mandate
                  is the international trade of non-manufactured Gold and
                  Silver.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  Unlike traditional intermediaries, Prime Terra operates
                  strictly on its own behalf. We acquire raw and unrefined gold
                  and silver, oversee internal processing through accredited
                  international refineries, and execute direct sales to
                  institutional buyers.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  To optimize these proprietary trading operations, the company
                  legally integrates its two supplementary business licenses —
                  Financing Broker and Management Consultancies. These internal
                  support mechanisms allow Prime Terra to efficiently structure
                  its own trade capital and apply decades of executive
                  management and supply chain expertise to the precious metals
                  sector.
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
                      className="text-xs font-bold uppercase tracking-wide flex-shrink-0 w-36 pt-0.5"
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

      {/* ══════════════════════════════════════════════
          STRATEGIC BUSINESS PILLARS
      ══════════════════════════════════════════════ */}
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
                business activities, all legally authorized under its DIEZA
                Trade License. The secondary activities serve as dedicated
                internal support structures for the primary trading operations.
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
                Please note: Prime Terra Global Ventures does not act as a
                lender, nor do we provide supply chain financing or credit
                facilities to third parties. Our &quot;Financing Broker&quot;
                activity is strictly an internal enablement tool.
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
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
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
              <p className="text-sm italic mb-5 text-amber">
                Strategic Advisory
              </p>
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
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
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

      {/* ══════════════════════════════════════════════
          GOVERNANCE & COMPLIANCE
      ══════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════ */}
      <section id="contact" className="relative py-24 overflow-hidden bg-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/pdf1/PRIME-TERRA-GLOBAL-VENTURES_pages-to-jpg-0008.jpg"
            alt="Dubai office building"
            className="w-full h-full object-cover object-center opacity-10"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,1) 40%, rgba(255,255,255,0.6) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <Badge text="Contact" />
              <h2
                className="text-4xl sm:text-5xl font-extrabold mb-4"
                style={{
                  color: "var(--color-forest-dark)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Contact Information
              </h2>
              <p className="text-charcoal-light max-w-xl leading-relaxed">
                For official inquiries and corporate correspondence, please
                contact the executive management team directly.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <MapPin size={20} />,
                  label: "Jurisdiction",
                  value:
                    "Dubai Silicon Oasis (IFZA), Dubai, United Arab Emirates",
                },
                {
                  icon: <FileText size={20} />,
                  label: "License Number",
                  value: "76822",
                },
                {
                  icon: <Hash size={20} />,
                  label: "Registration Number",
                  value: "75073",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="rounded-2xl p-6 flex gap-4 items-start"
                  style={{
                    background: "rgba(28,82,68,0.05)",
                    border: "1px solid rgba(28,82,68,0.15)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "var(--color-forest)",
                      color: "var(--color-amber)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{
                        color: "var(--color-forest)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {item.label}
                    </p>
                    <p className="text-charcoal text-sm font-medium">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl p-8"
              style={{
                background: "var(--color-forest)",
                maxWidth: "640px",
              }}
            >
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase text-amber mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Prime Terra Global Ventures — Dubai Corp
              </p>
              <p className="text-white font-medium mb-1">
                Dubai Silicon Oasis, IFZA Properties, Dubai, United Arab
                Emirates
              </p>
              <p className="text-white/60 text-sm italic">
                For official inquiries and corporate correspondence, please
                contact the executive management team directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer
        className="py-10 px-6"
        style={{ background: "var(--color-forest-dark)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p
              className="text-white font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PRIME TERRA GLOBAL VENTURES
            </p>
            <p className="text-white/40 text-xs mt-0.5">
              Non Manufactured Precious Metal Trading — FZCO
            </p>
          </div>
          <div className="flex items-center gap-6 text-white/40 text-xs">
            <span>Reg. No. 75073</span>
            <span>License No. 76822</span>
            <Link
              href="/founder"
              className="hover:text-amber transition-colors"
            >
              Meet the Founder
            </Link>
          </div>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Prime Terra Global Ventures. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
