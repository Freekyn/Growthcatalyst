import Navbar from "@/Navbar";
import Footer from "@/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "75+",
      label: "CEOs & CXOs Coached",
    },
    {
      icon: BookOpen,
      number: "1688+",
      label: "Training Hours Delivered",
    },
    {
      icon: Target,
      number: "316+",
      label: "Employees Trained",
    },
    {
      icon: Award,
      number: "30+",
      label: "Years of Experience",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Growth Catalyst
            </h1>
            <p className="text-lg opacity-90">
              Empowering organizations through transformative behavioral
              interventions and leadership development
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              About Dr. Swaminathan Sabesan
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. Swaminathan Sabesan is a distinguished Positive Psychologist
                and Learning & Development (L&D) professional with over three
                decades of experience in academia, corporate facilitation,
                coaching, and institution building.
              </p>
              <p>
                Renowned for his expertise in crafting and delivering bespoke
                behavioral training programs, Dr. Sabesan has played a pivotal
                role in the personal and professional development of numerous
                senior leaders and employees across various industries.
              </p>
              <p>
                With a career marked by high-impact coaching interventions and
                consistently excellent feedback, Dr. Sabesan has collaborated
                closely with over 75 CEOs, CXOs, and HR leaders, guiding them to
                achieve their developmental goals.
              </p>
              <p>
                His core strengths include deploying advanced psychometric
                assessments, emotional intelligence tools, and creating
                individualized development plans that drive meaningful change.
              </p>
              <p>
                Beyond coaching, Dr. Sabesan has contributed significantly to
                knowledge management and institution building, earning accolades
                from industry leaders and academicians alike. He is also a
                prolific contributor to academic journals, with numerous
                publications on topics such as work-life balance, occupational
                wellness, and positive psychology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
              Unique Selling Propositions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    In-Depth Expertise
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Harnessing a profound understanding of human behavior, delve
                    into the intricacies of why individuals act the way they do.
                    By uncovering the underlying motives and connecting
                    behavioral patterns, bring clarity and actionable insights
                    to the table that resonate with clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    Tailored Solutions
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Known for conceptualizing, designing and delivering bespoke
                    training solutions specifically crafted to address the
                    unique needs of individuals, teams, and organizations. These
                    programs are engineered to deliver lasting change.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    Demonstrated Success
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    With a proven track record of delivering impactful
                    behavioral interventions, have consistently transformed
                    workplaces and garnered enthusiastic endorsements from
                    clients. The interventions not only achieve results but also
                    foster a culture of appreciation and growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    Ongoing Support
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dedicated to fostering continuous development, provide
                    ongoing consultation and lifelong mentoring. The commitment
                    extends beyond training and coaching, ensuring sustained
                    growth and ongoing support to help clients achieve their
                    goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
