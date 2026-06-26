"use client";

import { Map } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
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
    <footer className="bg-warm-sand border-t border-sage-light py-16 relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute bottom-6 right-6 w-24 h-24 dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              onClick={(e) => handleScrollTo(e, "#")}
              className="flex items-baseline gap-2"
            >
              <span className="font-serif text-2xl font-bold tracking-tight text-healing-teal">
                Dr. Naman
              </span>
              <span className="font-sans text-xs font-semibold tracking-widest text-gold-accent uppercase border-l border-sage-medium pl-2">
                MBBS, B.Psych
              </span>
            </a>
            <p className="font-sans text-xs text-healing-teal/70 leading-relaxed max-w-sm">
              Providing personalized remote health guidance, prescription reviews, and online medical consultations for families across North Gujarat.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-sage-medium flex items-center justify-center text-healing-teal/70 hover:text-healing-teal hover:border-healing-teal transition-all text-healing-teal/70 hover:bg-healing-teal hover:text-warm-sand"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-sage-medium flex items-center justify-center text-healing-teal/70 hover:text-healing-teal hover:border-healing-teal transition-all text-healing-teal/70 hover:bg-healing-teal hover:text-warm-sand"
                aria-label="Twitter Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-sage-medium flex items-center justify-center text-healing-teal/70 hover:text-healing-teal hover:border-healing-teal transition-all text-healing-teal/70 hover:bg-healing-teal hover:text-warm-sand"
                aria-label="Facebook Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-sage-medium flex items-center justify-center text-healing-teal/70 hover:text-healing-teal hover:border-healing-teal transition-all"
                aria-label="Google Maps Location"
              >
                <Map className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-healing-teal">Practice</h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="text-healing-teal/70 hover:text-healing-teal transition-colors">
                  About Dr. Naman
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="text-healing-teal/70 hover:text-healing-teal transition-colors">
                  Services & Guidance
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleScrollTo(e, "#testimonials")} className="text-healing-teal/70 hover:text-healing-teal transition-colors">
                  Patient Success Stories
                </a>
              </li>
              <li>
                <a href="#articles" onClick={(e) => handleScrollTo(e, "#articles")} className="text-healing-teal/70 hover:text-healing-teal transition-colors">
                  Health Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Digital Care Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-healing-teal">Digital Care</h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#online-services" onClick={(e) => handleScrollTo(e, "#online-services")} className="text-healing-teal/70 hover:text-healing-teal transition-colors">
                  Free 15-Min Call
                </a>
              </li>
              <li>
                <a href="#online-services" onClick={(e) => handleScrollTo(e, "#online-services")} className="text-healing-teal/70 hover:text-healing-teal transition-colors">
                  Video Consultation
                </a>
              </li>
              <li>
                <a href="#online-services" onClick={(e) => handleScrollTo(e, "#online-services")} className="text-healing-teal/70 hover:text-healing-teal transition-colors">
                  Prescription Review
                </a>
              </li>
              <li>
                <a href="#online-services" onClick={(e) => handleScrollTo(e, "#online-services")} className="text-healing-teal/70 hover:text-healing-teal transition-colors">
                  Medical Report Review
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Reach Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-healing-teal">Serving North Gujarat</h4>
            <p className="font-sans text-xs text-healing-teal/70 leading-relaxed">
              Dr. Naman Krishnaatri provides online consultations and remote health advice to patients in <strong>Mehsana</strong>, <strong>Patan</strong>, <strong>Sidhpur</strong>, <strong>Visnagar</strong>, <strong>Kadi</strong>, and <strong>Kalol</strong>.
            </p>
          </div>

        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="border-t border-sage-light pt-8 flex flex-col md:flex-row items-stretch justify-between gap-6">
          {/* Medical Disclaimer */}
          <div className="max-w-2xl">
            <p className="font-sans text-[10px] text-healing-teal/55 leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided on this website, including articles, newsletters, and digital triage tools, is for educational and informational purposes only. It does not constitute medical advice, diagnosis, or professional treatment. Always seek the advice of a qualified healthcare provider regarding a medical condition.
            </p>
          </div>

          {/* Legal / Copyright */}
          <div className="flex flex-col items-start md:items-end justify-between gap-2 flex-shrink-0">
            <p className="font-sans text-[10px] text-healing-teal/65">
              &copy; {currentYear} Dr. Naman Krishnaatri. All rights reserved.
            </p>
            <div className="flex gap-4 text-[10px] font-sans text-healing-teal/55">
              <a href="#" className="hover:text-healing-teal">Privacy Policy</a>
              <a href="#" className="hover:text-healing-teal">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
