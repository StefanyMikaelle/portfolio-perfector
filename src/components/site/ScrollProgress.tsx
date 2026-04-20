import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px]"
    >
      <div
        className="h-full w-full"
        style={{ background: "linear-gradient(90deg, oklch(0.7 0.28 295), oklch(0.85 0.18 195), oklch(0.72 0.28 340))" }}
      />
    </motion.div>
  );
}
