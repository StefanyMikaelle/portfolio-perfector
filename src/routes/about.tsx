import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { EducationCerts } from "@/components/sections/EducationCerts";
import { GithubActivity } from "@/components/sections/GithubActivity";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Stefany Mikaelle" },
      {
        name: "description",
        content:
          "About Stefany Mikaelle — Backend developer focused on Kotlin, Java, scalable APIs and clean architecture.",
      },
      { property: "og:title", content: "About — Stefany Mikaelle" },
      {
        property: "og:description",
        content: "Backend engineer focused on scalable systems with Kotlin and Java.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      <Skills />
      <Experience />
      <EducationCerts />
      <GithubActivity />
    </div>
  );
}
