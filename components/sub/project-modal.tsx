"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { ProjectImageViewer } from "@/components/sub/project-image-viewer";
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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6"
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
            className="relative z-10 flex h-[94vh] max-h-[960px] w-full max-w-[min(1320px,98vw)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c1a] shadow-[0_0_60px_rgba(59,130,246,0.2)]"
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

            <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto lg:h-full lg:grid-cols-[6fr_4fr] lg:overflow-hidden">
              {/* Left — image viewer (60%) */}
              <div className="relative flex min-h-[360px] flex-col bg-[#050816] p-3 sm:min-h-[420px] sm:p-4 lg:min-h-0 lg:h-full lg:p-5">
                <ProjectImageViewer
                  images={project.modalImages}
                  title={project.title}
                  activeIndex={activeImage}
                  onIndexChange={setActiveImage}
                />
              </div>

              {/* Right — description & contributions (40%) */}
              <div className="flex min-h-0 flex-col gap-4 overflow-y-auto p-4 sm:gap-5 sm:p-5 lg:p-6">
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
                    Core Skills
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
