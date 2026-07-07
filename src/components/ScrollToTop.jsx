import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { scrollToTop } from "./utils/scrollTo";

/**
 * ScrollToTop
 * A floating circular button, bottom-right, that fades/scales in once the
 * user scrolls past a threshold, and smoothly animates the page back to
 * the top when clicked (same easing as the nav's smooth-scroll).
 *
 * Premium pass: back to the navy (#0b1d33) fill with the gold (#f2c879)
 * icon, fully rounded, with a thin gold progress ring traced around the
 * rim that fills as the page scrolls — so the button doubles as a "how
 * far down the page am I" indicator, not just an action. Warms up with a
 * soft gold glow on hover.
 *
 * Usage: render once, anywhere in App.jsx (it's fixed-position, so
 * placement in the tree doesn't matter):
 *
 *   <ScrollToTop />
 */

const SIZE = 48; // px, matches sm:h-12/w-12 below
const STROKE = 2;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ScrollToTop = ({ threshold = 480 }) => {
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.4,
  });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          whileHover={{
            y: -3,
            boxShadow:
              "0 18px 32px -10px rgba(11,29,51,0.55), 0 0 0 6px rgba(242,200,121,0.16)",
          }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 right-4 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[rgba(242,200,121,0.35)] bg-[#0b1d33] text-[#f2c879] shadow-[0_10px_24px_-8px_rgba(11,29,51,0.5)] outline-none transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-[#f2c879] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eef1f4] sm:bottom-7 sm:right-6 sm:h-12 sm:w-12 md:bottom-8 md:right-8 md:h-[52px] md:w-[52px]"
        >
          {/* progress ring, traced around the rim — scales with the button at every breakpoint */}
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
          >
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="rgba(242,200,121,0.22)"
              strokeWidth={STROKE}
            />
            <motion.circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke="#f2c879"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              style={{
                pathLength: progress,
              }}
            />
          </svg>

          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative sm:h-[18px] sm:w-[18px]"
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
