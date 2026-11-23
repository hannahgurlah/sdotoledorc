"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function calculateTimeLeft(targetIso: string): TimeLeft {
  const difference = new Date(targetIso).getTime() - Date.now();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isPast: false,
  };
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft ? timeLeft.days : "--" },
    { label: "Hours", value: timeLeft ? String(timeLeft.hours).padStart(2, "0") : "--" },
    { label: "Minutes", value: timeLeft ? String(timeLeft.minutes).padStart(2, "0") : "--" },
    { label: "Seconds", value: timeLeft ? String(timeLeft.seconds).padStart(2, "0") : "--" },
  ];

  return (
    <div className="rounded-2xl border border-red-200/30 bg-red-950/55 p-5 sm:p-6 backdrop-blur-md shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2 text-red-100 text-xs sm:text-sm font-semibold uppercase tracking-wider">
          <Clock className="w-4 h-4 text-amber-300" />
          <span>{timeLeft?.isPast ? "Congress Day Has Arrived" : "Countdown to Congress Opening"}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-red-200 font-medium">
          <Calendar className="w-3.5 h-3.5 text-amber-300" />
          <span>Dec 7, 2026 • 8:00 AM PHT</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-red-800/80 to-red-950/90 border border-red-400/25 py-3.5 sm:py-4 px-2 shadow-inner"
          >
            <span className="text-2xl sm:text-4xl font-extrabold tabular-nums text-white tracking-tight">
              {unit.value}
            </span>
            <span className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-red-200">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
