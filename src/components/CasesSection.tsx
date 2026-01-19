const CasesSection = () => {
  return (
    <section id="cases" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Stacked headline */}
        <div className="mb-8">
          <h2 className="font-display text-6xl lg:text-8xl xl:text-9xl font-black italic text-primary uppercase leading-[0.85]">
            CREATE,
          </h2>
          <h2 className="font-display text-6xl lg:text-8xl xl:text-9xl font-black italic text-primary uppercase leading-[0.85]">
            ENGAGE,
          </h2>
          <h2 className="font-display text-6xl lg:text-8xl xl:text-9xl font-black italic text-primary uppercase leading-[0.85]">
            THRIVE
          </h2>
        </div>
        
        {/* Subheadline */}
        <p className="font-body text-lg lg:text-xl text-foreground max-w-3xl mx-auto mb-16">
          Bij House of Engagement staat talent altijd voorop. Wij geloven dat sterke samenwerkingen beginnen bij de juiste match, daarom zetten we identiteit, persoonlijkheid en culturele relevantie van creators en artiesten centraal.
        </p>
        
        {/* Placeholder for cases grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-video rounded-2xl bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-body">Case {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
