"use client";

import { motion } from "framer-motion";

import { PageContainer } from "@/components/sub/page-container";
import { SectionTitle } from "@/components/sub/section-title";
import { EXPERIENCE_DATA } from "@/constants";
import { slideInFromLeft } from "@/lib/motion";
import { cn } from "@/lib/utils";

const THEME_STYLES = {
  purple: {
    node: "border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.45)]",
    nodeText: "text-purple-300",
    card: "border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.12)]",
    company: "text-purple-400",
    tag: "border-purple-500/30 bg-purple-500/10 text-purple-200",
    connector:
      "bg-gradient-to-r from-purple-500/90 to-purple-500/30 shadow-[0_0_6px_rgba(168,85,247,0.6)]",
  },
  cyan: {
    node: "border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.45)]",
    nodeText: "text-cyan-300",
    card: "border-cyan-500/40 shadow-[0_0_40px_rgba(34,211,238,0.12)]",
    company: "text-cyan-400",
    tag: "border-cyan-500/30 bg-cyan-500/10 text-cyan-200",
    connector:
      "bg-gradient-to-r from-cyan-500/90 to-cyan-500/30 shadow-[0_0_6px_rgba(34,211,238,0.6)]",
  },
  orange: {
    node: "border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.45)]",
    nodeText: "text-orange-300",
    card: "border-orange-500/40 shadow-[0_0_40px_rgba(249,115,22,0.12)]",
    company: "text-orange-400",
    tag: "border-orange-500/30 bg-orange-500/10 text-orange-200",
    connector:
      "bg-gradient-to-r from-orange-500/90 to-orange-500/30 shadow-[0_0_6px_rgba(249,115,22,0.6)]",
  },
} as const;

const TIMELINE_AXIS =
  "calc(7rem + 1.5rem + 1.25rem)" as const;

export const Experience = () => {
  return (
    <section id="experience" className="flex w-full flex-col items-center py-20">
      <SectionTitle>Work Experience</SectionTitle>

      <PageContainer>
        <p className="-mt-10 mb-14 text-center text-gray-400">
          A snapshot of where I&apos;ve been building things lately.
        </p>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute top-5 bottom-5 hidden w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/60 via-blue-400/40 to-blue-500/20 md:block"
            style={{ left: TIMELINE_AXIS }}
          />

          <div className="flex flex-col gap-12">
            {EXPERIENCE_DATA.map((job, index) => {
              const theme = THEME_STYLES[job.theme];

              return (
                <motion.div
                  key={`${job.company}-${job.period}`}
                  variants={slideInFromLeft(index * 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-1 items-start gap-6 md:grid-cols-[7rem_2.5rem_minmax(0,1fr)] md:gap-x-6"
                >
                  <div className="flex flex-col items-start md:items-end md:pt-2 md:text-right">
                    <p className="font-mono text-sm text-blue-400">{job.period}</p>
                    {job.active && (
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-green-500/40 bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        Active
                      </span>
                    )}
                  </div>

                  <div className="relative hidden md:block">
                    <div
                      className={cn(
                        "relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 bg-[#0a0c1a] text-xs font-bold",
                        theme.node,
                        theme.nodeText,
                      )}
                    >
                      {job.initials}
                    </div>
                    <div
                      aria-hidden
                      className={cn(
                        "absolute right-0 top-[1.25rem] z-0 h-px w-6 -translate-y-1/2 translate-x-full",
                        theme.connector,
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "rounded-2xl border bg-[#0a0c1a]/80 p-6 backdrop-blur-sm md:p-8",
                      theme.card,
                    )}
                  >
                    <div className="mb-3 flex items-start gap-3 md:hidden">
                      <div
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-[#0a0c1a] text-xs font-bold",
                          theme.node,
                          theme.nodeText,
                        )}
                      >
                        {job.initials}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        <p className={cn("text-sm font-medium", theme.company)}>
                          @ {job.company}
                        </p>
                      </div>
                    </div>

                    <h3 className="hidden text-2xl font-bold text-white md:block">
                      {job.title}
                    </h3>
                    <p
                      className={cn(
                        "mb-4 hidden text-base font-medium md:block",
                        theme.company,
                      )}
                    >
                      @ {job.company}
                    </p>

                    <p className="mb-6 text-[15px] leading-relaxed text-gray-400">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={cn(
                            "rounded-md border px-3 py-1 text-xs font-medium",
                            theme.tag,
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
