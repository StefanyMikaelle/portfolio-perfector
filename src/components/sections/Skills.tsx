import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import {
  Code2,
  Boxes,
  Database,
  Cloud,
  Wrench,
  Layers3,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    color: "var(--neon-purple)",
    items: ["Kotlin", "Java", "SQL", "Bash"],
  },
  {
    icon: Boxes,
    title: "Backend Frameworks",
    color: "var(--neon-cyan)",
    items: ["Spring Boot", "Ktor", "Spring WebFlux", "Spring Cloud"],
  },
  {
    icon: Layers3,
    title: "Architecture",
    color: "var(--neon-pink)",
    items: ["Clean Architecture", "Hexagonal", "REST APIs", "Microservices", "Event-Driven"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "var(--neon-blue)",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    color: "var(--neon-cyan)",
    items: ["Docker", "Git", "GitHub Actions", "CI/CD", "Linux", "Kubernetes"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    color: "var(--neon-purple)",
    items: ["AWS", "Azure", "Vercel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="// core_skills"
          title="The stack I build with"
          subtitle="Tools and patterns I use to ship reliable backend systems."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card rounded-xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="rounded-lg p-2.5 transition-shadow group-hover:shadow-[0_0_20px_currentColor]"
                  style={{ background: `oklch(from ${group.color} l c h / 0.15)`, color: group.color as string }}
                >
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono-tech text-xs px-2.5 py-1 rounded-md border border-border bg-background/40 text-foreground/85 hover:border-[color:var(--neon-cyan)]/60 hover:text-[color:var(--neon-cyan)] transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
