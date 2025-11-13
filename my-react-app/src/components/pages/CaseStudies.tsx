import Navbar from "@/Navbar";
import Footer from "@/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Briefcase, Calendar, Users } from "lucide-react";

const CaseStudies = () => {
  // New caseStudies array based on the document
  const caseStudies = [
    {
      id: 1,
      title: "Developmental Coaching for Senior Leaders",
      period: "2018 - 2023",
      outcomes: [
        "Significant behavioral and mindset changes",
        "Enhanced leadership skills in delegation and collaboration",
        "Improved work-life integration",
        "Achieved process excellence with cost-saving measures",
        "Elevated communication skills",
      ],
      clients: [
        "TVS SCS",
        "ROCA India",
        "Colgate Palmolive",
        "Ares Asia",
        "Bosch",
        "Phillips",
        "and other major clients",
      ],
    },
    {
      id: 2,
      title: "Corporate Behavioral Training",
      period: "2024 - Ongoing",
      description:
        "Ongoing behavioral training programs focusing on leadership development, communication skills, and professional growth across various industries.",
      clients: ["Multiple Corporate Clients"],
    },
    {
      id: 3,
      title: "Behavioral Training Interventions",
      description:
        "Designed and facilitated bespoke behavioural training interventions leading to discernible behavioural changes seen in participants by all the relevant stakeholders at TVS SCS.",
      programs: [
        "PRIDE",
        "LEAD TRANSFORMERS",
        "FLOURISH ASPIRE",
        "RISE",
        "SPARK",
        "CONNECT AND LEAP",
      ],
    },
    {
      id: 4,
      title: "People Development - Supervisory Training",
      stats: "316 employees trained, 1,688 hours in FY 2023-2024",
      description:
        "Delivered supervisory training programs for TVS SCS employees across multiple project locations, empowering teams at top-tier organizations such as Hyundai Motors, Ashok Leyland, Royal Enfield, Apollo Tyres, Hyundai Mobis, Daimler, Foxconn, Lenovo, Ford India, LMW, and Janatics to enhance leadership, operational efficiency, and on-site performance.",
      programs: [
        "Delivered targeted soft skills programs, including ‘Key Account Manager Development’, ‘My Development & My Future’ for corporate finance teams, and career decision-making workshops for children of senior leaders. Additionally, provided monthly soft skills training for Transportation (T-Bolt), Warehousing (I-Bolt), and Material Handling teams, enhancing professional effectiveness and team performance.",
      ],
    },
    {
      id: 5,
      title: "Behavioral Training Hours Facilitated (2023-2024)",
      stats: "3,404 hours of behavioral training",
      programs: [
        "PRIDE",
        "FLOURISH",
        "ASPIRE",
        "SPARK",
        "RISE",
        "CONNECT",
        "SPARK refresher sessions",
      ],
      topics: [
        "Foundational TVS values",
        "advanced leadership",
        "communication",
        "emotional intelligence",
        "adaptability",
        "collaboration",
        "and conflict management to enhance personal and team effectiveness.",
      ],
    },
    {
      id: 6,
      title: "Two day Self–Discovery Clinic",
      description:
        "This Self–Discovery Clinic was conducted for the selected employees of COE, TVS SCS and it empowered participants to uncover their strengths, clarify goals, and leave with a clear roadmap for personal and professional growth.",
    },
  ];

  // Data for the new "Active Engagements" block
  const activeEngagements = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      value: "6+",
      label: "Current Major Projects",
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      value: "2025",
      label: "Active Year",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      value: "Multiple",
      label: "Client Organizations",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Case Studies & Projects
            </h1>
            <p className="text-lg opacity-90">
              Transformative interventions that delivered measurable results
              across organizations
            </p>
          </div>
        </div>
      </section>

      {/* Updated Projects Accordion */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {caseStudies.map((study) => (
              <AccordionItem
                key={study.id}
                value={`item-${study.id}`}
                className="border-b border-gray-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold text-left text-primary-dark">
                      {study.title}
                    </h3>
                    {study.period && (
                      <p className="text-sm text-gray-600 mt-1">
                        {study.period}
                      </p>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-4 bg-gray-50 rounded-b-lg">
                    {study.description && (
                      <p className="text-gray-700">{study.description}</p>
                    )}

                    {study.outcomes && (
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">
                          Outcomes:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {study.outcomes.map((outcome, index) => (
                            <li key={index}>{outcome}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {study.clients && (
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">
                          Clients:
                        </h4>
                        <p className="text-gray-700">
                          {study.clients.join(", ")}
                        </p>
                      </div>
                    )}

                    {study.stats && (
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">
                          Impact:
                        </h4>
                        <p className="text-gray-700 font-medium">{study.stats}</p>
                      </div>
                    )}

                    {study.programs && (
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">
                          Programs:
                        </h4>
                        <p className="text-gray-700">
                          {study.programs.join(", ")}
                        </p>
                      </div>
                    )}

                    {study.topics && (
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900">
                          Topics Covered:
                        </h4>
                        <p className="text-gray-700">
                          {study.topics.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudies;