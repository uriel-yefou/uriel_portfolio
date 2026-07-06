import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export const PageContainer = ({ children, className }: PageContainerProps) => {
  return (
    <div className="w-full px-6 md:px-[80px]">
      <div className={cn("mx-auto w-full max-w-[1450px]", className)}>
        {children}
      </div>
    </div>
  );
};
