import { useParams, Link } from "react-router-dom";
import { talents } from "@/data/talents";
import { Instagram, Youtube, Music, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import tiktokIcon from "@/assets/tiktok-icon.svg";

const TikTokIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <img src={tiktokIcon} alt="TikTok" width={size} height={size} className={className} />
);

const platformIcons: Record<string, React.ElementType> = {
  instagram: Instagram,
  youtube: Youtube,
  tiktok: TikTokIcon,
  spotify: Music,
};

const platformLabels: Record<string, string> = {
  instagram: "Instagram",
  youtube: "YouTube",
  tiktok: "TikTok",
  spotify: "Spotify",
};

const TalentPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const talent = talents.find((t) => t.slug === slug);

  if (!talent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-agrandir text-4xl font-extrabold text-primary mb-4">
            Talent niet gevonden
          </h1>
          <Link to="/#talents">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="mr-2" size={18} />
              Terug
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:h-screen bg-background flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden p-3 pt-14 lg:p-[50px]">
      {/* Back button */}
      <div className="fixed top-3 left-3 lg:top-6 lg:left-6 z-50">
        <Link to="/#talents">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-accent h-9 w-9 lg:h-10 lg:w-10"
          >
            <ArrowLeft size={16} />
          </Button>
        </Link>
      </div>

      {/* Left: Image */}
      <div className="w-full lg:w-[45%] h-[35vh] lg:h-full flex-shrink-0 flex items-center p-1 lg:p-6">
        <div className="w-full h-full lg:h-[90%] rounded-2xl overflow-hidden">
          <img
            src={talent.image}
            alt={talent.displayName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-4 py-5 lg:px-20 lg:py-10">
        <h1 className="font-agrandir text-2xl sm:text-3xl lg:text-5xl font-extrabold text-primary uppercase tracking-[-0.04em] mb-3 lg:mb-6">
          {talent.displayName}
        </h1>

        <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-8">
          {talent.bio.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-foreground/70 text-xs lg:text-base leading-relaxed font-body">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Social buttons */}
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {talent.socials.map((social) => {
            const Icon = platformIcons[social.platform];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 lg:gap-2 px-3 lg:px-5 py-2 lg:py-2.5 bg-muted rounded-full text-foreground hover:bg-accent transition-colors font-body text-xs lg:text-sm font-medium"
              >
                <Icon size={14} className="lg:w-[18px] lg:h-[18px]" />
                {platformLabels[social.platform]}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TalentPage;
