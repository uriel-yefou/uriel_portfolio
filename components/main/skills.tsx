import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { PageContainer } from "@/components/sub/page-container";
import { SectionTitle } from "@/components/sub/section-title";

import { SKILL_PYRAMID_ROWS } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-full w-full flex-col items-center overflow-hidden py-16 sm:py-20"
    >
      <PageContainer className="relative z-10 flex w-full flex-col items-center gap-3">
        <SectionTitle>Skills</SectionTitle>
        <SkillText />

        <div className="mt-2 flex w-full flex-col items-center gap-2 sm:mt-4 sm:gap-3 md:gap-4">
          {SKILL_PYRAMID_ROWS.map((row, rowIndex) => {
            const rowStartIndex = SKILL_PYRAMID_ROWS.slice(0, rowIndex).reduce(
              (sum, prev) => sum + prev.length,
              0,
            );

            return (
              <div
                key={`pyramid-row-${rowIndex}`}
                className="flex w-full flex-wrap items-center justify-center gap-2 px-1 sm:gap-3 md:gap-4 lg:gap-5"
              >
                {row.map((skill, i) => (
                  <SkillDataProvider
                    key={skill.skill_name}
                    src={skill.image}
                    name={skill.skill_name}
                    index={rowStartIndex + i}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </PageContainer>

      <div className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0 z-[-10] flex items-center justify-center bg-cover opacity-30">
          <video
            className="h-auto w-full"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
