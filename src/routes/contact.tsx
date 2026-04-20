import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Stefany Mikaelle" },
      {
        name: "description",
        content: "Get in touch with Stefany Mikaelle for backend roles, freelance work or technical conversations.",
      },
      { property: "og:title", content: "Contact — Stefany Mikaelle" },
      {
        property: "og:description",
        content: "Open to backend roles, freelance work and technical collaboration.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
    </div>
  );
}
