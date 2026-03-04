import AnimatedSection from "./AnimatedSection";
import { Mail, Instagram, Video } from "lucide-react";

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-4xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">Contact</p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold mb-8">
          Let's create<br />something together.
        </h2>
        <p className="text-muted-foreground font-body text-sm max-w-md mb-12 leading-relaxed">
          Available for commissions, collaborations, and exhibition opportunities. Reach out to discuss your project.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-2 text-sm font-body text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            hello@example.com
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-body text-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-body text-foreground hover:text-primary transition-colors"
          >
            <Video className="w-4 h-4" />
            Vimeo
          </a>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs font-body text-muted-foreground">
            © 2024 Your Name. All rights reserved.
          </p>
          <p className="text-xs font-body text-muted-foreground">
            Crafted with passion & precision
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
