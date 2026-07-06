"use client";

import { useEffect, useState } from "react";

import { getHeroVideoStyle, isViewportFullWidth } from "@/lib/layout";

export const HeroVideo = () => {
  const [videoStyle, setVideoStyle] = useState(() =>
    typeof window !== "undefined"
      ? getHeroVideoStyle(isViewportFullWidth())
      : getHeroVideoStyle(true),
  );

  useEffect(() => {
    const update = () => setVideoStyle(getHeroVideoStyle(isViewportFullWidth()));

    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={videoStyle}
      className="pointer-events-none absolute inset-x-0 -z-20 h-screen w-full rotate-180 object-cover"
    >
      <source src="/videos/blackhole.webm" type="video/webm" />
    </video>
  );
};
