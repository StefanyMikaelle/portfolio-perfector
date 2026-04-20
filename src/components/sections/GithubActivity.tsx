import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { Github, GitCommit, Star, GitBranch } from "lucide-react";

const stats = [
  { icon: GitCommit, label: "Commits this year", value: "1,284" },
  { icon: Star, label: "Stars earned", value: "342" },
  { icon: GitBranch, label: "Public repos", value: "47" },
  { icon: Github, label: "Pull requests", value: "186" },
];

const languages = [
  { name: "Kotlin", pct: 42, color: "var(--neon-purple)" },
  { name: "Java", pct: 28, color: "var(--neon-cyan)" },
  { name: "TypeScript", pct: 14, color: "var(--neon-blue)" },
  { name: "SQL", pct: 9, color: "var(--neon-pink)" },
  { name: "Shell", pct: 7, color: "oklch(0.65 0.05 260)" },
];

export function GithubActivity() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="// github_activity"
          title="Live from the terminal"
          subtitle="A snapshot of my open-source heartbeat."
        />

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-5">
          {/* Stats + heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5 text-[color:var(--neon-cyan)]" />
                <h3 className="font-display text-base font-semibold">@stefany</h3>
              </div>
              <span className="font-mono-tech text-xs text-[color:var(--neon-cyan)]">●  active</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-border/60 p-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <s.icon className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-mono-tech uppercase tracking-wider">{s.label}</span>
                  </div>
                  <p className="font-display text-xl font-bold mt-1 text-gradient-purple-cyan">{s.value}</p>
                </div>
              ))}
            </div>

            <ContributionHeatmap />
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-display text-base font-semibold mb-5">Top Languages</h3>
            <div className="space-y-4">
              {languages.map((l) => (
                <div key={l.name}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="font-mono-tech">{l.name}</span>
                    <span className="font-mono-tech text-xs text-muted-foreground">{l.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-background/40 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: l.color, boxShadow: `0 0 10px ${l.color}` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContributionHeatmap() {
  // Deterministic pseudo-random based on index
  const cells = Array.from({ length: 7 * 26 }, (_, i) => {
    const v = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
    return v > 0.7 ? 4 : v > 0.5 ? 3 : v > 0.3 ? 2 : v > 0.15 ? 1 : 0;
  });
  const colorFor = (n: number) =>
    n === 0
      ? "oklch(0.18 0.02 270)"
      : n === 1
        ? "oklch(0.35 0.1 290)"
        : n === 2
          ? "oklch(0.55 0.18 290)"
          : n === 3
            ? "oklch(0.7 0.24 290)"
            : "oklch(0.85 0.22 290)";

  return (
    <div>
      <p className="text-xs text-muted-foreground mb-2 font-mono-tech">Contributions — last 6 months</p>
      <div className="grid grid-rows-7 grid-flow-col gap-[3px]">
        {cells.map((v, i) => (
          <div
            key={i}
            className="h-2.5 w-2.5 rounded-[2px]"
            style={{ background: colorFor(v), boxShadow: v >= 3 ? `0 0 6px ${colorFor(v)}` : "none" }}
            title={`${v} contributions`}
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-2 text-[10px] text-muted-foreground">
        <span>less</span>
        {[0, 1, 2, 3, 4].map((n) => (
          <span key={n} className="h-2.5 w-2.5 rounded-[2px]" style={{ background: colorFor(n) }} />
        ))}
        <span>more</span>
      </div>
    </div>
  );
}
