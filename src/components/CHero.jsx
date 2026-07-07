import { motion } from "framer-motion";

/* ---------- dot-matrix world map (decorative, stylized) ---------- */
const WorldMapDots = () => (
  <svg
    className="absolute inset-0 h-full w-full opacity-[0.14]"
    viewBox="0 0 1000 400"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="dotGrid" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="1.1" cy="1.1" r="1.1" fill="#F2C879" />
      </pattern>
      <radialGradient id="mapFade" cx="50%" cy="45%" r="65%">
        <stop offset="0%" stopColor="#fff" stopOpacity="1" />
        <stop offset="75%" stopColor="#fff" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <mask id="mapMask">
        <rect width="1000" height="400" fill="url(#mapFade)" />
      </mask>
    </defs>

    <g mask="url(#mapMask)" fill="url(#dotGrid)">
      {/* North America */}
      <path d="M70 90 C110 60 170 55 210 75 C240 90 250 120 230 145 C215 165 200 190 165 200 C130 210 95 195 80 165 C65 135 55 115 70 90 Z" />
      {/* South America */}
      <path d="M210 220 C235 210 260 225 265 255 C270 290 255 330 235 355 C218 375 195 365 190 335 C185 300 190 250 210 220 Z" />
      {/* Europe */}
      <path d="M440 70 C470 55 510 60 530 80 C545 95 535 115 515 120 C490 128 460 122 445 105 C435 93 432 80 440 70 Z" />
      {/* Africa */}
      <path d="M450 135 C495 120 540 135 555 175 C570 215 560 265 535 305 C515 335 480 335 465 300 C450 265 445 220 445 180 C444 165 445 148 450 135 Z" />
      {/* Asia */}
      <path d="M560 55 C630 40 720 50 780 85 C820 108 830 140 800 160 C760 185 700 175 650 155 C605 138 570 120 555 95 C550 82 552 65 560 55 Z" />
      {/* Australia */}
      <path d="M760 260 C800 250 845 260 860 285 C872 305 855 325 825 328 C795 331 765 320 755 298 C750 285 752 268 760 260 Z" />
    </g>
  </svg>
);

const CHero = () => {
  return (
    <section className="relative flex max-h-[340px] min-h-[280px] items-center justify-center overflow-hidden bg-[#071321] px-6 py-16 text-white">
      {/* World map background */}
      <WorldMapDots />

      {/* Background Glow — layered for depth */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2C879]/[0.08] blur-[150px]" />
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-[60%] rounded-full bg-[#F2C879]/[0.06] blur-[90px]" />

      {/* Grain / noise texture for premium finish */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#F2C879]/25 bg-[#F2C879]/[0.08] px-4 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.32em] text-[#F2C879]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F2C879] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F2C879]" />
          </span>
          Get In Touch
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold tracking-wide text-transparent md:text-5xl"
        >
          Contact
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-4 h-px w-14 bg-gradient-to-r from-transparent via-[#F2C879]/60 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-xl text-[13.5px] leading-7 text-gray-400 md:text-[15px]"
        >
          We welcome meaningful conversations, strategic partnerships, and
          international business opportunities.
        </motion.p>
      </div>
    </section>
  );
};

export default CHero;
