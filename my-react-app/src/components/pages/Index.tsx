import Navbar from "@/Navbar";
import Footer from "@/Footer";
import Hero from "@/Hero";
import ServicesSection from "@/ServiceSection";
import AboutSection from "@/AboutSection";
import TestimonialsSection from "@/TestimonialsSection";
import CTASection from "@/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
