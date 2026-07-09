import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Motion presets — consistent with Economics.jsx / About.jsx         */
/* ------------------------------------------------------------------ */
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
  show: { transition: { staggerChildren: 0.08 } },
};

const cellReveal = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */
const CATEGORIES = [
  {
    title: "CATEGORY 01 — VEHICLES",
    status: "LIVE",
    statusTone: "live",
    steps: [
      { label: "Auction sourcing", sub: "Japan / rideshare" },
      { label: "Export prep", sub: "Kobe / port & carrier" },
      { label: "Sale, in-market", sub: "Retail + wholesale" },
    ],
  },
  {
    title: "CATEGORY 02 — TEXTILES",
    status: "PROPOSED",
    statusTone: "proposed",
    steps: [
      { label: "Bale sourcing", sub: "Collection centers" },
      { label: "Grading & container", sub: "Same port network" },
      { label: "Sale, in-market", sub: "Wholesale by meter" },
    ],
  },
];

/* ---------- a category block: header + dot-timeline + 3-col steps ---------- */
const CategoryBlock = ({ category, index }) => (
  <motion.div variants={cellReveal}>
    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 sm:mb-5">
      <span
        className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#f2c879] sm:text-[11px]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {category.title}
      </span>
      <span
        className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] sm:text-[10.5px] ${
          category.statusTone === "live" ? "text-[#8fd6a8]" : "text-white/40"
        }`}
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span
          className={`inline-block h-1.5 w-1.5 flex-shrink-0 ${
            category.statusTone === "live" ? "bg-[#8fd6a8]" : "bg-white/30"
          }`}
        />
        {category.status}
      </span>
    </div>

    {/* animated flow connector: pulse travels dot 1 → dot 2 → dot 3, looping */}
    <div className="relative mb-4 hidden h-2 items-center sm:mb-5 sm:flex">
      <div className="absolute left-0 right-0 h-px bg-white/10" />
      <motion.span
        aria-hidden="true"
        className={`absolute h-2 w-2 -translate-x-1/2 rounded-full ${
          category.statusTone === "live"
            ? "bg-[#f2c879] shadow-[0_0_12px_2px_rgba(242,200,121,0.55)]"
            : "bg-white/45 shadow-[0_0_10px_1px_rgba(255,255,255,0.25)]"
        }`}
        style={{ left: "0%" }}
        animate={{ left: ["0%", "50%", "100%"] }}
        transition={{
          duration: 3.4,
          times: [0, 0.5, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.4,
        }}
      />
      <div className="relative flex w-full justify-between">
        {category.steps.map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full border border-white/25 bg-[#0b1d33]"
          />
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4">
      {category.steps.map((s) => (
        <div
          key={s.label}
          className="border-l border-white/10 pl-3 sm:border-l-0 sm:pl-0"
        >
          <div className="text-[13px] font-semibold text-white sm:text-[13.5px]">
            {s.label}
          </div>
          <div
            className="mt-1 text-[11.5px] text-white/45 sm:text-[12px]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {s.sub}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Thesis = () => {
  return (
    <section
      id="thesis"
      className="relative overflow-hidden bg-white py-16 text-[#12203A] sm:py-20 md:py-24 lg:py-28"
    >
      {/* ---------- subtle premium background texture, matching site language ---------- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,32,58,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(18,32,58,.04) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 65% 70% at 15% 45%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 70% at 15% 45%, black 25%, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#B8874F]/[0.09] blur-[150px]" />

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 xl:gap-20">
        {/* ============ LEFT: eyebrow + headline + copy ============ */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            className="mb-4 flex items-center gap-2.5"
          >
            <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#B8874F]" />
            <span
              className="text-[11.5px] uppercase tracking-[0.08em] text-[#B8874F]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              The Thesis
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            className="mb-5 max-w-[27ch] text-balance text-[clamp(26px,3.6vw,38px)] font-semibold leading-[1.18] tracking-[-0.01em] text-[#12203A] sm:mb-6 sm:max-w-[29ch]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            One license, one logistics engine, two commodities.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={2}
            className="max-w-[46ch] text-[14.5px] leading-relaxed text-[#4B5468] sm:text-[15.5px]"
          >
            Vehicle export and textile export share the same bones: buy an asset
            in Japan below its replacement value, containerize it, clear it
            through the same ports, and sell it into markets where the same
            asset is priced far higher. Onesha doesn't need a new business — it
            needs{" "}
            <span className="font-medium text-[#12203A]">
              a second lane on a road it already built.
            </span>
          </motion.p>
        </div>

        {/* ============ RIGHT: dark process card ============ */}
        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-3xl bg-[#0b1d33] p-6 shadow-[0_30px_70px_-24px_rgba(11,29,51,0.45)] sm:p-8 md:p-9"
        >
          {/* card texture accents, matching Economics.jsx language */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 90% 80% at 80% 0%, black 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 90% 80% at 80% 0%, black 30%, transparent 80%)",
            }}
          />
          <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-[#f2c879]/[0.08] blur-[110px]" />

          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative space-y-7 sm:space-y-8"
          >
            {CATEGORIES.map((cat, i) => (
              <div key={cat.title}>
                <CategoryBlock category={cat} index={i} />
                {i === 0 && (
                  <div className="mt-7 h-px w-full bg-white/10 sm:mt-8" />
                )}
              </div>
            ))}

            <motion.div
              variants={cellReveal}
              className="flex items-start gap-2.5 border-t border-white/10 pt-6 sm:pt-7"
            >
              <span className="mt-[6px] h-2 w-2 flex-shrink-0 bg-[#f2c879] sm:mt-[7px]" />
              <p className="text-[12.5px] leading-relaxed text-white/45 sm:text-[13px]">
                <span className="text-white/60">Shared infrastructure:</span>{" "}
                <span className="text-[#9db8e0]">export license</span>,{" "}
                <span className="text-[#9db8e0]">port relationships</span>,{" "}
                <span className="text-[#9db8e0]">container consolidation</span>,{" "}
                <span className="text-[#9db8e0]">buyer-side trust</span>.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Thesis;
