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
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const assessmentTools = [
    "EQi 2.0",
    "EQ 360",
    "FIRO-B",
    "FIRO-F",
    "MPTI",
    "16 PF",
    "Big Five",
    "Thomas Profiling",
    "My Choice, My Future",
  ];

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
              Comprehensive behavioral solutions designed to transform your
              organization and empower your team
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="coaching" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full text-black grid-cols-2 md:grid-cols-4 mb-12 h-auto bg-primary/10 rounded-lg p-1">
              <TabsTrigger value="coaching" className="text-xs md:text-sm py-3">
                Behavioral Coaching
              </TabsTrigger>
              <TabsTrigger value="leadership" className="text-xs md:text-sm py-3">
                Leadership Development
              </TabsTrigger>
              <TabsTrigger value="psychometric" className="text-xs md:text-sm py-3">
                Psychometric Assessments
              </TabsTrigger>
              <TabsTrigger value="training" className="text-xs md:text-sm py-3">
                Corporate Training
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coaching" className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                    Behavioral Coaching Approach and Philosophy
                  </CardTitle>
                  <CardDescription>
                    Personalized coaching for sustainable professional and
                    personal transformation
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
                    seen by all the key stakeholders. He offers behavioural
                    coaching, developmental coaching and transition coaching for
                    leaders at senior management levels.
                  </p>

                  <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
                    Participant Benefits:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong className="text-foreground">Personalized Coaching Plans:</strong> Each
                      coaching engagement is customized to focus on the
                      individual's specific strengths, challenges, and goals.
                    </li>
                    <li>
                      <strong className="text-foreground">Holistic Development:</strong> The coaching
                      process integrates both professional and personal
                      dimensions, promoting a well-rounded approach to growth.
                    </li>
                    <li>
                      <strong className="text-foreground">Sustainable Change:</strong> Emphasis is placed on
                      achieving long-term behavioral change, validated by
                      stakeholders and reinforced through continuous feedback.
                    </li>
                  </ul>

                  <div className="bg-accent/5 border border-accent/20 p-6 rounded-lg mt-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Coach Philosophy:
                    </h3>
                    <p className="italic leading-relaxed text-muted-foreground">
                      "The coach stays coachee-centric in his approach,
                      humanistic in his style, eclectic in the choice of tools,
                      dextrous in the deployment of skills and empowers coachee
                      to leverage his/her signature strengths for opportunity
                      development and problem management. The coach will adhere
                      to the ethical standards and respects the privacy and
                      confidentiality of his/her coachee. The coach stays
                      committed throughout the engagement and ensures that the
                      development needs of the coachee and the needs of the
                      organization are aligned and fulfilled to all round
                      satisfaction."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="leadership" className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                    Leadership Development Programs
                  </CardTitle>
                  <CardDescription>
                    Transforming managers into inspiring, strategic leaders
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
                      <strong className="text-foreground">Bespoke Training Interventions:</strong> Each
                      program is customized to meet the specific needs of the
                      organization and its leaders, ensuring that the training
                      is both relevant and immediately applicable.
                    </li>
                    <li>
                      <strong className="text-foreground">Competency-Based Development:</strong> The
                      programs concentrate on enhancing essential leadership
                      competencies, including strategic thinking,
                      decision-making, emotional intelligence, and effective
                      communication.
                    </li>
                    <li>
                      <strong className="text-foreground">Impactful Learning Experiences:</strong>{" "}
                      Participants engage in a blend of workshops, real-time
                      feedback, and practical exercises, acquiring actionable
                      insights that lead to measurable improvements and results.
                    </li>
                  </ul>

                  <div className="bg-primary/5 border border-primary/10 p-6 rounded-lg mt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Program Impact:
                    </h3>
                    <p>
                      Proven track record of developing leadership capabilities
                      that drive organizational success and create lasting
                      positive change in leadership behavior and mindset.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="psychometric" className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                    Comprehensive Psychometric Profiling
                  </CardTitle>
                  <CardDescription>
                    Scientific assessments for informed talent decisions and
                    development
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
                      <strong className="text-foreground">Personalized Insights:</strong> Provides a deeper
                      understanding of individual personality profiles,
                      facilitating the creation of tailored personal development
                      plans and enhancing team dynamics.
                    </li>
                    <li>
                      <strong className="text-foreground">Objective Decision-Making:</strong> Utilizes
                      scientifically validated tools to support informed
                      decisions in recruitment, leadership development, and team
                      composition.
                    </li>
                    <li>
                      <strong className="text-foreground">Enhanced Self-Awareness:</strong> Encourages
                      increased self-awareness, which improves interpersonal
                      relationships and aligns better with career goals.
                    </li>
                  </ul>

                  <div className="bg-primary/5 border border-primary/10 p-6 rounded-lg mt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Assessment Tools Used:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {assessmentTools.map((tool, index) => (
                        <Badge key={index} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-4 text-sm">
                      These globally recognized tools deliver precise and
                      actionable insights that drive both personal and
                      organizational growth.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="training" className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                    Corporate Training Interventions
                  </CardTitle>
                  <CardDescription>
                    Equipping employees with essential behavioral skills for
                    organizational excellence
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
                      <strong className="text-foreground">Bespoke Workshops:</strong> Tailored training
                      sessions that focus on competencies such as leadership,
                      communication, conflict resolution, and customer
                      engagement.
                    </li>
                    <li>
                      <strong className="text-foreground">Practical, Hands-On Learning:</strong>{" "}
                      Incorporates real-world scenarios and practical exercises,
                      ensuring that participants can immediately apply their
                      learning in their daily roles.
                    </li>
                    <li>
                      <strong className="text-foreground">Measurable Outcomes:</strong> Evaluates training
                      effectiveness through pre- and post-assessments,
                      participant feedback, and observable changes in behavior
                      and performance.
                    </li>
                  </ul>

                  <div className="bg-secondary/5 border border-secondary/20 p-6 rounded-lg mt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Training Impact (2023-2024):
                    </h3>
                    <p>
                      <strong className="text-secondary">3,404 hours</strong> of behavioral training
                      delivered to <strong className="text-secondary">436 employees</strong> across various
                      divisions, covering topics from foundational values to
                      advanced leadership and communication skills.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Services Grid */}
          <div className="mt-20">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
              Comprehensive Service Portfolio
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-foreground">Knowledge Management Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Implementing robust knowledge management solutions to
                    capture, organize, and utilize institutional knowledge.
                    Features include knowledge capture systems, collaborative
                    platforms like CRYPTA, and sustained engagement through
                    workshops and interactive contests.
                  </p>
                  <div className="mt-4 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                    <p className="text-xs font-semibold text-primary">
                      Achievement: 49,711 user visitations, 2,117 process
                      excellence documents, 221 KTF contests
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-foreground">Employee Well-being Initiatives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Comprehensive approach addressing mental health support,
                    physical wellness programs, and positive psychology
                    interventions. Programs focus on stress management,
                    resilience building, fitness challenges, and enhancing
                    happiness and job satisfaction.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Mental Health
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Stress Management
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Resilience
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Positive Psychology
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-foreground">Academic and Faculty Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialized programs for academic institutions including
                    pedagogical training, leadership in academia, and continuous
                    professional development. Currently serving as Professor of
                    Practice at VIT University Chennai Campus since July 2024.
                  </p>
                  <div className="mt-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                    <p className="text-xs font-semibold text-accent">
                      Current Role: Professor of Practice, School of Social
                      Sciences – Psychology, VIT University
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-foreground">Consulting Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Deeply collaborative consulting approach focusing on
                    leadership development, behavioral and cultural
                    transformation, strategic planning, and organizational
                    development. Provides actionable strategies for sustained
                    and profitable growth.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border border-secondary/60 text-secondary">
                      Strategic Planning
                    </Badge>
                    <Badge variant="outline" className="text-xs border border-secondary/60 text-secondary">
                      Cultural Transformation
                    </Badge>
                    <Badge variant="outline" className="text-xs border border-secondary/60  text-secondary">
                      Organizational Development
                    </Badge>
                    <Badge variant="outline" className="text-xs border border-secondary/60 text-secondary">
                      Performance Improvement
                    </Badge>
                  </div>
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