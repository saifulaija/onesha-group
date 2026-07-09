// import { motion } from "framer-motion";
// import { AlertTriangle, Clock, ArrowUpDown, Shuffle } from "lucide-react";

// /* ------------------------------------------------------------------ */
// /*  Motion presets — consistent with site family                       */
// /* ------------------------------------------------------------------ */
// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// const listContainer = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.08 } },
// };

// const rowReveal = {
//   hidden: { opacity: 0, y: 16 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// /* ------------------------------------------------------------------ */
// /*  Content — known risks and mitigations                              */
// /* ------------------------------------------------------------------ */
// const SEVERITY = {
//   high: {
//     label: "High",
//     bg: "rgba(194,84,63,0.16)",
//     text: "#9A3B29",
//     dot: "#C2543F",
//     pulse: true,
//   },
//   medium: {
//     label: "Medium",
//     bg: "rgba(217,123,41,0.18)",
//     text: "#A85A18",
//     dot: "#D97B29",
//     pulse: false,
//   },
//   low: {
//     label: "Low",
//     bg: "rgba(62,145,105,0.18)",
//     text: "#2A6E4C",
//     dot: "#3E9169",
//     pulse: false,
//   },
// };

// const RISKS = [
//   {
//     icon: AlertTriangle,
//     accent: "#C2543F",
//     severity: "high",
//     title: "Import-side duty or quota change on used clothing",
//     mitigation:
//       "Track Bangladesh NBR customs notices directly; keep a secondary destination market (e.g. other South Asian buyers) ready to redirect volume.",
//   },
//   {
//     icon: Clock,
//     accent: "#D97B29",
//     severity: "medium",
//     title: "Grading inconsistency reduces margin on early containers",
//     mitigation:
//       "Run the Phase 2 pilot lot specifically to build an internal grading reference before scaling volume.",
//   },
//   {
//     icon: ArrowUpDown,
//     accent: "#D97B29",
//     severity: "medium",
//     title: "JPY/BDT currency swing erodes thin per-kilogram margin",
//     mitigation:
//       "Price contracts in the more stable currency where buyers will accept it; keep container cycles short to reduce exposure window.",
//   },
//   {
//     icon: Shuffle,
//     accent: "#3E9169",
//     severity: "low",
//     title: "Sourcing partner exclusivity claimed by an established competitor",
//     mitigation:
//       "Diversify across 2–3 smaller collectors rather than one large contract during the pilot phase.",
//   },
// ];

// /* ---------- severity pill ---------- */
// const SeverityPill = ({ level }) => {
//   const s = SEVERITY[level];
//   return (
//     <span
//       className="inline-flex w-fit items-center gap-1.5 rounded-full py-1 pl-2.5 pr-3 text-[11.5px] font-medium sm:text-[12px]"
//       style={{ backgroundColor: s.bg, color: s.text }}
//     >
//       <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
//         {s.pulse && (
//           <span
//             className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
//             style={{ backgroundColor: s.dot }}
//           />
//         )}
//         <span
//           className="relative inline-flex h-1.5 w-1.5 rounded-full"
//           style={{ backgroundColor: s.dot }}
//         />
//       </span>
//       {s.label}
//     </span>
//   );
// };

// /* ---------- one risk row ---------- */
// const RiskRow = ({ risk, isLast }) => {
//   const Icon = risk.icon;
//   return (
//     <motion.div
//       variants={rowReveal}
//       className={`group relative grid grid-cols-1 gap-3 bg-white/[0.35] px-5 py-6 transition-colors duration-300 hover:bg-white/[0.55] sm:px-7 sm:py-6 md:grid-cols-[1fr_120px_1.3fr] md:items-start md:gap-6 ${
//         !isLast ? "border-b border-white/50" : ""
//       }`}
//     >
//       <span
//         className="absolute left-0 top-0 h-full w-0 transition-all duration-300 ease-out group-hover:w-1"
//         style={{ backgroundColor: risk.accent }}
//       />

//       <div className="flex items-start gap-2.5">
//         <span
//           className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/70"
//           style={{ color: risk.accent }}
//         >
//           <Icon size={15} strokeWidth={1.8} />
//         </span>
//         <p className="text-[14.5px] font-medium leading-snug text-[#0B1B2B] sm:text-[15px]">
//           {risk.title}
//         </p>
//       </div>

//       <div className="pl-9 md:pl-0">
//         <SeverityPill level={risk.severity} />
//       </div>

//       <p className="pl-9 text-[13px] leading-relaxed text-[#1F2937] sm:text-[13.5px] md:pl-0">
//         {risk.mitigation}
//       </p>
//     </motion.div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /*  Main section — full-bleed background photo behind a glass table    */
// /* ------------------------------------------------------------------ */
// const Know = () => {
//   return (
//     <section
//       id="risks"
//       className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
//     >
//       {/* background photo + blueprint grid + overlay */}
//       <img
//         src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?q=80&w=1800&auto=format&fit=crop"
//         alt=""
//         aria-hidden="true"
//         className="absolute inset-0 h-full w-full object-cover"
//       />
//       <div
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(160deg, rgba(11,27,43,0.55), rgba(11,27,43,0.4))",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.5]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
//           backgroundSize: "42px 42px",
//         }}
//       />
//       <div className="pointer-events-none absolute -right-20 -top-32 h-[380px] w-[380px] rounded-full bg-[#D97B29]/[0.12] blur-[150px] sm:h-[420px] sm:w-[420px]" />

//       <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
//         {/* ============ header ============ */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.6 }}
//           className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14 lg:mb-16"
//         >
//           <div className="mb-4 flex items-center justify-center gap-2.5 sm:mb-5">
//             <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#D97B29]" />
//             <span
//               className="text-[11px] uppercase tracking-[0.18em] text-[#D97B29] sm:text-[11.5px]"
//               style={{ fontFamily: "'JetBrains Mono', monospace" }}
//             >
//               Known Risks
//             </span>
//           </div>
//           <h2
//             className="text-balance text-[28px] leading-[1.15] text-white sm:text-[38px] md:text-[44px]"
//             style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//           >
//             What could slow this down.
//           </h2>
//         </motion.div>

//         {/* ============ glass table ============ */}
//         <motion.div
//           variants={listContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           className="overflow-hidden rounded-2xl border border-white/55 shadow-[0_40px_70px_-30px_rgba(0,0,0,0.45)] backdrop-blur-[26px] backdrop-saturate-[1.6] sm:rounded-[18px]"
//           style={{ backgroundColor: "rgba(255,255,255,0.62)" }}
//         >
//           {/* header row — hidden on mobile, columns speak for themselves stacked */}
//           <div
//             className="hidden gap-6 px-7 py-5 md:grid md:grid-cols-[1fr_120px_1.3fr]"
//             style={{
//               background:
//                 "linear-gradient(135deg, rgba(19,42,64,0.92), rgba(11,27,43,0.9))",
//               borderBottom: "1px solid rgba(255,255,255,0.15)",
//             }}
//           >
//             <span className="text-[12.5px] font-medium text-white/90">
//               Risk
//             </span>
//             <span className="text-[12.5px] font-medium text-white/90">
//               Severity
//             </span>
//             <span className="text-[12.5px] font-medium text-white/90">
//               Mitigation
//             </span>
//           </div>

//           {RISKS.map((risk, i) => (
//             <RiskRow
//               key={risk.title}
//               risk={risk}
//               isLast={i === RISKS.length - 1}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Know;


import { motion } from "framer-motion";
import { AlertTriangle, Clock, ArrowUpDown, Shuffle } from "lucide-react";

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

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const rowReveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ------------------------------------------------------------------ */
/*  Content — known risks and mitigations                              */
/* ------------------------------------------------------------------ */
const SEVERITY = {
  high: {
    label: "High",
    bg: "rgba(194,84,63,0.16)",
    text: "#9A3B29",
    dot: "#C2543F",
    pulse: true,
  },
  medium: {
    label: "Medium",
    bg: "rgba(217,123,41,0.18)",
    text: "#A85A18",
    dot: "#D97B29",
    pulse: false,
  },
  low: {
    label: "Low",
    bg: "rgba(62,145,105,0.18)",
    text: "#2A6E4C",
    dot: "#3E9169",
    pulse: false,
  },
};

const RISKS = [
  {
    icon: AlertTriangle,
    accent: "#C2543F",
    severity: "high",
    title: "Import-side duty or quota change on used clothing",
    mitigation:
      "Track Bangladesh NBR customs notices directly; keep a secondary destination market (e.g. other South Asian buyers) ready to redirect volume.",
  },
  {
    icon: Clock,
    accent: "#D97B29",
    severity: "medium",
    title: "Grading inconsistency reduces margin on early containers",
    mitigation:
      "Run the Phase 2 pilot lot specifically to build an internal grading reference before scaling volume.",
  },
  {
    icon: ArrowUpDown,
    accent: "#D97B29",
    severity: "medium",
    title: "JPY/BDT currency swing erodes thin per-kilogram margin",
    mitigation:
      "Price contracts in the more stable currency where buyers will accept it; keep container cycles short to reduce exposure window.",
  },
  {
    icon: Shuffle,
    accent: "#3E9169",
    severity: "low",
    title: "Sourcing partner exclusivity claimed by an established competitor",
    mitigation:
      "Diversify across 2–3 smaller collectors rather than one large contract during the pilot phase.",
  },
];

/* ---------- severity pill ---------- */
const SeverityPill = ({ level }) => {
  const s = SEVERITY[level];
  return (
    <span
      className="inline-flex w-fit items-center gap-1.5 rounded-full py-1 pl-2.5 pr-3 text-[11.5px] font-medium sm:text-[12px]"
      style={{ backgroundColor: s.bg, color: s.text }}
    >
      <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
        {s.pulse && (
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
            style={{ backgroundColor: s.dot }}
          />
        )}
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: s.dot }}
        />
      </span>
      {s.label}
    </span>
  );
};

/* ---------- one risk row ---------- */
const RiskRow = ({ risk, isLast }) => {
  const Icon = risk.icon;
  return (
    <motion.div
      variants={rowReveal}
      className={`group relative grid grid-cols-1 gap-3 bg-white/[0.35] px-5 py-6 transition-colors duration-300 hover:bg-white/[0.55] sm:px-7 sm:py-6 md:grid-cols-[1fr_120px_1.3fr] md:items-start md:gap-6 ${
        !isLast ? "border-b border-white/50" : ""
      }`}
    >
      <span
        className="absolute left-0 top-0 h-full w-0 transition-all duration-300 ease-out group-hover:w-1"
        style={{ backgroundColor: risk.accent }}
      />

      <div className="flex items-start gap-2.5">
        <span
          className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/70"
          style={{ color: risk.accent }}
        >
          <Icon size={15} strokeWidth={1.8} />
        </span>
        <p className="text-[14.5px] font-medium leading-snug text-[#0B1B2B] sm:text-[15px]">
          {risk.title}
        </p>
      </div>

      <div className="pl-9 md:pl-0">
        <SeverityPill level={risk.severity} />
      </div>

      <p className="pl-9 text-[13px] leading-relaxed text-[#1F2937] sm:text-[13.5px] md:pl-0">
        {risk.mitigation}
      </p>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main section — full-bleed background photo behind a glass table    */
/* ------------------------------------------------------------------ */
const Know = () => {
  return (
    <section
      id="risks"
      className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* background photo + blueprint grid + overlay */}
      <img
        src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?q=80&w=1800&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(11,27,43,0.55), rgba(11,27,43,0.4))",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="pointer-events-none absolute -right-20 -top-32 h-[380px] w-[380px] rounded-full bg-[#D97B29]/[0.12] blur-[150px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ============ header ============ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-2.5 sm:mb-5">
            <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#D97B29]" />
            <span
              className="text-[11px] uppercase tracking-[0.18em] text-[#D97B29] sm:text-[11.5px]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Known Risks
            </span>
          </div>
          <h2
            className="text-balance text-[28px] leading-[1.15] text-white sm:text-[38px] md:text-[44px]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            What could slow this down.
          </h2>
        </motion.div>

        {/* ============ glass table ============ */}
        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="overflow-hidden rounded-2xl border border-white/55 shadow-[0_40px_70px_-30px_rgba(0,0,0,0.45)] backdrop-blur-[26px] backdrop-saturate-[1.6] sm:rounded-[18px]"
          style={{ backgroundColor: "rgba(255,255,255,0.62)" }}
        >
          {/* header row — hidden on mobile, columns speak for themselves stacked */}
          <div
            className="hidden gap-6 px-7 py-5 md:grid md:grid-cols-[1fr_120px_1.3fr]"
            style={{
              background:
                "linear-gradient(135deg, rgba(19,42,64,0.92), rgba(11,27,43,0.9))",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span className="text-[12.5px] font-medium text-white/90">Risk</span>
            <span className="text-[12.5px] font-medium text-white/90">Severity</span>
            <span className="text-[12.5px] font-medium text-white/90">Mitigation</span>
          </div>

          {RISKS.map((risk, i) => (
            <RiskRow key={risk.title} risk={risk} isLast={i === RISKS.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Know;