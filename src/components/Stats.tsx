"use client";

import { Award, ShieldCheck, Heart, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const trustFactors = [
  {
    icon: Award,
    title: "MD in Internal Medicine",
    desc: "Postgraduate medical training in internal medicine, focusing on complex adult health diagnostics.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Foundation",
    desc: "Developed diagnostic and clinical skills working at Aayush Hospital, Mehsana and practicing in Vadodara.",
  },
  {
    icon: MapPin,
    title: "Serving North Gujarat",
    desc: "Providing dedicated online health advice and consultation for people across North Gujarat.",
  },
  {
    icon: Heart,
    title: "Evidence-Based Guidance",
    desc: "A patient-focused approach prioritizing careful listening, continuous learning, and clear diagnostic explanations.",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-warm-sand border-y border-sage-light/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Subtle Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-gold-accent font-bold mb-3">
            Standards of Care
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-healing-teal font-normal leading-tight">
            A trusted medical partner in your journey toward sustained wellness.
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-start bg-sage-light/20 p-6 rounded-2xl border border-sage-light hover:border-gold-accent/40 hover:bg-sage-light/35 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-healing-teal/5 flex items-center justify-center text-healing-teal mb-5 group-hover:bg-healing-teal group-hover:text-warm-sand transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-healing-teal mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-healing-teal/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
