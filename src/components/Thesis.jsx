
import { motion } from "framer-motion";



const lanes = [
  {
    label: "CATEGORY 01",
    sublabel: "Vehicles — live",
    labelColor: "text-white/90",
    nodes: [
      { lbl: "Auction sourcing", sub: "Nagoya / Yokohama" },
      { lbl: "Export prep", sub: "RoRo / container" },
      { lbl: "Sale, in-market", sub: "Retail + wholesale" },
    ],
  },
  {
    label: "CATEGORY 02",
    sublabel: "Textiles — proposed",
    labelColor: "text-[#f2c879]",
    nodes: [
      { lbl: "Bale sourcing", sub: "Collection centers" },
      { lbl: "Grading & container", sub: "Same port network" },
      { lbl: "Sale, in-market", sub: "Wholesale to retailers" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const diagramReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const laneReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const trackReveal = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: "easeInOut" } },
};

const nodeReveal = {
  hidden: { opacity: 0, scale: 0.4 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, delay: 0.3 + i * 0.18, ease: "backOut" },
  }),
};

const legendReveal = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.9 } },
};

const Thesis = () => {
  return (
    <section
      id="thesis"
      className="relative bg-[#eef1f4] pb-10 pt-8 text-[#0b1d33] sm:pt-10 md:pb-12 md:pt-14 lg:pt-16"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ---------- Head ---------- */}
        <div className="mb-10 max-w-[640px] sm:mb-14">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            className="mb-3.5 block text-[11.5px] uppercase tracking-[0.08em] text-[#d98e2b]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            The Thesis
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={1}
            className="mb-3.5 text-[clamp(24px,3.4vw,38px)] font-semibold leading-tight tracking-[-0.01em]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            One license, one logistics engine, two commodities.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={2}
            className="text-[14.5px] text-[#1e3a5f] sm:text-[15.5px]"
          >
            Vehicle export and textile export share the same bones: buy an asset
            in Japan below its replacement value, containerize it, clear it
            through the same ports, and sell it into markets where the same
            asset is priced far higher. Onesha doesn't need a new business — it
            needs a second lane on a road it already built.
          </motion.p>
        </div>

        {/* ---------- Route diagram ---------- */}
        <motion.div
          variants={diagramReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden bg-[#0b1d33] px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14"
        >
          {/* faint grid backdrop, matches original ::before */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <motion.div
            variants={laneReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 space-y-16 md:space-y-20"
          >
            {lanes.map((lane, li) => (
              <div key={li}>
                {/* Lane label */}
                <div
                  className={`mb-5 text-[11px] uppercase tracking-[0.05em] md:mb-0 md:w-[140px] md:flex-shrink-0 ${lane.labelColor}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {lane.label}
                  <br />
                  {lane.sublabel}
                </div>

                {/* Desktop/tablet: horizontal track */}
                <div className="hidden md:-mt-[15px] md:flex md:items-center">
                  <div className="hidden w-[140px] flex-shrink-0 md:block" />
                  <div className="relative flex h-[2px] flex-1 items-center bg-[#d98e2b]/35">
                    <motion.div
                      variants={trackReveal}
                      style={{ transformOrigin: "left" }}
                      className="absolute inset-0 bg-[#d98e2b]/35"
                    />
                    <div className="relative z-10 flex w-full items-center justify-between">
                      {lane.nodes.map((node, ni) => (
                        <motion.div
                          key={ni}
                          custom={ni}
                          variants={nodeReveal}
                          className="relative flex flex-shrink-0 flex-col items-center"
                        >
                          <div className="h-3 w-3 rounded-full border-2 border-[#0b1d33] bg-[#d98e2b] shadow-[0_0_0_4px_rgba(217,142,43,0.18)]" />
                          <span
                            className={`absolute top-5 whitespace-nowrap text-[12px] font-medium text-[#eef1f4] ${
                              ni === 0
                                ? "left-0"
                                : ni === lane.nodes.length - 1
                                  ? "right-0"
                                  : "left-1/2 -translate-x-1/2"
                            }`}
                          >
                            {node.lbl}
                          </span>
                          <span
                            className={`absolute top-[38px] whitespace-nowrap text-[10.5px] text-white/40 ${
                              ni === 0
                                ? "left-0"
                                : ni === lane.nodes.length - 1
                                  ? "right-0"
                                  : "left-1/2 -translate-x-1/2"
                            }`}
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                            }}
                          >
                            {node.sub}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile: vertical step list */}
                <div className="relative pl-5 md:hidden">
                  <div className="absolute bottom-2 left-[5px] top-2 w-[2px] bg-[#d98e2b]/35" />
                  <div className="space-y-6">
                    {lane.nodes.map((node, ni) => (
                      <motion.div
                        key={ni}
                        custom={ni}
                        variants={nodeReveal}
                        className="relative flex items-start gap-3"
                      >
                        <div className="absolute -left-5 top-1 h-3 w-3 flex-shrink-0 rounded-full border-2 border-[#0b1d33] bg-[#d98e2b] shadow-[0_0_0_4px_rgba(217,142,43,0.18)]" />
                        <div>
                          <div className="text-[13px] font-medium text-[#eef1f4]">
                            {node.lbl}
                          </div>
                          <div
                            className="mt-0.5 text-[11px] text-white/40"
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                            }}
                          >
                            {node.sub}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ---------- Legend ---------- */}
          <motion.div
            variants={legendReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="relative z-10 mt-12 flex flex-wrap gap-4 text-[12px] text-white/55 sm:mt-16 sm:gap-7"
          >
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 flex-shrink-0 bg-[#d98e2b]" />
              Shared infrastructure: export license, port relationships,
              container consolidation, buyer-side trust
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Thesis;
