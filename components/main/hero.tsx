import { HeroContent } from "@/components/sub/hero-content";
import { HeroVideo } from "@/components/sub/hero-video";
import { ScrollDownIndicator } from "@/components/sub/scroll-down-indicator";

export const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex h-full min-h-[100dvh] w-full flex-col"
    >
      <HeroVideo />
      <HeroContent />
      <ScrollDownIndicator />
    </div>
  );
};
