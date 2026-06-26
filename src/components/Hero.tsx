"use client";

import Image from "next/image";
import { ArrowUpRight, Play, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#book-appointment");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-warm-sand">
      {/* Decorative dot grids */}
      <div className="absolute top-32 left-8 w-24 h-48 dot-pattern opacity-60 hidden md:block" />
      <div className="absolute bottom-20 right-8 w-32 h-40 dot-pattern opacity-60 hidden md:block" />
      
      {/* Background soft color fields for premium styling */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sage-light/30 blur-3xl -z-10" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-gold-light/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sage-green/30 bg-sage-light/40 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-healing-teal">
              Serving Patients Across North Gujarat
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl xl:text-7xl text-healing-teal leading-[1.08] tracking-tight mb-8"
          >
            reclaiming <br />
            <span className="font-serif italic font-light text-gold-accent">vitality</span> through <br />
            <span className="font-bold">personalized</span> Care.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg text-healing-teal/75 max-w-xl leading-relaxed mb-10"
          >
            Hi, I&apos;m Dr. Naman Krishnarthi. As a modern, compassionate MD Physician, I combine evidence-based medicine with an individualized, patient-focused approach to remote health guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#book-appointment"
              onClick={handleScrollToBooking}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-healing-teal text-warm-sand font-semibold hover:bg-healing-teal-light transition-all duration-300 shadow-lg shadow-healing-teal/10 hover:-translate-y-0.5 group"
            >
              Request Consultation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <a
              href="#online-services"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-healing-teal/20 bg-warm-sand hover:bg-sage-light/30 text-healing-teal font-semibold transition-all duration-300 hover:border-healing-teal/40 group"
            >
              Explore Digital Care
            </a>
          </motion.div>

          {/* Quick Stats Overlay replaced with honest, patient-first statement */}
          <div className="mt-12 border-t border-sage-light pt-8 w-full max-w-xl">
            <p className="font-serif text-lg italic text-healing-teal leading-relaxed">
              &ldquo;My practice is built on careful listening, evidence-based guidance, and continuous learning, ensuring each patient gets the time and attention they deserve.&rdquo;
            </p>
            <p className="font-sans text-[11px] uppercase tracking-widest text-sage-green font-bold mt-2">
              Dr. Naman Krishnarthi &bull; Patient-Focused Approach
            </p>
          </div>
        </div>

        {/* Right Column: Visual Frame and Image */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-[3/4] z-10"
          >
            {/* Background Sage green geometry arch and decorative dots */}
            <div className="absolute inset-0 bg-sage-light rounded-t-[160px] rounded-b-[40px] -z-10 translate-x-4 translate-y-4" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 dot-pattern opacity-40 -z-10" />
            
            {/* Gold Accent Ring */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border-2 border-dashed border-gold-accent opacity-60 animate-spin-slow -z-10" />

            {/* Doctor Image Container */}
            <div className="w-full h-full rounded-t-[160px] rounded-b-[40px] overflow-hidden border-4 border-warm-sand shadow-2xl relative">
              <Image
                src="/DrNaman.png"
                alt="Dr. Naman Krishnarthi MD"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover hover:scale-102 transition-transform duration-700"
              />
            </div>

            {/* Custom Interactive Floating Tag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-10 -left-6 bg-healing-teal text-warm-sand p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-healing-teal-light"
            >
              <div className="w-10 h-10 rounded-full bg-gold-accent/20 flex items-center justify-center text-gold-accent font-semibold font-serif text-lg">
                NK
              </div>
              <div>
                <p className="font-serif text-sm font-semibold text-white">Dr. Naman Krishnarthi</p>
                <p className="font-sans text-[10px] tracking-wider uppercase text-sage-light">MD Internal Medicine</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down Arrow / Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer hidden sm:flex">
        <span className="font-sans text-[10px] uppercase tracking-widest text-healing-teal font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4 text-healing-teal" />
        </motion.div>
      </div>
    </section>
  );
}
