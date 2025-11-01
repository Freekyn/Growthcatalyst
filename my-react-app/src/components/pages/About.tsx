import Navbar from "@/Navbar";
import Footer from "@/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Users,
  Target,
  Heart,
  Brain,
  GraduationCap,
  Star,
} from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "75+",
      label: "CEOs & CXOs Coached",
    },
    {
      icon: BookOpen,
      number: "3,404+",
      label: "Training Hours (2023-24)",
    },
    {
      icon: Target,
      number: "436+",
      label: "Employees Trained",
    },
    {
      icon: Award,
      number: "30+",
      label: "Years of Experience",
    },
    {
      icon: Brain,
      number: "49,711+",
      label: "KM Portal Visitations",
    },
    {
      icon: GraduationCap,
      number: "3+",
      label: "Research Scholars Guided",
    },
  ];

  const expertiseAreas = [
    {
      icon: Brain,
      title: "Expert in Human Behaviour and Behavioural Transformation",
      description:
        "Harnessing profound understanding of human behaviour to uncover underlying motives and connect behavioural patterns, bringing clarity and actionable insights.",
    },
    {
      icon: Heart,
      title: "Positive Psychology Practitioner",
      description:
        "Applying evidence-based positive psychology interventions to enhance happiness, engagement, and job satisfaction among employees.",
    },
    {
      icon: Users,
      title: "Leadership Development Specialist",
      description:
        "Transforming managers into leaders who excel with confidence, empathy, and strategic outlook through customized development programs.",
    },
    {
      icon: Star,
      title: "Knowledge Management Expert",
      description:
        "Pioneering knowledge management solutions that drive innovation, efficiency, and continuous improvement in large-scale organizations.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Dr. Swaminathan Sabesan
            </h1>
            <p className="text-xl opacity-90">
              Distinguished Positive Psychologist and Learning & Development
              Professional
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="conatiner mx-auto px-6 md:px-10 lg:px-16">
                  <img
                    src="/DSC00000.png"
                    alt="Dr. Swaminathan Sabesan"
                    className="rounded-lg w-full max-w-sm md:max-w-md object-cover -mt-6 md:-mt-10"
                  />
                </div>
              </div>
              <div>
                <div className="px-6 md:px-0">
                  <h2 className="text-3x1 font-heading font-bold text-black mb-6">
                    Professional Profile
                  </h2>
                  <div className=" text-black leading-relaxed">
                    <p>
                      Dr. Swaminathan Sabesan is a distinguished Positive
                      Psychologist and Learning & Development (L&D) professional
                      with over three decades of experience in academia,
                      corporate facilitation, coaching, and institution
                      building.
                    </p>
                    <p>
                      Renowned for his expertise in crafting and delivering
                      bespoke behavioral training programs, Dr. Sabesan has
                      played a pivotal role in the personal and professional
                      development of numerous senior leaders and employees
                      across various industries.
                    </p>
                    <p>
                      With a career marked by high-impact coaching interventions
                      and consistently excellent feedback, Dr. Sabesan has
                      collaborated closely with over 75 CEOs, CXOs, and HR
                      leaders, guiding them to achieve their developmental
                      goals.
                    </p>
                    <p>
                      His core strengths include deploying advanced psychometric
                      assessments, emotional intelligence tools, and creating
                      individualized development plans that drive meaningful
                      change.
                    </p>
                    <p>
                      Beyond coaching, Dr. Sabesan has contributed significantly
                      to knowledge management and institution building, earning
                      accolades from industry leaders and academicians alike. He
                      is also a prolific contributor to academic journals, with
                      numerous publications on topics such as work-life balance,
                      occupational wellness, and positive psychology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
            Impact & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-white/80 text-center border-border hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <p className="text-xs text-primary leading-tight">
                    {achievement.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-black mb-12 text-center">
              Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <Card
                  key={index}
                  className="flex flex-col border-border hover:shadow-xl transition-shadow-xl duration-100"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <area.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold text-black mb-2">
                          {area.title}
                        </h3>
                        <p className="text-sm text-gray-700 mb-2">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-black mb-12 text-center">
              Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-t from-primary-dark to-primary-light hover:shadow-xl transition-shadow-xl duration-100 ">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">
                    Integrity
                  </h3>
                  <p className="text-white text-sm">
                    Maintaining the highest standards of ethics and
                    professionalism in every interaction, ensuring trust and
                    credibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary-dark to-primary-light border-border">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">
                    Collaboration
                  </h3>
                  <p className="text-white text-sm">
                    Partnering with clients to design and implement tailored
                    solutions that align with their unique objectives and
                    aspirations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-gradient-to-r from-primary-dark to-primary-light">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">
                    Empathy
                  </h3>
                  <p className="text-white text-sm">
                    Deeply understanding and addressing the individual and
                    organizational challenges to provide meaningful,
                    personalized support.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-gradient-to-r from-primary-dark to-primary-light">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">
                    Innovation
                  </h3>
                  <p className="text-white text-sm">
                    Continuously advancing practices by integrating the latest
                    research and methodologies to deliver forward-thinking
                    solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-t from-primary-dark to-primary-light border-border md:col-span-2">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-heading font-bold text-white mb-3">
                    Excellence
                  </h3>
                  <p className="text-white text-sm">
                    Committed to achieving outstanding results through
                    unwavering dedication and expertise, setting the benchmark
                    for success.
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
