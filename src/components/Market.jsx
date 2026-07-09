// import { motion } from "framer-motion";
// import { useState } from "react";

// /* ------------------------------------------------------------------ */
// /*  Motion presets — consistent with Thesis.jsx / Economics.jsx        */
// /* ------------------------------------------------------------------ */
// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// const gridContainer = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1 } },
// };

// const cellReveal = {
//   hidden: { opacity: 0, y: 16 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
// };

// const cardReveal = {
//   hidden: { opacity: 0, y: 24, scale: 0.98 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.65, ease: "easeOut" },
//   },
// };

// /* ------------------------------------------------------------------ */
// /*  Chart data                                                         */
// /* ------------------------------------------------------------------ */
// const FORECAST = [
//   { x: 40, y: 122, year: "2024", val: 55 },
//   { x: 128, y: 100, year: "2026", val: 62 },
//   { x: 216, y: 76, year: "2028", val: 69 },
//   { x: 304, y: 56, year: "2030", val: 75 },
//   { x: 380, y: 20, year: "2033", val: 82 },
// ];

// const SEGMENTS = [
//   {
//     label: "Apparel & fashion",
//     value: 45,
//     color: "#12203A",
//     dash: 130,
//     offset: 0,
//   },
//   {
//     label: "Chemical / synthetic fiber",
//     value: 20,
//     color: "#B8874F",
//     dash: 58,
//     offset: -130,
//   },
//   {
//     label: "Home textiles",
//     value: 20,
//     color: "#f2c879",
//     dash: 58,
//     offset: -188,
//   },
//   {
//     label: "Technical & industrial",
//     value: 15,
//     color: "#9db8e0",
//     dash: 43,
//     offset: -246,
//   },
// ];

// /* ------------------------------------------------------------------ */
// /*  Content                                                             */
// /* ------------------------------------------------------------------ */
// const READ_CARDS = [
//   {
//     tag: "SUPPLY SIDE — JAPAN",
//     tone: "light",
//     accent: "#B8874F",
//     title: "A shrinking domestic market, oversupplied with usable stock",
//     copy: "Japan's textile sector sits near ¥638B, built on quality apparel discarded fast — compact housing, seasonal wardrobe turnover, and dense secondhand collection infrastructure. Volume is reliable; price per kilogram is low relative to garment quality.",
//   },
//   {
//     tag: "DEMAND SIDE — BANGLADESH",
//     tone: "light",
//     accent: "#5A7BA6",
//     title: "A price-sensitive market with strong appetite for Japanese quality",
//     copy: "Used-clothing markets across Dhaka, Chattogram, and district towns run on imported bales. Japanese-origin stock commands a quality premium over other origins — fabric condition, sizing consistency — while staying far cheaper than new garments.",
//   },
//   {
//     tag: "STRUCTURAL FIT",
//     tone: "dark",
//     accent: "#f2c879",
//     title: "Onesha already clears this exact corridor",
//     copy: "Vehicle exports already move Onesha-handled cargo through Japanese ports toward South and Southeast Asian buyers. Textile bales are lower-value, lower-risk cargo riding the same consolidation and customs relationships at marginal added cost.",
//   },
// ];

// /* ---------- one comparison card ---------- */
// const ReadCard = ({ card }) => {
//   const isDark = card.tone === "dark";
//   return (
//     <motion.div
//       variants={cellReveal}
//       className={`relative overflow-hidden rounded-2xl border p-6 sm:p-7 ${
//         isDark
//           ? "bg-[#0b1d33] border-white/10 shadow-[0_24px_60px_-24px_rgba(11,29,51,0.5)]"
//           : "bg-white border-[#12203A]/[0.07] shadow-[0_10px_30px_-18px_rgba(18,32,58,0.18)]"
//       }`}
//     >
//       {isDark && (
//         <div className="pointer-events-none absolute -right-16 -top-16 h-[220px] w-[220px] rounded-full bg-[#f2c879]/[0.1] blur-[100px]" />
//       )}
//       <span
//         aria-hidden="true"
//         className="absolute left-0 top-0 h-full w-[3px]"
//         style={{ backgroundColor: card.accent }}
//       />
//       <div className="mb-4 flex items-center gap-2">
//         <span
//           className="text-[10.5px] font-semibold uppercase tracking-[0.1em] sm:text-[11px]"
//           style={{
//             fontFamily: "'JetBrains Mono', monospace",
//             color: card.accent,
//           }}
//         >
//           {card.tag}
//         </span>
//       </div>
//       <h3
//         className={`mb-3 text-[18px] leading-snug sm:text-[19.5px] ${
//           isDark ? "text-white" : "text-[#12203A]"
//         }`}
//         style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//       >
//         {card.title}
//       </h3>
//       <p
//         className={`text-[13.5px] leading-relaxed sm:text-[14.5px] ${
//           isDark ? "text-white/50" : "text-[#4B5468]"
//         }`}
//       >
//         {card.copy}
//       </p>
//     </motion.div>
//   );
// };

// /* ---------- route mini-map ---------- */
// const RouteMap = () => (
//   <div className="relative w-full shrink-0 sm:w-[220px] md:w-[240px]">
//     <style>{`
//       @keyframes marketShipSail { to { offset-distance: 100%; } }
//       .market-ship { offset-path: path('M14,60 C90,10 230,110 380,20'); offset-distance: 0%; animation: marketShipSail 5s linear infinite; }
//     `}</style>
//     <svg viewBox="0 0 400 130" className="h-auto w-full" aria-hidden="true">
//       <path
//         d="M14,60 C90,10 230,110 380,20"
//         fill="none"
//         stroke="#12203A"
//         strokeOpacity="0.15"
//         strokeWidth="1.2"
//         strokeDasharray="1 6"
//         strokeLinecap="round"
//       />
//       <circle cx="14" cy="60" r="5" fill="#12203A" />
//       <text
//         x="14"
//         y="82"
//         textAnchor="middle"
//         fontSize="9"
//         fill="#8A93A0"
//         style={{ fontFamily: "'JetBrains Mono', monospace" }}
//       >
//         JAPAN
//       </text>
//       <circle cx="380" cy="20" r="5" fill="#B8874F" />
//       <text
//         x="380"
//         y="42"
//         textAnchor="middle"
//         fontSize="9"
//         fill="#8A93A0"
//         style={{ fontFamily: "'JetBrains Mono', monospace" }}
//       >
//         BANGLADESH
//       </text>
//       <circle className="market-ship" r="4" fill="#5A7BA6" />
//     </svg>
//   </div>
// );

// /* ---------- forecast line chart ---------- */
// const ForecastChart = () => {
//   const [active, setActive] = useState(FORECAST[FORECAST.length - 1]);
//   const points = FORECAST.map((d) => `${d.x},${d.y}`).join(" ");
//   const areaPoints = `40,${FORECAST[0].y} ${points} 380,150 40,150`;

//   return (
//     <motion.div
//       variants={cellReveal}
//       className="rounded-2xl border border-[#12203A]/[0.07] bg-white p-6 shadow-[0_10px_30px_-18px_rgba(18,32,58,0.18)] sm:p-7"
//     >
//       <div className="mb-1 flex items-baseline justify-between">
//         <h4
//           className="text-[16.5px] sm:text-[18px]"
//           style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#12203A" }}
//         >
//           Japan textile market, forecast
//         </h4>
//         <span
//           className="text-[20px] sm:text-[24px]"
//           style={{
//             fontFamily: "'JetBrains Mono', monospace",
//             color: "#B8874F",
//           }}
//         >
//           ${active.val}M
//         </span>
//       </div>
//       <p className="mb-6 text-[11.5px] text-[#8A93A0] sm:text-[12px]">
//         Revenue, USD million — Grand View Research / Horizon Databook
//       </p>
//       <svg viewBox="0 0 400 190" className="h-[160px] w-full sm:h-[190px]">
//         <defs>
//           <linearGradient id="marketAreaGrad" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#B8874F" stopOpacity="0.2" />
//             <stop offset="100%" stopColor="#B8874F" stopOpacity="0" />
//           </linearGradient>
//         </defs>
//         <line x1="30" y1="10" x2="30" y2="150" stroke="#EDEAE3" />
//         <line x1="30" y1="150" x2="390" y2="150" stroke="#EDEAE3" />
//         <polygon fill="url(#marketAreaGrad)" points={areaPoints} />
//         <polyline
//           fill="none"
//           stroke="#B8874F"
//           strokeWidth="2.5"
//           points={points}
//         />
//         {FORECAST.map((d) => (
//           <g
//             key={d.year}
//             onMouseEnter={() => setActive(d)}
//             className="cursor-pointer"
//           >
//             <circle cx={d.x} cy={d.y} r="10" fill="transparent" />
//             <circle
//               cx={d.x}
//               cy={d.y}
//               r={active.year === d.year ? 5.5 : 3.5}
//               fill="#B8874F"
//               style={{ transition: "r .18s ease" }}
//             />
//           </g>
//         ))}
//         {FORECAST.map((d) => (
//           <text
//             key={d.year}
//             x={d.x}
//             y={168}
//             textAnchor="middle"
//             fontSize="10"
//             fill="#8A93A0"
//             style={{ fontFamily: "'JetBrains Mono', monospace" }}
//           >
//             {d.year}
//           </text>
//         ))}
//       </svg>
//     </motion.div>
//   );
// };

// /* ---------- segment donut chart ---------- */
// const SegmentChart = () => {
//   const apparel = SEGMENTS[0];
//   return (
//     <motion.div
//       variants={cellReveal}
//       className="rounded-2xl border border-[#12203A]/[0.07] bg-white p-6 shadow-[0_10px_30px_-18px_rgba(18,32,58,0.18)] sm:p-7"
//     >
//       <h4
//         className="mb-1 text-[16.5px] sm:text-[18px]"
//         style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#12203A" }}
//       >
//         Where the value sits, by segment
//       </h4>
//       <p className="mb-5 text-[11.5px] text-[#8A93A0] sm:mb-6 sm:text-[12px]">
//         Share of Japan textile demand, illustrative
//       </p>
//       <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
//         <div className="relative h-[150px] w-[150px] shrink-0 sm:h-[168px] sm:w-[168px]">
//           <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
//             <circle
//               cx="60"
//               cy="60"
//               r="46"
//               fill="none"
//               stroke="#F0EEE8"
//               strokeWidth="18"
//             />
//             {SEGMENTS.map((s) => (
//               <circle
//                 key={s.label}
//                 cx="60"
//                 cy="60"
//                 r="46"
//                 fill="none"
//                 stroke={s.color}
//                 strokeWidth="18"
//                 strokeDasharray={`${s.dash} 289`}
//                 strokeDashoffset={s.offset}
//               />
//             ))}
//           </svg>
//           <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
//             <span
//               className="text-[20px] sm:text-[22px]"
//               style={{
//                 fontFamily: "'JetBrains Mono', monospace",
//                 color: "#12203A",
//               }}
//             >
//               {apparel.value}%
//             </span>
//             <span className="text-[10px] text-[#8A93A0]">apparel</span>
//           </div>
//         </div>
//         <ul className="w-full space-y-3 sm:ml-2">
//           {SEGMENTS.map((s) => (
//             <li
//               key={s.label}
//               className="flex items-center gap-2 text-[13px] text-[#4B5468] sm:text-[13.5px]"
//             >
//               <span
//                 className="h-2 w-2 shrink-0 rounded-full"
//                 style={{ backgroundColor: s.color }}
//               />
//               {s.label}
//               <span
//                 className="ml-auto"
//                 style={{
//                   fontFamily: "'JetBrains Mono', monospace",
//                   color: "#12203A",
//                 }}
//               >
//                 {s.value}%
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /*  Main section                                                       */
// /* ------------------------------------------------------------------ */
// const Market = () => {
//   return (
//     <section
//       id="market"
//       className="relative overflow-hidden bg-white py-16 text-[#12203A] sm:py-20 md:py-24 lg:py-28"
//     >
//       {/* background texture, matching Thesis.jsx language */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.55]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(18,32,58,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(18,32,58,.04) 1px, transparent 1px)",
//           backgroundSize: "34px 34px",
//           maskImage:
//             "radial-gradient(ellipse 65% 70% at 85% 15%, black 25%, transparent 80%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 65% 70% at 85% 15%, black 25%, transparent 80%)",
//         }}
//       />
//       <div className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-[#B8874F]/[0.08] blur-[150px]" />

//       <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
//         {/* ============ header row: eyebrow + headline + copy | route map ============ */}
//         <div className="mb-12 flex flex-col gap-10 sm:mb-14 md:flex-row md:items-end md:justify-between md:gap-8 lg:mb-16">
//           <div>
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.6 }}
//               custom={0}
//               className="mb-4 flex items-center gap-2.5"
//             >
//               <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#B8874F]" />
//               <span
//                 className="text-[11.5px] uppercase tracking-[0.08em] text-[#B8874F]"
//                 style={{ fontFamily: "'JetBrains Mono', monospace" }}
//               >
//                 Market Read
//               </span>
//             </motion.div>

//             <motion.h2
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.6 }}
//               custom={1}
//               className="max-w-[16ch] text-balance text-[clamp(28px,3.8vw,42px)] font-semibold leading-[1.1] tracking-[-0.01em] text-[#12203A]"
//               style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//             >
//               Why textiles, why <em className="italic text-[#B8874F]">now</em>.
//             </motion.h2>

//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.6 }}
//               custom={2}
//               className="mt-5 max-w-[52ch] text-[14.5px] leading-relaxed text-[#4B5468] sm:text-[15.5px]"
//             >
//               A surplus on one side of the corridor, real demand on the other —{" "}
//               <span className="font-medium text-[#12203A]">
//                 and a logistics engine already built to move between them.
//               </span>
//             </motion.p>
//           </div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={3}
//           >
//             <RouteMap />
//           </motion.div>
//         </div>

//         {/* ============ 3-card comparison row ============ */}
//         <motion.div
//           variants={gridContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="mb-6 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6"
//         >
//           {READ_CARDS.map((card) => (
//             <ReadCard key={card.tag} card={card} />
//           ))}
//         </motion.div>

//         {/* ============ data panels ============ */}
//         <motion.div
//           variants={gridContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.15 }}
//           className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6"
//         >
//           <ForecastChart />
//           <SegmentChart />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Market;

import { motion } from "framer-motion";
import { useState } from "react";
import { Recycle, ShoppingBag, Ship } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Utility                                                             */
/* ------------------------------------------------------------------ */
const withAlpha = (hex, alpha) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/* ------------------------------------------------------------------ */
/*  Motion presets — consistent with Thesis.jsx / Economics.jsx        */
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
  show: { transition: { staggerChildren: 0.1 } },
};

const cellReveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

/* ------------------------------------------------------------------ */
/*  Chart data                                                         */
/* ------------------------------------------------------------------ */
const FORECAST = [
  { x: 40, y: 122, year: "2024", val: 55 },
  { x: 128, y: 100, year: "2026", val: 62 },
  { x: 216, y: 76, year: "2028", val: 69 },
  { x: 304, y: 56, year: "2030", val: 75 },
  { x: 380, y: 20, year: "2033", val: 82 },
];

const SEGMENTS = [
  {
    label: "Apparel & fashion",
    value: 45,
    color: "#12203A",
    dash: 130,
    offset: 0,
  },
  {
    label: "Chemical / synthetic fiber",
    value: 20,
    color: "#B8874F",
    dash: 58,
    offset: -130,
  },
  {
    label: "Home textiles",
    value: 20,
    color: "#f2c879",
    dash: 58,
    offset: -188,
  },
  {
    label: "Technical & industrial",
    value: 15,
    color: "#9db8e0",
    dash: 43,
    offset: -246,
  },
];

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */
const READ_CARDS = [
  {
    tag: "SUPPLY SIDE — JAPAN",
    tone: "light",
    accent: "#B8874F",
    icon: Recycle,
    title: "A shrinking domestic market, oversupplied with usable stock",
    copy: "Japan's textile sector sits near ¥638B, built on quality apparel discarded fast — compact housing, seasonal wardrobe turnover, and dense secondhand collection infrastructure. Volume is reliable; price per kilogram is low relative to garment quality.",
  },
  {
    tag: "DEMAND SIDE — BANGLADESH",
    tone: "light",
    accent: "#5A7BA6",
    icon: ShoppingBag,
    title: "A price-sensitive market with strong appetite for Japanese quality",
    copy: "Used-clothing markets across Dhaka, Chattogram, and district towns run on imported bales. Japanese-origin stock commands a quality premium over other origins — fabric condition, sizing consistency — while staying far cheaper than new garments.",
  },
  {
    tag: "STRUCTURAL FIT",
    tone: "dark",
    accent: "#f2c879",
    icon: Ship,
    title: "Onesha already clears this exact corridor",
    copy: "Vehicle exports already move Onesha-handled cargo through Japanese ports toward South and Southeast Asian buyers. Textile bales are lower-value, lower-risk cargo riding the same consolidation and customs relationships at marginal added cost.",
  },
];

/* ---------- one comparison card ---------- */
const ReadCard = ({ card }) => {
  const isDark = card.tone === "dark";
  const Icon = card.icon;
  return (
    <motion.div
      variants={cellReveal}
      className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
        isDark
          ? "bg-[#0b1d33] border-white/10 shadow-[0_24px_60px_-24px_rgba(11,29,51,0.5)] hover:shadow-[0_28px_70px_-22px_rgba(11,29,51,0.6)]"
          : "bg-white border-[#12203A]/[0.07] shadow-[0_10px_30px_-18px_rgba(18,32,58,0.18)] hover:-translate-y-1 hover:shadow-[0_22px_45px_-18px_rgba(18,32,58,0.24)]"
      }`}
    >
      {isDark && (
        <div className="pointer-events-none absolute -right-16 -top-16 h-[220px] w-[220px] rounded-full bg-[#f2c879]/[0.1] blur-[100px]" />
      )}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[3px]"
        style={{ backgroundColor: card.accent }}
      />

      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-[-4deg]"
        style={{
          backgroundColor: isDark
            ? withAlpha(card.accent, 0.14)
            : withAlpha(card.accent, 0.1),
        }}
      >
        <Icon size={20} strokeWidth={1.6} color={card.accent} />
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span
          className="text-[10.5px] font-semibold uppercase tracking-[0.1em] sm:text-[11px]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: card.accent,
          }}
        >
          {card.tag}
        </span>
      </div>
      <h3
        className={`mb-3 text-[18px] leading-snug sm:text-[19.5px] ${
          isDark ? "text-white" : "text-[#12203A]"
        }`}
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        {card.title}
      </h3>
      <p
        className={`text-[13.5px] leading-relaxed sm:text-[14.5px] ${
          isDark ? "text-white/50" : "text-[#4B5468]"
        }`}
      >
        {card.copy}
      </p>
    </motion.div>
  );
};

/* ---------- route mini-map ---------- */
const RouteMap = () => (
  <div className="relative w-full shrink-0 sm:w-[220px] md:w-[240px]">
    <style>{`
      @keyframes marketShipSail { to { offset-distance: 100%; } }
      .market-ship { offset-path: path('M14,60 C90,10 230,110 380,20'); offset-distance: 0%; animation: marketShipSail 5s linear infinite; }
    `}</style>
    <svg viewBox="0 0 400 130" className="h-auto w-full" aria-hidden="true">
      <path
        d="M14,60 C90,10 230,110 380,20"
        fill="none"
        stroke="#12203A"
        strokeOpacity="0.15"
        strokeWidth="1.2"
        strokeDasharray="1 6"
        strokeLinecap="round"
      />
      <circle cx="14" cy="60" r="5" fill="#12203A" />
      <text
        x="14"
        y="82"
        textAnchor="middle"
        fontSize="9"
        fill="#8A93A0"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        JAPAN
      </text>
      <circle cx="380" cy="20" r="5" fill="#B8874F" />
      <text
        x="380"
        y="42"
        textAnchor="middle"
        fontSize="9"
        fill="#8A93A0"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        BANGLADESH
      </text>
      <circle className="market-ship" r="4" fill="#5A7BA6" />
    </svg>
  </div>
);

/* ---------- forecast line chart ---------- */
const ForecastChart = () => {
  const [active, setActive] = useState(FORECAST[FORECAST.length - 1]);
  const points = FORECAST.map((d) => `${d.x},${d.y}`).join(" ");
  const areaPoints = `40,${FORECAST[0].y} ${points} 380,150 40,150`;

  return (
    <motion.div
      variants={cellReveal}
      className="rounded-2xl border border-[#12203A]/[0.07] bg-white p-6 shadow-[0_10px_30px_-18px_rgba(18,32,58,0.18)] sm:p-7"
    >
      <div className="mb-1 flex items-baseline justify-between">
        <h4
          className="text-[16.5px] sm:text-[18px]"
          style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#12203A" }}
        >
          Japan textile market, forecast
        </h4>
        <span
          className="text-[20px] sm:text-[24px]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#B8874F",
          }}
        >
          ${active.val}M
        </span>
      </div>
      <p className="mb-6 text-[11.5px] text-[#8A93A0] sm:text-[12px]">
        Revenue, USD million — Grand View Research / Horizon Databook
      </p>
      <svg viewBox="0 0 400 190" className="h-[160px] w-full sm:h-[190px]">
        <defs>
          <linearGradient id="marketAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B8874F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B8874F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="30" y1="10" x2="30" y2="150" stroke="#EDEAE3" />
        <line x1="30" y1="150" x2="390" y2="150" stroke="#EDEAE3" />
        <polygon fill="url(#marketAreaGrad)" points={areaPoints} />
        <polyline
          fill="none"
          stroke="#B8874F"
          strokeWidth="2.5"
          points={points}
        />
        {FORECAST.map((d) => (
          <g
            key={d.year}
            onMouseEnter={() => setActive(d)}
            className="cursor-pointer"
          >
            <circle cx={d.x} cy={d.y} r="10" fill="transparent" />
            <circle
              cx={d.x}
              cy={d.y}
              r={active.year === d.year ? 5.5 : 3.5}
              fill="#B8874F"
              style={{ transition: "r .18s ease" }}
            />
          </g>
        ))}
        {FORECAST.map((d) => (
          <text
            key={d.year}
            x={d.x}
            y={168}
            textAnchor="middle"
            fontSize="10"
            fill="#8A93A0"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {d.year}
          </text>
        ))}
      </svg>
    </motion.div>
  );
};

/* ---------- segment donut chart ---------- */
const SegmentChart = () => {
  const apparel = SEGMENTS[0];
  return (
    <motion.div
      variants={cellReveal}
      className="rounded-2xl border border-[#12203A]/[0.07] bg-white p-6 shadow-[0_10px_30px_-18px_rgba(18,32,58,0.18)] sm:p-7"
    >
      <h4
        className="mb-1 text-[16.5px] sm:text-[18px]"
        style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#12203A" }}
      >
        Where the value sits, by segment
      </h4>
      <p className="mb-5 text-[11.5px] text-[#8A93A0] sm:mb-6 sm:text-[12px]">
        Share of Japan textile demand, illustrative
      </p>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
        <div className="relative h-[150px] w-[150px] shrink-0 sm:h-[168px] sm:w-[168px]">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="46"
              fill="none"
              stroke="#F0EEE8"
              strokeWidth="18"
            />
            {SEGMENTS.map((s) => (
              <circle
                key={s.label}
                cx="60"
                cy="60"
                r="46"
                fill="none"
                stroke={s.color}
                strokeWidth="18"
                strokeDasharray={`${s.dash} 289`}
                strokeDashoffset={s.offset}
              />
            ))}
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="text-[20px] sm:text-[22px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#12203A",
              }}
            >
              {apparel.value}%
            </span>
            <span className="text-[10px] text-[#8A93A0]">apparel</span>
          </div>
        </div>
        <ul className="w-full space-y-3 sm:ml-2">
          {SEGMENTS.map((s) => (
            <li
              key={s.label}
              className="flex items-center gap-2 text-[13px] text-[#4B5468] sm:text-[13.5px]"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              {s.label}
              <span
                className="ml-auto"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#12203A",
                }}
              >
                {s.value}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
const Market = () => {
  return (
    <section
      id="market"
      className="relative overflow-hidden py-16 text-[#12203A] sm:py-20 md:py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, #FBF9F4 0%, #F6F2E9 45%, #F8F6F1 100%)",
      }}
    >
      {/* background texture, matching Thesis.jsx language */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,32,58,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(18,32,58,.045) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 65% 70% at 85% 15%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 70% at 85% 15%, black 25%, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-[#B8874F]/[0.12] blur-[150px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[#5A7BA6]/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ============ header row: eyebrow + headline + copy | route map ============ */}
        <div className="mb-12 flex flex-col gap-10 sm:mb-14 md:flex-row md:items-end md:justify-between md:gap-8 lg:mb-16">
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
                Market Read
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={1}
              className="max-w-[16ch] text-balance text-[clamp(28px,3.8vw,42px)] font-semibold leading-[1.1] tracking-[-0.01em] text-[#12203A]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Why textiles, why <em className="italic text-[#B8874F]">now</em>.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={2}
              className="mt-5 max-w-[52ch] text-[14.5px] leading-relaxed text-[#4B5468] sm:text-[15.5px]"
            >
              A surplus on one side of the corridor, real demand on the other —{" "}
              <span className="font-medium text-[#12203A]">
                and a logistics engine already built to move between them.
              </span>
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={3}
          >
            <RouteMap />
          </motion.div>
        </div>

        {/* ============ 3-card comparison row ============ */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-6 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6"
        >
          {READ_CARDS.map((card) => (
            <ReadCard key={card.tag} card={card} />
          ))}
        </motion.div>

        {/* ============ data panels ============ */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6"
        >
          <ForecastChart />
          <SegmentChart />
        </motion.div>
      </div>
    </section>
  );
};

export default Market;