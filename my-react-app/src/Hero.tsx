import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "30+", label: "Years Experience" },
    { value: "650+", label: "Offline Coaching Hours" },
    { value: "100+", label: "Online Coaching Hours" },
    { value: "30+", label: "Leaders Impacted" },
    { value: "2000+", label: "Training Hours" },
    { value: "316+", label: "Employees Trained" },
    { value: "10+", label: "Books Reviewed" },
    { value: "20+", label: "Papers Published" },
    { value: "20+", label: "Papers Presented" },
    { value: "2", label: "Book Chapters" },
    { value: "3", label: "Courseware Prepared" },
    { value: "7", label: "Training Interventions" },
    { value: "5", label: "Models & Frameworks" },
    { value: "6", label: "Awards" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade-in">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">
              We're Growth Catalyst
            </p>
            <h1 className="text-6xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Inspiring Minds, Transforming Leaders
            </h1>
            <p className="text-lg opacity-90 leading-relaxed max-w-3xl mx-auto">
              Empower your organization to achieve enduring growth and excellence through customized, strategic interventions designed to build lasting competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground group"
              >
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-16">
            <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-primary-foreground/5 rounded-lg backdrop-blur hover:bg-primary-foreground/10 transition-colors"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs mt-1 opacity-90 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;