import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const sectionKeys = ["about", "skills", "work", "education", "writing", "speaking", "contact"] as const;

const SideNav = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);

      const sectionElements = sectionKeys.map((s) => ({
        id: s,
        el: document.getElementById(s),
      }));

      for (const section of sectionElements.reverse()) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
        >
          {sectionKeys.map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className={`text-xs font-body tracking-widest uppercase text-right transition-all duration-300 ${
                activeSection === section
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(`nav.${section}`)}
            </button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
