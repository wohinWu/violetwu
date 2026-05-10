import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { publications } from "@/data/publications";

const PublicationsSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="publications" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">
          {t("publications.label")}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
          {t("publications.title")}
        </h2>

        <div className="space-y-0 divide-y divide-border">
          {publications.map((pub, i) => (
            <AnimatedSection key={pub.titleKey} delay={i * 0.08}>
              <div className="py-5 flex items-start justify-between gap-4 group">
                <div className="min-w-0">
                  <h3 className="font-body text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                    {t(pub.titleKey)}
                  </h3>
                  <p className="text-xs font-body text-muted-foreground mt-1">
                    {pub.venue} · {pub.year}
                  </p>
                </div>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-muted-foreground hover:text-primary transition-colors mt-0.5"
                    aria-label="Open publication"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PublicationsSection;
