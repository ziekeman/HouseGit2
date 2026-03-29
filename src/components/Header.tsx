import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import logo from "@/assets/logo-new.png";
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
  const [activeSection, setActiveSection] = useState("hero");
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isScrollingRef = useRef(false);
  const ratiosRef = useRef<Record<string, number>>({});

  // IntersectionObserver to track which section is most visible
  useEffect(() => {
    // Initialize ratios
    navItems.forEach((item) => {
      ratiosRef.current[item.id] = 0;
    });

    // Generate threshold array for smooth ratio updates (0, 0.05, 0.10, ..., 1.0)
    const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05);

    const observer = new IntersectionObserver(
      (entries) => {
        // Update ratios for all observed entries
        entries.forEach((entry) => {
          ratiosRef.current[entry.target.id] = entry.intersectionRatio;
        });

        // Skip if user clicked a nav link (lock active during scroll animation)
        if (isScrollingRef.current) return;

        // Find the section with the highest visibility
        let bestId = navItems[0].id;
        let bestRatio = 0;

        navItems.forEach((item) => {
          const ratio = ratiosRef.current[item.id] || 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = item.id;
          }
        });

        setActiveSection(bestId);
      },
      {
        threshold: thresholds,
        rootMargin: "-80px 0px 0px 0px", // Only account for fixed header
      }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Update indicator position when active section changes
  const updateIndicator = useCallback(() => {
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

  useEffect(() => {
    updateIndicator();
    // Run after a brief delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateIndicator, 100);
    return () => clearTimeout(timeoutId);
  }, [updateIndicator]);

  // Recalculate on resize
  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  const scrollToSection = (id: string) => {
    isScrollingRef.current = true;
    setActiveSection(id);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    
    // Use scrollend event for accurate detection
    const handleScrollEnd = () => {
      isScrollingRef.current = false;
      window.removeEventListener('scrollend', handleScrollEnd);
    };
    
    window.addEventListener('scrollend', handleScrollEnd, { once: true });
    
    // Fallback for browsers without scrollend support
    setTimeout(() => {
      if (isScrollingRef.current) {
        isScrollingRef.current = false;
        window.removeEventListener('scrollend', handleScrollEnd);
      }
    }, 1500);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 md:py-4 lg:px-12 lg:py-6 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - Smaller on mobile */}
        <img src={logo} alt="House of Engagement" className="h-[46px] md:h-[60px] w-auto" />

        {/* Navigation - Desktop only */}
        <nav 
          ref={navRef}
          className="hidden md:flex items-center gap-1 relative"
        >
          {navItems.map(({ id, label }, index) => (
            <button
              key={id}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => scrollToSection(id)}
              className={`relative z-10 px-5 py-2 uppercase font-agrandir text-sm font-extrabold tracking-wide transition-colors duration-300 ${
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
          className="hidden md:flex items-center gap-3 bg-[#262626] text-white pl-6 pr-2 py-2 rounded-full font-agrandir font-extrabold text-sm hover:opacity-90 transition-opacity"
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
                  className={`text-left py-4 px-4 rounded-xl font-agrandir font-extrabold text-lg uppercase tracking-wide transition-colors ${
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
              className="mt-auto flex items-center justify-center gap-3 bg-[#262626] text-white pl-6 pr-2 py-3 rounded-full font-agrandir font-extrabold text-sm hover:opacity-90 transition-opacity w-full"
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