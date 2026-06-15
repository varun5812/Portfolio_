"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight";
import { GithubIcon } from "@/components/ui/icons";

export function Projects() {
  return (
    <section
      id="projects"
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
            03. Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-charcoal"
          >
            Featured <span className="text-luxury-serif italic font-normal text-brown-muted">Case Studies</span>
          </motion.h2>
        </div>

        {/* Grid of Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => {
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <SpotlightCard className="glass-card hover:glass-card-heavy rounded-[24px] overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-500 group">
                  
                  {/* Image Container with Zoom effect */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand/20 border-b border-gold/15">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority={idx < 2}
                    />
                    {/* Project Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 rounded-md border border-gold/30 bg-cream/90 backdrop-blur-md px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-charcoal">
                        <Sparkles size={9} className="text-gold" /> {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Details Container */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6">
                    <div className="space-y-4">
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-charcoal leading-snug group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-brown-muted leading-relaxed font-normal">
                        {project.summary}
                      </p>

                      {/* Highlights block */}
                      <div className="rounded-xl border border-gold/15 bg-cream/50 p-4 space-y-2">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-gold">
                          Key Contributions
                        </span>
                        <ul className="space-y-1.5">
                          {project.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex gap-2.5 items-start text-xs text-charcoal/80 font-normal">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold border border-cream" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech & Actions at bottom */}
                    <div className="space-y-6 pt-4 border-t border-dashed border-gold/15">
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-cream/70 border border-gold/10 px-2 py-0.5 text-[9px] font-semibold text-brown-muted transition-transform duration-300 group-hover:scale-[1.03]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTA Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gold/30 bg-cream/35 px-4.5 py-2 text-[11px] font-bold uppercase tracking-wider text-charcoal shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold/15 active:scale-95"
                          >
                            <GithubIcon size={12} className="stroke-[2.5]" /> {project.githubLabel || "GitHub"}
                          </a>
                        )}
                        {"liveUrl" in project && project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-charcoal bg-charcoal px-4.5 py-2 text-[11px] font-bold uppercase tracking-wider text-cream shadow-sm transition-all duration-300 hover:bg-charcoal/80 active:scale-95"
                          >
                            <ArrowUpRight size={12} className="stroke-[2.5]" /> {project.liveLabel || "Live App"}
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
