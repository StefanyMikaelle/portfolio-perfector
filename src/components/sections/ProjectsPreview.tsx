import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "./About";

const accentMap = {
  purple: "var(--neon-purple)",
  cyan: "var(--neon-cyan)",
  blue: "var(--neon-blue)",
  pink: "var(--neon-pink)",
} as const;

export function ProjectsPreview() {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="// featured_projects"
            title="Backend case studies"
            subtitle="Each project is a deep dive into the architecture, trade-offs and results."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-[color:var(--neon-cyan)] hover:underline self-start md:self-end"
          >
            See all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, idx) => (
            <ProjectCard key={p.slug} idx={idx} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, idx = 0 }: { project: typeof projects[number]; idx?: number }) {
  const color = accentMap[project.accent];
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      className="glass-card rounded-2xl p-6 flex flex-col group relative overflow-hidden"
    >
      <div
        className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
        style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
      />

      <div className="relative space-y-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono-tech text-xs text-muted-foreground">case_study_{String(idx + 1).padStart(2, "0")}</p>
            <h3 className="font-display text-xl font-semibold mt-1">{project.title}</h3>
          </div>
          <span
            className="h-2.5 w-2.5 rounded-full mt-2"
            style={{ background: color, boxShadow: `0 0 12px ${color}` }}
          />
        </div>

        <p className="text-sm text-foreground/80 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="font-mono-tech text-[10px] px-2 py-0.5 rounded border border-border bg-background/40 text-foreground/80"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="font-mono-tech text-[10px] px-2 py-0.5 text-muted-foreground">
              +{project.tech.length - 5}
            </span>
          )}
        </div>
      </div>

      <div className="relative flex items-center gap-2 mt-6 pt-4 border-t border-border/40">
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-[color:var(--neon-cyan)] transition"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
        <div className="ml-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            aria-label={`${project.title} on GitHub`}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
