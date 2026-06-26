"use client";

import { Activity, ClipboardCheck, Video, HelpCircle, FileText, Heart, FileSearch } from "lucide-react";
import { motion } from "framer-motion";

const clinicalServices = [
  {
    icon: Video,
    title: "Online Consultation",
    focus: ["Primary Care Discussion", "Symptom Discussion", "Initial Clinical Guidance"],
    desc: "Convenient online consultations to discuss primary care, symptoms, and health management from home.",
  },
  {
    icon: HelpCircle,
    title: "Remote Medical Advice",
    focus: ["Symptom Triage", "General Health Queries", "Recommended Next Steps"],
    desc: "Answers to your medical questions and clinical guidance to help clarify next steps in your care.",
  },
  {
    icon: Activity,
    title: "Follow-up Consultation",
    focus: ["Clinical Progress Monitoring", "Guidance Response Review", "Symptom Log Review"],
    desc: "Checking progress and refining guidance recommendations based on your response over time.",
  },
  {
    icon: ClipboardCheck,
    title: "Prescription Review",
    focus: ["Drug Interaction Review", "Redundancy Assessment", "Safety Evaluation"],
    desc: "Reviewing your current medications to ensure safety, check for interactions, and clarify usage.",
  },
  {
    icon: FileText,
    title: "Medical Report Review",
    focus: ["Blood Panel Explanation", "Lab Reports Evaluation", "Biomarker Translation"],
    desc: "Translating complex diagnostic reports and lab parameters to help you understand your results.",
  },
  {
    icon: FileSearch,
    title: "Second Opinion",
    focus: ["Diagnostic Review", "Treatment Protocol Review", "Alternative Guidance Options"],
    desc: "Providing an independent and thoughtful perspective on your diagnosis and options.",
  },
  {
    icon: Heart,
    title: "Preventive Health Guidance",
    focus: ["Lifestyle Recommendations", "Preventive Screening Guidance", "Health Maintenance"],
    desc: "Evidence-based guidance to help optimize health, manage risk factors, and maintain long-term wellness.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-warm-sand relative overflow-hidden border-t border-sage-light/50">
      <div className="absolute top-20 right-10 w-24 h-24 dot-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="font-sans text-xs uppercase tracking-widest text-gold-accent font-bold mb-3">
            Digital Services
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-healing-teal font-normal leading-tight">
            Comprehensive remote health guidance and consultation.
          </h2>
          <div className="w-20 h-0.5 bg-gold-accent mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicalServices.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-warm-sand-dark/15 border border-sage-light/60 p-6 rounded-3xl hover:border-gold-accent/40 hover:bg-warm-sand-dark/25 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-2xl bg-healing-teal/5 flex items-center justify-center text-healing-teal mb-5 group-hover:bg-healing-teal group-hover:text-warm-sand transition-all duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-medium text-healing-teal mb-3 group-hover:text-healing-teal-light transition-colors">
                    {service.title}
                  </h3>

                  {/* Desc */}
                  <p className="font-sans text-xs text-healing-teal/70 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                {/* Focus Areas List */}
                <div className="border-t border-sage-light/40 pt-4 mt-auto">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-gold-accent mb-1.5">
                    Focus Areas:
                  </p>
                  <ul className="space-y-1">
                    {service.focus.map((item) => (
                      <li key={item} className="font-sans text-[11px] text-healing-teal/80 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-sage-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12 bg-sage-light/25 border border-sage-light/60 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h4 className="font-serif text-xl font-medium text-healing-teal mb-2">
              Ready to schedule remote guidance?
            </h4>
            <p className="font-sans text-sm text-healing-teal/70 leading-relaxed">
              Submit your recent diagnostic reports or medical history, and request a detailed online review. Dr. Naman will provide a clinical guidance summary.
            </p>
          </div>
          <a
            href="#book-appointment"
            className="flex-shrink-0 px-6 py-3.5 rounded-full bg-healing-teal text-warm-sand font-semibold hover:bg-healing-teal-light transition-colors text-sm"
          >
            Request Report Review
          </a>
        </div>

      </div>
    </section>
  );
}
