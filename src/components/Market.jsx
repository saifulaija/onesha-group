

import { motion } from "framer-motion";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ArcElement,
  Tooltip,
  Legend,
);

/**
 * Market
 * Replicates the original "Market Read" band — 3 insight cards + 2 charts
 * (Japan textile market forecast, segment breakdown).
 *
 * Requires: npm install chart.js react-chartjs-2
 * Fonts required globally: 'Fraunces', Inter, 'JetBrains Mono'
 *
 * Top padding matches the reduced-gap treatment used on the Thesis section
 * just above it, so the rhythm between sections stays consistent.
 */

const cards = [
  {
    tag: "Supply side — Japan",
    title: "A shrinking domestic market, oversupplied with usable stock",
    body: (
      <>
        Japan's textile sector is valued near{" "}
        <span
          className="text-[#1e3a5f]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          ¥63B
        </span>
        , built on quality apparel that's discarded fast due to compact housing,
        seasonal wardrobe turnover, and strong secondhand collection
        infrastructure — konbini bins, school and municipal drives, recycler
        networks. Volume is reliable and pricing per kilogram is low relative to
        garment quality.
      </>
    ),
  },
  {
    tag: "Demand side — Bangladesh",
    title: "A price-sensitive market with strong appetite for Japanese quality",
    body: "Used-clothing (pura-tan) markets across Dhaka, Chattogram, and district towns run on imported bales. Japanese-origin stock commands a quality premium over other origins due to fabric condition and sizing consistency, while remaining far cheaper than new garments.",
  },
  {
    tag: "Structural fit",
    title: "Onesha already clears this exact corridor",
    body: "Vehicle exports already move Onesha-handled cargo through Japanese ports toward South and Southeast Asian buyers. Textile bales are lower-value, lower-risk cargo that can ride the same consolidation and customs relationships at marginal added cost.",
  },
];

const marketLineData = {
  labels: ["2024", "2026", "2028", "2030", "2033"],
  datasets: [
    {
      label: "Market size (USD M)",
      data: [56.2, 62, 69, 75, 81.7],
      borderColor: "#d98e2b",
      backgroundColor: "rgba(217,142,43,0.12)",
      fill: true,
      tension: 0.35,
      pointBackgroundColor: "#d98e2b",
      pointRadius: 4,
      borderWidth: 2.5,
    },
  ],
};

const marketLineOptions = {
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      grid: { color: "rgba(11,29,51,0.08)" },
      ticks: { callback: (v) => "$" + v + "M", color: "#1e3a5f" },
    },
    x: { grid: { display: false }, ticks: { color: "#1e3a5f" } },
  },
};

const segmentData = {
  labels: [
    "Apparel & fashion",
    "Chemical/synthetic fiber",
    "Home textiles",
    "Technical & industrial",
  ],
  datasets: [
    {
      data: [42, 28, 18, 12],
      backgroundColor: ["#0b1d33", "#345d8a", "#d98e2b", "#c7d0da"],
      borderWidth: 2,
      borderColor: "#eef1f4",
    },
  ],
};

const segmentOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: { boxWidth: 10, font: { size: 11.5 }, color: "#1e3a5f" },
    },
  },
  cutout: "62%",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const chartItem = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Market = () => {
  return (
    <section
      id="market"
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
            Market Read
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
            Why textiles, why now.
          </motion.h2>
        </div>

        {/* ---------- 3 insight cards ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8 grid grid-cols-1 gap-6 min-[821px]:grid-cols-3"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="border border-[rgba(11,29,51,0.14)] bg-white p-7 shadow-[0_1px_2px_rgba(11,29,51,0.04)] sm:p-8"
            >
              <span
                className="mb-3.5 block text-[10.5px] uppercase tracking-[0.05em] text-[#d98e2b]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {card.tag}
              </span>
              <h3
                className="mb-3 text-[18px] leading-snug sm:text-[19px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                {card.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-[#1e3a5f]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- 2 charts ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 min-[821px]:grid-cols-2"
        >
          <motion.div
            variants={chartItem}
            className="border border-[rgba(11,29,51,0.14)] bg-white p-7 sm:p-8"
          >
            <h3 className="mb-1 text-[16px]">Japan textile market, forecast</h3>
            <div className="mb-5 text-[12.5px] text-[#345d8a]">
              Revenue, USD million — Grand View Research / Horizon Databook
            </div>
            <div className="relative h-[260px] sm:h-[280px]">
              <Line data={marketLineData} options={marketLineOptions} />
            </div>
          </motion.div>

          <motion.div
            variants={chartItem}
            className="border border-[rgba(11,29,51,0.14)] bg-white p-7 sm:p-8"
          >
            <h3 className="mb-1 text-[16px]">
              Where the value sits, by segment
            </h3>
            <div className="mb-5 text-[12.5px] text-[#345d8a]">
              Share of Japan textile demand, illustrative
            </div>
            <div className="relative h-[260px] sm:h-[280px]">
              <Doughnut data={segmentData} options={segmentOptions} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Market;
