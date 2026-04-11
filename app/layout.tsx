import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700", "800"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Prime Terra Global Ventures | Non Manufactured Precious Metal Trading — FZCO",
  description:
    "Prime Terra Global Ventures is a Dubai-based Free Zone Company specializing in proprietary non-manufactured gold and silver trading, incorporated under DIEZA at Dubai Silicon Oasis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${ibmPlexSans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen">
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
