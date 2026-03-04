import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Instagram, Video } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt={t("hero.heroAlt")}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Top nav links */}
      <div className="absolute top-8 right-8 flex items-center gap-4 z-10">
        <LanguageSwitcher />
        <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail className="w-4 h-4" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Video className="w-4 h-4" />
        </a>
      </div>

      {/* Hero text */}
      <div className="relative z-10 px-8 md:px-16 pb-16 md:pb-24 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight"
        >
          <span className="text-foreground">WEI</span>
          <br />
          <span className="text-foreground">WU</span>
          <br />
          <span className="text-primary">{t("hero.photography")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-sm text-muted-foreground max-w-md font-body tracking-wide leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
