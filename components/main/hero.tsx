import { HeroContent } from "@/components/sub/hero-content";
import { HeroVideo } from "@/components/sub/hero-video";
import { ScrollDownIndicator } from "@/components/sub/scroll-down-indicator";

export const Hero = () => {
  return (
    <div id="home" className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <HeroVideo />

      <HeroContent />
      <ScrollDownIndicator />
    </div>
  );
};
