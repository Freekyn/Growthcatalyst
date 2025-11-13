import Navbar from "@/Navbar";
import Footer from "@/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MediaPublications = () => {
  const mediaAppearances = [
    {
      channels: ["DD Pothigai", "Kalaignar TV", "Vendhar TV", "Moon TV"],
      topics: ["Mental Health", "Well-being", "Resilience"],
      description:
        "Participated in more than 20  talk shows  and interviews addressing topics related to mental health, resilience, and well-being, discussing insights and strategies for managing mental health.",
    },
  ];

  const publications = [
    {
      type: "Conference Paper",
      title: "Knowledge Management in an Organization - The TVS SCS Approach",
      venue: "7th Biennial Supply Chain Management Conference at IIM-Bangalore, 2022",
      year: "Presented",
    },
    {
      type: "Book Chapter",
      title: "HRM in a Post-Epidemic Global Environment: Roles, Strategies, and Implementation",
      venue: "Apple Academic Press",
      year: "February 2023",
    },
    {
      type: "Book Chapter",
      title: "Preserving Employees' Well-being – An Organization's Post-Pandemic Imperative",
      venue: "Apple Press USA",
      year: "March 2023",
    },
    {
      type: "Journal Articles",
      title: "Work-Life Balance and Positive Psychology",
      venue: "International Journal of Psycho-Social Research",
      year: "Published",
    },
    {
      type: "Articles",
      title: "Five state-of-the-art articles on coaching",
      venue: "CFI's Coaching Digest",
      year: "Published",
    },
  ];

  const academicRoles = [
    {
      role: "Professor of Practice",
      institution: "VIT University Chennai Campus",
      department: "School of Social Sciences – Psychology",
      period: "Since July 2024",
      description: "Extending services as Professor of Practice in Psychology",
    },
    {
      role: "Ph.D. Examiner",
      institution: "Bharathiar University, Coimbatore",
      department: "",
      period: "",
      description: "Served as examiner for Ph.D. Viva-Voce Examination",
    },
    {
      role: "Board of Studies Member",
      institution: "Vivekananda College, Chennai",
      department: "Department of Business Administration",
      period: "",
      description: "Member of Board of Studies",
    },
    {
      role: "Board of Studies Member",
      institution: "JBAS College for Women, Chennai",
      department: "Department of Applied Psychology and Behavioral Research",
      period: "",
      description: "Member of Board of Studies",
    },
    {
      role: "Ph.D SUPERVISOR",
      institution: "",
      department: "",
      period: "",
      description: "Guided Ph.D scholars ( Psychology)",
    },
    {
      role: "BOARD OF SELECTION ",
      institution: "Rajiv Gandhi Institute for Youth Development",
      department: "",
      period: "",
      description: "Member, Board of Selection",
    },
  ];

  const editorialRoles = [
    {
      role: "Editorial Consultant",
      publication:
        "International Journal of Asia Pacific School Psychology and SAGE Publications",
      description:
        "Provides expert consultation and guidance for academic content and editorial decisions",
    },
    {
      role: "Associate Editor",
      publication: "Journal of Indian Academy of Applied Psychology (JIAAP)",
      description:
        "Contributes to editorial oversight and quality control for India's flagship psychology journal",
    },
    {
      role: "Editorial Consultant",
      publication: "SAGE Publications",
      description:
        "Provides expert content review and strategic recommendations to ensure the highest quality and impact of publications.",
    },
  ];

  const researchGuidance = [
    "Guided two M.Phil (Psychology) scholars",
    "Guided one Ph.D. (Psychology) scholar",
    "Reviewed ten books for various journals including Journal of ISTD, NHRD Network Journal, SCMS Journal of Management, Journal of Indian Academy of Psychology",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Media & Publications
            </h1>
            <p className="text-lg opacity-90">
              Thought leadership and academic contributions across various
              platforms
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Media Appearances */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Media Appearances</h2>
            <div className="grid gap-6">
              {mediaAppearances.map((media, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle>Television Interviews</CardTitle>
                    <CardDescription className="text-primary">
                      {media.channels.join(", ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {media.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-gray-700">{media.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Publications</h2>
            <div className="grid gap-6">
              {publications.map((pub, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{pub.title}</CardTitle>
                        <CardDescription className="text-primary">{pub.type}</CardDescription>
                      </div>
                      <Badge variant="outline">{pub.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-gray-700">{pub.venue}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Academic Roles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Academic Contributions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {academicRoles.map((role, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{role.role}</CardTitle>
                    <CardDescription className="text-primary">{role.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {role.department && (
                      <p className="font-medium mb-2 text-gray-700">
                        {role.department}
                      </p>
                    )}
                    {role.period && (
                      <p className="text-sm text-gray-600 mb-2">
                        {role.period}
                      </p>
                    )}
                    <p className="text-gray-700">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Editorial Roles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Editorial Roles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {editorialRoles.map((role, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{role.role}</CardTitle>
                    <CardDescription className="text-primary">{role.publication}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          
          {/* Research Guidance */}
          <section>
            <h2 className="text-3xl font-bold mb-8">
              Research Guidance & Reviews
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Research Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {researchGuidance.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Regular Contributions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700">
                    Regular contributor of articles for employees' intranet (TVS
                    SCS- LINK) and various professional forums.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Knowledge Management</Badge>
                    <Badge variant="outline">Employee Well-being</Badge>
                    <Badge variant="outline">Coaching</Badge>
                    <Badge variant="outline">Leadership Development</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Summary Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Academic Impact
                </h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">4+</div>
                    <div className="text-sm text-gray-600">TV Channels</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-600">20+</div>
                    <div className="text-sm text-gray-600">Publications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">3+</div>
                    <div className="text-sm text-gray-600">
                      Research Scholars
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600">
                      Professional Bodies
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

export default MediaPublications;
