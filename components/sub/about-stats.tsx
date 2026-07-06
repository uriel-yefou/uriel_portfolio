import { ABOUT_STATS } from "@/constants";

export const AboutStats = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {ABOUT_STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#0a0c1a]/60 px-4 py-6 backdrop-blur-sm"
        >
          <span className="text-2xl font-bold text-blue-400 md:text-3xl">
            {stat.value}
          </span>
          <span className="mt-1 text-center text-xs text-gray-400 md:text-sm">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};
