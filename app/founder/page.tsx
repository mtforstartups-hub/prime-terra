"use client";

import Link from "next/link";
import { motion, Variants } from "motion/react";
import {
  ArrowLeft,
  GraduationCap,
  Briefcase,
  Globe,
  TrendingUp,
  Gem,
  Cpu,
  BarChart2,
} from "lucide-react";
import Navbar from "../components/Navbar";

/* ─── Reusable variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function Badge({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <span
      className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
      style={{
        color: light ? "var(--color-amber)" : "var(--color-forest)",
        background: light ? "rgba(248,171,29,0.12)" : "rgba(28,82,68,0.1)",
        border: light
          ? "1px solid rgba(248,171,29,0.25)"
          : "1px solid rgba(28,82,68,0.25)",
        fontFamily: "var(--font-heading)",
      }}
    >
      {text}
    </span>
  );
}

function ExpertiseCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-3xl p-7 h-full transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(28,82,68,0.04)",
        border: "1px solid rgba(28,82,68,0.15)",
      }}
      whileHover={{ boxShadow: "0 12px 40px rgba(28,82,68,0.1)" }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: "var(--color-forest)", color: "var(--color-amber)" }}
      >
        {icon}
      </div>
      <h3
        className="text-lg font-bold mb-3"
        style={{ color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-charcoal-light">
            <span
              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
              style={{ background: "var(--color-forest)" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function FounderPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════ */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-forest-dark) 0%, var(--color-forest) 100%)",
        }}
      >
        {/* Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        {/* Amber glow */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "var(--color-amber)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-amber text-sm mb-10 transition-colors"
            >
              <ArrowLeft size={15} /> Back to Home
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <Badge text="Leadership & Executive Profile" light />
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-3 leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Rahul Jain
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-amber text-base font-medium italic mb-6"
              >
                Managing Director &amp; Founder
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-white/70 text-base leading-relaxed max-w-lg"
              >
                Rahul Jain brings a unique, multidisciplinary foundation to Prime Terra Global
                Ventures, seamlessly blending high-impact financial decision-making, deep technical
                expertise, and a multi-generational legacy in the precious metals industry.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                {[
                  "Finance & Economics",
                  "IT & Management Consulting",
                  "Jewelry & Precious Metals",
                  "Global Operations",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full text-white/80"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats / highlights */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "20+", label: "Years Corporate Experience" },
                { number: "40+", label: "Years Family Legacy in Precious Metals" },
                { number: "2012", label: "RKTEK Founded — IT & Management Consulting" },
                { number: "4", label: "Global Regions: US, Europe, India, Africa & UAE" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <p
                    className="text-3xl font-extrabold text-amber mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.number}
                  </p>
                  <p className="text-white/60 text-xs leading-snug">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          EDUCATIONAL BACKGROUND
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <Badge text="Education" />
              <h2
                className="text-4xl sm:text-5xl font-extrabold mb-4"
                style={{ color: "var(--color-forest)", fontFamily: "var(--font-heading)" }}
              >
                Educational Background
              </h2>
              <p className="text-charcoal-light max-w-2xl leading-relaxed">
                Rahul holds a multidisciplinary academic foundation across Finance, Economics, and
                Computer Science. His unique blend of technical and business education enables him
                to bridge data-driven technology solutions with high-impact financial
                decision-making.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <ExpertiseCard
                icon={<TrendingUp size={20} />}
                title="Finance & Economics"
                items={[
                  "Investment analysis and portfolio management",
                  "Business valuation and global market economics",
                ]}
              />
              <ExpertiseCard
                icon={<Cpu size={20} />}
                title="Computer Science"
                items={[
                  "Systems architecture and data modeling",
                  "Business intelligence tools",
                  "Automation for enterprise applications",
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROFESSIONAL EXPERIENCE
      ══════════════════════════════════════════════ */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(180deg, #f8fbf9 0%, #fff 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <Badge text="Experience" />
              <h2
                className="text-4xl sm:text-5xl font-extrabold mb-4"
                style={{ color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}
              >
                Professional Experience
              </h2>
              <p className="text-charcoal-light max-w-2xl leading-relaxed">
                Rahul brings over two decades of experience working with large conglomerates and
                Fortune 500 companies across diverse industries. He has successfully led
                cross-functional initiatives in strategy, transformation, compliance, and data
                engineering across multiple geographies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <ExpertiseCard
                icon={<BarChart2 size={20} />}
                title="Financial Services"
                items={[
                  "Digital transformation and product strategy",
                  "Enterprise system integration",
                ]}
              />
              <ExpertiseCard
                icon={<Cpu size={20} />}
                title="Information Technology"
                items={[
                  "Leadership in solution design",
                  "Business systems analysis",
                  "Global delivery models",
                ]}
              />
              <ExpertiseCard
                icon={<Globe size={20} />}
                title="Global Operations"
                items={[
                  "Multinational project execution",
                  "Multicultural teams across the US, Europe, India, and Africa",
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          RKTEK
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <Badge text="IT & Management Consulting" />
              <h2
                className="text-4xl sm:text-5xl font-extrabold mb-4"
                style={{ color: "var(--color-forest)", fontFamily: "var(--font-heading)" }}
              >
                RKTEK
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-5">
                Since 2012, Rahul has led <strong>RKTEK</strong>, a technology-enabled IT and
                management consulting firm operating in the United States. The business remains
                actively engaged and continues to deliver strong performance.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-6">
                RKTEK specializes in:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Technology-enabled business transformation",
                  "Solution design and enterprise systems integration",
                  "Business systems analysis and consulting",
                  "Global delivery models for enterprise clients",
                  "Data engineering and digital strategy",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-charcoal-light text-sm">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: "var(--color-forest)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl p-10"
              style={{ background: "var(--color-forest)" }}
            >
              <Briefcase size={32} className="text-amber mb-5" />
              <h3
                className="text-2xl font-extrabold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Active Since 2012
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                A technology-enabled IT and management consulting firm operating in the United
                States, RKTEK continues to deliver enterprise-grade solutions across financial
                services, technology infrastructure, and global operations.
              </p>
              <div
                className="mt-8 pt-6 border-t"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest text-amber mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Founder&apos;s Dual Role
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Rahul actively leads RKTEK while simultaneously building Prime Terra into a
                  capital-efficient global precious metals trading enterprise — leveraging
                  technology expertise to drive operational scale.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          JEWELRY & PRECIOUS METALS LEGACY
      ══════════════════════════════════════════════ */}
      <section
        className="py-24"
        style={{ background: "var(--color-forest-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <span
                className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4"
                style={{
                  color: "var(--color-amber)",
                  background: "rgba(248,171,29,0.1)",
                  border: "1px solid rgba(248,171,29,0.25)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Family Legacy
              </span>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Jewelry &amp; Precious Metals Business
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Family Legacy */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl p-8"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(248,171,29,0.15)", color: "var(--color-amber)" }}
                  >
                    <Gem size={18} />
                  </div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Family Legacy
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Rahul&apos;s family has been deeply embedded in the diamonds, gemstones, gold,
                  and silver jewelry business for over <strong className="text-white">40 years</strong>.
                  He has hands-on operational experience across the entire precious metals value
                  chain, from sourcing and production to retail and strategic growth initiatives.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Rahul has operated at all levels of the family jewelry business, including
                  sourcing, production, retail, customer engagement, and strategic growth
                  initiatives.
                </p>
              </motion.div>

              {/* Karma Jewelry */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl p-8"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(248,171,29,0.15)", color: "var(--color-amber)" }}
                  >
                    <Globe size={18} />
                  </div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Karma Jewelry — US Operations
                  </h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Rahul established and operated <strong className="text-white">Karma Jewelry</strong> in
                  the United States as an extension of the family&apos;s Indian jewelry business.
                  The venture focused on promoting Indian designs and craftsmanship, building a
                  niche presence in the US market through cross-border retail operations and
                  strategic branding.
                </p>
                <div
                  className="rounded-2xl p-4 text-sm"
                  style={{
                    background: "rgba(248,171,29,0.08)",
                    border: "1px solid rgba(248,171,29,0.15)",
                  }}
                >
                  <p className="text-white/60 italic">
                    Following his father&apos;s passing in 2021, the family transitioned its
                    business operations. Karma Jewelry was shut down in 2022 as part of this
                    organizational restructuring, along with the closure of the Indian jewelry
                    operations.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GLOBAL EXPOSURE & CURRENT FOCUS
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <Badge text="Global Exposure" />
              <h2
                className="text-4xl sm:text-5xl font-extrabold mb-4"
                style={{ color: "var(--color-forest)", fontFamily: "var(--font-heading)" }}
              >
                Global Exposure &amp; Sector Focus
              </h2>
              <p className="text-charcoal-light max-w-2xl leading-relaxed">
                Rahul has led and supported multinational initiatives spanning India, the United
                States, United Arab Emirates, Europe, and Africa. His professional work encompasses
                financial services, technology infrastructure, real estate, and global operations.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div variants={fadeUp}>
                <h3
                  className="text-xl font-bold mb-5"
                  style={{ color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}
                >
                  Current Focus
                </h3>
                <p className="text-charcoal-light mb-5">
                  Today, Rahul leverages his unique combination of:
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    "Finance, economics, and computer science expertise",
                    "IT and management consulting through RKTEK (operating since 2012)",
                    "Long-standing jewelry and precious metals industry experience",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-charcoal-light"
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: "var(--color-forest)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-charcoal-light mt-6 leading-relaxed">
                  His strategic focus centers on building scalable, technology-enabled, and
                  capital-efficient businesses that integrate his diverse professional background.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-3xl p-8"
                style={{
                  background: "linear-gradient(135deg, var(--color-forest-dark) 0%, var(--color-forest) 100%)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest text-amber mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Regions of Operation
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { region: "India", detail: "Jewelry & family business roots" },
                    { region: "United States", detail: "RKTEK IT consulting operations" },
                    { region: "UAE / Dubai", detail: "Prime Terra Global Ventures" },
                    { region: "Europe & Africa", detail: "Multinational project leadership" },
                  ].map((r) => (
                    <div
                      key={r.region}
                      className="rounded-2xl p-4"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <p
                        className="text-amber text-sm font-bold mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {r.region}
                      </p>
                      <p className="text-white/55 text-xs">{r.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SUMMARY
      ══════════════════════════════════════════════ */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(180deg, #f8fbf9 0%, #fff 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp}>
              <Badge text="Summary" />
              <h2
                className="text-4xl sm:text-5xl font-extrabold mb-8"
                style={{ color: "var(--color-forest-dark)", fontFamily: "var(--font-heading)" }}
              >
                A Globally-Minded Professional
              </h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-10">
                Rahul Jain is a globally-minded professional with deep technical expertise,
                financial acumen, and hands-on entrepreneurial experience. With a strong foundation
                in finance and technology, active involvement in IT consulting, and significant
                jewelry and precious metals industry background, he brings a comprehensive
                perspective to business strategy, investment analysis, and technology-driven
                transformation initiatives.
              </p>
              <motion.div variants={fadeUp}>
                <p
                  className="text-sm font-bold italic text-center mb-10"
                  style={{ color: "var(--color-forest)" }}
                >
                  &ldquo;Today, Rahul leverages this powerful combination of IT consulting, financial
                  acumen, and a 40-year precious metals legacy to build Prime Terra into a highly
                  scalable, capital-efficient global trading enterprise.&rdquo;
                </p>
              </motion.div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "var(--color-forest)",
                  color: "#fff",
                  fontFamily: "var(--font-heading)",
                  boxShadow: "0 4px 20px rgba(28,82,68,0.25)",
                }}
              >
                <ArrowLeft size={15} /> Back to Prime Terra
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6" style={{ background: "var(--color-forest-dark)" }}>
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
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Prime Terra Global Ventures. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
