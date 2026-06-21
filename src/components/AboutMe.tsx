import { motion } from "framer-motion";
import { reveal } from "./Section";

// ─────────────────────────────────────────────
// EDIT YOUR ABOUT SECTION CONTENT HERE
// ─────────────────────────────────────────────
const aboutContent = {
  /** Small label above the title */
  label: "ABOUT THE EDITOR",
  /** Section heading */
  title: "About Me",
  /** Path to your profile photo (place it in /public/assets/) */
  photo: "/assets/profile.jpeg",
  /** Alt text for accessibility */
  photoAlt: "Gabriel Dias — Freelance Video Editor",
  /** Main about text — array of paragraphs */
  text: [
    "Hey, I’m Gabriel — I’m 20 years old, and I’m here to help bring your ideas to life.",
    "I help creators shape raw footage into videos that feel clean, engaging, and worth watching from start to finish.",
  ],
};

export function AboutMe() {
  return (
    <section id="about" className="about-me-section">
      <motion.div
        className="about-me-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Text / Speech bubble side */}
        <div className="about-me-bubble">
          <p className="about-me-label">{aboutContent.label}</p>
          <h2 className="about-me-title">{aboutContent.title}</h2>
          <div className="about-me-text">
            {aboutContent.text.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Photo side */}
        <motion.div
          className="about-me-photo-frame"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <img
            src={aboutContent.photo}
            alt={aboutContent.photoAlt}
            className="about-me-photo"
          />
          {/* Decorative pixel squares */}
          <span className="about-me-deco about-me-deco-1" />
          <span className="about-me-deco about-me-deco-2" />
          <span className="about-me-deco about-me-deco-3" />
        </motion.div>
      </motion.div>
    </section>
  );
}
