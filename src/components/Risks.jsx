
import { motion } from "framer-motion";

/**
 * Risks
 * Replicates the original "Known Risks" band — a risk/severity/mitigation
 * table. Horizontally scrollable on small screens (matches the original's
 * overflow-x:auto behavior) so no data gets cut off or crammed.
 *
 * Top padding follows the same reduced-gap scale used across the sections
 * above it, so the vertical rhythm stays consistent.
 *
 * Fonts required globally: 'Fraunces', Inter, 'JetBrains Mono'
 */

const severityColor = {
  high: "#b3492f",
  med: "#d98e2b",
  low: "#2f7a4f",
};

const risks = [
  {
    risk: "Import-side duty or quota change on used clothing",
    sev: "high",
    mitigation:
      "Track Bangladesh NBR customs notices directly; keep a secondary destination market (e.g. other South Asian buyers) ready to redirect volume.",
  },
  {
    risk: "Grading inconsistency reduces margin on early containers",
    sev: "med",
    mitigation:
      "Run the Phase 2 pilot lot specifically to build an internal grading reference before scaling volume.",
  },
  {
    risk: "JPY/BDT currency swing erodes thin per-kilogram margin",
    sev: "med",
    mitigation:
      "Price contracts in the more stable currency where buyers will accept it; keep container cycles short to reduce exposure window.",
  },
  {
    risk: "Sourcing partner exclusivity claimed by an established competitor",
    sev: "low",
    mitigation:
      "Diversify across 2–3 smaller collectors rather than one large contract during the pilot phase.",
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

const tableContainer = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const rowsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const rowReveal = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Risks = () => {
  return (
    <section
      id="risk"
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
            Known Risks
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
            What could slow this down.
          </motion.h2>
        </div>

        {/* ---------- Risk table ---------- */}
        <motion.div
          variants={tableContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px] border-collapse text-[13.5px]">
            <thead>
              <tr>
                {["Risk", "Severity", "Mitigation"].map((th) => (
                  <th
                    key={th}
                    className="border-b-2 border-[#0b1d33] px-4 py-3 text-left text-[11px] uppercase tracking-[0.05em] text-[#345d8a]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <motion.tbody
              variants={rowsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {risks.map((row, i) => (
                <motion.tr key={i} variants={rowReveal}>
                  <td className="border-b border-[rgba(11,29,51,0.14)] px-4 py-4 align-top font-semibold text-[#0b1d33]">
                    {row.risk}
                  </td>
                  <td className="border-b border-[rgba(11,29,51,0.14)] px-4 py-4 align-top">
                    <span
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold"
                      style={{ color: severityColor[row.sev] }}
                    >
                      <span
                        className="h-1.5 w-1.5 flex-shrink-0"
                        style={{ backgroundColor: severityColor[row.sev] }}
                      />
                      {row.sev === "high"
                        ? "High"
                        : row.sev === "med"
                          ? "Medium"
                          : "Low"}
                    </span>
                  </td>
                  <td className="border-b border-[rgba(11,29,51,0.14)] px-4 py-4 align-top text-[#1e3a5f]">
                    {row.mitigation}
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default Risks;
