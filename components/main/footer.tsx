"use client";

import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import {
  FOOTER_BIO,
  FOOTER_QUICK_LINKS,
  FOOTER_SOCIAL_LINKS,
} from "@/constants";
import { PageContainer } from "@/components/sub/page-container";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-transparent pb-8 pt-16">
      <PageContainer>
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-8">
          <div>
            <Link
              href="#home"
              className="font-serif text-4xl font-bold tracking-tight text-white"
            >
              Uriel Nguefack Yefou
              <span className="text-blue-400">.</span>
            </Link>

            <p className="mt-4 max-w-lg text-gray-400">{FOOTER_BIO}</p>

            <h3 className="mt-6 font-mono text-xl tracking-wide">
              <span className="font-bold text-white">Learn. </span>
              <span className="font-bold text-blue-400">Build. </span>
              <span className="font-bold text-white">Innovate.</span>
            </h3>

            <h2 className="mt-6 animate-bounce font-bold text-blue-500">
              Made With 💕 by Uriel Nguefack Yefou
            </h2>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.link}
                    className="text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-lg font-medium text-white">
              Let&apos;s Connect
            </h3>
            <ul className="space-y-2">
              {FOOTER_SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-14 flex items-center justify-center border-t border-white/10 pt-8">
          <p
            className="text-center text-sm text-gray-400"
            suppressHydrationWarning
          >
            Copyright &copy; {new Date().getFullYear()} Uriel Nguefack Yefou.
            All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-[rgba(37,99,235,0.15)] text-blue-400 transition hover:bg-[rgba(37,99,235,0.3)] hover:text-blue-300"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        </div>
      </PageContainer>
    </footer>
  );
};
