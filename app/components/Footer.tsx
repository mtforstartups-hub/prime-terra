import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6"
      style={{ background: "var(--color-forest-dark)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p
            className="text-white font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            PRIME TERRA GLOBAL VENTURES
          </p>
          <p className="text-white/40 text-xs mt-0.5">
            Non Manufactured Precious Metal Trading — FZCO
          </p>
        </div>
        <div className="flex items-center gap-6 text-white/40 text-xs">
          <span>Reg. No. 75073</span>
          <span>License No. 76822</span>
          {/* <Link href="/founder" className="hover:text-amber transition-colors">
            Meet the Founder
          </Link> */}
        </div>
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Prime Terra Global Ventures. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
