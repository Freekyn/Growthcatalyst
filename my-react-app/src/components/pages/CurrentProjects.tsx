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
import { Calendar, Users, Target, GraduationCap, Building } from "lucide-react";

const CurrentProjects = () => {
  const currentProjects = [
    {
      id: 1,
      title: "Professor of Practice - VIT University",
      institution: "VIT University Chennai Campus",
      role: "Professor of Practice, School of Social Sciences – Psychology",
      period: "July 2024 - Present",
      status: "Active",
      description:
        "Currently serving as Professor of Practice, contributing to academic excellence in psychology through teaching, faculty development, and research guidance.",
      icon: GraduationCap,
      type: "Academic Role",
    },
    {
      id: 2,
      title: "Corporate Behavioral Training 2024",
      organization: "Multiple Corporate Clients",
      focus: "Leadership & Professional Development",
      period: "2024 - Ongoing",
      status: "Active",
      description:
        "Ongoing behavioral training programs focusing on leadership development, communication skills, and professional growth across various industries.",
      icon: Users,
      type: "Corporate Training",
    },
    {
      id: 3,
      title: "Executive Coaching Initiatives",
      clients: "Senior Leadership Teams",
      focus: "Strategic Leadership Development",
      period: "2024 - Present",
      status: "Active",
      description:
        "Current executive coaching engagements with senior leaders focusing on behavioral transformation and strategic leadership capabilities.",
      icon: Target,
      type: "Executive Coaching",
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
              Current Projects & Engagements
            </h1>
            <p className="text-lg opacity-90">
              Active initiatives and ongoing professional engagements driving
              transformation across organizations
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={project.id}
                  className="flex flex-col border-border hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-3">
                    <div>
                      <p className="text-sm text-gray-700 mb-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{project.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Building className="h-4 w-4 mr-2" />
                        <span>
                          {project.institution || project.organization}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Active Engagements
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">3+</div>
                    <div className="text-sm text-gray-600">
                      Current Major Projects
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      2024
                    </div>
                    <div className="text-sm text-gray-600">Active Year</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      Multiple
                    </div>
                    <div className="text-sm text-gray-600">
                      Client Organizations
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

export default CurrentProjects;
