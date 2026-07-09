import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cellReveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ------------------------------------------------------------------ */
/*  Content — illustrative model, swap for actuals once confirmed      */
/* ------------------------------------------------------------------ */
const METRICS = [
  { label: "Sourcing cost / container", value: "¥1.8M" },
  { label: "Freight + customs", value: "¥0.6M" },
  { label: "Landed cost / container", value: "¥2.4M" },
  { label: "Target gross margin", value: "28–35%" },
];

const BARS = [
  { label: "1 cont.", height: 8, belowBreakeven: true },
  { label: "2", height: 24, belowBreakeven: false },
  { label: "3", height: 38, belowBreakeven: false },
  { label: "4", height: 50, belowBreakeven: false },
  { label: "5", height: 62, belowBreakeven: false },
  { label: "6", height: 76, belowBreakeven: false },
  { label: "7", height: 90, belowBreakeven: false },
  { label: "8", height: 100, belowBreakeven: false },
];

const BREAKEVEN_Y = 24; // matches bar #2 — where the model crosses into profit

/* ---------- one metric card ---------- */
const MetricCard = ({ metric }) => (
  <motion.div
    variants={cellReveal}
    className="rounded-lg border border-white/[0.08] bg-[#12253D] p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#B8874F] sm:p-6"
  >
    <p
      className="mb-2.5 text-[10px] uppercase tracking-[0.12em] text-[#B9C2CC] sm:mb-3 sm:text-[10.5px]"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {metric.label}
    </p>
    <p
      className="text-[20px] font-medium text-[#B8874F] sm:text-[24px]"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {metric.value}
    </p>
  </motion.div>
);

/* ---------- premium bar chart ---------- */
const BreakevenChart = () => {
  const [revealed, setRevealed] = useState(false);
  const [hovered, setHovered] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      variants={cellReveal}
      ref={chartRef}
      className="rounded-lg border border-white/[0.08] bg-[#12253D] p-6 sm:p-8"
    >
      <h3
        className="mb-1 text-[17px] text-white sm:text-[19px]"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        Break-even volume, Year 1
      </h3>
      <p className="mb-8 text-[12px] text-[#B9C2CC] sm:mb-10 sm:text-[12.5px]">
        Containers shipped vs. cumulative margin, illustrative model
      </p>

      <div className="relative h-[220px] sm:h-[260px]">
        {/* gridlines */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
          {[100, 75, 50, 25, 0].map((g) => (
            <div key={g} className="flex items-center gap-2">
              <span
                className="w-6 shrink-0 text-right text-[9px] text-white/25 sm:w-8 sm:text-[10px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {g}
              </span>
              <span className="h-px w-full bg-white/[0.06]" />
            </div>
          ))}
        </div>

        {/* break-even threshold line */}
        <div
          className="pointer-events-none absolute left-6 right-0 z-10 border-t border-dashed transition-opacity duration-700 sm:left-8"
          style={{
            bottom: `${BREAKEVEN_Y}%`,
            borderColor: "rgba(217,123,41,0.5)",
            opacity: revealed ? 1 : 0,
            transitionDelay: "900ms",
          }}
        >
          <span
            className="absolute -top-5 right-0 rounded-sm bg-[#0B1B2B] px-1.5 py-0.5 text-[9px] uppercase tracking-[0.1em] text-[#D97B29] sm:text-[9.5px]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Break-even
          </span>
        </div>

        {/* bars */}
        <div className="absolute inset-0 flex items-end gap-2.5 pl-8 sm:gap-4 sm:pl-10">
          {BARS.map((bar, i) => {
            const isHovered = hovered === i;
            const color = bar.belowBreakeven ? "#C2543F" : "#D97B29";
            return (
              <div
                key={bar.label}
                className="relative flex h-full flex-1 flex-col items-center justify-end gap-2"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* value tooltip */}
                <div
                  className="pointer-events-none absolute rounded-md bg-[#0B1B2B] px-2 py-1 text-[10px] font-medium text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5)] transition-all duration-200 sm:text-[10.5px]"
                  style={{
                    bottom: `calc(${bar.height}% + 12px)`,
                    fontFamily: "'JetBrains Mono', monospace",
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(4px)",
                  }}
                >
                  {bar.height}%
                </div>

                <div
                  className="w-full rounded-t-sm transition-[height] duration-[1000ms] ease-out"
                  style={{
                    height: revealed ? `${bar.height}%` : "0%",
                    transitionDelay: `${i * 70}ms`,
                    background: `linear-gradient(180deg, ${color} 0%, ${color}CC 100%)`,
                    boxShadow: isHovered
                      ? `0 0 0 1px ${color}, 0 8px 24px -8px ${color}88`
                      : "none",
                    filter: isHovered ? "brightness(1.12)" : "brightness(1)",
                  }}
                />
                <span
                  className="text-[10px] text-[#B9C2CC] sm:text-[11px]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {bar.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
const Economics = () => {
  return (
    <section
      id="economics"
      className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
      style={{ backgroundColor: "#F3F4F6" }}
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 h-[320px] w-[320px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #B8874F, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ============ header ============ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mx-auto mb-10 max-w-[640px] text-center sm:mb-12"
        >
          <div className="mb-4 flex items-center justify-center gap-2.5 sm:mb-5">
            <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#B8874F]" />
            <span
              className="text-[11px] uppercase tracking-[0.18em] text-[#B8874F] sm:text-[11.5px]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Unit Economics
            </span>
          </div>

          <h2
            className="mb-4 text-balance text-[28px] leading-[1.15] text-[#12203A] sm:text-[36px] md:text-[42px]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            What one container needs to clear.
          </h2>

          <p className="mx-auto max-w-2xl text-[13.5px] leading-relaxed text-[#5A7BA6] sm:text-[14.5px]">
            Illustrative model for a standard 40ft container of graded mixed
            apparel — figures to be replaced with actuals once a sourcing
            partner is confirmed.
          </p>
        </motion.div>

        {/* ============ metrics ============ */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-5 grid grid-cols-2 gap-3 sm:mb-6 sm:gap-4 lg:grid-cols-4"
        >
          {METRICS.map((m) => (
            <MetricCard key={m.label} metric={m} />
          ))}
        </motion.div>

        {/* ============ chart ============ */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <BreakevenChart />
        </motion.div>
      </div>
    </section>
  );
};

export default Economics;
