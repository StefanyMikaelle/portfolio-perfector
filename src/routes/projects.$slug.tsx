import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github, Boxes, AlertTriangle, Wrench, Trophy, Network } from "lucide-react";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.title} — Case Study` : "Project" },
        { name: "description", content: p?.description ?? "" },
        { property: "og:title", content: p ? `${p.title} — Case Study` : "Project" },
        { property: "og:description", content: p?.description ?? "" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container mx-auto px-4 md:px-8 pt-32">
      <div className="glass-card rounded-2xl p-10 max-w-xl mx-auto text-center">
        <h1 className="font-display text-2xl">Project not found</h1>
        <Link to="/projects" className="text-[color:var(--neon-cyan)] hover:underline mt-4 inline-block">
          ← Back to all projects
        </Link>
      </div>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <article className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[color:var(--neon-cyan)] mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <header className="glass-card rounded-2xl p-8 mb-10 relative overflow-hidden">
          <div
            className="absolute -top-32 -right-32 h-64 w-64 rounded-full blur-3xl opacity-40"
            style={{ background: `radial-gradient(circle, var(--neon-purple), transparent 70%)` }}
          />
          <p className="font-mono-tech text-xs text-[color:var(--neon-cyan)]">// case_study</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-2 text-gradient-neon">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground mt-3">{project.tagline}</p>
          <p className="text-foreground/85 mt-5 leading-relaxed relative">{project.description}</p>

          <div className="flex flex-wrap items-center gap-3 mt-6 relative">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md glass-card px-4 py-2 text-sm font-medium hover:border-[color:var(--neon-cyan)]"
            >
              <Github className="h-4 w-4" /> View on GitHub
            </a>
          </div>
        </header>

        <div className="space-y-6">
          <Section icon={AlertTriangle} title="Problem" color="var(--neon-pink)">
            <p className="text-foreground/85 leading-relaxed">{project.problem}</p>
          </Section>

          <Section icon={Network} title="Architecture" color="var(--neon-purple)">
            <p className="text-foreground/85 leading-relaxed">{project.architecture}</p>
          </Section>

          <Section icon={Boxes} title="Technologies Used" color="var(--neon-cyan)">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono-tech text-xs px-3 py-1 rounded-md border border-border bg-background/40 text-foreground/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </Section>

          <Section icon={Wrench} title="Implementation Details" color="var(--neon-blue)">
            <ul className="space-y-2">
              {project.implementation.map((it) => (
                <li key={it} className="flex gap-3 text-foreground/85">
                  <span className="text-[color:var(--neon-cyan)] font-mono-tech mt-1">▸</span>
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={AlertTriangle} title="Challenges" color="var(--neon-pink)">
            <p className="text-foreground/85 leading-relaxed">{project.challenges}</p>
          </Section>

          <Section icon={Trophy} title="Results" color="var(--neon-cyan)">
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.results.map((r) => (
                <li
                  key={r}
                  className="rounded-lg border border-border/60 bg-background/40 p-3 text-sm text-foreground/90 flex gap-2"
                >
                  <span className="text-[color:var(--neon-cyan)]">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <NextProject currentSlug={project.slug} />
      </div>
    </article>
  );
}

function Section({
  icon: Icon,
  title,
  color,
  children,
}: {
  icon: typeof Boxes;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <section className="glass-card rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="rounded-lg p-2"
          style={{ background: `oklch(from ${color} l c h / 0.15)`, color }}
        >
          <Icon className="h-4 w-4" />
        </div>
        <h2 className="font-display text-lg font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function NextProject({ currentSlug }: { currentSlug: string }) {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  const next = projects[(idx + 1) % projects.length];
  return (
    <div className="mt-10 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p className="font-mono-tech text-xs text-muted-foreground">// next_case_study</p>
        <p className="font-display text-lg mt-1">{next.title}</p>
      </div>
      <Link
        to="/projects/$slug"
        params={{ slug: next.slug }}
        className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[color:var(--neon-purple)] to-[color:var(--neon-blue)] px-4 py-2 text-sm font-semibold text-white"
      >
        Continue →
      </Link>
    </div>
  );
}
