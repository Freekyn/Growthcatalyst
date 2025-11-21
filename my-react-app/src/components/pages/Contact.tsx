import Navbar from "@/Navbar";
import Footer from "@/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg opacity-90">
              Ready to transform your organization? Let's start a conversation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Contact Information
              </h2>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@growthcatalyst.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@growthcatalyst.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+91 9962104002"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9962104002
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Chennai, India</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span>Professional Network</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://www.linkedin.com/in/dr-swaminathan-sabesan-330b9a17/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" // UPDATED LINK
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </CardContent>
              </Card>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h3 className="font-heading font-bold text-foreground mb-3">
                  Professional Affiliations
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Professor of Practice, VIT University Chennai</li>
                  <li>• Life Member, Indian Academy of Applied Psychology</li>
                  <li>• Life Member, ISTD</li>
                  <li>
                    • Registered Professional Counselor, Chennai Counselors
                    Forum
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
