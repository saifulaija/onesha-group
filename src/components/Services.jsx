import  { useEffect, useRef, useState } from "react";

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
        transform: visible ? "translateY(0px)" : "translateY(20px)",
        transition: `opacity 0.7s cubic-bezier(.16,.8,.24,1) ${delay}ms, transform 0.7s cubic-bezier(.16,.8,.24,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

/* ---------- duotone photo, tinted per-vertical, with editorial caption ---------- */
const DuoImage = ({ src, accentHex, tag }) => (
  <div className="relative w-full aspect-[16/10] overflow-hidden">
    <img
      src={src}
      alt=""
      className="w-full h-full object-cover grayscale contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      loading="lazy"
    />
    <div
      className="absolute inset-0 mix-blend-multiply"
      style={{
        background: `linear-gradient(155deg, #0E1626 0%, ${accentHex} 145%)`,
        opacity: 0.82,
      }}
    />
    <div
      className="absolute inset-0"
      style={{ background: "rgba(14,22,38,0.14)" }}
    />
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2.5 bg-gradient-to-t from-[#0E1626]/70 to-transparent">
      <span className="biz-mono text-[9.5px] uppercase tracking-[0.14em] text-white/85">
        {tag}
      </span>
      <span className="w-1.5 h-1.5" style={{ background: accentHex }} />
    </div>
  </div>
);

/* ---------- data ---------- */
const verticals = [
  {
    n: "01",
    tag: "MOBILITY",
    name: "Onesha Motors",
    thesis:
      "Buying, reconditioning, and selling cars — built around trust in a market where trust is the scarce resource.",
    accent: "#B85C38",
    tint: "rgba(184,92,56,0.12)",
    img: "https://images.unsplash.com/photo-1692406069831-0bb7ea297645?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "02",
    tag: "TECHNOLOGY",
    name: "Onesha Tech",
    thesis:
      "Software, web, and AI-automation delivery for clients abroad — exporting hours of skilled work, not raw materials.",
    accent: "#3E9280",
    tint: "rgba(62,146,128,0.12)",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "03",
    tag: "TEXTILE",
    name: "Onesha Textile",
    thesis:
      "Garment manufacturing and export, in a country that is already the world's second-largest apparel exporter.",
    accent: "#5A67A6",
    tint: "rgba(90,103,166,0.12)",
    img: "https://images.unsplash.com/photo-1673201229733-69d19c5c4a87?auto=format&fit=crop&w=900&q=80",
  },
];

/* ---------- section ---------- */
const BusinessOverview = () => {
  return (
    <section
      id="services"
      className="relative bg-[#EEF1F6] pt-8 md:pt-12 pb-20 md:pb-28 px-6 md:px-10 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,360;0,9..144,560;0,9..144,650;1,9..144,500&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .biz-display{ font-family:'Fraunces', serif; font-weight:560; letter-spacing:-0.01em; }
        .biz-body{ font-family:'Inter', -apple-system, sans-serif; }
        .biz-mono{ font-family:'IBM Plex Mono', monospace; letter-spacing:0.06em; }
        .biz-dotbg{
          background-image: radial-gradient(rgba(22,32,58,0.06) 1px, transparent 1px);
          background-size: 22px 22px;
        }
      `}</style>

      <div className="biz-dotbg absolute inset-0 pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto">
        {/* head */}
        <Reveal className="max-w-[720px] mb-10 md:mb-12">
          <div className="biz-mono flex items-center gap-2 text-[11.5px] uppercase tracking-[0.16em] text-[#5C6577] mb-4">
            <span className="w-2 h-2 bg-[#B85C38] inline-block flex-shrink-0" />
            Business Overview
          </div>
          <h2 className="biz-display text-[#16203A] text-[28px] sm:text-[34px] md:text-[42px] leading-[1.14] mb-4">
            One holding, three verticals — each with its own service line.
          </h2>
          <p className="biz-body text-[#5C6577] text-[15px] md:text-[16px] leading-relaxed max-w-[560px]">
            Each business runs its own P&amp;L. The group provides capital,
            systems, and discipline.
          </p>
        </Reveal>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {verticals.map((v, i) => (
            <Reveal key={v.n} delay={i * 110}>
              <div className="group relative bg-white border border-[rgba(22,32,58,0.12)] hover:border-[rgba(22,32,58,0.28)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                <div className="relative p-6 md:p-7 flex flex-col flex-1">
                  <span
                    className="biz-display absolute -top-2 right-4 text-[64px] leading-none pointer-events-none select-none"
                    style={{ color: v.tint, fontWeight: 650 }}
                  >
                    {v.n}
                  </span>

                  <span
                    className="biz-mono text-[10.5px] uppercase tracking-[0.12em] mb-5 flex items-center gap-2"
                    style={{ color: v.accent }}
                  >
                    <span
                      className="w-1.5 h-1.5"
                      style={{ background: v.accent }}
                    />
                    {v.tag}
                  </span>

                  <h3 className="biz-display text-[21px] md:text-[23px] text-[#16203A] mb-3 leading-tight relative z-10">
                    {v.name}
                  </h3>

                  <p className="biz-body text-[14px] text-[#5C6577] leading-relaxed relative z-10">
                    {v.thesis}
                  </p>
                </div>

                <div className="border-t" style={{ borderColor: v.tint }}>
                  <DuoImage src={v.img} accentHex={v.accent} tag={v.tag} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;
