"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { ProjectShowcaseCard } from "@/components/sub/project-showcase-card";
import { SectionTitle } from "@/components/sub/section-title";
import { PROJECTS } from "@/constants";

const SCROLL_VH_PER_ITEM = 45;

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setScrollRange(Math.max(0, trackWidth - viewportWidth));
    };

    measure();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : null;

    resizeObserver?.observe(document.documentElement);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const sectionHeight = `${(PROJECTS.length + 1) * SCROLL_VH_PER_ITEM}vh`;

  const trackClassName =
    "flex h-full min-h-0 items-stretch will-change-transform pl-6 md:pl-[80px]";

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{ height: shouldReduceMotion ? undefined : sectionHeight }}
      className="relative w-full"
    >
      <div className="sticky top-0 flex h-[100dvh] min-h-[520px] max-h-screen flex-col overflow-hidden">
        <SectionTitle className="shrink-0 py-6 sm:py-8 md:py-10">
          My Projects
        </SectionTitle>

        {shouldReduceMotion ? (
          <div className="scrollbar-hidden flex min-h-0 flex-1 items-stretch overflow-x-auto px-6 pb-6 md:px-[80px] md:pb-8">
            {PROJECTS.map((project, index) => (
              <ProjectShowcaseCard
                key={`${project.title}-${index}`}
                index={index}
                title={project.title}
                category={project.category}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        ) : (
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <motion.div ref={trackRef} style={{ x }} className={trackClassName}>
              {PROJECTS.map((project, index) => (
                <ProjectShowcaseCard
                  key={`${project.title}-${index}`}
                  index={index}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </motion.div>

            <p className="pointer-events-none absolute bottom-3 right-6 text-xs text-gray-500 md:bottom-4 md:right-[80px]">
              Scroll to explore →
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
