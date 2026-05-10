import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Gamepad2, Palette, Camera, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { creativeItems } from "@/data/creative";

const iconMap = {
  Gamepad2,
  Palette,
  Camera,
} as const;

const CreativePractice = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="creative" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-5xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">
          {t("creative.label")}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
          {t("creative.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {creativeItems.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const isGallery = item.linkType === "gallery";

            const content = (
              <div className="bg-card border border-border p-6 hover:border-primary/30 transition-colors group h-full flex flex-col">
                <Icon className="w-5 h-5 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-semibold mb-2">
                  {t(`creative.items.${item.id}.title`)}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1 mb-4">
                  {t(`creative.items.${item.id}.description`)}
                </p>
                {isGallery && (
                  <div className="flex items-center gap-1.5 text-xs font-body tracking-widest uppercase text-foreground group-hover:text-primary transition-colors">
                    {t("creative.viewGallery")}
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );

            return (
              <AnimatedSection key={item.id} delay={i * 0.12}>
                {isGallery && item.link ? (
                  <Link to={item.link} className="block h-full">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CreativePractice;
