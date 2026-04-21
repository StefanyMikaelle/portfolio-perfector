import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Itaú Unibanco · Full-time",
    role: "Jr. IT Engineering Analyst",
    period: "Apr 2024 — Present",
    location: "São Paulo, Brazil · Hybrid",
    description:
      "Back-end developer in the cards division, building robust, scalable and high-performance solutions that support millions of users across Brazil. Key deliveries so far: credit card outstanding balance portability (BACEN regulation) and modernization of the Personal Credit journey for non-account holders to AWS (in progress).",
    tech: ["Java", "Kotlin", "Python", "AWS", "DevOps", "Software Architecture", "Agile"],
  },
  {
    company: "F1RST Digital Services · Full-time",
    role: "IT Analyst I",
    period: "Sep 2023 — Apr 2024",
    location: "São Paulo, Brazil · Hybrid",
    description:
      "Junior Fullstack developer in the Corporate Channels (PJ) division. Backend with Java, Spring Boot, Oracle, Redis, Apache Camel for service orchestration, Apigee and Camunda, with unit test coverage in JUnit and SonarQube. Frontend in Angular/TypeScript using MVVM. Applied BFF, Clean Architecture, Hexagonal Architecture, DDD, TDD and SOLID. Main project: Santander platform for corporate financial control.",
    tech: [
      "Java",
      "Spring Boot",
      "Oracle",
      "Redis",
      "Apache Camel",
      "Apigee",
      "Camunda",
      "Angular",
      "TypeScript",
      "JUnit",
    ],
  },
  {
    company: "F1RST Digital Services",
    role: "IT Assistant",
    period: "Oct 2022 — Sep 2023",
    location: "São Paulo, Brazil",
    description:
      "Front-end developer helping the team build and maintain responsive web and mobile screens for Santander's private pension product. Worked with Angular, TypeScript, HTML, CSS and Flame, with unit tests in Karma and Jasmine inside a Micro Frontend (MFE) architecture. Main project: Santander private pension contracting and beneficiary management screens.",
    tech: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Flame", "Karma", "Jasmine", "MFE"],
  },
];

export function Experience() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="// experience.log"
          title="Where I've shipped"
          subtitle="A timeline of impact across teams and stacks."
        />

        <div className="relative mt-12 max-w-3xl mx-auto">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, var(--neon-purple), var(--neon-cyan), transparent)" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-6 items-start ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 z-10">
                  <div className="h-4 w-4 rounded-full bg-background border-2 border-[color:var(--neon-purple)] shadow-[0_0_15px_oklch(0.7_0.28_295/0.7)]" />
                </div>

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <p className="font-mono-tech text-xs text-[color:var(--neon-cyan)]">{exp.period}</p>
                  <h3 className="font-display text-xl font-semibold mt-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1 md:justify-end">
                    {i % 2 === 0 ? (
                      <>
                        {exp.company} <Briefcase className="h-3.5 w-3.5" />
                      </>
                    ) : (
                      <>
                        <Briefcase className="h-3.5 w-3.5" /> {exp.company}
                      </>
                    )}
                  </p>
                  {exp.location && (
                    <p className="font-mono-tech text-[11px] text-muted-foreground/70 mt-1">{exp.location}</p>
                  )}
                </div>

                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}>
                  <div className="glass-card rounded-xl p-4">
                    <p className="text-sm text-foreground/85 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono-tech text-[10px] px-2 py-0.5 rounded border border-border bg-background/40 text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
