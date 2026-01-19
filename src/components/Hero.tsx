import { ArrowRight } from "lucide-react";
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold italic text-primary leading-[0.9] mb-8 font-sans xl:text-7xl">FROM TALENT
TO IMPACT<br />
              TALENT
              <br />
              TO
              <br />
              IMPACT
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
            <div className="mt-16">
              <p className="text-xs font-medium tracking-wider text-muted-foreground mb-6 font-body">
                TRUSTED BY
              </p>
              <div className="flex items-center gap-8 flex-wrap">
                {/* Placeholder logos - will be replaced with actual logos */}
                <div className="h-6 w-24 bg-foreground/20 rounded opacity-60" />
                <div className="h-8 w-20 bg-foreground/20 rounded opacity-60" />
                <div className="h-6 w-28 bg-foreground/20 rounded opacity-60" />
                <div className="h-7 w-16 bg-foreground/20 rounded opacity-60" />
              </div>
            </div>
          </div>

          {/* Right Content - Photo Collage */}
          <div className="relative lg:h-[700px] flex items-center justify-center">
            {/* Main Image - Woman with balloons */}
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[380px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              {/* Placeholder for main image */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-body">Main Image</span>
              </div>
            </div>

            {/* Overlay Image - House of Engagement sign */}
            <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 w-48 lg:w-56 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-background">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-xs font-body text-center px-2">Sign Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;