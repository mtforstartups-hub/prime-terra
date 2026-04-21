"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      /* Hero lines reveal */
      gsap.from(".hero-line", {
        y: "110%",
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.2,
      });

      /* Hero sub-content fade in */
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.9,
      });

      const heroEl = heroRef.current;
      if (!heroEl) return;

      /* Hero background parallax */
      gsap.to(".hero-bg-img", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: heroEl,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* Hero content fade out on scroll */
      gsap.to(".hero-content", {
        opacity: 0,
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: heroEl,
          start: "55% top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="hero-section relative w-full h-screen min-h-150 flex items-center overflow-hidden"
    >
      {/* Background image — object-position focuses on gold bars (left half of pdf image) */}
      <div className="hero-bg-img absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src="/hero-home-bg.jpg"
          alt="Prime Terra — Gold and Silver Trading"
          className="size-full object-cover"
          priority
          width={1600}
          height={1000}
        />
      </div>
      {/* Overlay — fully covers the white right-half of the PDF image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(13,43,35,0.88) 0%, rgba(13,43,35,0.82) 45%, rgba(13,43,35,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 flex flex-col items-center text-center">
        <p
          className="hero-sub text-amber text-xs font-bold tracking-[0.25em] uppercase mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Non Manufactured Precious Metal Trading — FZCO
        </p>

        <h1
          className="text-5xl sm:text-6xl lg:text-[5vw] font-extrabold text-white max-w-4xl mb-6 leading-none"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <div className="overflow-hidden">
            <span className="block hero-line">Prime Terra</span>
          </div>
          <div className="overflow-hidden">
            <span
              className="block hero-line"
              style={{ color: "var(--color-amber)" }}
            >
              Global Ventures
            </span>
          </div>
        </h1>

        <p className="hero-sub text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
          Specialists in Proprietary Gold and Silver Trading &amp; Strategic
          Management, incorporated under DIEZA at Dubai Silicon Oasis.
        </p>

        {/* <div className="hero-sub flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--color-amber)",
              color: "var(--color-forest-dark)",
              fontFamily: "var(--font-heading)",
              boxShadow: "0 4px 20px rgba(248,171,29,0.35)",
            }}
          >
            View Corporate Profile <ArrowRight size={15} />
          </a>
          <Link
            href="/founder"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              border: "1.5px solid rgba(255,255,255,0.35)",
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(4px)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Meet the Founder <ArrowRight size={15} />
          </Link>
        </div> */}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, #fff)",
        }}
      />
    </section>
  );
}
