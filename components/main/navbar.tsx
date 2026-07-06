"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LINKS, NAV_LINKS } from "@/constants";
import { NAVBAR_HEIGHT } from "@/lib/layout";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.link.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const visibleId = visible[0]?.target.id;
        if (!visibleId) return;

        const matched = NAV_LINKS.find((link) => link.link === `#${visibleId}`);
        if (matched) setActiveSection(matched.title);
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const linkClassName = (title: string) =>
    cn(
      "cursor-pointer rounded-full px-4 py-2 text-[15px] transition",
      activeSection === title
        ? "bg-[rgba(37,99,235,0.22)] text-blue-400"
        : isScrolled
          ? "text-gray-200 hover:text-white"
          : "text-gray-300 hover:text-white",
    );

  return (
    <div
      className={cn(
        "fixed top-0 z-50 w-full transition-[padding] duration-300 ease-out",
        isScrolled ? "pt-4" : "",
      )}
    >
      <div
        aria-hidden
        style={{ height: NAVBAR_HEIGHT }}
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 transition-opacity duration-300 ease-out",
          "bg-[#030014]/30 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md",
          isScrolled ? "opacity-0" : "opacity-100",
        )}
      />

      <div
        style={{ height: NAVBAR_HEIGHT }}
        className={cn(
          "relative mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-4 md:gap-6 md:px-8 lg:px-10",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300 ease-out",
            "border border-[rgba(255,255,255,0.08)] bg-[#080812]/85 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl",
            isScrolled ? "opacity-100" : "opacity-0",
          )}
        />

        <div className="relative z-10 flex w-full items-center justify-between gap-4 md:gap-6">
          <Link href="#home" className="flex shrink-0 items-end gap-1.5">
            <span className="font-serif text-[36px] font-bold leading-none text-white">
              Uriel
            </span>
            <span className="-ml-1 mb-1 h-2 w-2 rounded-full bg-blue-400" />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className={linkClassName(link.title)}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <Link
            href={LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-blue-400/50 px-4 py-2 text-[15px] text-blue-400 transition hover:bg-blue-400/10 lg:flex"
          >
            Github
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </Link>

          <button
            type="button"
            className="text-3xl text-white focus:outline-none lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {isMobileMenuOpen && (
            <div
              className={cn(
                "absolute left-0 w-full bg-[#080812]/95 p-5 backdrop-blur-xl lg:hidden",
                isScrolled
                  ? "top-[calc(100%+8px)] rounded-2xl border border-white/10"
                  : "top-[64px]",
              )}
            >
              <div className="flex flex-col items-center gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.title}
                    href={link.link}
                    className={cn(linkClassName(link.title), "w-full text-center")}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-blue-400/50 px-4 py-2 text-[15px] text-blue-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Github
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
