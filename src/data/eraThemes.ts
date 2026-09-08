import { EraId, EraTheme } from '../types';

export const ERA_THEMES: Record<EraId, EraTheme> = {
  ancient: {
    id: 'ancient',
    name: 'Ancient & Classical',
    title: 'Cradle of Empire & Bronze Shields',
    tagline: 'From the phalanxes of Sumer and Persian immortals to early Mediterranean clashes.',
    dateRange: '3000 BCE – 500 BCE',
    accentColor: '#8B6914',
    secondaryColor: '#D4AF37',
    borderColor: 'border-[#8B6914]/40',
    bgGradient: 'from-[#1A160F] via-[#12100C] to-[#0A0907]',
    motto: 'By bronze and spear the ancient cities stood.',
    description: 'The foundation of organized warfare: chariot shock tactics, early hoplite phalanxes, massed archery, and the siege circumvallation of antiquity.',
    bannerImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Shield'
  },
  macedonian: {
    id: 'macedonian',
    name: 'Alexander & Hellenistic',
    title: 'The Great Expedition to the Ends of the Earth',
    tagline: 'Philip II’s Sarissa phalanx and Alexander’s invincible Companion cavalry charge.',
    dateRange: '356 BCE – 146 BCE',
    accentColor: '#B8860B',
    secondaryColor: '#1E3A8A',
    borderColor: 'border-[#B8860B]/40',
    bgGradient: 'from-[#15130D] via-[#0E1524] to-[#08090E]',
    motto: 'Fortune favors the bold and the disciplined spear.',
    description: 'Revolution in combined arms warfare: the 18-foot Macedonian pike pinning the enemy line while heavy cavalry strikes the vulnerable flank in decisive hammer-and-anvil envelopment.',
    bannerImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Crown'
  },
  roman: {
    id: 'roman',
    name: 'Imperial Rome & Republic',
    title: 'Legions of Iron, Eagles of the Senate',
    tagline: 'Disciplined cohorts, testudo shield walls, and systematic military engineering.',
    dateRange: '509 BCE – 476 CE',
    accentColor: '#9E2A2B',
    secondaryColor: '#D4AF37',
    borderColor: 'border-[#9E2A2B]/40',
    bgGradient: 'from-[#1C0D0D] via-[#140F11] to-[#0A0708]',
    motto: 'Senatus Populusque Romanus — Through order, conquest.',
    description: 'The triumph of military standardization: cohortal organization, pilum javelins, gladius thrusting swords, and ruthless siege circumvallation across three continents.',
    bannerImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Landmark'
  },
  medieval: {
    id: 'medieval',
    name: 'Medieval & Feudal Warfare',
    title: 'Castles of Stone, Crusades and Chivalry',
    tagline: 'Armoured knights, trebuchet sieges, longbow volleys, and eastern cavalry raids.',
    dateRange: '500 CE – 1500 CE',
    accentColor: '#5C1D24',
    secondaryColor: '#8C6D37',
    borderColor: 'border-[#5C1D24]/40',
    bgGradient: 'from-[#170E10] via-[#100E12] to-[#09080A]',
    motto: 'Iron wills within fortresses of unyielding stone.',
    description: 'The era of fortress architecture, heavy cavalry shock charges, counter-weight siege artillery, and the emergence of gunpowder bombards at the twilight of the Middle Ages.',
    bannerImage: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Castle'
  },
  maratha: {
    id: 'maratha',
    name: 'Maratha Empire & Deccan',
    title: 'Hindavi Swarajya & Ganimi Kava',
    tagline: 'Chhatrapati Shivaji Maharaj, Sahyadri mountain fortresses, and swift guerrilla cavalry.',
    dateRange: '1645 CE – 1818 CE',
    accentColor: '#CD7F32',
    secondaryColor: '#E86A17',
    borderColor: 'border-[#CD7F32]/50',
    bgGradient: 'from-[#1F1710] via-[#17130F] to-[#0D0B08]',
    motto: 'Pratipada-chandra-lekheva — Ever increasing like the crescent moon.',
    description: 'The masterclass of asymmetric warfare: Ganimi Kava tactics, basalt hill forts of the Western Ghats (Raigad, Rajgad, Pratapgad), naval sea forts, and high-mobility light cavalry that broke imperial Mughal hegemony.',
    bannerImage: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Mountain'
  },
  napoleonic: {
    id: 'napoleonic',
    name: 'Napoleonic Era',
    title: 'La Grande Armée & The Master of War',
    tagline: 'Corps d’Armée maneuver, massed Grand Batteries, and the fate of Europe.',
    dateRange: '1799 CE – 1815 CE',
    accentColor: '#1E3A8A',
    secondaryColor: '#C7A254',
    borderColor: 'border-[#C7A254]/40',
    bgGradient: 'from-[#0D182E] via-[#0B101D] to-[#07090F]',
    motto: 'Impossible n’est pas français — Speed, maneuver, concentration.',
    description: 'The zenith of operational genius: division of armies into self-contained all-arms corps marching dispersed to feed and converging concentrated to conquer at Austerlitz, Jena, and Waterloo.',
    bannerImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Flame'
  },
  ww1: {
    id: 'ww1',
    name: 'World War I (Great War)',
    title: 'The Industrial Forge & Trenches of Mud',
    tagline: 'Machine guns, chemical gas, heavy artillery salvos, and the birth of armored tanks.',
    dateRange: '1914 CE – 1918 CE',
    accentColor: '#6E675F',
    secondaryColor: '#8B261E',
    borderColor: 'border-[#6E675F]/40',
    bgGradient: 'from-[#171614] via-[#111110] to-[#0A0A09]',
    motto: 'The war to end all wars — Industrial attrition unleashed.',
    description: 'The catastrophic transition to industrialized total war: entrenched trench networks from the Swiss border to the North Sea, relentless artillery barrages, and mechanized warfare.',
    bannerImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Crosshair'
  },
  ww2: {
    id: 'ww2',
    name: 'World War II',
    title: 'The Global Clash of Iron & Ideology',
    tagline: 'Blitzkrieg panzer spearheads, carrier task forces, radar, and atomic devastation.',
    dateRange: '1939 CE – 1945 CE',
    accentColor: '#8F2D24',
    secondaryColor: '#4B5320',
    borderColor: 'border-[#8F2D24]/40',
    bgGradient: 'from-[#1A0E0C] via-[#121410] to-[#090A09]',
    motto: 'Arsenal of freedom against totalitarian axis conquest.',
    description: 'The most vast and devastating conflict in recorded human history, fought across global land, sea, and air theaters from the Russian steppes and Pacific archipelagos to the deserts of North Africa.',
    bannerImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Compass'
  }
};

export const getEraTheme = (eraId?: EraId | string): EraTheme => {
  if (!eraId || !ERA_THEMES[eraId as EraId]) {
    return ERA_THEMES.ancient;
  }
  return ERA_THEMES[eraId as EraId];
};
