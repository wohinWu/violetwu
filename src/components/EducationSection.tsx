import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";

type EducationItem = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

const EducationSection = () => {
  const { t } = useTranslation();
  const education = t("education.items", { returnObjects: true }) as EducationItem[];

  return (
    <AnimatedSection id="education" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">{t("education.label")}</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
          {t("education.title")}
        </h2>
        <div className="space-y-12">
          {education.map((edu, i) => (
            <AnimatedSection key={edu.title} delay={i * 0.15}>
              <div className="border-l-2 border-primary pl-8 relative">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-body text-primary tracking-widest">{edu.year}</span>
                <h3 className="font-display text-xl font-semibold mt-1">{edu.title}</h3>
                <p className="text-sm font-body text-muted-foreground mt-1">{edu.institution}</p>
                <p className="text-sm font-body text-muted-foreground mt-3 leading-relaxed">{edu.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EducationSection;
