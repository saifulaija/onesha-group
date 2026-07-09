// import { motion } from "framer-motion";
// import { Car, Cpu, Shirt, Briefcase, ArrowRight } from "lucide-react";

// /* ------------------------------------------------------------------ */
// /*  Motion presets — consistent with Thesis.jsx / Market.jsx / Respective.jsx */
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
//   show: { transition: { staggerChildren: 0.09 } },
// };

// const cellReveal = {
//   hidden: { opacity: 0, y: 22 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// /* ------------------------------------------------------------------ */
// /*  Utility                                                             */
// /* ------------------------------------------------------------------ */
// const withAlpha = (hex, alpha) => {
//   const h = hex.replace("#", "");
//   const r = parseInt(h.substring(0, 2), 16);
//   const g = parseInt(h.substring(2, 4), 16);
//   const b = parseInt(h.substring(4, 6), 16);
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// };

// /* ------------------------------------------------------------------ */
// /*  Content — four verticals, each with its own service line           */
// /*  Swap the image imports above for real Onesha photography           */
// /* ------------------------------------------------------------------ */
// const VERTICALS = [
//   {
//     index: "01",
//     tag: "MOBILITY",
//     name: "Onesha Motors",
//     accent: "#B8874F",
//     image: "https://picsum.photos/seed/onesha-motors-premium/900/700",
//     icon: Car,
//     description:
//       "Buying, reconditioning, and selling cars — built around trust in a market where trust is the scarce resource.",
//   },
//   {
//     index: "02",
//     tag: "TECHNOLOGY",
//     name: "Onesha Tech",
//     accent: "#5A7BA6",
//     image: "https://picsum.photos/seed/onesha-tech-premium/900/700",
//     icon: Cpu,
//     description:
//       "Software, web, and AI-automation delivery for clients abroad — exporting hours of skilled work, not raw materials.",
//   },
//   {
//     index: "03",
//     tag: "TEXTILE",
//     name: "Onesha Textile",
//     accent: "#8C6A2F",
//     image: "https://picsum.photos/seed/onesha-textile-premium/900/700",
//     icon: Shirt,
//     description:
//       "Garment manufacturing and export, in a country that is already the world's second-largest apparel exporter.",
//   },
//   {
//     index: "04",
//     tag: "LEATHER",
//     name: "Onesha Leather",
//     accent: "#7A4A2A",
//     image: "https://picsum.photos/seed/onesha-leather-premium/900/700",
//     icon: Briefcase,
//     description:
//       "Leather goods manufacturing and export, sourcing from a region ranked among the world's top leather producers.",
//   },
// ];

// /* ---------- one vertical card ---------- */
// const VerticalCard = ({ v }) => {
//   const Icon = v.icon;
//   return (
//     <motion.div
//       variants={cellReveal}
//       className="group flex flex-col overflow-hidden rounded-2xl border border-[#12203A]/[0.07] bg-white shadow-[0_10px_30px_-18px_rgba(18,32,58,0.18)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-22px_rgba(18,32,58,0.28)]"
//     >
//       {/* photo */}
//       <div className="relative h-[168px] overflow-hidden sm:h-[180px]">
//         <img
//           src={v.image}
//           alt={v.name}
//           className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
//         />
//         <div
//           className="absolute inset-0 transition-opacity duration-500 ease-out group-hover:opacity-[0.62]"
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(11,27,43,0.1) 0%, rgba(11,27,43,0.82) 100%)",
//             opacity: 0.72,
//           }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(0deg, ${withAlpha(
//               v.accent,
//               0.55,
//             )}, transparent 60%)`,
//           }}
//         />
//         <span
//           className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
//           style={{ fontFamily: "'JetBrains Mono', monospace" }}
//         >
//           {v.tag}
//         </span>
//         <span
//           className="absolute right-4 top-4 text-[11px] tracking-wide text-white/75"
//           style={{ fontFamily: "'JetBrains Mono', monospace" }}
//         >
//           {v.index}
//         </span>
//       </div>

//       {/* content */}
//       <div className="relative flex flex-1 flex-col px-6 pb-6 pt-5">
//         <div
//           className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105"
//           style={{
//             backgroundColor: v.accent,
//             boxShadow: `0 8px 18px -6px ${withAlpha(v.accent, 0.55)}`,
//           }}
//         >
//           <Icon size={18} strokeWidth={1.8} color="#fff" />
//         </div>

//         <h3
//           className="mb-2 mt-3 text-[18.5px] leading-snug text-[#12203A] sm:text-[19.5px]"
//           style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//         >
//           {v.name}
//         </h3>
//         <p className="mb-5 text-[13.5px] leading-relaxed text-[#4B5468]">
//           {v.description}
//         </p>

//         <a
//           href="#"
//           className="group/link relative mt-auto inline-flex w-fit items-center gap-1.5 text-[13px] font-medium"
//           style={{ color: v.accent }}
//         >
//           More details
//           <ArrowRight
//             size={14}
//             strokeWidth={2}
//             className="transition-transform duration-300 ease-out group-hover/link:translate-x-1"
//           />
//           <span
//             className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-[0.35] transition-transform duration-300 ease-out group-hover/link:scale-x-100"
//             style={{ backgroundColor: v.accent }}
//           />
//         </a>
//       </div>
//     </motion.div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /*  Main section                                                       */
// /* ------------------------------------------------------------------ */
// const Services = () => {
//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden bg-white py-16 text-[#12203A] sm:py-20 md:py-24 lg:py-28"
//     >
//       {/* background texture + ambient glow, matching site language */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.5]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(18,32,58,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(18,32,58,.04) 1px, transparent 1px)",
//           backgroundSize: "34px 34px",
//           maskImage:
//             "radial-gradient(ellipse 70% 60% at 15% 0%, black 20%, transparent 75%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 70% 60% at 15% 0%, black 20%, transparent 75%)",
//         }}
//       />
//       <div className="pointer-events-none absolute -left-20 top-10 h-[320px] w-[320px] rounded-full bg-[#B8874F]/[0.08] blur-[150px]" />

//       <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
//         {/* ============ header row: copy left, CTA right ============ */}
//         <div className="mb-12 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
//           <div className="max-w-2xl">
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
//                 Business Overview
//               </span>
//             </motion.div>

//             <motion.h2
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.6 }}
//               custom={1}
//               className="mb-4 text-balance text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.15] tracking-[-0.01em] text-[#12203A]"
//               style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//             >
//               One holding, four verticals — each with its own service line.
//             </motion.h2>

//             <motion.p
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.6 }}
//               custom={2}
//               className="max-w-[52ch] text-[14.5px] leading-relaxed text-[#4B5468] sm:text-[15.5px]"
//             >
//               Each business runs its own P&amp;L. The group provides capital,
//               systems, and discipline.
//             </motion.p>
//           </div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={3}
//             className="shrink-0"
//           >
//             <a
//               href="#contact"
//               className="group/cta relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-[#12203A] px-6 py-3.5 text-[13.5px] font-medium text-white transition-transform duration-300 ease-out hover:-translate-y-0.5"
//             >
//               <span className="absolute inset-0 left-0 -z-10 w-0 bg-[#B8874F] transition-all duration-500 ease-out group-hover/cta:w-full" />
//               <span className="relative z-10">Partner with us</span>
//               <ArrowRight
//                 size={15}
//                 strokeWidth={2}
//                 className="relative z-10 transition-transform duration-300 ease-out group-hover/cta:translate-x-1"
//               />
//             </a>
//           </motion.div>
//         </div>

//         {/* ============ 4-card vertical grid ============ */}
//         <motion.div
//           variants={gridContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.12 }}
//           className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
//         >
//           {VERTICALS.map((v) => (
//             <VerticalCard key={v.name} v={v} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import { motion } from "framer-motion";
import { Car, Cpu, Shirt, Briefcase, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Motion presets — consistent with Thesis.jsx / Market.jsx / Respective.jsx */
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
  show: { transition: { staggerChildren: 0.09 } },
};

const cellReveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
/*  Content — four verticals, each with its own service line           */
/*  Swap the image imports above for real Onesha photography           */
/* ------------------------------------------------------------------ */
const VERTICALS = [
  {
    index: "01",
    tag: "MOBILITY",
    name: "Onesha Motors",
    accent: "#B8874F",
    image:
      "https://images.unsplash.com/photo-1643142314913-0cf633d9bbb5?q=80&w=900&auto=format&fit=crop",
    icon: Car,
    description:
      "Buying, reconditioning, and selling cars — built around trust in a market where trust is the scarce resource.",
  },
  {
    index: "02",
    tag: "TECHNOLOGY",
    name: "Onesha Tech",
    accent: "#5A7BA6",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop",
    icon: Cpu,
    description:
      "Software, web, and AI-automation delivery for clients abroad — exporting hours of skilled work, not raw materials.",
  },
  {
    index: "03",
    tag: "TEXTILE",
    name: "Onesha Textile",
    accent: "#8C6A2F",
    image:
      "https://images.unsplash.com/photo-1741176505800-caaa3a52631a?q=80&w=900&auto=format&fit=crop",
    icon: Shirt,
    description:
      "Garment manufacturing and export, in a country that is already the world's second-largest apparel exporter.",
  },
  {
    index: "04",
    tag: "LEATHER",
    name: "Onesha Leather",
    accent: "#7A4A2A",
    image:
      "https://images.unsplash.com/photo-1599108859613-88a1fff8e2e4?q=80&w=900&auto=format&fit=crop",
    icon: Briefcase,
    description:
      "Leather goods manufacturing and export, sourcing from a region ranked among the world's top leather producers.",
  },
];

/* ---------- one vertical card ---------- */
const VerticalCard = ({ v }) => {
  const Icon = v.icon;
  return (
    <motion.div
      variants={cellReveal}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#12203A]/[0.07] bg-white shadow-[0_10px_30px_-18px_rgba(18,32,58,0.18)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-22px_rgba(18,32,58,0.28)]"
    >
      {/* photo */}
      <div className="relative h-[168px] overflow-hidden sm:h-[180px]">
        <img
          src={v.image}
          alt={v.name}
          className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
        <div
          className="absolute inset-0 transition-opacity duration-500 ease-out group-hover:opacity-90"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,27,43,0.65) 0%, rgba(11,27,43,0.15) 32%, rgba(11,27,43,0.2) 55%, rgba(11,27,43,0.85) 100%)",
            opacity: 0.85,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(0deg, ${withAlpha(
              v.accent,
              0.55,
            )}, transparent 60%)`,
          }}
        />
        <span
          className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.55)]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {v.tag}
        </span>
        <span
          className="absolute right-4 top-4 text-[11px] tracking-wide text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.55)]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {v.index}
        </span>
      </div>

      {/* content */}
      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-5">
        <div
          className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105"
          style={{
            backgroundColor: v.accent,
            boxShadow: `0 8px 18px -6px ${withAlpha(v.accent, 0.55)}`,
          }}
        >
          <Icon size={18} strokeWidth={1.8} color="#fff" />
        </div>

        <h3
          className="mb-2 mt-3 text-[18.5px] leading-snug text-[#12203A] sm:text-[19.5px]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {v.name}
        </h3>
        <p className="mb-5 text-[13.5px] leading-relaxed text-[#4B5468]">
          {v.description}
        </p>

        <a
          href="#"
          className="group/link relative mt-auto inline-flex w-fit items-center gap-1.5 text-[13px] font-medium"
          style={{ color: v.accent }}
        >
          More details
          <ArrowRight
            size={14}
            strokeWidth={2}
            className="transition-transform duration-300 ease-out group-hover/link:translate-x-1"
          />
          <span
            className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-[0.35] transition-transform duration-300 ease-out group-hover/link:scale-x-100"
            style={{ backgroundColor: v.accent }}
          />
        </a>
      </div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 text-[#12203A] sm:py-20 md:py-24 lg:py-28"
    >
      {/* background texture + ambient glow, matching site language */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,32,58,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(18,32,58,.04) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 15% 0%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 15% 0%, black 20%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute -left-20 top-10 h-[320px] w-[320px] rounded-full bg-[#B8874F]/[0.08] blur-[150px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ============ header row: copy left, CTA right ============ */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
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
                Business Overview
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={1}
              className="mb-4 text-balance text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.15] tracking-[-0.01em] text-[#12203A]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              One holding, four verticals — each with its own service line.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={2}
              className="max-w-[52ch] text-[14.5px] leading-relaxed text-[#4B5468] sm:text-[15.5px]"
            >
              Each business runs its own P&amp;L. The group provides capital,
              systems, and discipline.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={3}
            className="shrink-0"
          >
            <a
              href="/contact"
              className="group/cta relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-[#12203A] px-6 py-3.5 text-[13.5px] font-medium text-white transition-transform duration-300 ease-out hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 left-0 -z-10 w-0 bg-[#B8874F] transition-all duration-500 ease-out group-hover/cta:w-full" />
              <span className="relative z-10">Partner with us</span>
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="relative z-10 transition-transform duration-300 ease-out group-hover/cta:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* ============ 4-card vertical grid ============ */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {VERTICALS.map((v) => (
            <VerticalCard key={v.name} v={v} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
