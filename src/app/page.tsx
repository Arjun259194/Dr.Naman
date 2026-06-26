import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import OnlineServices from "@/components/OnlineServices";
import AppointmentForm from "@/components/AppointmentForm";
import HealthArticles from "@/components/HealthArticles";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Services />
        <OnlineServices />
        <AppointmentForm />
        <HealthArticles />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
