import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { to: "/" as const, label: "Home" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/40 py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg glass-card">
            <Terminal className="h-5 w-5 text-[color:var(--neon-cyan)]" />
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity glow-purple" />
          </div>
          <div className="font-display text-sm font-bold tracking-wider">
            <span className="text-gradient-purple-cyan">STEFANY</span>
            <span className="text-muted-foreground">.dev</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-gradient-to-r from-[color:var(--neon-purple)] to-[color:var(--neon-cyan)] rounded-full" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-[color:var(--neon-purple)]/40 bg-[color:var(--neon-purple)]/10 px-4 py-2 text-sm font-medium text-foreground transition hover:border-[color:var(--neon-purple)] hover:shadow-[0_0_20px_oklch(0.7_0.28_295/0.5)]"
        >
          <span className="h-2 w-2 rounded-full bg-[color:var(--neon-cyan)] animate-pulse" />
          Hire Me
        </Link>

        <button
          className="md:hidden rounded-md p-2 glass-card"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border/40 mt-3 animate-fade-in">
          <nav className="container mx-auto flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
