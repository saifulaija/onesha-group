
import { motion } from "framer-motion";

/**
 * TopNavbar
 * The scrolling marquee/ticker strip that sits above the main nav.
 * Fonts required globally (index.html <head> or global CSS):
 *   Inter, 'JetBrains Mono'
 */

const tickerItems = [
  <>
    <b className="text-[#eef1f4]">ONESHA GROUP</b> — DIVERSIFICATION BRIEF
  </>,
  <>
    VEHICLE EXPORT: <b className="text-[#eef1f4]">10 LICENSED CATEGORIES</b>
  </>,
  <>
    NEW CATEGORY: <b className="text-[#eef1f4]">TEXTILE &amp; APPAREL EXPORT</b>
  </>,
  <>
    CORRIDOR: <b className="text-[#eef1f4]">JAPAN → BANGLADESH / SOUTH ASIA</b>
  </>,
  <>
    PHASE 1 TARGET: <b className="text-[#eef1f4]">Q1 2027</b>
  </>,
];

const TopNavbar = () => {
  return (
    <div
      className="overflow-hidden whitespace-nowrap bg-[#0b1d33] py-2 text-[11.5px] tracking-[0.06em] text-[#dde3e9]"
      style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
    >
      <motion.div
        className="inline-block pl-[100%]"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="mr-12 text-[#f2c879]">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TopNavbar;
