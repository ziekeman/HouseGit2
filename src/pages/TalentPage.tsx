import { useParams, Link } from "react-router-dom";
import { talents } from "@/data/talents";
import { Instagram, Youtube, Music, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const platformIcons: Record<string, React.ElementType> = {
  instagram: Instagram,
  youtube: Youtube,
  tiktok: Music,
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
    <div className="h-screen bg-background flex flex-col lg:flex-row overflow-hidden">
      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <Link to="/#talents">
          <Button
            variant="outline"
            className="rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
          >
            <ArrowLeft size={18} />
          </Button>
        </Link>
      </div>

      {/* Left: Image */}
      <div className="w-full lg:w-[38%] h-56 sm:h-72 lg:h-full p-4 lg:p-6 flex-shrink-0 flex items-center">
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <img
            src={talent.image}
            alt={talent.displayName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-[62%] flex flex-col justify-center px-6 py-8 lg:px-12 lg:py-10 overflow-y-auto">
        <h1 className="font-agrandir text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary uppercase tracking-[-0.04em] mb-6">
          {talent.displayName}
        </h1>

        <div className="space-y-3 mb-8">
          {talent.bio.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-foreground/70 text-sm lg:text-base leading-relaxed font-body">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Social buttons */}
        <div className="flex flex-wrap gap-3">
          {talent.socials.map((social) => {
            const Icon = platformIcons[social.platform];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-muted rounded-full text-foreground hover:bg-accent transition-colors font-body text-sm font-medium"
              >
                <Icon size={18} />
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
