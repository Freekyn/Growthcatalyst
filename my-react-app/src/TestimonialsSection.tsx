import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Boby Mohan",
    position: "Vice President and CIO",
    company: "TVS Supply Chain Solutions Ltd.",
    quote: "I've seen a remarkable improvement in Srividhya's ability to collaborate and handle objections objectively. Dr. Sabesan's coaching has truly transformed her approach to teamwork and communication."
  },
  {
    name: "Partha Banerjee",
    position: "Vice President, Head – Business Services",
    company: "TVS Supply Chain Solutions Ltd.",
    quote: "The SPARK program, designed by Dr. Sabesan, has led to significant improvements in team management and leadership skills. His patience and program design have greatly benefited our leadership team."
  },
  {
    name: "Sundari Murali",
    position: "Head",
    company: "TVS Supply Chain Solutions Ltd.",
    quote: "Dr. Sabesan's developmental coaching was transformative for my career. His guidance helped me uncover new solutions and develop critical leadership skills. I am now more consistent and confident in my professional approach."
  },
  {
    name: "Mohan Narayanasamy",
    position: "General Manager and Business Head",
    company: "TVS Toyota Tsusho Supply Chain Solutions Ltd.",
    quote: "The ASPIRE sessions led by Dr. Sabesan have been pivotal in transforming my team's mindset. His approach has instilled a proactive attitude and long-term strategic thinking in my employees."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from leaders who have experienced transformation through our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-xs text-primary mt-1">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
 