"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { Project } from "@/constants";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleClose = useCallback(() => {
    onClose();
    setActiveImage(0);
  }, [onClose]);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
      if (event.key === "ArrowLeft") {
        setActiveImage((prev) =>
          prev === 0 ? project.modalImages.length - 1 : prev - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveImage((prev) =>
          prev === project.modalImages.length - 1 ? 0 : prev + 1,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, handleClose]);

  useEffect(() => {
    setActiveImage(0);
  }, [project?.title]);

  const showPrev = () => {
    if (!project) return;
    setActiveImage((prev) =>
      prev === 0 ? project.modalImages.length - 1 : prev - 1,
    );
  };

  const showNext = () => {
    if (!project) return;
    setActiveImage((prev) =>
      prev === project.modalImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c1a] shadow-[0_0_60px_rgba(59,130,246,0.2)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-gray-300 transition hover:border-blue-400/50 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-[6fr_4fr] lg:overflow-hidden">
              {/* Left — image slider (60%) */}
              <div className="relative flex min-h-[240px] flex-col bg-[#050816] p-4 sm:min-h-[320px] sm:p-6 lg:min-h-0">
                <div className="relative flex-1 overflow-hidden rounded-xl border border-blue-500/20">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={project.modalImages[activeImage]}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.25 }}
                      className="relative h-full min-h-[220px] w-full sm:min-h-[280px] lg:min-h-[360px]"
                    >
                      <Image
                        src={project.modalImages[activeImage]}
                        alt={`${project.title} screenshot ${activeImage + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:border-blue-400/50 hover:bg-black/80"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:border-blue-400/50 hover:bg-black/80"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                  {project.modalImages.map((_, index) => (
                    <button
                      key={`slide-${index}`}
                      type="button"
                      aria-label={`Go to image ${index + 1}`}
                      onClick={() => setActiveImage(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === activeImage
                          ? "w-6 bg-blue-400"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right — description & contributions (40%) */}
              <div className="flex min-h-0 flex-col gap-5 overflow-y-auto p-5 sm:p-6 lg:p-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                    {project.category}
                  </p>
                  <h2
                    id="project-modal-title"
                    className="mt-2 text-xl font-bold text-white sm:text-2xl"
                  >
                    {project.title}
                  </h2>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    Description
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-sm font-semibold text-white">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-white">
                    My Contribution
                  </h3>
                  <ul className="space-y-2">
                    {project.contributions.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-gray-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
