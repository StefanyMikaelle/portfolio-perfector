import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Software Engineering",
    school: "Federal University",
    period: "2020 — 2024",
    courses: ["Distributed Systems", "Algorithms", "Databases", "Software Architecture"],
  },
];

const certifications = [
  { name: "AWS Certified Developer — Associate", issuer: "Amazon Web Services" },
  { name: "Kotlin for Java Developers", issuer: "JetBrains Academy" },
  { name: "Spring Professional", issuer: "VMware" },
  { name: "Microservices Architecture", issuer: "Coursera" },
];

export function EducationCerts() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="// credentials"
          title="Education & certifications"
          subtitle="Formal training and continuous learning."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="h-5 w-5 text-[color:var(--neon-purple)]" />
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            <div className="space-y-5">
              {education.map((e) => (
                <div key={e.degree}>
                  <p className="font-mono-tech text-xs text-[color:var(--neon-cyan)]">{e.period}</p>
                  <h4 className="font-display text-base font-semibold mt-1">{e.degree}</h4>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {e.courses.map((c) => (
                      <span
                        key={c}
                        className="font-mono-tech text-[10px] px-2 py-0.5 rounded border border-border bg-background/40 text-foreground/80 flex items-center gap-1"
                      >
                        <BookOpen className="h-2.5 w-2.5" /> {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <Award className="h-5 w-5 text-[color:var(--neon-cyan)]" />
              <h3 className="font-display text-lg font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border/60 hover:border-[color:var(--neon-cyan)]/60 transition"
                >
                  <div className="rounded-md p-2 bg-[color:var(--neon-cyan)]/10">
                    <Award className="h-4 w-4 text-[color:var(--neon-cyan)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
