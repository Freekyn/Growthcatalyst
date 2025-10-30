import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light text-[#0B3D68] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg opacity-90">
            Let's work together to unlock your team's full potential and drive sustainable growth through proven behavioral interventions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              asChild 
              className="bg-accent hover:bg-accent/90 text-accent-foreground group px-6 py-3 text-lg rounded-md"
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              className="bg-[#0d73af] border-primary-foreground text-white hover:bg-[#0B3D68] hover:text-white px-6 py-3 text-lg rounded-md"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
