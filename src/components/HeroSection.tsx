import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowDown, Download, Mail } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import LanguageSwitcher from "./LanguageSwitcher";

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute top-8 right-8 flex items-center gap-4 z-10">
        <LanguageSwitcher />
      </div>

      <div className="w-full max-w-6xl mx-auto px-8 md:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — text */}
          <div className="order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-5"
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.9] tracking-tight"
            >
              <span className="text-foreground">WEI</span>
              <br />
              <span className="text-foreground">WU</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 text-sm text-muted-foreground max-w-md font-body tracking-wide leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-body tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                <ArrowDown className="w-3.5 h-3.5" />
                {t("hero.ctaProjects")}
              </button>
              <a
                href="/吴蔚简历.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-foreground/20 text-foreground text-xs font-body tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                {t("hero.ctaCV")}
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-foreground/20 text-foreground text-xs font-body tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {t("hero.ctaContact")}
              </button>
            </motion.div>
          </div>

          {/* Right column — portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-3 bg-secondary/60 rounded-2xl -rotate-2" />

              <div className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-border/50">
                <img
                  src={portrait}
                  alt={t("hero.heroAlt")}
                  className="w-full max-w-xs sm:max-w-sm lg:max-w-[340px] object-cover"
                  style={{ aspectRatio: "3 / 4" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
