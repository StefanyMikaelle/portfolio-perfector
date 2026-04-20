import { motion } from "framer-motion";
import { Brain, Cpu, Layers, Rocket } from "lucide-react";

const highlights = [
  { icon: Layers, label: "Clean Architecture" },
  { icon: Cpu, label: "Microservices" },
  { icon: Rocket, label: "Performance" },
  { icon: Brain, label: "Problem Solving" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="// about_me"
          title="Engineering systems that scale"
          subtitle="Backend craft, clean architecture, and a relentless drive to learn."
        />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 font-mono-tech text-sm space-y-2"
          >
            <div className="flex gap-1.5 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 text-muted-foreground text-xs">~/stefany/profile.kt</span>
            </div>
            <pre className="text-xs leading-relaxed whitespace-pre-wrap">
<span className="text-[color:var(--neon-purple)]">data class</span> <span className="text-[color:var(--neon-cyan)]">Developer</span>(
  <span className="text-foreground">  val</span> name: String = <span className="text-green-400">"Stefany Mikaelle"</span>,
  <span className="text-foreground">  val</span> role: String = <span className="text-green-400">"Backend Engineer"</span>,
  <span className="text-foreground">  val</span> stack: List&lt;String&gt; = listOf(
    <span className="text-green-400">    "Kotlin"</span>, <span className="text-green-400">"Java"</span>,
    <span className="text-green-400">    "Spring Boot"</span>, <span className="text-green-400">"Ktor"</span>,
  ),
  <span className="text-foreground">  val</span> focus: String = <span className="text-green-400">"scalable APIs"</span>,
  <span className="text-foreground">  val</span> mindset: String = <span className="text-green-400">"always learning"</span>,
)
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a <span className="text-[color:var(--neon-purple)] font-semibold">Backend Software Developer</span>{" "}
              with deep focus on Kotlin and Java. I love designing distributed systems
              that stay fast, observable, and maintainable as they grow.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              My day-to-day is split between modeling clean domains, building resilient
              REST APIs, breaking monoliths into microservices when it makes sense, and
              squeezing performance out of every layer — from JVM tuning to database
              indexes. I treat tests, observability, and CI/CD as part of the product,
              not afterthoughts.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Outside of shipping, I study system design, contribute to internal
              libraries, and write technical notes on architecture trade-offs.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="glass-card rounded-lg p-3 flex flex-col items-center text-center gap-2 hover:border-[color:var(--neon-cyan)]/60"
                >
                  <h.icon className="h-5 w-5 text-[color:var(--neon-cyan)]" />
                  <span className="text-xs font-medium text-foreground/90">{h.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-3 max-w-3xl">
      <p className="font-mono-tech text-xs uppercase tracking-widest text-[color:var(--neon-cyan)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-5xl font-bold">
        <span className="text-gradient-purple-cyan">{title}</span>
      </h2>
      {subtitle && <p className="text-muted-foreground text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}
