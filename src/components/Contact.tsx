import { motion } from "framer-motion";
import { contactLinks } from "../data/contact";
import { reveal } from "./Section";

export function Contact() {
  return (
    <section id="contact" className="contact-section contact-section-compact">
      <motion.div
        className="contact-panel contact-panel-compact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h2>Let's Work Together</h2>

        <p>
          Got a video that needs a stronger edit? Send me a message — let's make it happen.
        </p>

        <div className="contact-actions">
          <a
            className="contact-action"
            href={contactLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
          >
            <XIcon />
            <span className="contact-action-label">X</span>
          </a>

          <a
            className="contact-action"
            href={contactLinks.email}
            aria-label="Gmail"
          >
            <GmailIcon />
            <span className="contact-action-label">Gmail</span>
          </a>

          <a
            className="contact-action"
            href="https://discord.com/users/651452471314743307"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <DiscordIcon />
            <span className="contact-action-label">Discord</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function XIcon() {
  return (
    <svg
      className="contact-icon-svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg
      className="contact-icon-svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      className="contact-icon-svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}