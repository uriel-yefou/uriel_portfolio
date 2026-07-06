import { ContactForm } from "@/components/sub/contact-form";
import { ContactInfo } from "@/components/sub/contact-info";
import { PageContainer } from "@/components/sub/page-container";
import { SectionTitle } from "@/components/sub/section-title";

export const Contact = () => {
  return (
    <section id="contact" className="flex w-full flex-col items-center py-20">
      <SectionTitle>Contact Me</SectionTitle>

      <PageContainer>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(300px,1fr)_minmax(0,2fr)] lg:gap-10 xl:gap-14">
          <ContactInfo />
          <ContactForm />
        </div>
      </PageContainer>
    </section>
  );
};
