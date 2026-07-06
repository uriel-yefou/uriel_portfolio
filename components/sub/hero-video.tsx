"use client";

import { useEffect, useState } from "react";

import { getHeroVideoStyle, HERO_VIDEO_STYLE_INITIAL } from "@/lib/layout";

export const HeroVideo = () => {
  const [videoStyle, setVideoStyle] = useState(HERO_VIDEO_STYLE_INITIAL);

  useEffect(() => {
    const update = () =>
      setVideoStyle(getHeroVideoStyle(window.innerWidth, window.innerHeight));

    update();
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("orientationchange", update, { passive: true });

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={videoStyle}
      className="pointer-events-none absolute inset-x-0 -z-20 h-[100dvh] min-h-screen w-full rotate-180 object-cover"
    >
      <source src="/videos/blackhole.webm" type="video/webm" />
    </video>
  );
};
