"use client";
import { FileText, Hash, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "./SummarySection";
import Badge from "../Badge";
import Image from "next/image";

export default function ContactDetails() {
  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
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

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Info & Address */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <MapPin size={20} />,
                    label: "Jurisdiction",
                    value: "Dubai Silicon Oasis (IFZA), UAE",
                  },
                  {
                    icon: <FileText size={20} />,
                    label: "License Number",
                    value: "76822",
                  },
                  {
                    icon: <Hash size={20} />,
                    label: "Registration",
                    value: "75073",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    className={`rounded-2xl p-6 flex gap-4 items-start ${
                      idx === 2 ? "sm:col-span-2" : ""
                    }`}
                    style={{
                      background: "rgba(28,82,68,0.04)",
                      border: "1px solid rgba(28,82,68,0.12)",
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
                        className="text-[10px] font-bold uppercase tracking-widest mb-1"
                        style={{
                          color: "var(--color-forest)",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {item.label}
                      </p>
                      <p className="text-charcoal text-sm font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Address Card */}
              <motion.div
                variants={fadeUp}
                className="rounded-3xl p-8 grow"
                style={{
                  background: "var(--color-forest)",
                  border: "1px solid rgba(28,82,68,0.2)",
                  boxShadow: "0 20px 40px rgba(13,43,35,0.15)",
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p
                      className="text-xs font-bold tracking-[0.2em] uppercase text-amber mb-4"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Corporate Headquarters
                    </p>
                    <h3
                      className="text-white text-xl font-bold mb-6"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Prime Terra Global Ventures
                    </h3>
                    <div className="space-y-4 text-white/80 text-sm leading-relaxed">
                      <p className="flex gap-3">
                        <span className="text-amber font-bold">Entity:</span>{" "}
                        IFZA Property FZCO
                      </p>
                      <p className="flex gap-3">
                        <span className="text-amber font-bold">Office:</span>{" "}
                        Dubai Silicon Oasis, DDP, Building A2, Dubai, UAE
                      </p>
                      <p className="flex gap-3">
                        <span className="text-amber font-bold">Phone:</span>{" "}
                        +971 4 228 52 85
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                      Official Correspondence Only
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Image Card */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-5 relative min-h-100 lg:min-h-full rounded-3xl overflow-hidden shadow-2xl group"
              style={{ border: "1px solid rgba(28,82,68,0.15)" }}
            >
              <Image
                src="/pexels-jdgromov-28350368.jpg"
                alt="Prime Terra Office — Dubai"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-forest-dark/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-white font-bold text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Dubai Silicon Oasis
                </p>
                <p className="text-white/60 text-xs">IFZA Properties</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
