

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#thesis", label: "Thesis" },
  { href: "#market", label: "Market" },
  { href: "#services", label: "Services" },
  { href: "#model", label: "Positioning" },
  { href: "#history", label: "History" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#risks", label: "Risk" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("/");

  // Set correct default active link on mount + handle deep-linked sections
  useEffect(() => {
    const { pathname, hash } = window.location;

    if (hash) {
      setActive(hash);
      // wait a tick for layout/fonts to settle before scrolling
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
      });
    } else if (pathname === "/") {
      setActive("/");
    } else {
      setActive(null);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const handleLinkClick = (e, href) => {
  //   setOpen(false);

  //   // Plain route link (e.g. Home "/") — let it navigate normally
  //   if (!href.startsWith("#")) {
  //     setActive(href);
  //     return;
  //   }

  //   // Section link
  //   setActive(href);
  //   const onHomePage = window.location.pathname === "/";

  //   if (!onHomePage) {
  //     // Navigate to home page with the target hash; browser will
  //     // load "/" then jump to the section once it's rendered
  //     e.preventDefault();
  //     window.location.href = "/" + href;
  //     return;
  //   }

  //   // Already on home page — smooth scroll without a hard reload
  //   e.preventDefault();
  //   const el = document.querySelector(href);
  //   if (el) {
  //     el.scrollIntoView({ behavior: "smooth", block: "start" });
  //     window.history.pushState(null, "", href);
  //   }
  // };
const handleLinkClick = (e, href) => {
  // Home or Contact page
  if (!href.startsWith("#")) {
    setOpen(false);
    setActive(href);
    return;
  }

  e.preventDefault();
  setActive(href);

  // If not on home page
  if (window.location.pathname !== "/") {
    window.location.href = "/" + href;
    return;
  }

  const scrollToSection = () => {
    const el = document.querySelector(href);

    if (el) {
      const navbar = document.querySelector("header");
      const offset = navbar ? navbar.offsetHeight : 80;

      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", href);
    }
  };

  // Mobile
  if (window.innerWidth < 721) {
    setOpen(false);

    setTimeout(() => {
      requestAnimationFrame(scrollToSection);
    }, 280); // wait for menu closing animation
  } else {
    scrollToSection();
  }
};
  return (
    <motion.header
      initial={false}
      animate={{
        boxShadow: scrolled
          ? "0 10px 30px -14px rgba(11,29,51,0.25)"
          : "0 0 0 0 rgba(11,29,51,0)",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`sticky top-0 z-50 text-[#0b1d33] transition-colors duration-300 ${
        scrolled
          ? "bg-[#eef1f4]/85 backdrop-blur-md"
          : "bg-[#eef1f4] backdrop-blur-0"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <motion.nav
          initial={false}
          animate={{
            paddingTop: scrolled ? 14 : 22,
            paddingBottom: scrolled ? 14 : 22,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative flex items-center justify-between border-b border-[rgba(11,29,51,0.14)]"
        >
          {/* Brand */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="flex items-baseline gap-2.5"
          >
            <motion.div
              animate={{
                height: scrolled ? 30 : 34,
                width: scrolled ? 30 : 34,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-shrink-0 items-center justify-center bg-[#0b1d33] text-[16px] font-semibold tracking-[-0.01em] text-[#f2c879]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              O
            </motion.div>
            <div>
              <div className="text-[15px] font-bold tracking-[0.01em]">
                ONESHA GROUP
              </div>
              <div
                className="text-[11px] tracking-[0.04em] text-[#345d8a]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
              OVERVIEW · FY2026
              </div>
            </div>
          </a>

          {/* Desktop links + Contact CTA */}
          <div className="hidden items-center gap-8 min-[721px]:flex">
            <div className="flex gap-7 text-[13.5px] font-medium">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`group relative flex items-center gap-1.5 py-1 transition-opacity duration-150 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-[0.72] hover:opacity-100"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="h-1 w-1 flex-shrink-0 rounded-full bg-[#d98e2b]"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )}
                    <span>{link.label}</span>
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-[#d98e2b] transition-all duration-300 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Contact CTA */}
            <motion.a
              href="/contact"
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-[#0b1d33] bg-[#0b1d33] px-5 py-2.5 text-[13px] font-semibold text-[#f2c879] shadow-[0_6px_18px_-8px_rgba(11,29,51,0.5)] transition-shadow duration-300 hover:shadow-[0_10px_26px_-8px_rgba(11,29,51,0.55)]"
            >
              <motion.span
                variants={{ hover: { x: "0%" } }}
                initial={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 bg-[#f2c879]"
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0b1d33]">
                Contact
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
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-shrink-0 flex-col items-center justify-center gap-[5px] min-[721px]:hidden"
          >
            <motion.span
              className="h-[1.5px] w-5 bg-[#0b1d33]"
              animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-[1.5px] w-5 bg-[#0b1d33]"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="h-[1.5px] w-5 bg-[#0b1d33]"
              animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </motion.nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden min-[721px]:hidden"
            >
              <div className="flex flex-col gap-4 border-b border-[rgba(11,29,51,0.14)] py-5 text-[14px] font-medium">
                {navLinks.map((link) => {
                  const isActive = active === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center gap-2 transition-opacity duration-150 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-[0.8] hover:opacity-100"
                      }`}
                    >
                      {isActive && (
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#d98e2b]" />
                      )}
                      {link.label}
                    </a>
                  );
                })}

                {/* Contact CTA, mobile */}
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full border border-[#0b1d33] bg-[#0b1d33] px-5 py-3 text-[13.5px] font-semibold text-[#f2c879] shadow-[0_6px_18px_-8px_rgba(11,29,51,0.5)] transition-transform duration-200 active:scale-[0.97]"
                >
                  Contact
                  <svg
                    className="h-3.5 w-3.5"
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
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;