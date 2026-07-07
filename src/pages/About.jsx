import{ useEffect, useRef, useState } from "react";
import {
  Ship,
  Shield,
  Anchor,
  Package,
  Globe2,
  ArrowUpRight,
  Container,
} from "lucide-react";

/* ---------- scroll-reveal hook ---------- */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

const Reveal = ({ as: Tag = "div", className = "", delay = 0, children }) => {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(18px)",
        transition: `opacity 0.7s cubic-bezier(.16,.8,.24,1) ${delay}ms, transform 0.7s cubic-bezier(.16,.8,.24,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

/* ---------- duotone photo block ---------- */
const DuoImage = ({ seed, w = 1000, h = 1200, className = "" }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img
      src={`https://picsum.photos/seed/${seed}/${w}/${h}`}
      alt=""
      className="w-full h-full object-cover grayscale contrast-[1.05]"
      loading="lazy"
    />
    <div
      className="absolute inset-0 mix-blend-multiply"
      style={{
        background:
          "linear-gradient(160deg, #0b1d33 5%, #345d8a 55%, #d98e2b 130%)",
        opacity: 0.82,
      }}
    />
    <div
      className="absolute inset-0"
      style={{ background: "rgba(11,29,51,0.18)" }}
    />
  </div>
);

/* ---------- data ---------- */
const stats = [
  { num: "2016", lbl: "Year Onesha began exporting vehicles from Japan" },
  { num: "10", lbl: "Licensed trade categories held today" },
  { num: "02", lbl: "Active export corridors — vehicles, and now textiles" },
  { num: "3", lbl: "Countries with standing buyer relationships" },
];

const milestones = [
  {
    n: "01",
    year: "2016",
    title: "First container, first license",
    desc: "Onesha registers its export license in Japan and ships its first consolidated load of vehicles out of Yokohama, built on relationships with two auction houses.",
  },
  {
    n: "02",
    year: "2019",
    title: "Category list grows to six",
    desc: "Steady reinvestment of margin into license scope — parts, machinery, and marine equipment are added alongside vehicles as the buyer base diversifies.",
  },
  {
    n: "03",
    year: "2023",
    title: "Ten categories, one engine",
    desc: "The license reaches its current ten-category scope. Sourcing, freight consolidation, and customs handling are by now a repeatable system, not a project.",
  },
  {
    n: "04",
    year: "2026",
    title: "Textiles open as category two",
    desc: "The same ports, the same consolidation partners, and the same in-market trust are pointed at a second commodity: graded Japanese secondhand apparel.",
  },
];

const principles = [
  {
    tag: "Discipline",
    title: "One engine, many cargoes",
    body: "We don't chase new categories for their own sake. Every addition to the license has to run on infrastructure we already paid for — the same ports, the same paperwork, the same trust.",
    icon: Container,
  },
  {
    tag: "Provenance",
    title: "Condition is the product",
    body: "Whether it's an odometer reading or a fabric grade, what we sell is confidence in condition. Grading discipline on the Japan side is what buyers are actually paying a premium for.",
    icon: Shield,
  },
  {
    tag: "Corridor-first",
    title: "Built for the route, not the office",
    body: "Onesha is organized around the Japan–South Asia shipping lane itself — sourcing teams at the ports, logistics partners at the customs points, sales teams in-market.",
    icon: Globe2,
  },
];

const team = [
  {
    seed: "onesha-team-1",
    role: "Founder & Managing Director",
    loc: "Nagoya, Japan",
  },
  { seed: "onesha-team-2", role: "Head of Sourcing", loc: "Yokohama, Japan" },
  {
    seed: "onesha-team-3",
    role: "Head of Logistics & Customs",
    loc: "Osaka, Japan",
  },
  { seed: "onesha-team-4", role: "Country Lead", loc: "Dhaka, Bangladesh" },
];

/* ---------- page ---------- */
const About = () => {
  return (
    <div className="bg-[#eef1f4] text-[#0b1d33] font-sans antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display{ font-family:'Fraunces','Georgia',serif; letter-spacing:-0.01em; }
        .font-body{ font-family:'Inter',-apple-system,'Segoe UI',sans-serif; }
        .font-mono{ font-family:'JetBrains Mono','Courier New',monospace; letter-spacing:0.04em; }
        .grid-bg{
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size:36px 36px;
        }
        @keyframes driftSlow{ from{ transform:translateX(0); } to{ transform:translateX(-50%); } }
        .drift{ animation:driftSlow 40s linear infinite; }
        @keyframes dashMove{ to{ stroke-dashoffset:-200; } }
        .dash-line{ stroke-dasharray:6 8; animation:dashMove 6s linear infinite; }
        @media (prefers-reduced-motion:reduce){ .drift,.dash-line{ animation:none; } }
      `}</style>

      {/* -------- eyebrow strip -------- */}
      <div className="bg-[#0b1d33] text-[#dde3e9] font-mono text-[11px] py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block pl-full drift">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <span key={i}>
                <span className="mx-6 text-[#f2c879]">
                  ONESHA GROUP <b className="text-white">— ABOUT</b>
                </span>
                <span className="mx-6 text-[#f2c879]">
                  CATEGORY 01 <b className="text-white">VEHICLES, LIVE</b>
                </span>
                <span className="mx-6 text-[#f2c879]">
                  CATEGORY 02 <b className="text-white">TEXTILES, PROPOSED</b>
                </span>
                <span className="mx-6 text-[#f2c879]">
                  CORRIDOR <b className="text-white">JAPAN → BANGLADESH</b>
                </span>
              </span>
            ))}
        </div>
      </div>

      {/* -------- hero -------- */}
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-14 max-w-[1180px] mx-auto">
        <Reveal className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#345d8a] mb-7">
          <span className="w-[7px] h-[7px] bg-[#d98e2b] inline-block" />
          About Onesha Group
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display font-semibold text-[38px] sm:text-[52px] md:text-[68px] leading-[1.02] max-w-[880px] mb-7">
            Built the corridor.
            <br className="hidden sm:block" /> Now we're{" "}
            <em className="italic text-[#1e3a5f]">widening it.</em>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-[17px] md:text-[18px] text-[#1e3a5f] max-w-[600px] mb-12 leading-relaxed">
            For nearly a decade, Onesha Group has moved vehicles out of Japan
            and into buyers across Asia under a ten-category trade license. This
            is the story of the license, the route, and the people who run it —
            and why the next commodity to travel it is a bale of fabric, not a
            car.
          </p>
        </Reveal>
        <Reveal
          delay={240}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[rgba(11,29,51,0.14)]"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="border-r border-b border-[rgba(11,29,51,0.14)] px-5 py-6"
            >
              <span className="font-display font-semibold text-[26px] md:text-[32px] block">
                {s.num}
              </span>
              <span className="text-[12px] text-[#345d8a] mt-1 block leading-snug">
                {s.lbl}
              </span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* -------- origin story -------- */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-t border-[rgba(11,29,51,0.14)]">
        <div className="max-w-[1180px] mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <DuoImage
              seed="onesha-origin"
              w={900}
              h={1100}
              className="w-full aspect-[4/5] md:aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={100}>
            <span className="font-mono text-[11.5px] uppercase tracking-widest text-[#d98e2b] mb-4 block">
              Origin
            </span>
            <h2 className="font-display font-semibold text-[26px] md:text-[36px] mb-5 leading-tight">
              A trading floor that started with one auction badge.
            </h2>
            <p className="text-[#1e3a5f] text-[15px] md:text-[15.5px] mb-4 leading-relaxed">
              Onesha Group started as a two-person operation buying vehicles at
              Japanese auction houses and consolidating them into shared
              containers bound for South and Southeast Asia. There was no
              warehouse, no in-house customs desk — just a license, a notebook
              of buyer contacts, and a willingness to be at the port at 5am.
            </p>
            <p className="text-[#1e3a5f] text-[15px] md:text-[15.5px] leading-relaxed">
              What we built since then isn't really a vehicle-export business.
              It's a system for moving anything undervalued in Japan to a market
              where it's worth more — vehicles were simply the first commodity
              that system proved itself on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* -------- timeline -------- */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-t border-[rgba(11,29,51,0.14)]">
        <div className="max-w-[1180px] mx-auto">
          <Reveal className="max-w-[640px] mb-12">
            <span className="font-mono text-[11.5px] uppercase tracking-widest text-[#d98e2b] mb-4 block">
              How we got here
            </span>
            <h2 className="font-display font-semibold text-[26px] md:text-[36px]">
              Ten years of adding one category at a time.
            </h2>
          </Reveal>
          <div className="border-t border-[rgba(11,29,51,0.14)]">
            {milestones.map((m, i) => (
              <Reveal
                key={m.n}
                delay={i * 90}
                className="grid md:grid-cols-[100px_100px_1fr] gap-3 md:gap-8 py-8 border-b border-[rgba(11,29,51,0.14)] items-start"
              >
                <div className="font-display font-semibold text-[15px] text-[#d98e2b]">
                  {m.n}
                </div>
                <div className="font-mono text-[12px] text-[#345d8a]">
                  {m.year}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[18px] md:text-[19px] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-[#1e3a5f] text-[14px] md:text-[14.5px] leading-relaxed max-w-[620px]">
                    {m.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- corridor signature -------- */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-t border-[rgba(11,29,51,0.14)]">
        <div className="max-w-[1180px] mx-auto">
          <Reveal className="max-w-[640px] mb-12">
            <span className="font-mono text-[11.5px] uppercase tracking-widest text-[#d98e2b] mb-4 block">
              The corridor
            </span>
            <h2 className="font-display font-semibold text-[26px] md:text-[36px] mb-4">
              One shipping lane, run end to end.
            </h2>
            <p className="text-[#1e3a5f] text-[15px] leading-relaxed">
              Onesha doesn't hand cargo off between strangers. The same
              organization sources it in Japan, consolidates it at the port,
              clears it through customs, and sells it in-market.
            </p>
          </Reveal>

          <Reveal className="bg-[#0b1d33] grid-bg relative overflow-hidden px-6 md:px-14 py-12 md:py-16">
            <svg
              viewBox="0 0 900 220"
              className="w-full h-auto relative z-10"
              preserveAspectRatio="xMidYMid meet"
            >
              <line
                x1="60"
                y1="110"
                x2="840"
                y2="110"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="2"
              />
              <line
                x1="60"
                y1="110"
                x2="840"
                y2="110"
                stroke="#d98e2b"
                strokeWidth="2"
                className="dash-line"
              />
              {[
                { x: 60, label: "Auction sourcing", sub: "Nagoya / Yokohama" },
                {
                  x: 290,
                  label: "Grading & container",
                  sub: "Bonded warehouse",
                },
                {
                  x: 520,
                  label: "Customs clearance",
                  sub: "Shared consolidation",
                },
                { x: 750, label: "Buyer network", sub: "Dhaka / Chattogram" },
              ].map((n, i) => (
                <g key={i}>
                  <circle
                    cx={n.x}
                    cy="110"
                    r="7"
                    fill={i === 0 || i === 3 ? "#d98e2b" : "#eef1f4"}
                    stroke="#0b1d33"
                    strokeWidth="2"
                  />
                  <text
                    x={n.x}
                    y="145"
                    fontSize="12"
                    fill="#eef1f4"
                    fontFamily="Inter, sans-serif"
                    textAnchor={i === 3 ? "end" : i === 0 ? "start" : "middle"}
                  >
                    {n.label}
                  </text>
                  <text
                    x={n.x}
                    y="163"
                    fontSize="10.5"
                    fill="rgba(255,255,255,0.45)"
                    fontFamily="JetBrains Mono, monospace"
                    textAnchor={i === 3 ? "end" : i === 0 ? "start" : "middle"}
                  >
                    {n.sub}
                  </text>
                </g>
              ))}
              <text
                x="60"
                y="60"
                fontSize="13"
                fill="#f2c879"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="1"
              >
                JAPAN
              </text>
              <text
                x="750"
                y="60"
                fontSize="13"
                fill="#f2c879"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="1"
                textAnchor="end"
              >
                BANGLADESH
              </text>
            </svg>
            <div className="relative z-10 flex flex-wrap gap-6 md:gap-8 mt-10 md:mt-12 text-[12px] font-mono text-white/60">
              <span className="flex items-center gap-2">
                <Anchor size={13} className="text-[#d98e2b]" /> 2 port cities on
                the sourcing side
              </span>
              <span className="flex items-center gap-2">
                <Ship size={13} className="text-[#d98e2b]" /> Shared freight
                consolidation
              </span>
              <span className="flex items-center gap-2">
                <Package size={13} className="text-[#d98e2b]" /> 10 licensed
                categories, one route
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- principles -------- */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-t border-[rgba(11,29,51,0.14)]">
        <div className="max-w-[1180px] mx-auto">
          <Reveal className="max-w-[640px] mb-12">
            <span className="font-mono text-[11.5px] uppercase tracking-widest text-[#d98e2b] mb-4 block">
              How we operate
            </span>
            <h2 className="font-display font-semibold text-[26px] md:text-[36px]">
              Three rules that outlived every new category.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.tag}
                  delay={i * 100}
                  className="bg-white border border-[rgba(11,29,51,0.14)] p-8"
                >
                  <Icon
                    size={20}
                    className="text-[#345d8a] mb-5"
                    strokeWidth={1.6}
                  />
                  <span className="font-mono text-[10.5px] uppercase tracking-widest text-[#d98e2b] mb-3 block">
                    {p.tag}
                  </span>
                  <h3 className="font-display font-semibold text-[19px] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[#1e3a5f] text-[14.5px] leading-relaxed">
                    {p.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------- team -------- */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-t border-[rgba(11,29,51,0.14)]">
        <div className="max-w-[1180px] mx-auto">
          <Reveal className="max-w-[640px] mb-12">
            <span className="font-mono text-[11.5px] uppercase tracking-widest text-[#d98e2b] mb-4 block">
              The people
            </span>
            <h2 className="font-display font-semibold text-[26px] md:text-[36px]">
              Stationed where the cargo actually moves.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {team.map((t, i) => (
              <Reveal key={t.seed} delay={i * 90}>
                <DuoImage
                  seed={t.seed}
                  w={500}
                  h={620}
                  className="aspect-[4/5] mb-4"
                />
                <h3 className="font-display font-semibold text-[15px] leading-snug">
                  {t.role}
                </h3>
                <p className="font-mono text-[11px] text-[#345d8a] mt-1">
                  {t.loc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------- CTA -------- */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-[rgba(11,29,51,0.14)] text-center">
        <Reveal className="max-w-[680px] mx-auto">
          <h2 className="font-display font-semibold text-[28px] sm:text-[34px] md:text-[44px] mb-5 leading-tight">
            One license. One route. Room for a third category.
          </h2>
          <p className="text-[#1e3a5f] text-[15.5px] max-w-[520px] mx-auto mb-9 leading-relaxed">
            If you're sourcing, buying, or partnering in the Japan–South Asia
            corridor, we'd like to hear where you're stuck.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold border border-[#0b1d33] bg-[#0b1d33] text-[#eef1f4] hover:bg-[#1e3a5f] transition-colors"
            >
              Talk to us <ArrowUpRight size={15} />
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-semibold border border-[#0b1d33] text-[#0b1d33] hover:bg-[#0b1d33] hover:text-[#eef1f4] transition-colors"
            >
              See the roadmap
            </a>
          </div>
        </Reveal>
      </section>

      <div className="px-6 md:px-10 max-w-[1180px] mx-auto">
        <footer className="py-8 border-t border-[rgba(11,29,51,0.14)] flex flex-wrap justify-between gap-3 text-[12px] text-[#345d8a] font-mono">
          <span>ONESHA GROUP — ABOUT</span>
          <span>Japan ⇄ Bangladesh trade corridor</span>
        </footer>
      </div>
    </div>
  );
};

export default About;
