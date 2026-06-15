"use client";
import React, { useRef, MouseEvent } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "", ...props }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set variables on the DOM element directly for high performance
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Light-Beige Spotlight Overlay */}
      <div className="spotlight-glow" />
      
      {/* Inner Content Container */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
