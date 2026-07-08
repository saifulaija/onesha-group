import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    key: "motors",
    number: "01",
    category: "01 / 03 — MOTORS",
    eyebrow: "Onesha Motors — Vehicle Trade & Export",
    title: "From car decks to trusted roads.",
    description:
      "Onesha Motors sources, inspects, and exports used and surplus vehicles from Japan, moving them through a 10-category trade license into buyer networks across Bangladesh — built on condition reports, compliance, and reliable logistics.",
    image:
      "https://images.unsplash.com/photo-1772440223098-cc23f6f01209?fm=jpg&q=80&w=2400&auto=format&fit=crop",
    tint: "rgba(58,78,112,0.38)",
    ctaPrimary: "Explore Fleet",
    ctaSecondary: "View License",
  },
  {
    key: "tech",
    number: "02",
    category: "02 / 03 — TECH",
    eyebrow: "Onesha Tech — Electronics & Industrial Hardware",
    title: "Precision hardware, sourced with intent.",
    description:
      "Onesha Tech applies the same machinery to a second category: surplus electronics, industrial equipment, and precision components sourced from Japan's manufacturing base, exported into Bangladesh's growing digital economy.",
    image:
      "https://images.unsplash.com/photo-1765256931845-56da0f7db9cb?fm=jpg&q=80&w=2400&auto=format&fit=crop",
    tint: "rgba(24,92,92,0.38)",
    ctaPrimary: "Explore Catalog",
    ctaSecondary: "View License",
  },
  {
    key: "textile",
    number: "03",
    category: "03 / 03 — TEXTILE",
    eyebrow: "Onesha Textile — Apparel & Fabric Export",
    title: "From car decks to cargo containers.",
    description:
      "Onesha Group has spent years moving vehicles from Japan to buyers across Asia under a 10-category trade license. This strategy applies the same machinery to a third category: used and surplus Japanese textiles and apparel, exported into Bangladesh and neighboring markets.",
    image:
      "https://images.unsplash.com/photo-1759405327498-9cdb5313d078?fm=jpg&q=80&w=2400&auto=format&fit=crop",
    tint: "rgba(120,58,42,0.32)",
    ctaPrimary: "Explore Roadmap",
    ctaSecondary: "View Thesis",
  },
];

const AUTOPLAY_MS = 6000;

const fillVariants = { hover: { x: "0%" } };
const arrowVariants = { hover: { x: 3 } };

const CTAButton = ({ href = "#", children, variant = "solid" }) => {
  const isSolid = variant === "solid";
  return (
    <motion.a
      href={href}
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      className={
        "group relative flex items-center gap-2 overflow-hidden border px-6 sm:px-8 py-3 sm:py-3.5 text-[11px] sm:text-[12px] font-semibold tracking-[0.12em] uppercase transition-shadow duration-300 " +
        (isSolid
          ? "border-[#0A0F1E] bg-[#0A0F1E] text-[#C79A5A] shadow-[0_6px_18px_-8px_rgba(10,15,30,0.5)] hover:shadow-[0_10px_26px_-8px_rgba(10,15,30,0.55)]"
          : "border-[#B08D45]/70 bg-transparent text-[#F5F1E6] shadow-[0_6px_18px_-8px_rgba(176,141,69,0.25)] hover:shadow-[0_10px_26px_-8px_rgba(176,141,69,0.35)]")
      }
    >
      <motion.span
        variants={fillVariants}
        initial={{ x: "-100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={
          "absolute inset-0 " + (isSolid ? "bg-[#C79A5A]" : "bg-[#B08D45]")
        }
      />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A0F1E]">
        {children}
      </span>
      <motion.svg
        variants={arrowVariants}
        initial={{ x: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative z-10 h-3.5 w-3.5 transition-colors duration-300 group-hover:text-[#0A0F1E]"
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
  );
};

const NavArrow = ({ direction = "next", onClick }) => (
  <button
    onClick={onClick}
    aria-label={direction === "next" ? "Next slide" : "Previous slide"}
    className="group absolute top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center border border-[#B08D45]/50 bg-[#0A0F1E]/40 backdrop-blur-sm hover:bg-[#B08D45] hover:border-[#B08D45] transition-colors duration-300"
    style={direction === "next" ? { right: "1rem" } : { left: "1rem" }}
  >
    <svg
      className="h-4 w-4 sm:h-5 sm:w-5 text-[#F5F1E6] group-hover:text-[#0A0F1E] transition-colors duration-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "next" ? (
        <polyline points="9 6 15 12 9 18" />
      ) : (
        <polyline points="15 6 9 12 15 18" />
      )}
    </svg>
  </button>
);

const HHero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex((prev) => (i + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, index]);

  const slide = SLIDES[index];

  return (
    <div
      className="relative w-full h-screen min-h-[560px] overflow-hidden bg-[#0D1424] flex items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');
        .h-serif { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .h-mono { font-family: 'IBM Plex Mono', monospace; }
        .h-sans { font-family: 'Inter', sans-serif; }
        .stitch-rule {
          background-image: repeating-linear-gradient(to right, #B08D45 0, #B08D45 6px, transparent 6px, transparent 12px);
          height: 1px;
        }
        @keyframes kenburns {
          0%   { transform: scale(1); }
          100% { transform: scale(1.14); }
        }
        .bg-kenburns {
          animation: kenburns 7.5s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .bg-kenburns { animation: none; }
        }
      `}</style>

      {/* background photographs, crossfade + slow zoom + per-industry tint */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-kenburns"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{ backgroundColor: slide.tint }}
          />
        </motion.div>
      </AnimatePresence>

      {/* cinematic layered overlay: uniform wash + spotlight behind copy + top/bottom vignette */}
      <div className="absolute inset-0 bg-[#0A0F1E]/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_46%,rgba(8,13,26,0.8)_0%,rgba(8,13,26,0.4)_55%,rgba(8,13,26,0.1)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/55 via-transparent to-[#0A0F1E]/70" />

      {/* prev / next controls */}
      <NavArrow direction="prev" onClick={prev} />
      <NavArrow direction="next" onClick={next} />

      {/* content, centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-14 sm:px-16 md:px-12 py-24 sm:py-28 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            {/* giant ghost numeral — signature element */}
            <span
              className="h-serif pointer-events-none select-none absolute -top-6 sm:-top-10 md:-top-16 left-1/2 -translate-x-1/2 text-[110px] sm:text-[160px] md:text-[220px] font-light text-[#F5F1E6]/[0.06] leading-none"
              aria-hidden="true"
            >
              {slide.number}
            </span>

            <span className="relative h-mono text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-[#C79A5A] uppercase mb-5 sm:mb-6 px-2">
              {slide.eyebrow}
            </span>

            <div className="stitch-rule w-14 sm:w-16 mb-6 sm:mb-8 mx-auto relative" />

            <h1 className="relative h-serif text-[#F5F1E6] text-[32px] leading-[1.15] sm:text-[44px] md:text-[64px] md:leading-[1.08] font-light mb-6 sm:mb-8 px-2">
              {slide.title}
            </h1>

            <p className="relative h-sans text-[#CBD0DE] text-[14px] sm:text-[15px] md:text-[17px] leading-[1.7] md:leading-[1.75] max-w-[640px] mb-8 sm:mb-12 px-2">
              {slide.description}
            </p>

            <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto px-4 sm:px-0">
              <CTAButton href="#" variant="solid">
                {slide.ctaPrimary}
              </CTAButton>
              <CTAButton href="#" variant="outline">
                {slide.ctaSecondary}
              </CTAButton>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* slide indicators */}
        <div className="flex items-center gap-3 mt-10 sm:mt-14">
          {SLIDES.map((s, i) => (
            <button
              key={s.key}
              onClick={() => goTo(i)}
              aria-label={`Go to ${s.key} slide`}
              className="relative h-1.5 w-8 sm:w-10 bg-[#3A4E82]/50 overflow-hidden"
            >
              {i === index && (
                <motion.div
                  key={paused ? `paused-${slide.key}` : slide.key}
                  className="absolute inset-y-0 left-0 bg-[#B08D45]"
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? "0%" : "100%" }}
                  transition={{
                    duration: paused ? 0 : AUTOPLAY_MS / 1000,
                    ease: "linear",
                  }}
                />
              )}
              {i !== index && (
                <div className="absolute inset-0 bg-[#3A4E82]/50" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* manifest footer strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#3A4E82]/40 bg-[#0A0F1E]/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 py-3 sm:py-4 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-2">
          <div className="h-mono text-[9px] sm:text-[10px] tracking-[0.1em] text-[#8892AB]">
            ROUTE&nbsp;{" "}
            <span className="text-[#CBD0DE]">JAPAN → BANGLADESH</span>
          </div>
          <div className="h-mono text-[9px] sm:text-[10px] tracking-[0.1em] text-[#8892AB]">
            CATEGORY&nbsp;{" "}
            <span className="text-[#CBD0DE]">{slide.category}</span>
          </div>
          <div className="h-mono text-[9px] sm:text-[10px] tracking-[0.1em] text-[#8892AB]">
            STATUS&nbsp; <span className="text-[#C79A5A]">ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HHero;
