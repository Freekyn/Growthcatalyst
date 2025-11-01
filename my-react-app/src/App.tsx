import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/hooks/ScrollToTop";
import Index from "./components/pages/Index";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import CaseStudies from "./components/pages/CaseStudies";
import CurrentProjects from "./components/pages/CurrentProjects";
import Certifications from "./components/pages/Certifications";
import MediaPublications from "./components/pages/MediaPublications";
import Awards from "./components/pages/Awards";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        {/* 👇 ScrollToTop must be inside BrowserRouter */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/current-projects" element={<CurrentProjects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/media" element={<MediaPublications />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
