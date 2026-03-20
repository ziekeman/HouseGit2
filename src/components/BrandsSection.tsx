import brand1 from "@/assets/brands/brand-1.png";
import brand2 from "@/assets/brands/brand-2.png";
import brand3 from "@/assets/brands/brand-3.png";
import brand4 from "@/assets/brands/brand-4.png";
import brand5 from "@/assets/brands/brand-5.png";
import brand6 from "@/assets/brands/brand-6.png";
import brand7 from "@/assets/brands/brand-7.png";
import brand8 from "@/assets/brands/brand-8.png";
import brand9 from "@/assets/brands/brand-9.png";
import brand10 from "@/assets/brands/brand-10.png";
import brand11 from "@/assets/brands/brand-11.png";
import brand12 from "@/assets/brands/brand-12.png";
import brand13 from "@/assets/brands/brand-13.png";
import brand14 from "@/assets/brands/brand-14.png";
import brand15 from "@/assets/brands/brand-15.png";
import brand16 from "@/assets/brands/brand-16.png";
import AnimatedSection from "@/components/AnimatedSection";

const brands = [
  { id: 1, image: brand1, name: "Brand 1" },
  { id: 2, image: brand2, name: "Brand 2" },
  { id: 3, image: brand3, name: "Brand 3" },
  { id: 4, image: brand4, name: "Brand 4" },
  { id: 5, image: brand5, name: "Brand 5" },
  { id: 6, image: brand6, name: "Brand 6" },
  { id: 7, image: brand7, name: "Brand 7" },
  { id: 8, image: brand8, name: "Brand 8" },
  { id: 9, image: brand9, name: "Brand 9" },
  { id: 10, image: brand10, name: "Brand 10" },
  { id: 11, image: brand11, name: "Katja" },
  { id: 12, image: brand12, name: "G-Shock" },
  { id: 13, image: brand13, name: "Timberland" },
  { id: 14, image: brand14, name: "Mysteryland" },
  { id: 15, image: brand15, name: "Puma" },
  { id: 16, image: brand16, name: "PlayStation" },
];

// Asymmetrical grid layout definitions
const gridClasses = [
  "col-span-1 row-span-1",
  "col-span-1 md:col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 md:col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 md:col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 md:col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 md:col-span-2 row-span-1",
  "col-span-1 row-span-1",
];

const BrandsSection = () => {
  return (
    <section id="brands" className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="font-agrandir text-[2.8rem] sm:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.08em] font-extrabold text-primary mb-16 uppercase text-center">
            Brands We've<br />Worked With
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" threshold={0.05}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {brands.map((brand, index) => (
              <div
                key={brand.id}
                className={`
                  ${gridClasses[index]}
                  animate-scale-up opacity-0
                `}
                style={{
                  animationDelay: `${150 + index * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="relative bg-muted/60 rounded-2xl p-6 md:p-8 flex items-center justify-center h-full min-h-[120px] md:min-h-[140px] group cursor-pointer transition-all duration-300 hover:bg-muted hover:shadow-lg hover:-translate-y-1 active:scale-[0.97]">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-w-full max-h-[60px] md:max-h-[80px] object-contain transition-transform duration-300 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BrandsSection;
