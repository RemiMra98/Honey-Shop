export interface WeightOption {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  origin: string;
  region: string;
  floralNotes: string[];
  color: string;
  weightOptions: WeightOption[];
  harvestMonth: number;
  harvestSeason: 'printemps' | 'ete' | 'automne' | 'hiver';
  stockLevel: 'high' | 'medium' | 'low' | 'out';
  isSeasonal: boolean;
  isFeatured: boolean;
  pairings: string[];
  texture: string;
  intensity: number; // 1-5
}

export interface HiveTier {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  period: string;
  icon: string;
  benefits: string[];
  featured: boolean;
  color: string;
  cta: string;
}

export interface SeasonalMonth {
  month: number;
  monthName: string;
  monthShort: string;
  blooming: string[];
  honeys: string[];
  description: string;
  isActive: boolean;
  season: 'winter' | 'spring' | 'summer' | 'autumn';
}

export interface HoneyPairing {
  id: string;
  honeyName: string;
  honeySlug: string;
  category: string;
  pairingWith: string;
  description: string;
  gradient: string;
  icon: string;
}

// ─── PRODUCTS ──────────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: 'miel-printemps',
    name: 'Miel de Printemps',
    slug: 'miel-de-printemps',
    description: 'Un miel floral et délicat, reflet des premières floraisons de nos prairies.',
    longDescription: 'Récolté au cœur du printemps, ce miel capte l\'essence des premières fleurs de la saison — pissenlits, cerisiers, pruniers et fruitiers en fleurs. Sa couleur dorée claire et sa texture fluide en font un miel d\'exception, idéal pour débuter la découverte de nos productions.',
    origin: 'Prairies du Lubéron',
    region: 'Provence',
    floralNotes: ['Pissenlit', 'Cerisier', 'Acacia', 'Trèfle'],
    color: '#F5C842',
    weightOptions: [
      { weight: '250g', price: 12 },
      { weight: '500g', price: 22 },
    ],
    harvestMonth: 5,
    harvestSeason: 'printemps',
    stockLevel: 'high',
    isSeasonal: true,
    isFeatured: true,
    pairings: ['Yaourt grec', 'Toast brioche', 'Fromage frais', 'Thé vert'],
    texture: 'Fluide et limpide',
    intensity: 2,
  },
  {
    id: 'miel-montagne',
    name: 'Miel de Montagne',
    slug: 'miel-de-montagne',
    description: 'Né des alpages et des herbes sauvages d\'altitude, d\'une richesse aromatique rare.',
    longDescription: 'Nos ruches d\'altitude capturent la quintessence des herbes aromatiques de montagne. Thym sauvage, serpolet, romarin des hauteurs se mêlent dans ce miel d\'une complexité remarquable. Sa cristallisation naturelle témoigne de sa pureté.',
    origin: 'Alpages des Alpes-de-Haute-Provence',
    region: 'Alpes',
    floralNotes: ['Thym sauvage', 'Serpolet', 'Romarin', 'Lavande'],
    color: '#C8920D',
    weightOptions: [
      { weight: '250g', price: 15 },
      { weight: '500g', price: 28 },
    ],
    harvestMonth: 7,
    harvestSeason: 'ete',
    stockLevel: 'medium',
    isSeasonal: true,
    isFeatured: true,
    pairings: ['Fromage de chèvre', 'Noix', 'Pain de campagne', 'Tisane de montagne'],
    texture: 'Semi-cristallisé, onctueux',
    intensity: 4,
  },
  {
    id: 'miel-chataignier',
    name: 'Miel de Châtaignier',
    slug: 'miel-de-chataignier',
    description: 'Puissant et tannique, ce miel sombre révèle une personnalité affirmée et persistante.',
    longDescription: 'Le miel de châtaignier est le plus caractéristique de nos productions automnales. Sa couleur brun sombre, presque noire, cache une palette aromatique d\'une grande richesse : notes boisées, légèrement amères, avec une longue finale en bouche. Un miel pour connaisseurs.',
    origin: 'Forêts de Châtaigniers de l\'Ardèche',
    region: 'Ardèche',
    floralNotes: ['Châtaignier', 'Fougère', 'Sous-bois'],
    color: '#5C2E00',
    weightOptions: [
      { weight: '250g', price: 14 },
      { weight: '500g', price: 26 },
    ],
    harvestMonth: 8,
    harvestSeason: 'ete',
    stockLevel: 'medium',
    isSeasonal: true,
    isFeatured: false,
    pairings: ['Fromage bleu', 'Charcuterie', 'Pain aux noix', 'Whisky tourbé'],
    texture: 'Fluide, visqueux',
    intensity: 5,
  },
  {
    id: 'miel-lavande',
    name: 'Miel de Lavande',
    slug: 'miel-de-lavande',
    description: 'L\'emblème de la Provence : floral, délicat, avec cette signature lavande inoubliable.',
    longDescription: 'Récolté au cœur de l\'été provençal, quand les champs de lavande sont en pleine efflorescence, ce miel blanc ivoire cristallise rapidement et développe une texture crémeuse d\'une douceur incomparable. Son parfum floral est d\'une finesse exquise.',
    origin: 'Plateaux de Valensole',
    region: 'Provence',
    floralNotes: ['Lavande vraie', 'Sauge', 'Romarin', 'Thym'],
    color: '#9B7FD4',
    weightOptions: [
      { weight: '250g', price: 18 },
      { weight: '500g', price: 34 },
    ],
    harvestMonth: 7,
    harvestSeason: 'ete',
    stockLevel: 'low',
    isSeasonal: true,
    isFeatured: true,
    pairings: ['Camembert', 'Crêpes', 'Infusion', 'Panna cotta'],
    texture: 'Cristallisé fin, crémeux',
    intensity: 3,
  },
  {
    id: 'miel-foret',
    name: 'Miel de Forêt',
    slug: 'miel-de-foret',
    description: 'Un miellat mystérieux et profond, issu des feuillus et résineux de nos forêts centenaires.',
    longDescription: 'Produit non pas à partir du nectar des fleurs mais du miellat des arbres — chênes, épicéas, sapins — ce miel de forêt est d\'une complexité extraordinaire. Notes résinées, boisées, avec une légère acidité fruitée. Un produit rare et précieux.',
    origin: 'Forêts des Vosges',
    region: 'Vosges',
    floralNotes: ['Sapin', 'Épicéa', 'Chêne', 'Hêtre'],
    color: '#3D1F00',
    weightOptions: [
      { weight: '250g', price: 13 },
      { weight: '500g', price: 24 },
    ],
    harvestMonth: 9,
    harvestSeason: 'automne',
    stockLevel: 'high',
    isSeasonal: false,
    isFeatured: false,
    pairings: ['Plateau de fromages', 'Viandes rôties', 'Pain de seigle', 'Bière artisanale'],
    texture: 'Fluide, légèrement visqueux',
    intensity: 4,
  },
  {
    id: 'miel-acacia',
    name: 'Miel d\'Acacia',
    slug: 'miel-d-acacia',
    description: 'Le plus doux et le plus pur : clarté cristalline, saveur délicate, nectar de faux-acacia.',
    longDescription: 'Le miel d\'acacia est le miel des gourmets sensibles. Issu du Robinier faux-acacia, il reste liquide très longtemps grâce à sa haute teneur en fructose. Sa couleur eau de roche et sa douceur extrême en font un miel universel, apprécié de tous.',
    origin: 'Vallées de la Drôme',
    region: 'Drôme',
    floralNotes: ['Robinier', 'Tilleul', 'Trèfle blanc'],
    color: '#FFF3C0',
    weightOptions: [
      { weight: '250g', price: 16 },
      { weight: '500g', price: 30 },
    ],
    harvestMonth: 5,
    harvestSeason: 'printemps',
    stockLevel: 'high',
    isSeasonal: false,
    isFeatured: true,
    pairings: ['Yaourt', 'Tisane', 'Fromage blanc', 'Fruits frais'],
    texture: 'Très fluide, cristallise lentement',
    intensity: 1,
  },
  {
    id: 'miel-thym',
    name: 'Miel de Thym',
    slug: 'miel-de-thym',
    description: 'Intense et aromatique, le trésor des garrigues méditerranéennes, au goût inoubliable.',
    longDescription: 'Le miel de thym est une rareté absolue — il faut des conditions météorologiques parfaites et une floraison abondante pour le produire. Ses arômes puissants, sa richesse en antioxydants et sa réputation millénaire en font notre produit le plus précieux.',
    origin: 'Garrigues du Mont Ventoux',
    region: 'Vaucluse',
    floralNotes: ['Thym', 'Sarriette', 'Origan sauvage', 'Ciste'],
    color: '#E8A020',
    weightOptions: [
      { weight: '250g', price: 20 },
      { weight: '500g', price: 38 },
    ],
    harvestMonth: 6,
    harvestSeason: 'ete',
    stockLevel: 'low',
    isSeasonal: true,
    isFeatured: false,
    pairings: ['Fromage Brebis', 'Agneau rôti', 'Cocktail Spritz', 'Tapenade'],
    texture: 'Semi-cristallisé, granuleux fin',
    intensity: 5,
  },
  {
    id: 'miel-cremeux',
    name: 'Miel Crémeux',
    slug: 'miel-cremeux',
    description: 'La texture la plus douce du monde — un miel toutes fleurs travaillé à l\'ancienne.',
    longDescription: 'Notre miel crémeux est obtenu par une technique artisanale de cristallisation contrôlée, héritée de Marcel. Un mélange de nos miels toutes fleurs est lentement brassé à basse température jusqu\'à obtenir cette texture onctueuse, semblable à une pommade de soie.',
    origin: 'Mélange de nos terroirs',
    region: 'Multi-terroirs',
    floralNotes: ['Toutes fleurs', 'Printemps', 'Été', 'Polyfloral'],
    color: '#F5E6A3',
    weightOptions: [
      { weight: '250g', price: 11 },
      { weight: '500g', price: 20 },
    ],
    harvestMonth: 6,
    harvestSeason: 'ete',
    stockLevel: 'high',
    isSeasonal: false,
    isFeatured: false,
    pairings: ['Tartines', 'Pâtisseries', 'Porridge', 'Crêpes'],
    texture: 'Crémeux, onctueux, fondant',
    intensity: 2,
  },
];

// ─── HIVE ADOPTION TIERS ────────────────────────────────────────────────────────

export const hiveTiers: HiveTier[] = [
  {
    id: 'ami-abeilles',
    name: 'Ami des Abeilles',
    subtitle: 'Pour découvrir le monde des ruches',
    price: 49,
    period: 'an',
    icon: '🐝',
    benefits: [
      'Certificat d\'adoption personnalisé',
      'Votre prénom sur la ruche',
      'Newsletter mensuelle du rucher',
      'Accès au journal de votre ruche',
      '250g de miel de votre ruche',
    ],
    featured: false,
    color: 'honey',
    cta: 'Adopter pour 49€/an',
  },
  {
    id: 'parrain-marraine',
    name: 'Parrain / Marraine',
    subtitle: 'L\'engagement des vrais amoureux des abeilles',
    price: 99,
    period: 'an',
    icon: '🍯',
    benefits: [
      'Tout ce qui est inclus dans Ami des Abeilles',
      '500g de miel de votre ruche (x2 récoltes)',
      'Photo de votre ruche chaque trimestre',
      'Invitation à la journée portes ouvertes',
      'Accès prioritaire aux miels en édition limitée',
      'Plaquette dédicacée par Marcel',
    ],
    featured: true,
    color: 'amber',
    cta: 'Devenir Parrain / Marraine',
  },
  {
    id: 'gardien-rucher',
    name: 'Gardien du Rucher',
    subtitle: 'Pour les passionnés qui souhaitent tout vivre',
    price: 199,
    period: 'an',
    icon: '👑',
    benefits: [
      'Tout ce qui est inclus dans Parrain / Marraine',
      '1kg de miel (x2 récoltes)',
      '1 pot de miel en édition limitée',
      'Visite privée avec Marcel (1 journée)',
      'Formation initiation apiculture (2h)',
      'Votre ruche nommée et photographiée',
      'Rapport complet annuel de santé de la ruche',
    ],
    featured: false,
    color: 'forest',
    cta: 'Devenir Gardien',
  },
];

// ─── SEASONAL CALENDAR ──────────────────────────────────────────────────────────

export const seasonalCalendar: SeasonalMonth[] = [
  {
    month: 1,
    monthName: 'Janvier',
    monthShort: 'Jan',
    blooming: ['Noisetier (fin de mois)', 'Hellébore'],
    honeys: [],
    description: 'Les abeilles hivernent en grappe. Le rucher se repose.',
    isActive: false,
    season: 'winter',
  },
  {
    month: 2,
    monthName: 'Février',
    monthShort: 'Fév',
    blooming: ['Noisetier', 'Saule Marsault', 'Premiers crocus'],
    honeys: [],
    description: 'Premiers vols de nettoyage. Les abeilles recommencent à butiner timidement.',
    isActive: false,
    season: 'winter',
  },
  {
    month: 3,
    monthName: 'Mars',
    monthShort: 'Mar',
    blooming: ['Prunelier', 'Cerisier', 'Pissenlit', 'Forsythia'],
    honeys: [],
    description: 'Le réveil du printemps. Les premières fleurs nourrissent les colonies qui grossissent.',
    isActive: false,
    season: 'spring',
  },
  {
    month: 4,
    monthName: 'Avril',
    monthShort: 'Avr',
    blooming: ['Cerisier', 'Pommier', 'Colza', 'Trèfle', 'Pissenlit'],
    honeys: ['Miel de Printemps (début de récolte)'],
    description: 'Grande miellée de printemps. Les colonies sont en pleine effervescence.',
    isActive: false,
    season: 'spring',
  },
  {
    month: 5,
    monthName: 'Mai',
    monthShort: 'Mai',
    blooming: ['Acacia (Robinier)', 'Trèfle blanc', 'Framboisier'],
    honeys: ['Miel de Printemps', 'Miel d\'Acacia'],
    description: 'Le mois de l\'acacia ! Miellée intense et parfumée. Récolte principale de printemps.',
    isActive: false,
    season: 'spring',
  },
  {
    month: 6,
    monthName: 'Juin',
    monthShort: 'Juin',
    blooming: ['Thym', 'Ciste', 'Sarriette', 'Tilleul'],
    honeys: ['Miel de Thym', 'Miel Crémeux'],
    description: 'La garrigue s\'embrase. Le thym offre sa floraison précieuse et rare.',
    isActive: false,
    season: 'summer',
  },
  {
    month: 7,
    monthName: 'Juillet',
    monthShort: 'Jul',
    blooming: ['Lavande', 'Thym sauvage', 'Serpolet', 'Tournesol'],
    honeys: ['Miel de Lavande', 'Miel de Montagne'],
    description: 'Apogée estival. La lavande de Valensole et les herbes d\'alpages sont en fleurs.',
    isActive: true,
    season: 'summer',
  },
  {
    month: 8,
    monthName: 'Août',
    monthShort: 'Aoû',
    blooming: ['Châtaignier', 'Bruyère callune', 'Sarrasin'],
    honeys: ['Miel de Châtaignier', 'Miel de Montagne'],
    description: 'La châtaigneraie ardéchoise livre ses trésors sombres et intenses.',
    isActive: false,
    season: 'summer',
  },
  {
    month: 9,
    monthName: 'Septembre',
    monthShort: 'Sep',
    blooming: ['Bruyère', 'Lierre', 'Aster'],
    honeys: ['Miel de Forêt', 'Miel de Châtaignier'],
    description: 'Dernières récoltes automnales. Le lierre nourrit les abeilles pour l\'hiver.',
    isActive: false,
    season: 'autumn',
  },
  {
    month: 10,
    monthName: 'Octobre',
    monthShort: 'Oct',
    blooming: ['Lierre', 'Bruyère tardive'],
    honeys: ['Miel de Forêt'],
    description: 'Préparation à l\'hivernage. Les ruches sont enrichies pour passer l\'hiver.',
    isActive: false,
    season: 'autumn',
  },
  {
    month: 11,
    monthName: 'Novembre',
    monthShort: 'Nov',
    blooming: [],
    honeys: [],
    description: 'Les abeilles se regroupent. Surveillance des ruches et traitement anti-varroa.',
    isActive: false,
    season: 'autumn',
  },
  {
    month: 12,
    monthName: 'Décembre',
    monthShort: 'Déc',
    blooming: ['Hellébore (fin)'],
    honeys: [],
    description: 'Silence du rucher. Les abeilles vivent sur leurs réserves de miel.',
    isActive: false,
    season: 'winter',
  },
];

// ─── HONEY PAIRINGS ─────────────────────────────────────────────────────────────

export const honeyPairings: HoneyPairing[] = [
  {
    id: 'fromage-chevre',
    honeyName: 'Miel d\'Acacia',
    honeySlug: 'miel-d-acacia',
    category: 'Fromage',
    pairingWith: 'Chèvre frais & Crottin de Chavignol',
    description: 'La douceur cristalline de l\'acacia sublime l\'acidité légère du chèvre. Un accord classique porté à son apogée. Quelques gouttes suffisent.',
    gradient: 'from-amber-100 to-yellow-50',
    icon: '🧀',
  },
  {
    id: 'charcuterie',
    honeyName: 'Miel de Châtaignier',
    honeySlug: 'miel-de-chataignier',
    category: 'Charcuterie',
    pairingWith: 'Jambon de Bayonne & Coppa',
    description: 'Les notes tanniques et boisées du châtaignier créent une tension exquise avec le gras fondu et le sel du jambon. L\'accord terre-forêt.',
    gradient: 'from-orange-900 to-amber-800',
    icon: '🥩',
  },
  {
    id: 'cocktail',
    honeyName: 'Miel de Thym',
    honeySlug: 'miel-de-thym',
    category: 'Cocktail',
    pairingWith: 'Whisky single malt & Spritz aux herbes',
    description: 'Dissous dans un whisky tourbé ou un gin aux botaniques méditerranéens, le thym révèle des arômes insoupçonnés. La mixologie artisanale par excellence.',
    gradient: 'from-amber-600 to-orange-500',
    icon: '🥃',
  },
  {
    id: 'dessert',
    honeyName: 'Miel de Lavande',
    honeySlug: 'miel-de-lavande',
    category: 'Dessert',
    pairingWith: 'Panna cotta & Tarte aux fruits',
    description: 'La lavande cristallisée apporte une note florale aérienne aux desserts à base de crème. Quelques cristaux sur une panna cotta : la Provence en bouche.',
    gradient: 'from-purple-200 to-lavender-100',
    icon: '🍮',
  },
  {
    id: 'fromage-affine',
    honeyName: 'Miel de Montagne',
    honeySlug: 'miel-de-montagne',
    category: 'Fromage Affiné',
    pairingWith: 'Comté 24 mois & Beaufort d\'Alpage',
    description: 'Le miel de montagne et les fromages d\'alpages partagent le même terroir. Cet accord de terroir est d\'une cohérence absolue : herbes, cristaux de sel, noisette.',
    gradient: 'from-yellow-700 to-amber-600',
    icon: '🏔️',
  },
  {
    id: 'pain-artisan',
    honeyName: 'Miel Crémeux',
    honeySlug: 'miel-cremeux',
    category: 'Pain Artisan',
    pairingWith: 'Pain au levain & Brioche vendéenne',
    description: 'La texture onctueuse du miel crémeux épouse la mie alvéolée du pain au levain. Tartinez généreusement, sans modération. C\'est l\'accord de l\'enfance retrouvée.',
    gradient: 'from-amber-100 to-cream-warm',
    icon: '🍞',
  },
];

// ─── TIMELINE ───────────────────────────────────────────────────────────────────

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  icon: string;
}

export const historyTimeline: TimelineEvent[] = [
  {
    year: 1987,
    title: 'Création du Rucher',
    description: 'Marcel installe ses premières ruches sur les terres familiales du Lubéron. Trois ruches, une passion, un rêve.',
    icon: '🌱',
  },
  {
    year: 1992,
    title: 'Les premières récoltes',
    description: 'La famille commence à partager ses miels avec les voisins, puis au marché de Pertuis. Le bouche-à-oreille fait le reste.',
    icon: '🍯',
  },
  {
    year: 1995,
    title: 'Certification Agriculture Biologique',
    description: 'Le rucher obtient sa première certification bio. Une conviction profonde que pratiquait Marcel bien avant que ce soit à la mode.',
    icon: '🌿',
  },
  {
    year: 2003,
    title: 'Expansion vers les Alpes',
    description: 'Les premières ruches transhumantes rejoignent les alpages. Le miel de montagne devient la fierté du rucher.',
    icon: '🏔️',
  },
  {
    year: 2010,
    title: '12 ruches actives',
    description: 'Le rucher atteint sa taille actuelle. Sarah, la fille de Marcel, rejoint l\'aventure après ses études d\'apiculture.',
    icon: '🐝',
  },
  {
    year: 2018,
    title: 'Le programme d\'adoption',
    description: 'Lancement du programme "Adoptez une Ruche" pour connecter les amoureux du miel directement aux abeilles.',
    icon: '❤️',
  },
  {
    year: 2024,
    title: 'La boutique en ligne',
    description: 'Le rucher ouvre ses portes au monde entier. De la ruche à votre table, directement, sans intermédiaire.',
    icon: '🌍',
  },
];
