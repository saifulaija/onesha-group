import { motion } from "framer-motion";

const CForm = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F1] py-24">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#C9A227]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0B1D33]/5 blur-[150px]" />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#d8d2c6 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] text-[#C9A227]">
              CONTACT
            </span>

            <h2 className="mt-8 text-5xl font-semibold leading-tight text-[#0B1D33]">
              Tell us which thread
              <span className="block text-[#C9A227]">you're pulling on.</span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-9 text-gray-600">
              Partner, investor, or client of Motors, Tech, or Textile — send a
              note and it reaches the right desk.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-[#E7E2D8] bg-white p-10 shadow-[0_30px_80px_rgba(0,0,0,.08)]"
          >
            <h3 className="mb-8 text-2xl font-semibold text-[#0B1D33]">
              Send a Message
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your full name"
                className="h-14 w-full rounded-xl border border-[#E7E2D8] bg-[#FBFAF7] px-5 outline-none transition focus:border-[#C9A227]"
              />

              <input
                type="email"
                placeholder="you@company.com"
                className="h-14 w-full rounded-xl border border-[#E7E2D8] bg-[#FBFAF7] px-5 outline-none transition focus:border-[#C9A227]"
              />

              {/* <select className="h-14 w-full rounded-xl border border-[#E7E2D8] bg-[#FBFAF7] px-5 outline-none transition focus:border-[#C9A227]">
                <option>Onesha Motors</option>
                <option>Onesha Tech</option>
                <option>Onesha Textile</option>
              </select> */}
              <div className="relative">
                <select
                  className="
      h-14
      w-full
      appearance-none
      rounded-xl
      border
      border-[#E7E2D8]
      bg-[#FBFAF7]
      px-5
      pr-14
      text-[15px]
      font-medium
      text-[#0b1d33]
      outline-none
      transition-all
      duration-300
      cursor-pointer
      focus:border-[#d98e2b]
      focus:ring-4
      focus:ring-[#f2c879]/40
      hover:border-[#d98e2b]/70
    "
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                  }}
                >
                  <option value="">Select a Division</option>
                  <option>Onesha Motors</option>
                  <option>Onesha Tech</option>
                  <option>Onesha Textile</option>
                </select>

                {/* Custom Arrow */}
                <svg
                  className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#d98e2b]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <textarea
                rows="6"
                placeholder="A few lines about what you need"
                className="w-full rounded-xl border border-[#E7E2D8] bg-[#FBFAF7] p-5 outline-none transition focus:border-[#C9A227]"
              />

              <button className="rounded-full bg-[#0B1D33] px-8 py-4 font-medium text-white transition hover:bg-[#C9A227] hover:text-[#0B1D33]">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CForm;
