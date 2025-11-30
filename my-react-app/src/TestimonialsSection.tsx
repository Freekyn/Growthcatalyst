import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayush Agrawal",
    position: "Vice President, India Financing at Deutsche Bank",
    company: "",
    quote:
      "Dr. Sabesan is an extremely patient and empathetic listener. Over our 12-month assignment, he guided me to build a long-term professional career and define SMART goals. I saw tangible benefits and continue to see incremental benefits by adopting his methodologies.",
  },
  {
    name: "Abhishek Mazumdar",
    position:
      "Director, Head Sales, Marketing and Business Development, Roca and Luxury Brands",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "Dr. Sabesan has played a game-changer role in my professional journey. He is a patient listener who applies both technique and empathy to evaluate every dimension of a person's interactions. He continues to be a beacon of light for me, guiding me whenever I need professional help.",
  },
  {
    name: "Boby Mohan",
    position: "Vice President and CIO",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "I've seen a remarkable improvement in Srividhya's ability to collaborate and handle objections objectively. Dr. Sabesan's coaching has truly transformed her approach to teamwork and communication.",
  },
  {
    name: "Partha Banerjee",
    position: "Vice President, Head – Business Services",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The SPARK program, designed by Dr. Sabesan, has led to significant improvements in team management and leadership skills. His patience and program design have greatly benefited our leadership team.",
  },
  {
    name: "Oswald",
    position: "Head - Global Infrastructure, Group Corporate",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The SPARK training program led by Dr. Sabesan has had a tremendous impact on our team. His sessions were not only informative but also life-changing, helping us develop a growth mindset and increased accountability.",
  },
  {
    name: "Sundari Murali",
    position: "Head – Global  Business Analytics",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "Dr. Sabesan's developmental coaching was transformative for my career. His guidance helped me uncover new solutions and develop critical leadership skills. I am now more consistent and confident in my professional approach.",
  },
  {
    name: "Mohan Narayanasamy",
    position: "General Manager and Business Head",
    company: "TVS Toyota Tsusho Supply Chain Solutions Ltd.",
    quote:
      "The ASPIRE sessions led by Dr. Sabesan have been pivotal in transforming my team's mindset. His approach has instilled a proactive attitude and long-term strategic thinking in my employees.",
  },
  {
    name: "Rathnakumar K",
    position: "Head – Cummins Project",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "Dr. Sabesan's training sessions were highly effective, leading to noticeable behavioral changes in my team. The training has been invaluable in shaping our approach to work and enhancing our overall performance.",
  },
  {
    name: "Vikram KG",
    position: "AGM, Ford India Project",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "Dr. Sabesan's training at the Ford plant was exactly what our team needed. The session was motivating and full of positive energy, leaving the team better equipped to handle current challenges.",
  },
  {
    name: "Antony Raj T",
    position: "AGM, FOXCONN Project",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The FLOURISH program facilitated by Dr. Sabesan was insightful and engaging. Our employees have shown marked improvement in their professional behavior and long-term career outlook, thanks to his expert guidance.",
  },
  {
    name: "Hemanth Kumar",
    position: "Manager, COE, Madurai",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The coaching I received from Dr. Sabesan drastically improved my delegation and communication skills. My team's performance has significantly improved, and I've taken on new responsibilities with confidence.",
  },
  {
    name: "PJ Thilagavathi",
    position: "Manager",
    company: "TVS SCS Global Freight Solutions Limited",
    quote:
      "Under Dr. Sabesan's coaching, Joshiya has become an active participant in our branch activities, improving collaboration and guidance within the team. Her transformation has been significant and well-recognized.",
  },
  {
    name: "Satish Kumar",
    position: "Manager, COE, Madurai",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The CONNECT program facilitated by Dr. Sabesan was transformational. It not only improved my leadership skills but also helped me strike a better balance between work and personal life, making me more disciplined and responsible.",
  },
  {
    name: "Renjith Pradeepkumar",
    position: "Deputy Manager, Freight Forwarding Business",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The SPARK training by Dr. Sabesan has brought about significant behavioral changes in my work approach. The journaling and reflective practices introduced during the program have been particularly impactful.",
  },
  // --- SUMMARIZED TESTIMONIALS ---
  {
    name: "Govindarajan S",
    position: "Chief Business Officer at ODWEN Technologies",
    company: "",
    quote:
      "Dr. Sabesan is a passionate coach who provided compelling insights from a 360 'gift of truth' report and challenged my limiting beliefs. I enjoyed the developmental journey, which gave me the confidence to manage business volatility, and today I am heading the business division.",
  },
  {
    name: "Srividhya Balaji",
    position: "Digital Transformation - Analytics Lead at Philips Health Care",
    company: "",
    quote:
      "The nine-month coaching engagement was incredibly enriching. Dr. Sabesan challenged my self-limiting beliefs and offered a 'gift of truth' report from 12 stakeholders. He was a true catalyst for my growth, and many stakeholders perceived a discernible change in me.",
  },
  {
    name: "Dr Vasanth M A S",
    position: "Sr MSL | Med Affairs | CEO Field Award Winner...Novartis",
    company: "",
    quote:
      "I had the privilege of working under Dr. Sabesan during my PhD journey; he is a truly exceptional mentor, psychologist, and coach. His ability to combine theoretical knowledge with practical insights is unparalleled, and his mentorship extends beyond the academic realm to holistic development.",
  },
  {
    name: "Manikandan Ramakrishnan",
    position:
      "HR Business Partner | Passionate About People & Talent Development",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "Dr. Sabesan's TVS value sessions were always interactive and insightful. I also attended his two-day self-discovery clinic, which was a life-changing experience that helped us discover our true selves. He is a real source of inspiration and I consider him one of my mentors.",
  },
  {
    name: "Prabhavathy Velmurugan",
    position: "Senior Business Analyst, Centre of Excellence (COE)",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "Attending Dr. Sabesan's SPARK intervention was a privilege. His unique facilitation, using stories and anecdotes, is infectious. He raised our self-awareness and helped us build habits of self-reflection. Stakeholders saw a significant change in us; his passion is incredible. . He empowered me to work on my areas of development and he showed me the mirror on what I should stop and what I should start. He shaped and transformed my perspective in profound ways . I am proud to say that I was one the beneficiaries of the SPARK program and for which Dr.Sabesan deserves appreciation . I will stay connected to Dr.Sabesan for all my professional endeavors. I am sure that he will continue his mission of making a difference to people’s lives both professionally and personally.",
  },
  // --- RISHABH'S TESTIMONIAL (UNCHANGED) ---
  {
    name: "Rishabh",
    position: "Manager, GFS, COE, Madurai",
    company: "FORMER CYBERSECURITY ANALYST, WIPRO",
    quote:
      "My sessions with Dr. Swaminathan Sabesan have been nothing short of motivating and transformative. His ability to listen and pay attention to details, helped identify the challenges I faced, and empowered me to think differently through powerful conversations for navigating these challenges. His sessions are quite relaxing in a manner that you feel like talking to a close friend. Overall, he is empathetic and genuinely understands people, thereby helping them with problem management and opportunity development. I strongly recommend Dr. Sabesan for any type of Counselling and developmental engagement related to one's career and personal growth",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Hear from leaders across industries who have experienced
            transformation through our training and coaching interventions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white relative backdrop-blur-lg border-border hover:shadow-xl transition-shadow flex flex-col" // Added flex flex-col
            >
              <CardHeader>
                <Quote className="h-8 w-8 text-accent mb-4" />
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                {" "}
                {/* Added flex flex-col flex-grow */}
                <p className="text-muted-foreground italic leading-relaxed flex-grow">
                  {" "}
                  {/* Added flex-grow */}"{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-primary mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Count */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium text-gray-700">
              Trusted by{" "}
              <span className="text-[#0d73af] font-bold">
                {testimonials.length}
              </span>{" "}
              senior leaders and managers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
