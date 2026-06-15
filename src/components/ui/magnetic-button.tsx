"use client";
import React, { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  download,
  target,
  rel
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Subtle magnetic strength (factor of 0.28)
    setPosition({ x: x * 0.28, y: y * 0.28 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const buttonContent = (
    <motion.span
      className="relative z-10 flex items-center justify-center gap-2"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.span>
  );

  const containerClasses = `group relative overflow-hidden rounded-full border border-gold/40 bg-cream/40 px-6.5 py-3 text-sm font-semibold text-charcoal shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gold hover:shadow-[0_8px_25px_-5px_rgba(197,168,128,0.35)] hover:bg-cream/60 active:scale-97 ${className}`;

  if (href) {
    return (
      <motion.a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={containerClasses}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Subtle radial glow animation behind text */}
        <div 
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(197,168,128,0.22),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            // Keep variables dynamic or center if not hovering
            "--mouse-x": isHovered ? `${position.x + 50}%` : "50%",
            "--mouse-y": isHovered ? `${position.y + 50}%` : "50%"
          } as React.CSSProperties}
        />
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={containerClasses}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(197,168,128,0.22),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          "--mouse-x": isHovered ? `${position.x + 50}%` : "50%",
          "--mouse-y": isHovered ? `${position.y + 50}%` : "50%"
        } as React.CSSProperties}
      />
      {buttonContent}
    </motion.button>
  );
}
