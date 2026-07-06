"use client";

import dynamic from "next/dynamic";

export const StarsCanvas = dynamic(
  () =>
    import("@/components/main/star-background").then((mod) => mod.StarsCanvas),
  { ssr: false, loading: () => null },
);

export const StarfieldLayer = dynamic(
  () =>
    import("@/components/main/starfield-layer").then((mod) => mod.StarfieldLayer),
  { ssr: false, loading: () => <div className="starfield-fallback absolute inset-0" aria-hidden /> },
);
