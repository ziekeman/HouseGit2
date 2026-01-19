import { ArrowRight } from "lucide-react";
import houseOfEngagementSign from "@/assets/house-of-engagement-sign.png";
import heroTabitha from "@/assets/hero-tabitha.png";

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
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="about" className="min-h-screen pt-28 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="flex flex-col justify-center lg:pt-8">
            {/* Main Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold italic text-primary leading-[0.9] mb-8 xl:text-7xl">
              <span className="block">FROM</span>
              <span className="block">TALENT</span>
              <span className="block">TO IMPACT</span>
            </h1>

            {/* Description */}
            <p className="text-foreground/80 text-base lg:text-lg leading-relaxed max-w-md mb-10 font-body">
              Bij House of Engagement bouwen we aan langdurige partnerships tussen merken en makers. 
              Met een divers netwerk van creators, artiesten, content, muziek en community, 
              zorgen we voor échte impact.
            </p>

            {/* CTA Button */}
            <button onClick={scrollToContact} className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 rounded-full font-medium text-sm w-fit hover:opacity-90 transition-opacity group">
              GET IN TOUCH
              <span className="flex items-center justify-center w-8 h-8 bg-accent rounded-full">
                <ArrowRight className="w-4 h-4 text-accent-foreground group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

            {/* Trusted By */}
            <div className="mt-10">
              <p className="text-sm font-display font-bold italic tracking-wider text-primary mb-6">
                TRUSTED BY
              </p>
              {/* Logo Carousel with fade edges */}
              <div className="relative max-w-[420px]">
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                {/* Right fade gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                
                <div className="overflow-hidden">
                  <div className="flex animate-scroll-left">
                    {/* First set of logos */}
                    {logos.map((logo, i) => (
                      <img
                        key={i}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-14 w-auto object-contain mx-3 grayscale brightness-0 flex-shrink-0"
                      />
                    ))}
                    {/* Duplicate for seamless loop */}
                    {logos.map((logo, i) => (
                      <img
                        key={`dup-${i}`}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-14 w-auto object-contain mx-3 grayscale brightness-0 flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Photo Collage */}
          <div className="relative lg:h-[700px] flex items-center justify-center">
            {/* Main Image - Woman with balloons */}
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[420px] aspect-[3/4] rounded-tl-[4rem] rounded-tr-none rounded-br-none rounded-bl-none overflow-hidden border-[6px] border-white shadow-lg">
              <img src={heroTabitha} alt="Tabitha with balloons" className="w-full h-full object-cover" />
            </div>

            {/* Overlay Image - House of Engagement sign */}
            <div className="absolute -bottom-8 -left-8 lg:bottom-4 lg:-left-16 w-52 lg:w-64 aspect-square rounded-[1.5rem] overflow-hidden shadow-lg border-[6px] border-white">
              <img src={houseOfEngagementSign} alt="House of Engagement sign" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;