export type EraId = 
  | 'ancient' 
  | 'macedonian' 
  | 'roman' 
  | 'medieval' 
  | 'maratha' 
  | 'napoleonic' 
  | 'ww1' 
  | 'ww2';

export interface ImageMeta {
  title: string;
  caption: string;
  creator?: string;
  date?: string;
  source: string;
  license: string;
  credit: string;
  alt: string;
}

export interface EraTheme {
  id: EraId;
  name: string;
  title: string;
  tagline: string;
  dateRange: string;
  accentColor: string;
  secondaryColor: string;
  borderColor: string;
  bgGradient: string;
  motto: string;
  description: string;
  bannerImage: string;
  iconName: string;
}

export interface BattlePhase {
  phase: string;
  time?: string;
  title: string;
  description: string;
}

export interface Battle {
  id: string;
  name: string;
  altNames?: string;
  tier: 'featured' | 'standard';
  dates: string;
  year: number;
  location: string;
  region?: string;
  conflict: string;
  war?: string;
  campaign?: string;
  era: EraId;
  theatre?: string;
  outcome: string;
  significance: string;
  summary?: string;
  background?: string;
  causes?: string;
  strategicObjectives?: string;
  terrain?: string;
  mapVariant?: number;
  tacticalPoints?: string[];
  commanders: {
    side1?: string;
    side2?: string;
    allied?: string;
    axis?: string;
    [key: string]: string | undefined;
  };
  side1: {
    label: string;
    forces: string;
    commanders?: string[];
    composition?: string[];
  };
  side2: {
    label: string;
    forces: string;
    commanders?: string[];
    composition?: string[];
  };
  casualties: {
    value: string;
    label: string;
  }[];
  timelinePhases?: BattlePhase[];
  turningPoint?: string;
  aftermath?: string;
  related: string[];
  image?: string;
  imageMeta?: ImageMeta;
}

export interface Commander {
  id: string;
  name: string;
  category: 'military' | 'political';
  side: string;
  nation: string;
  role: string;
  title?: string;
  rank?: string;
  birth?: string;
  death?: string;
  birthplace?: string;
  initials: string;
  color: string;
  era: EraId;
  bio: string;
  doctrine: string;
  majorBattles: string[];
  majorCampaigns?: string[];
  achievements?: string[];
  legacy?: string;
  image?: string;
  imageMeta?: ImageMeta;
}

export interface ArmyUnit {
  name: string;
  role: string;
  strength?: string;
  description: string;
}

export interface Army {
  id: string;
  name: string;
  era: EraId;
  nation: string;
  period: string;
  summary: string;
  commandStructure: string;
  units: ArmyUnit[];
  equipment: {
    weapons: string[];
    armor: string[];
    artilleryOrSiege?: string[];
  };
  tactics: {
    doctrine: string;
    formations: string[];
    strengths: string[];
    weaknesses: string[];
  };
  image?: string;
  imageMeta?: ImageMeta;
}

export interface CampaignTimelineItem {
  date: string;
  title: string;
  detail: string;
}

export interface Campaign {
  id: string;
  name: string;
  date: string;
  yearRange: string;
  theatre: string;
  era: EraId;
  nation: string;
  commanders: string[];
  armies?: string[];
  objective: string;
  outcome: string;
  geographicArea: string;
  marchRoutes?: string[];
  majorBattles: string[];
  politicalConsequences?: string;
  militaryConsequences?: string;
  timeline?: CampaignTimelineItem[];
  related: string[];
  image?: string;
  imageMeta?: ImageMeta;
}

export interface FortSiege {
  date: string;
  attacker: string;
  defender: string;
  result: string;
  notes: string;
}

export interface FortArchitecture {
  type?: string;
  walls?: string;
  gates?: string[];
  bastions?: string[];
  waterSystems?: string;
  specialFeatures?: string;
}

export interface Fort {
  id: string;
  name: string;
  marathiName?: string;
  altNames?: string;
  location: string;
  coordinates?: { lat: number; lng: number } | string;
  district?: string;
  elevation?: string;
  era: EraId;
  builder?: string;
  built?: string;
  ownership?: string[];
  strategicPurpose?: string;
  militaryPurpose?: string;
  history?: string;
  architecture: string | FortArchitecture;
  majorSieges?: FortSiege[];
  condition?: string;
  significance: string;
  relatedBattles?: string[];
  relatedCommanders?: string[];
  image?: string;
  imageMeta?: ImageMeta;
}

export interface Battlefield {
  id: string;
  name: string;
  battleName: string;
  location: string;
  region: string;
  coordinates?: string;
  era: EraId;
  terrain: string;
  strategicGeography: string;
  tacticalImpact: string;
  commanders: string[];
  modernCondition: string;
  memorials: string;
  image?: string;
  imageMeta?: ImageMeta;
}

export interface Weapon {
  id: string;
  name: string;
  category: 'ancient' | 'maratha' | 'napoleonic' | 'tanks' | 'aircraft' | 'naval' | 'smallArms';
  era: EraId;
  nation: string;
  specs: Record<string, string>;
  notes: string;
  image?: string;
  imageMeta?: ImageMeta;
}

export interface TimelineEvent {
  id: string;
  year: string;
  numericYear: number;
  date: string;
  era: EraId;
  title: string;
  detail: string;
  location?: string;
  relatedBattle?: string;
  relatedCommander?: string;
  relatedCampaign?: string;
  image?: string;
}

export interface Country {
  id: string;
  name: string;
  side: 'allied' | 'axis' | 'neutral';
  flag: string;
  leader: string;
  militaryDeaths: string;
  civilianDeaths: string;
  totalDeaths: string;
  mobilised: string;
  summary: string;
}

export interface GlossaryTerm {
  term: string;
  era?: EraId;
  def: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface BookRecommendation {
  title: string;
  author: string;
  era?: string;
  note: string;
}

export interface DocumentaryRecommendation {
  title: string;
  era?: string;
  note: string;
}
