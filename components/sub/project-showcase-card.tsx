"use client";

import Image from "next/image";

import type { Project } from "@/constants";
import { cn } from "@/lib/utils";

type ProjectShowcaseCardProps = {
  index: number;
  project: Project;
  onOpen: () => void;
};

export const ProjectShowcaseCard = ({
  index,
  project,
  onOpen,
}: ProjectShowcaseCardProps) => {
  const { title, category, description, technologies, image } = project;
  const number = String(index + 1).padStart(2, "0");
  const imageFirst = index % 2 === 1;

  const imageBlock = (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View details for ${title}`}
      className="group flex h-full min-h-0 w-full flex-col justify-center px-6 py-4 text-left sm:px-8 sm:py-5"
    >
      <div className="h-full min-h-[140px] overflow-hidden rounded-xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] transition group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]">
        <Image
          src={image}
          alt={title}
          width={640}
          height={480}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </button>
  );

  const contentBlock = (
    <div className="flex h-full min-h-0 flex-col overflow-hidden px-6 py-5 sm:px-8 sm:py-6">
      <div className="mb-4 flex shrink-0 items-start justify-between gap-3 sm:mb-6 sm:gap-4">
        <span className="text-4xl font-bold leading-none text-white/90 sm:text-5xl">
          {number}
        </span>
        <div className="min-w-0 text-right">
          <button
            type="button"
            onClick={onOpen}
            className="line-clamp-2 text-left text-lg font-semibold text-white transition hover:text-blue-400 sm:text-xl md:text-2xl"
          >
            {title}
          </button>
          <p className="mt-1 text-xs text-gray-500 sm:text-sm">{category}</p>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <h3 className="mb-2 shrink-0 text-base font-semibold text-white sm:mb-3 sm:text-lg">
          Tools and features
        </h3>
        <p className="line-clamp-4 text-xs leading-relaxed text-gray-400 sm:line-clamp-5 sm:text-sm">
          {description}
        </p>
        <p className="mt-2 line-clamp-2 shrink-0 text-xs text-gray-500 sm:mt-3 sm:text-sm">
          {technologies.join(", ")}
        </p>
        <button
          type="button"
          onClick={onOpen}
          className="mt-3 w-fit text-xs font-medium text-blue-400 transition hover:text-blue-300 sm:text-sm"
        >
          View details →
        </button>
      </div>
    </div>
  );

  return (
    <article className="grid h-full min-h-0 w-[min(85vw,475px)] shrink-0 grid-rows-2 border-r border-white/10">
      <div
        className={cn("min-h-0 overflow-hidden", imageFirst ? "order-1" : "order-2")}
      >
        {imageBlock}
      </div>
      <div
        className={cn("min-h-0 overflow-hidden", imageFirst ? "order-2" : "order-1")}
      >
        {contentBlock}
      </div>
    </article>
  );
};
