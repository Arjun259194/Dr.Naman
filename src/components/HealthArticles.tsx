"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Mail, Calendar, Clock, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const articles = [
  {
    image: "/wellness_flatlay.jpg",
    category: "Gastroenterology",
    date: "June 24, 2026",
    readTime: "6 min read",
    title: "Understanding your Digestion: Why gut health dictates immune response.",
    desc: "An in-depth review of the human microbiome, metabolic pathways, and actionable dietary protocols to optimize nutrient absorption.",
  },
  {
    image: "/clinic_desk.jpg",
    category: "Preventive Care",
    date: "May 18, 2026",
    readTime: "8 min read",
    title: "Vascular Health: Key blood biomarkers to assess cardiovascular risks.",
    desc: "Why standard lipid panels are insufficient. Exploring ApoB, Lp(a), andhs-CRP tests, and what they mean for long-term health.",
  },
];

export default function HealthArticles() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section id="articles" className="py-24 bg-warm-sand relative overflow-hidden border-t border-sage-light/60">
      <div className="absolute top-1/4 left-10 w-24 h-48 dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="font-sans text-xs uppercase tracking-widest text-gold-accent font-bold mb-3">
              Medical Literature
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-healing-teal font-normal leading-tight">
              Health insights from clinical practice.
            </h2>
          </div>
          <a
            href="#newsletter-box"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-healing-teal hover:text-gold-accent transition-colors group"
          >
            Explore all publications
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Articles List / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Main Featured Article (Left Columns) */}
          <div className="lg:col-span-8 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer flex flex-col h-full bg-sage-light/10 border border-sage-light/60 rounded-[32px] overflow-hidden hover:border-gold-accent/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-warm-sand">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <span className="absolute top-6 left-6 font-sans text-[10px] font-bold uppercase tracking-wider text-warm-sand bg-healing-teal px-3 py-1.5 rounded-full">
                  {articles[0].category}
                </span>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-4 text-healing-teal/65 text-xs font-sans mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {articles[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {articles[0].readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-healing-teal group-hover:text-healing-teal-light transition-colors mb-4">
                    {articles[0].title}
                  </h3>

                  <p className="font-sans text-sm text-healing-teal/70 leading-relaxed mb-6">
                    {articles[0].desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 text-sm font-semibold text-healing-teal group-hover:text-gold-accent transition-colors pt-4 border-t border-sage-light/40">
                  Read complete analysis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Secondary Featured Article / Sidebar (Right Columns) */}
          <div className="lg:col-span-4 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer flex flex-col h-full bg-sage-light/10 border border-sage-light/60 rounded-[32px] overflow-hidden hover:border-gold-accent/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-warm-sand">
                <Image
                  src={articles[1].image}
                  alt={articles[1].title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <span className="absolute top-6 left-6 font-sans text-[10px] font-bold uppercase tracking-wider text-warm-sand bg-healing-teal px-3 py-1.5 rounded-full">
                  {articles[1].category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-4 text-healing-teal/65 text-xs font-sans mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {articles[1].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {articles[1].readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-healing-teal group-hover:text-healing-teal-light transition-colors mb-3">
                    {articles[1].title}
                  </h3>

                  <p className="font-sans text-xs text-healing-teal/70 leading-relaxed mb-6">
                    {articles[1].desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-semibold text-healing-teal group-hover:text-gold-accent transition-colors pt-3 border-t border-sage-light/40">
                  Read analysis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Lead Magnet / Newsletter Form (Inspired by Peter Drucker quote block in reference.png) */}
        <div id="newsletter-box" className="relative bg-healing-teal text-warm-sand rounded-[40px] p-8 md:p-12 overflow-hidden border border-healing-teal-dark shadow-2xl">
          {/* Subtle geometry background */}
          <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-healing-teal-light/20 blur-2xl -z-10" />
          <div className="absolute left-8 bottom-8 w-24 h-24 dot-pattern opacity-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Quote / Subtext */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-gold-accent border-b border-gold-accent/40 pb-2 inline-block">
                Free Diagnostics Guide
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight">
                &ldquo;You can&apos;t manage what you don&apos;t measure.&rdquo;
              </h3>
              <p className="font-sans text-sm text-sage-light/80 leading-relaxed max-w-lg">
                Sign up to receive Dr. Naman&apos;s free PDF guide: <strong>&ldquo;Understanding Blood Assays: Key Blood Biomarkers for Longevity.&rdquo;</strong> Learn what parameters to monitor.
              </p>
            </div>

            {/* Subscription Form */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-healing-teal-light/40 border border-healing-teal-light p-6 rounded-2xl flex items-center gap-4 text-warm-sand"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold-accent/25 border border-gold-accent/40 flex items-center justify-center text-gold-accent">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold">Thank you for subscribing!</h4>
                      <p className="font-sans text-xs text-sage-light/80 mt-1">We have sent the Longevity Guide directly to your email inbox.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubscribe}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrorMsg("");
                        }}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-warm-sand text-healing-teal placeholder-healing-teal/55 focus:outline-none focus:ring-2 focus:ring-gold-accent/30 text-sm"
                      />
                      <Mail className="w-5 h-5 text-healing-teal/55 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                    
                    {errorMsg && (
                      <span className="font-sans text-xs text-red-300 font-semibold">{errorMsg}</span>
                    )}

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-gold-accent text-warm-sand font-bold text-sm hover:bg-gold-dark transition-colors shadow-lg shadow-gold-accent/20 text-center"
                    >
                      Download Longevity Guide
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
