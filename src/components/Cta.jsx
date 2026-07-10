// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// /* ------------------------------------------------------------------ */
// /*  Motion presets — consistent with site family                       */
// /* ------------------------------------------------------------------ */
// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" },
//   }),
// };

// const Cta = () => {
//   return (
//     <>
//       {/* ============ CTA ============ */}
//       <section
//         className="relative w-full overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:py-32"
//         style={{
//           background: "linear-gradient(180deg, #0B1B2B, #132A40)",
//         }}
//       >
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.5]"
//           style={{
//             backgroundImage:
//               "radial-gradient(rgba(255,255,255,0.045) 0.6px, transparent 0.6px)",
//             backgroundSize: "14px 14px",
//           }}
//         />
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A7BA6]/[0.14] blur-[140px] sm:h-[560px] sm:w-[560px] md:h-[620px] md:w-[620px]" />

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.4 }}
//           className="relative mx-auto max-w-[760px] text-center"
//         >
//           <motion.h2
//             variants={fadeUp}
//             custom={0}
//             className="mb-6 text-balance text-[28px] leading-[1.22] text-white sm:mb-7 sm:text-[36px] md:text-[46px]"
//             style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//           >
//             The infrastructure exists.
//             <br />
//             The second category just needs a first container.
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             custom={1}
//             className="mx-auto mb-9 max-w-xl text-[14px] leading-relaxed text-white/60 sm:mb-10 sm:text-[15px]"
//           >
//             This is a strategy brief for internal review and partner
//             conversations, not a finished operating plan. Figures should be
//             replaced with real quotes as sourcing partners are confirmed.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             custom={2}
//             className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
//           >
//             {/* primary — sweep-fill on hover */}
//             <a
//               href="#thesis"
//               className="group/btn relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-[#B8874F] px-6 py-3.5 text-[13.5px] font-medium text-white shadow-[0_10px_26px_-12px_rgba(184,135,79,0.55)] transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-14px_rgba(184,135,79,0.55)] sm:px-7 sm:text-[14px]"
//             >
//               <span className="absolute inset-0 left-0 -z-10 w-0 bg-white transition-all duration-450 ease-out group-hover/btn:w-full" />
//               <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#0B1B2B]">
//                 Review the thesis
//               </span>
//               <ArrowRight
//                 size={15}
//                 strokeWidth={2}
//                 className="relative z-10 transition-all duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:text-[#0B1B2B]"
//               />
//             </a>

//             {/* ghost — sweep-fill on hover */}
//             <a
//               href="#roadmap"
//               className="group/ghost relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-[1.5px] border-white/35 bg-transparent px-6 py-3.5 text-[13.5px] font-medium text-white transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.4)] sm:px-7 sm:text-[14px]"
//             >
//               <span className="absolute inset-0 left-0 -z-10 w-0 bg-white transition-all duration-450 ease-out group-hover/ghost:w-full" />
//               <span className="relative z-10 transition-colors duration-300 group-hover/ghost:text-[#0B1B2B]">
//                 See the roadmap
//               </span>
//             </a>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ============ seam divider ============ */}
//       <div
//         className="relative h-px w-full"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(184,135,79,0.55) 50%, transparent)",
//         }}
//       >
//         <span
//           className="absolute left-1/2 top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#B8874F]"
//           style={{
//             boxShadow: "0 0 0 4px #0B1B2B, 0 0 14px rgba(184,135,79,0.6)",
//           }}
//         />
//       </div>

//       {/* ============ footer ============ */}
//       <footer className="w-full bg-[#0B1B2B] px-5 py-6 sm:px-8">
//         <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
//           <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
//             <span
//               className="rounded px-2 py-1 text-[10px] uppercase tracking-[0.14em]"
//               style={{
//                 backgroundColor: "rgba(184,135,79,0.15)",
//                 color: "#B8874F",
//                 fontFamily: "'JetBrains Mono', monospace",
//               }}
//             >
//               Internal
//             </span>
//             <span
//               className="text-[11px] uppercase tracking-[0.1em] text-white/55"
//               style={{ fontFamily: "'JetBrains Mono', monospace" }}
//             >
//               Onesha Group — internal strategy document
//             </span>
//           </div>
//           <span
//             className="text-[11px] uppercase tracking-[0.1em] text-[#B8874F]"
//             style={{ fontFamily: "'JetBrains Mono', monospace" }}
//           >
//             Prepared as a working draft, July 2026
//           </span>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Cta;

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Motion presets — consistent with site family                       */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" },
  }),
};

/* ------------------------------------------------------------------ */
/*  Anchor nav helper                                                   */
/*  Fixes the bug where this section is reused as a footer on other    */
/*  pages: a bare href="#thesis" only scrolls within the CURRENT page, */
/*  so on any page that doesn't have that section it does nothing.     */
/*  We instead always route to the real path ("/#thesis") — on the     */
/*  home page we intercept the click and smooth-scroll directly (no    */
/*  full reload flicker); on any other page we let the browser do a    */
/*  normal navigation to "/" and land on the anchor.                    */
/* ------------------------------------------------------------------ */
const handleAnchorNav = (e, id) => {
  const onHome =
    typeof window !== "undefined" &&
    (window.location.pathname === "/" || window.location.pathname === "");

  if (onHome) {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
    // if the element isn't found even on "/", fall through to default nav
  }
  // not on home → let the browser navigate to "/#id" normally
};

const Cta = () => {
  return (
    <>
      {/* ============ CTA ============ */}
      <section
        className="relative w-full overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:py-28 lg:py-32"
        style={{
          background: "linear-gradient(180deg, #0B1B2B, #132A40)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.045) 0.6px, transparent 0.6px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A7BA6]/[0.14] blur-[140px] sm:h-[560px] sm:w-[560px] md:h-[620px] md:w-[620px]" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative mx-auto max-w-[760px] text-center"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="mb-6 text-balance text-[28px] leading-[1.22] text-white sm:mb-7 sm:text-[36px] md:text-[46px]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            The infrastructure exists.
            <br />
            The second category just needs a first container.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mx-auto mb-9 max-w-xl text-[14px] leading-relaxed text-white/60 sm:mb-10 sm:text-[15px]"
          >
            This is a strategy brief for internal review and partner
            conversations, not a finished operating plan. Figures should be
            replaced with real quotes as sourcing partners are confirmed.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
          >
            {/* primary — sweep-fill on hover */}
            <a
              href="/#thesis"
              onClick={(e) => handleAnchorNav(e, "thesis")}
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-[#B8874F] px-6 py-3.5 text-[13.5px] font-medium text-white shadow-[0_10px_26px_-12px_rgba(184,135,79,0.55)] transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-14px_rgba(184,135,79,0.55)] sm:px-7 sm:text-[14px]"
            >
              <span className="absolute inset-0 left-0 -z-10 w-0 bg-white transition-all duration-450 ease-out group-hover/btn:w-full" />
              <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#0B1B2B]">
                Review the thesis
              </span>
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="relative z-10 transition-all duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:text-[#0B1B2B]"
              />
            </a>

            {/* ghost — sweep-fill on hover */}
            <a
              href="/#roadmap"
              onClick={(e) => handleAnchorNav(e, "roadmap")}
              className="group/ghost relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full border-[1.5px] border-white/35 bg-transparent px-6 py-3.5 text-[13.5px] font-medium text-white transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.4)] sm:px-7 sm:text-[14px]"
            >
              <span className="absolute inset-0 left-0 -z-10 w-0 bg-white transition-all duration-450 ease-out group-hover/ghost:w-full" />
              <span className="relative z-10 transition-colors duration-300 group-hover/ghost:text-[#0B1B2B]">
                See the roadmap
              </span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ seam divider ============ */}
      <div
        className="relative h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(184,135,79,0.55) 50%, transparent)",
        }}
      >
        <span
          className="absolute left-1/2 top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#B8874F]"
          style={{
            boxShadow: "0 0 0 4px #0B1B2B, 0 0 14px rgba(184,135,79,0.6)",
          }}
        />
      </div>

      {/* ============ footer ============ */}
      <footer className="w-full bg-[#0B1B2B] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <span
              className="rounded px-2 py-1 text-[10px] uppercase tracking-[0.14em]"
              style={{
                backgroundColor: "rgba(184,135,79,0.15)",
                color: "#B8874F",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Internal
            </span>
            <span
              className="text-[11px] uppercase tracking-[0.1em] text-white/55"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Onesha Group — internal strategy document
            </span>
          </div>
          <span
            className="text-[11px] uppercase tracking-[0.1em] text-[#B8874F]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Prepared as a working draft, July 2026
          </span>
        </div>
      </footer>
    </>
  );
};

export default Cta;