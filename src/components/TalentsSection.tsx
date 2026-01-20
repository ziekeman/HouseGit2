import { useState } from "react";
import talent1 from "@/assets/talents/talent-1.png";
import talent2 from "@/assets/talents/talent-2.png";
import talent3 from "@/assets/talents/talent-3.png";
import talentJordan from "@/assets/talents/talent-jordan.jpg";
import talentNimo from "@/assets/talents/talent-nimo.jpg";
import talentPape from "@/assets/talents/talent-pape.jpg";
import talentGynamo from "@/assets/talents/talent-gynamo.png";
import talentTabitha from "@/assets/talents/talent-tabitha.png";
import AnimatedSection from "@/components/AnimatedSection";

const talents = [
  { id: 1, name: "FRAASIE", image: talent1 },
  { id: 2, name: "NIMO", image: talentNimo },
  { id: 3, name: "TABITHA", image: talentTabitha },
  { id: 4, name: "ASHI", image: talent3 },
  { id: 5, name: "GYNAMO", image: talentGynamo },
  { id: 6, name: "JORDAN KNOWS", image: talentJordan },
  { id: 7, name: "SIGOURNEY K", image: talent2 },
  { id: 8, name: "P.APE", image: talentPape },
];

const TalentsSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="talents" className="py-24 px-6 lg:px-12 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="font-display text-5xl lg:text-6xl font-bold italic text-primary mb-8 uppercase text-center">
            Meet Our Talents
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
          <p className="text-foreground text-lg mb-12 max-w-4xl font-body text-center mx-auto">
            Bij House of Engagement staat talent altijd voorop. Wij geloven dat sterke samenwerkingen beginnen bij de juiste match, daarom zetten we identiteit, persoonlijkheid en culturele relevantie van creators en artiesten centraal.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" threshold={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {talents.map((talent, index) => {
              // On mobile: show first 4, fade 5th, hide rest (unless expanded)
              const isMobileHidden = index >= 5 && !showAll;
              const isFadedPreview = index === 4 && !showAll;
              
              return (
                <div 
                  key={talent.id}
                  className={`
                    animate-scale-up opacity-0
                    ${isMobileHidden ? 'hidden md:block' : ''}
                    ${isFadedPreview ? 'md:opacity-100' : ''}
                  `}
                  style={{ 
                    animationDelay: `${200 + index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div 
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
                  >
                    <img 
                      src={talent.image} 
                      alt={talent.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 via-50% to-transparent p-4 pt-24 text-right">
                      <span className="font-display text-secondary font-bold italic text-2xl md:text-3xl">{talent.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Show more button - mobile only */}
        {!showAll && (
          <AnimatedSection animation="fade-in" delay={600}>
            <div className="flex justify-center mt-6 md:hidden">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 text-base font-display font-bold italic text-secondary bg-foreground border border-foreground rounded-full hover:opacity-90 transition-colors uppercase"
              >
                Show more
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default TalentsSection;
