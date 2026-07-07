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
      className="flex h-10 w-10 shrink-0 grow-0 basis-10 items-center justify-center sm:h-12 sm:w-12 sm:basis-12 md:h-14 md:w-14 md:basis-14 lg:h-16 lg:w-16 lg:basis-16 xl:h-[72px] xl:w-[72px] xl:basis-[72px] 2xl:h-20 2xl:w-20 2xl:basis-20"
      title={name}
    >
      <Image
        src={`/skills/${src}`}
        alt={name}
        width={80}
        height={80}
        draggable={false}
        className="h-full w-full select-none object-contain"
      />
    </motion.div>
  );
};
