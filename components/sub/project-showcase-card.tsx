import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/constants";
import { cn } from "@/lib/utils";

type ProjectShowcaseCardProps = {
  index: number;
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  image: string;
  link: string;
};

export const ProjectShowcaseCard = ({
  index,
  title,
  category,
  description,
  technologies,
  image,
  link,
}: ProjectShowcaseCardProps) => {
  const number = String(index + 1).padStart(2, "0");
  const imageFirst = index % 2 === 1;

  const imageBlock = (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group block px-8 py-6"
    >
      <div className="overflow-hidden rounded-xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] transition group-hover:border-blue-400/50 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]">
        <Image
          src={image}
          alt={title}
          width={640}
          height={480}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02] md:h-60"
        />
      </div>
    </Link>
  );

  const contentBlock = (
    <div className="flex flex-1 flex-col px-8 py-8">
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="text-5xl font-bold leading-none text-white/90">
          {number}
        </span>
        <div className="text-right">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xl font-semibold text-white transition hover:text-blue-400 md:text-2xl"
          >
            {title}
          </Link>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="mb-3 text-lg font-semibold text-white">
          Tools and features
        </h3>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
        <p className="mt-3 text-sm text-gray-500">
          {technologies.join(", ")}
        </p>
      </div>
    </div>
  );

  return (
    <article
      className={cn(
        "flex h-full min-w-[320px] max-w-[420px] shrink-0 flex-col border-r border-white/10 md:min-w-[380px]",
        imageFirst ? "flex-col" : "flex-col-reverse",
      )}
    >
      {imageBlock}
      {contentBlock}
    </article>
  );
};

export const ProjectsCtaCard = () => {
  return (
    <article className="flex h-full min-w-[320px] max-w-[420px] shrink-0 flex-col justify-center border-r border-white/10 px-10 py-12 md:min-w-[380px]">
      <h3 className="text-3xl font-bold text-white md:text-4xl">
        Want to see more?
      </h3>
      <p className="mt-4 max-w-xs text-gray-400">
        Explore all of my projects and AI engineering work.
      </p>
      <Link
        href={LINKS.github}
        target="_blank"
        rel="noreferrer noopener"
        className="button-primary mt-8 inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-center text-white transition"
      >
        See All Works →
      </Link>
    </article>
  );
};
