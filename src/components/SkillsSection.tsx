import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";

const skillKeys = ["portrait", "documentary", "street", "postProduction", "lighting", "artDirection"] as const;
const skillLevels = [95, 90, 85, 88, 92, 80];

const SkillsSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="skills" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">{t("skills.label")}</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
          {t("skills.title")}
        </h2>
        <div className="grid gap-6">
          {skillKeys.map((key, i) => (
            <AnimatedSection key={key} delay={i * 0.1}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-body text-foreground">{t(`skills.items.${key}`)}</span>
                <span className="text-xs font-body text-muted-foreground">{skillLevels[i]}%</span>
              </div>
              <div className="h-[2px] bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                  style={{ width: `${skillLevels[i]}%` }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
