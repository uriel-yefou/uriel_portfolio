"use client";

import { useState } from "react";

import { StarsCanvas } from "@/components/main/star-background";
import { cn } from "@/lib/utils";

export const StarfieldLayer = () => {
  const [webglReady, setWebglReady] = useState(false);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[20] h-auto w-full"
    >
      <div
        className={cn(
          "starfield-fallback absolute inset-0 transition-opacity duration-700",
          webglReady && "opacity-0",
        )}
      />
      <div className="absolute inset-0">
        <StarsCanvas onReady={() => setWebglReady(true)} />
      </div>
    </div>
  );
};
