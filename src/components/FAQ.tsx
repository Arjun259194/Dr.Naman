"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is an MD Physician and what is your practice philosophy?",
    answer: "An MD (Doctor of Medicine) in Internal Medicine specializes in complex, adult health conditions. Dr. Naman's practice model focuses on a patient-first approach. Rather than brief hospital visits, he dedicates focused time during remote consultations to understand your history, symptoms, lifestyle, and diagnostic files, ensuring evidence-based and highly personalized health advice.",
  },
  {
    question: "Do you offer in-person visits or operate a physical clinic?",
    answer: "Dr. Naman currently does not operate a physical clinic. All services—including online consultations, remote health guidance, prescription reviews, and report translations—are conducted virtually via secure video or audio connections. This ensures patients across North Gujarat can conveniently connect and get dedicated care without travel.",
  },
  {
    question: "How do the online video consultations and diagnostic reviews work?",
    answer: "Once you schedule a consultation, you will receive a secure digital video or audio call link. You can share your previous reports, imaging, or prescriptions in advance. During the consult, Dr. Naman reviews your files, explains your clinical markers, answers your questions, and shares structured health advice and guidance.",
  },
  {
    question: "What is the purpose of the Free 15-Minute Discovery Call?",
    answer: "The discovery call is a brief introductory conversation to clarify your primary concerns, assess if our virtual guidance fits your needs, and discuss next steps. Dr. Naman does not prescribe therapies, diagnose conditions, or review complex reports during this introductory call.",
  },
  {
    question: "How does the remote prescription review service work?",
    answer: "Our prescription review helps verify the safety of your current therapeutic regimen. Dr. Naman checks your medication list for potential drug-drug interactions, duplicates, or dosage concerns. He then provides a structured second opinion and health advice, which you can discuss with your primary in-person doctor.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-warm-sand relative overflow-hidden border-t border-sage-light/60">
      <div className="absolute top-1/4 left-10 w-24 h-24 dot-pattern opacity-30" />
      
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-gold-accent font-bold mb-3">
            Inquiries
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-healing-teal font-normal">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-gold-accent mx-auto mt-4" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-sage-light/10 border border-sage-light rounded-2xl overflow-hidden hover:border-gold-accent/40 transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                    <span className="font-serif text-lg font-medium text-healing-teal leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-healing-teal/60 ml-4 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pl-15 border-t border-sage-light/30 pt-4">
                        <p className="font-sans text-sm text-healing-teal/75 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Help Quote */}
        <div className="text-center mt-12">
          <p className="font-sans text-xs text-healing-teal/60">
            Have a different question? Please contact our support email at{" "}
            <a href="mailto:care@drnaman.com" className="text-gold-accent font-semibold hover:underline">
              care@drnaman.com
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}
