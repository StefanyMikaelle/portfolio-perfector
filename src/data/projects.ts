export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  problem: string;
  architecture: string;
  implementation: string[];
  challenges: string;
  results: string[];
  github: string;
  accent: "purple" | "cyan" | "blue" | "pink";
};

export const projects: Project[] = [
  {
    slug: "api-gateway-system",
    title: "API Gateway System",
    tagline: "High-throughput microservices gateway",
    description:
      "A high-performance API gateway built with Kotlin and Spring Cloud Gateway, routing 10k+ req/s across distributed microservices.",
    tech: ["Kotlin", "Spring Boot", "Spring Cloud Gateway", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
    problem:
      "A growing platform needed a unified entry point for 12+ microservices with consistent authentication, rate limiting, request routing, and observability — without becoming a single point of failure.",
    architecture:
      "Built around a stateless reactive gateway layer using Spring Cloud Gateway and Project Reactor. Service discovery via Consul, distributed rate limiting backed by Redis, and circuit-breaker patterns with Resilience4j. JWT validation happens at the edge, and traces flow into OpenTelemetry → Grafana Tempo.",
    implementation: [
      "Reactive non-blocking routing with WebFlux to maximize throughput per pod",
      "Token bucket rate limiter with Redis Lua scripts for atomic counters",
      "Centralized JWT validation with public-key caching (10 min TTL)",
      "Dynamic route configuration loaded from PostgreSQL, hot-reloaded via SSE",
      "Request/response logging pipeline with sensitive header redaction",
    ],
    challenges:
      "Reactive programming required rethinking error handling and backpressure across the entire request chain. Memory leaks in connection pools surfaced under load — solved by tuning Netty event loops and migrating to a custom WebClient pool per downstream service.",
    results: [
      "Sustained 10k req/s with p99 latency under 80ms",
      "Reduced authentication latency by 65% via key caching",
      "Zero-downtime deploys via blue/green rollout",
      "Cut downstream service traffic by 40% with response caching",
    ],
    github: "https://github.com",
    accent: "purple",
  },
  {
    slug: "ecommerce-backend",
    title: "E-commerce Backend",
    tagline: "Modular monolith with payment & inventory",
    description:
      "REST API powering an e-commerce platform — auth, catalog, cart, checkout and Stripe payments — built on Spring Boot with hexagonal architecture.",
    tech: ["Kotlin", "Spring Boot", "PostgreSQL", "Flyway", "Stripe API", "JWT", "Testcontainers"],
    problem:
      "A startup needed a production-grade e-commerce backend that could handle realistic traffic, support seasonal spikes, and remain easy to evolve as the product roadmap shifted weekly.",
    architecture:
      "Modular monolith using hexagonal (ports & adapters) architecture. Each bounded context (catalog, orders, payments, identity) owns its own domain model and database schema. Outbox pattern ensures consistency between transactional state and downstream events.",
    implementation: [
      "Domain-driven design with aggregates enforcing invariants in pure Kotlin",
      "Stripe Payment Intents with idempotency keys and webhook reconciliation",
      "Optimistic locking on inventory to prevent overselling",
      "Test pyramid: unit (JUnit5) + integration (Testcontainers + real PostgreSQL)",
      "Database migrations versioned with Flyway, repeatable seeds for dev/staging",
    ],
    challenges:
      "Reconciling Stripe webhooks with internal order state required handling out-of-order, duplicate, and delayed events. Solved with an idempotency table and a finite state machine driving order transitions.",
    results: [
      "99.95% checkout success rate measured over 6 months",
      "Sub-200ms p95 catalog response under load",
      "Zero double-charges in production due to idempotent payment flow",
      "85% test coverage on domain layer",
    ],
    github: "https://github.com",
    accent: "cyan",
  },
  {
    slug: "notification-service",
    title: "Notification Service",
    tagline: "Event-driven multi-channel delivery",
    description:
      "Event-driven notification platform delivering email, SMS, and push at scale via Kafka, with retries, deduplication, and per-tenant rate limits.",
    tech: ["Kotlin", "Ktor", "Apache Kafka", "MongoDB", "Redis", "AWS SES", "Twilio"],
    problem:
      "Multiple internal teams were sending notifications in inconsistent ways — duplicate emails, no retry logic, no audit trail. The org needed a single, reliable delivery service.",
    architecture:
      "Producers publish domain events to Kafka topics. The notification service consumes events, materializes them through pluggable channel adapters (SES, Twilio, FCM), and persists delivery state in MongoDB. Redis handles deduplication windows and per-tenant rate limits.",
    implementation: [
      "Ktor-based consumers with parallel partition processing and graceful shutdown",
      "Template engine with per-locale fallbacks and variable interpolation",
      "Exponential backoff with jitter for transient provider failures",
      "Dead-letter topic + retry dashboard for operations team",
      "Idempotency keys derived from event ID to prevent duplicate sends",
    ],
    challenges:
      "Designing a retry strategy that respected provider rate limits while still meeting SLAs. Solved by introducing a token-bucket scheduler per provider and per tenant, persisted in Redis with Lua scripts for atomicity.",
    results: [
      "Processed 2M+ notifications/day with 99.9% delivery rate",
      "Reduced duplicate-send incidents to zero",
      "Cut p95 delivery time from 8s to 1.2s",
      "Onboarded 6 internal teams within 2 months",
    ],
    github: "https://github.com",
    accent: "blue",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
