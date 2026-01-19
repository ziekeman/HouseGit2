import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TalentsSection from "@/components/TalentsSection";
import CasesSection from "@/components/CasesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TalentsSection />
      <CasesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;