"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="shrink-0 grow-0 basis-10 sm:basis-12 md:basis-14 lg:basis-16 xl:basis-[72px] 2xl:basis-20"
      title={name}
    >
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-[#7042f88b] bg-[rgba(255,255,255,0.05)] shadow-[0_0_16px_rgba(139,92,246,0.25)] backdrop-blur-sm transition-all duration-300 ease-out hover:z-20 hover:scale-110 hover:border-[#8b5cf6] hover:shadow-[0_0_28px_rgba(139,92,246,0.55)] sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-[72px] xl:w-[72px] 2xl:h-20 2xl:w-20">
        <Image
          src={`/skills/${src}`}
          alt={name}
          width={80}
          height={80}
          draggable={false}
          className="h-[55%] w-[55%] select-none object-contain"
        />
      </div>
    </motion.div>
  );
};
