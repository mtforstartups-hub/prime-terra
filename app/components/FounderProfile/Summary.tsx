"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "./Hero";
import Badge from "./Badge";

export default function Summary() {
  return (
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
              style={{
                color: "var(--color-forest-dark)",
                fontFamily: "var(--font-heading)",
              }}
            >
              A Globally-Minded Professional
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-10">
              Rahul Jain is a globally-minded professional with deep technical
              expertise, financial acumen, and hands-on entrepreneurial
              experience. With a strong foundation in finance and technology,
              active involvement in IT consulting, and significant jewelry and
              precious metals industry background, he brings a comprehensive
              perspective to business strategy, investment analysis, and
              technology-driven transformation initiatives.
            </p>
            <motion.div variants={fadeUp}>
              <p
                className="text-sm font-bold italic text-center mb-10"
                style={{ color: "var(--color-forest)" }}
              >
                &ldquo;Today, Rahul leverages this powerful combination of IT
                consulting, financial acumen, and a 40-year precious metals
                legacy to build Prime Terra into a highly scalable,
                capital-efficient global trading enterprise.&rdquo;
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
  );
}
