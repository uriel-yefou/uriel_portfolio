import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        "py-20 text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500",
        className,
      )}
    >
      {children}
    </h2>
  );
};
