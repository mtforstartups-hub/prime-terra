"use client";

import { Gem, Globe } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "./Hero";

export default function Legacy() {
  return (
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
                  style={{
                    background: "rgba(248,171,29,0.15)",
                    color: "var(--color-amber)",
                  }}
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
                Rahul&apos;s family has been deeply embedded in the diamonds,
                gemstones, gold, and silver jewelry business for over{" "}
                <strong className="text-white">40 years</strong>. He has
                hands-on operational experience across the entire precious
                metals value chain, from sourcing and production to retail and
                strategic growth initiatives.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Rahul has operated at all levels of the family jewelry business,
                including sourcing, production, retail, customer engagement, and
                strategic growth initiatives.
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
                  style={{
                    background: "rgba(248,171,29,0.15)",
                    color: "var(--color-amber)",
                  }}
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
                Rahul established and operated{" "}
                <strong className="text-white">Karma Jewelry</strong> in the
                United States as an extension of the family&apos;s Indian
                jewelry business. The venture focused on promoting Indian
                designs and craftsmanship, building a niche presence in the US
                market through cross-border retail operations and strategic
                branding.
              </p>
              <div
                className="rounded-2xl p-4 text-sm"
                style={{
                  background: "rgba(248,171,29,0.08)",
                  border: "1px solid rgba(248,171,29,0.15)",
                }}
              >
                <p className="text-white/60 italic">
                  Following his father&apos;s passing in 2021, the family
                  transitioned its business operations. Karma Jewelry was shut
                  down in 2022 as part of this organizational restructuring,
                  along with the closure of the Indian jewelry operations.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
