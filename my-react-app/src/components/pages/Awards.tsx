import Navbar from "@/Navbar";
import Footer from "@/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Jawaharlal Nehru Memorial Fund Award",
      issuer: "New Delhi",
      year: "",
      achievement:
        "Awarded for securing the first rank in the MA Psychology exam at Annamalai University",
      significance: "Recognizes academic excellence in psychology",
      category: "Academic Excellence",
    },
    {
      id: 2,
      title: "All India Merit Award",
      issuer: "ISTD New Delhi",
      year: "",
      achievement:
        "Merit Awardee for one of the papers in the ISTD Diploma exam",
      significance:
        "Acknowledges exceptional performance in the ISTD Diploma examination",
      category: "Professional Excellence",
    },
    {
      id: 3,
      title: "Psychometric Educational Services Award",
      issuer: "Chief Minister of Pondicherry",
      year: "",
      achievement:
        "Given for valuable services and contributions to Human Resource Development",
      significance:
        "Highlights contributions to HR development and psychometrics",
      category: "HR Development",
    },
    {
      id: 4,
      title: "Distinguished Alumnus Award",
      issuer: "Annamalai University",
      year: "",
      achievement:
        "Recognizes outstanding achievements and contributions as an alumnus",
      significance: "Honors exceptional alumni contributions",
      category: "Lifetime Achievement",
    },
    {
      id: 5,
      title: "In-House Expert on Psychometrics",
      issuer: "CFI's Graduate School of Coaching",
      year: "",
      achievement:
        "Recognized as an expert in psychometrics, contributing specialized knowledge to the institution",
      significance: "Acknowledgement of expertise in psychometric assessments",
      category: "Expert Recognition",
    },
    {
      id: 6,
      title: "Leadership Excellence and Team Excellence",
      issuer: "TVS SCS Town Hall",
      year: "",
      achievement:
        "Acknowledged for outstanding leadership and team performance",
      significance:
        "Highlights exceptional contributions to leadership and teamwork within the organization",
      category: "Leadership",
    },
    {
      id: 7,
      title: "Editorial and Associate Editor Roles",
      issuer: "Various Publications",
      year: "",
      achievement:
        "Serves as Editorial Consultant for International Journal of Asia Pacific School Psychology and SAGE Publications, and Associate Editor for Journal of Indian Academy of Applied Psychology",
      significance:
        "Emphasizes expertise and leadership in psychology field and influence in academic circles",
      category: "Academic Leadership",
    },
    {
      id: 8,
      title: "Appreciation from Employers",
      issuer: "Various Organizations",
      year: "",
      achievement:
        "Received commendation from chairman and Vice-Chairman for stellar contributions towards institution building exercise",
      significance:
        "Demonstrates consistent excellence and recognition from employers across career",
      category: "Professional Recognition",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Awards Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Awards & Recognition
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Celebrating excellence and outstanding contributions across academia
            and industry
          </p>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award) => (
              <Card
                key={award.id}
                className="flex flex-col border-border hover:shadow-xl transition-shadow-2xl duration-150"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="mb-2">
                      {award.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                  <CardDescription>{award.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-sm text-gray-700 mb-1">
                        Achievement
                      </h4>
                      <p className="text-sm text-gray-600">
                        {award.achievement}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-700 mb-1">
                        Significance
                      </h4>
                      <p className="text-sm text-gray-600">
                        {award.significance}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Section */}
          <section className="mt-16">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-center">
                  Professional Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">30+</div>
                    <div className="text-sm text-gray-600">
                      Years of Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">75+</div>
                    <div className="text-sm text-gray-600">
                      CEOs & CXOs Coached
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">8+</div>
                    <div className="text-sm text-gray-600">Major Awards</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      15+
                    </div>
                    <div className="text-sm text-gray-600">
                      Professional Certifications
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Note Section */}
          <section className="mt-8 text-center">
            <p className="text-gray-600 italic">
              These accolades illustrate outstanding contributions, leadership,
              and influence across various domains within organizational
              ecosystems.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Awards;
