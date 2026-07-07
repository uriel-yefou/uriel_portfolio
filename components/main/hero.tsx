import { HeroContent } from "@/components/sub/hero-content";
import { ScrollDownIndicator } from "@/components/sub/scroll-down-indicator";

export const Hero = () => {
  return (
    <div id="home" className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden">
      <HeroContent />
      <ScrollDownIndicator />
    </div>
  );
};
