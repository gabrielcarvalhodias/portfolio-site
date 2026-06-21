import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navItems } from "../data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="pixel-hud fixed left-0 right-0 top-0 z-50">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="brand-lockup" onClick={() => setIsOpen(false)}>
            <span className="pixel-logo">G</span>
            <span>
              <span className="brand-name">Gabriel Dias</span>
              <span className="brand-subtitle">Video Editor</span>
            </span>
          </a>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.href} className="desktop-nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="pixel-button compact nav-cta" href="#contact">
              Hire Me
            </a>
          </div>

          <button
            className="hamburger-button"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              className="menu-scrim"
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className="side-menu"
              initial={{ x: "110%" }}
              animate={{ x: 0 }}
              exit={{ x: "110%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="side-menu-header">
                <span className="pixel-kicker">Menu</span>
                <button type="button" className="close-menu" onClick={() => setIsOpen(false)}>
                  X
                </button>
              </div>

              <div className="side-menu-list">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    className="side-menu-link"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="menu-link-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
