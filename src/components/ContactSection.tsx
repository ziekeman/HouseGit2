import { Instagram } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-6 lg:px-12 bg-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Footer - 4 Column Layout */}
        <div className="pt-10 border-t border-background/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Column 1 - Logo */}
            <div className="flex flex-col items-start">
              <img src={logoWhite} alt="House of Engagement" className="h-[77px] w-auto" />
            </div>

            {/* Column 2 - Description */}
            <div>
              <p className="text-background/70 text-sm font-body leading-relaxed">
                Wij verbinden merken met talent voor impactvolle samenwerkingen.
              </p>
            </div>

            {/* Column 3 - Sections */}
            <div>
              <h4 className="text-background font-agrandir font-extrabold text-sm mb-3">Sections</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-background/70 text-sm font-body hover:text-background transition-colors">About</a></li>
                <li><a href="#talents" className="text-background/70 text-sm font-body hover:text-background transition-colors">Talents</a></li>
                <li><a href="#cases" className="text-background/70 text-sm font-body hover:text-background transition-colors">Cases</a></li>
                <li><a href="#contact" className="text-background/70 text-sm font-body hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h4 className="text-background font-agrandir font-extrabold text-sm mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:info@houseofengage.nl" className="text-background/70 text-sm font-body hover:text-background transition-colors">info@houseofengage.nl</a></li>
                <li><span className="text-background/70 text-sm font-body">Verrijn Stuartweg 3C, 1112 AW Diemen</span></li>
                <li>
                  <a
                    href="https://www.instagram.com/house.of.engagement?igsh=ODVvYTVwdjM5cjJn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-background/70 text-sm font-body hover:text-background transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-background/50 text-sm font-body mt-10 text-center">
            © 2026 House of Engagement. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
