"use client";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "./Hero";
import Badge from "./Badge";

export default function Exposure() {
  return (
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
              style={{
                color: "var(--color-forest)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Global Exposure &amp; Sector Focus
            </h2>
            <p className="text-charcoal-light max-w-2xl leading-relaxed">
              Rahul has led and supported multinational initiatives spanning
              India, the United States, United Arab Emirates, Europe, and
              Africa. His professional work encompasses financial services,
              technology infrastructure, real estate, and global operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={fadeUp}>
              <h3
                className="text-xl font-bold mb-5"
                style={{
                  color: "var(--color-forest-dark)",
                  fontFamily: "var(--font-heading)",
                }}
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
                  <li key={item} className="flex gap-3 text-charcoal-light">
                    <span
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ background: "var(--color-forest)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-charcoal-light mt-6 leading-relaxed">
                His strategic focus centers on building scalable,
                technology-enabled, and capital-efficient businesses that
                integrate his diverse professional background.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl p-8"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-forest-dark) 0%, var(--color-forest) 100%)",
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
                  {
                    region: "India",
                    detail: "Jewelry & family business roots",
                  },
                  {
                    region: "United States",
                    detail: "RKTEK IT consulting operations",
                  },
                  {
                    region: "UAE / Dubai",
                    detail: "Prime Terra Global Ventures",
                  },
                  {
                    region: "Europe & Africa",
                    detail: "Multinational project leadership",
                  },
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
  );
}
