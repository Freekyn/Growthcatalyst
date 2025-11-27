import Navbar from "@/Navbar";
import Footer from "@/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { toast } from "sonner";
// --- EmailJS and State Imports ---
import { useState } from "react";
import emailjs from 'emailjs-com';

// --- EmailJS Configuration: PROVIDED CREDENTIALS ---
const SERVICE_ID = "service_5vt980a"; 
const TEMPLATE_ID = "template_jbbia3o";
const USER_ID = "TOc-ixzKPBdYoENyr";

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handler for form submission (sends email)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Template parameters MUST match the {{variables}} used in your EmailJS template!
    const templateParams = {
      user_name: formData.name, 
      user_email: formData.email, 
      company_name: formData.company,
      message_html: formData.message, 
    };

    try {
      // Send the form data using the provided credentials
      await emailjs.send(
        SERVICE_ID,    
        TEMPLATE_ID,   
        templateParams,
        USER_ID        
      );

      console.log('Email successfully sent!');
      toast.success("Thank you for your message! We'll get back to you soon.");
      
      // Clear the form after success
      setFormData({ name: "", email: "", company: "", message: "" });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your company name" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark"
                  size="lg"
                  disabled={isSubmitting} // Disable button while sending
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
                    href="mailto:sabesan.growthcatalyst@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sabesan.growthcatalyst@gmail.com
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
                    href="https://www.linkedin.com/in/dr-swaminathan-sabesan-330b9a17/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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