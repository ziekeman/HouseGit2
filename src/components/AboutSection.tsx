import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="scale-up">
          <div className="bg-[#F0787A] rounded-[3rem] p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                <AnimatedSection animation="slide-right" delay={100}>
                  <div>
                    <h2 className="font-agrandir text-4xl lg:text-6xl font-extrabold text-[#722D26] uppercase leading-none">
                      LET'S
                    </h2>
                    <h2 className="font-display text-5xl lg:text-7xl font-black italic text-[#722D26] uppercase leading-none">
                      ENGAGE
                    </h2>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-up" delay={200}>
                  <p className="font-agrandir font-extrabold text-xl lg:text-2xl text-[#262626] uppercase">
                    Ready to make an impact?
                  </p>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="space-y-4 text-[#262626]">
                    <a 
                      href="mailto:hello@houseofengagement.com" 
                      className="block font-body text-lg underline hover:opacity-70 transition-opacity"
                    >
                      hello@houseofengagement.com
                    </a>
                    <p className="font-body text-lg">
                      +31 (0) 20 123 45 67
                    </p>
                    <p className="font-body text-lg">
                      Amsterdam, The Netherlands
                    </p>
                  </div>
                </AnimatedSection>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="space-y-6">
                <AnimatedSection animation="slide-left" delay={200}>
                  <input
                    type="text"
                    placeholder="NAME"
                    className="w-full bg-white rounded-2xl px-6 py-4 font-body text-base placeholder:text-[#262626]/50 placeholder:uppercase focus:outline-none focus:ring-2 focus:ring-[#722D26]/30"
                  />
                </AnimatedSection>
                <AnimatedSection animation="slide-left" delay={300}>
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="w-full bg-white rounded-2xl px-6 py-4 font-body text-base placeholder:text-[#262626]/50 placeholder:uppercase focus:outline-none focus:ring-2 focus:ring-[#722D26]/30"
                  />
                </AnimatedSection>
                <AnimatedSection animation="slide-left" delay={400}>
                  <textarea
                    placeholder="TELL US ABOUT YOUR PROJECT"
                    rows={6}
                    className="w-full bg-white rounded-2xl px-6 py-4 font-body text-base placeholder:text-[#262626]/50 placeholder:uppercase focus:outline-none focus:ring-2 focus:ring-[#722D26]/30 resize-none"
                  />
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={500}>
                  <button className="inline-flex items-center gap-3 bg-[#262626] text-white px-8 py-4 rounded-full font-agrandir font-extrabold text-base uppercase hover:opacity-90 transition-opacity group">
                    Send Message
                    <span className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-[#262626] group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
