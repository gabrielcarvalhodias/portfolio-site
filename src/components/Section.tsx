import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {eyebrow ? <p className="pixel-kicker">{eyebrow}</p> : null}
        <h2 className="pixel-heading">{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </motion.div>
      {children}
    </section>
  );
}
