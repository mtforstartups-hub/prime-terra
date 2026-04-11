"use client";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "./Hero";
import Badge from "./Badge";
import { Cpu, TrendingUp } from "lucide-react";

export function ExpertiseCard({
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
        style={{
          background: "var(--color-forest)",
          color: "var(--color-amber)",
        }}
      >
        {icon}
      </div>
      <h3
        className="text-lg font-bold mb-3"
        style={{
          color: "var(--color-forest-dark)",
          fontFamily: "var(--font-heading)",
        }}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-charcoal-light">
            <span
              className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
              style={{ background: "var(--color-forest)" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Background() {
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
            <Badge text="Education" />
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              style={{
                color: "var(--color-forest)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Educational Background
            </h2>
            <p className="text-charcoal-light max-w-2xl leading-relaxed">
              Rahul holds a multidisciplinary academic foundation across
              Finance, Economics, and Computer Science. His unique blend of
              technical and business education enables him to bridge data-driven
              technology solutions with high-impact financial decision-making.
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
  );
}
