"use client";

import { Video, ClipboardCheck, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const digitalServices = [
  {
    icon: MessageSquare,
    title: "15-Min Discovery Call",
    price: "Free",
    type: "Free Consultation",
    desc: "A brief preliminary audio session to discuss your health goals, assess compatibility with our practice, and outline next steps.",
    cta: "Schedule Free Call",
    status: "active",
  },
  {
    icon: Video,
    title: "Comprehensive Video Consultation",
    price: "₹1,500",
    type: "Paid Consultation",
    desc: "Full 45-minute video consult including detailed medical history, laboratory reports analysis, and a structured care/treatment protocol.",
    cta: "Book Video Consult",
    status: "active",
  },
  {
    icon: ClipboardCheck,
    title: "Medication & Second Opinion",
    price: "₹950",
    type: "Prescription Review",
    desc: "A meticulous review of your current prescriptions to check for contraindications, redundancies, dosages, and potential optimizations.",
    cta: "Submit Review Request",
    status: "active",
  },
  {
    icon: HelpCircle,
    title: "Digital Diagnostic Triage",
    price: "Coming Soon",
    type: "Paid Diagnosis",
    desc: "A specialized remote workup integrating biosensor/wearable data and clinical symptom logs to pinpoint underlying imbalances.",
    cta: "Join Waitlist",
    status: "coming_soon",
  },
];

export default function OnlineServices() {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <section id="online-services" className="py-24 bg-warm-sand-dark/20 relative overflow-hidden">
      <div className="absolute top-1/3 left-10 w-24 h-48 dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="font-sans text-xs uppercase tracking-widest text-gold-accent font-bold mb-3">
            Digital Healthcare
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-healing-teal font-normal leading-tight mb-6">
            Virtual care, review, & consulting.
          </h2>
          <p className="font-sans text-base text-healing-teal/70 max-w-xl mx-auto">
            Convenient digital medical consultations designed for patients in North Gujarat and beyond. Get expert opinions from the comfort of your home.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalServices.map((service, index) => {
            const IconComponent = service.icon;
            const isComingSoon = service.status === "coming_soon";

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col justify-between p-7 rounded-3xl border bg-warm-sand ${
                  isComingSoon
                    ? "border-sage-light/40 opacity-75"
                    : "border-sage-light hover:border-gold-accent/40 shadow-sm hover:shadow-md transition-all duration-300"
                }`}
              >
                <div>
                  {/* Service Header Info */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-sans text-[10px] font-bold tracking-wider uppercase text-gold-accent bg-gold-accent/5 px-2.5 py-1 rounded-full">
                      {service.type}
                    </span>
                    <div className="text-healing-teal">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-healing-teal mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-healing-teal/70 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="border-t border-sage-light/40 pt-5 mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-sans text-xs text-healing-teal/60">Professional Fee</span>
                    <span className="font-serif text-lg font-semibold text-healing-teal">
                      {service.price}
                    </span>
                  </div>

                  {isComingSoon ? (
                    <button
                      disabled
                      className="w-full py-2.5 rounded-xl bg-sage-light text-healing-teal/40 text-xs font-semibold cursor-not-allowed text-center"
                    >
                      Coming Soon
                    </button>
                  ) : (
                    <button
                      onClick={handleScrollToBooking}
                      className="w-full py-2.5 rounded-xl bg-healing-teal text-warm-sand hover:bg-healing-teal-light text-xs font-semibold transition-colors text-center block"
                    >
                      {service.cta}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature List Bottom Callout */}
        <div className="mt-16 max-w-2xl mx-auto border border-dashed border-gold-accent/40 rounded-2xl p-6 bg-gold-accent/5 flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-gold-accent flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif text-sm font-semibold text-healing-teal mb-1">
              Confidential & Secure Remote Consultations
            </h4>
            <p className="font-sans text-xs text-healing-teal/75 leading-relaxed">
              All virtual connections are encrypted to maintain confidentiality. Remote medical guidance and reports reviews serve as supportive advice and do not replace physical clinical examinations when deemed necessary by a local hospital or care facility.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
