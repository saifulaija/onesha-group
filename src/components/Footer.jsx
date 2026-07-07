// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// const navLinks = [
//   { label: "Thesis", href: "#thesis" },
//   { label: "Services", href: "#services" },
//   { label: "Roadmap", href: "#roadmap" },
//   { label: "Contact", href: "/contact" },
// ];

// const NavLink = ({ href, children }) => (
//   <a
//     href={href}
//     className="relative text-[13.5px] font-medium text-[#0b1d33] transition-colors duration-300 hover:text-[#d98e2b] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#d98e2b] after:transition-all after:duration-300 hover:after:w-full"
//   >
//     {children}
//   </a>
// );

// const Footer = () => {
//   return (
//     <div className="border-t border-[rgba(11,29,51,0.14)] bg-white">
//       <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 md:py-16">
//         <motion.footer
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           {/* ---------- top: brand + nav + CTA ---------- */}
//           <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
//             {/* Brand */}
//             <div className="max-w-[320px]">
//               <a href="/" className="group inline-flex items-baseline gap-3">
//                 <div
//                   className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center bg-[#0b1d33] text-[16px] font-semibold tracking-[-0.01em] text-[#f2c879] transition-transform duration-300 group-hover:scale-105"
//                   style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                 >
//                   O
//                 </div>
//                 <div>
//                   <h3 className="text-[15px] font-bold tracking-[0.01em] text-[#0b1d33]">
//                     ONESHA GROUP
//                   </h3>
//                   <p
//                     className="text-[11px] tracking-[0.04em] text-[#345d8a]"
//                     style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                   >
//                     OVERVIEW · FY2026
//                   </p>
//                 </div>
//               </a>

//               <p className="mt-5 text-[13.5px] leading-relaxed text-[#5c6577]">
//                 One license, one logistics engine — building a second export
//                 category on infrastructure Onesha already owns.
//               </p>
//             </div>

//             {/* Navigation */}
//             <div className="flex flex-col gap-4 sm:flex-row sm:gap-10 md:gap-14">
//               <div>
//                 <span
//                   className="mb-4 block text-[10.5px] uppercase tracking-[0.14em] text-[#345d8a]"
//                   style={{ fontFamily: "'JetBrains Mono', monospace" }}
//                 >
//                   Navigate
//                 </span>
//                 <nav className="flex flex-col gap-3">
//                   {navLinks.map((link) => (
//                     <NavLink key={link.label} href={link.href}>
//                       {link.label}
//                     </NavLink>
//                   ))}
//                 </nav>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="md:text-right">
//               <span
//                 className="mb-4 block text-[10.5px] uppercase tracking-[0.14em] text-[#345d8a] md:text-right"
//                 style={{ fontFamily: "'JetBrains Mono', monospace" }}
//               >
//                 Get In Touch
//               </span>
//               <a
//                 href="/contact"
//                 className="group inline-flex items-center gap-2 border border-[#0b1d33] px-5 py-2.5 text-[13px] font-semibold text-[#0b1d33] transition-colors duration-300 hover:bg-[#0b1d33] hover:text-[#eef1f4]"
//               >
//                 Talk to us
//                 <ArrowUpRight
//                   size={14}
//                   className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                 />
//               </a>
//             </div>
//           </div>

//           {/* ---------- divider ---------- */}
//           <div className="my-10 h-px w-full bg-[rgba(11,29,51,0.1)] md:my-12" />

//           {/* ---------- bottom bar ---------- */}
//           <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
//             <p className="text-[13px] font-semibold text-[#0b1d33]">
//               © {new Date().getFullYear()} ONESHA GROUP
//             </p>

//             <p
//               className="text-[11px] tracking-[0.04em] text-[#345d8a]"
//               style={{ fontFamily: "'JetBrains Mono', monospace" }}
//             >
//               INTERNAL STRATEGY DOCUMENT
//             </p>

//             <p className="text-[11px] text-slate-400">
//               Crafted with precision and strategic thinking.
//             </p>
//           </div>
//         </motion.footer>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Thesis", href: "#thesis" },
  { label: "Services", href: "#services" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "/contact" },
];

const NavLink = ({ href, children }) => {
  const handleClick = (e) => {
    // Normal page link
    if (!href.startsWith("#")) return;

    e.preventDefault();

    // If user is on another page (e.g. Contact)
    if (window.location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }

    // Already on Home page
    const target = document.querySelector(href);

    if (!target) return;

    const header = document.querySelector("header");
    const offset = header ? header.offsetHeight : 90;

    const top =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative text-[13.5px] font-medium text-[#0b1d33] transition-colors duration-300 hover:text-[#d98e2b] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#d98e2b] after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <div className="border-t border-[rgba(11,29,51,0.14)] bg-white">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 md:py-16">
        <motion.footer
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* ---------- top: brand + nav + CTA ---------- */}
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
            {/* Brand */}
            <div className="max-w-[320px]">
              <a href="/" className="group inline-flex items-baseline gap-3">
                <div
                  className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center bg-[#0b1d33] text-[16px] font-semibold tracking-[-0.01em] text-[#f2c879] transition-transform duration-300 group-hover:scale-105"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  O
                </div>

                <div>
                  <h3 className="text-[15px] font-bold tracking-[0.01em] text-[#0b1d33]">
                    ONESHA GROUP
                  </h3>

                  <p
                    className="text-[11px] tracking-[0.04em] text-[#345d8a]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    OVERVIEW · FY2026
                  </p>
                </div>
              </a>

              <p className="mt-5 text-[13.5px] leading-relaxed text-[#5c6577]">
                One license, one logistics engine — building a second export
                category on infrastructure Onesha already owns.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-10 md:gap-14">
              <div>
                <span
                  className="mb-4 block text-[10.5px] uppercase tracking-[0.14em] text-[#345d8a]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Navigate
                </span>

                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <NavLink key={link.label} href={link.href}>
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>

            {/* CTA */}
            <div className="md:text-right">
              <span
                className="mb-4 block text-[10.5px] uppercase tracking-[0.14em] text-[#345d8a] md:text-right"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Get In Touch
              </span>

              <a
                href="/contact"
                className="group inline-flex items-center gap-2 border border-[#0b1d33] px-5 py-2.5 text-[13px] font-semibold text-[#0b1d33] transition-colors duration-300 hover:bg-[#0b1d33] hover:text-[#eef1f4]"
              >
                Talk to us
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          <div className="my-10 h-px w-full bg-[rgba(11,29,51,0.1)] md:my-12" />

          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-[13px] font-semibold text-[#0b1d33]">
              © {new Date().getFullYear()} ONESHA GROUP
            </p>

            <p
              className="text-[11px] tracking-[0.04em] text-[#345d8a]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              INTERNAL STRATEGY DOCUMENT
            </p>

            <p className="text-[11px] text-slate-400">
              Crafted with precision and strategic thinking.
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Footer;