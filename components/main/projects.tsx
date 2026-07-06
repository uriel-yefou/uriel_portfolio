"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  ProjectShowcaseCard,
  ProjectsCtaCard,
} from "@/components/sub/project-showcase-card";
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
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const sectionHeight = `${(PROJECTS.length + 2) * SCROLL_VH_PER_ITEM}vh`;

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{ height: shouldReduceMotion ? undefined : sectionHeight }}
      className="relative w-full"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden py-8">
        <SectionTitle className="py-8 md:py-10">My Projects</SectionTitle>

        {shouldReduceMotion ? (
          <div className="scrollbar-hidden flex flex-1 items-stretch gap-0 overflow-x-auto px-6 pb-8 md:px-[80px]">
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
            <ProjectsCtaCard />
          </div>
        ) : (
          <div className="relative flex-1 overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex h-full items-stretch will-change-transform pl-6 md:pl-[80px]"
            >
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
              <ProjectsCtaCard />
            </motion.div>

            <p className="pointer-events-none absolute bottom-4 right-6 text-xs text-gray-500 md:right-[80px]">
              Scroll to explore →
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
