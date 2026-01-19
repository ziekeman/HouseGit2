import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F0787A] rounded-[3rem] p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-5xl lg:text-7xl font-black italic text-[#722D26] uppercase leading-none">
                  LET'S
                </h2>
                <h2 className="font-display text-5xl lg:text-7xl font-black italic text-[#722D26] uppercase leading-none">
                  ENGAGE
                </h2>
              </div>
              
              <p className="font-display text-xl lg:text-2xl font-bold text-[#262626] uppercase">
                Ready to make an impact?
              </p>
              
              <div className="space-y-4 text-[#262626]">
                <a 
                  href="mailto:hello@houseofengagement.com" 
                  className="block font-body text-lg underline hover:opacity-70 transition-opacity"
                >
                  hello@houseofengagement.com
                </a>
                <p className="font-body text-lg">
                  +31 (0) 20 123 45 67
                </p>
                <p className="font-body text-lg">
                  Amsterdam, The Netherlands
                </p>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="space-y-6">
              <input
                type="text"
                placeholder="NAME"
                className="w-full bg-white rounded-2xl px-6 py-4 font-body text-base placeholder:text-[#262626]/50 placeholder:uppercase focus:outline-none focus:ring-2 focus:ring-[#722D26]/30"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full bg-white rounded-2xl px-6 py-4 font-body text-base placeholder:text-[#262626]/50 placeholder:uppercase focus:outline-none focus:ring-2 focus:ring-[#722D26]/30"
              />
              <textarea
                placeholder="TELL US ABOUT YOUR PROJECT"
                rows={6}
                className="w-full bg-white rounded-2xl px-6 py-4 font-body text-base placeholder:text-[#262626]/50 placeholder:uppercase focus:outline-none focus:ring-2 focus:ring-[#722D26]/30 resize-none"
              />
              <button className="inline-flex items-center gap-3 bg-[#262626] text-white px-8 py-4 rounded-full font-display font-bold text-base uppercase hover:opacity-90 transition-opacity group">
                Send Message
                <span className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#262626] group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
