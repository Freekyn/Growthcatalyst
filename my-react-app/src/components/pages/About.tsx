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
  Phone,
  CheckCircle,
  Linkedin,
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

  const professionalAffiliations = [
    "Professor of Practice, Psychology, School of Social Sciences (SSL), VIT University Chennai",
    "Life Member, Madras Psychology Society",
    "Life Member, Indian Academy of Applied Psychology (IAAP)",
    "Life Member, Indian Society for Training and Development (ISTD) & National Council Member (2008-2009)",
    "Life Member, Indian School Psychology Association (InSPA)",
    "Co-founder – Big Impact Solutions",
    "Registered Professional Counselor, Chennai Counselors Foundation",
    "Joint Director, Corporate Wellness Champion Wing, Chennai Counselors Foundation",
    "Coach, Mindpeers",
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
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-primary-foreground py-20">
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
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <img
                    src="/DSC00000.png"
                    alt="Dr. Swaminathan Sabesan"
                    className="rounded-2xl w-full object-cover shadow-2xl border-4 border-accent/20"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  About Dr. Swaminathan Sabesan
                </h2>
                <p className="text-accent font-semibold mb-6">
                  Leadership & EQ Coach | Talent Development Expert | Founder, Growth Catalyst | Positive Psychologist | Thought leader | KM Champion | Institution Builder
                </p>
                
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Dr. Swaminathan Sabesan is a Positive Psychologist, Leadership and EQ Coach, and Talent Development Leader with over three decades of multifaceted experience spanning academia, corporate facilitation, executive coaching, and institution building.
                  </p>
                  <p>
                    A deep believer in human potential, Dr. Sabesan integrates psychology, leadership science, and behavioral insights to help individuals and organizations achieve lasting transformation. His extensive work in leadership development, emotional intelligence, and organizational well-being has empowered thousands of professionals and senior leaders across industries to unlock purpose-driven performance.
                  </p>
                  <p>
                    As the <strong className="text-foreground">Founder of Growth Catalyst</strong> and Co-Founder of Big Impact Solutions, he has coached and mentored over 30 senior leaders who are either Direct Reportees to CEOs/CXOs or first-time CEOs.
                  </p>
                  <p>
                    He has co-created pioneering coaching frameworks such as the <strong className="text-foreground">Coaching Competency Model, Coaching Readiness Model,</strong> and <strong className="text-foreground">Continuous Coaching Competence Assessment Framework</strong>, and designed evidence-based well-being interventions that foster thriving workplace cultures.
                  </p>
                  <p>
                    Dr. Sabesan has been instrumental in institutionalizing Knowledge Management initiatives, leading behavioral training programs with measurable impact, and co-facilitating internal coach certification programs for leading organizations like the Murugappa Group, Titan, TCS, L&T, Aurobindo Pharma, and Tata Steel to name a few.
                  </p>
                  <p>
                    His contributions include authoring a chapter on <em>"Preserving Employees' Well-Being – An Organization's Post-Pandemic Imperative"</em> in HRM in a Post-Epidemic Global Environment (Apple Academic Press, 2023), and publishing numerous research papers on positive psychology and occupational wellness. He also serves as the Associate Editor of the Journal of Indian Academy of Applied Psychology.
                  </p>
                  <p>
                    A recipient of prestigious recognitions such as the <strong className="text-foreground">Jawaharlal Nehru Memorial Fund Award</strong> and the <strong className="text-foreground">InSPA Leadership Award 2024</strong>, Dr. Sabesan is a certified expert in psychometrics and wellness by institutions including Yale University, the University of Michigan, and MHS Canada.
                  </p>
                  <p>
                    Through <strong className="text-foreground">Growth Catalyst</strong>, Dr. Sabesan continues to ignite purposeful growth journeys—helping individuals, teams, and organizations elevate their effectiveness, resilience, and well-being.
                  </p>
                </div>

                {/* Contact Info Card */}
                <Card className="mt-6 bg-accent/5 border-accent/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Contact Information</p>
                        <p className="text-lg font-semibold text-foreground">+91 9962104002</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mt-6 bg-blue-600/10 border-blue-800/20">
                 <CardContent className="pt-6">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-accent-foreground" />
                     </div>
                   <div>
        {/* Corrected link here */}
                         <a 
                              href="https://www.linkedin.com/in/dr-swaminathan-sabesan-330b9a17/" 
                              target="_blank" 
                              rel="noopener noreferrer"
        >
                          <p className="text-sm text-muted-foreground hover:underline">
                              Connect on LinkedIn
                                </p>
        </a>
      </div>
    </div>
  </CardContent>
</Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">
            Impact & Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-background text-center border-border hover:shadow-xl hover:scale-105 transition-all"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {achievement.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
              Professional Affiliations
            </h2>
            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <ul className="space-y-4">
                  {professionalAffiliations.map((affiliation, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{affiliation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
              Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <Card
                  key={index}
                  className="flex flex-col border-border hover:shadow-xl hover:border-accent/50 transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <area.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                          {area.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
              Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary to-primary-dark hover:shadow-xl hover:scale-105 transition-all">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
                    Integrity
                  </h3>
                  <p className="text-primary-foreground/90 text-sm">
                    Maintaining the highest standards of ethics and
                    professionalism in every interaction, ensuring trust and
                    credibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent to-accent/80 hover:shadow-xl hover:scale-105 transition-all">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-heading font-bold text-accent-foreground mb-3">
                    Collaboration
                  </h3>
                  <p className="text-accent-foreground/90 text-sm">
                    Partnering with clients to design and implement tailored
                    solutions that align with their unique objectives and
                    aspirations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary to-secondary/80 hover:shadow-xl hover:scale-105 transition-all">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-heading font-bold text-secondary-foreground mb-3">
                    Empathy
                  </h3>
                  <p className="text-secondary-foreground/90 text-sm">
                    Deeply understanding and addressing the individual and
                    organizational challenges to provide meaningful,
                    personalized support.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-primary-light hover:shadow-xl hover:scale-105 transition-all">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
                    Innovation
                  </h3>
                  <p className="text-primary-foreground/90 text-sm">
                    Continuously advancing practices by integrating the latest
                    research and methodologies to deliver forward-thinking
                    solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary-dark to-primary hover:shadow-xl hover:scale-105 transition-all md:col-span-2">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
                    Excellence
                  </h3>
                  <p className="text-primary-foreground/90 text-sm">
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