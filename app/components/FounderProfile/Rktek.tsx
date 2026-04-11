"use client";

import { Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "./Hero";
import Badge from "./Badge";

export default function Rktek() {
  return (
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
              style={{
                color: "var(--color-forest)",
                fontFamily: "var(--font-heading)",
              }}
            >
              RKTEK
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-5">
              Since 2012, Rahul has led <strong>RKTEK</strong>, a
              technology-enabled IT and management consulting firm operating in
              the United States. The business remains actively engaged and
              continues to deliver strong performance.
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
                <li
                  key={item}
                  className="flex gap-3 text-charcoal-light text-sm"
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
              A technology-enabled IT and management consulting firm operating
              in the United States, RKTEK continues to deliver enterprise-grade
              solutions across financial services, technology infrastructure,
              and global operations.
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
                Rahul actively leads RKTEK while simultaneously building Prime
                Terra into a capital-efficient global precious metals trading
                enterprise — leveraging technology expertise to drive
                operational scale.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
