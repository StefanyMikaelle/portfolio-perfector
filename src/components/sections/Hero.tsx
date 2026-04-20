import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Download, FolderGit2, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const subtitleFull =
  "I design scalable backend systems, APIs, and high-performance services using Kotlin and Java.";

export function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(subtitleFull.slice(0, i));
      if (i >= subtitleFull.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated code lines background */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <pre className="font-mono-tech text-[10px] md:text-xs text-[color:var(--neon-purple)] leading-relaxed p-8 select-none">
{`@RestController
class GatewayController(
  private val routerService: RouterService,
  private val authService: AuthService,
) {
  @GetMapping("/api/v1/route/{service}/**")
  suspend fun route(
    @PathVariable service: String,
    request: ServerHttpRequest,
  ): Mono<ResponseEntity<Any>> = coroutineScope {
    val token = request.headers.getFirst("Authorization")
    val claims = authService.validate(token).awaitSingle()
    routerService.dispatch(service, request, claims)
  }
}`}
        </pre>
      </div>

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--neon-purple)]/40 bg-[color:var(--neon-purple)]/10 px-3 py-1 text-xs font-mono-tech"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--neon-cyan)] animate-pulse" />
            <Sparkles className="h-3 w-3 text-[color:var(--neon-cyan)]" />
            <span className="text-foreground/80">Available for backend roles</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-mono-tech text-sm text-[color:var(--neon-cyan)] mb-3">
              <span className="text-muted-foreground">$</span> whoami
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              <span className="block text-foreground">Stefany Mikaelle</span>
              <span className="block text-gradient-neon text-glow-purple">da Silva Lima</span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-display text-lg md:text-xl text-foreground/90"
          >
            Backend{" "}
            <span className="text-[color:var(--neon-purple)]">Kotlin</span> /{" "}
            <span className="text-[color:var(--neon-cyan)]">Java</span> Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-mono-tech text-sm md:text-base text-muted-foreground max-w-xl typing-cursor min-h-[3.5rem]"
          >
            {typed}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[color:var(--neon-purple)] to-[color:var(--neon-blue)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_oklch(0.7_0.28_295/0.5)] transition hover:shadow-[0_0_50px_oklch(0.7_0.28_295/0.8)]"
            >
              <FolderGit2 className="h-4 w-4" />
              View Projects
            </Link>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-md glass-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-[color:var(--neon-cyan)]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-[color:var(--neon-cyan)]/40 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-[color:var(--neon-cyan)]/10 transition"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-4 pt-6 max-w-md"
          >
            {[
              { v: "10k+", l: "req/s served" },
              { v: "99.9%", l: "uptime" },
              { v: "12+", l: "microservices" },
            ].map((s) => (
              <div key={s.l} className="glass-card rounded-lg p-3">
                <div className="font-display text-xl font-bold text-gradient-purple-cyan">{s.v}</div>
                <div className="font-mono-tech text-[10px] text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative justify-self-center"
        >
          <div className="absolute -inset-6 rounded-full opacity-50 blur-3xl bg-gradient-to-br from-[color:var(--neon-purple)] via-[color:var(--neon-pink)] to-[color:var(--neon-cyan)]" />
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-2xl overflow-hidden glass-card border-2 border-[color:var(--neon-purple)]/40 animate-float">
            <img
              src={profileImg}
              alt="Stefany Mikaelle da Silva Lima — Backend Developer"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 glass rounded-md p-2 font-mono-tech text-[10px]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--neon-cyan)] animate-pulse" />
                <span className="text-foreground/80">status: <span className="text-[color:var(--neon-cyan)]">online</span></span>
              </div>
            </div>
          </div>
          {/* Corner brackets */}
          {[
            "top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl",
            "top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl",
            "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl",
            "bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl",
          ].map((cls) => (
            <div
              key={cls}
              className={`absolute h-6 w-6 border-[color:var(--neon-cyan)] ${cls} pointer-events-none`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
