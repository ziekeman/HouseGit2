import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { id: "hero", label: "HOME" },
  { id: "talents", label: "TALENT" },
  { id: "cases", label: "CASES" },
  { id: "about", label: "CONTACT" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update if user just clicked a nav item
        if (isScrollingRef.current) return;
        
        // Find the entry with the highest intersection ratio
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => 
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      { 
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: "-80px 0px -20% 0px"
      }
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
    isScrollingRef.current = true;
    setActiveSection(id);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    
    // Unlock after scroll animation completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4 lg:px-12 lg:py-6 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - Smaller on mobile */}
        <img src={logo} alt="House of Engagement" className="h-10 md:h-20 w-auto" />

        {/* Navigation Pill - Desktop only */}
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
              className={`relative z-10 px-6 pt-3 pb-2 rounded-full uppercase font-display text-sm tracking-wide transition-colors duration-300 flex items-center justify-center ${
                activeSection === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA Button - Desktop only */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:flex items-center gap-3 bg-[#262626] text-white pl-6 pr-2 py-2 rounded-full font-display text-sm hover:opacity-90 transition-opacity"
        >
          Let's engage
          <span className="bg-secondary rounded-full p-2 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-black" />
          </span>
        </button>

        {/* Mobile Hamburger Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-[#262626] text-white">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background p-6 flex flex-col">
            {/* Close button is included in SheetContent */}
            
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-2 mt-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-left py-4 px-4 rounded-xl font-display text-lg uppercase tracking-wide transition-colors ${
                    activeSection === id
                      ? "bg-nav text-primary"
                      : "text-muted-foreground hover:bg-nav/50 hover:text-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Mobile CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-auto flex items-center justify-center gap-3 bg-[#262626] text-white pl-6 pr-2 py-3 rounded-full font-display text-sm hover:opacity-90 transition-opacity w-full"
            >
              Let's engage
              <span className="bg-secondary rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
            </button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;