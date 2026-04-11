"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Business", href: "#business" },
    { label: "Leadership", href: "/founder" },
    { label: "Governance", href: "#governance" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(13, 43, 35, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(248,171,29,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-white font-bold text-lg tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            PRIME TERRA
          </span>
          <span className="text-amber text-[10px] tracking-widest uppercase font-medium">
            Global Ventures
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-white/80 hover:text-amber text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          {/* <Link
            href="/founder"
            className="px-5 py-2 rounded-full text-sm font-bold tracking-wide text-forest-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "var(--color-amber)",
              fontFamily: "var(--font-heading)",
              boxShadow: "0 0 0 0 rgba(248,171,29,0)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 24px rgba(248,171,29,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 0 0 rgba(248,171,29,0)";
            }}
          >
            Meet the Founder
          </Link> */}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(13,43,35,0.97)" }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-amber text-base font-medium py-1 border-b border-white/10"
            >
              {l.label}
            </Link>
          ))}
          {/* <Link
            href="/founder"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-5 py-2.5 rounded-full text-sm font-bold text-center text-forest-dark"
            style={{ background: "var(--color-amber)" }}
          >
            Meet the Founder
          </Link> */}
        </div>
      )}
    </header>
  );
}
