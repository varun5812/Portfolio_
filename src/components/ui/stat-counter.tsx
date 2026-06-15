"use client";
import React, { useEffect, useState, useRef } from "react";

interface StatCounterProps {
  value: string; // E.g., "05", "04", "2025"
  duration?: number; // In milliseconds
}

export function StatCounter({ value, duration = 1500 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Check if target is a number
  const isNumeric = !isNaN(Number(value));
  const targetNumber = isNumeric ? Number(value) : 0;

  useEffect(() => {
    if (!isNumeric) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTime: number | null = null;
          const startValue = 0;
          const endValue = targetNumber;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease-out quad function for smooth deceleration
            const easeOutQuad = progress * (2 - progress);
            const currentValue = Math.floor(easeOutQuad * (endValue - startValue) + startValue);
            
            setCount(currentValue);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [targetNumber, duration, isNumeric]);

  if (!isNumeric) {
    return <span ref={elementRef}>{value}</span>;
  }

  // Preserve leading zeros if original value had them (e.g., "05")
  const preserveLeadingZero = value.startsWith("0") && value.length === 2 && count < 10;
  const displayValue = preserveLeadingZero ? `0${count}` : count.toString();

  return <span ref={elementRef} className="font-semibold">{displayValue}</span>;
}
