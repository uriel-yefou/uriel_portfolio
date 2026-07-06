"use client";

import { motion } from "framer-motion";

import { slideInFromTop } from "@/lib/motion";

export const ScrollDownIndicator = () => {
  return (
    <motion.a
      href="#skills"
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-sm lowercase tracking-wide text-gray-400 transition hover:text-gray-200"
      aria-label="Scroll to skills section"
    >
      scroll
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-bounce"
        aria-hidden
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    </motion.a>
  );
};
