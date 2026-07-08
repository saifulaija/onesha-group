import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const TOPIC_OPTIONS = [
  "Onesha Motors",
  "Onesha Tech",
  "Onesha Textile",
  "Investment / partnership",
  "Something else",
];

const CForm = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "Onesha Motors",
    message: "",
  });
  const [topicOpen, setTopicOpen] = useState(false);
  const topicRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (topicRef.current && !topicRef.current.contains(e.target)) {
        setTopicOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.id]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-[#EEF1F6] pb-16 pt-20 sm:pt-24 md:pt-[96px] md:pb-10">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8">
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeUp}
          custom={0}
          className="mb-6 flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.16em] text-[#5C6577] before:block before:h-2 before:w-2 before:flex-shrink-0 before:bg-[#B85C38]"
        >
          Contact
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          custom={1}
          className="max-w-[760px] font-semibold tracking-[-0.01em] text-[#16203A]"
          style={{
            fontFamily: "'Fraunces',serif",
            fontSize: "clamp(32px,4.6vw,54px)",
            lineHeight: 1.1,
          }}
        >
          Tell us which thread you&rsquo;re
          <br />
          pulling on.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeUp}
          custom={2}
          className="mt-5 max-w-[560px] text-[15.5px] text-[#5C6577]"
        >
          Partner, investor, or client of Motors, Tech, or Textile — send a note
          and it reaches the right desk.
        </motion.p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-[52px] md:grid-cols-2">
          {/* Form panel */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={3}
            className="border border-[rgba(22,32,58,0.12)] bg-white p-6 sm:p-9"
          >
            <h3
              className="mb-5 font-semibold text-[#16203A]"
              style={{ fontFamily: "'Fraunces',serif", fontSize: "20px" }}
            >
              Send a message
            </h3>

            <form onSubmit={onSubmit}>
              <div className="mb-[18px]">
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-[10.5px] uppercase tracking-[0.06em] text-[#5C6577]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="w-full rounded-[2px] border border-[rgba(22,32,58,0.20)] bg-[#EEF1F6] px-3.5 py-3 text-[14.5px] text-[#16203A] outline-none transition-colors duration-150 focus:border-[#8A6C42]"
                />
              </div>

              <div className="mb-[18px]">
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-[10.5px] uppercase tracking-[0.06em] text-[#5C6577]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-[2px] border border-[rgba(22,32,58,0.20)] bg-[#EEF1F6] px-3.5 py-3 text-[14.5px] text-[#16203A] outline-none transition-colors duration-150 focus:border-[#8A6C42]"
                />
              </div>

              <div className="relative mb-[18px]" ref={topicRef}>
                <label
                  htmlFor="topic"
                  className="mb-2 block font-mono text-[10.5px] uppercase tracking-[0.06em] text-[#5C6577]"
                >
                  This is about
                </label>

                <button
                  id="topic"
                  type="button"
                  onClick={() => setTopicOpen((o) => !o)}
                  aria-haspopup="listbox"
                  aria-expanded={topicOpen}
                  className={`flex w-full items-center justify-between rounded-[2px] border bg-[#EEF1F6] px-3.5 py-3 text-left text-[14.5px] text-[#16203A] outline-none transition-colors duration-150 ${
                    topicOpen
                      ? "border-[#0E1626]"
                      : "border-[rgba(22,32,58,0.20)] hover:border-[#8A6C42]"
                  }`}
                >
                  <span>{form.topic}</span>
                  <motion.svg
                    animate={{ rotate: topicOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="ml-2 flex-shrink-0"
                  >
                    <path
                      d="M3 5l4 4 4-4"
                      stroke="#5C6577"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {topicOpen && (
                    <motion.ul
                      role="listbox"
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 right-0 top-full z-20 mt-1.5 overflow-hidden rounded-[3px] border border-[rgba(22,32,58,0.14)] bg-white py-1.5 shadow-[0_12px_32px_rgba(14,22,38,0.16)]"
                    >
                      {TOPIC_OPTIONS.map((opt) => {
                        const active = opt === form.topic;
                        return (
                          <li
                            key={opt}
                            role="option"
                            aria-selected={active}
                            onClick={() => {
                              setForm((f) => ({ ...f, topic: opt }));
                              setTopicOpen(false);
                            }}
                            className={`flex cursor-pointer items-center justify-between px-3.5 py-2.5 text-[13.5px] transition-colors duration-100 ${
                              active
                                ? "bg-[#0E1626] text-[#F3EFE6]"
                                : "bg-white text-[#16203A] hover:bg-[#0E1626] hover:text-[#F3EFE6]"
                            }`}
                          >
                            <span>{opt}</span>
                            {active && (
                              <span className="ml-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C79A5B]" />
                            )}
                          </li>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <div className="mb-[18px]">
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10.5px] uppercase tracking-[0.06em] text-[#5C6577]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="A few lines about what you need"
                  value={form.message}
                  onChange={onChange}
                  className="min-h-[104px] w-full resize-y rounded-[2px] border border-[rgba(22,32,58,0.20)] bg-[#EEF1F6] px-3.5 py-3 text-[14.5px] text-[#16203A] outline-none transition-colors duration-150 focus:border-[#8A6C42]"
                />
              </div>

              <motion.button
                type="submit"
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
                className="group cursor-pointer relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#0E1626] bg-[#0E1626] px-6 py-3 text-[13px] font-semibold text-[#F3EFE6] shadow-[0_6px_18px_-8px_rgba(14,22,38,0.5)] transition-shadow duration-300 hover:shadow-[0_10px_26px_-8px_rgba(14,22,38,0.55)] sm:w-auto"
              >
                <motion.span
                  variants={{ hover: { x: "0%" } }}
                  initial={{ x: "-100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#C79A5B]"
                />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0E1626]">
                  Send message
                </span>
                <motion.svg
                  variants={{ hover: { x: 3 } }}
                  initial={{ x: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative z-10 h-3.5 w-3.5 flex-shrink-0 transition-colors duration-300 group-hover:text-[#0E1626]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </motion.svg>
              </motion.button>

              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={
                  sent
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-3.5 overflow-hidden text-[12.5px] text-[#5C6577]"
              >
                Thanks — wire this form to your inbox or CRM to make it live.
              </motion.p>
            </form>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={4}
            className="border border-[rgba(22,32,58,0.12)] bg-white p-6 sm:p-9"
          >
            <h3
              className="mb-5 font-semibold text-[#16203A]"
              style={{ fontFamily: "'Fraunces',serif", fontSize: "20px" }}
            >
              Direct details
            </h3>

            <div className="flex items-start justify-between gap-3 py-4 text-sm">
              <span className="font-mono text-[10.5px] tracking-[0.06em] text-[#5C6577]">
                EMAIL
              </span>
              <a
                href="mailto:hello@oneshagroup.com"
                className="text-right text-[#16203A] no-underline transition-colors duration-150 hover:text-[#8A6C42]"
              >
                hello@oneshagroup.com
              </a>
            </div>
            <div className="flex items-start justify-between gap-3 border-t border-[rgba(22,32,58,0.12)] py-4 text-sm">
              <span className="font-mono text-[10.5px] tracking-[0.06em] text-[#5C6577]">
                PHONE
              </span>
              <a
                href="tel:+8800000000"
                className="text-right text-[#16203A] no-underline transition-colors duration-150 hover:text-[#8A6C42]"
              >
                +880 00 000000
              </a>
            </div>
            <div className="flex items-start justify-between gap-3 border-t border-[rgba(22,32,58,0.12)] py-4 text-sm">
              <span className="font-mono text-[10.5px] tracking-[0.06em] text-[#5C6577]">
                OFFICE
              </span>
              <span className="text-right text-[#16203A]">
                Dhaka, Bangladesh
              </span>
            </div>
            <div className="flex items-start justify-between gap-3 border-t border-[rgba(22,32,58,0.12)] py-4 text-sm">
              <span className="font-mono text-[10.5px] tracking-[0.06em] text-[#5C6577]">
                HOURS
              </span>
              <span className="text-right text-[#16203A]">
                Sun &ndash; Thu, 10:00 &ndash; 18:00 (GMT+6)
              </span>
            </div>

            <div className="mt-[22px]">
              <div className="flex items-center gap-[11px] py-[11px] font-mono text-[12.5px]">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#B85C38]" />
                Onesha Motors &mdash; motors@oneshagroup.com
              </div>
              <div className="flex items-center gap-[11px] border-t border-[rgba(22,32,58,0.12)] py-[11px] font-mono text-[12.5px]">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#3E9280]" />
                Onesha Tech &mdash; tech@oneshagroup.com
              </div>
              <div className="flex items-center gap-[11px] border-t border-[rgba(22,32,58,0.12)] py-[11px] font-mono text-[12.5px]">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#5A67A6]" />
                Onesha Textile &mdash; textile@oneshagroup.com
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CForm;
