import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ImageOff } from "lucide-react";
import { photoCategories, type PhotoCategory } from "@/data/creative";
import { photos } from "@/data/photos";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const PhotoGallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<PhotoCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
          >
            {filtered.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-24 text-muted-foreground/40">
                <ImageOff className="w-10 h-10 mb-3" />
                <p className="text-sm font-body">No photos yet</p>
              </div>
            ) : (
              filtered.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="break-inside-avoid relative group"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt ?? ""}
                    loading="lazy"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full rounded-sm hover:opacity-90 transition-opacity select-none"
                  />
                  {/* Transparent overlay to block direct img interaction */}
                  <div className="absolute inset-0 rounded-sm" />
                  {/* Watermark */}
                  <span className="absolute bottom-2 right-2 text-[10px] text-white/50 font-body tracking-wider select-none pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    _violetwu_
                  </span>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

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
