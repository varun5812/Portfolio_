"use client";
import React from "react";
import { motion } from "framer-motion";
import { timeline } from "@/data/portfolio";

export function Journey() {
  return (
    <section
      id="journey"
      className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-32 bg-cream/35 border-t border-gold/15"
    >
      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-accent"
          >
            04. Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-charcoal"
          >
            Milestones & <span className="text-luxury-serif italic font-normal text-brown-muted">Chronicle</span>
          </motion.h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gold/30 -translate-x-[0.5px]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Bullet Marker on Timeline Line */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gold/50 bg-cream -translate-x-1/2 z-10 shadow-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </div>

                  {/* Left Side spacer / Right Side content depending on orientation */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30, x: isEven ? 15 : -15 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className={`glass-card p-6 rounded-[20px] ${
                        isEven ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      {/* Year Indicator */}
                      <span className="inline-block rounded-md bg-gold/10 border border-gold/25 px-2.5 py-0.5 text-[10px] font-bold text-accent uppercase tracking-wider mb-3">
                        {item.year}
                      </span>
                      
                      {/* Title */}
                      <h4 className="text-sm sm:text-base font-bold text-charcoal mb-2">
                        {item.title}
                      </h4>
                      
                      {/* Text */}
                      <p className={`text-xs sm:text-sm text-brown-muted leading-relaxed font-normal ${
                        isEven ? "md:text-left" : "md:text-right"
                      }`}>
                        {item.text}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Empty Spacer Column for MD+ screens */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
