const AboutSection = () => {
  const stats = [
    { value: "10+", label: "Jaar ervaring" },
    { value: "50+", label: "Talenten" },
    { value: "100+", label: "Campagnes" },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl lg:text-7xl font-black italic uppercase text-primary mb-6">
            OVER ONS
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left - Text Content */}
          <div className="space-y-6 text-[#262626]">
            <h3 className="font-display text-2xl lg:text-3xl font-bold">
              Wij bouwen bruggen tussen merken en creators
            </h3>
            <p className="text-lg opacity-70 leading-relaxed">
              House of Engagement is een full-service talentenbureau dat gelooft in de kracht van authentieke verbindingen. Wij verbinden topmerken met de meest invloedrijke creators van Nederland.
            </p>
            <p className="text-lg opacity-70 leading-relaxed">
              Onze missie is om impactvolle samenwerkingen te creëren die zowel merken als creators naar een hoger niveau tillen. Met jarenlange ervaring in de industrie weten wij precies hoe we de juiste match maken.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background rounded-3xl p-6 text-center shadow-lg border-4 border-white"
              >
                <div className="font-display text-4xl lg:text-5xl font-black text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-primary/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
