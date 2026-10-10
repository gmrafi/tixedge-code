"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { mascotBounce } from "@/lib/animations";

export type BlockuMood = "idle" | "cheer" | "thinking" | "blink";

interface BlockuProps {
  mood?: BlockuMood;
  size?: number;
  className?: string;
  withHat?: boolean;
}

export function Blocku({
  mood = "idle",
  size = 56,
  className = "",
  withHat = true,
}: BlockuProps) {
  const [isBlinking, setIsBlinking] = useState(false);

  // Periodic natural blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const blink = mood === "blink" || isBlinking;

  return (
    <motion.div
      variants={mascotBounce}
      animate={mood === "cheer" ? "cheer" : mood === "thinking" ? "thinking" : "idle"}
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Studs on top of the Brick (Lego-style) */}
        {!withHat && (
          <g fill="#E05615">
            <rect x="28" y="20" width="12" height="7" rx="3.5" />
            <rect x="44" y="20" width="12" height="7" rx="3.5" />
            <rect x="60" y="20" width="12" height="7" rx="3.5" />
          </g>
        )}

        {/* Builder Hard Hat (Cover & Page 8 style) */}
        {withHat && (
          <g>
            {/* Hat brim */}
            <path
              d="M18 36C18 34.3431 19.3431 33 21 33H79C80.6569 33 82 34.3431 82 36C82 37.6569 80.6569 39 79 39H21C19.3431 39 18 37.6569 18 36Z"
              fill="#F59E0B"
            />
            {/* Hat dome */}
            <path
              d="M26 33C26 21 37 17 50 17C63 17 74 21 74 33H26Z"
              fill="#FBBF24"
            />
            {/* Hat ridge */}
            <path
              d="M47 17H53V33H47V17Z"
              fill="#D97706"
              opacity="0.4"
            />
          </g>
        )}

        {/* Brick Body (Warm Terracotta / Orange) */}
        <rect
          x="22"
          y="32"
          width="56"
          height="44"
          rx="10"
          fill="#F97316"
        />
        {/* Soft 3D bevel bottom */}
        <path
          d="M22 66C22 71.5228 26.4772 76 32 76H68C73.5228 76 78 71.5228 78 66V68C78 73.5228 73.5228 78 68 78H32C26.4772 78 22 73.5228 22 68V66Z"
          fill="#EA580C"
        />

        {/* Legs (Blue bricks like in book) */}
        <rect x="33" y="76" width="12" height="12" rx="3" fill="#2563EB" />
        <rect x="55" y="76" width="12" height="12" rx="3" fill="#2563EB" />
        {/* Little Shoes */}
        <rect x="30" y="85" width="16" height="5" rx="2.5" fill="#1D4ED8" />
        <rect x="54" y="85" width="16" height="5" rx="2.5" fill="#1D4ED8" />

        {/* Arms */}
        {mood === "cheer" ? (
          /* Cheering hands raised */
          <g fill="#F97316">
            <rect x="12" y="30" width="10" height="18" rx="5" transform="rotate(-35 12 30)" />
            <rect x="78" y="24" width="10" height="18" rx="5" transform="rotate(35 78 24)" />
          </g>
        ) : mood === "thinking" ? (
          /* Hand on chin thinking */
          <g fill="#F97316">
            <rect x="13" y="48" width="10" height="16" rx="5" transform="rotate(10 13 48)" />
            <rect x="68" y="48" width="10" height="16" rx="5" transform="rotate(-60 68 48)" />
          </g>
        ) : (
          /* Normal relaxed arms */
          <g fill="#F97316">
            <rect x="13" y="46" width="9" height="16" rx="4.5" transform="rotate(12 13 46)" />
            <rect x="78" y="46" width="9" height="16" rx="4.5" transform="rotate(-12 78 46)" />
          </g>
        )}

        {/* Eyes & Expression */}
        {blink ? (
          /* Blinking closed eyes */
          <g stroke="#1E293B" strokeWidth="3" strokeLinecap="round">
            <path d="M37 50Q41 53 45 50" />
            <path d="M55 50Q59 53 63 50" />
          </g>
        ) : (
          /* Big friendly round eyes */
          <g>
            {/* Sclera */}
            <circle cx="41" cy="49" r="6.5" fill="white" />
            <circle cx="59" cy="49" r="6.5" fill="white" />
            {/* Pupils */}
            <circle
              cx={mood === "thinking" ? 43 : 41.5}
              cy={mood === "thinking" ? 47 : 49.5}
              r="3.5"
              fill="#0F172A"
            />
            <circle
              cx={mood === "thinking" ? 61 : 59.5}
              cy={mood === "thinking" ? 47 : 49.5}
              r="3.5"
              fill="#0F172A"
            />
            {/* Eye light reflections */}
            <circle cx="43" cy="48" r="1.5" fill="white" />
            <circle cx="61" cy="48" r="1.5" fill="white" />
          </g>
        )}

        {/* Cheerful Smile */}
        <path
          d={
            mood === "cheer"
              ? "M42 59 Q50 67 58 59"
              : mood === "thinking"
              ? "M44 60 Q50 62 56 59"
              : "M43 59 Q50 65 57 59"
          }
          stroke="#0F172A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill={mood === "cheer" ? "#BE123C" : "none"}
        />

        {/* Rosy Cheeks */}
        <ellipse cx="33" cy="55" rx="3.5" ry="2" fill="#FB7185" opacity="0.6" />
        <ellipse cx="67" cy="55" rx="3.5" ry="2" fill="#FB7185" opacity="0.6" />
      </svg>
    </motion.div>
  );
}
