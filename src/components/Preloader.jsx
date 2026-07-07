"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const Preloader = () => {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = p < 70 ? 3 : 1;
        return Math.min(p + step, 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#faf8f5] px-6"
    >
      {/* subtle dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,29,51,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* soft ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d98e2b]/[0.10] blur-[110px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative flex flex-col items-center gap-8 sm:gap-9">
        {/* Logo + orbit ring */}
        <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
          {/* orbiting ring */}
          <motion.svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="rgba(11,29,51,0.10)"
              strokeWidth="1.5"
            />
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="#d98e2b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="60 235"
            />
          </motion.svg>

          {/* logo mark */}
          <motion.div
            animate={reduceMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex h-14 w-14 items-center justify-center bg-[#0b1d33] text-2xl font-semibold text-[#f2c879] shadow-[0_18px_40px_rgba(11,29,51,0.22)] sm:h-16 sm:w-16 sm:text-3xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            O
          </motion.div>
        </div>

        {/* Wordmark */}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-[13px] font-bold tracking-[0.03em] text-[#0b1d33] sm:text-[14px]"
        >
          ONESHA GROUP
        </motion.span>

        {/* progress bar with shimmer */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-[3px] w-40 overflow-hidden rounded-full bg-[#e6dfd2] sm:w-48">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="relative h-full rounded-full bg-[#d98e2b]"
            >
              {!reduceMotion && (
                <motion.span
                  animate={{ x: ["-100%", "220%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                />
              )}
            </motion.div>
          </div>

          <span
            className="text-[11px] tabular-nums tracking-[0.08em] text-[#345d8a]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {progress}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
