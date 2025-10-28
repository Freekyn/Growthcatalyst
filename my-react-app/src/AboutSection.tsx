import { Check } from "lucide-react";

const AboutSection = () => {
  const values = [
    "Integrity: Maintaining the highest standards of ethics and professionalism",
    "Collaboration: Partnering with clients to design tailored solutions",
    "Empathy: Understanding and addressing individual challenges",
    "Innovation: Integrating the latest research and methodologies",
    "Excellence: Committed to achieving outstanding results"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our Mission, Values and Motto
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Dr. Swaminathan Sabesan is a distinguished Positive Psychologist and Learning & Development professional with over three decades of experience in academia, corporate facilitation, coaching, and institution building.
              </p>
              <p className="leading-relaxed">
                With a career marked by high-impact coaching interventions and consistently excellent feedback, Dr. Sabesan has collaborated closely with over 75 CEOs, CXOs, and HR leaders, guiding them to achieve their developmental goals.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <p className="text-sm text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To empower personal and organizational development through cutting-edge psychological and behavioral interventions, nurturing a culture of sustained growth and holistic well-being.
              </p>
            </div>

            <div className="bg-accent/5 rounded-2xl p-8 border border-accent/10">
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To provide transformative, evidence-based training, coaching, and consulting services that elevate personal and professional development, drive organizational excellence, and enhance mental health and resilience.
              </p>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-heading font-bold mb-3">Motto</h3>
              <p className="text-lg font-semibold">
                "Empowering Growth, Enriching Lives."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
