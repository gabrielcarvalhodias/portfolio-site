import { motion } from "framer-motion";
import { PixelAvatar } from "./pixel-art/PixelAvatar";
import { reveal, Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I Am">
      <motion.div
        className="about-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="about-avatar">
          <PixelAvatar />
        </div>
        <div className="about-text">
          <p>
            I'm Gabriel — a freelance video editor from Brazil working with YouTubers
            and gaming creators worldwide. I specialize in Minecraft, gaming content,
            and long-form YouTube videos.
          </p>
          <p>
            My focus is simple: make your videos feel impossible to click away from.
            Every cut, every sound effect, every transition is there for a reason —
            to keep people watching and coming back for more.
          </p>
          <p>
            I've worked with creators from 5K to 1.8M subscribers, delivering edits
            that improve pacing, boost retention, and make content feel polished and professional.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
