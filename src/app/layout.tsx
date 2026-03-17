import type { Metadata } from "next";
import clsx from "clsx";
import { Barlow_Condensed, Barlow, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const headingFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap"
});

const subheadingFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-subheading",
  display: "swap"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "SHRAVI LOGISTICS | Delivering Vital Infrastructure",
  description:
    "SHRAVI LOGISTICS delivers logistics, infrastructure and community developments that accelerate sustainable growth across the UK.",
  openGraph: {
    title: "SHRAVI LOGISTICS",
    description:
      "Delivering vital logistics infrastructure for resilient communities across the UK.",
    url: "https://shravi-logistics.example",
    siteName: "SHRAVI LOGISTICS",
    locale: "en_GB",
    type: "website"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          bodyFont.variable,
          headingFont.variable,
          subheadingFont.variable,
          "bg-background text-slate-800"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

