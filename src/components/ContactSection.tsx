const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-6 lg:px-12 bg-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Footer - 4 Column Layout */}
        <div className="pt-10 border-t border-background/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Column 1 - Logo */}
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

            {/* Column 2 - Description */}
            <div>
              <p className="text-background/70 text-sm font-body leading-relaxed">
                Wij verbinden merken met talent voor impactvolle samenwerkingen.
              </p>
            </div>

            {/* Column 3 - Sections */}
            <div>
              <h4 className="text-background font-display font-bold text-sm mb-3">Sections</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-background/70 text-sm font-body hover:text-background transition-colors">About</a></li>
                <li><a href="#talents" className="text-background/70 text-sm font-body hover:text-background transition-colors">Talents</a></li>
                <li><a href="#cases" className="text-background/70 text-sm font-body hover:text-background transition-colors">Cases</a></li>
                <li><a href="#contact" className="text-background/70 text-sm font-body hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h4 className="text-background font-display font-bold text-sm mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:hello@houseofengagement.nl" className="text-background/70 text-sm font-body hover:text-background transition-colors">hello@houseofengagement.nl</a></li>
                <li><span className="text-background/70 text-sm font-body">+31 20 123 4567</span></li>
                <li><span className="text-background/70 text-sm font-body">Amsterdam, NL</span></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-background/50 text-sm font-body mt-10 text-center">
            © 2024 House of Engagement. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;