import Navbar from "@/Navbar";
import Footer from "@/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg opacity-90">
              Comprehensive solutions designed to transform your organization
              and empower your team
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="coaching" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="coaching">Coaching</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="psychometric">Assessments</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
            </TabsList>

            <TabsContent value="coaching" className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Coaching Approach and Philosophy
                  </CardTitle>
                  <CardDescription>
                    Personalized coaching for sustainable transformation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Dr. Sabesan's coaching programs are meticulously tailored to
                    address the unique needs of each participant, emphasizing
                    the development of key behavioral competencies essential for
                    both professional and personal growth. His coaching
                    methodology prioritizes self-discovery, practical
                    application, and sustained behavioral change to ensure a
                    lasting impact felt in the coachee and discernible changes
                    seen by all the key stakeholders.
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                    Participant Benefits:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Personalized Coaching Plans:</strong> Each
                      coaching engagement is customized to focus on the
                      individual's specific strengths, challenges, and goals.
                    </li>
                    <li>
                      <strong>Holistic Development:</strong> The coaching
                      process integrates both professional and personal
                      dimensions, promoting a well-rounded approach to growth.
                    </li>
                    <li>
                      <strong>Sustainable Change:</strong> Emphasis is placed on
                      achieving long-term behavioral change, validated by
                      stakeholders and reinforced through continuous feedback.
                    </li>
                  </ul>
                  <div className="bg-primary/5 p-6 rounded-lg mt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Coach Philosophy:
                    </h3>
                    <p className="italic">
                      "The coach stays coachee-centric in his approach,
                      humanistic in his style, eclectic in the choice of tools,
                      dextrous in the deployment of skills and empowers coachee
                      to leverage his/her signature strengths for opportunity
                      development and problem management. The coach will adhere
                      to the ethical standards and respects the privacy and
                      confidentiality of his/her coachee."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="leadership" className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Leadership Development Programs
                  </CardTitle>
                  <CardDescription>
                    Transforming managers into inspiring leaders
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Leadership extends beyond holding a position; it involves
                    inspiring others, driving strategic goals, and creating a
                    positive organizational impact. Dr. Sabesan's Leadership
                    Development Programs are crafted to cultivate these
                    qualities, transforming managers into leaders who excel with
                    confidence, empathy, and a strategic outlook.
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Bespoke Training Interventions:</strong> Each
                      program is customized to meet the specific needs of the
                      organization and its leaders, ensuring that the training
                      is both relevant and immediately applicable.
                    </li>
                    <li>
                      <strong>Competency-Based Development:</strong> The
                      programs concentrate on enhancing essential leadership
                      competencies, including strategic thinking,
                      decision-making, emotional intelligence, and effective
                      communication.
                    </li>
                    <li>
                      <strong>Impactful Learning Experiences:</strong>{" "}
                      Participants engage in a blend of workshops, real-time
                      feedback, and practical exercises, acquiring actionable
                      insights that lead to measurable improvements and results.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="psychometric" className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Comprehensive Psychometric Profiling
                  </CardTitle>
                  <CardDescription>
                    Scientific assessments for informed decision-making
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Dr. Sabesan employs an eclectic approach in administering
                    relevant psychometric assessments to evaluate a broad
                    spectrum of psychological attributes, including personality
                    traits, emotional intelligence, cognitive abilities, and
                    behavioral tendencies. These assessments are foundational
                    for various developmental programs and are crucial in
                    identifying individual strengths and areas for improvement.
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                    Key Benefits:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Personalized Insights:</strong> Provides a deeper
                      understanding of individual personality profiles,
                      facilitating the creation of tailored personal development
                      plans and enhancing team dynamics.
                    </li>
                    <li>
                      <strong>Objective Decision-Making:</strong> Utilizes
                      scientifically validated tools to support informed
                      decisions in recruitment, leadership development, and team
                      composition.
                    </li>
                    <li>
                      <strong>Enhanced Self-Awareness:</strong> Encourages
                      increased self-awareness, which improves interpersonal
                      relationships and aligns better with career goals.
                    </li>
                  </ul>
                  <div className="bg-primary/5 p-6 rounded-lg mt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Assessment Tools Used:
                    </h3>
                    <p>
                      EQi 2.0, FIRO-B, FIRO-F, MPTI, 16 PF, Big Five, Thomas
                      Profiling, and the "My Choice, My Future" assessment,
                      among others.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="training" className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Corporate Training Interventions
                  </CardTitle>
                  <CardDescription>
                    Equipping employees with essential skills for excellence
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    In today's competitive business environment, continuous
                    learning and development are crucial for maintaining a
                    competitive edge. Dr. S. Sabesan's Corporate Training
                    Interventions are designed to equip employees at all levels
                    with the skills, knowledge, and behaviors necessary to excel
                    and contribute to organizational success.
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                    Customized Training Solutions:
                  </h3>
                  <p>
                    Each corporate training intervention is meticulously crafted
                    to address the specific needs and challenges of the
                    organization. Dr. Sabesan collaborates closely with
                    corporate leaders to design and deliver training programs
                    that are both relevant and aligned with the organization's
                    strategic objectives.
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Bespoke Workshops:</strong> Tailored training
                      sessions that focus on competencies such as leadership,
                      communication, conflict resolution, and customer
                      engagement.
                    </li>
                    <li>
                      <strong>Practical, Hands-On Learning:</strong>{" "}
                      Incorporates real-world scenarios and practical exercises,
                      ensuring that participants can immediately apply their
                      learning in their daily roles.
                    </li>
                    <li>
                      <strong>Measurable Outcomes:</strong> Evaluates training
                      effectiveness through pre- and post-assessments,
                      participant feedback, and observable changes in behavior
                      and performance.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Services Grid */}
          <div className="mt-20">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
              Additional Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Knowledge Management Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Implementing knowledge management solutions to augment
                    organizational learning and user engagement. Successfully
                    implemented CRYPTA platform with 49,711+ user visitations
                    and 2,117 process excellence documents.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Employee Well-being Initiatives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive programs focused on mental health awareness,
                    stress management, resilience building, and positive
                    psychology interventions to enhance happiness and job
                    satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Academic and Faculty Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Specialized training and mentoring to elevate faculty
                    effectiveness, including pedagogical training, leadership in
                    academia, and continuous professional development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Consulting Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Expert consultation on transition management for senior
                    leaders, performance improvement, developmental planning,
                    and employee satisfaction based on deep systemic
                    understanding.
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

export default Services;
