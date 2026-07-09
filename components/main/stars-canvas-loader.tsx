"use client";

import dynamic from "next/dynamic";

export const StarsCanvas = dynamic(
  () =>
    import("@/components/main/star-background").then((mod) => mod.StarsCanvas),
  { ssr: false, loading: () => null },
);
