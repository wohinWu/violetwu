import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import { Globe, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="contact" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">{t("contact.label")}</p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold mb-8">
          {t("contact.title1")}<br />{t("contact.title2")}
        </h2>
        <p className="text-muted-foreground font-body text-sm max-w-md mb-12 leading-relaxed">
          {t("contact.description")}
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href={`mailto:${t("contact.email")}`}
            className="flex items-center gap-2 text-sm font-body text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            {t("contact.email")}
          </a>
          <a
            href="tel:+8615013110868"
            className="flex items-center gap-2 text-sm font-body text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            {t("contact.phone")}
          </a>
          <a
            href={`https://${t("contact.website")}`}
            className="flex items-center gap-2 text-sm font-body text-foreground hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            {t("contact.website")}
          </a>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs font-body text-muted-foreground">
            {t("contact.copyright")}
          </p>
          <p className="text-xs font-body text-muted-foreground">
            {t("contact.crafted")}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
