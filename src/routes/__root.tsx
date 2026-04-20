import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { BackToTop } from "@/components/site/BackToTop";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-card rounded-2xl p-10">
        <h1 className="font-display text-7xl font-bold text-gradient-neon">404</h1>
        <h2 className="mt-4 font-display text-xl">Signal lost</h2>
        <p className="mt-2 text-sm text-muted-foreground font-mono-tech">
          $ route_not_found --path=/unknown
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[color:var(--neon-purple)] to-[color:var(--neon-blue)] px-4 py-2 text-sm font-medium text-white"
          >
            Return to base
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Stefany Mikaelle — Backend Kotlin / Java Developer" },
      {
        name: "description",
        content:
          "Stefany Mikaelle da Silva Lima — Backend Software Developer specialized in Kotlin and Java. Scalable APIs, microservices and high-performance systems.",
      },
      { name: "author", content: "Stefany Mikaelle da Silva Lima" },
      { property: "og:title", content: "Stefany Mikaelle — Backend Kotlin / Java Developer" },
      {
        property: "og:description",
        content:
          "Backend portfolio: Kotlin, Java, Spring Boot, microservices and clean architecture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </>
  );
}
