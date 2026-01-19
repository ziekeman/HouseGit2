import { ArrowRight } from "lucide-react";

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
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-body font-medium tracking-[0.2em] uppercase text-foreground">
            HOUSE OF
          </span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-body font-semibold tracking-wide uppercase text-foreground">
              ENGAGE
            </span>
            <span className="text-accent text-lg">♥</span>
            <span className="text-sm font-body font-semibold tracking-wide uppercase text-foreground">
              ENT
            </span>
          </div>
        </div>

        {/* Navigation Pill */}
        <nav className="hidden md:flex items-center bg-nav rounded-full px-2 py-2 shadow-sm">
          <button
            onClick={() => scrollToSection("about")}
            className="px-5 py-2 rounded-full bg-nav-active text-primary-foreground text-sm font-medium transition-all"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("talents")}
            className="px-5 py-2 rounded-full text-foreground text-sm font-medium hover:bg-muted transition-all"
          >
            Talents
          </button>
          <button
            onClick={() => scrollToSection("cases")}
            className="px-5 py-2 rounded-full text-foreground text-sm font-medium hover:bg-muted transition-all"
          >
            Cases
          </button>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Let's engage
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;