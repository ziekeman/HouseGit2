import case1Gif from "@/assets/cases/case-1.gif";
import case3Gif from "@/assets/cases/case-3.gif";

const CasesSection = () => {
  return (
    <section id="cases" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Stacked headline */}
        <div className="mb-8">
          <h2 className="font-display text-4xl lg:text-6xl font-bold italic text-primary uppercase leading-[0.85]">
            CREATE,
          </h2>
          <h2 className="font-display text-4xl lg:text-6xl font-bold italic text-primary uppercase leading-[0.85]">
            ENGAGE,
          </h2>
          <h2 className="font-display text-4xl lg:text-6xl font-bold italic text-primary uppercase leading-[0.85]">
            THRIVE
          </h2>
        </div>
        
        {/* Subheadline */}
        <p className="font-body text-lg lg:text-xl text-foreground max-w-3xl mx-auto mb-16">
          Bij House of Engagement staat talent altijd voorop. Wij geloven dat sterke samenwerkingen beginnen bij de juiste match, daarom zetten we identiteit, persoonlijkheid en culturele relevantie van creators en artiesten centraal.
        </p>
        
        {/* Cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case 1 - Nimo & Guno First Dates */}
          <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
            <img 
              src={case1Gif} 
              alt="Nimo & Guno - First Dates" 
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
            {/* Title text */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h3 className="font-display font-bold italic text-2xl lg:text-3xl text-secondary uppercase leading-tight text-center">
                NIMO X<br />FIRST DATES
              </h3>
            </div>
            <span className="absolute bottom-4 left-4 bg-foreground text-secondary font-display font-bold italic text-sm px-4 py-2 rounded-full uppercase">
              Campaigne
            </span>
          </div>
          
          {/* Case 2 - Placeholder */}
          <div className="relative aspect-[9/16] rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
            {/* Title text */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h3 className="font-display font-bold italic text-2xl lg:text-3xl text-secondary uppercase leading-tight whitespace-pre-line text-center">
                TALENT X{"\n"}BRAND
              </h3>
            </div>
            <span className="absolute bottom-4 left-4 bg-foreground text-secondary font-display font-bold italic text-sm px-4 py-2 rounded-full uppercase">
              Content
            </span>
          </div>
          
          {/* Case 3 - Nimo X Mercedes Gomes */}
          <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">
            <img 
              src={case3Gif} 
              alt="Nimo X Mercedes Gomes" 
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
            {/* Title text */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h3 className="font-display font-bold italic text-2xl lg:text-3xl text-secondary uppercase leading-tight text-center">
                NIMO X<br />MERCEDES GOMES
              </h3>
            </div>
            <span className="absolute bottom-4 left-4 bg-foreground text-secondary font-display font-bold italic text-sm px-4 py-2 rounded-full uppercase">
              Campagne
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
