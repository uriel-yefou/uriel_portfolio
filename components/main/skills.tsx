import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { PageContainer } from "@/components/sub/page-container";
import { SectionTitle } from "@/components/sub/section-title";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-full w-full flex-col items-center overflow-hidden py-20"
    >
      <PageContainer className="relative z-10 flex flex-col items-center gap-3">
        <SectionTitle>Skills</SectionTitle>
        <SkillText />

        <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
          {SKILL_DATA.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
          {FRONTEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
          {BACKEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
          {FULLSTACK_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
          {OTHER_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
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
