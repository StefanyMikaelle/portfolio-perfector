import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { Server, Database, Network } from "lucide-react";

export function Architecture() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="// system_design"
          title="System architecture in motion"
          subtitle="How I think about building backends that survive growth, traffic and time."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          <DiagramCard
            icon={Network}
            title="Microservices Mesh"
            color="var(--neon-purple)"
            nodes={[
              { x: 50, y: 10, label: "Gateway" },
              { x: 15, y: 50, label: "Auth" },
              { x: 50, y: 50, label: "Orders" },
              { x: 85, y: 50, label: "Catalog" },
              { x: 30, y: 90, label: "Payments" },
              { x: 70, y: 90, label: "Notify" },
            ]}
            edges={[
              [0, 1], [0, 2], [0, 3], [2, 4], [2, 5], [1, 4],
            ]}
          />
          <DiagramCard
            icon={Server}
            title="API Request Flow"
            color="var(--neon-cyan)"
            nodes={[
              { x: 10, y: 50, label: "Client" },
              { x: 35, y: 50, label: "Gateway" },
              { x: 60, y: 25, label: "Auth" },
              { x: 60, y: 75, label: "Service" },
              { x: 88, y: 50, label: "DB" },
            ]}
            edges={[[0, 1], [1, 2], [1, 3], [3, 4]]}
          />
          <DiagramCard
            icon={Database}
            title="Data Layer"
            color="var(--neon-blue)"
            nodes={[
              { x: 50, y: 15, label: "API" },
              { x: 20, y: 55, label: "Postgres" },
              { x: 50, y: 55, label: "Redis" },
              { x: 80, y: 55, label: "Mongo" },
              { x: 50, y: 90, label: "Kafka" },
            ]}
            edges={[[0, 1], [0, 2], [0, 3], [1, 4], [3, 4]]}
          />
        </div>
      </div>
    </section>
  );
}

type Node = { x: number; y: number; label: string };

function DiagramCard({
  icon: Icon,
  title,
  color,
  nodes,
  edges,
}: {
  icon: typeof Server;
  title: string;
  color: string;
  nodes: Node[];
  edges: [number, number][];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-5 flex flex-col"
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-4 w-4" style={{ color }} />
        <h3 className="font-display text-sm font-semibold">{title}</h3>
        <span className="ml-auto font-mono-tech text-[10px] text-muted-foreground">live</span>
      </div>
      <div className="relative aspect-square w-full rounded-lg grid-bg overflow-hidden border border-border/40">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {edges.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke={color}
              strokeWidth="0.4"
              strokeDasharray="1.5 1.5"
              opacity={0.7}
            >
              <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite" />
            </line>
          ))}
          {nodes.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r="3" fill={color} opacity="0.2">
                <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
              </circle>
              <circle cx={n.x} cy={n.y} r="1.8" fill={color} />
              <text
                x={n.x}
                y={n.y - 5}
                fontSize="3.2"
                fill="white"
                textAnchor="middle"
                fontFamily="JetBrains Mono"
                opacity="0.9"
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </motion.div>
  );
}
