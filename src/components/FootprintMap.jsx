import { useMemo } from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Motion presets — consistent with site family                       */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* ------------------------------------------------------------------ */
/*  Dot-matrix world map — stylized continents from ellipse regions    */
/* ------------------------------------------------------------------ */
const CONTINENTS = [
  { cx: 175, cy: 155, rx: 105, ry: 68 }, // North America
  { cx: 150, cy: 120, rx: 55, ry: 35 }, // (Canada bulge)
  { cx: 230, cy: 320, rx: 50, ry: 90 }, // South America
  { cx: 480, cy: 105, rx: 58, ry: 42 }, // Europe
  { cx: 480, cy: 255, rx: 68, ry: 100 }, // Africa
  { cx: 660, cy: 130, rx: 150, ry: 75 }, // North/Central Asia
  { cx: 705, cy: 215, rx: 95, ry: 65 }, // South/SE Asia
  { cx: 820, cy: 320, rx: 58, ry: 38 }, // Australia
];

const pointInEllipse = (x, y, e) => {
  const dx = (x - e.cx) / e.rx;
  const dy = (y - e.cy) / e.ry;
  return dx * dx + dy * dy <= 1;
};

const useWorldDots = () =>
  useMemo(() => {
    const dots = [];
    const cols = 90;
    const rows = 44;
    const stepX = 1000 / cols;
    const stepY = 460 / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const jitterX = (Math.sin(r * 12.9898 + c * 78.233) * 43758.5453) % 1;
        const jitterY = (Math.cos(r * 4.898 + c * 7.23) * 12345.678) % 1;
        const x = c * stepX + stepX * 0.5 + jitterX * 2;
        const y = r * stepY + stepY * 0.5 + jitterY * 2;
        if (CONTINENTS.some((e) => pointInEllipse(x, y, e))) {
          dots.push({ x, y, key: `${r}-${c}` });
        }
      }
    }
    return dots;
  }, []);

/* ------------------------------------------------------------------ */
/*  Nodes — the real corridor (solid), and target reach (faint)        */
/* ------------------------------------------------------------------ */
const PRIMARY_NODES = [
  { x: 748, y: 148, label: "Japan" },
  { x: 668, y: 205, label: "Bangladesh" },
];

const REACH_NODES = [
  { x: 712, y: 232, label: "S.E. Asia" },
  { x: 640, y: 235, label: "S. Asia" },
];

const WorldMap = () => {
  const dots = useWorldDots();

  return (
    <svg
      viewBox="0 0 1000 460"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <style>{`
        @keyframes mapPulseA { to { offset-distance: 100%; } }
        .map-pulse { offset-path: path('M748,148 C720,175 690,190 668,205'); offset-distance: 0%; animation: mapPulseA 4s linear infinite; }
        @keyframes mapNodeGlow { 0%, 100% { opacity: 0.55; r: 5; } 50% { opacity: 1; r: 6.5; } }
        .map-node-primary { animation: mapNodeGlow 2.6s ease-in-out infinite; }
      `}</style>

      <g fill="#3d5170">
        {dots.map((d) => (
          <circle key={d.key} cx={d.x} cy={d.y} r="1.4" />
        ))}
      </g>

      {/* faint reach connectors */}
      {REACH_NODES.map((n) => (
        <line
          key={n.label}
          x1={668}
          y1={205}
          x2={n.x}
          y2={n.y}
          stroke="#5A7BA6"
          strokeWidth="1"
          strokeDasharray="2 5"
          opacity="0.4"
        />
      ))}

      {/* primary corridor arc */}
      <path
        d="M748,148 C720,175 690,190 668,205"
        fill="none"
        stroke="#f2c879"
        strokeWidth="1.6"
        strokeDasharray="2 6"
        opacity="0.85"
      />
      <circle className="map-pulse" r="3.5" fill="#f2c879" />

      {/* reach nodes */}
      {REACH_NODES.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="3.5" fill="#5A7BA6" opacity="0.55" />
          <text
            x={n.x}
            y={n.y - 10}
            textAnchor="middle"
            fontSize="11"
            fill="#8fa3c2"
            opacity="0.75"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {n.label}
          </text>
        </g>
      ))}

      {/* primary nodes */}
      {PRIMARY_NODES.map((n) => (
        <g key={n.label}>
          <circle
            className="map-node-primary"
            cx={n.x}
            cy={n.y}
            r="5"
            fill="#f2c879"
          />
          <circle
            cx={n.x}
            cy={n.y}
            r="8"
            fill="none"
            stroke="#f2c879"
            strokeWidth="1"
            opacity="0.35"
          />
          <text
            x={n.x}
            y={n.y - 14}
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill="#fff"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
const FootprintMap = () => {
  return (
    <section
      id="footprint"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#B8874F]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ============ header ============ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mx-auto mb-10 max-w-[640px] text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-2.5 sm:mb-5">
            <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#B8874F]" />
            <span
              className="text-[11px] uppercase tracking-[0.18em] text-[#B8874F] sm:text-[11.5px]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Global Footprint
            </span>
          </div>
          <h2
            className="text-balance text-[28px] leading-[1.15] text-[#12203A] sm:text-[38px] md:text-[42px]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Strategically positioned for the corridor ahead.
          </h2>
        </motion.div>

        {/* ============ browser-chrome map card ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-[1320px] overflow-hidden rounded-2xl border border-[#12203A]/[0.08] bg-white shadow-[0_40px_80px_-30px_rgba(18,32,58,0.35)]"
        >
          {/* chrome bar */}
          <div className="flex items-center justify-between border-b border-[#12203A]/[0.08] px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#12203A] text-[11px] font-semibold text-white sm:h-7 sm:w-7">
                O
              </span>
              <span
                className="text-[13px] font-medium text-[#12203A] sm:text-[14px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Onesha Group
              </span>
            </div>
            <div className="hidden items-center gap-5 text-[12px] text-[#5A6B85] sm:flex">
              <span>Home</span>
              <span>About</span>
              <span>Insights</span>
              <span>Careers</span>
              <span>Contact</span>
            </div>
          </div>

          {/* map area */}
          <div
            className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/8]"
            style={{ backgroundColor: "#0b1d33" }}
          >
            <WorldMap />

            {/* bottom gradient + tagline */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(11,29,51,0.95) 0%, rgba(11,29,51,0.5) 55%, transparent 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-5 text-center sm:px-8 sm:pb-8">
              <h3
                className="mb-1.5 text-[18px] text-white sm:text-[22px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Two Markets, One Corridor
              </h3>
              <p className="mx-auto max-w-[46ch] text-[12.5px] leading-relaxed text-white/60 sm:text-[13.5px]">
                Connecting Japan's supply to Bangladesh's demand — with room to
                extend further as the route proves out.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FootprintMap;
