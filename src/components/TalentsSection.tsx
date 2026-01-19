const TalentsSection = () => {
  return (
    <section id="talents" className="py-24 px-6 lg:px-12 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl lg:text-5xl font-bold italic text-primary mb-4">
          Onze Talents
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl font-body">
          Een divers netwerk van creators, artiesten en makers die impact creëren.
        </p>
        
        {/* Placeholder for talents grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[3/4] rounded-2xl bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-body">Talent {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalentsSection;