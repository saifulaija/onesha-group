

import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const finCells = [
  { label: "SOURCING COST / CONTAINER", value: "¥1.8M" },
  { label: "FREIGHT + CUSTOMS", value: "¥0.6M" },
  { label: "LANDED COST / CONTAINER", value: "¥2.4M" },
  { label: "TARGET GROSS MARGIN", value: "28–35%" },
];

const breakevenData = {
  labels: ["1 cont.", "2", "3", "4", "5", "6", "7", "8"],
  datasets: [
    {
      label: "Cumulative margin (¥M)",
      data: [-0.3, 0.4, 1.1, 1.8, 2.5, 3.2, 3.9, 4.6],
      backgroundColor: (ctx) =>
        ctx.raw < 0 ? "rgba(179,73,47,0.75)" : "rgba(217,142,43,0.85)",
      borderRadius: 3,
      barPercentage: 0.55,
    },
  ],
};

const breakevenOptions = {
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      grid: { color: "rgba(255,255,255,0.08)" },
      ticks: { color: "rgba(255,255,255,0.6)", callback: (v) => "¥" + v + "M" },
    },
    x: {
      grid: { display: false },
      ticks: { color: "rgba(255,255,255,0.6)" },
    },
  },
};

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
  show: { transition: { staggerChildren: 0.1 } },
};

const cellReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const chartReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------- infinity signature motif (dark-theme) ---------- */
const InfinitySignature = () => (
  <motion.svg
    className="pointer-events-none absolute left-1/2 top-0 w-[560px] -translate-x-1/2 opacity-[0.09] md:w-[820px]"
    viewBox="0 0 900 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
  >
    <defs>
      <linearGradient
        id="infGradEcon"
        x1="200"
        y1="130"
        x2="700"
        y2="130"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#f2c879" stopOpacity="0" />
        <stop offset="50%" stopColor="#f2c879" stopOpacity="1" />
        <stop offset="100%" stopColor="#f2c879" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M200 130C200 78 256 78 312 130C368 182 424 182 480 130C536 78 592 78 648 130C680 158 700 130 700 130"
      stroke="url(#infGradEcon)"
      strokeWidth="1.5"
    />
    <path
      d="M200 130C200 182 256 182 312 130C368 78 424 78 480 130C536 182 592 182 648 130"
      stroke="url(#infGradEcon)"
      strokeWidth="1.5"
    />
  </motion.svg>
);

const Economics = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b1d33] pb-16 pt-8 text-white sm:pb-20 sm:pt-10 md:pt-14 lg:pb-24 lg:pt-16">
      {/* ---------- premium background layers ---------- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 75% 70% at 50% 30%, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 70% at 50% 30%, black 30%, transparent 85%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#f2c879]/[0.08] blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#345d8a]/[0.18] blur-[140px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(242,200,121,0.5), transparent)",
        }}
      />
      <InfinitySignature />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ---------- Head ---------- */}
        <div className="mb-10 max-w-[640px] sm:mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            className="mb-3.5 block text-[11.5px] uppercase tracking-[0.08em] text-[#f2c879]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Unit Economics
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            className="mb-3.5 text-[clamp(26px,3.4vw,38px)] font-semibold tracking-[-0.01em] text-white"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            What one container needs to clear.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={2}
            className="text-[15.5px] text-white/60"
          >
            Illustrative model for a standard 40ft container of graded mixed
            apparel — figures to be replaced with actuals once a sourcing
            partner is confirmed.
          </motion.p>
        </div>

        {/* ---------- 4 cost cells ---------- */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:mb-12 min-[821px]:grid-cols-4"
        >
          {finCells.map((cell, i) => (
            <motion.div
              key={i}
              variants={cellReveal}
              className="bg-[#0b1d33] px-5 py-6 sm:px-6"
            >
              <div
                className="mb-2 text-[11.5px] tracking-[0.04em] text-white/50"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {cell.label}
              </div>
              <div
                className="text-[24px] font-semibold text-[#f2c879] sm:text-[26px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                {cell.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- Break-even chart ---------- */}
        <motion.div
          variants={chartReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px] sm:p-8"
        >
          <h3 className="mb-1 text-[16px] text-white">
            Break-even volume, Year 1
          </h3>
          <div className="mb-5 text-[12.5px] text-white/50">
            Containers shipped vs. cumulative margin, illustrative model
          </div>
          <div className="relative h-[260px] sm:h-[280px]">
            <Bar data={breakevenData} options={breakevenOptions} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Economics;