import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarfieldLayer } from "@/components/main/stars-canvas-loader";
import { HeroVideo } from "@/components/sub/hero-video";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "relative overflow-x-hidden overflow-y-scroll bg-[#030014]",
          inter.className,
        )}
      >
        {/* Layer 1: hero video (scrolls with page) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[100dvh] overflow-visible"
        >
          <HeroVideo />
        </div>

        {/* Layer 2: stars on top of video */}
        <div className="pointer-events-none fixed inset-0 z-[2]">
          <StarfieldLayer />
        </div>

        {/* Layer 3: navbar + page content */}
        <div className="relative z-[3]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
