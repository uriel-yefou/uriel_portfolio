import { HeroContent } from "@/components/sub/hero-content";
import { ScrollDownIndicator } from "@/components/sub/scroll-down-indicator";

export const Hero = () => {
  return (
    <div id="home" className="relative flex h-full w-full flex-col">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 top-[-340px] z-[1] h-full w-full rotate-180 object-cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      <ScrollDownIndicator />
    </div>
  );
};
