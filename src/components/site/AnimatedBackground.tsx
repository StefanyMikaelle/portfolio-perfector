export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg-animated opacity-40" />

      {/* Radial glow blobs */}
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.28 295 / 0.6), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle, oklch(0.85 0.18 195 / 0.5), transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.22 240 / 0.5), transparent 70%)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
    </div>
  );
}
