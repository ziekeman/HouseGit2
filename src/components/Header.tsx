import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "talents", label: "TALENTS" },
  { id: "cases", label: "CASES" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Update indicator position when active section changes
  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.id === activeSection);
    const activeButton = buttonRefs.current[activeIndex];
    
    if (activeButton && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      
      setIndicatorStyle({
        width: buttonRect.width,
        left: buttonRect.left - navRect.left,
      });
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12 lg:py-6 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <img src={logo} alt="House of Engagement" className="h-20 w-auto" />

        {/* Navigation Pill */}
        <nav 
          ref={navRef}
          className="hidden md:flex items-center bg-nav rounded-full px-2 py-2 shadow-sm relative"
        >
          {/* Sliding Indicator */}
          <span
            className="absolute bg-white rounded-full transition-all duration-300 ease-out h-[calc(100%-16px)] top-2"
            style={{
              width: indicatorStyle.width,
              left: indicatorStyle.left,
            }}
          />
          
          {navItems.map(({ id, label }, index) => (
            <button
              key={id}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => scrollToSection(id)}
              className={`relative z-10 px-6 py-2.5 rounded-full uppercase font-display text-sm tracking-wide transition-colors duration-300 ${
                activeSection === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="flex items-center gap-3 bg-[#262626] text-white pl-6 pr-2 py-2 rounded-full font-display text-sm hover:opacity-90 transition-opacity"
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