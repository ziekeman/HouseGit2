import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12 lg:py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <img src={logo} alt="House of Engagement" className="h-20 w-auto" />

        {/* Navigation Pill */}
        <nav className="hidden md:flex items-center bg-nav rounded-full px-2 py-2 shadow-sm">
          <button
            onClick={() => scrollToSection("about")}
            className="px-6 py-2.5 rounded-full bg-white text-primary uppercase font-display text-sm tracking-wide transition-all"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("talents")}
            className="px-6 py-2.5 rounded-full text-muted-foreground uppercase font-display text-sm tracking-wide hover:text-primary transition-all"
          >
            TALENTS
          </button>
          <button
            onClick={() => scrollToSection("cases")}
            className="px-6 py-2.5 rounded-full text-muted-foreground uppercase font-display text-sm tracking-wide hover:text-primary transition-all"
          >
            CASES
          </button>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="flex items-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full font-display text-sm hover:opacity-90 transition-opacity"
        >
          Let's engage
          <span className="bg-secondary rounded-full p-2 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-black" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;