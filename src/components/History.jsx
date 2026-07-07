import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * History
 * A record of the group's founding sequence, styled after the "ledger" or
 * annual-report timeline convention rather than the alternating-zigzag
 * timeline trope — a better fit for a holding group with a small, ordered
 * set of milestones. Uses the same design system as the rest of the site
 * (navy/steel/amber/paper palette, Fraunces / Inter / JetBrains Mono type
 * stack, hairline borders, mono kickers).
 *
 * Signature element: a fixed left ledger column (large serif year + a
 * REC.0N filing code) paired to a content column, with a spine that fills
 * with an amber "ink" line as the reader scrolls — the read progress
 * doubles as the record being completed in real time.
 *
 * Layout:
 * - Desktop (md+): two-column grid per row — label column (year + record
 *   code) fixed-width on the left, content on the right. Single spine runs
 *   down the boundary between the two columns.
 * - Mobile: label collapses to an inline row above the content (year set
 *   smaller), spine moves flush left. Nothing overlaps or crowds.
 *
 * Fonts required globally: 'Fraunces', Inter, 'JetBrains Mono'
 */

const milestones = [
  {
    code: "REC.01",
    year: "[Year]",
    title: "Onesha Motors opens its first showroom",
    tag: "Mobility",
    desc: "The group's founding business begins buying and reselling reconditioned vehicles in Dhaka, built on inspection-backed trust rather than volume.",
  },
  {
    code: "REC.02",
    year: "[Year]",
    title: "Onesha Tech is formed",
    tag: "Technology",
    desc: "A small delivery team starts building websites and software for clients abroad, later expanding into AI-driven automation.",
  },
  {
    code: "REC.03",
    year: "[Year]",
    title: "ONESHA GROUP is formally established",
    tag: "Group",
    desc: "The two businesses are brought under one holding structure, with shared capital allocation and reporting discipline.",
  },
  {
    code: "REC.04",
    year: "[Year]",
    title: "Onesha Textile enters garment export",
    tag: "Textile",
    desc: "The group adds its third vertical, moving into knit and woven garment production for export markets.",
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

const rowReveal = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const dotReveal = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "backOut" },
  },
};

const History = () => {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const spineFill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="history"
      className="relative border-t border-[rgba(11,29,51,0.14)] bg-[#eef1f4] pb-16 pt-8 text-[#0b1d33] sm:pb-20 sm:pt-10 md:pt-14 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ---------- Head ---------- */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-[rgba(11,29,51,0.14)] pb-10 sm:mb-16 md:mb-20 md:flex-row md:items-end md:gap-10">
          <div className="max-w-[560px]">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={0}
              className="mb-3.5 block text-[11.5px] uppercase tracking-[0.08em] text-[#d98e2b]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              History — 01/01
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={1}
              className="mb-3.5 text-[clamp(26px,3.4vw,38px)] font-semibold tracking-[-0.01em]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              How the group came together.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={2}
              className="text-[15.5px] text-[#1e3a5f]"
            >
              Four entries, kept in order.
            </motion.p>
          </div>

          {/* small legend, reads like a filing key */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={3}
            className="flex shrink-0 items-center gap-2 text-[11px] uppercase tracking-[0.06em] text-[#345d8a]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="h-1.5 w-1.5 flex-shrink-0 bg-[#d98e2b]" />
            Sequence verified
          </motion.div>
        </div>

        {/* ---------- Ledger ---------- */}
        <div ref={trackRef} className="relative">
          {/* base spine */}
          <div className="absolute bottom-0 left-[3px] top-0 w-px bg-[rgba(11,29,51,0.16)] md:left-[168px] lg:left-[196px]" />
          {/* scroll-filled spine — the "ink" being written as you read */}
          <motion.div
            style={{ scaleY: spineFill, transformOrigin: "top" }}
            className="absolute bottom-0 left-[3px] top-0 w-px bg-[#d98e2b] md:left-[168px] lg:left-[196px]"
          />

          <div className="divide-y divide-[rgba(11,29,51,0.12)]">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                variants={rowReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                className="group relative grid grid-cols-1 gap-3 py-8 pl-8 transition-colors duration-300 first:pt-0 hover:bg-[rgba(11,29,51,0.025)] sm:py-9 md:grid-cols-[168px_1fr] md:gap-x-10 md:py-11 md:pl-0 lg:grid-cols-[196px_1fr]"
              >
                {/* dot marking this record on the spine */}
                <motion.div
                  variants={dotReveal}
                  className="absolute left-0 top-[38px] z-10 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#0b1d33] ring-4 ring-[#eef1f4] transition-colors duration-300 group-hover:bg-[#d98e2b] sm:top-[40px] md:left-[168px] md:top-[46px] lg:left-[196px]"
                />

                {/* ---- label column: record code + big year ---- */}
                <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1.5 md:pr-8 lg:pr-10">
                  <span
                    className="text-[11px] tracking-[0.08em] text-[#345d8a]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {m.code}
                  </span>
                  <span
                    className="text-[22px] font-semibold leading-none tracking-[-0.01em] text-[#0b1d33] md:text-[clamp(30px,2.6vw,40px)]"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {m.year}
                  </span>
                </div>

                {/* ---- content column ---- */}
                <div className="min-w-0">
                  <span
                    className="mb-2.5 inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.06em] text-[#d98e2b]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 bg-[#d98e2b]" />
                    {m.tag}
                  </span>
                  <h3
                    className="mb-2 text-[19px] font-semibold leading-snug sm:text-[20px] md:text-[21px]"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {m.title}
                  </h3>
                  <p className="max-w-[52ch] text-[14.5px] leading-relaxed text-[#1e3a5f]">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------- Note ---------- */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-12 border-t border-[rgba(11,29,51,0.14)] pt-6 text-[13px] italic text-[#345d8a]/80 sm:mt-14"
        >
          Note: years and milestones above are placeholders — swap in the
          group's real founding dates and facts.
        </motion.p>
      </div>
    </section>
  );
};

export default History;
