

import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";

/* ------------------------------------------------------------------ */
/*  Content — one slide per Onesha vertical                            */
/* ------------------------------------------------------------------ */
const SLIDES = [
  {
    key: "motors",
    eyebrow: "Onesha Motors — Mobility",
    headingPre: "Certified vehicles, ",
    headingEm: "retailed on trust",
    headingPost: ", not markup.",
    sub: "Buying, reconditioning, and selling cars — built around trust in a market where trust is the scarce resource.",
    meta: [
      { v: "01", l: "Operating Vertical" },
      { v: "JP → BD", l: "Sourcing Corridor" },
      { v: "A+", l: "Inspection Standard" },
    ],
    image:
      "https://images.unsplash.com/photo-1716702528916-18c7a8c1ecde?auto=format&fit=crop&w=1920&q=75",
  },
  {
    key: "tech",
    eyebrow: "Onesha Tech — Technology",
    headingPre: "Skilled engineering, ",
    headingEm: "exported hour by hour",
    headingPost: ".",
    sub: "Software, web, and AI-automation delivery for clients abroad — exporting hours of skilled work, not raw materials.",
    meta: [
      { v: "02", l: "Operating Vertical" },
      { v: "B2B", l: "Client Focus" },
      { v: "AI / Web", l: "Service Line" },
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=75",
  },
  {
    key: "textile",
    eyebrow: "Onesha Textile — Manufacturing",
    headingPre: "Garment manufacturing, ",
    headingEm: "export-grade by default",
    headingPost: ".",
    sub: "Garment manufacturing and export, in a country that is already the world's second-largest apparel exporter.",
    meta: [
      { v: "03", l: "Operating Vertical" },
      { v: "#2", l: "Global Apparel Exporter" },
      { v: "Global", l: "Buyer Markets" },
    ],
    image:
      "https://images.unsplash.com/photo-1741183392804-a37864e6a6d9?auto=format&fit=crop&w=1920&q=75",
  },
  {
    key: "leather",
    eyebrow: "Onesha Leather — Manufacturing",
    headingPre: "Leather goods, ",
    headingEm: "sourced where the craft runs deep",
    headingPost: ".",
    sub: "Leather goods manufacturing and export, sourcing from a region ranked among the world's top leather producers.",
    meta: [
      { v: "04", l: "Operating Vertical" },
      { v: "Top 10", l: "Global Leather Region" },
      { v: "Export", l: "Primary Channel" },
    ],
    image:
      "https://images.unsplash.com/photo-1764418658652-3b8d6304b115?auto=format&fit=crop&w=1920&q=75",
  },
];

const DURATION = 6500;

/**
 * Section behaves like the Economics component: a plain full-width block
 * (no special breakout hack). Content sits inside the same container
 * pattern used there — mx-auto max-w-[1320px] px-5 sm:px-8 — for
 * consistent width/alignment across sections on the page.
 */
const Hero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [progressKey, setProgressKey] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  /* -------- fonts (self-contained, no need to edit index.html) -------- */
  useEffect(() => {
    if (document.getElementById("onesha-hero-fonts")) return;
    const link = document.createElement("link");
    link.id = "onesha-hero-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600;9..144,700;9..144,900&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  /* -------- fill exactly the space left below whatever precedes it --------
     useLayoutEffect runs synchronously BEFORE the browser paints, so the
     correct height is already in place on the very first frame — no
     flash-then-resize on load. */
  useLayoutEffect(() => {
    let raf = null;
    const measure = () => {
      if (!sectionRef.current) return;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const top = sectionRef.current.getBoundingClientRect().top + scrollY;
      setOffsetTop(Math.max(0, Math.round(top)));
    };
    const onResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    // one deterministic re-check once fonts actually finish loading
    // (only fires if/when it truly matters — not a blind timeout guess)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* -------------------------- autoplay -------------------------- */
  const goTo = useCallback((n) => {
    setIndex((n + SLIDES.length) % SLIDES.length);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
      setProgressKey((k) => k + 1);
    }, DURATION);
    return () => clearInterval(timerRef.current);
  }, [paused, index]);

  /* -------------------------- parallax + spotlight -------------------------- */
  const handleMouseMove = (e) => {
    const r = sectionRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setParallax({ x: (px - 0.5) * -2, y: (py - 0.5) * -2 });
    setCursor({ x: px * 100, y: py * 100 });
  };
  const handleMouseLeave = () => {
    setPaused(false);
    setParallax({ x: 0, y: 0 });
  };

  const slide = SLIDES[index];

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#080C16] text-[#F3EFE3]"
      style={{
        fontFamily: "'Inter', sans-serif",
        /* fills exactly what's left below whatever precedes it (header,
           topbar, etc.) so the whole slider — including bottom controls —
           is always fully visible without scrolling */
        height: offsetTop ? `calc(100svh - ${offsetTop}px)` : "100svh",
        minHeight: "440px",
      }}
    >
      {/* ---------- keyframes & scoped styles ---------- */}
      <style>{`
        @keyframes oneshaAmbientZoom { 0% { transform: scale(1.08); } 35% { transform: scale(1); } 100% { transform: scale(1.06); } }
        @keyframes oneshaDotFill { from { width: 0%; } to { width: 100%; } }
        @keyframes oneshaFadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        .onesha-fade-up { animation: oneshaFadeUp 0.8s cubic-bezier(.22,.61,.36,1) both; }
      `}</style>

      {/* ---------- slides: photo + overlays are FULL WIDTH (edge-to-edge) ---------- */}
      {SLIDES.map((s, i) => (
        <div
          key={s.key}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-[1100ms] ease-in-out ${
            i === index
              ? "opacity-100 z-[2]"
              : "opacity-0 z-[1] pointer-events-none"
          }`}
        >
          {/* background photo: outer layer = parallax drift + hover lift (transition),
              inner layer = ambient ken-burns loop (keyframe) — kept on separate
              elements so the two motions never fight over the same transform */}
          <div className="absolute -inset-[8%] overflow-hidden">
            <div
              className="absolute -inset-[10%] will-change-transform"
              style={{
                transform:
                  i === index
                    ? `translate3d(${parallax.x * 16}px, ${parallax.y * 10}px, 0) scale(${
                        paused ? 1.045 : 1
                      })`
                    : "none",
                transition: "transform 0.65s cubic-bezier(.22,.61,.36,1)",
              }}
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${s.image}')`,
                  filter:
                    i === index && paused
                      ? "saturate(1) contrast(1.08) brightness(1.05)"
                      : "saturate(0.85) contrast(1.05) brightness(1)",
                  transition: "filter 0.65s ease",
                  animation:
                    i === index
                      ? "oneshaAmbientZoom 15s ease-in-out infinite alternate"
                      : "none",
                }}
              />
            </div>

            {/* cursor-following spotlight — premium hover interaction */}
            {i === index && (
              <div
                className="pointer-events-none absolute inset-0 mix-blend-soft-light transition-opacity duration-500"
                style={{
                  opacity: paused ? 1 : 0,
                  background: `radial-gradient(420px circle at ${cursor.x}% ${cursor.y}%, rgba(217,178,124,0.55), transparent 62%)`,
                }}
              />
            )}
          </div>

          {/* thin gold ring that follows the cursor — adds tactile depth */}
          {i === index && (
            <div
              className="pointer-events-none absolute z-[3] hidden sm:block rounded-full border border-[#D9B27C]/70 transition-[opacity,transform] duration-300 ease-out"
              style={{
                width: 26,
                height: 26,
                left: `calc(${cursor.x}% - 13px)`,
                top: `calc(${cursor.y}% - 13px)`,
                opacity: paused ? 0.9 : 0,
                transform: `scale(${paused ? 1 : 0.6})`,
              }}
            />
          )}

          {/* gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 1000px 560px at 80% 10%, rgba(184,135,79,0.20), transparent 60%), linear-gradient(160deg, rgba(8,12,22,0.72) 0%, rgba(12,18,32,0.58) 55%, rgba(6,9,16,0.82) 100%)",
            }}
          />

          {/* subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,192,168,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,192,168,0.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          {/* bottom fade for control legibility */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(6,9,16,0.85), transparent)",
            }}
          />

          {/* ---------- content: ONLY this is boxed inside the centered 1320px container ---------- */}
          {i === index && (
            <div className="relative z-[3] mx-auto flex h-full w-full max-w-[1320px] flex-col justify-start pt-8 pb-8 px-5 sm:justify-center sm:px-8 sm:pt-0 sm:pb-20 lg:pt-16">
              <div
                key={`eyebrow-${progressKey}`}
                className="onesha-fade-up mb-3 sm:mb-4 flex items-center gap-2.5 sm:gap-3 font-medium uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#D9B27C]"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "clamp(10px,1.8vw,11px)",
                }}
              >
                <span>{s.eyebrow}</span>
                <span className="hidden sm:block h-px flex-1 max-w-[110px] bg-current opacity-40" />
              </div>

              <h1
                key={`head-${progressKey}`}
                className="onesha-fade-up max-w-[15ch] sm:max-w-[18ch] font-semibold leading-[1.1] sm:leading-[1.05] text-[clamp(1.7rem,7vw,4.6rem)]"
                style={{
                  fontFamily: "'Fraunces', serif",
                  animationDelay: "0.12s",
                  textShadow: "0 2px 24px rgba(0,0,0,0.45)",
                }}
              >
                {s.headingPre}
                <em className="italic font-medium text-[#D9B27C]">
                  {s.headingEm}
                </em>
                {s.headingPost}
              </h1>

              <p
                key={`sub-${progressKey}`}
                className="onesha-fade-up mt-4 sm:mt-6 max-w-[44ch] sm:max-w-[52ch] text-[14px] sm:text-[16px] md:text-[17px] font-light leading-[1.6] sm:leading-relaxed text-[#D6DAE8]"
                style={{ animationDelay: "0.24s" }}
              >
                {s.sub}
              </p>

              <div
                key={`meta-${progressKey}`}
                className="onesha-fade-up mt-6 sm:mt-10 hidden [@media(min-height:560px)]:flex flex-wrap gap-x-7 gap-y-4 sm:gap-x-12 border-t border-[#3A4A6A] pt-4 sm:pt-6"
                style={{ animationDelay: "0.36s" }}
              >
                {s.meta.map((m) => (
                  <div key={m.l} className="flex flex-col gap-1.5">
                    <span
                      className="text-lg sm:text-xl md:text-2xl text-[#F3EFE3]"
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontWeight: 600,
                      }}
                    >
                      {m.v}
                    </span>
                    <span
                      className="uppercase tracking-[0.08em] sm:tracking-[0.1em] text-[#8C97AE]"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "9.5px",
                      }}
                    >
                      {m.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* ---------- controls: also boxed inside the same centered 1320px container ---------- */}
      <div className="absolute inset-x-0 bottom-4 sm:bottom-7 md:bottom-9 z-[4]">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-5 sm:gap-5 sm:px-8">
          <div
            className="order-3 sm:order-1 flex items-center gap-2 text-[#8C97AE]"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10.5px",
              letterSpacing: "0.08em",
            }}
          >
            <b className="text-[#D9B27C] font-medium">
              {String(index + 1).padStart(2, "0")}
            </b>
            <span>
              / {String(SLIDES.length).padStart(2, "0")} —{" "}
              {slide.key.charAt(0).toUpperCase() + slide.key.slice(1)}
            </span>
          </div>

          <div className="order-1 sm:order-2 flex items-center gap-3 sm:gap-2.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.key}
                type="button"
                aria-label={`Go to ${s.key} slide`}
                onClick={() => goTo(i)}
                className={`relative h-[2px] w-7 sm:w-9 cursor-pointer overflow-visible transition-colors before:absolute before:-inset-x-1 before:-inset-y-3 before:content-[''] ${
                  i === index
                    ? "bg-[#C9C0A8]/60"
                    : "bg-[#C9C0A8]/25 hover:bg-[#C9C0A8]/40"
                }`}
              >
                {i === index && (
                  <span
                    key={progressKey}
                    className="absolute inset-y-0 left-0 bg-[#B8874F]"
                    style={{
                      animation: paused
                        ? "none"
                        : `oneshaDotFill ${DURATION}ms linear forwards`,
                      width: paused ? "100%" : undefined,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="order-2 sm:order-3 flex gap-2.5">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-[#3A4A6A] text-[#F3EFE3] transition-colors hover:border-[#B8874F] hover:bg-[#B8874F]/10 active:scale-95"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-[#3A4A6A] text-[#F3EFE3] transition-colors hover:border-[#B8874F] hover:bg-[#B8874F]/10 active:scale-95"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;