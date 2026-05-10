import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { photoCategories, type PhotoCategory } from "@/data/creative";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const PhotoGallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<PhotoCategory | "all">("all");

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
            {t("gallery.backToHome")}
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4">
            {t("gallery.title")}
          </h1>
          <p className="text-muted-foreground font-body text-sm">
            {t("gallery.subtitle")}
          </p>
        </motion.header>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`text-xs font-body tracking-widest uppercase px-3 py-1.5 transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("gallery.categories.all")}
          </button>
          {photoCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-body tracking-widest uppercase px-3 py-1.5 transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(`gallery.categories.${cat}`)}
            </button>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
        >
          {/* Placeholder grid — replace with actual photos */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="break-inside-avoid bg-secondary/30 border border-border flex items-center justify-center text-muted-foreground/20 font-display text-2xl"
              style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/3" : "1/1" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </motion.div>

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

export default PhotoGallery;
