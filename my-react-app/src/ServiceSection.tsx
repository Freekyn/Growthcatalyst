import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Brain, BookOpen, HeartPulse, Building, GraduationCap, Target } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Behavioral Coaching",
    description: "Empowering leaders and employees through personalized coaching to foster sustainable professional and personal growth."
  },
  {
    icon: TrendingUp,
    title: "Leadership Development",
    description: "Designing and delivering customized programs to nurture effective and empathetic leadership at all organizational levels."
  },
  {
    icon: Brain,
    title: "Psychometric Assessments",
    description: "Utilizing relevant psychometric tools to raise self-awareness, forward action and bring enduring habits."
  },
  {
    icon: BookOpen,
    title: "Corporate Training",
    description: "Designing targeted behavioral training sessions to nurture a productive and positive workplace environment."
  },
  {
    icon: Building,
    title: "Knowledge Management",
    description: "Implementing knowledge management solutions to augment organizational learning and user engagement."
  },
  {
    icon: HeartPulse,
    title: "Employee Well-being",
    description: "Offering counseling and interventions to support mental health and overall well-being within the organization."
  },
  {
    icon: GraduationCap,
    title: "Academic Development",
    description: "Offering specialized training and mentoring to elevate faculty effectiveness and student experience."
  },
  {
    icon: Target,
    title: "Consulting Services",
    description: "Delivering expert consultation on transition management, performance improvement, and developmental planning."
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What We Bring to You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to transform your organization and empower your team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-border bg-background"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <service.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;