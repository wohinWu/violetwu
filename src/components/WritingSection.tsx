import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

type Article = {
  title: string;
  publication: string;
  date: string;
};

const WritingSection = () => {
  const { t } = useTranslation();
  const articles = t("writing.articles", { returnObjects: true }) as Article[];

  return (
    <AnimatedSection id="writing" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">{t("writing.label")}</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
          {t("writing.title")}
        </h2>
        <div className="space-y-0 divide-y divide-border">
          {articles.map((article, i) => (
            <AnimatedSection key={article.title} delay={i * 0.1}>
              <a
                href="#"
                className="flex items-start justify-between py-6 group"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground mt-1">
                    {article.publication} · {article.date}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1 ml-4" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WritingSection;
