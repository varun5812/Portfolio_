"use client";
import React, { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Trophy, Send, Download } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-hide success message after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-12 md:px-20 lg:px-32 border-t border-gold/15 pb-32"
    >
      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-accent"
          >
            07. Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl sm:text-4xl font-bold text-charcoal"
          >
            Drop a <span className="text-luxury-serif italic font-normal text-brown-muted">Letter / Note</span>
          </motion.h2>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-stretch">
          
          {/* Left Column: Social Links and Recruiter Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-[28px] flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-luxury-serif italic text-2xl font-bold text-charcoal">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-xs sm:text-sm text-brown-muted mt-2 font-normal">
                  Recruiters and hiring managers: I am open for entry-level data science, analytics, and machine learning positions. Let's start a conversation!
                </p>
              </div>

              {/* Social List */}
              <div className="space-y-3 pt-2">
                {[
                  {
                    href: socialLinks.linkedin,
                    icon: LinkedinIcon,
                    label: "LinkedIn",
                    desc: "Professional connections",
                    color: "bg-gold/10 text-gold hover:bg-gold/20"
                  },
                  {
                    href: socialLinks.github,
                    icon: GithubIcon,
                    label: "GitHub",
                    desc: "Repository source code",
                    color: "bg-gold/10 text-gold hover:bg-gold/20"
                  },
                  {
                    href: socialLinks.email,
                    icon: Mail,
                    label: "Email Direct",
                    desc: "varunkumar5812@gmail.com",
                    color: "bg-gold/10 text-gold hover:bg-gold/20"
                  },
                  {
                    href: socialLinks.leetcode,
                    icon: Trophy,
                    label: "LeetCode",
                    desc: "Algorithm training profiles",
                    color: "bg-gold/10 text-gold hover:bg-gold/20"
                  }
                ].map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label !== "Email Direct" ? "_blank" : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex items-center gap-4 rounded-xl border border-gold/10 p-3 bg-cream/20 hover:border-gold/30 hover:bg-cream/40 transition-all duration-300"
                  >
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/20 transition-all duration-300 ${item.color}`}>
                      <item.icon size={15} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-charcoal">{item.label}</p>
                      <p className="text-[11px] text-brown-muted mt-0.5 font-normal">{item.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Extra Location & Resume Download link */}
            <div className="mt-8 pt-6 border-t border-dashed border-gold/15 space-y-4">
              <div className="text-center text-xs font-bold uppercase tracking-wider text-brown-muted">
                Bengaluru, Karnataka, India 📍
              </div>
              <div className="flex justify-center">
                <MagneticButton
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-charcoal text-cream border-charcoal hover:bg-charcoal/90 text-center"
                >
                  Download CV / Resume <Download size={14} />
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Styled Letter Mail Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-heavy p-8 rounded-[28px] relative overflow-hidden"
          >
            {/* Stamp decoration */}
            <div className="absolute top-6 right-6 w-14 h-16 border border-dashed border-gold/50 bg-[#faf8f5] flex items-center justify-center rounded p-1 select-none transform rotate-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <span className="text-[8px] font-bold text-gold/80 rotate-12 uppercase tracking-widest leading-none text-center">
                AI MAIL<br />VARUN
              </span>
            </div>

            <h3 className="text-luxury-serif italic text-xl font-semibold text-charcoal border-b border-dashed border-gold/20 pb-4 mb-6">
              Write a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/70">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g., Gon Freecss"
                    className="w-full rounded-xl border border-gold/20 bg-cream/25 px-4 py-3 text-xs sm:text-sm text-charcoal outline-none transition duration-300 focus:bg-cream focus:border-gold/60 focus:shadow-[0_4px_12px_-4px_rgba(197,168,128,0.15)]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/70">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g., gon@hunter.org"
                    className="w-full rounded-xl border border-gold/20 bg-cream/25 px-4 py-3 text-xs sm:text-sm text-charcoal outline-none transition duration-300 focus:bg-cream focus:border-gold/60 focus:shadow-[0_4px_12px_-4px_rgba(197,168,128,0.15)]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/70">Message Note</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Say hello, share a project, or drop a career suggestion..."
                  className="w-full rounded-xl border border-gold/20 bg-cream/25 px-4 py-3 text-xs sm:text-sm text-charcoal outline-none transition duration-300 focus:bg-cream focus:border-gold/60 focus:shadow-[0_4px_12px_-4px_rgba(197,168,128,0.15)] resize-none"
                />
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-charcoal px-5 py-3 text-xs font-bold uppercase tracking-wider text-cream shadow-sm transition-all duration-300 hover:bg-charcoal/85 disabled:bg-charcoal/45 active:scale-95 cursor-pointer"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Note <Send size={11} className="stroke-[2.5]" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-xs font-bold text-accent flex items-center gap-1 bg-[#f5efe5] border border-gold/20 px-3.5 py-2 rounded-xl shadow-sm"
                    >
                      ✨ Note sent successfully!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
