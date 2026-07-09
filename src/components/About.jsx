// import { motion } from "framer-motion";

// /* ------------------------------------------------------------------ */
// /*  Motion presets — matched to Economics.jsx for site-wide consistency */
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
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const collageReveal = {
//   hidden: { opacity: 0, x: -24 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

// /* ------------------------------------------------------------------ */
// /*  Content                                                            */
// /* ------------------------------------------------------------------ */
// const FEATURES = [
//   {
//     label: "Diversified Portfolio",
//     desc: "Four operating verticals, each run with its own capital and discipline.",
//   },
//   {
//     label: "Cross-Border Team",
//     desc: "Resident operators in Tokyo and Dhaka, built around the corridor.",
//   },
// ];

// const CHECKLIST = [
//   "Operating across mobility, technology, textile, and leather manufacturing.",
//   "A growing network of trusted regional partners and suppliers.",
//   "Capital, systems, and operational discipline behind every vertical.",
// ];

// /* small inline icons — no extra icon-library dependency */
// const IconBuilding = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" {...props}>
//     <path
//       d="M4 21V6.2c0-.66.42-1.24 1.05-1.44l6-1.94a1.5 1.5 0 0 1 1.9 1.43V21M4 21h16M4 21H2m18 0h2M13 21V10.2c0-.63.4-1.19.98-1.4l4-1.46A1.5 1.5 0 0 1 20 8.75V21M9 8h.01M9 11.5h.01M9 15h.01"
//       stroke="currentColor"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const IconUsers = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" {...props}>
//     <path
//       d="M16 21v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V21M9.5 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8 9.5v-1.5a4 4 0 0 0-2.7-3.78M14.5 4.6a3.5 3.5 0 0 1 0 6.8"
//       stroke="currentColor"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const IconCheck = (props) => (
//   <svg viewBox="0 0 20 20" fill="none" {...props}>
//     <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.3" />
//     <path
//       d="M6.2 10.3 8.7 12.8 13.8 7.2"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const IconArrow = (props) => (
//   <svg viewBox="0 0 20 20" fill="none" {...props}>
//     <path
//       d="M4 10h11.5M10.5 4.5 16 10l-5.5 5.5"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// /* rotating curved-text badge, in place of the reference's "25 years" ring */
// const VerticalBadge = () => {
//   const label = "FOUR VERTICALS  •  ONE GROUP  •  ";
//   const repeated = label.repeat(2);
//   return (
//     <div className="relative flex h-[92px] w-[92px] items-center justify-center sm:h-[112px] sm:w-[112px]">
//       <svg
//         viewBox="0 0 200 200"
//         className="absolute inset-0 h-full w-full animate-[oneshaSpin_22s_linear_infinite]"
//       >
//         <defs>
//           <path
//             id="onesha-badge-path"
//             d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0"
//           />
//         </defs>
//         <text fill="#0b1d33" fontSize="11.5" letterSpacing="1.5">
//           <textPath href="#onesha-badge-path" startOffset="0%">
//             {repeated}
//           </textPath>
//         </text>
//       </svg>
//       <div className="relative flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-[#0b1d33] sm:h-[74px] sm:w-[74px]">
//         <span
//           className="text-[22px] font-semibold leading-none text-[#f2c879] sm:text-[26px]"
//           style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//         >
//           04
//         </span>
//       </div>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#0b1d33] py-16 text-white sm:py-20 md:py-24 lg:py-28">
//       <style>{`@keyframes oneshaSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

//       {/* ---------- premium background layers (same language as Economics) ---------- */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.5]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
//           backgroundSize: "34px 34px",
//           maskImage:
//             "radial-gradient(ellipse 70% 65% at 20% 40%, black 25%, transparent 80%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 70% 65% at 20% 40%, black 25%, transparent 80%)",
//         }}
//       />
//       <div className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#f2c879]/[0.07] blur-[150px]" />
//       <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#345d8a]/[0.2] blur-[150px]" />
//       <div
//         className="pointer-events-none absolute inset-x-0 top-0 h-px"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(242,200,121,0.5), transparent)",
//         }}
//       />

//       {/* faint industrial skyline watermark, bottom-right — desktop only */}
//       <svg
//         className="pointer-events-none absolute bottom-0 right-0 hidden h-[220px] w-[420px] opacity-[0.06] lg:block"
//         viewBox="0 0 420 220"
//         fill="none"
//       >
//         <rect x="10" y="90" width="46" height="130" fill="white" />
//         <rect x="66" y="60" width="34" height="160" fill="white" />
//         <rect x="112" y="120" width="52" height="100" fill="white" />
//         <rect x="176" y="40" width="30" height="180" fill="white" />
//         <rect x="218" y="100" width="44" height="120" fill="white" />
//         <rect x="274" y="70" width="36" height="150" fill="white" />
//         <rect x="322" y="130" width="50" height="90" fill="white" />
//         <line x1="82" y1="60" x2="82" y2="30" stroke="white" strokeWidth="3" />
//         <line
//           x1="290"
//           y1="70"
//           x2="290"
//           y2="40"
//           stroke="white"
//           strokeWidth="3"
//         />
//       </svg>

//       <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
//         {/* ============ LEFT: image collage ============ */}
//         <motion.div
//           variants={collageReveal}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:mx-0 lg:max-w-none"
//         >
//           <div className="relative aspect-[3/3.35] w-full">
//             {/* big image */}
//             <div className="absolute bottom-0 left-0 h-[84%] w-[70%] overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
//               <img
//                 src="https://images.unsplash.com/photo-1716702528916-18c7a8c1ecde?auto=format&fit=crop&w=1000&q=75"
//                 alt="Onesha Group operations"
//                 className="h-full w-full object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d33]/50 via-transparent to-transparent" />
//             </div>

//             {/* small image, top-right offset */}
//             <div className="absolute right-0 top-0 h-[54%] w-[54%] overflow-hidden rounded-2xl border-[5px] border-[#0b1d33] shadow-[0_20px_50px_-16px_rgba(0,0,0,0.55)]">
//               <img
//                 src="https://images.unsplash.com/photo-1741183392804-a37864e6a6d9?auto=format&fit=crop&w=800&q=75"
//                 alt="Onesha Group facility"
//                 className="h-full w-full object-cover"
//                 loading="lazy"
//               />
//             </div>

//             {/* rotating vertical-count badge, floating between the two images */}
//             <div className="absolute left-[28%] top-[46%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]">
//               <VerticalBadge />
//             </div>

//             {/* floating stat card */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.6 }}
//               custom={2}
//               className="absolute -bottom-5 left-1 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#132a47]/95 px-4 py-3.5 shadow-[0_20px_40px_-14px_rgba(0,0,0,0.6)] backdrop-blur sm:left-4 sm:gap-3.5 sm:px-5 sm:py-4"
//             >
//               <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#f2c879]/15 sm:h-10 sm:w-10">
//                 <span
//                   className="text-[13px] font-semibold text-[#f2c879] sm:text-[14px]"
//                   style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                 >
//                   JP
//                 </span>
//               </div>
//               <div className="leading-tight">
//                 <div className="text-[12.5px] font-semibold text-white sm:text-[13.5px]">
//                   Tokyo ⇄ Dhaka Corridor
//                 </div>
//                 <div
//                   className="mt-0.5 text-[10.5px] uppercase tracking-[0.06em] text-white/45 sm:text-[11px]"
//                   style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                 >
//                   Group headquarters
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* ============ RIGHT: content ============ */}
//         <div className="relative">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={0}
//             className="mb-3.5 flex items-center gap-2.5"
//           >
//             <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#f2c879]" />
//             <span
//               className="text-[11.5px] uppercase tracking-[0.08em] text-[#f2c879]"
//               style={{ fontFamily: "'JetBrains Mono', monospace" }}
//             >
//               About Us
//             </span>
//           </motion.div>

//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={1}
//             className="mb-4 max-w-[16ch] text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:mb-5"
//             style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//           >
//             Your Trusted Partner Across the Japan–Bangladesh Corridor
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={2}
//             className="mb-8 max-w-[52ch] text-[14.5px] leading-relaxed text-white/60 sm:mb-9 sm:text-[15.5px]"
//           >
//             We believe durable growth comes from disciplined execution. With
//             operating companies spanning mobility, technology, and
//             manufacturing, we specialize in connecting Japanese capital with
//             Bangladesh's fastest-growing industries.
//           </motion.p>

//           {/* feature pair */}
//           <motion.div
//             variants={gridContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             className="mb-7 grid grid-cols-1 gap-5 sm:mb-8 sm:grid-cols-2 sm:gap-6"
//           >
//             {FEATURES.map((f) => (
//               <motion.div
//                 key={f.label}
//                 variants={cellReveal}
//                 className="flex items-start gap-3"
//               >
//                 <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#f2c879]/10 text-[#f2c879]">
//                   {f.label === "Diversified Portfolio" ? (
//                     <IconBuilding className="h-5 w-5" />
//                   ) : (
//                     <IconUsers className="h-5 w-5" />
//                   )}
//                 </div>
//                 <div>
//                   <div className="mb-1 text-[13.5px] font-semibold text-white sm:text-[14.5px]">
//                     {f.label}
//                   </div>
//                   <div className="text-[12.5px] leading-snug text-white/50 sm:text-[13px]">
//                     {f.desc}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           <div className="mb-7 h-px w-full bg-white/10 sm:mb-8" />

//           {/* checklist */}
//           <motion.ul
//             variants={gridContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             className="mb-9 space-y-3 sm:mb-10 sm:space-y-3.5"
//           >
//             {CHECKLIST.map((item) => (
//               <motion.li
//                 key={item}
//                 variants={cellReveal}
//                 className="flex items-start gap-2.5 text-[13.5px] leading-snug text-white/70 sm:text-[14.5px]"
//               >
//                 <IconCheck className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[#f2c879]" />
//                 <span>{item}</span>
//               </motion.li>
//             ))}
//           </motion.ul>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={3}
//           >
//             <button
//               type="button"
//               className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#f2c879] px-6 py-3.5 text-[13.5px] font-semibold text-[#0b1d33] transition-all duration-300 hover:bg-[#f5d698] hover:shadow-[0_14px_30px_-10px_rgba(242,200,121,0.5)] active:scale-[0.97] sm:px-7 sm:py-4 sm:text-[14px]"
//             >
//               Know More
//               <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import { motion } from "framer-motion";

// /* ------------------------------------------------------------------ */
// /*  Motion presets — matched to Economics.jsx for site-wide consistency */
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
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const collageReveal = {
//   hidden: { opacity: 0, x: -24 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

// /* ------------------------------------------------------------------ */
// /*  Content                                                            */
// /* ------------------------------------------------------------------ */
// const FEATURES = [
//   {
//     label: "Diversified Portfolio",
//     desc: "Four operating verticals, each run with its own capital and discipline.",
//   },
//   {
//     label: "Cross-Border Team",
//     desc: "Resident operators in Tokyo and Dhaka, built around the corridor.",
//   },
// ];

// const CHECKLIST = [
//   "Operating across mobility, technology, textile, and leather manufacturing.",
//   "A growing network of trusted regional partners and suppliers.",
//   "Capital, systems, and operational discipline behind every vertical.",
// ];

// /* small inline icons — no extra icon-library dependency */
// const IconBuilding = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" {...props}>
//     <path
//       d="M4 21V6.2c0-.66.42-1.24 1.05-1.44l6-1.94a1.5 1.5 0 0 1 1.9 1.43V21M4 21h16M4 21H2m18 0h2M13 21V10.2c0-.63.4-1.19.98-1.4l4-1.46A1.5 1.5 0 0 1 20 8.75V21M9 8h.01M9 11.5h.01M9 15h.01"
//       stroke="currentColor"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const IconUsers = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" {...props}>
//     <path
//       d="M16 21v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V21M9.5 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8 9.5v-1.5a4 4 0 0 0-2.7-3.78M14.5 4.6a3.5 3.5 0 0 1 0 6.8"
//       stroke="currentColor"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const IconCheck = (props) => (
//   <svg viewBox="0 0 20 20" fill="none" {...props}>
//     <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.3" />
//     <path
//       d="M6.2 10.3 8.7 12.8 13.8 7.2"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const IconArrow = (props) => (
//   <svg viewBox="0 0 20 20" fill="none" {...props}>
//     <path
//       d="M4 10h11.5M10.5 4.5 16 10l-5.5 5.5"
//       stroke="currentColor"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// /* rotating curved-text badge — cream ring + gold center, mirrors the
//    reference's white-ring/coral-center structure on our palette */
// const VerticalBadge = () => {
//   const label = "FOUR VERTICALS  •  ONE GROUP  •  ";
//   const repeated = label.repeat(2);
//   return (
//     <div className="relative flex h-[92px] w-[92px] items-center justify-center sm:h-[112px] sm:w-[112px]">
//       <svg
//         viewBox="0 0 200 200"
//         className="absolute inset-0 h-full w-full animate-[oneshaSpin_22s_linear_infinite] drop-shadow-[0_8px_18px_rgba(18,32,58,0.18)]"
//       >
//         <defs>
//           <path
//             id="onesha-badge-path"
//             d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0"
//           />
//         </defs>
//         <circle cx="100" cy="100" r="98" fill="#FCFAF4" />
//         <text fill="#12203A" fontSize="11.5" letterSpacing="1.5">
//           <textPath href="#onesha-badge-path" startOffset="0%">
//             {repeated}
//           </textPath>
//         </text>
//       </svg>
//       <div className="relative flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-[#B8874F] sm:h-[74px] sm:w-[74px]">
//         <span
//           className="text-[22px] font-semibold leading-none text-[#12203A] sm:text-[26px]"
//           style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//         >
//           04
//         </span>
//       </div>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#F7F3EA] py-16 text-[#12203A] sm:py-20 md:py-24 lg:py-28">
//       <style>{`@keyframes oneshaSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

//       {/* ---------- premium background layers ---------- */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.6]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(18,32,58,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(18,32,58,.045) 1px, transparent 1px)",
//           backgroundSize: "34px 34px",
//           maskImage:
//             "radial-gradient(ellipse 70% 65% at 20% 40%, black 25%, transparent 80%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 70% 65% at 20% 40%, black 25%, transparent 80%)",
//         }}
//       />
//       <div className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#B8874F]/[0.10] blur-[150px]" />
//       <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#0b1d33]/[0.06] blur-[150px]" />
//       <div
//         className="pointer-events-none absolute inset-x-0 top-0 h-px"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(184,135,79,0.5), transparent)",
//         }}
//       />

//       {/* faint industrial skyline watermark, bottom-right — desktop only */}
//       <svg
//         className="pointer-events-none absolute bottom-0 right-0 hidden h-[220px] w-[420px] opacity-[0.05] lg:block"
//         viewBox="0 0 420 220"
//         fill="none"
//       >
//         <rect x="10" y="90" width="46" height="130" fill="#12203A" />
//         <rect x="66" y="60" width="34" height="160" fill="#12203A" />
//         <rect x="112" y="120" width="52" height="100" fill="#12203A" />
//         <rect x="176" y="40" width="30" height="180" fill="#12203A" />
//         <rect x="218" y="100" width="44" height="120" fill="#12203A" />
//         <rect x="274" y="70" width="36" height="150" fill="#12203A" />
//         <rect x="322" y="130" width="50" height="90" fill="#12203A" />
//         <line
//           x1="82"
//           y1="60"
//           x2="82"
//           y2="30"
//           stroke="#12203A"
//           strokeWidth="3"
//         />
//         <line
//           x1="290"
//           y1="70"
//           x2="290"
//           y2="40"
//           stroke="#12203A"
//           strokeWidth="3"
//         />
//       </svg>

//       <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
//         {/* ============ LEFT: image collage (layout unchanged) ============ */}
//         <motion.div
//           variants={collageReveal}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:mx-0 lg:max-w-none"
//         >
//           <div className="relative aspect-[3/3.35] w-full">
//             {/* big image */}
//             <div className="absolute bottom-0 left-0 h-[84%] w-[70%] overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(18,32,58,0.35)]">
//               <img
//                 src="https://images.unsplash.com/photo-1716702528916-18c7a8c1ecde?auto=format&fit=crop&w=1000&q=75"
//                 alt="Onesha Group operations"
//                 className="h-full w-full object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#12203A]/40 via-transparent to-transparent" />
//             </div>

//             {/* small image, top-right offset */}
//             <div className="absolute right-0 top-0 h-[54%] w-[54%] overflow-hidden rounded-2xl border-[5px] border-[#F7F3EA] shadow-[0_20px_50px_-16px_rgba(18,32,58,0.3)]">
//               <img
//                 src="https://images.unsplash.com/photo-1741183392804-a37864e6a6d9?auto=format&fit=crop&w=800&q=75"
//                 alt="Onesha Group facility"
//                 className="h-full w-full object-cover"
//                 loading="lazy"
//               />
//             </div>

//             {/* rotating vertical-count badge, floating between the two images */}
//             <div className="absolute left-[28%] top-[46%] -translate-x-1/2 -translate-y-1/2">
//               <VerticalBadge />
//             </div>

//             {/* floating stat card */}
//             <motion.div
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true, amount: 0.6 }}
//               custom={2}
//               className="absolute -bottom-5 left-1 flex items-center gap-3 rounded-2xl border border-[#12203A]/[0.06] bg-white px-4 py-3.5 shadow-[0_20px_40px_-14px_rgba(18,32,58,0.25)] sm:left-4 sm:gap-3.5 sm:px-5 sm:py-4"
//             >
//               <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#B8874F]/[0.12] sm:h-10 sm:w-10">
//                 <span
//                   className="text-[13px] font-semibold text-[#B8874F] sm:text-[14px]"
//                   style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                 >
//                   JP
//                 </span>
//               </div>
//               <div className="leading-tight">
//                 <div className="text-[12.5px] font-semibold text-[#12203A] sm:text-[13.5px]">
//                   Tokyo ⇄ Dhaka Corridor
//                 </div>
//                 <div
//                   className="mt-0.5 text-[10.5px] uppercase tracking-[0.06em] text-[#12203A]/45 sm:text-[11px]"
//                   style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                 >
//                   Group headquarters
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* ============ RIGHT: content ============ */}
//         <div className="relative">
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={0}
//             className="mb-3.5 flex items-center gap-2.5"
//           >
//             <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#B8874F]" />
//             <span
//               className="text-[11.5px] uppercase tracking-[0.08em] text-[#B8874F]"
//               style={{ fontFamily: "'JetBrains Mono', monospace" }}
//             >
//               About Us
//             </span>
//           </motion.div>

//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={1}
//             className="mb-4 max-w-[16ch] text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15] tracking-[-0.01em] text-[#12203A] sm:mb-5"
//             style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//           >
//             Your Trusted Partner Across the Japan–Bangladesh Corridor
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={2}
//             className="mb-8 max-w-[52ch] text-[14.5px] leading-relaxed text-[#4B5468] sm:mb-9 sm:text-[15.5px]"
//           >
//             We believe durable growth comes from disciplined execution. With
//             operating companies spanning mobility, technology, and
//             manufacturing, we specialize in connecting Japanese capital with
//             Bangladesh's fastest-growing industries.
//           </motion.p>

//           {/* feature pair */}
//           <motion.div
//             variants={gridContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             className="mb-7 grid grid-cols-1 gap-5 sm:mb-8 sm:grid-cols-2 sm:gap-6"
//           >
//             {FEATURES.map((f) => (
//               <motion.div
//                 key={f.label}
//                 variants={cellReveal}
//                 className="flex items-start gap-3"
//               >
//                 <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#B8874F]/[0.12] text-[#B8874F]">
//                   {f.label === "Diversified Portfolio" ? (
//                     <IconBuilding className="h-5 w-5" />
//                   ) : (
//                     <IconUsers className="h-5 w-5" />
//                   )}
//                 </div>
//                 <div>
//                   <div className="mb-1 text-[13.5px] font-semibold text-[#12203A] sm:text-[14.5px]">
//                     {f.label}
//                   </div>
//                   <div className="text-[12.5px] leading-snug text-[#4B5468] sm:text-[13px]">
//                     {f.desc}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           <div className="mb-7 h-px w-full bg-[#12203A]/[0.08] sm:mb-8" />

//           {/* checklist */}
//           <motion.ul
//             variants={gridContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             className="mb-9 space-y-3 sm:mb-10 sm:space-y-3.5"
//           >
//             {CHECKLIST.map((item) => (
//               <motion.li
//                 key={item}
//                 variants={cellReveal}
//                 className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#3C4457] sm:text-[14.5px]"
//               >
//                 <IconCheck className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[#B8874F]" />
//                 <span>{item}</span>
//               </motion.li>
//             ))}
//           </motion.ul>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.6 }}
//             custom={3}
//           >
//             <button
//               type="button"
//               className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#12203A] px-6 py-3.5 text-[13.5px] font-semibold text-[#F7F3EA] transition-all duration-300 hover:bg-[#1B2C4C] hover:shadow-[0_14px_30px_-10px_rgba(18,32,58,0.4)] active:scale-[0.97] sm:px-7 sm:py-4 sm:text-[14px]"
//             >
//               Know More
//               <IconArrow className="h-4 w-4 text-[#B8874F] transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Motion presets — matched to Economics.jsx for site-wide consistency */
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const collageReveal = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */
const FEATURES = [
  {
    label: "Diversified Portfolio",
    desc: "Four operating verticals, each run with its own capital and discipline.",
  },
  {
    label: "Cross-Border Team",
    desc: "Resident operators in Tokyo and Dhaka, built around the corridor.",
  },
];

const CHECKLIST = [
  "Operating across mobility, technology, textile, and leather manufacturing.",
  "A growing network of trusted regional partners and suppliers.",
  "Capital, systems, and operational discipline behind every vertical.",
];

/* small inline icons — no extra icon-library dependency */
const IconBuilding = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 21V6.2c0-.66.42-1.24 1.05-1.44l6-1.94a1.5 1.5 0 0 1 1.9 1.43V21M4 21h16M4 21H2m18 0h2M13 21V10.2c0-.63.4-1.19.98-1.4l4-1.46A1.5 1.5 0 0 1 20 8.75V21M9 8h.01M9 11.5h.01M9 15h.01"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconUsers = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16 21v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V21M9.5 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8 9.5v-1.5a4 4 0 0 0-2.7-3.78M14.5 4.6a3.5 3.5 0 0 1 0 6.8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCheck = (props) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M6.2 10.3 8.7 12.8 13.8 7.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* rotating curved-text badge — cream ring + gold center, mirrors the
   reference's white-ring/coral-center structure on our palette */
const VerticalBadge = () => {
  const label = "FOUR VERTICALS  •  ONE GROUP  •  ";
  const repeated = label.repeat(2);
  return (
    <div className="relative flex h-[92px] w-[92px] items-center justify-center sm:h-[112px] sm:w-[112px]">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-[oneshaSpin_22s_linear_infinite] drop-shadow-[0_8px_18px_rgba(18,32,58,0.18)]"
      >
        <defs>
          <path
            id="onesha-badge-path"
            d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0"
          />
        </defs>
        <circle cx="100" cy="100" r="98" fill="#F7F9FA" />
        <text fill="#12203A" fontSize="11.5" letterSpacing="1.5">
          <textPath href="#onesha-badge-path" startOffset="0%">
            {repeated}
          </textPath>
        </text>
      </svg>
      <div className="relative flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-[#B8874F] sm:h-[74px] sm:w-[74px]">
        <span
          className="text-[22px] font-semibold leading-none text-[#12203A] sm:text-[26px]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          04
        </span>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#EEF1F4] py-16 text-[#12203A] sm:py-20 md:py-24 lg:py-28"
    >
      <style>{`@keyframes oneshaSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

      {/* ---------- premium background layers ---------- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,32,58,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(18,32,58,.045) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 70% 65% at 20% 40%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 65% at 20% 40%, black 25%, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#B8874F]/[0.10] blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#0b1d33]/[0.06] blur-[150px]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(184,135,79,0.5), transparent)",
        }}
      />

      {/* faint industrial skyline watermark, bottom-right — desktop only */}
      <svg
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[220px] w-[420px] opacity-[0.05] lg:block"
        viewBox="0 0 420 220"
        fill="none"
      >
        <rect x="10" y="90" width="46" height="130" fill="#12203A" />
        <rect x="66" y="60" width="34" height="160" fill="#12203A" />
        <rect x="112" y="120" width="52" height="100" fill="#12203A" />
        <rect x="176" y="40" width="30" height="180" fill="#12203A" />
        <rect x="218" y="100" width="44" height="120" fill="#12203A" />
        <rect x="274" y="70" width="36" height="150" fill="#12203A" />
        <rect x="322" y="130" width="50" height="90" fill="#12203A" />
        <line
          x1="82"
          y1="60"
          x2="82"
          y2="30"
          stroke="#12203A"
          strokeWidth="3"
        />
        <line
          x1="290"
          y1="70"
          x2="290"
          y2="40"
          stroke="#12203A"
          strokeWidth="3"
        />
      </svg>

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
        {/* ============ LEFT: image collage (layout unchanged) ============ */}
        <motion.div
          variants={collageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:mx-0 lg:max-w-none"
        >
          <div className="relative aspect-[3/3.35] w-full">
            {/* big image */}
            <div className="absolute bottom-0 left-0 h-[84%] w-[70%] overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(18,32,58,0.35)]">
              <img
                src="https://images.unsplash.com/photo-1716702528916-18c7a8c1ecde?auto=format&fit=crop&w=1000&q=75"
                alt="Onesha Group operations"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12203A]/40 via-transparent to-transparent" />
            </div>

            {/* small image, top-right offset */}
            <div className="absolute right-0 top-0 h-[54%] w-[54%] overflow-hidden rounded-2xl border-[5px] border-[#EEF1F4] shadow-[0_20px_50px_-16px_rgba(18,32,58,0.3)]">
              <img
                src="https://images.unsplash.com/photo-1741183392804-a37864e6a6d9?auto=format&fit=crop&w=800&q=75"
                alt="Onesha Group facility"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* rotating vertical-count badge, floating between the two images */}
            <div className="absolute left-[28%] top-[46%] -translate-x-1/2 -translate-y-1/2">
              <VerticalBadge />
            </div>

            {/* floating stat card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              custom={2}
              className="absolute -bottom-5 left-1 flex items-center gap-3 rounded-2xl border border-[#12203A]/[0.06] bg-white px-4 py-3.5 shadow-[0_20px_40px_-14px_rgba(18,32,58,0.25)] sm:left-4 sm:gap-3.5 sm:px-5 sm:py-4"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#B8874F]/[0.12] sm:h-10 sm:w-10">
                <span
                  className="text-[13px] font-semibold text-[#B8874F] sm:text-[14px]"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  JP
                </span>
              </div>
              <div className="leading-tight">
                <div className="text-[12.5px] font-semibold text-[#12203A] sm:text-[13.5px]">
                  Tokyo ⇄ Dhaka Corridor
                </div>
                <div
                  className="mt-0.5 text-[10.5px] uppercase tracking-[0.06em] text-[#12203A]/45 sm:text-[11px]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Group headquarters
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ============ RIGHT: content ============ */}
        <div className="relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            className="mb-3.5 flex items-center gap-2.5"
          >
            <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#B8874F]" />
            <span
              className="text-[11.5px] uppercase tracking-[0.08em] text-[#B8874F]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              About Us
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            className="mb-4 max-w-[19ch] text-balance text-[clamp(28px,4vw,42px)] font-semibold leading-[1.15] tracking-[-0.01em] text-[#12203A] sm:mb-5 sm:max-w-[21ch]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Trusted Growth Across the Japan–Bangladesh Corridor
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={2}
            className="mb-8 max-w-[52ch] text-[14.5px] leading-relaxed text-[#4B5468] sm:mb-9 sm:text-[15.5px]"
          >
            We believe durable growth comes from disciplined execution. With
            operating companies spanning mobility, technology, and
            manufacturing, we specialize in connecting Japanese capital with
            Bangladesh's fastest-growing industries.
          </motion.p>

          {/* feature pair */}
          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-7 grid grid-cols-1 gap-5 sm:mb-8 sm:grid-cols-2 sm:gap-6"
          >
            {FEATURES.map((f) => (
              <motion.div
                key={f.label}
                variants={cellReveal}
                className="flex items-start gap-3"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#B8874F]/[0.12] text-[#B8874F]">
                  {f.label === "Diversified Portfolio" ? (
                    <IconBuilding className="h-5 w-5" />
                  ) : (
                    <IconUsers className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <div className="mb-1 text-[13.5px] font-semibold text-[#12203A] sm:text-[14.5px]">
                    {f.label}
                  </div>
                  <div className="text-[12.5px] leading-snug text-[#4B5468] sm:text-[13px]">
                    {f.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mb-7 h-px w-full bg-[#12203A]/[0.08] sm:mb-8" />

          {/* checklist */}
          <motion.ul
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-9 space-y-3 sm:mb-10 sm:space-y-3.5"
          >
            {CHECKLIST.map((item) => (
              <motion.li
                key={item}
                variants={cellReveal}
                className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#3C4457] sm:text-[14.5px]"
              >
                <IconCheck className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[#B8874F]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={3}
          >
            <motion.a
              href="#"
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              className="group relative flex w-fit items-center gap-2 overflow-hidden rounded-full border border-[#0b1d33] bg-[#0b1d33] px-6 py-3 text-[13px] font-semibold text-[#f2c879] shadow-[0_6px_18px_-8px_rgba(11,29,51,0.5)] transition-shadow duration-300 hover:shadow-[0_10px_26px_-8px_rgba(11,29,51,0.55)] sm:px-7 sm:py-3.5 sm:text-[13.5px]"
            >
              <motion.span
                variants={{ hover: { x: "0%" } }}
                initial={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 bg-[#f2c879]"
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0b1d33]">
                Know More
              </span>
              <motion.svg
                variants={{ hover: { x: 3 } }}
                initial={{ x: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-10 h-3.5 w-3.5 transition-colors duration-300 group-hover:text-[#0b1d33]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;