import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  gameProjects,
  designProjects,
  type CreativeProjectItem,
} from "@/data/creative";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const categoryMap: Record<string, { i18nKey: string; items: CreativeProjectItem[] }> = {
  games: { i18nKey: "games", items: gameProjects },
  design: { i18nKey: "design", items: designProjects },
};

const CreativeShowcase = () => {
  const { category } = useParams<{ category: string }>();
  const { t } = useTranslation();

  if (!category || !categoryMap[category]) {
    return <Navigate to="/" replace />;
  }

  const { i18nKey, items } = categoryMap[category];

  return (
    <main className="min-h-screen bg-background">
      <div className="absolute top-8 right-8 z-10">
        <LanguageSwitcher />
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t("common.backToHome")}
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4">
            {t(`creative.${i18nKey}.pageTitle`)}
          </h1>
          <p className="text-muted-foreground font-body text-sm max-w-2xl leading-relaxed">
            {t(`creative.${i18nKey}.pageSubtitle`)}
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div className="bg-card border border-border group hover:border-primary/30 transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] bg-secondary/50 overflow-hidden">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={t(`creative.${i18nKey}.items.${item.id}.title`)}
                      className="w-full h-full object-cover grayscale-hover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                      <span className="font-display text-4xl font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold mb-2 leading-snug">
                    {t(`creative.${i18nKey}.items.${item.id}.title`)}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4 flex-1">
                    {t(`creative.${i18nKey}.items.${item.id}.summary`)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-body px-2 py-0.5 bg-secondary text-secondary-foreground tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.link && (
                    <div className="pt-2 border-t border-border">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-body tracking-widest uppercase text-foreground hover:text-primary transition-colors"
                      >
                        {t("common.external")}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-border"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t("common.backToHome")}
          </Link>
        </motion.footer>
      </div>
    </main>
  );
};

export default CreativeShowcase;
