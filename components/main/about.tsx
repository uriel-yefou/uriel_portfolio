import type { ReactNode } from "react";

import { AboutCodeSnippet } from "@/components/sub/about-code-snippet";
import { AboutStats } from "@/components/sub/about-stats";
import { PageContainer } from "@/components/sub/page-container";
import { SectionTitle } from "@/components/sub/section-title";
import { ABOUT_EDUCATION, ABOUT_HEADING } from "@/constants";

function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-blue-400">{children}</span>;
}

export const About = () => {
  return (
    <section id="about" className="flex w-full flex-col items-center py-20">
      <SectionTitle>About Me</SectionTitle>

      <PageContainer>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-8 font-serif text-3xl font-bold text-white md:text-4xl">
              {ABOUT_HEADING}
            </h3>

            <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-gray-400">
              <p>
                Senior AI Engineer at{" "}
                <Highlight>YULCOM Technologies</Highlight> with experience in
                building <Highlight>scalable AI applications</Highlight> and
                solving real-world problems through intelligent automation and
                machine learning.
              </p>
              <p>
                Skilled in{" "}
                <Highlight>
                  Python, TypeScript, PyTorch, LLMs, RAG, LangChain, MLOps, and
                  vector search
                </Highlight>
                , with expertise in{" "}
                <Highlight>production AI systems</Highlight> and{" "}
                <Highlight>enterprise automation</Highlight>.
              </p>
              <p>
                I&apos;m continuously learning and exploring modern AI
                technologies to build efficient, reliable, and impactful
                software solutions.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="mb-5 font-mono text-lg font-bold text-white">
                &gt; Education
              </h3>
              <ul className="flex flex-col gap-4">
                {ABOUT_EDUCATION.map((entry) => (
                  <li key={entry.degree}>
                    <p className="font-mono text-sm text-blue-400">
                      {entry.degree}
                    </p>
                    <p className="mt-1 text-[15px] text-gray-300">
                      {entry.institution}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <AboutCodeSnippet />
            <AboutStats />
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
