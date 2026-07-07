// import { motion } from "framer-motion";

// const CMap = () => {
//   return (
//     <section className="relative overflow-hidden border-t border-[rgba(11,29,51,0.14)] bg-[#eef1f4] py-16 sm:py-20 lg:py-24">
//       {/* subtle dot texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.5]"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(11,29,51,0.06) 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       />

//       <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
//         {/* ---------- Head ---------- */}
//         <motion.div
//           initial={{ opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.6 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="mb-12 max-w-[640px] sm:mb-14"
//         >
//           <span
//             className="mb-3.5 flex items-center gap-2 text-[11.5px] uppercase tracking-[0.14em] text-[#d98e2b]"
//             style={{ fontFamily: "'JetBrains Mono', monospace" }}
//           >
//             <span className="h-[7px] w-[7px] flex-shrink-0 bg-[#d98e2b]" />
//             Our Location
//           </span>
//           <h2
//             className="text-[clamp(26px,3.6vw,42px)] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0b1d33]"
//             style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//           >
//             Find us in Japan.
//           </h2>
//           <p className="mt-4 max-w-[540px] text-[15px] leading-relaxed text-[#345d8a]">
//             Strategically positioned to support businesses across Japan through
//             innovation, excellence, and long-term partnerships.
//           </p>
//         </motion.div>

//         {/* ---------- Map + Info panel ---------- */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.15 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="grid grid-cols-1 border border-[rgba(11,29,51,0.14)] bg-white lg:grid-cols-[1fr_360px]"
//         >
//           {/* Map */}
//           <div className="relative order-1 h-[320px] sm:h-[420px] lg:order-1 lg:h-auto lg:min-h-[460px]">
//             <iframe
//               title="Japan Map"
//               src="https://maps.google.com/maps?q=Japan&t=&z=5&ie=UTF8&iwloc=&output=embed"
//               loading="lazy"
//               allowFullScreen
//               className="absolute inset-0 h-full w-full"
//               style={{
//                 border: 0,
//                 filter: "grayscale(45%) contrast(108%) saturate(75%)",
//               }}
//             />
//             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1d33]/10 via-transparent to-transparent" />
//           </div>

//           {/* Info panel — dark, flat, editorial */}
//           <div className="relative order-2 flex flex-col justify-between border-t border-[rgba(11,29,51,0.14)] bg-[#0b1d33] p-8 text-white sm:p-9 lg:order-2 lg:border-l lg:border-t-0">
//             <div
//               className="pointer-events-none absolute inset-0 opacity-[0.05]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
//                 backgroundSize: "28px 28px",
//               }}
//             />

//             <div className="relative">
//               {/* Brand */}
//               <div className="flex items-baseline gap-3 border-b border-white/10 pb-6">
//                 <div
//                   className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center bg-[#f2c879] text-[16px] font-semibold text-[#0b1d33]"
//                   style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                 >
//                   O
//                 </div>
//                 <div>
//                   <h3 className="text-[15px] font-bold tracking-[0.01em] text-white">
//                     ONESHA GROUP
//                   </h3>
//                   <p
//                     className="text-[10.5px] tracking-[0.06em] text-white/50"
//                     style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                   >
//                     STRATEGY / CATEGORY 02
//                   </p>
//                 </div>
//               </div>

//               {/* Details */}
//               <div className="mt-7 space-y-6">
//                 <div>
//                   <span
//                     className="block text-[10px] uppercase tracking-[0.14em] text-[#f2c879]"
//                     style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                   >
//                     Head Office
//                   </span>
//                   <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/75">
//                     Tokyo, Japan
//                   </p>
//                 </div>
//                 <div>
//                   <span
//                     className="block text-[10px] uppercase tracking-[0.14em] text-[#f2c879]"
//                     style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                   >
//                     Email
//                   </span>
//                   <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/75">
//                     contact@oneshagroup.com
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <a
//               href="https://maps.google.com/?q=Japan"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative mt-9 inline-flex w-full items-center justify-between gap-3 border border-[#f2c879]/40 px-5 py-3.5 text-[13px] font-semibold text-[#f2c879] transition-colors duration-300 hover:bg-[#f2c879] hover:text-[#0b1d33]"
//             >
//               Open in Google Maps
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 →
//               </span>
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CMap;

import { motion } from "framer-motion";

const CMap = () => {
  return (
    <section className="relative overflow-hidden border-t border-[rgba(11,29,51,0.14)] bg-[#eef1f4] py-16 sm:py-20 lg:py-24">
      {/* subtle dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,29,51,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ---------- Head ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-[640px] sm:mb-14"
        >
          <span
            className="mb-3.5 flex items-center gap-2 text-[11.5px] uppercase tracking-[0.14em] text-[#d98e2b]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="h-[7px] w-[7px] flex-shrink-0 bg-[#d98e2b]" />
            Our Location
          </span>
          <h2
            className="text-[clamp(26px,3.6vw,42px)] font-semibold leading-[1.1] tracking-[-0.01em] text-[#0b1d33]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Find us in Japan.
          </h2>
          <p className="mt-4 max-w-[540px] text-[15px] leading-relaxed text-[#345d8a]">
            Strategically positioned to support businesses across Japan through
            innovation, excellence, and long-term partnerships.
          </p>
        </motion.div>

        {/* ---------- Map + Info panel ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 border border-[rgba(11,29,51,0.14)] bg-white lg:grid-cols-[1fr_360px]"
        >
          {/* Map */}
          <div className="relative order-1 h-[320px] sm:h-[420px] lg:order-1 lg:h-auto lg:min-h-[460px]">
            <iframe
              title="Japan Map"
              src="https://maps.google.com/maps?q=Japan&t=&z=5&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              style={{
                border: 0,
                filter: "grayscale(45%) contrast(108%) saturate(75%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1d33]/10 via-transparent to-transparent" />
          </div>

          {/* Info panel — dark, flat, editorial */}
          <div className="relative order-2 flex flex-col justify-between border-t border-[rgba(11,29,51,0.14)] bg-[#0b1d33] p-8 text-white sm:p-9 lg:order-2 lg:border-l lg:border-t-0">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative">
              {/* Brand */}
              <div className="flex items-baseline gap-3 border-b border-white/10 pb-6">
                <div
                  className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center bg-[#f2c879] text-[16px] font-semibold text-[#0b1d33]"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  O
                </div>
                <div>
                  <h3 className="text-[15px] font-bold tracking-[0.01em] text-white">
                    ONESHA GROUP
                  </h3>
                  <p
                    className="text-[10.5px] tracking-[0.06em] text-white/50"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    STRATEGY / CATEGORY 02
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-7 space-y-6">
                <div>
                  <span
                    className="block text-[10px] uppercase tracking-[0.14em] text-[#f2c879]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Head Office
                  </span>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/75">
                    Tokyo, Japan
                  </p>
                </div>
                <div>
                  <span
                    className="block text-[10px] uppercase tracking-[0.14em] text-[#f2c879]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Email
                  </span>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/75">
                    hello@oneshagroup.com
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Japan"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-9 inline-flex w-full items-center justify-between gap-3 border border-[#f2c879]/40 px-5 py-3.5 text-[13px] font-semibold text-[#f2c879] transition-colors duration-300 hover:bg-[#f2c879] hover:text-[#0b1d33]"
            >
              Open in Google Maps
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>

        {/* ---------- Direct details strip ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-px"
        >
          <span
            className="mb-3 block text-[10.5px] uppercase tracking-[0.14em] text-[#345d8a]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Direct Details
          </span>

          <div className="grid grid-cols-1 gap-px border border-[rgba(11,29,51,0.14)] bg-[rgba(11,29,51,0.14)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Email",
                value: "hello@oneshagroup.com",
                href: "mailto:hello@oneshagroup.com",
              },
              {
                label: "Phone",
                value: "+880 00 000000",
                href: "tel:+8800000000",
              },
              { label: "Location", value: "Tokyo, Japan" },
              { label: "Hours", value: "Sun – Thu, 10:00–18:00 (GMT+6)" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-6">
                <span
                  className="block text-[10px] uppercase tracking-[0.12em] text-[#d98e2b]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-[14px] leading-relaxed text-[#0b1d33] transition-colors hover:text-[#d98e2b]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-[14px] leading-relaxed text-[#0b1d33]">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------- By vertical ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8"
        >
          <span
            className="mb-3 block text-[10.5px] uppercase tracking-[0.14em] text-[#345d8a]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            By Vertical
          </span>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {[
              {
                name: "Onesha Motors",
                email: "motors@oneshagroup.com",
                accent: "#B85C38",
              },
              {
                name: "Onesha Tech",
                email: "tech@oneshagroup.com",
                accent: "#3E9280",
              },
              {
                name: "Onesha Textile",
                email: "textile@oneshagroup.com",
                accent: "#5A67A6",
              },
            ].map((v) => (
              <a
                key={v.name}
                href={`mailto:${v.email}`}
                className="group flex items-center gap-3 border border-[rgba(11,29,51,0.14)] bg-white px-5 py-3.5 transition-colors duration-300 hover:border-[rgba(11,29,51,0.3)] sm:flex-1"
              >
                <span
                  className="h-[7px] w-[7px] flex-shrink-0"
                  style={{ background: v.accent }}
                />
                <span className="text-[13.5px] font-semibold text-[#0b1d33]">
                  {v.name}
                </span>
                <span
                  className="ml-auto text-[12px] text-[#345d8a] transition-colors group-hover:text-[#d98e2b]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {v.email}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CMap;