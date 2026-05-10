import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { featuredProjects } from "@/data/projects";

const FeaturedProjects = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="projects" className="py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-6xl">
        <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-6">
          {t("featuredProjects.label")}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12">
          {t("featuredProjects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.12}>
              <div className="bg-card border border-border group hover:border-primary/30 transition-colors flex flex-col h-full">
                <div className="aspect-[16/10] bg-secondary/50 overflow-hidden">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={t(`featuredProjects.items.${project.id}.title`)}
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
                  <p className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-2">
                    {t(`featuredProjects.items.${project.id}.category`)}
                  </p>
                  <h3 className="font-display text-lg font-semibold mb-2 leading-snug">
                    {t(`featuredProjects.items.${project.id}.title`)}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4 flex-1">
                    {t(`featuredProjects.items.${project.id}.summary`)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-body px-2 py-0.5 bg-secondary text-secondary-foreground tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-body tracking-widest uppercase text-foreground hover:text-primary transition-colors"
                    >
                      {t("common.viewCaseStudy")}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    {project.links.map((link) => (
                      <a
                        key={link.type}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        {t(link.labelKey)}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturedProjects;
