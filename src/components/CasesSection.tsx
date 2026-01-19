const CasesSection = () => {
  return (
    <section id="cases" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl lg:text-5xl font-bold italic text-primary mb-4">
          Cases
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl font-body">
          Bekijk onze succesvolle samenwerkingen en campagnes.
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