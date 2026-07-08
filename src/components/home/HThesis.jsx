import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
};

const lanes = [
  {
    tag: "01 — ACTIVE",
    name: "Vehicles",
    detail: "Used cars sourced in Japan, sold across Asia",
    accent: true,
  },
  {
    tag: "02 — PROPOSED",
    name: "Textiles",
    detail: "Used apparel sourced in Japan, sold into Bangladesh",
    accent: false,
  },
];

const engineSteps = [
  { n: "01", label: "Source in Japan", note: "Below replacement value" },
  {
    n: "02",
    label: "Containerize & clear",
    note: "Same ports, same compliance",
  },
  { n: "03", label: "Sell at a premium", note: "Priced far higher in-market" },
];

const HThesis = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee] py-20 sm:py-24 lg:py-28">
      {/* faint grid, matches hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0b1d33 1px, transparent 1px), linear-gradient(90deg, #0b1d33 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#d98e2b] opacity-[0.08] blur-[110px]" />

      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-10">
        {/* ---------- Left: text ---------- */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-6 inline-flex items-center gap-2 border-l-2 border-[#d98e2b] py-1 pl-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8a6c1f]"
          >
            The Thesis
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="max-w-[540px] font-semibold tracking-[-0.02em] text-[#0b1d33]"
            style={{
              fontFamily: "'Fraunces','Fraunces-fallback',Georgia,serif",
              fontSize: "clamp(30px,4vw,46px)",
              lineHeight: 1.12,
            }}
          >
            One license, one logistics engine, two commodities.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-6 max-w-[500px] text-[15px] leading-relaxed text-[#1e3a5f] sm:text-[16px]"
          >
            Vehicle export and textile export share the same bones: buy an asset
            in Japan below its replacement value, containerize it, clear it
            through the same ports, and sell it into markets where the same
            asset is priced far higher.
          </motion.p>

          {/* pull quote */}
          <motion.div
            variants={fadeUp}
            custom={0.32}
            className="relative mt-8 max-w-[480px] border-l-2 border-[#d98e2b] bg-white/70 py-4 pl-5 pr-4 backdrop-blur-sm sm:py-5 sm:pl-6"
          >
            <p
              className="text-[#0b1d33]"
              style={{
                fontFamily: "'Fraunces',serif",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(16px,1.9vw,19px)",
                lineHeight: 1.5,
              }}
            >
              Onesha doesn&rsquo;t need a new business — it needs a second lane
              on a road it already built.
            </p>
          </motion.div>
        </motion.div>

        {/* ---------- Right: interactive engine → two lanes diagram ---------- */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.15}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
        >
          <div className="relative rounded-2xl border border-[#0b1d33]/10 bg-white p-5 shadow-[0_30px_70px_-24px_rgba(11,29,51,0.25)] sm:p-7">
            {/* engine steps */}
            <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8a6c1f]">
              The shared engine
            </div>

            <div className="mt-4 flex flex-col gap-0 sm:flex-row sm:items-stretch sm:gap-0">
              {engineSteps.map((s, i) => (
                <div key={s.n} className="relative flex flex-1 items-stretch">
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="group relative flex-1 rounded-xl border border-[#0b1d33]/10 bg-[#f7f4ee] px-4 py-4 transition-colors duration-300 hover:border-[#d98e2b]/50 hover:bg-white"
                  >
                    <span className="font-mono text-[10px] text-[#b0855f]">
                      {s.n}
                    </span>
                    <div
                      className="mt-1 text-[#0b1d33]"
                      style={{
                        fontFamily: "'Fraunces',serif",
                        fontWeight: 600,
                        fontSize: "14.5px",
                      }}
                    >
                      {s.label}
                    </div>
                    <div className="mt-1 font-mono text-[10px] leading-snug text-[#5c6577]">
                      {s.note}
                    </div>
                  </motion.div>

                  {/* connector: animated flowing line */}
                  {i < engineSteps.length - 1 && (
                    <div className="mx-1.5 hidden w-6 flex-shrink-0 items-center justify-center sm:flex">
                      <svg
                        width="24"
                        height="12"
                        viewBox="0 0 24 12"
                        fill="none"
                      >
                        <motion.line
                          x1="0"
                          y1="6"
                          x2="24"
                          y2="6"
                          stroke="#d98e2b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray="3 4"
                          animate={{ strokeDashoffset: [0, -14] }}
                          transition={{
                            duration: 1.1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </svg>
                    </div>
                  )}
                  {/* mobile vertical connector */}
                  {i < engineSteps.length - 1 && (
                    <div className="absolute left-1/2 top-full z-10 flex h-4 w-6 -translate-x-1/2 items-center justify-center sm:hidden">
                      <svg
                        width="12"
                        height="16"
                        viewBox="0 0 12 16"
                        fill="none"
                      >
                        <motion.line
                          x1="6"
                          y1="0"
                          x2="6"
                          y2="16"
                          stroke="#d98e2b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray="3 4"
                          animate={{ strokeDashoffset: [0, -14] }}
                          transition={{
                            duration: 1.1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* fork label */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px flex-1 bg-[#0b1d33]/10" />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8a6c1f]">
                One engine, two lanes
              </span>
              <span className="h-px flex-1 bg-[#0b1d33]/10" />
            </div>

            {/* two lanes */}
            <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {lanes.map((l) => (
                <motion.div
                  key={l.name}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`group relative overflow-hidden rounded-xl border px-5 py-5 transition-colors duration-300 ${
                    l.accent
                      ? "border-[#0b1d33] bg-[#0b1d33]"
                      : "border-[#0b1d33]/15 bg-[#f7f4ee] hover:border-[#d98e2b]/60"
                  }`}
                >
                  {l.accent && (
                    <span className="pointer-events-none absolute right-3 top-3 flex h-2 w-2">
                      <motion.span
                        className="absolute inline-flex h-full w-full rounded-full bg-[#f2c879]"
                        animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f2c879]" />
                    </span>
                  )}
                  <div
                    className={`font-mono text-[9.5px] uppercase tracking-[0.1em] ${
                      l.accent ? "text-[#f2c879]" : "text-[#8a6c1f]"
                    }`}
                  >
                    {l.tag}
                  </div>
                  <div
                    className={`mt-1.5 ${l.accent ? "text-white" : "text-[#0b1d33]"}`}
                    style={{
                      fontFamily: "'Fraunces',serif",
                      fontWeight: 600,
                      fontSize: "20px",
                    }}
                  >
                    {l.name}
                  </div>
                  <div
                    className={`mt-1.5 text-[12px] leading-snug ${
                      l.accent ? "text-white/65" : "text-[#5c6577]"
                    }`}
                  >
                    {l.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ground shadow, matches hero card */}
          <div className="mx-auto mt-4 h-4 w-[85%] rounded-full bg-[#0b1d33]/10 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default HThesis;
