"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight";

export function Certifications() {
  return (
    <section
      id="certifications"
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
            05. Credentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-charcoal"
          >
            Certifications & <span className="text-luxury-serif italic font-normal text-brown-muted">Endorsements</span>
          </motion.h2>
        </div>

        {/* Grid of Credentials */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => {
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <SpotlightCard className="glass-card p-6 rounded-[22px] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    {/* Top Header Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                        <Award size={16} className="stroke-[2.5]" />
                      </div>
                      <span className="flex items-center gap-1 rounded bg-[#f5efe5] border border-gold/10 px-2 py-0.5 text-[8px] font-bold text-accent uppercase tracking-wider">
                        <CheckCircle size={9} className="text-gold" /> Verified
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <div className="space-y-1.5">
                      <h4 className="text-sm sm:text-base font-bold text-charcoal leading-tight group-hover:text-gold transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-brown-muted font-normal">
                        Issuer: {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Verification CTA */}
                  <div className="pt-4 mt-6 border-t border-dashed border-gold/15 flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-brown-muted">
                      Credential Status: Active
                    </span>
                    <a
                      href={cert.link}
                      className="text-[10px] font-bold uppercase tracking-wider text-charcoal hover:text-gold transition-colors duration-200"
                    >
                      View Credential &rarr;
                    </a>
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
