import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// NOTE: Make sure to place your images in the `src/assets` folder
// and that the file names here match your actual files.
import annamalaiAward from "@/assets/annamalai.png";
import psychometricAward from "@/assets/Psycho.png";
import tvsAppreciationAward from "@/assets/tvsaw.png";
import tvsLogisticsAward from "@/assets/tvsa.png";
import soilAward from "@/assets/soil.png";

const Awards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  const awards = [
    {
      id: 4,
      title: "Distinguished Alumnus Award",
      issuer: "Annamalai University",
      achievement:
        "Recognizes outstanding achievements and contributions as an alumnus.",
      significance: "Honors exceptional alumni contributions.",
      category: "Lifetime Achievement",
      image: annamalaiAward,
    },
    {
      id: 3,
      title: "Psychometric Educational Services Award",
      issuer: "Chief Minister of Pondicherry",
      achievement:
        "Given for valuable services and contributions to Human Resource Development.",
      significance:
        "Highlights contributions to HR development and psychometrics.",
      category: "HR Development",
      image: psychometricAward,
    },
    {
      id: 8,
      title: "Appreciation from Employers",
      issuer: "Various Organizations",
      achievement:
        "Received commendation from the chairman and Vice-Chairman for stellar contributions towards institution building exercise.",
      significance:
        "Demonstrates consistent excellence and recognition from employers across the career.",
      category: "Professional Recognition",
      image: tvsAppreciationAward,
    },
    {
      id: 6,
      title: "Leadership Excellence",
      issuer: "TVS SCS",
      achievement:
        "Acknowledged for outstanding leadership and team performance.",
      significance:
        "Highlights exceptional contributions to leadership and teamwork within the organization.",
      category: "Leadership",
      image: tvsLogisticsAward,
    },
    {
      id: 5,
      title: "In-House Expert Recognition",
      issuer: "School of Inspired Leadership",
      achievement:
        "Recognized for long and valuable association with the institution.",
      significance: "Acknowledgement of expertise and long-term contribution.",
      category: "Expert Recognition",
      image: soilAward,
    },
    {
      id: 1,
      title: "Jawaharlal Nehru Memorial Fund Award",
      issuer: "New Delhi",
      achievement:
        "Awarded for securing the first rank in the MA Psychology exam at Annamalai University.",
      significance: "Recognizes academic excellence in psychology.",
      category: "Academic Excellence",
    },
    {
      id: 2,
      title: "All India Merit Award",
      issuer: "ISTD New Delhi",
      achievement:
        "Merit Awardee for one of the papers in the ISTD Diploma exam.",
      significance:
        "Acknowledges exceptional performance in the ISTD Diploma examination.",
      category: "Professional Excellence",
    },
    {
      id: 7,
      title: "Editorial and Associate Editor Roles",
      issuer: "Various Publications",
      achievement:
        "Serves as Editorial Consultant for the International Journal of Asia Pacific School Psychology and SAGE Publications. Also acts as Associate Editor for the Journal of Indian Academy of Applied Psychology (JIAAP), contributing to the editorial oversight for India’s flagship journal in psychology.",
      significance:
        "These roles emphasize expertise and leadership in the field of psychology and influence in academic and professional circles.",
      category: "Academic Leadership",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Awards & Recognition
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Celebrating excellence and outstanding contributions across academia
            and industry
          </p>

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
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg pr-2">
                      {award.title}
                    </CardTitle>
                    {award.image && (
                      <img
                        src={award.image}
                        alt={`Certificate for ${award.title}`}
                        // ** Here is the change: w-12 h-12 is now w-14 h-14 **
                        className="w-14 h-14 object-contain cursor-pointer hover:scale-110 transition-transform flex-shrink-0 rounded-md"
                        onClick={() =>
                          handleImageClick(award.image, award.title)
                        }
                      />
                    )}
                  </div>
                  <CardDescription className="text-gray-500 pt-1">
                    {award.issuer}
                  </CardDescription>
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

          <section className="mt-8 text-center">
            <p className="text-gray-600 italic">
              These accolades illustrate outstanding contributions, leadership,
              and influence across various domains within organizational
              ecosystems.
            </p>
          </section>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>{selectedTitle}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {selectedImage && (
              <img
                src={selectedImage}
                alt={`Full view of ${selectedTitle}`}
                className="w-full h-auto rounded-md"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Awards;
