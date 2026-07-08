// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 16 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
//   }),
// };

// const CMap = () => {
//   return (
//     <section className=" bg-[#EEF1F6] py-16 sm:py-20 md:py-[80px]">
//       <div className="mx-auto max-w-[1320px] px-6 sm:px-8">
//         {/* Head */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.8 }}
//           variants={fadeUp}
//           custom={0}
//           className="mb-3.5 flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.16em] text-[#5C6577] before:block before:h-2 before:w-2 before:flex-shrink-0 before:bg-[#B85C38]"
//         >
//           Location
//         </motion.div>

//         <motion.h2
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.6 }}
//           variants={fadeUp}
//           custom={1}
//           className="max-w-[560px] font-semibold tracking-[-0.01em] text-[#16203A]"
//           style={{
//             fontFamily: "'Fraunces',serif",
//             fontSize: "clamp(24px,3vw,34px)",
//             lineHeight: 1.15,
//           }}
//         >
//           Rooted in Tokyo.
//         </motion.h2>

//         <motion.p
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.8 }}
//           variants={fadeUp}
//           custom={2}
//           className="mt-3 max-w-[520px] text-[15px] text-[#5C6577]"
//         >
//           Our Japan desk sits at the head of the corridor — sourcing,
//           partnerships, and group strategy run from here.
//         </motion.p>

//         {/* Map card */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeUp}
//           custom={3}
//           className="relative mt-9 overflow-hidden rounded-[6px] border border-[rgba(22,32,58,0.12)] bg-white shadow-[0_20px_50px_-24px_rgba(14,22,38,0.25)] sm:mt-11"
//         >
//           <div className="relative h-[320px] w-full sm:h-[400px] md:h-[460px]">
//             <iframe
//               title="Onesha Group — Tokyo, Japan office location"
//               src="https://www.google.com/maps?q=Tokyo,Japan&output=embed"
//               className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.02] saturate-[0.9]"
//               style={{ border: 0 }}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//             <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(22,32,58,0.06)]" />
//           </div>

//           {/* Info overlay — right side on desktop */}
//           <div className="relative border-t border-[rgba(22,32,58,0.12)] bg-white p-5 sm:absolute sm:right-5 sm:top-5 sm:w-[260px] sm:rounded-[4px] sm:border sm:p-5 sm:shadow-[0_16px_40px_-16px_rgba(14,22,38,0.35)]">
//             <div className="mb-1 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#8A6C42]">
//               <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C79A5B]" />
//               Japan HQ
//             </div>
//             <div
//               className="text-[16px] font-semibold text-[#16203A]"
//               style={{ fontFamily: "'Fraunces',serif" }}
//             >
//               Tokyo, Japan
//             </div>
//             <p className="mt-2 text-[12.5px] leading-relaxed text-[#5C6577]">
//               Head office for sourcing, group strategy, and the
//               Japan&ndash;Bangladesh corridor.
//             </p>
//             <a
//               href="https://www.google.com/maps?q=Tokyo,Japan"
//               target="_blank"
//               rel="noreferrer"
//               className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11.5px] font-medium text-[#16203A] transition-colors duration-150 hover:text-[#8A6C42]"
//             >
//               Open in Google Maps
//               <svg
//                 className="h-3 w-3"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.25"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="5" y1="12" x2="19" y2="12" />
//                 <polyline points="12 5 19 12 12 19" />
//               </svg>
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CMap;
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const CMap = () => {
  return (
    <section className="bg-[#EEF1F6] pb-16 pt-8 sm:pb-20 sm:pt-8 md:pb-[80px] md:pt-10">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8">
        {/* Head */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeUp}
          custom={0}
          className="mb-3.5 flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.16em] text-[#5C6577] before:block before:h-2 before:w-2 before:flex-shrink-0 before:bg-[#B85C38]"
        >
          Location
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          custom={1}
          className="max-w-[560px] font-semibold tracking-[-0.01em] text-[#16203A]"
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(24px,3vw,34px)",
            lineHeight: 1.15,
          }}
        >
          Rooted in Tokyo.
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeUp}
          custom={2}
          className="mt-3 max-w-[520px] text-[15px] text-[#5C6577]"
        >
          Our Japan desk sits at the head of the corridor — sourcing,
          partnerships, and group strategy run from here.
        </motion.p>

        {/* Map card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={3}
          className="relative mt-9 overflow-hidden rounded-[6px] border border-[rgba(22,32,58,0.12)] bg-white shadow-[0_20px_50px_-24px_rgba(14,22,38,0.25)] sm:mt-11"
        >
          <div className="relative h-[320px] w-full sm:h-[400px] md:h-[460px]">
            <iframe
              title="Onesha Group — Tokyo, Japan office location"
              src="https://www.google.com/maps?q=Tokyo,Japan&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.02] saturate-[0.9]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(22,32,58,0.06)]" />
          </div>

          {/* Info overlay — right side on desktop */}
          <div className="relative border-t border-[rgba(22,32,58,0.12)] bg-white p-5 sm:absolute sm:right-5 sm:top-5 sm:w-[260px] sm:rounded-[4px] sm:border sm:p-5 sm:shadow-[0_16px_40px_-16px_rgba(14,22,38,0.35)]">
            <div className="mb-1 flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#8A6C42]">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C79A5B]" />
              Japan HQ
            </div>
            <div
              className="text-[16px] font-semibold text-[#16203A]"
              style={{ fontFamily: "'Fraunces',serif" }}
            >
              Tokyo, Japan
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-[#5C6577]">
              Head office for sourcing, group strategy, and the
              Japan&ndash;Bangladesh corridor.
            </p>
            <a
              href="https://www.google.com/maps?q=Tokyo,Japan"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11.5px] font-medium text-[#16203A] transition-colors duration-150 hover:text-[#8A6C42]"
            >
              Open in Google Maps
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CMap;