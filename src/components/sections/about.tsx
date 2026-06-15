"use client";
import React from "react";
import { motion } from "framer-motion";
import { Database, BarChart3, BrainCircuit, Sparkles, Workflow } from "lucide-react";
import { aboutHighlights, focusAreas } from "@/data/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight";

const focusIcons = [Database, BarChart3, BrainCircuit, Sparkles, Workflow];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-32 border-t border-gold/15"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-accent"
          >
            01. Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-charcoal"
          >
            A Story of <span className="text-luxury-serif italic font-normal text-brown-muted">Data & Discovery</span>
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          
          {/* Left: Biography Large Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card-heavy p-8 md:p-10 rounded-[28px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-luxury-serif italic text-2xl text-charcoal font-semibold">My Mission</span>
              <div className="h-[1px] flex-grow bg-gold/20" />
            </div>
            
            <p className="text-sm sm:text-base leading-relaxed text-charcoal/90 mb-6">
              As an Artificial Intelligence & Machine Learning engineer graduate (2025), 
              my passion lies in bridging raw, noisy data with intelligent, deployment-ready decision systems. 
              I focus on practical engineering: solid preprocessing, rigorous evaluation, and clean user-interfaces.
            </p>
            
            <div className="space-y-5 border-t border-dashed border-gold/20 pt-6">
              {aboutHighlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex gap-3.5 items-start"
                >
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold/70 border border-cream" />
                  <p className="text-xs sm:text-sm leading-relaxed text-brown-muted">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Specialized Focus Areas in Spotlight Grid */}
          <div className="space-y-4">
            <h3 className="text-luxury-serif italic text-lg font-semibold text-charcoal px-1">
              Specialized Focus Fields
            </h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area, i) => {
                const Icon = focusIcons[i] || Database;
                const isFull = i === 4; // Make the last card full-width

                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={isFull ? "sm:col-span-2" : ""}
                  >
                    <SpotlightCard className="glass-card p-5 rounded-[20px] h-full flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-charcoal bg-gold/10 px-2.5 py-1 rounded-md border border-gold/15">
                            {area.title}
                          </span>
                          <div className="text-gold p-1.5 bg-cream/50 rounded-lg border border-gold/15">
                            <Icon size={16} className="stroke-[2.5]" />
                          </div>
                        </div>
                        <p className="text-xs leading-relaxed text-brown-muted">{area.description}</p>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-1.5 pt-2 border-t border-dashed border-gold/10">
                        {area.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-cream border border-gold/10 px-2 py-0.5 text-[9px] font-semibold text-brown-muted"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
