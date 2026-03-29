import talent1 from "@/assets/talents/talent-1.png";
import talent2 from "@/assets/talents/talent-2.png";
import talent3 from "@/assets/talents/talent-ashi-new.jpeg";
import talentJordan from "@/assets/talents/talent-jordan.jpg";
import talentNimo from "@/assets/talents/talent-nimo.jpg";
import talentPape from "@/assets/talents/talent-pape.jpg";
import talentGynamo from "@/assets/talents/talent-gynamo.png";
import talentMahi from "@/assets/talents/talent-mahi.jpeg";
import talentHamza from "@/assets/talents/talent-hamza.jpeg";
import talentKeyser from "@/assets/talents/talent-keyser.png";

export interface TalentSocial {
  platform: "instagram" | "youtube" | "tiktok" | "spotify";
  url: string;
}

export interface Talent {
  id: number;
  name: string;
  displayName: string;
  slug: string;
  image: string;
  bio: string;
  socials: TalentSocial[];
}

export const talents: Talent[] = [
  {
    id: 1,
    name: "NIMO",
    displayName: "Nimo",
    slug: "nimo",
    image: talentNimo,
    bio: "Geronimo, ook bekend als Nimo, brak door als content creator en is inmiddels ook actief als acteur in films en series op onder andere Pathé en Videoland. Met zijn natuurlijke en herkenbare stijl ontwikkelt hij daarnaast eigen formats en scoort hij met zijn alter ego Oom Guno, waarmee hij onder meer in de Ziggo Dome stond tijdens een show van rapper Cho. Zijn combinatie van humor en authenticiteit maakt hem breed inzetbaar binnen entertainment.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/geronimocomvalius" },
    ],
  },
  {
    id: 2,
    name: "FRAASIE",
    displayName: "Fraasie",
    slug: "fraasie",
    image: talent1,
    bio: "Fraasie is een Nederlandse producer, songwriter en contentmaker, en onderdeel van het populaire YouTube-collectief Supergaande. Met zijn herkenbare tag en miljoenen streams werkte hij samen met artiesten als Bilal Wahib, Boef en Lijpe, en bouwde hij een sterke positie op binnen de Nederlandse muziek- en contentwereld.\n\nNaast muziek is hij actief als creator, waar hij met formats, humor en storytelling een jong en betrokken publiek bereikt. Hij was onder meer te zien in producties voor HBO Max en NPO Start, waarin entertainment en bereik samenkomen.\n\nMet zijn combinatie van creativiteit, culturele aansluiting en veelzijdigheid beweegt Fraasie moeiteloos tussen muziek, content en merkcampagnes, en is hij een relevante stem binnen de nieuwe generatie makers.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/fraasie" },
    ],
  },
  {
    id: 3,
    name: "MAHI",
    displayName: "Mahi",
    slug: "mahi",
    image: talentMahi,
    bio: "Mahi Khalesi is een Nederlandse presentatrice en programmamaker met een achtergrond in de muziekindustrie. Na meer dan tien jaar als A&R manager bij onder andere Sony Music maakte ze de overstap naar media, waar ze uitgroeide tot een herkenbaar gezicht bij FunX en NPO Radio 1.\n\nZe is onder meer host van het FunX-format It's Complicated waar persoonlijke en maatschappelijke verhalen centraal staan. Met haar inhoudelijke aanpak en open stijl richt Mahi zich op thema's als identiteit, cultuur en maatschappelijke vraagstukken.\n\nTegelijkertijd bouwt ze actief aan haar eigen profiel door nieuwe formats en programma's te ontwikkelen, waarmee ze zich verder positioneert als een veelzijdige en divers inzetbare creator. Haar kracht ligt in het creëren van echte gesprekken en het toegankelijk maken van verhalen voor een breed publiek.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/mahikhalesi" },
    ],
  },
  {
    id: 4,
    name: "ASHI",
    displayName: "Ashi",
    slug: "ashi",
    image: talent3,
    bio: "Ashi is een creatieve maker en singer-songwriter die zich beweegt tussen muziek, events en content. Hij begon als MC en host op binnen- en buitenlandse events, organiseerde eigen clubnachten in Amsterdam met gasten als Central Cee en Travis Scott, en bracht eigen muziek uit, waaronder de tracks Bali en Antoni Antoni. Daarnaast schreef hij mee aan hits zoals Tout Est Bon van Boef en Numidia. Tegenwoordig richt Ashi zich vooral op contentcreatie, waarin humor, observatie en persoonlijkheid centraal staan, en bouwt hij aan een herkenbare online presence.",
    socials: [
      { platform: "tiktok", url: "https://www.tiktok.com/ashiworldwide" },
    ],
  },
  {
    id: 5,
    name: "GYNAMO",
    displayName: "Gino (Gynamo)",
    slug: "gynamo",
    image: talentGynamo,
    bio: "Gino is een content creator en streamer die gaming en sport combineert met energie, humor en directe interactie. Live streaming vormt een belangrijk onderdeel, maar hij richt zich daarnaast steeds meer op longform content, zoals YouTube-video's, waarin hij formats verder uitbouwt. Met deze mix van live en video bouwt hij aan een betrokken en loyale community.",
    socials: [
      { platform: "tiktok", url: "https://www.tiktok.com/gynamo_" },
    ],
  },
  {
    id: 6,
    name: "HAMZA\nOTHMAN",
    displayName: "Hamza Othman",
    slug: "hamza-othman",
    image: talentHamza,
    bio: "Hamza Othman is een Nederlandse acteur die zich heeft ontwikkeld tot een veelzijdige naam in film en televisie. Hij brak door met zijn rol als Ilyas in GTST en volgde dat op met projecten zoals H3L, Sihame, Costa!!, Zina, Ferry 2 en recent Wraak, waarmee hij een Gouden Film-status behaalde. Hamza kiest bewust rollen die bij hem passen, waardoor zijn groei als acteur authentiek en gelaagd aanvoelt. Zijn rustige maar overtuigende presence maakt hem een opvallende en betrouwbare kracht op het scherm.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/hamzaothman_" },
    ],
  },
  {
    id: 7,
    name: "SIGOURNEY K",
    displayName: "Sigourney K.",
    slug: "sigourney-k",
    image: talent2,
    bio: "Sigourney K. (Sigourney Korper) is een Nederlandse zangeres en songwriter die zich heeft ontwikkeld tot een vaste naam binnen de Nederlandstalige pop- en urban scene. Ze begon haar carrière als danseres, onder andere bij So You Think You Can Dance, en maakte later de overstap naar muziek.\n\nHaar doorbraak kwam in 2021 met \"Vreemde Voor Mij\" met Sevn Alias, gevolgd door de grote hit \"Vluchtstrook\" met Kris Kross Amsterdam en Antoon; het meest gestreamde nummer van Nederland in 2022.\n\nSindsdien werkte ze samen met artiesten als Ronnie Flex, Kevin en Jayh, en scoorde ze meerdere succesvolle releases zoals \"100 SMSjes\" en \"Leidseplein\". Naast haar eigen muziek schrijft ze ook voor andere artiesten en bouwt ze gestaag aan een veelzijdige carrière binnen de Nederlandse muziekindustrie.\n\nMet haar herkenbare stem, sterke pophooks en gevoel voor melodie heeft Sigourney K. zich gepositioneerd als een consistente hitmaker met brede appeal.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/sigourneyk" },
    ],
  },
  {
    id: 8,
    name: "P.APE",
    displayName: "p.APE",
    slug: "p-ape",
    image: talentPape,
    bio: "p.APE is een Nederlandse producer bekend om zijn melodische, warme en toegankelijke sound. Hij werkt nauw samen met artiesten zoals ADF Samski, Milolaathetlukken, Kaya Imani en Ronnie Flex, en draagt met zijn producties bij aan het karakter en de sfeer van hun muziek. Zijn stijl combineert muzikaliteit en ritme met een moderne, relevante sound, waarmee hij zich stap voor stap als een herkenbare en betrouwbare producer binnen de Nederlandse scene profileert.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/longlivepape" },
    ],
  },
  {
    id: 9,
    name: "JORDAN KNOWS",
    displayName: "Jordan Knows",
    slug: "jordan-knows",
    image: talentJordan,
    bio: "Jordan Knows is een Nederlandse producer en songwriter die zich ontwikkelde tot een vaste naam binnen de urban scene. Na zijn opleiding aan de Herman Brood Academie brak hij door met producties voor artiesten als Leafs, Mula B, Yssi SB en Dopebwoy, en werkte hij ook mee aan muziek van Lil Kleine.\n\nZijn sound is melodisch, modern en internationaal georiënteerd, met een sterke focus op sfeer en samenwerking met de artiest. Met een groeiend aantal succesvolle releases en samenwerkingen bouwt hij aan een veelzijdige en herkenbare positie binnen de scene, zowel in Nederland als daarbuiten.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/jordanknowss" },
    ],
  },
  {
    id: 10,
    name: "KEYSER\nSOZE",
    displayName: "Keyser Soze",
    slug: "keyser-soze",
    image: talentKeyser,
    bio: "Keyser Soze is een gevestigde producer binnen de Nederlandse rapscene. Zijn sound is strak en doelgericht, altijd in dienst van de artiest. Met tracks voor onder anderen Boef en Ashafar heeft hij zich ontwikkeld tot een betrouwbare naam achter de schermen.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/keysersoze" },
    ],
  },
];
