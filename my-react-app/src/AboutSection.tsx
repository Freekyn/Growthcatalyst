import { Check } from "lucide-react";
import { FaEye } from "react-icons/fa";
import { GiStairsGoal, GiArcheryTarget } from "react-icons/gi";

const AboutSection = () => {
  const values = [
    "Integrity: Maintaining the highest standards of ethics and professionalism",
    "Collaboration: Partnering with clients to design tailored solutions",
    "Empathy: Understanding and addressing individual challenges",
    "Innovation: Integrating the latest research and methodologies",
    "Excellence: Committed to achieving outstanding results"
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Our Mission, Values and Motto
            </h2>
            <div className="space-y-4 text-primary-foreground">
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
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <p className="text-sm text-primary-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-8 border border-primary/10 hover:shadow-lg transition-shadow">
              <FaEye className="w-6 h-6 text-primary mb-3" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To empower personal and organizational development through cutting-edge psychological and behavioral interventions, nurturing a culture of sustained growth and holistic well-being.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-accent/20 hover:shadow-lg transition-shadow">
              <GiStairsGoal className="w-6 h-6 text-accent mb-3" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To provide transformative, evidence-based training, coaching, and consulting services that elevate personal and professional development, drive organizational excellence, and enhance mental health and resilience.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-accent/20 hover:shadow-lg transition-shadow">
              <GiArcheryTarget className="w-6 h-6 mb-3" />  
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Motto</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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