import HeroSection from "./components/HomePage/HeroSection";
import SummarySection from "./components/HomePage/SummarySection";
import BusinessPillars from "./components/HomePage/BusinessPillars";
import Governance from "./components/HomePage/Governance";
import ContactDetails from "./components/HomePage/ContactDetails";

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <HeroSection />

      {/* ══════════════════════════════════════════════
          ABOUT / EXECUTIVE SUMMARY
      ══════════════════════════════════════════════ */}
      <SummarySection />

      {/* ══════════════════════════════════════════════
          STRATEGIC BUSINESS PILLARS
      ══════════════════════════════════════════════ */}
      <BusinessPillars />

      {/* ══════════════════════════════════════════════
          GOVERNANCE & COMPLIANCE
      ══════════════════════════════════════════════ */}
      <Governance />

      {/* ══════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════ */}
      <ContactDetails />

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
    </>
  );
}
