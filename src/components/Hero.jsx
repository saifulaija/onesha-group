
import { motion } from "framer-motion";

/**
 * Hero
 * - Top row: copy (left) + a 3-image bento collage representing the
 *   group's operations (right).
 * - Stats grid moved below, full width, revealing on scroll.
 * - Premium, staggered framer-motion entrance + scroll-reveal animation.
 *
 * Fonts required globally: 'Fraunces', Inter, 'JetBrains Mono'
 *
 * NOTE: image URLs below are Unsplash placeholders standing in for real
 * brand photography (vehicle lot / textile bales / container port).
 * Swap the `src` values for licensed or brand-owned images before
 * shipping to production.
 */

const heroStats = [
  { num: "10", lbl: "Licensed trade categories held" },
  { num: "¥63B", lbl: "Japan textile market, 2024" },
  { num: "01", lbl: "Category currently active — vehicles" },
  { num: "02", lbl: "Category proposed — textiles" },
];

const collageImages = [
  {
    src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1400&auto=format&fit=crop",
    alt: "Shipping containers stacked at a cargo port",
    tag: "Group — Logistics",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=900&auto=format&fit=crop",
    alt: "Rows of used vehicles ready for export",
    tag: "Cat. 01 — Vehicles",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900&auto=format&fit=crop",
    alt: "Graded textile bales in a warehouse",
    tag: "Cat. 02 — Textiles",
    span: "",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const collageContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const collageItem = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const statsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="relative bg-[#eef1f4] py-16 text-[#0b1d33] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* ---------- Top row: copy + collage ---------- */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="relative mb-7 inline-flex items-center gap-2 text-[11.5px] uppercase tracking-[0.08em] text-[#345d8a] before:h-[7px] before:w-[7px] before:flex-shrink-0 before:bg-[#d98e2b] before:content-['']"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              New Business Category — Textile &amp; Apparel Export
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mb-7 text-[clamp(34px,5.4vw,60px)] font-semibold leading-[1.05] tracking-[-0.01em]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              From car decks
              <br />
              to <em className="italic text-[#1e3a5f]">cargo containers.</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="max-w-[560px] text-[17px] leading-relaxed text-[#1e3a5f] sm:text-[18px]"
            >
              Onesha Group has spent years moving vehicles from Japan to buyers
              across Asia under a 10-category trade license. This strategy
              applies the same import–export machinery — sourcing, compliance,
              logistics, buyer networks — to a second category: used and surplus
              Japanese textiles and apparel, exported into Bangladesh and
              neighboring markets.
            </motion.p>
          </div>

          {/* Right: 3-image bento collage ("group of company") */}
          <motion.div
            variants={collageContainer}
            initial="hidden"
            animate="show"
            className="relative order-first lg:order-last"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {collageImages.map((img, i) => (
                <motion.div
                  key={i}
                  variants={collageItem}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`group relative aspect-[16/10] overflow-hidden rounded-sm border border-[rgba(11,29,51,0.14)] bg-[#0b1d33] shadow-[0_20px_45px_-20px_rgba(11,29,51,0.35)] ${
                    i === 0 ? "col-span-2 aspect-[16/9] sm:aspect-[16/8]" : ""
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d33]/75 via-[#0b1d33]/10 to-transparent" />
                  <div
                    className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.06em] text-[#eef1f4]/85 sm:bottom-4 sm:left-4 sm:right-4 sm:text-[11px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <span>{img.tag}</span>
                    <span className="text-[#f2c879]">→</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* amber accent frame, offset behind the collage */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full border border-[#d98e2b]/40 sm:-bottom-5 sm:-right-5" />
          </motion.div>
        </div>

        {/* ---------- Stats, full width, below ---------- */}
        <motion.div
          variants={statsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-16 grid grid-cols-2 border-l border-t border-[rgba(11,29,51,0.14)] sm:mt-20 min-[721px]:grid-cols-4"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={i}
              variants={statItem}
              className="border-b border-r border-[rgba(11,29,51,0.14)] px-5 py-6"
            >
              <span
                className="block text-[clamp(24px,2.6vw,32px)] font-semibold text-[#0b1d33]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                {stat.num}
              </span>
              <span className="mt-1 block text-[12px] leading-snug text-[#345d8a]">
                {stat.lbl}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
