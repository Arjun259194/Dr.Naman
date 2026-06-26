"use client";

import Image from "next/image";
import { ArrowRight, HeartPulse, User } from "lucide-react";
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
                Dr. Naman Krishnaatri is a compassionate and motivated MBBS doctor dedicated to patient well-being and evidence-based medical care. Combining a background in psychology with rigorous medical training, he offers a unique, holistic perspective to remote health guidance. He is committed to listening carefully and providing personalized guidance to patients.
              </p>
              <p>
                Registered with the <strong>Gujarat Medical Council (GPR-80036)</strong>, Dr. Naman has built a strong clinical foundation through hands-on experience in diverse healthcare settings. He is comfortable working collaboratively to ensure comprehensive patient care.
              </p>
            </div>

            {/* Structured details section */}
            <div className="mt-8 space-y-6 w-full border-t border-sage-light/60 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Column 1: Education & Credentials */}
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-semibold text-healing-teal flex items-center gap-2">
                    <User className="w-5 h-5 text-gold-accent" /> Education & Credentials
                  </h3>
                  <ul className="space-y-3 text-sm text-healing-teal/80">
                    <li className="relative pl-5">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-gold-accent" />
                      <strong className="block text-healing-teal">MBBS</strong>
                      Manila Central University, Philippines (Graduated 2022)
                    </li>
                    <li className="relative pl-5">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-gold-accent" />
                      <strong className="block text-healing-teal">Bachelor&apos;s in Psychology</strong>
                      University of Perpetual Help System DALTA, Philippines (Graduated 2016)
                    </li>
                    <li className="relative pl-5 text-xs border-t border-sage-light/45 pt-2 mt-2">
                      <strong className="text-healing-teal uppercase tracking-wider text-[10px] block mb-0.5">Council Registration:</strong>
                      Gujarat Medical Council &bull; Reg No: GPR-80036
                    </li>
                    <li className="relative pl-5 text-xs pt-1">
                      <strong className="text-healing-teal uppercase tracking-wider text-[10px] block mb-0.5">Languages:</strong>
                      English, Hindi, Gujarati, Tagalog
                    </li>
                  </ul>
                </div>

                {/* Column 2: Clinical Experience */}
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-semibold text-healing-teal flex items-center gap-2">
                    <HeartPulse className="w-5 h-5 text-gold-accent" /> Clinical Background
                  </h3>
                  <ul className="space-y-3 text-sm text-healing-teal/80">
                    <li className="relative pl-5">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-gold-accent" />
                      <strong className="block text-healing-teal">Clinical Experience</strong>
                      Manila Central University Internship &amp; GMERS Medical Hospital, Vadnagar
                    </li>
                    <li className="relative pl-5">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-gold-accent" />
                      <strong className="block text-healing-teal">Previous Practice</strong>
                      Aayush Hospital, Mehsana
                    </li>
                    <li className="relative pl-5 border-t border-sage-light/45 pt-2 mt-2">
                      <strong className="text-healing-teal uppercase tracking-wider text-[10px] block mb-1">Practice Areas:</strong>
                      OPD, Ward, ICU, and Emergency care, including ward rounds, clinical documentation, and patient evaluation.
                    </li>
                  </ul>
                </div>

              </div>

              {/* Competencies and Departmental Exposure Grid */}
              <div className="bg-sage-light/25 rounded-2xl p-6 border border-sage-light/80 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-healing-teal mb-3">Clinical Competencies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["IV Cannulation", "Foley Catheter", "NGT & OGT Insertion", "Pleural Tap", "Incision & Drainage", "Wound Dressing", "ABG Sampling", "BLS", "ACLS", "ATLS"].map((skill) => (
                      <span key={skill} className="px-2 py-0.5 bg-warm-sand text-healing-teal border border-sage-medium/40 rounded text-[11px] font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-sm font-semibold text-healing-teal mb-3">Internship Exposure</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Medicine", "Surgery", "Pediatrics", "Orthopedics", "Psychiatry", "Emergency Medicine", "Community Medicine", "ENT", "Ophthalmology", "Obstetrics & Gynecology"].map((dept) => (
                      <span key={dept} className="px-2 py-0.5 bg-warm-sand text-healing-teal border border-sage-medium/40 rounded text-[11px] font-medium">
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-10 pt-8 border-t border-sage-light/60 w-full flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-accent relative">
                  <Image
                    src="/DrNaman.png"
                    alt="Dr. Naman Krishnaatri Profile"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-healing-teal">Dr. Naman Krishnaatri</p>
                  <p className="font-sans text-[11px] text-sage-green font-semibold uppercase tracking-wider">MBBS, Bachelor&apos;s in Psychology</p>
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
