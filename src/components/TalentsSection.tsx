import talent1 from "@/assets/talents/talent-1.png";
import talent2 from "@/assets/talents/talent-2.png";
import talent3 from "@/assets/talents/talent-3.png";
import talentJordan from "@/assets/talents/talent-jordan.jpg";
import talentNimo from "@/assets/talents/talent-nimo.jpg";
import talentPape from "@/assets/talents/talent-pape.jpg";

const talents = [
  { id: 1, name: "FRAASIE", image: talent1 },
  { id: 2, name: "NIMO", image: talentNimo },
  { id: 3, name: "ASHI", image: talent3 },
  { id: 4, name: "JORDAN KNOWS", image: talentJordan },
  { id: 5, name: "SIGOURNEY K", image: talent2 },
  { id: 6, name: "P.APE", image: talentPape },
];

const TalentsSection = () => {
  return (
    <section id="talents" className="py-24 px-6 lg:px-12 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl lg:text-6xl font-bold italic text-primary mb-8 uppercase text-center">
          Meet Our Talents
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-4xl font-body text-center mx-auto">
          Bij House of Engagement staat talent altijd voorop. Wij geloven dat sterke samenwerkingen beginnen bij de juiste match, daarom zetten we identiteit, persoonlijkheid en culturele relevantie van creators en artiesten centraal.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {talents.map((talent) => (
            <div 
              key={talent.id} 
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
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
      </div>
    </section>
  );
};

export default TalentsSection;
