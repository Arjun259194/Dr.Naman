"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Specialties", href: "#services" },
  { name: "Digital Services", href: "#online-services" },
  { name: "Health Insights", href: "#articles" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // navbar height
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-sand/80 backdrop-blur-md border-b border-sage-light py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#")}
            className="flex items-baseline gap-2 group"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-healing-teal transition-colors duration-300">
              Dr. Naman
            </span>
            <span className="font-sans text-xs font-semibold tracking-widest text-gold-accent uppercase border-l border-sage-medium pl-2 group-hover:text-healing-teal-light transition-colors">
              MBBS, B.Psych
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="font-sans text-sm font-medium text-healing-teal/80 hover:text-healing-teal transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-accent after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#book-appointment"
              onClick={(e) => handleScrollTo(e, "#book-appointment")}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-healing-teal text-warm-sand text-sm font-semibold hover:bg-healing-teal-light transition-all duration-300 hover:shadow-md hover:shadow-healing-teal/10 group"
            >
              Book Consultation
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-healing-teal focus:outline-none p-1.5 rounded-full hover:bg-sage-light transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[76px] z-40 lg:hidden bg-warm-sand-dark/95 backdrop-blur-lg border-b border-sage-light shadow-xl px-6 py-8 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-serif text-lg font-medium text-healing-teal hover:text-healing-teal-light py-2 border-b border-sage-light/40 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href="#book-appointment"
              onClick={(e) => handleScrollTo(e, "#book-appointment")}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-healing-teal text-warm-sand font-semibold text-center hover:bg-healing-teal-light transition-colors shadow-lg shadow-healing-teal/10"
            >
              Book Consultation
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
