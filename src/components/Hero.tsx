import { motion } from "framer-motion";
import { PixelAvatar } from "./pixel-art/PixelAvatar";
import { PixelPlayIcon } from "./pixel-art/PixelPlayIcon";
import { PixelTorch } from "./pixel-art/PixelTorch";
import { reveal } from "./Section";

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="pixel-kicker">Freelance Video Editor</p>
          <h1 className="pixel-title">
            Where Your Creativity
            <br />
            Becomes Reality.
          </h1>
          <p className="hero-subtitle">
            The right edit can turn your channel into something people can't stop watching.
          </p>
        </motion.div>

        <HeroCharacter />
      </div>
    </section>
  );
}

function HeroCharacter() {
  return (
    <motion.div
      className="hero-character"
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
    >
      <motion.div
        className="avatar-float"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <PixelAvatar />
      </motion.div>
      <PixelPlayIcon className="hero-mini-icon hero-play" />
      <PixelTorch className="hero-mini-icon hero-torch" />
      <span className="hero-pixel-square square-one" />
      <span className="hero-pixel-square square-two" />
    </motion.div>
  );
}
