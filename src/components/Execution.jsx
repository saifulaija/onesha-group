import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Content — four phases to first container                           */
/* ------------------------------------------------------------------ */
const phases = [
  {
    num: "01",
    when: "Months 1–2",
    title: "License scope & compliance check",
    desc: "Confirm the existing 10-category license covers textile/apparel export explicitly, or file the amendment needed. Parallel-track a 行政書士 (immigration/administrative scrivener) review if any visa-linked roles shift with the new line.",
    metrics: [
      { k: "Deliverable", v: "License confirmation" },
      { k: "Owner", v: "Legal / admin" },
      { k: "Blocker risk", v: "Low", risk: "low" },
    ],
  },
  {
    num: "02",
    when: "Months 2–4",
    title: "Sourcing partner & grading pilot",
    desc: "Contract one Japanese secondhand-clothing collector or recycler for a trial purchase. Run a manual grading pass (A/B/C tier by condition) on a small lot to build internal pricing knowledge before committing container-scale capital.",
    metrics: [
      { k: "Deliverable", v: "Pilot lot, ~500kg" },
      { k: "Owner", v: "Sourcing lead" },
      { k: "Blocker risk", v: "Medium", risk: "med" },
    ],
  },
  {
    num: "03",
    when: "Months 4–6",
    title: "First container, shared route",
    desc: "Consolidate the first full container alongside an existing vehicle shipment to the same destination port, sharing freight booking and customs handling to keep fixed costs low on the test run.",
    metrics: [
      { k: "Deliverable", v: "1 container landed" },
      { k: "Owner", v: "Logistics" },
      { k: "Blocker risk", v: "Medium", risk: "med" },
    ],
  },
  {
    num: "04",
    when: "Months 6–12",
    title: "Scale to recurring lane",
    desc: "Move to a monthly shipping cadence once margin on the pilot container is validated, and formalize buyer contracts in-market for reliable offtake rather than spot sales.",
    metrics: [
      { k: "Deliverable", v: "2–4 containers / month" },
      { k: "Owner", v: "Country ops" },
      { k: "Blocker risk", v: "Low", risk: "low" },
    ],
  },
];

const riskColor = {
  low: "text-[#2f7a4f]",
  med: "text-[#d98e2b]",
  high: "text-[#b3492f]",
};

/* ------------------------------------------------------------------ */
/*  Motion presets — consistent with site family                       */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const rowVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const Execution = () => {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden border-t border-[#0b1d33]/[0.14] bg-[#eef1f4] py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* ---------- premium background layers ---------- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,29,51,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#d98e2b]/[0.1] blur-[140px] sm:-right-40 sm:-top-40 sm:h-[440px] sm:w-[440px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[260px] w-[260px] rounded-full bg-[#0b1d33]/[0.07] blur-[120px] sm:-left-32 sm:h-[320px] sm:w-[320px]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(217,142,43,0.4), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ---------- head ---------- */}
        <motion.div
          className="mb-10 max-w-[640px] sm:mb-12 lg:mb-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-3.5 flex items-center gap-2.5"
          >
            <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#d98e2b]" />
            <span
              className="text-[11.5px] uppercase tracking-[0.08em] text-[#d98e2b]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Execution
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.15] tracking-[-0.01em] text-[#0b1d33]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Four phases to first container.
          </motion.h2>
        </motion.div>

        {/* ---------- phases ---------- */}
        <div className="border-t border-[#0b1d33]/[0.14]">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={rowVariant}
              className="group relative grid grid-cols-1 gap-3 border-b border-[#0b1d33]/[0.14] py-7 transition-colors duration-300 hover:bg-white/50 sm:gap-6 sm:py-8 md:grid-cols-[130px_1fr_1.3fr] md:gap-8 lg:grid-cols-[140px_1fr_1.4fr]"
            >
              {/* ghost background number — clipped to its own layer, never the row */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-3 select-none text-[80px] font-semibold leading-none text-[#0b1d33] opacity-[0.035] transition-opacity duration-300 group-hover:opacity-[0.06] sm:text-[104px]"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {phase.num}
                </span>
              </div>

              {/* premium standalone badge + month pill */}
              <div className="relative flex items-center gap-3 md:flex-col md:items-start md:gap-2.5">
                <span
                  className="relative z-[1] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full p-[1.5px] shadow-[0_8px_18px_-6px_rgba(217,142,43,0.5)] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-6deg]"
                  style={{
                    background: "conic-gradient(#d98e2b, #345d8a, #d98e2b)",
                  }}
                >
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-[#eef1f4]">
                    <span
                      className="text-[14px] font-semibold text-[#d98e2b]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {phase.num}
                    </span>
                  </span>
                </span>

                <span
                  className="inline-flex w-fit items-center whitespace-nowrap rounded-full bg-white/70 px-2.5 py-1 text-[10.5px] uppercase tracking-[0.06em] text-[#345d8a] ring-1 ring-[#0b1d33]/[0.08]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {phase.when}
                </span>
              </div>

              {/* title + description */}
              <div>
                <div
                  className="mb-1.5 text-[17px] font-semibold text-[#0b1d33] transition-colors duration-300 group-hover:text-[#d98e2b] sm:text-[19px]"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {phase.title}
                </div>
                <p className="text-[13.5px] leading-relaxed text-[#1e3a5f] sm:text-[14px]">
                  {phase.desc}
                </p>
              </div>

              {/* metrics */}
              <div className="flex flex-col gap-2 rounded-sm bg-white/60 p-4 ring-1 ring-[#0b1d33]/[0.08] backdrop-blur-[2px] md:bg-transparent md:p-0 md:pt-0 md:ring-0 md:backdrop-blur-0">
                {phase.metrics.map((m) => (
                  <div
                    key={m.k}
                    className="flex items-center justify-between border-b border-dashed border-[#0b1d33]/[0.14] pb-1.5 text-[13px]"
                  >
                    <span className="text-[#1e3a5f]">{m.k}</span>
                    <b
                      className={`font-semibold ${
                        m.risk ? riskColor[m.risk] : "text-[#0b1d33]"
                      }`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {m.v}
                    </b>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Execution;
