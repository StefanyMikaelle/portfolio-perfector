import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { Architecture } from "@/components/sections/Architecture";
import { Experience } from "@/components/sections/Experience";
import { EducationCerts } from "@/components/sections/EducationCerts";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stefany Mikaelle — Backend Kotlin / Java Developer" },
      {
        name: "description",
        content:
          "Backend Software Developer specialized in Kotlin and Java. Scalable APIs, microservices and high-performance systems.",
      },
      { property: "og:title", content: "Stefany Mikaelle — Backend Kotlin / Java Developer" },
      {
        property: "og:description",
        content: "Portfolio of Stefany Mikaelle — Backend Engineer (Kotlin / Java).",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <hr className="neon-divider container mx-auto" />
      <About />
      <Skills />
      <Architecture />
      <ProjectsPreview />
      <Experience />
      <EducationCerts />
      <GithubActivity />
      <Contact />
    </>
  );
}
