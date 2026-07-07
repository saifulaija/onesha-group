

import { motion } from "framer-motion";

const CMap = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] pt-24">
      {/* Heading */}
      <div className="mx-auto mb-14 max-w-[1320px] px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs uppercase tracking-[0.35em] text-[#d98e2b]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            OUR LOCATION
          </span>

          <h2
            className="mt-4 text-4xl font-bold text-[#0b1d33] md:text-5xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Find Us in Japan
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-[#5c6b7d]">
            Strategically positioned to support businesses across Japan through
            innovation, excellence, and long-term partnerships.
          </p>
        </motion.div>
      </div>

      {/* Full Width Map */}
      <div className="relative">
        <iframe
          title="Japan Map"
          src="https://maps.google.com/maps?q=Japan&t=&z=5&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          allowFullScreen
          className="h-[420px] w-full md:h-[650px]"
          style={{
            border: 0,
            filter: "grayscale(8%) contrast(105%) saturate(90%)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d33]/15 via-transparent to-[#0b1d33]/10" />

        {/* Floating Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute left-1/2 top-6 w-[92%] max-w-md -translate-x-1/2 rounded-[28px] border border-white/30 bg-white/90 p-8 shadow-[0_30px_80px_rgba(11,29,51,.18)] backdrop-blur-xl md:left-auto md:right-10 md:top-10 md:translate-x-0"
        >
          {/* Logo */}
          <div className="flex items-baseline gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center bg-[#0b1d33] text-lg font-semibold text-[#f2c879]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              O
            </div>

            <div>
              <h3 className="text-[17px] font-bold text-[#0b1d33]">
                ONESHA GROUP
              </h3>

              <p
                className="text-[11px] tracking-[0.04em] text-[#345d8a]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                STRATEGY / CATEGORY 02
              </p>
            </div>
          </div>

          <div className="mt-7 space-y-5">
            <div className="flex gap-3">
              <span className="text-lg">📍</span>
              <div>
                <h4 className="font-semibold text-[#0b1d33]">Head Office</h4>
                <p className="mt-1 text-sm leading-6 text-[#5c6b7d]">
                  Tokyo, Japan
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-lg">✉️</span>
              <div>
                <h4 className="font-semibold text-[#0b1d33]">Email</h4>
                <p className="mt-1 text-sm text-[#5c6b7d]">
                  contact@oneshagroup.com
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Japan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#0b1d33] px-6 py-3.5 text-sm font-semibold text-[#f2c879] transition-all duration-300 hover:-translate-y-1 hover:bg-[#162b45]"
          >
            Open in Google Maps
          </a>
        </motion.div>

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-[#0b1d33]" />
      </div>
    </section>
  );
};

export default CMap;