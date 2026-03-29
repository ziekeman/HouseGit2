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
    <div className="min-h-screen bg-background">
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

      {/* Hero image */}
      <div className="relative w-full max-w-2xl mx-auto pt-20 px-6">
        <div className="aspect-[3/4] rounded-2xl overflow-hidden">
          <img
            src={talent.image}
            alt={talent.displayName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social buttons overlaid at bottom of image */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {talent.socials.map((social) => {
            const Icon = platformIcons[social.platform];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-background/90 backdrop-blur-sm rounded-full text-foreground hover:bg-background transition-colors font-body text-sm font-medium"
              >
                <Icon size={18} />
                {platformLabels[social.platform]}
              </a>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="font-agrandir text-4xl sm:text-5xl font-extrabold text-primary uppercase tracking-[-0.04em] mb-8">
          {talent.displayName}
        </h1>

        <div className="space-y-4">
          {talent.bio.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-foreground/80 text-base leading-relaxed font-body">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalentPage;
