import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { featuredProjects, projectIds } from "@/data/projects";

const sectionKeys = [
  "overview",
  "myRole",
  "problem",
  "process",
  "solution",
  "outcome",
  "reflection",
] as const;

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  if (!id || !projectIds.includes(id)) {
    return <Navigate to="/" replace />;
  }

  const project = featuredProjects.find((p) => p.id === id)!;

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-8 md:px-16 py-16">
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
          <p className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-4">
            {t(`featuredProjects.items.${id}.category`)}
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
            {t(`featuredProjects.items.${id}.title`)}
          </h1>
          <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xl">
            {t(`featuredProjects.items.${id}.summary`)}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-body px-2.5 py-1 bg-secondary text-secondary-foreground tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        <div className="space-y-12">
          {sectionKeys.map((key, i) => {
            const content = t(`projectDetail.items.${id}.${key}`);
            if (!content || content === `projectDetail.items.${id}.${key}`) return null;

            return (
              <motion.section
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              >
                <h2 className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-3">
                  {t(`projectDetail.${key}`)}
                </h2>
                <p className="font-body text-sm text-foreground leading-relaxed">
                  {content}
                </p>
              </motion.section>
            );
          })}
        </div>

        {project.links.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <h2 className="text-xs font-body tracking-[0.3em] uppercase text-primary mb-4">
              {t("projectDetail.externalLinks")}
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.type}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-body text-foreground hover:text-primary transition-colors"
                >
                  {t(link.labelKey)}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </motion.section>
        )}

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
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

export default ProjectDetail;
