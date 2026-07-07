import { animate } from "framer-motion";

/**
 * scrollToSection
 * Smoothly scrolls to any in-page section by id, with a custom duration and
 * easing curve (independent of the browser's default `scroll-behavior:
 * smooth`, which is fixed-speed and can feel abrupt/robotic).
 *
 * @param {string} id - the target element's id, without the "#" (e.g. "thesis")
 * @param {number} offset - extra space to leave above the section (px),
 *   useful if you ever add a sticky/fixed navbar later
 */
export const scrollToSection = (id, offset = 0) => {
  const el = document.getElementById(id);
  if (!el) return;

  const targetY = el.getBoundingClientRect().top + window.scrollY - offset;

  animate(window.scrollY, targetY, {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1], // smooth "easeOutExpo"-like curve, premium feel
    onUpdate: (v) => window.scrollTo(0, v),
  });
};

/**
 * handleNavClick
 * Drop-in onClick handler for any <a href="#id"> link. Prevents the native
 * instant jump and runs the animated scroll instead.
 *
 *   <a href="#thesis" onClick={handleNavClick("thesis")}>Thesis</a>
 */
export const scrollToTop = () => {
  animate(window.scrollY, 0, {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
    onUpdate: (v) => window.scrollTo(0, v),
  });
};

export const handleNavClick =
  (id, offset = 0) =>
  (e) => {
    e.preventDefault();
    scrollToSection(id, offset);
  };
