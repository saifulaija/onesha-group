
import { motion } from "framer-motion";

/**
 * Positioning
 * Replicates the original "SWOT" band — 2x2 grid (1 column on small phones)
 * of Strengths / Weaknesses / Opportunities / Threats, each with its own
 * accent color, matching the original.
 *
 * Top padding matches the reduced-gap treatment used on Thesis/Market above
 * it, so the vertical rhythm stays consistent across sections.
 *
 * Fonts required globally: 'Fraunces', Inter, 'JetBrains Mono'
 */

const swot = [
  {
    key: "s",
    label: "Strengths",
    color: "#2f7a4f",
    items: [
      "Existing 10-category export license removes the licensing bottleneck new entrants face",
      "Established Japan-side sourcing and port relationships from vehicle operations",
      "Existing buyer trust in-market lowers customer acquisition cost for a second product line",
    ],
  },
  {
    key: "w",
    label: "Weaknesses",
    color: "#b3492f",
    items: [
      "No standing relationships with Japanese textile collectors or bale graders yet",
      "Team's operational depth is automotive, not apparel — grading and quality-tiering is a new skill",
      "Working capital currently allocated to vehicle inventory cycles",
    ],
  },
  {
    key: "o",
    label: "Opportunities",
    color: "#1e3a5f",
    items: [
      "Mixed vehicle-and-textile containers reduce shipping cost per unit on shared routes",
      "Japan's secondhand collection volume is stable and not seasonally exposed like new-garment retail",
      "Room to move upmarket later into graded/branded secondhand for e-commerce resale",
    ],
  },
  {
    key: "t",
    label: "Threats",
    color: "#d98e2b",
    items: [
      "Bangladesh import policy on used clothing (HS code duty, quotas) can shift with little notice",
      "Established used-clothing importers already hold bonded warehouse and auction relationships",
      "Currency movement between JPY and BDT affects margin on a low-margin, high-volume commodity",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cellReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Positioning = () => {
  return (
    <section
      id="model"
      className="relative border-t border-[rgba(11,29,51,0.14)] bg-[#eef1f4] pb-16 pt-8 text-[#0b1d33] sm:pb-20 sm:pt-10 md:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ---------- Head ---------- */}
        <div className="mb-10 max-w-[640px] sm:mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            className="mb-3.5 block text-[11.5px] uppercase tracking-[0.08em] text-[#d98e2b]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Positioning
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            className="text-[clamp(26px,3.4vw,38px)] font-semibold tracking-[-0.01em]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            SWOT — entering as a diversification, not a startup.
          </motion.h2>
        </div>

        {/* ---------- SWOT grid ---------- */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-px border border-[rgba(11,29,51,0.14)] bg-[rgba(11,29,51,0.14)] min-[641px]:grid-cols-2"
        >
          {swot.map((cell) => (
            <motion.div
              key={cell.key}
              variants={cellReveal}
              whileHover={{ backgroundColor: "#fbfbfb" }}
              className="bg-white p-6 sm:p-7"
            >
              <h4
                className="mb-4 flex items-center gap-2 text-[12px] uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: cell.color,
                }}
              >
                <span
                  className="h-2 w-2 flex-shrink-0"
                  style={{ backgroundColor: cell.color }}
                />
                {cell.label}
              </h4>
              <motion.ul
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {cell.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={listItem}
                    className="relative mb-2.5 pl-4 text-[13.5px] leading-relaxed text-[#1e3a5f] last:mb-0"
                  >
                    <span className="absolute left-0 font-bold text-[rgba(11,29,51,0.25)]">
                      —
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Positioning;
