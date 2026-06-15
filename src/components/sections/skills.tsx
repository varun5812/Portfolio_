"use client";
import React from "react";
import { motion } from "framer-motion";
import { Database, BarChart3, BrainCircuit, Sparkles, Workflow, Briefcase } from "lucide-react";
import { skills } from "@/data/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight";

const categoryIcons: Record<string, React.ComponentType<any>> = {
  "Data Foundation": Database,
  "Analytics & Visualization": BarChart3,
  "Machine Learning": BrainCircuit,
  "Deep Learning": Sparkles,
  "Generative AI": Workflow,
  "Deployment & Tools": Briefcase
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-32 bg-cream/35 border-t border-gold/15"
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
            02. Arsenal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-charcoal"
          >
            Technical & <span className="text-luxury-serif italic font-normal text-brown-muted">Methodological Skills</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {skills.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Database;
            
            // Design distinct grid spans for a high-end Bento Grid appearance
            let gridSpan = "col-span-1";
            if (group.category === "Generative AI") {
              gridSpan = "md:col-span-2 lg:col-span-2 row-span-1";
            } else if (group.category === "Deployment & Tools") {
              gridSpan = "md:col-span-2 lg:col-span-1";
            } else if (group.category === "Analytics & Visualization") {
              gridSpan = "col-span-1";
            }

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`${gridSpan}`}
              >
                <SpotlightCard className="glass-card p-6 md:p-8 rounded-[24px] h-full flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/20 text-gold shrink-0">
                        <Icon size={18} className="stroke-[2.5]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-charcoal">{group.category}</h3>
                    </div>

                    {/* Category Intro */}
                    <p className="text-xs sm:text-sm text-brown-muted leading-relaxed font-normal">
                      {group.intro}
                    </p>

                    {/* Skill List */}
                    <div className="grid gap-3 pt-2">
                      {group.items.map((skill, sIdx) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-charcoal/90">{skill.name}</span>
                            <span className="text-[10px] font-bold text-gold bg-cream px-1.5 py-0.5 rounded border border-gold/10">
                              {skill.level}%
                            </span>
                          </div>
                          {/* Premium Minimal Progress Bar */}
                          <div className="h-1 rounded-full bg-sand/30 overflow-hidden relative">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.1 + sIdx * 0.05, ease: "easeOut" }}
                              className="h-full bg-gold rounded-full"
                            />
                          </div>
                        </div>
                      ))}
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
