// import { motion } from "framer-motion";
// import companyPicture from "../assets/company_picture.jpg";

// /* ------------------------------------------------------------------ */
// /*  Motion presets — consistent with Thesis.jsx / Market.jsx           */
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
//   show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
// };

// const cellReveal = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
// };

// /* ------------------------------------------------------------------ */
// /*  Content — placeholder figures, swap in real numbers when ready     */
// /* ------------------------------------------------------------------ */
// const STATS = [
//   { value: "02", label: "COUNTRIES", sub: "Japan & Bangladesh" },
//   { value: "03", label: "VERTICALS", sub: "Motors · Tech · Textile" },
//   { value: "01", label: "LICENSE", sub: "One entity, shared infrastructure" },
//   {
//     value: "Kobe → Ctg",
//     label: "THE CORRIDOR",
//     sub: "Port to port, one route",
//   },
// ];

// /* ---------- one stat card ---------- */
// const StatCard = ({ stat }) => (
//   <motion.div
//     variants={cellReveal}
//     className="rounded-xl border-t-2 border-[#f2c879] bg-white/[0.07] p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12] sm:p-6 md:p-7"
//   >
//     <div
//       className="mb-1.5 text-[22px] leading-none text-[#f2c879] sm:text-[28px] md:text-[32px]"
//       style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//     >
//       {stat.value}
//     </div>
//     <div
//       className="mb-1 text-[10px] uppercase tracking-[0.14em] text-white/85 sm:text-[11px]"
//       style={{ fontFamily: "'JetBrains Mono', monospace" }}
//     >
//       {stat.label}
//     </div>
//     <div className="text-[11px] text-white/50 sm:text-[12px]">{stat.sub}</div>
//   </motion.div>
// );

// /* ------------------------------------------------------------------ */
// /*  Main section — full-bleed background image, content top-left       */
// /* ------------------------------------------------------------------ */
// const Respective = () => {
//   return (
//     <section
//       id="global-perspective"
//       className="group relative isolate flex min-h-[560px] w-full flex-col overflow-hidden sm:min-h-[620px] md:min-h-[700px] lg:min-h-[780px]"
//     >
//       {/* continuous ambient motion + hover premium interaction */}
//       <style>{`
//         @keyframes gpKenBurns {
//           0%   { transform: scale(1) translate3d(0, 0, 0); }
//           50%  { transform: scale(1.09) translate3d(-1%, -1%, 0); }
//           100% { transform: scale(1) translate3d(0, 0, 0); }
//         }
//         @keyframes gpBlobPulseGold {
//           0%, 100% { opacity: 0.14; transform: scale(1); }
//           50%      { opacity: 0.22; transform: scale(1.12); }
//         }
//         @keyframes gpBlobPulseNavy {
//           0%, 100% { opacity: 0.12; transform: scale(1); }
//           50%      { opacity: 0.2;  transform: scale(1.1); }
//         }
//         .gp-image {
//           animation: gpKenBurns 26s ease-in-out infinite;
//           filter: brightness(1) saturate(1);
//           transition: filter 0.6s ease;
//         }
//         .group:hover .gp-image {
//           filter: brightness(1.08) saturate(1.15);
//         }
//         .gp-blob-gold { animation: gpBlobPulseGold 9s ease-in-out infinite; }
//         .gp-blob-navy { animation: gpBlobPulseNavy 11s ease-in-out infinite 1.5s; }
//         .gp-sheen {
//           background: linear-gradient(115deg, transparent 40%, rgba(242,200,121,0.16) 50%, transparent 60%);
//           transform: translateX(-120%);
//           transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         .group:hover .gp-sheen {
//           transform: translateX(120%);
//         }
//       `}</style>

//       {/* full-width background image */}
//       <img
//         src={companyPicture}
//         alt="Onesha Group — Japan to Bangladesh export corridor"
//         className="gp-image absolute inset-0 h-full w-full object-cover"
//       />

//       {/* navy gradient overlays for legibility, matching site palette */}
//       <div
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(90deg, rgba(11,29,51,0.88) 0%, rgba(11,29,51,0.55) 38%, rgba(11,29,51,0.25) 62%, rgba(11,29,51,0.55) 100%)",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(11,29,51,0.35) 0%, rgba(11,29,51,0.15) 30%, rgba(11,29,51,0.35) 68%, rgba(11,29,51,0.92) 100%)",
//         }}
//       />

//       {/* hover sheen sweep — premium light pass across the banner */}
//       <div className="gp-sheen pointer-events-none absolute inset-0" />

//       {/* gold ambient glow, breathing continuously */}
//       <div className="gp-blob-gold pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full bg-[#f2c879] blur-[140px]" />
//       <div className="gp-blob-navy pointer-events-none absolute -left-10 bottom-0 h-[260px] w-[260px] rounded-full bg-[#B8874F] blur-[130px]" />

//       {/* faint dot-grid texture for depth */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.15]"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(255,255,255,0.5) 0.6px, transparent 0.6px)",
//           backgroundSize: "18px 18px",
//         }}
//       />

//       {/* content */}
//       <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-between px-5 py-14 sm:px-8 sm:py-16 md:py-20 lg:py-24">
//         {/* top-left: eyebrow + headline */}
//         <div className="max-w-full lg:max-w-[900px]">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={0}
//             className="mb-4 flex items-center gap-2.5"
//           >
//             <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#f2c879]" />
//             <span
//               className="text-[11.5px] uppercase tracking-[0.08em] text-[#f2c879]"
//               style={{ fontFamily: "'JetBrains Mono', monospace" }}
//             >
//               Global Perspective
//             </span>
//           </motion.div>

//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={1}
//             className="text-[clamp(24px,3.4vw,42px)] font-semibold leading-[1.15] tracking-[-0.01em] text-white md:whitespace-nowrap"
//             style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//           >
//             One corridor,{" "}
//             <em className="italic text-[#f2c879]">reach built to scale</em>.
//           </motion.h2>
//         </div>

//         {/* bottom: stat cards */}
//         <motion.div
//           variants={gridContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-4 md:gap-5"
//         >
//           {STATS.map((stat) => (
//             <StatCard key={stat.label} stat={stat} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Respective;

import { motion } from "framer-motion";
import companyPicture from "../assets/company_picture.jpg";

/* ------------------------------------------------------------------ */
/*  Motion presets — consistent with Thesis.jsx / Market.jsx           */
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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cellReveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* ------------------------------------------------------------------ */
/*  Content — placeholder figures, swap in real numbers when ready     */
/* ------------------------------------------------------------------ */
const STATS = [
  { value: "02", label: "COUNTRIES", sub: "Japan & Bangladesh" },
  { value: "03", label: "VERTICALS", sub: "Motors · Tech · Textile" },
  { value: "01", label: "LICENSE", sub: "One entity, shared infrastructure" },
  {
    value: "Kobe → Ctg",
    label: "THE CORRIDOR",
    sub: "Port to port, one route",
  },
];

/* ---------- one stat card ---------- */
const StatCard = ({ stat }) => (
  <motion.div
    variants={cellReveal}
    className="rounded-xl border-t-2 border-[#f2c879] bg-white/[0.07] p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12] sm:p-6 md:p-7"
  >
    <div
      className="mb-1.5 text-[22px] leading-none text-[#f2c879] sm:text-[28px] md:text-[32px]"
      style={{ fontFamily: "'Fraunces', Georgia, serif" }}
    >
      {stat.value}
    </div>
    <div
      className="mb-1 text-[10px] uppercase tracking-[0.14em] text-white/85 sm:text-[11px]"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {stat.label}
    </div>
    <div className="text-[11px] text-white/50 sm:text-[12px]">{stat.sub}</div>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Main section — full-bleed background image, content top-left       */
/* ------------------------------------------------------------------ */
const Respective = () => {
  return (
    <section
      id="global-perspective"
      className="group relative isolate flex min-h-[560px] w-full flex-col overflow-hidden sm:min-h-[620px] md:min-h-[700px] lg:min-h-[780px]"
    >
      {/* continuous ambient motion + hover premium interaction */}
      <style>{`
        @keyframes gpKenBurns {
          0%   { transform: scale(1) translate3d(0, 0, 0); }
          50%  { transform: scale(1.09) translate3d(-1%, -1%, 0); }
          100% { transform: scale(1) translate3d(0, 0, 0); }
        }
        @keyframes gpBlobPulseGold {
          0%, 100% { opacity: 0.14; transform: scale(1); }
          50%      { opacity: 0.22; transform: scale(1.12); }
        }
        @keyframes gpBlobPulseNavy {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50%      { opacity: 0.2;  transform: scale(1.1); }
        }
        .gp-image {
          animation: gpKenBurns 26s ease-in-out infinite;
          filter: brightness(1) saturate(1);
          transition: filter 0.6s ease;
        }
        .group:hover .gp-image {
          filter: brightness(1.08) saturate(1.15);
        }
        .gp-blob-gold { animation: gpBlobPulseGold 9s ease-in-out infinite; }
        .gp-blob-navy { animation: gpBlobPulseNavy 11s ease-in-out infinite 1.5s; }
        .gp-sheen {
          background: linear-gradient(115deg, transparent 40%, rgba(242,200,121,0.16) 50%, transparent 60%);
          transform: translateX(-120%);
          transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .gp-sheen {
          transform: translateX(120%);
        }
      `}</style>

      {/* full-width background image */}
      <img
        src={companyPicture}
        alt="Onesha Group — Japan to Bangladesh export corridor"
        className="gp-image absolute inset-0 h-full w-full object-cover"
      />

      {/* navy gradient overlays for legibility, matching site palette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,29,51,0.88) 0%, rgba(11,29,51,0.55) 38%, rgba(11,29,51,0.25) 62%, rgba(11,29,51,0.55) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,29,51,0.35) 0%, rgba(11,29,51,0.15) 30%, rgba(11,29,51,0.35) 68%, rgba(11,29,51,0.92) 100%)",
        }}
      />

      {/* hover sheen sweep — premium light pass across the banner */}
      <div className="gp-sheen pointer-events-none absolute inset-0" />

      {/* gold ambient glow, breathing continuously */}
      <div className="gp-blob-gold pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full bg-[#f2c879] blur-[140px]" />
      <div className="gp-blob-navy pointer-events-none absolute -left-10 bottom-0 h-[260px] w-[260px] rounded-full bg-[#B8874F] blur-[130px]" />

      {/* faint dot-grid texture for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-between px-5 py-14 sm:px-8 sm:py-16 md:py-20 lg:py-24">
        {/* top-left: eyebrow + headline */}
        <div className="max-w-full lg:max-w-[900px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            className="mb-4 flex items-center gap-2.5"
          >
            <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#f2c879]" />
            <span
              className="text-[11.5px] uppercase tracking-[0.08em] text-[#f2c879]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Global Perspective
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            className="text-[clamp(24px,3.4vw,42px)] font-semibold leading-[1.15] tracking-[-0.01em] text-white md:whitespace-nowrap"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            One corridor,{" "}
            <em className="italic text-[#f2c879]">reach built to scale</em>.
          </motion.h2>
        </div>

        {/* bottom: stat cards */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-4 md:gap-5"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Respective;