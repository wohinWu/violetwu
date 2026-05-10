import { useTranslation } from "react-i18next";
import { GraduationCap, Briefcase, Languages } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type TimelineItem = {
  year: string;
  title: string;
  institution?: string;
  organization?: string;
  description: string;
};

const EducationExperience = () => {
  const { t } = useTranslation();
  const education = t("educationExperience.education", { returnObjects: true }) as TimelineItem[];
  const experience = t("educationExperience.experience", { returnObjects: true }) as TimelineItem[];
  const language = t("educationExperience.language", { returnObjects: true }) as {
    title: string;
    detail: string;
  };

  return (
    <AnimatedSection id="education" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-5xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">
          {t("educationExperience.label")}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
          {t("educationExperience.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-xs font-body tracking-[0.2em] uppercase text-primary">
                Education
              </span>
            </div>
            <div className="space-y-6">
              {education.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="border-l-2 border-border pl-5 relative hover:border-primary/50 transition-colors">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                    <span className="text-[11px] font-body text-primary tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="font-display text-sm font-semibold mt-0.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-body text-muted-foreground mt-0.5">
                      {item.institution}
                    </p>
                    <p className="text-xs font-body text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection delay={education.length * 0.1}>
                <div className="border-l-2 border-border pl-5 relative hover:border-primary/50 transition-colors">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                  <div className="flex items-center gap-2">
                    <Languages className="w-3 h-3 text-primary" />
                    <span className="text-xs font-body font-medium">{language.title}</span>
                  </div>
                  <p className="text-xs font-body text-muted-foreground mt-0.5">
                    {language.detail}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Experience column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-xs font-body tracking-[0.2em] uppercase text-primary">
                Experience
              </span>
            </div>
            <div className="space-y-6">
              {experience.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="border-l-2 border-border pl-5 relative hover:border-primary/50 transition-colors">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                    <span className="text-[11px] font-body text-primary tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="font-display text-sm font-semibold mt-0.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-body text-muted-foreground mt-0.5">
                      {item.organization}
                    </p>
                    <p className="text-xs font-body text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EducationExperience;
