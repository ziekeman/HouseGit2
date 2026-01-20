import logoWhite from "@/assets/logo-white.png";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-6 lg:px-12 bg-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Footer - 4 Column Layout */}
        <div className="pt-10 border-t border-background/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Column 1 - Logo */}
            <AnimatedSection animation="fade-in" delay={0}>
              <div className="flex flex-col items-start">
                <img src={logoWhite} alt="House of Engagement" className="h-[62px] w-auto" />
              </div>
            </AnimatedSection>

            {/* Column 2 - Description */}
            <AnimatedSection animation="fade-in" delay={100}>
              <div>
                <p className="text-background/70 text-sm font-body leading-relaxed">
                  Wij verbinden merken met talent voor impactvolle samenwerkingen.
                </p>
              </div>
            </AnimatedSection>

            {/* Column 3 - Sections */}
            <AnimatedSection animation="fade-in" delay={200}>
              <div>
                <h4 className="text-background font-display font-bold text-sm mb-3">Sections</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-background/70 text-sm font-body hover:text-background transition-colors">About</a></li>
                  <li><a href="#talents" className="text-background/70 text-sm font-body hover:text-background transition-colors">Talents</a></li>
                  <li><a href="#cases" className="text-background/70 text-sm font-body hover:text-background transition-colors">Cases</a></li>
                  <li><a href="#contact" className="text-background/70 text-sm font-body hover:text-background transition-colors">Contact</a></li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Column 4 - Contact */}
            <AnimatedSection animation="fade-in" delay={300}>
              <div>
                <h4 className="text-background font-display font-bold text-sm mb-3">Contact</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:hello@houseofengagement.nl" className="text-background/70 text-sm font-body hover:text-background transition-colors">hello@houseofengagement.nl</a></li>
                  <li><span className="text-background/70 text-sm font-body">+31 20 123 4567</span></li>
                  <li><span className="text-background/70 text-sm font-body">Amsterdam, NL</span></li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Copyright */}
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-background/50 text-sm font-body mt-10 text-center">
              © 2024 House of Engagement. All rights reserved.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
