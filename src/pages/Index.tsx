import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TalentsSection from "@/components/TalentsSection";
import CasesSection from "@/components/CasesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TalentsSection />
      <CasesSection />
      <ContactSection />
    </div>
  );
};

export default Index;