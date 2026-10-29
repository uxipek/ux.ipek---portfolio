import { motion } from "motion/react";
import type { ComponentProps } from "react";

type Tag = "p" | "h1" | "h2" | "div" | "article";

// Scroll-triggered fade/rise. Reduced-motion is handled by <MotionConfig reducedMotion="user"> on the page.
export function Reveal<T extends Tag>({ as, delay = 0, ...props }: { as?: T; delay?: number } & Omit<ComponentProps<(typeof motion)[T]>, "initial" | "whileInView" | "viewport" | "transition">) {
  const Component = motion[as ?? "div"] as typeof motion.div;
  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      {...(props as object)}
    />
  );
}
