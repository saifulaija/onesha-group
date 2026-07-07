
import { motion } from "framer-motion";
import { handleNavClick } from "./utils/scrollTo";

/**
 * Infrastructure
 * Replicates the original closing "CTA + footer" band — centered call to
 * action with two buttons, followed by the document footer.
 *
 * Top padding follows the same reduced-gap scale used across the sections
 * above it, so the vertical rhythm stays consistent.
 *
 * Extra premium touches (beyond a literal copy of the original):
 * - a soft radial amber glow behind the heading
 * - buttons lift + gain shadow on hover, with a subtle press-down on tap
 * - footer fades in a beat after the CTA, like a closing signature
 *
 * Fonts required globally: 'Fraunces', Inter, 'JetBrains Mono'
 */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Infrastructure = () => {
  return (
    <>
      <section className="relative overflow-hidden border-t border-[rgba(11,29,51,0.14)] bg-[#eef1f4] pb-20 pt-8 text-center text-[#0b1d33] sm:pb-24 sm:pt-10 md:pb-28 md:pt-14 lg:pb-32 lg:pt-16">
        {/* soft glow, premium accent behind the headline */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(217,142,43,0.16) 0%, rgba(217,142,43,0) 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            className="mx-auto mb-5 max-w-[680px] text-[clamp(26px,4vw,44px)] font-semibold leading-tight tracking-[-0.01em]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            The infrastructure exists. The second category just needs a first
            container.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            className="mx-auto mb-9 max-w-[520px] text-[15.5px] text-[#1e3a5f]"
          >
            This is a strategy brief for internal review and partner
            conversations — not a finished operating plan. Figures should be
            replaced with real quotes as sourcing and freight partners are
            confirmed.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={2}
            className="flex flex-wrap justify-center gap-3.5"
          >
            <motion.a
              href="#thesis"
              onClick={handleNavClick("thesis")}
              whileHover={{
                y: -3,
                boxShadow: "0 12px 24px -8px rgba(11,29,51,0.35)",
              }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 border border-[#0b1d33] bg-[#0b1d33] px-7 py-3.5 text-[14px] font-semibold text-[#eef1f4] transition-colors duration-150 hover:bg-[#1e3a5f]"
            >
              Review the thesis
            </motion.a>
            <motion.a
              href="#roadmap"
              onClick={handleNavClick("roadmap")}
              whileHover={{
                y: -3,
                backgroundColor: "#0b1d33",
                color: "#eef1f4",
              }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 border border-[#0b1d33] bg-transparent px-7 py-3.5 text-[14px] font-semibold text-[#0b1d33]"
            >
              See the roadmap
            </motion.a>
          </motion.div>
        </div>
      </section>

    
    </>
  );
};

export default Infrastructure;
