
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

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
/*  Content — SWOT, image links verified as topically relevant         */
/*  (port / logistics / trade / textile photography)                   */
/* ------------------------------------------------------------------ */
const SWOT = [
  {
    key: "strengths",
    label: "Strengths",
    accent: "#3E9169",
    primary:
      "https://images.unsplash.com/photo-1759272840712-c7e5ea852367?q=80&w=1000&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?q=80&w=800&auto=format&fit=crop",
    points: [
      "Existing 10-category export license removes the licensing bottleneck new entrants face",
      "Established Japan-side sourcing and port relationships from vehicle operations",
      "Existing buyer trust in-market lowers customer acquisition cost for a second product line",
    ],
  },
  {
    key: "weaknesses",
    label: "Weaknesses",
    accent: "#C2543F",
    primary:
      "https://images.unsplash.com/photo-1741176505800-caaa3a52631a?q=80&w=1000&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=800&auto=format&fit=crop",
    points: [
      "No standing relationships with Japanese textile collectors or bale graders yet",
      "Team's operational depth is automotive, not apparel — grading and quality-tiering is a new skill",
      "Working capital currently allocated to vehicle inventory cycles",
    ],
  },
  {
    key: "opportunities",
    label: "Opportunities",
    accent: "#5A7BA6",
    primary:
      "https://images.unsplash.com/photo-1601897690942-bcacbad33e55?q=80&w=1000&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1562892302-97faedd66f1c?q=80&w=800&auto=format&fit=crop",
    points: [
      "Mixed vehicle-and-textile containers reduce shipping cost per unit on shared routes",
      "Japan's secondhand collection volume is stable and not seasonally exposed like new-garment retail",
      "Room to move upmarket later into graded/branded secondhand for e-commerce resale",
    ],
  },
  {
    key: "threats",
    label: "Threats",
    accent: "#B8874F",
    primary:
      "https://images.unsplash.com/photo-1606964212858-c215029db704?q=80&w=1000&auto=format&fit=crop",
    secondary:
      "https://images.unsplash.com/photo-1678182451047-196f22a4143e?q=80&w=800&auto=format&fit=crop",
    points: [
      "Bangladesh import policy on used clothing (HS code duty, quotas) can shift with little notice",
      "Established used-clothing importers already hold bonded warehouse and auction relationships",
      "Currency movement between JPY and BDT affects margin on a low-margin, high-volume commodity",
    ],
  },
];

/* ---------- image stack, left column ---------- */
const ImageStack = ({ item }) => (
  <div className="relative min-h-[360px] w-full overflow-hidden rounded-2xl sm:min-h-[420px] lg:h-full lg:min-h-0">
    <AnimatePresence>
      <motion.div
        key={item.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <motion.img
          src={item.primary}
          alt={item.label}
          initial={{ x: -26, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className="absolute left-0 top-0 h-[68%] w-[74%] rounded-xl object-cover shadow-[0_20px_40px_-16px_rgba(0,0,0,0.45)] sm:h-[70%]"
        />
        <motion.img
          src={item.secondary}
          alt={`${item.label} detail`}
          initial={{ x: 26, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.2, 0.7, 0.2, 1] }}
          className="absolute bottom-0 right-0 h-[48%] w-[50%] rounded-xl border-4 object-cover shadow-[0_20px_40px_-14px_rgba(0,0,0,0.5)] sm:h-[50%] sm:w-[52%] sm:border-[5px]"
          style={{ borderColor: "#0B1D33" }}
        />
        <span
          className="absolute left-3.5 top-3.5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm sm:left-4 sm:top-4"
          style={{
            backgroundColor: "rgba(11,29,51,0.75)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {item.label}
        </span>
      </motion.div>
    </AnimatePresence>
  </div>
);

/* ---------- one accordion row ---------- */
const QBox = ({ item, isActive, onSelect }) => (
  <div
    onMouseEnter={onSelect}
    onClick={onSelect}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect()}
    className={`cursor-pointer rounded-xl border px-4 py-4 transition-colors duration-300 sm:px-5 sm:py-[18px] ${
      isActive
        ? "border-white/10 bg-white/[0.05]"
        : "border-transparent hover:bg-white/[0.03]"
    }`}
  >
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <span
          className="h-2 w-2 flex-shrink-0 rounded-sm"
          style={{ backgroundColor: item.accent }}
        />
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.16em]"
          style={{
            color: item.accent,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {item.label}
        </span>
      </div>
      <ChevronRight
        size={16}
        className={`flex-shrink-0 transition-transform duration-300 ${
          isActive ? "rotate-90 text-white" : "text-white/35"
        }`}
      />
    </div>

    <div
      className={`grid transition-[grid-template-rows] duration-400 ease-out ${
        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <ul className="pt-3.5 sm:pt-[14px]">
          {item.points.map((p, i) => (
            <li
              key={i}
              className="flex gap-2.5 py-1.5 text-[13px] leading-[1.55] text-white/65 sm:text-[13.5px]"
            >
              <span className="flex-shrink-0 text-white/30">—</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
const Positioning = () => {
  const [active, setActive] = useState("strengths");
  const activeItem = SWOT.find((s) => s.key === active);

  return (
    <section
      id="model"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
      style={{ backgroundColor: "#0B1D33" }}
    >
      {/* background texture + ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 0%, black 20%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#B8874F]/[0.1] blur-[150px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ============ header ============ */}
        <div className="mx-auto mb-12 max-w-[640px] text-center sm:mb-14 lg:mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            className="mb-4 flex items-center justify-center gap-2.5"
          >
            <span className="inline-block h-2 w-2 flex-shrink-0 bg-[#B8874F]" />
            <span
              className="text-[11.5px] uppercase tracking-[0.08em] text-[#B8874F]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Positioning
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            className="text-balance text-[clamp(26px,3.6vw,40px)] font-semibold leading-[1.18] tracking-[-0.01em] text-white"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            SWOT —{" "}
            <em className="italic text-[#B8874F]">
              entering as a diversification, not a startup
            </em>
            .
          </motion.h2>
        </div>

        {/* ============ image stack + accordion ============ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          custom={2}
          className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10"
        >
          <ImageStack item={activeItem} />

          <div className="flex flex-col justify-center gap-2">
            {SWOT.map((item) => (
              <QBox
                key={item.key}
                item={item}
                isActive={active === item.key}
                onSelect={() => setActive(item.key)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Positioning;