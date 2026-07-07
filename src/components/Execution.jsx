import { motion } from "framer-motion";

const phases = [
  {
    num: "01",
    when: "Months 1–2",
    title: "License scope & compliance check",
    desc: "Confirm the existing 10-category license covers textile/apparel export explicitly, or file the amendment needed. Parallel-track a 行政書士 (immigration/administrative scrivener) review if any visa-linked roles shift with the new line.",
    metrics: [
      { label: "Deliverable", value: "License confirmation" },
      { label: "Owner", value: "Legal / admin" },
      { label: "Blocker risk", value: "Low" },
    ],
  },
  {
    num: "02",
    when: "Months 2–4",
    title: "Sourcing partner & grading pilot",
    desc: "Contract one Japanese secondhand-clothing collector or recycler for a trial purchase. Run a manual grading pass (A/B/C tier by condition) on a small lot to build internal pricing knowledge before committing container-scale capital.",
    metrics: [
      { label: "Deliverable", value: "Pilot lot, ~500kg" },
      { label: "Owner", value: "Sourcing lead" },
      { label: "Blocker risk", value: "Medium" },
    ],
  },
  {
    num: "03",
    when: "Months 4–6",
    title: "First container, shared route",
    desc: "Consolidate the first full container alongside an existing vehicle shipment to the same destination port, sharing freight booking and customs handling to keep fixed costs low on the test run.",
    metrics: [
      { label: "Deliverable", value: "1 container landed" },
      { label: "Owner", value: "Logistics" },
      { label: "Blocker risk", value: "Medium" },
    ],
  },
  {
    num: "04",
    when: "Months 6–12",
    title: "Scale to recurring lane",
    desc: "Move to a monthly shipping cadence once margin on the pilot container is validated, and formalize buyer contracts in-market for reliable offtake rather than spot sales.",
    metrics: [
      { label: "Deliverable", value: "2–4 containers / month" },
      { label: "Owner", value: "Country ops" },
      { label: "Blocker risk", value: "Low" },
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

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const phaseReveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Execution = () => {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden border-t border-[rgba(11,29,51,0.14)] bg-[#eef1f4] pb-16 pt-8 text-[#0b1d33] sm:pb-20 sm:pt-10 md:pt-14 lg:pb-24 lg:pt-16"
    >
      {/* ---------- premium background layers ---------- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,29,51,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[440px] w-[440px] rounded-full bg-[#d98e2b]/[0.10] blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[#1e3a5f]/[0.07] blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(217,142,43,0.4), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
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
            Execution
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
            Four phases to first container.
          </motion.h2>
        </div>

        {/* ---------- Phases ---------- */}
        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="border-t border-[rgba(11,29,51,0.14)]"
        >
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              variants={phaseReveal}
              className="grid grid-cols-1 gap-3 border-b border-[rgba(11,29,51,0.14)] py-8 min-[781px]:grid-cols-[120px_1fr_1.4fr] min-[781px]:items-start min-[781px]:gap-8"
            >
              {/* number + timeframe */}
              <div className="relative">
                {i < phases.length - 1 && (
                  <span className="absolute left-[7px] top-[26px] hidden h-[calc(100%+64px-26px)] w-px bg-[rgba(11,29,51,0.14)] min-[781px]:block" />
                )}
                <span className="absolute -left-[3px] top-[8px] hidden h-[13px] w-[13px] items-center justify-center rounded-full bg-[#eef1f4] ring-1 ring-[#d98e2b] min-[781px]:flex">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#d98e2b]" />
                </span>
                <div
                  className="text-[15px] font-semibold text-[#d98e2b] min-[781px]:pl-6"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {phase.num}
                </div>
                <div
                  className="mt-1 text-[11px] text-[#345d8a] min-[781px]:pl-6"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {phase.when}
                </div>
              </div>

              {/* title + description */}
              <div>
                <div
                  className="mb-1.5 text-[18px] font-semibold sm:text-[19px]"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {phase.title}
                </div>
                <p className="text-[14px] leading-relaxed text-[#1e3a5f]">
                  {phase.desc}
                </p>
              </div>

              {/* metrics */}
              <div className="flex flex-col gap-2 rounded-sm bg-white/60 p-4 ring-1 ring-[rgba(11,29,51,0.08)] backdrop-blur-[2px] min-[781px]:bg-transparent min-[781px]:p-0 min-[781px]:ring-0 min-[781px]:backdrop-blur-0">
                {phase.metrics.map((m, mi) => (
                  <div
                    key={mi}
                    className="flex justify-between border-b border-dashed border-[rgba(11,29,51,0.14)] pb-1.5 text-[13px]"
                  >
                    <span className="text-[#1e3a5f]">{m.label}</span>
                    <b
                      className="text-[#0b1d33]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {m.value}
                    </b>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Execution;
