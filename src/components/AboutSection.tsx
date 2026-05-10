import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import { Brain, Layers, Sparkles } from "lucide-react";

const capabilityIcons = [Brain, Layers, Sparkles] as const;
const capabilityKeys = ["aiResearch", "productPrototyping", "creativeDesign"] as const;

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="about" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-5xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">
          {t("about.label")}
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-8">
          {t("about.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <p className="text-muted-foreground font-body leading-relaxed text-sm">
            {t("about.para1")}
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-sm">
            {t("about.para2")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilityKeys.map((key, i) => {
            const Icon = capabilityIcons[i];
            return (
              <AnimatedSection key={key} delay={i * 0.12}>
                <div className="bg-card border border-border p-6 hover:border-primary/30 transition-colors group">
                  <Icon className="w-5 h-5 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {t(`about.capabilities.${key}.title`)}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {t(`about.capabilities.${key}.description`)}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
