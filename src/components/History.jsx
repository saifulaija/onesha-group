import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
/*  Content — four entries, kept in order. Fill in real years.         */
/* ------------------------------------------------------------------ */
const TIMELINE = [
  {
    idx: 0,
    rec: "REC.01",
    year: "[Year]",
    tag: "Mobility",
    color: "#B8874F",
    title: "Onesha Motors opens its first showroom",
    description:
      "The group's founding business begins buying and reselling reconditioned vehicles in Dhaka, built on inspection-backed trust rather than volume.",
    origin: true,
    nodeType: "check",
  },
  {
    idx: 1,
    rec: "REC.02",
    year: "[Year]",
    tag: "Technology",
    color: "#5A7BA6",
    title: "Onesha Tech is formed",
    description:
      "A small delivery team starts building websites and software for clients abroad, later expanding into AI-driven automation.",
    origin: false,
    nodeType: "check",
  },
  {
    idx: 2,
    rec: "REC.03",
    year: "[Year]",
    tag: "Group",
    color: "#B8874F",
    title: "ONESHA GROUP is formally established",
    description:
      "The two businesses are brought under one holding structure, with shared capital allocation and reporting discipline.",
    origin: false,
    nodeType: "group",
  },
  {
    idx: 3,
    rec: "REC.04",
    year: "[Year]",
    tag: "Textile",
    color: "#8C6A2F",
    title: "Onesha Textile enters garment export",
    description:
      "The group adds its third vertical, moving into knit and woven garment production for export markets.",
    origin: false,
    nodeType: "check",
  },
];

/* ---------- one timeline row ---------- */
const TimelineRow = ({ item, isLast, revealed, rowRef }) => {
  const isGroup = item.nodeType === "group";

  return (
    <div
      ref={rowRef}
      data-idx={item.idx}
      className={`grid grid-cols-[56px_22px_1fr] gap-x-4 py-6 sm:grid-cols-[84px_26px_1fr] sm:gap-x-6 sm:py-[30px] ${
        !isLast ? "border-b border-[#EDEEF1]" : ""
      } ${item.idx === 0 ? "pt-0" : ""}`}
    >
      {/* rec + year */}
      <div className="pt-0.5">
        <p
          className="mb-1.5 text-[10px] tracking-[0.12em] text-[#B9C2CC] sm:mb-2 sm:text-[11px]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {item.rec}
        </p>
        <p
          className="text-[20px] text-[#12203A] sm:text-[26px]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {item.year}
        </p>
      </div>

      {/* rail: line + node */}
      <div className="relative flex h-full justify-center">
        <span
          className="absolute left-1/2 top-0.5 w-[2px] -translate-x-1/2 overflow-hidden rounded-full bg-[#E3E6EA]"
          style={{ bottom: isLast ? 0 : "-24px" }}
        >
          <span
            className="absolute left-0 top-0 w-full transition-[height] duration-[900ms] ease-out"
            style={{
              height: revealed ? "100%" : "0%",
              background: `linear-gradient(180deg, ${item.color}, #5A7BA6)`,
            }}
          />
        </span>

        {isGroup ? (
          <span
            className="relative z-[2] mt-0 -ml-0.5 flex h-[17px] w-[17px] items-center justify-center rounded-full p-[2px] sm:h-[18px] sm:w-[18px]"
            style={{
              background: `conic-gradient(${item.color}, #5A7BA6, ${item.color})`,
            }}
          >
            <span
              className="flex h-full w-full items-center justify-center rounded-full transition-colors duration-[400ms]"
              style={{ backgroundColor: revealed ? "#12203A" : "#fff" }}
            >
              <Check
                size={8}
                strokeWidth={3}
                className="transition-opacity duration-300"
                style={{
                  opacity: revealed ? 1 : 0,
                  color: item.color,
                }}
              />
            </span>
          </span>
        ) : (
          <span
            className="relative z-[2] mt-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 bg-white transition-all duration-300"
            style={{
              borderColor: revealed ? item.color : "#B9C2CC",
              backgroundColor: revealed ? item.color : "#fff",
              boxShadow: revealed ? `0 0 0 5px ${item.color}24` : "none",
            }}
          >
            <Check
              size={8}
              strokeWidth={3}
              className="text-white transition-opacity duration-300 delay-150"
              style={{ opacity: revealed ? 1 : 0 }}
            />
          </span>
        )}
      </div>

      {/* card */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={revealed ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`group relative overflow-hidden rounded-xl border border-transparent px-5 py-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E9EBEE] hover:bg-white hover:shadow-[0_18px_36px_-20px_rgba(18,32,58,0.25)] sm:px-6 sm:py-[22px] ${
          item.origin ? "bg-[#F3F4F6] hover:bg-[#F3F4F6]" : ""
        }`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1.5 select-none text-[42px] leading-none opacity-[0.07] sm:right-4 sm:top-1.5 sm:text-[52px]"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            color: item.color,
          }}
        >
          {item.rec.replace("REC.", "")}
        </span>

        <div className="relative mb-2.5 flex items-center gap-2 sm:mb-3">
          <span
            className="h-1.5 w-1.5 flex-shrink-0"
            style={{ backgroundColor: item.color }}
          />
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[10.5px]"
            style={{
              color: item.color,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {item.tag}
          </span>
        </div>
        <h3
          className="relative mb-2 text-[17px] leading-snug text-[#12203A] sm:text-[19px]"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {item.title}
        </h3>
        <p className="relative text-[13px] leading-relaxed text-[#525C67] sm:text-[14px]">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
const History = () => {
  const [revealedSet, setRevealedSet] = useState(() => new Set());
  const [activeSpy, setActiveSpy] = useState(0);
  const rowRefs = useRef([]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx);
            setRevealedSet((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { threshold: 0.4 },
    );

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSpy(Number(entry.target.dataset.idx));
          }
        });
      },
      { threshold: 0.55 },
    );

    rowRefs.current.forEach((el) => {
      if (el) {
        revealObserver.observe(el);
        spyObserver.observe(el);
      }
    });

    return () => {
      revealObserver.disconnect();
      spyObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="history"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #B8874F, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1320px] gap-6 px-5 sm:px-8 lg:gap-10">
        <div className="min-w-0 flex-1">
          {/* ============ header ============ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-8 flex items-start justify-between gap-6 sm:mb-10"
          >
            <div>
              <h2
                className="mb-2 text-[27px] leading-[1.15] text-[#12203A] sm:text-[34px] md:text-[40px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                How the group came together.
              </h2>
              <p className="text-[13.5px] text-[#5A7BA6] sm:text-[14.5px]">
                Four entries, kept in order.
              </p>
            </div>
            <div
              className="mt-1 hidden shrink-0 items-center gap-2 rounded-md border px-4 py-2 sm:flex"
              style={{
                transform: "rotate(0deg)",
                borderColor: "rgba(184,135,79,0.35)",
              }}
            >
              <span className="h-1.5 w-1.5 bg-[#B8874F]" />
              <span
                className="text-[10px] uppercase tracking-[0.14em] text-[#B8874F]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Sequence verified
              </span>
            </div>
          </motion.div>

          {/* ============ timeline ============ */}
          <div>
            {TIMELINE.map((item, i) => (
              <TimelineRow
                key={item.idx}
                item={item}
                isLast={i === TIMELINE.length - 1}
                revealed={revealedSet.has(item.idx)}
                rowRef={(el) => (rowRefs.current[i] = el)}
              />
            ))}
          </div>
        </div>

        {/* ============ scroll-spy nav rail ============ */}
        <div className="sticky top-1/3 hidden shrink-0 flex-col items-center gap-5 self-start pt-24 lg:flex">
          {TIMELINE.map((item) => (
            <span
              key={item.idx}
              className="h-2 w-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  activeSpy === item.idx ? item.color : "#B9C2CC",
                transform: activeSpy === item.idx ? "scale(1.35)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
