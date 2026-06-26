"use client";

import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, ArrowRight, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  { id: "video", name: "Online Medical Consultation", fee: "₹1,200", duration: "45 Mins" },
  { id: "discovery", name: "Free Discovery Call (Audio)", fee: "Free", duration: "15 Mins" },
  { id: "review", name: "Remote Report Review", fee: "₹800", duration: "Online" },
  { id: "prescription", name: "Prescription Review & Advice", fee: "₹600", duration: "Online" },
];

const MOCK_DATES = [
  { dayName: "Mon", dateStr: "Jun 29", fullDate: "Monday, June 29, 2026" },
  { dayName: "Tue", dateStr: "Jun 30", fullDate: "Tuesday, June 30, 2026" },
  { dayName: "Wed", dateStr: "Jul 01", fullDate: "Wednesday, July 1, 2026" },
  { dayName: "Thu", dateStr: "Jul 02", fullDate: "Thursday, July 2, 2026" },
  { dayName: "Fri", dateStr: "Jul 03", fullDate: "Friday, July 3, 2026" },
];

const MOCK_TIMES = ["09:30 AM", "11:00 AM", "11:30 AM", "03:00 PM", "04:30 PM", "05:00 PM"];

export default function AppointmentForm() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(SERVICES[0].id);
  const [selectedDate, setSelectedDate] = useState(MOCK_DATES[0].fullDate);
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [bookingRef, setBookingRef] = useState("");

  const handleNextStep = () => {
    setErrorMsg("");
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!selectedTime) {
        setErrorMsg("Please select a time slot to continue.");
        return;
      }
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    setErrorMsg("");
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!patientName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!patientPhone.trim() || patientPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!patientEmail.trim() || !patientEmail.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    // Generate simulated reference ID
    const ref = "DRNK-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setService(SERVICES[0].id);
    setSelectedDate(MOCK_DATES[0].fullDate);
    setSelectedTime("");
    setPatientName("");
    setPatientPhone("");
    setPatientEmail("");
    setPatientNotes("");
    setErrorMsg("");
    setBookingRef("");
  };

  const selectedServiceObj = SERVICES.find((s) => s.id === service);

  return (
    <section id="book-appointment" className="py-24 bg-warm-sand relative overflow-hidden border-t border-sage-light/60">
      <div className="absolute bottom-10 left-10 w-24 h-24 dot-pattern opacity-30" />
      
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-gold-accent font-bold mb-3">
            Schedule Care
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-healing-teal font-normal">
            Request an Appointment
          </h2>
          <div className="w-12 h-0.5 bg-gold-accent mx-auto mt-4" />
        </div>

        {/* Form Container */}
        <div className="bg-sage-light/20 border border-sage-light/80 rounded-[32px] p-8 md:p-12 shadow-sm relative backdrop-blur-sm">
          
          {/* Step Progress Indicators */}
          {step < 4 && (
            <div className="flex justify-between items-center mb-10 max-w-md mx-auto relative">
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-sage-medium/30 -translate-y-1/2 -z-10" />
              <div
                className="absolute top-1/2 left-0 h-[2px] bg-healing-teal -translate-y-1/2 -z-10 transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-all duration-300 ${
                    step >= s
                      ? "bg-healing-teal text-warm-sand ring-4 ring-sage-light"
                      : "bg-warm-sand text-healing-teal/40 border border-sage-medium"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
          )}

          {/* Alert Message */}
          <AnimatePresence>
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-3 text-sm font-sans"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {errorMsg}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-xl text-healing-teal font-medium mb-4">
                  Select Consultation Type
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICES.map((s) => (
                    <label
                      key={s.id}
                      className={`flex items-start justify-between p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                        service === s.id
                          ? "bg-warm-sand border-gold-accent ring-2 ring-gold-accent/20"
                          : "bg-warm-sand/50 border-sage-light hover:border-sage-medium"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service-select"
                        value={s.id}
                        checked={service === s.id}
                        onChange={() => setService(s.id)}
                        className="sr-only"
                      />
                      <div className="space-y-1">
                        <span className="font-serif text-base font-medium text-healing-teal block">
                          {s.name}
                        </span>
                        <span className="font-sans text-xs text-healing-teal/65 block">
                          Duration: {s.duration}
                        </span>
                      </div>
                      <span className="font-serif text-sm font-bold text-gold-accent">
                        {s.fee}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="flex justify-end pt-6">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-healing-teal text-warm-sand text-sm font-semibold hover:bg-healing-teal-light transition-colors"
                  >
                    Next: Choose Date
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h3 className="font-serif text-xl text-healing-teal font-medium">
                    Choose Date &amp; Time
                  </h3>
                  <p className="font-sans text-xs text-healing-teal/65">
                    Select a date followed by an available start time slot.
                  </p>
                </div>

                {/* Custom Date Pickers */}
                <div className="space-y-3">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold-accent flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> Available Dates
                  </span>
                  <div className="grid grid-cols-5 gap-2 sm:gap-4">
                    {MOCK_DATES.map((d) => (
                      <button
                        type="button"
                        key={d.fullDate}
                        onClick={() => {
                          setSelectedDate(d.fullDate);
                          setSelectedTime("");
                        }}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                          selectedDate === d.fullDate
                            ? "bg-healing-teal text-warm-sand border-healing-teal"
                            : "bg-warm-sand border-sage-light hover:border-sage-medium text-healing-teal/80"
                        }`}
                      >
                        <span className="font-sans text-[10px] uppercase tracking-wider block opacity-75">
                          {d.dayName}
                        </span>
                        <span className="font-serif text-sm font-bold mt-1">
                          {d.dateStr}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Time Picker */}
                <div className="space-y-3">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-gold-accent flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> Available Times ({selectedDate.split(",")[1]?.trim()})
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {MOCK_TIMES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 px-3 rounded-lg border text-center text-xs font-semibold font-sans transition-all ${
                          selectedTime === t
                            ? "bg-gold-accent text-warm-sand border-gold-accent"
                            : "bg-warm-sand border-sage-light hover:border-sage-medium text-healing-teal/80"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Back and Next buttons */}
                <div className="flex justify-between pt-6 border-t border-sage-light/40">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-sage-medium text-healing-teal text-xs font-semibold hover:bg-sage-light/35 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-healing-teal text-warm-sand text-sm font-semibold hover:bg-healing-teal-light transition-colors"
                  >
                    Next: Patient Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="space-y-2 mb-4">
                  <h3 className="font-serif text-xl text-healing-teal font-medium">
                    Patient Information
                  </h3>
                  <p className="font-sans text-xs text-healing-teal/65">
                    Your appointment: <span className="font-bold text-healing-teal">{selectedServiceObj?.name}</span> on <span className="font-bold text-healing-teal">{selectedDate} at {selectedTime}</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold text-healing-teal/80 flex items-center gap-1">
                      <User className="w-3.5 h-3.5" /> Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-sage-light bg-warm-sand text-sm focus:outline-none focus:ring-2 focus:ring-gold-accent/20 focus:border-gold-accent text-healing-teal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold text-healing-teal/80 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-sage-light bg-warm-sand text-sm focus:outline-none focus:ring-2 focus:ring-gold-accent/20 focus:border-gold-accent text-healing-teal"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans text-xs font-bold text-healing-teal/80 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" /> Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-sage-light bg-warm-sand text-sm focus:outline-none focus:ring-2 focus:ring-gold-accent/20 focus:border-gold-accent text-healing-teal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans text-xs font-bold text-healing-teal/80">
                    Brief Health Concerns (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please specify any symptoms, chronic history, or current medications..."
                    value={patientNotes}
                    onChange={(e) => setPatientNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-sage-light bg-warm-sand text-sm focus:outline-none focus:ring-2 focus:ring-gold-accent/20 focus:border-gold-accent text-healing-teal resize-none"
                  />
                </div>

                {/* Back and Next buttons */}
                <div className="flex justify-between pt-6 border-t border-sage-light/40">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-sage-medium text-healing-teal text-xs font-semibold hover:bg-sage-light/35 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-full bg-gold-accent text-warm-sand font-bold text-sm hover:bg-gold-dark transition-colors shadow-lg shadow-gold-accent/15"
                  >
                    Submit Booking Request
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-6"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600 mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-healing-teal font-semibold">
                    Appointment Requested Successfully!
                  </h3>
                  <p className="font-sans text-sm text-healing-teal/70 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-healing-teal">{patientName}</span>. Dr. Naman&apos;s team will contact you within 2 hours to confirm your schedule.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="max-w-md mx-auto bg-warm-sand border border-sage-light p-6 rounded-2xl text-left space-y-4 shadow-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-sage-light">
                    <span className="font-sans text-[11px] font-bold text-sage-green uppercase tracking-wider">Booking Receipt</span>
                    <span className="font-mono text-xs font-bold text-gold-accent bg-gold-accent/5 px-2.5 py-0.5 rounded-full">
                      {bookingRef}
                    </span>
                  </div>
                  
                  <div className="space-y-2.5 text-xs text-healing-teal">
                    <p className="flex justify-between">
                      <span className="opacity-75">Service:</span>
                      <span className="font-bold">{selectedServiceObj?.name}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="opacity-75">Scheduled:</span>
                      <span className="font-bold">{selectedDate} at {selectedTime}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="opacity-75">Patient Phone:</span>
                      <span className="font-bold">{patientPhone}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="opacity-75">Practitioner Fee:</span>
                      <span className="font-bold text-gold-accent">{selectedServiceObj?.fee}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-sage-green text-healing-teal text-xs font-semibold hover:bg-sage-light/20 transition-colors"
                  >
                    Schedule Another Appointment
                  </button>
                </div>
              </motion.div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
