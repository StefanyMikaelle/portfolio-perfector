import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectsPreview";
import { SectionHeader } from "@/components/sections/About";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Stefany Mikaelle" },
      {
        name: "description",
        content: "Backend case studies: API gateway, e-commerce platform and event-driven notification service.",
      },
      { property: "og:title", content: "Projects — Stefany Mikaelle" },
      {
        property: "og:description",
        content: "Detailed backend case studies built with Kotlin, Java and Spring Boot.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="// projects[]"
          title="Backend case studies"
          subtitle="Each project below ships with the problem, architecture, implementation details, challenges and measurable outcomes."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
