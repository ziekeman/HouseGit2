import { useState } from "react";
import { ChevronDown } from "lucide-react";
import talent1 from "@/assets/talents/talent-1.png";
import talent2 from "@/assets/talents/talent-2.png";
import talent3 from "@/assets/talents/talent-3.png";
import talentJordan from "@/assets/talents/talent-jordan.jpg";
import talentNimo from "@/assets/talents/talent-nimo.jpg";
import talentPape from "@/assets/talents/talent-pape.jpg";
import talentGynamo from "@/assets/talents/talent-gynamo.png";
import talentTabitha from "@/assets/talents/talent-tabitha.png";

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
        <h2 className="font-display text-4xl lg:text-6xl font-bold italic text-primary mb-8 uppercase text-center">
          Meet Our Talents
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-4xl font-body text-center mx-auto">
          Bij House of Engagement staat talent altijd voorop. Wij geloven dat sterke samenwerkingen beginnen bij de juiste match, daarom zetten we identiteit, persoonlijkheid en culturele relevantie van creators en artiesten centraal.
        </p>
        
        <div className="relative">
          <div className="grid grid-cols-1 gap-6">
            {talents.slice(0, showAll ? talents.length : 5).map((talent, index) => (
              <div 
                key={talent.id} 
                className={`relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer transition-opacity duration-300 ${
                  !showAll && index === 4 ? "opacity-40" : ""
                }`}
              >
                <img 
                  src={talent.image} 
                  alt={talent.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent p-4 pt-16 text-right">
                  <span className="font-display text-secondary font-bold italic text-2xl md:text-3xl">{talent.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {!showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />
          )}
        </div>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 mx-auto flex items-center gap-2 text-[#8B7355] hover:text-[#6B5A45] transition-colors font-display text-sm tracking-wide"
          >
            Show more
            <ChevronDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </section>
  );
};

export default TalentsSection;
