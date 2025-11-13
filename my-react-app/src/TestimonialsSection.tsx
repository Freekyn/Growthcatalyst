import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
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
    position: "Head",
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
    position: "Manager, GFS, COE, Madurai",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The SPARK training by Dr. Sabesan has brought about significant behavioral changes in my work approach. The journaling and reflective practices introduced during the program have been particularly impactful.",
  },
  {
    name: "Ayush Agrawal",
    position: "Vice President",
    company: "India Financing at Deutsche Bank",
    quote:
      "As a coach, he is an extremely patient and empathetic listener, which enables him to quickly grasp others' point of view.",
  },
  {
    name: "Abhishek Mazumdar",
    position: "Manager, GFS, COE, Madurai",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "As a coach, he is an extremely patient and empathetic listener, which enables him to quickly grasp others' point of view.",
  },
  {
    name: "Govindarajan",
    position: "Manager, GFS, COE, Madurai",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The SPARK training by Dr. Sabesan has brought about significant behavioral changes in my work approach. The journaling and reflective practices introduced during the program have been particularly impactful.",
  },
  {
    name: "Srividya",
    position: "Manager, GFS, COE, Madurai",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The SPARK training by Dr. Sabesan has brought about significant behavioral changes in my work approach. The journaling and reflective practices introduced during the program have been particularly impactful.",
  },
  {
    name: "Vasanth",
    position: "Manager, GFS, COE, Madurai",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The SPARK training by Dr. Sabesan has brought about significant behavioral changes in my work approach. The journaling and reflective practices introduced during the program have been particularly impactful.",
  },
  {
    name: "Manikandan",
    position: "Manager, GFS, COE, Madurai",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The SPARK training by Dr. Sabesan has brought about significant behavioral changes in my work approach. The journaling and reflective practices introduced during the program have been particularly impactful.",
  },
  {
    name: "Prabavathi",
    position: "Manager, GFS, COE, Madurai",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The SPARK training by Dr. Sabesan has brought about significant behavioral changes in my work approach. The journaling and reflective practices introduced during the program have been particularly impactful.",
  },
  {
    name: "Rishabh",
    position: "Manager, GFS, COE, Madurai",
    company: "TVS Supply Chain Solutions Ltd.",
    quote:
      "The SPARK training by Dr. Sabesan has brought about significant behavioral changes in my work approach. The journaling and reflective practices introduced during the program have been particularly impactful.",
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
            transformation through our coaching  interventions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white relative backdrop-blur-lg border-border hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <Quote className="h-8 w-8 text-accent mb-4" />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
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
