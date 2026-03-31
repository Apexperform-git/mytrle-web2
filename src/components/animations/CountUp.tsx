"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type CountUpProps = {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function CountUp({
  end,
  suffix = "",
  duration = 1500,
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const steps = 60;
    const increment = end / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
