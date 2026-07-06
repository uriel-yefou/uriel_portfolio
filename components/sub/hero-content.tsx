"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { HeroTechWeb } from "@/components/sub/hero-tech-web";
import { PageContainer } from "@/components/sub/page-container";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const TYPEWRITER_TEXTS = ["Uriel Nguefack Yefou", "Senior AI/ML Engineer"] as const;

function useTypewriter(
  texts: readonly string[],
  typingSpeed = 70,
  deletingSpeed = 50,
  pauseDuration = 2000,
) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setDisplayText(displayText.slice(0, -1));
        }
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, deletingSpeed, isDeleting, pauseDuration, textIndex, texts, typingSpeed]);

  return displayText;
}

export const HeroContent = () => {
  const typedText = useTypewriter(TYPEWRITER_TEXTS);

  return (
    <PageContainer className="relative z-[20] mt-40">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex h-full w-full flex-col justify-center gap-5 text-start lg:max-w-[600px]">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9]]"
          >
            <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
            <h1 className="Welcome-text text-[13px]">AI Engineer Portfolio</h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="mt-6 flex min-h-[9rem] w-auto max-w-[600px] flex-col gap-6 text-6xl font-bold text-white sm:min-h-[7rem] lg:min-h-[4.5rem]"
          >
            <span className="leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="my-5 max-w-[600px] text-lg text-gray-400"
          >
            Senior AI Engineer passionate about building systems that actually work
            in production - not just in demos. With years of experience shipping LLM
            pipelines, multi-agent workflows, and computer vision models, I focus on
            making AI reliable, auditable, and genuinely useful at scale.
          </motion.p>

          <motion.div
            variants={slideInFromLeft(1)}
            className="flex flex-row flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="button-primary cursor-pointer rounded-lg px-4 py-2 text-center text-white"
            >
              View My work
            </a>
            <a
              href="#contact"
              className="cursor-pointer rounded-lg border border-[#7042f88b] px-4 py-2 text-center text-white transition hover:bg-[rgba(113,47,255,0.12)]"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex h-full w-full items-center justify-center lg:flex-1"
        >
          <HeroTechWeb />
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};
