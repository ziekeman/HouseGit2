import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { talents } from "@/data/talents";
import AnimatedSection from "@/components/AnimatedSection";
import { useIsMobile } from "@/hooks/use-mobile";

const TalentsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const setCardRef = useCallback((id: number, el: HTMLDivElement | null) => {
    if (el) {
      cardRefs.current.set(id, el);
    } else {
      cardRefs.current.delete(id);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setActiveCardId(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleId: number | null = null;

        cardRefs.current.forEach((el, id) => {
          const entry = entries.find(e => e.target === el);
          if (entry && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = id;
          }
        });

        if (mostVisibleId !== null && maxRatio > 0.5) {
          setActiveCardId(mostVisibleId);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    cardRefs.current.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isMobile, showAll]);

  return (
    <section id="talents" className="py-24 px-6 lg:px-12 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="font-agrandir text-[2.8rem] sm:text-5xl lg:text-5xl leading-[0.9] tracking-[-0.08em] font-extrabold text-primary mb-8 uppercase text-center">
            MEET OUR TALENTS
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
          <p className="text-foreground text-lg mb-12 max-w-4xl font-body text-center mx-auto">
            Bij House of Engagement staat talent altijd voorop. Wij geloven dat sterke samenwerkingen beginnen bij de juiste match, daarom zetten we identiteit, persoonlijkheid en culturele relevantie van creators en artiesten centraal.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" threshold={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-6">
            {talents.map((talent, index) => {
              const isMobileHidden = index >= 4 && !showAll;
              const isFadedPreview = index === 3 && !showAll;
              const isActive = isMobile && activeCardId === talent.id;
              
              return (
                <div 
                  key={talent.id}
                  ref={(el) => setCardRef(talent.id, el)}
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
                  <Link to={`/talents/${talent.slug}`}>
                    <div 
                      className={`
                        relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer 
                        scale-90 md:scale-100 transition-all duration-300
                        ${isActive ? 'scale-100 -translate-y-2 shadow-xl shadow-black/30' : ''}
                      `}
                    >
                      <img 
                        src={talent.image} 
                        alt={talent.name} 
                        className="w-full h-full object-cover transition-transform duration-300 ease-out md:group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 via-50% to-transparent p-4 pt-24 text-right">
                        <span className="font-agrandir text-secondary font-extrabold text-3xl md:text-3xl whitespace-pre-line">{talent.name}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {!showAll && (
          <AnimatedSection animation="fade-in" delay={600}>
            <div className="flex justify-center mt-6 md:hidden">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 text-base font-agrandir font-extrabold text-secondary bg-foreground border border-foreground rounded-full hover:opacity-90 transition-colors uppercase"
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
