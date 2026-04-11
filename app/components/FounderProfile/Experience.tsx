"use client";

import { motion } from "motion/react";
import Badge from "./Badge";
import { fadeUp, staggerContainer } from "./Hero";
import { ExpertiseCard } from "./Background";
import { BarChart2, Cpu, Globe } from "lucide-react";

export default function Experience() {
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
        >
          <motion.div variants={fadeUp} className="mb-12">
            <Badge text="Experience" />
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              style={{
                color: "var(--color-forest-dark)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Professional Experience
            </h2>
            <p className="text-charcoal-light max-w-2xl leading-relaxed">
              Rahul brings over two decades of experience working with large
              conglomerates and Fortune 500 companies across diverse industries.
              He has successfully led cross-functional initiatives in strategy,
              transformation, compliance, and data engineering across multiple
              geographies.
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
  );
}
