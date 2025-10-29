import Navbar from "@/Navbar";
import Footer from "@/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Knowledge Management Journey",
      period: "January 2017 - January 2024",
      achievements: [
        "49,711 User Visitations to CRYPTA KM portal",
        "2,117 Process Excellence Documents uploaded",
        "20 Crypta Sensitization Sessions conducted",
        "22 Knowledge Sharing Sessions facilitated",
        "221 KTF (Knowledge Through Fun) Contests organized",
      ],
      description:
        "Spearheaded KM initiative at TVS SCS, growing CRYPTA to serve global audience with extensive repository.",
    },
    {
      id: 2,
      title: "Developmental Coaching for Senior Leaders",
      period: "2018 - 2023",
      outcomes: [
        "Significant behavioral and mindset changes",
        "Enhanced leadership skills in delegation and collaboration",
        "Improved work-life integration",
        "Achieved process excellence with cost-saving measures",
        "Elevated communication skills",
      ],
      clients: ["TVS SCS", "ROCA India", "Other consulting clients"],
    },
    {
      id: 3,
      title: "Behavioral Training Interventions",
      description:
        "Designed and facilitated programs like PRIDE, LEAD TRANSFORMERS, ASPIRE, RISE, SPARK, and CONNECT at TVS SCS.",
      programs: [
        "PRIDE",
        "LEAD TRANSFORMERS",
        "ASPIRE",
        "RISE",
        "SPARK",
        "CONNECT",
      ],
      duration: "6-7 months per program",
      impact:
        "Noticeable improvements in employee behavior as observed by stakeholders",
    },
    {
      id: 4,
      title: "People Development - Supervisory Training",
      stats: "316 employees trained, 1,688 hours in FY 2023-2024",
      clients: [
        "Hyundai Motors",
        "Ashok Leyland",
        "Royal Enfield",
        "Apollo Tyres",
        "Hyundai Mobis",
        "Daimler",
        "Foxconn",
        "Lenovo",
        "Ford India",
      ],
      focus:
        "Essential supervisory skills such as communication, delegation, and leadership",
    },
    {
      id: 5,
      title: "Contribution to the Body of Knowledge",
      achievements: [
        "Presented paper at 7th Biennial Supply Chain Management Conference at IIM-Bangalore",
        "Contributed book chapter to Apple Press USA on employee well-being",
        "Published articles in International Journal of Psycho-Social Research",
        "Published five state-of-the-art articles in CFI's Coaching Digest",
        "Reviewed ten books for various academic journals",
      ],
      research: "Guided two M.Phil and one Ph.D. scholars in Psychology",
    },
    {
      id: 6,
      title: "Bespoke People Developmental Interventions",
      teams: [
        "Transportation team (T-Bolt)",
        "Warehousing team (I-Bolt)",
        "Material Handling team (M-Bolt)",
      ],
      programs: [
        "Soft skills development for Key Account Managers",
        "My Development and My Future for corporate finance team",
        "Career decision-making for children of senior leaders",
      ],
      tools: ["My Choice My Future psychometric assessment"],
    },
    {
      id: 7,
      title: "Behavioral Training Hours Facilitated (2023-2024)",
      stats: "3,404 hours of behavioral training",
      employees: "436 employees impacted",
      programs: ["SPARK", "RISE", "CONNECT", "SPARK refresher sessions"],
      topics: [
        "Foundational values of TVS SCS",
        "Advanced leadership",
        "Communication skills",
      ],
    },
    {
      id: 8,
      title: "Cross-Functional Collaboration Initiatives",
      contributions: [
        "Refined strategy documents for various capabilities",
        "Sourced knowledge assets for CRYPTA KM portal",
        "Mentored Corporate Super Kings team to victory",
        "Launched BLUE BOOKS on various capabilities",
        "Collaborated with HR, Solution, and Implementation teams",
      ],
      impact:
        "Enhanced cross-functional collaboration across TVS SCS ecosystem",
    },
    {
      id: 9,
      title: "Speaker at Various Forums as a Branding Initiative",
      forums: ["NIPM Madurai Chapter", "S2S HR", "ISTD Chennai Chapter"],
      topics: [
        "Knowledge Management",
        "Employee well-being",
        "Coaching",
        "Leader development",
        "Organizational development",
      ],
      impact: "Strengthened TVS SCS's brand presence and thought leadership",
    },
    {
      id: 10,
      title: "Two-Day Self-Discovery Clinic",
      date: "November 2023",
      participants: "Selected employees at TVS SCS",
      focus:
        "Uncovering inner strengths and leveraging insights in personal and professional lives",
      feedback: "Overwhelmingly positive with requests for extension",
      impact:
        "Significant self-understanding and influenced approach to work and life",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Case Studies & Projects
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Transformative interventions that delivered measurable results across
          organizations
        </p>

        <Accordion type="single" collapsible className="w-full">
          {caseStudies.map((study) => (
            <AccordionItem key={study.id} value={`item-${study.id}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-semibold text-left">
                    {study.title}
                  </h3>
                  {study.period && (
                    <p className="text-sm text-gray-600 mt-1">{study.period}</p>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-2">
                  {study.description && (
                    <p className="text-gray-700">{study.description}</p>
                  )}

                  {study.achievements && (
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {study.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
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
                      <p className="text-gray-700">{study.stats}</p>
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

                  {study.teams && (
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">
                        Teams Served:
                      </h4>
                      <p className="text-gray-700">{study.teams.join(", ")}</p>
                    </div>
                  )}

                  {study.contributions && (
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">
                        Key Contributions:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {study.contributions.map((contribution, index) => (
                          <li key={index}>{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {study.forums && (
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">
                        Forums:
                      </h4>
                      <p className="text-gray-700">{study.forums.join(", ")}</p>
                    </div>
                  )}

                  {study.topics && (
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">
                        Topics Covered:
                      </h4>
                      <p className="text-gray-700">{study.topics.join(", ")}</p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
