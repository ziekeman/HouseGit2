import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-foreground">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-display text-4xl lg:text-6xl font-bold italic text-background mb-6">
          Let's Engage
        </h2>
        <p className="text-background/70 text-lg mb-10 max-w-xl mx-auto font-body">
          Klaar om samen impact te maken? Neem contact met ons op.
        </p>
        
        <a
          href="mailto:hello@houseofengagement.nl"
          className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-medium text-base hover:opacity-90 transition-opacity group"
        >
          Get in Touch
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </a>
        
        {/* Footer info */}
        <div className="mt-20 pt-10 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex flex-col items-start leading-none text-background">
              <span className="text-[10px] font-body font-medium tracking-[0.2em] uppercase">
                HOUSE OF
              </span>
              <div className="flex items-center gap-1">
                <span className="text-sm font-body font-semibold tracking-wide uppercase">
                  ENGAGE
                </span>
                <span className="text-accent text-lg">♥</span>
                <span className="text-sm font-body font-semibold tracking-wide uppercase">
                  ENT
                </span>
              </div>
            </div>
            
            <p className="text-background/50 text-sm font-body">
              © 2024 House of Engagement. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;