"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Dr. Naman is a dedicated physician who emphasizes careful listening. He took the time during our online consultation to study my diagnostics and lifestyle. Following his evidence-based guidance, my health markers improved significantly. I highly appreciate his patient-focused approach.",
    name: "Rajesh Patel",
    title: "Symptom Review Client",
    location: "Sidhpur, North Gujarat",
    avatar: "/DrNaman.png",
    monogram: "RP",
  },
  {
    quote: "I scheduled an online prescription review for my mother, who was taking multiple medications. Dr. Naman carefully analyzed the list for potential interactions and checked for redundancies. His structured health advice helped streamline her therapy safely. We are very grateful for his guidance.",
    name: "Vikramsinh Vaghela",
    title: "Care Advisor Client",
    location: "Mehsana, Gujarat",
    avatar: "/DrNaman.png",
    monogram: "VV",
  },
  {
    quote: "Dr. Naman provided invaluable remote health guidance. He helped explain my lab reports in detail, helping identify areas to monitor. His dedication to evidence-based advice has made him a trusted physician in our health journey.",
    name: "Dr. Nidhi Shah",
    title: "Dentist & Consultation Client",
    location: "Patan, North Gujarat",
    avatar: "/DrNaman.png",
    monogram: "NS",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className="py-24 bg-warm-sand-dark/15 border-t border-sage-light/60 relative overflow-hidden">
      <div className="absolute top-1/2 right-10 w-24 h-48 dot-pattern opacity-30 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-sans text-xs uppercase tracking-widest text-gold-accent font-bold">
              Patient Experiences
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-healing-teal font-normal leading-tight">
              Honest outcomes from personalized care.
            </h2>
            <p className="font-sans text-base text-healing-teal/70 leading-relaxed max-w-md">
              Dr. Naman works closely with patients to explain diagnostics, review medications, and offer personalized, evidence-based remote health advice.
            </p>

            {/* Custom Trust Statement */}
            <div className="pt-6 border-t border-sage-light/80">
              <p className="font-sans text-xs text-healing-teal/70 leading-relaxed">
                Focusing on safe clinical practices and modern guidance, Dr. Naman is building a growing practice trusted by those who have consulted him across North Gujarat.
              </p>
            </div>
          </div>

          {/* Right Column: Animated Quote Box Slider */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-warm-sand border border-sage-light/80 rounded-[32px] p-8 md:p-12 shadow-md min-h-[380px] flex flex-col justify-between overflow-hidden">
              
              {/* Quote Mark Decoration */}
              <div className="absolute top-8 right-8 text-gold-accent/15">
                <Quote className="w-20 h-20 fill-current" />
              </div>

              {/* Dynamic Slides */}
              <div className="relative z-10 flex-grow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="space-y-6"
                  >
                    <p className="font-serif text-lg sm:text-xl text-healing-teal/90 leading-relaxed italic">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                    
                    {/* Patient Meta */}
                    <div className="flex items-center gap-4 pt-6">
                      {/* Avatar / Monogram */}
                      <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center text-healing-teal font-serif font-bold text-sm border border-gold-accent">
                        {current.monogram}
                      </div>
                      <div>
                        <p className="font-serif text-base font-semibold text-healing-teal">{current.name}</p>
                        <p className="font-sans text-xs text-healing-teal/65">
                          {current.title} &bull; <span className="text-sage-green font-semibold">{current.location}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-8 border-t border-sage-light/40 mt-8 relative z-10">
                <span className="font-sans text-xs text-healing-teal/60">
                  Showing story {index + 1} of {testimonials.length}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-sage-medium flex items-center justify-center text-healing-teal hover:bg-sage-light/30 hover:border-healing-teal transition-all focus:outline-none"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-sage-medium flex items-center justify-center text-healing-teal hover:bg-sage-light/30 hover:border-healing-teal transition-all focus:outline-none"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
