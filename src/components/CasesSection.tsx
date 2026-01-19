import case1Gif from "@/assets/cases/case-1.gif";
import case2Gif from "@/assets/cases/case-2.gif";
import case3Gif from "@/assets/cases/case-3.gif";
import AnimatedSection from "@/components/AnimatedSection";

const cases = [
  {
    gif: case1Gif,
    alt: "Nimo & Guno - First Dates",
    title: "NIMO X",
    subtitle: "FIRST DATES",
    category: "Campagne",
  },
  {
    gif: case2Gif,
    alt: "Fraasie X New York Pizza",
    title: "FRAASIE X",
    subtitle: "NEW YORK PIZZA",
    category: "Muziekproductie",
  },
  {
    gif: case3Gif,
    alt: "Nimo X Mercedes Gomes",
    title: "NIMO X",
    subtitle: "MERCEDES GOMES",
    category: "Campagne",
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Stacked headline */}
        <div className="mb-8">
          <AnimatedSection animation="fade-up" delay={0}>
            <h2 className="font-display text-5xl lg:text-6xl font-bold italic text-primary uppercase leading-[0.85]">
              CREATE,
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="font-display text-5xl lg:text-6xl font-bold italic text-primary uppercase leading-[0.85]">
              ENGAGE,
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <h2 className="font-display text-5xl lg:text-6xl font-bold italic text-primary uppercase leading-[0.85]">
              THRIVE
            </h2>
          </AnimatedSection>
        </div>
        
        {/* Subheadline */}
        <AnimatedSection animation="fade-up" delay={300}>
          <p className="font-body text-lg lg:text-xl text-foreground max-w-3xl mx-auto mb-16">
            Bij House of Engagement staat talent altijd voorop. Wij geloven dat sterke samenwerkingen beginnen bij de juiste match, daarom zetten we identiteit, persoonlijkheid en culturele relevantie van creators en artiesten centraal.
          </p>
        </AnimatedSection>
        
        {/* Cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <AnimatedSection key={index} animation="scale-up" delay={400 + index * 150}>
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden group">
                <img 
                  src={caseItem.gif} 
                  alt={caseItem.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
                {/* Title text */}
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <h3 className="font-display font-bold italic text-2xl lg:text-3xl text-secondary uppercase leading-tight text-center">
                    {caseItem.title}<br />{caseItem.subtitle}
                  </h3>
                </div>
                <span className="absolute bottom-4 left-4 bg-foreground text-secondary font-display font-bold italic text-sm px-4 py-2 rounded-full uppercase">
                  {caseItem.category}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
