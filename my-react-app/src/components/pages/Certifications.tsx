import Navbar from "@/Navbar";
import Footer from "@/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      category: "Emotional Intelligence",
      items: [
        {
          issuer: "Multi Health Systems Inc (MHS), USA",
          name: "EQ-i 2.0 and EQ 360",
        },
        {
          issuer: "Thomas International, UK",
          name: "Thomas Personal Profile Analysis and Thomas Emotional Intelligence",
        },
      ],
    },
    {
      category: "Psychology & Well-being",
      items: [
        { issuer: "Yale University", name: "Science of Well-being" },
        {
          issuer: "University of Michigan",
          name: "Finding Purpose and Meaning in Life",
        },
        { issuer: "University of Florida", name: "Personality Types at Work" },
        { issuer: "University of North Carolina", name: "Positive Psychology" },
      ],
    },
    {
      category: "Leadership & Organizational Behavior",
      items: [
        {
          issuer: "Università Bocconi",
          name: "International Leadership and Organizational Behavior",
        },
        { issuer: "Skillsoft", name: "Leadership Insights Series" },
        {
          issuer: "Indian School of Business",
          name: "A Life of Happiness and Fulfillment",
        },
      ],
    },
    {
      category: "HRD & Coaching",
      items: [
        {
          issuer: "Change Works India and CFI Graduate School of Coaching",
          name: "Appreciative Inquiry and Appreciative Coaching",
        },
        {
          issuer: "Mangalore University and AIM INSIGHTS",
          name: "Facilitators in HRD",
        },
        {
          issuer: "Academy of HRD, Ahmadabad",
          name: "MPTI (Management Personality Type Indicator)",
        },
      ],
    },
    {
      category: "Psychology & Assessment",
      items: [
        {
          issuer: "North American Society of Adlerian Psychology (USA)",
          name: "Understanding Self, Family Structure, and Relationships",
        },
        {
          issuer: "Prof. James Rounds, Southern Illinois University, USA",
          name: "Assessing Interests, Values, and Personality for Career Choice",
        },
        {
          issuer: "My Choice and My Future",
          name: "Psychometric Test for Career Guidance",
        },
      ],
    },
  ];

  const ipCreations = [
    {
      title: "Framework on Preserving Employee Well-Being",
      description:
        "Conceptualized and developed a comprehensive framework focused on maintaining and enhancing employee well-being within organizations.",
    },
    {
      title:
        "Courseware on Conceptual Appreciation of Schools of Applied Psychology and Counseling",
      description:
        "Prepared detailed course materials exploring various schools of applied psychology and counseling theories for aspiring CEO coaches.",
    },
    {
      title: "Coaching Model and Coaching Competency Model",
      description:
        "Co-created a structured coaching model alongside a competency model designed to guide and assess coaching practices and skills.",
    },
    {
      title: "Coaching Readiness Model and Checklist",
      description:
        "Developed a model and accompanying checklist to assess and ensure the readiness of coaches for coach supervisors.",
    },
    {
      title: "Continuous Coaching Competence Assessment Framework",
      description:
        "Designed a framework for the ongoing assessment of coaching competence to regularly evaluate and enhance coaching effectiveness.",
    },
    {
      title: "Cognitive Empathy and Helping Orientation Scale",
      description:
        "Developed a tool for measuring cognitive empathy and helping orientation to assess capacity in understanding and assisting others.",
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
              Certifications & Intellectual Property
            </h1>
            <p className="text-lg opacity-90">
              Globally recognized credentials and innovative frameworks driving
              behavioral transformation
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Professional Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((category, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((cert, certIndex) => (
                        <div
                          key={certIndex}
                          className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 rounded-r transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {cert.issuer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Intellectual Property Creations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ipCreations.map((ip, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{ip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {ip.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Summary Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Credentials
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">15+</div>
                    <div className="text-sm text-gray-600">
                      Global Certifications
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">6</div>
                    <div className="text-sm text-gray-600">IP Creations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      10+
                    </div>
                    <div className="text-sm text-gray-600">
                      Countries Represented
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
