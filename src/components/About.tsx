"use client";

import Image from "next/image";
import { ArrowRight, BookOpen, HeartPulse, User } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-warm-sand-dark/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-24 h-48 dot-pattern opacity-40 -translate-y-1/2 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with premium offsets */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[380px] aspect-[4/5] z-10"
            >
              {/* Outer double borders */}
              <div className="absolute inset-0 border border-gold-accent rounded-t-[120px] rounded-b-[30px] translate-x-4 -translate-y-4 -z-10" />
              <div className="absolute inset-0 bg-sage-medium/20 rounded-t-[120px] rounded-b-[30px] -z-10" />
              
              {/* Image Frame */}
              <div className="w-full h-full rounded-t-[120px] rounded-b-[30px] overflow-hidden border-2 border-warm-sand shadow-xl">
                <Image
                  src="/clinic_desk.jpg"
                  alt="Dr. Naman's Consultation Space"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stat Widget */}
              <div className="absolute -bottom-6 -right-6 bg-warm-sand border border-sage-medium p-5 rounded-2xl shadow-lg max-w-[180px]">
                <p className="font-serif text-sm font-semibold text-healing-teal">Evidence-Based Care</p>
                <div className="w-6 h-0.5 bg-gold-accent my-2" />
                <p className="font-sans text-[11px] text-healing-teal/70 leading-relaxed">
                  Patient-focused guidance tailored to your health biology.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio and Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <p className="font-sans text-xs uppercase tracking-widest text-gold-accent font-bold mb-3">
              The Physician
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-healing-teal font-normal leading-tight mb-8">
              clinical guidance built on careful <span className="italic text-gold-accent font-light">listening</span> and empathy.
            </h2>

            <div className="space-y-6 font-sans text-healing-teal/80 text-base leading-relaxed">
              <p>
                Dr. Naman Krishnarthi is an early-career MD Physician dedicated to delivering online medical consultations and remote health guidance. Having worked at Aayush Hospital, Mehsana and practiced in Vadodara, he brings modern, evidence-based clinical insights to patients seeking a personalized care approach.
              </p>
              <p>
                Focused on careful listening and continuous learning, Dr. Naman partners with patients to decode complex diagnostics and review therapeutic regimens. He is committed to providing clear, honest health advice for people across North Gujarat.
              </p>
            </div>

            {/* Sub-features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-healing-teal">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-healing-teal">Evidence-Based</h4>
                  <p className="font-sans text-sm text-healing-teal/70 mt-1">Grounded in rigorous clinical studies and diagnostic review.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-healing-teal">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-healing-teal">Patient Education</h4>
                  <p className="font-sans text-sm text-healing-teal/70 mt-1">Empowering you to understand your lab results and choices.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-sage-light/60 w-full flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-accent relative">
                  <Image
                    src="/DrNaman.png"
                    alt="Dr. Naman Krishnarthi Profile"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-healing-teal">Dr. Naman Krishnarthi</p>
                  <p className="font-sans text-[11px] text-sage-green font-semibold uppercase tracking-wider">MD (Internal Medicine)</p>
                </div>
              </div>
              <a
                href="#book-appointment"
                className="inline-flex items-center gap-1 text-sm font-semibold text-healing-teal hover:text-gold-accent transition-colors group"
              >
                Request online consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
