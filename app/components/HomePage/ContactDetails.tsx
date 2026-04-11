"use client";
import { FileText, Hash, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "./SummarySection";
import Badge from "../Badge";

export default function ContactDetails() {
  return (
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
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
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
              Dubai Silicon Oasis, IFZA Properties, Dubai, United Arab Emirates
            </p>
            <p className="text-white/60 text-sm italic">
              For official inquiries and corporate correspondence, please
              contact the executive management team directly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
