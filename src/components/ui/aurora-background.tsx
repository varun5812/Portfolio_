"use client";
import React from "react";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-cream">
      {/* Drifting Aurora Blobs (GPU-accelerated blur vectors) */}
      <div 
        className="absolute -top-[20%] -left-[10%] h-[70%] w-[60%] rounded-full bg-gradient-to-tr from-[#f3ece0] to-[#e9e0d2] opacity-60 blur-[120px] mix-blend-multiply animate-pulse" 
        style={{ animationDuration: "14s" }}
      />
      <div 
        className="absolute top-[20%] -right-[15%] h-[80%] w-[70%] rounded-full bg-gradient-to-bl from-[#dfd4c4] to-[#f7f2ea] opacity-50 blur-[140px] mix-blend-multiply animate-pulse" 
        style={{ animationDuration: "18s", animationDelay: "2s" }}
      />
      <div 
        className="absolute -bottom-[20%] left-[15%] h-[60%] w-[60%] rounded-full bg-gradient-to-tr from-[#e9e0d2] to-[#f3ece0] opacity-50 blur-[130px] mix-blend-multiply animate-pulse" 
        style={{ animationDuration: "16s", animationDelay: "4s" }}
      />
      
      {/* Fine-grained paper/sand noise texture for luxury tactile feel */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
