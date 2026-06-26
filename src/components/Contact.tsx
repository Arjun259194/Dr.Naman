"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-warm-sand-dark/20 relative overflow-hidden border-t border-sage-light/60">
      <div className="absolute bottom-1/4 right-10 w-24 h-48 dot-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left: Contact Info & Inquiry Form */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
            
            {/* Header info */}
            <div className="space-y-4">
              <p className="font-sans text-xs uppercase tracking-widest text-gold-accent font-bold">
                Get In Touch
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl text-healing-teal font-normal leading-tight">
                Establish clinical connection.
              </h2>
              <p className="font-sans text-sm text-healing-teal/70 leading-relaxed max-w-md">
                Our clinical desk is available to assist with bookings, document submissions, or general inquiries. Reach out via email, phone, or the message portal.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-warm-sand border border-sage-medium flex items-center justify-center text-healing-teal flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-healing-teal">Practice Location</h4>
                  <p className="font-sans text-sm text-healing-teal/75 leading-relaxed mt-1">
                    Administrative Hub in Mehsana, Gujarat.<br />
                    Serving patients across North Gujarat virtually.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-warm-sand border border-sage-medium flex items-center justify-center text-healing-teal flex-shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-healing-teal">Consultation Hours</h4>
                  <p className="font-sans text-sm text-healing-teal/75 leading-relaxed mt-1">
                    Monday &ndash; Saturday: By scheduled digital appointment<br />
                    Sundays: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-warm-sand border border-sage-medium flex items-center justify-center text-healing-teal flex-shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-healing-teal">Direct Contact</h4>
                  <p className="font-sans text-sm text-healing-teal/75 leading-relaxed mt-1">
                    Patient Support: <a href="tel:+917778950829" className="text-gold-accent font-semibold hover:underline">+91 77789 50829</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-warm-sand border border-sage-medium flex items-center justify-center text-healing-teal flex-shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-healing-teal">Direct Email</h4>
                  <p className="font-sans text-sm text-healing-teal/75 leading-relaxed mt-1">
                    Inquiries: <a href="mailto:namankrishnaatri@gmail.com" className="text-gold-accent font-semibold hover:underline">namankrishnaatri@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Custom Vector Map & Message Box */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Custom SVG North Gujarat Region Map Illustration */}
            <div className="bg-warm-sand border border-sage-light/80 rounded-[32px] p-6 shadow-sm flex flex-col justify-between relative overflow-hidden h-[300px]">
              {/* Grid dot overlay */}
              <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />

              <div className="flex items-center justify-between mb-4 z-10">
                <span className="font-sans text-[10px] font-bold text-sage-green uppercase tracking-wider">
                  Outreach Area Map
                </span>
                <span className="font-sans text-[10px] font-semibold text-healing-teal/60">
                  North Gujarat Region
                </span>
              </div>

              {/* Vector Map */}
              <div className="w-full flex-grow relative flex items-center justify-center">
                <svg className="w-full h-full max-w-[400px] text-sage-green/20" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer boundaries representation */}
                  <path d="M50 80 Q100 20 200 40 T350 50 Q380 120 300 170 T100 160 Z" fill="currentColor" opacity="0.4" />
                  
                  {/* Central connections radiating from Mehsana */}
                  <g stroke="#c69f52" strokeWidth="1" strokeDasharray="3 3">
                    <line x1="200" y1="100" x2="110" y2="70" /> {/* Patan */}
                    <line x1="200" y1="100" x2="250" y2="50" />  {/* Sidhpur */}
                    <line x1="200" y1="100" x2="280" y2="110" /> {/* Visnagar */}
                    <line x1="200" y1="100" x2="160" y2="150" /> {/* Kadi */}
                    <line x1="200" y1="100" x2="230" y2="160" /> {/* Kalol */}
                  </g>

                  {/* Regional Node: Patan */}
                  <circle cx="110" cy="70" r="4" fill="#678b7b" />
                  <text x="110" y="60" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fill="#083c3e" fontWeight="bold">PATAN</text>

                  {/* Regional Node: Sidhpur */}
                  <circle cx="250" cy="50" r="4" fill="#678b7b" />
                  <text x="250" y="42" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fill="#083c3e" fontWeight="bold">SIDHPUR</text>

                  {/* Regional Node: Visnagar */}
                  <circle cx="280" cy="110" r="4" fill="#678b7b" />
                  <text x="290" y="113" fontSize="8" fontFamily="sans-serif" textAnchor="start" fill="#083c3e" fontWeight="bold">VISNAGAR</text>

                  {/* Regional Node: Kadi */}
                  <circle cx="160" cy="150" r="4" fill="#678b7b" />
                  <text x="160" y="162" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fill="#083c3e" fontWeight="bold">KADI</text>

                  {/* Regional Node: Kalol */}
                  <circle cx="230" cy="160" r="4" fill="#678b7b" />
                  <text x="230" y="172" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fill="#083c3e" fontWeight="bold">KALOL</text>

                  {/* Master Node: MEHSANA (Active Pulse) */}
                  <g className="animate-pulse">
                    <circle cx="200" cy="100" r="12" fill="#c69f52" opacity="0.25" />
                    <circle cx="200" cy="100" r="8" fill="#c69f52" opacity="0.5" />
                  </g>
                  <circle cx="200" cy="100" r="5" fill="#083c3e" />
                  <text x="200" y="88" fontSize="10" fontFamily="Georgia" textAnchor="middle" fill="#083c3e" fontWeight="bold">MEHSANA (HUB)</text>
                </svg>
              </div>

              <div className="flex items-center gap-2 text-xs text-healing-teal/70 z-10 border-t border-sage-light/60 pt-3">
                <span className="w-2 h-2 rounded-full bg-gold-accent animate-ping" />
                <span>Actively taking online appointments and report reviews.</span>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-sage-light/20 border border-sage-light/80 rounded-[32px] p-6 shadow-sm flex flex-col justify-between flex-grow">
              <h3 className="font-serif text-lg font-semibold text-healing-teal mb-4">
                Send an Inquiry
              </h3>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 text-center space-y-3 bg-warm-sand rounded-2xl border border-sage-light flex flex-col items-center justify-center flex-grow"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-healing-teal">Inquiry Sent Successfully!</h4>
                    <p className="font-sans text-xs text-healing-teal/70 max-w-xs mx-auto">
                      Thank you for contacting us. Our clinical desk team will review your message and reply via email within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 flex flex-col justify-between flex-grow"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-sage-light bg-warm-sand text-xs focus:outline-none focus:ring-2 focus:ring-gold-accent/20 text-healing-teal"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-sage-light bg-warm-sand text-xs focus:outline-none focus:ring-2 focus:ring-gold-accent/20 text-healing-teal"
                      />
                    </div>
                    
                    <textarea
                      rows={3}
                      placeholder="Your Message/Inquiry"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-sage-light bg-warm-sand text-xs focus:outline-none focus:ring-2 focus:ring-gold-accent/20 text-healing-teal resize-none"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-xl bg-healing-teal text-warm-sand text-xs font-bold hover:bg-healing-teal-light transition-colors flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-warm-sand border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
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
