import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="about" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">{t("about.label")}</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-8">
          {t("about.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-muted-foreground font-body leading-relaxed text-sm">
            {t("about.para1")}
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-sm">
            {t("about.para2")}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
