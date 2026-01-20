import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import houseOfEngagementSign from "@/assets/house-of-engagement-sign.png";
import heroTabitha from "@/assets/hero-tabitha.png";
import AnimatedSection from "@/components/AnimatedSection";

// Logo imports
import logoNewYorkPizza from "@/assets/logos/logo-new-york-pizza.png";
import logoRedbull from "@/assets/logos/logo-redbull.png";
import logoMercedes from "@/assets/logos/logo-mercedes.png";
import logoOdido from "@/assets/logos/logo-odido.png";
import logoPuma from "@/assets/logos/logo-puma.png";
import logoUnderArmour from "@/assets/logos/logo-under-armour.png";

const logos = [
  { src: logoNewYorkPizza, alt: "New York Pizza" },
  { src: logoRedbull, alt: "Red Bull" },
  { src: logoMercedes, alt: "Mercedes-Benz" },
  { src: logoOdido, alt: "Odido" },
  { src: logoPuma, alt: "Puma" },
  { src: logoUnderArmour, alt: "Under Armour" },
];

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateScrollWidth = () => {
      requestAnimationFrame(() => {
        if (!container) return;
        const totalWidth = container.scrollWidth;
        if (totalWidth > 0) {
          const singleSetWidth = Math.ceil(totalWidth / 2);
          container.style.setProperty('--scroll-width', `-${singleSetWidth}px`);
        }
      });
    };

    // Initial calculation
    updateScrollWidth();

    // Recalculate when images load
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      if (img.complete) {
        updateScrollWidth();
      } else {
        img.addEventListener('load', updateScrollWidth);
      }
    });

    // Recalculate on resize/orientation change
    const resizeObserver = new ResizeObserver(updateScrollWidth);
    resizeObserver.observe(container);

    window.addEventListener('resize', updateScrollWidth);
    window.addEventListener('orientationchange', updateScrollWidth);

    // Delayed fallback for edge cases
    const fallbackTimeout = setTimeout(updateScrollWidth, 500);

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', updateScrollWidth);
      });
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScrollWidth);
      window.removeEventListener('orientationchange', updateScrollWidth);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-20 lg:pt-28 pb-12 lg:pb-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Photo Collage - Shows first on mobile */}
          <div className="order-last lg:order-last relative w-full lg:h-[700px] flex items-center justify-center">
            {/* Main Image - Woman with balloons */}
            <AnimatedSection animation="scale-up" delay={200}>
              <div className="relative w-[85%] lg:w-[520px] aspect-square lg:aspect-[5/6.1] rounded-tl-[4rem] lg:rounded-tl-[6rem] rounded-tr-none rounded-br-none rounded-bl-none overflow-hidden border-4 lg:border-[6px] border-white shadow-lg mx-auto">
                <img src={heroTabitha} alt="Tabitha with balloons" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>

            {/* Overlay Image - House of Engagement sign */}
            <AnimatedSection animation="slide-right" delay={400} className="absolute -bottom-4 left-[5px] lg:bottom-8 lg:-left-16">
              <div className="w-32 lg:w-64 aspect-square rounded-[1rem] lg:rounded-[1.5rem] overflow-hidden shadow-lg border-4 lg:border-[6px] border-white">
                <img src={houseOfEngagementSign} alt="House of Engagement sign" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>

          {/* Text Content */}
          <div className="order-first lg:order-first flex flex-col justify-center lg:pt-16">
            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold italic text-primary leading-[0.9] mb-2 px-[5px] lg:px-0">
              <AnimatedSection animation="fade-up" delay={0}>
                <span className="block">FROM</span>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <span className="block">TALENT</span>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <span className="block">TO IMPACT</span>
              </AnimatedSection>
            </h1>

            {/* Description */}
            <AnimatedSection animation="fade-up" delay={300}>
              <p className="text-foreground text-sm lg:text-lg leading-relaxed max-w-md mb-6 font-body px-[5px] lg:px-0">
                Bij House of Engagement bouwen we aan langdurige partnerships tussen merken en makers. 
                Met een divers netwerk van creators, artiesten, content, muziek en community, 
                zorgen we voor échte impact.
              </p>
            </AnimatedSection>

            {/* CTA Button */}
            <AnimatedSection animation="fade-up" delay={400}>
              <button 
                onClick={scrollToContact} 
                className="inline-flex items-center justify-center lg:justify-start gap-3 bg-[#262626] text-white px-6 py-4 rounded-full font-display font-medium text-sm w-full lg:w-fit hover:opacity-90 transition-opacity group"
              >
                GET IN TOUCH
                <span className="flex items-center justify-center w-8 h-8 bg-accent rounded-full">
                  <ArrowRight className="w-4 h-4 text-accent-foreground group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </AnimatedSection>

            {/* Trusted By */}
            <AnimatedSection animation="fade-up" delay={500}>
              <div className="mt-6 lg:mt-10 scale-[0.95] lg:scale-100 origin-center lg:origin-left flex flex-col items-center lg:items-start">
                <p className="text-sm font-display font-bold italic tracking-wider text-primary mb-4 lg:mb-6">
                  TRUSTED BY
                </p>
{/* Logo Carousel with fade edges */}
<div className="relative w-full max-w-[320px] lg:max-w-[380px]">
                  {/* Left fade gradient */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                  {/* Right fade gradient */}
                  <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                  
                  <div className="overflow-hidden">
                    <div ref={scrollRef} className="animate-scroll-left">
                      {/* First set of logos */}
                      {logos.map((logo, i) => (
                        <div key={i} className="flex-shrink-0 px-3 lg:px-3">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="h-10 lg:h-12 w-auto object-contain grayscale brightness-0 transition-transform duration-200 hover:scale-110"
                          />
                        </div>
                      ))}
                      {/* Duplicate set for seamless loop */}
                      {logos.map((logo, i) => (
                        <div key={`dup-${i}`} className="flex-shrink-0 px-3 lg:px-3">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="h-10 lg:h-12 w-auto object-contain grayscale brightness-0 transition-transform duration-200 hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
