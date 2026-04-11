"use client";

import { ArrowLeft } from "lucide-react";
import { motion, Variants } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-forest-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pexels-uros-drljaca-906314877-29431251.jpg"
          alt="Abstract background"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-br from-forest-dark/90 via-forest-dark/40 to-forest-dark/90" />
      </div>

      {/* Texture */}
      {/* <div
        className="absolute inset-0 opacity-[0.04] z-1"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      /> */}
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

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7"
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
              Rahul Jain brings a unique, multidisciplinary foundation to Prime
              Terra Global Ventures, seamlessly blending high-impact financial
              decision-making, deep technical expertise, and a
              multi-generational legacy in the precious metals industry.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
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

          {/* Right column: Image + Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-2xl group"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Image
                src="/Rahul_Jain.jpeg"
                alt="Rahul Jain — Founder & Managing Director"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-forest-dark/40 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "20+", label: "Years Corporate Experience" },
                {
                  number: "40+",
                  label: "Years Family Legacy in Precious Metals",
                },
                {
                  number: "2012",
                  label: "RKTEK Founded — IT & Management Consulting",
                },
                {
                  number: "4",
                  label: "Global Regions: US, Europe, India, Africa & UAE",
                },
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
                  <p className="text-white/60 text-xs leading-snug">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
