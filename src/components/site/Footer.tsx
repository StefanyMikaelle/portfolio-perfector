import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--neon-purple)] to-transparent" />
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-[color:var(--neon-cyan)]" />
              <span className="font-display font-bold text-gradient-purple-cyan">STEFANY.dev</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Building scalable systems for the future. Backend engineering with Kotlin & Java.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/80 hover:text-[color:var(--neon-cyan)] transition">Home</Link></li>
              <li><Link to="/projects" className="text-foreground/80 hover:text-[color:var(--neon-cyan)] transition">Projects</Link></li>
              <li><Link to="/about" className="text-foreground/80 hover:text-[color:var(--neon-cyan)] transition">About</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-[color:var(--neon-cyan)] transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer noopener" className="glass-card rounded-lg p-3 hover:text-[color:var(--neon-purple)]" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener" className="glass-card rounded-lg p-3 hover:text-[color:var(--neon-blue)]" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:stefany@example.com" className="glass-card rounded-lg p-3 hover:text-[color:var(--neon-cyan)]" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <hr className="neon-divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-tech text-xs text-muted-foreground">
            <span className="text-[color:var(--neon-cyan)]">$</span> echo "Building scalable systems for the future."
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Stefany Mikaelle da Silva Lima
          </p>
        </div>
      </div>
    </footer>
  );
}
